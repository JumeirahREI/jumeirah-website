# Cloudflare Workers deployment

The website uses [OpenNext](https://opennext.js.org/cloudflare) to run the existing
Next.js 15 app on Workers, preserving language middleware, optimized images, and
the `/api/contact` sales-system proxy. Use Node.js 22+ and Bun.

## Local preview

```sh
bun install --frozen-lockfile
cp .env.example .env.local
cp .dev.vars.example .dev.vars
bun run preview
```

Set `SALES_API_URL` in `.env.local` to a local or mock sales backend's API base
URL ending in `/api`, without a trailing slash. The proxy appends `/contact`.
Never test submissions against production customer data.

`preview` builds `.open-next/worker.js` and serves it locally through Wrangler.
`.dev.vars` selects the development Next.js environment so `.env.local` is loaded.
Neither local file is committed. `bun run cf-typegen` generates local binding types.

## Workers Builds (Git integration)

Connect the repository as a **Worker**, not a Pages project:

| Setting                       | Value                                              |
| ----------------------------- | -------------------------------------------------- |
| Worker name                   | `jumeirah-website`                                 |
| Root directory                | Repository root                                    |
| Build command                 | `bun run build:worker`                             |
| Deploy command                | `bunx opennextjs-cloudflare deploy -- --keep-vars` |
| Build variable `NODE_VERSION` | `22`                                               |

Install dependencies with Bun and the committed `bun.lock`, e.g.
`bun install --frozen-lockfile`. Choose the production branch explicitly: `main`
and `dev` contain different website content.

### Build variables

Configure these before building; changing them requires a rebuild:

| Variable                          | Purpose                                              |
| --------------------------------- | ---------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`            | Canonical HTTPS URL, e.g. `https://jumeirahye.com`   |
| `NEXT_PUBLIC_GOOGLE_VERIFICATION` | Optional Google site-verification token              |
| `NEXT_PUBLIC_GA_ID`               | Optional Google Analytics ID                         |
| `NEXT_PUBLIC_FB_PIXEL_ID`         | Optional Facebook Pixel ID                           |
| `NEXT_PUBLIC_POSTHOG_KEY`         | PostHog project key, if analytics is used            |
| `NEXT_PUBLIC_POSTHOG_HOST`        | PostHog host; defaults to `https://us.i.posthog.com` |

`NEXT_PUBLIC_*` values are embedded in browser code. Never use them for secrets.

### Runtime variables/secrets

Set `SALES_API_URL` on the deployed Worker to the production HTTPS sales API base
URL ending in `/api`. Without it, the existing endpoint falls back to localhost
and submissions fail. Ensure the sales backend accepts requests from Cloudflare.

The configuration and deploy command preserve dashboard-managed variables.
Secrets are not stored in this repository.

### Bindings and plans

The Wrangler configuration supplies:

- `ASSETS`: public files and immutable Next.js build assets.
- `WORKER_SELF_REFERENCE`: the Worker itself. If renaming the Worker, update both
  `name` and the self-reference `service` value.
- `IMAGES`: Cloudflare Images transformations for existing `next/image` URLs.
  Check [Cloudflare Images pricing](https://developers.cloudflare.com/images/pricing/)
  and enable the required account access before production deployment.

Prerendered pages use OpenNext's read-only Static Assets cache. No R2 bucket, D1
database, or Durable Object is needed. Content changes require a build; adding
ISR/revalidation later requires a different cache configuration.

The contact endpoint retains its existing best-effort, per-instance in-memory
limit of five requests per hour, using Cloudflare's client-IP header first. This
is not a globally enforced anti-spam limit across Worker instances. Add a
centralized limiter or Cloudflare abuse protection if strict enforcement is needed.

## Manual deployment

Set production build/runtime variables, then:

```sh
bunx wrangler login
bun run deploy
```

To validate without publishing:

```sh
bun run lint
bunx tsc --noEmit
bun run build:worker
bun run test:worker
bunx wrangler deploy --dry-run
```

Check the compressed bundle against your account's Worker-size limit. Before
changing DNS, verify Arabic/English routes, project galleries, optimized images,
and the contact proxy on the deployed Worker using a non-production sales backend.
Add the custom domain in Cloudflare only after those checks pass.

`test:worker` requires a completed Worker build. It starts its own local Worker
and mock sales API, checks both languages, redirects, assets, images, and contact
validation/forwarding/rate limiting, then stops both servers. It does not deploy
or submit leads to the production sales backend.
