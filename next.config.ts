import withBundleAnalyzer from "@next/bundle-analyzer";
import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  typedRoutes: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  headers: async () => {
    return [
      // Global security headers
      {
        source: "/:path*",
        headers: [{ key: "Cross-Origin-Opener-Policy", value: "same-origin" }],
      },
      // Baseline CORS for API routes; adjust origin/methods as needed
      {
        source: "/api/:path*",
        headers: [
          // If you need credentials/cookies, set a specific origin instead of '*'
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,POST,PUT,PATCH,DELETE,OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Authorization, Content-Type, X-Requested-With",
          },
          { key: "Access-Control-Max-Age", value: "86400" },
          // Helpful for caches and proxies
          { key: "Vary", value: "Origin" },
        ],
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })(
  withNextIntl(nextConfig),
);
