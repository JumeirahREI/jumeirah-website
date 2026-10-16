import assert from "node:assert/strict";
import { spawn, spawnSync } from "node:child_process";
import { once } from "node:events";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { setTimeout } from "node:timers/promises";

const root = fileURLToPath(new URL("../", import.meta.url));
const submissions = [];
let rejectSubmission = false;
const sales = createServer(async (request, response) => {
  let body = "";
  for await (const chunk of request) body += chunk;
  submissions.push({
    method: request.method,
    url: request.url,
    body: JSON.parse(body),
  });
  response.writeHead(rejectSubmission ? 503 : 200, {
    "Content-Type": "application/json",
  });
  response.end(JSON.stringify({ success: !rejectSubmission }));
});
sales.listen(0, "127.0.0.1");
await once(sales, "listening");

const probe = createServer();
probe.listen(0, "127.0.0.1");
await once(probe, "listening");
const port = probe.address().port;
await new Promise((resolve) => probe.close(resolve));

const worker = spawn(
  process.execPath,
  [
    "node_modules/@opennextjs/cloudflare/dist/cli/index.js",
    "preview",
    "--",
    "--ip",
    "127.0.0.1",
    "--port",
    String(port),
    "--var",
    `SALES_API_URL:http://127.0.0.1:${sales.address().port}/api`,
  ],
  {
    cwd: root,
    env: { ...process.env, CLOUDFLARE_SEND_METRICS: "false" },
    stdio: ["ignore", "pipe", "pipe"],
    detached: process.platform !== "win32",
  },
);
let logs = "";
worker.stdout.on("data", (data) => {
  logs += data;
});
worker.stderr.on("data", (data) => {
  logs += data;
});
const base = `http://127.0.0.1:${port}`;
const request = (url, options = {}) =>
  fetch(url, {
    ...options,
    signal: AbortSignal.timeout(15_000),
  });

try {
  const deadline = Date.now() + 90_000;
  while (!logs.includes(`Ready on ${base}`)) {
    assert.equal(worker.exitCode, null, logs);
    assert.ok(Date.now() < deadline, `Worker startup timed out:\n${logs}`);
    await setTimeout(100);
  }
  console.log(`Worker ready at ${base}`);

  for (const prefix of ["", "/en"]) {
    for (const path of [
      "",
      "/about",
      "/blog",
      "/contact",
      "/socials",
      "/projects",
      "/projects/sanaa-towers",
      "/projects/alhathaa-towers",
    ]) {
      const response = await request(`${base}${prefix}${path}`);
      assert.equal(response.status, 200, `${prefix}${path || "/"}`);
      assert.match(
        await response.text(),
        new RegExp(`<html lang="${prefix ? "en" : "ar"}"`),
      );
      assert.equal(
        response.headers.get("cross-origin-opener-policy"),
        "same-origin",
      );
    }
  }
  console.log("PASS: Arabic/English pages and response headers");

  const canonical = await request(`${base}/ar/projects`, {
    redirect: "manual",
  });
  assert.equal(canonical.status, 307);
  assert.equal(
    new URL(canonical.headers.get("location"), base).pathname,
    "/projects",
  );
  const missing = await request(`${base}/projects/does-not-exist`);
  assert.equal(missing.status, 404);
  const sitemap = await request(`${base}/sitemap.xml`);
  assert.equal(sitemap.status, 200);
  assert.match(await sitemap.text(), /<urlset/);
  console.log("PASS: canonical language redirect, 404 and sitemap");

  const home = await (await request(base)).text();
  const assetPath = home
    .match(
      /src="([^\"]+\/_next\/static\/[^\"]+\.js)"|src="(\/_next\/static\/[^\"]+\.js)"/,
    )
    ?.slice(1)
    .find(Boolean);
  assert.ok(assetPath, "A JavaScript asset must be present");
  const asset = await request(new URL(assetPath, base));
  assert.equal(asset.status, 200);
  assert.match(asset.headers.get("cache-control"), /max-age=31536000/);
  const image = await request(
    `${base}/_next/image?url=%2Fimages%2Fhero-background-image.webp&w=640&q=75`,
  );
  assert.equal(image.status, 200);
  assert.match(image.headers.get("content-type"), /^image\//);
  assert.ok((await image.arrayBuffer()).byteLength > 0);
  console.log("PASS: immutable assets and Cloudflare Images transformation");

  let forwardedIp = 0;
  const contact = (body) =>
    request(`${base}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Forwarded-For": `192.0.2.${++forwardedIp}`,
      },
      body: typeof body === "string" ? body : JSON.stringify(body),
    });
  assert.equal((await contact("{invalid")).status, 400);
  assert.equal((await contact({})).status, 400);
  assert.equal(submissions.length, 0);
  const payload = {
    firstname: " Cloudflare ",
    lastname: " Test ",
    email: "test@example.com",
    message: " Worker smoke test ",
  };
  const success = await contact(payload);
  assert.equal(success.status, 200);
  assert.deepEqual(await success.json(), { success: true });
  assert.deepEqual(submissions[0], {
    method: "POST",
    url: "/api/contact",
    body: {
      firstname: "Cloudflare",
      lastname: "Test",
      email: "test@example.com",
      phone: null,
      message: "Worker smoke test",
    },
  });
  rejectSubmission = true;
  assert.equal((await contact(payload)).status, 500);
  rejectSubmission = false;
  assert.equal((await contact(payload)).status, 200);
  assert.equal((await contact(payload)).status, 429);
  assert.equal(submissions.length, 3);
  console.log(
    "PASS: contact validation, mock sales forwarding, failure handling and rate limit",
  );
} catch (error) {
  console.error(logs);
  throw error;
} finally {
  const isRunning = () =>
    worker.exitCode === null && worker.signalCode === null;
  const exited = isRunning() ? once(worker, "exit") : Promise.resolve();
  if (process.platform === "win32") {
    spawnSync("taskkill", ["/pid", String(worker.pid), "/T", "/F"]);
  } else {
    // OpenNext runs Wrangler synchronously, so stop the whole process group.
    try {
      process.kill(-worker.pid, "SIGTERM");
    } catch (error) {
      if (error.code !== "ESRCH") throw error;
    }
    await Promise.race([exited, setTimeout(5_000, undefined, { ref: false })]);
    if (isRunning()) process.kill(-worker.pid, "SIGKILL");
  }
  await exited;
  sales.closeAllConnections();
  await new Promise((resolve) => sales.close(resolve));
}
