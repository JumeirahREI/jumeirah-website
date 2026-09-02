# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is bun (see `bun.lock`; no `package-lock.json`/`yarn.lock` present).

- `bun run dev` — start dev server with Turbopack
- `bun run build` — production build
- `bun run build:analyze` — production build with `ANALYZE=true` (opens bundle analyzer)
- `bun run start` — start production server (after build)
- `bun run lint` — ESLint (`next/core-web-vitals`, `next/typescript`)

There is no test suite/framework configured in this repo.

## Architecture

Next.js 15 (App Router) + React 19 + TypeScript, styled with Tailwind CSS v4. Deployed to Netlify (`netlify.toml`).

### Internationalization (next-intl)

Every route lives under `src/app/[locale]/...`. Locale handling is centralized in `src/i18n/`:
- `routing.ts` — locales `["ar", "en"]`, default locale `ar`, `localePrefix: "as-needed"` (Arabic URLs have no `/ar` prefix, English URLs are prefixed `/en`).
- `request.ts` — resolves the active locale and loads `messages/{locale}.json`.
- `navigation.ts` — locale-aware `Link`/`redirect`/`usePathname`/`useRouter` wrappers from `createNavigation`; use these instead of `next/link` / `next/navigation` inside `[locale]` routes.

Translation strings live in `messages/en.json` and `messages/ar.json` (must stay in sync — `global.d.ts` types `next-intl`'s `Messages` off of `en.json`). Root layout (`src/app/[locale]/layout.tsx`) sets `dir="rtl"` for Arabic and swaps the font (Aeonik for `en`, Montserrat Arabic for `ar`).

### Route structure

- `src/app/[locale]/(main)/` — the main site (route group, has its own `layout.tsx` wrapping shared chrome): home page, `about`, `blog`, `projects`.
- `src/app/[locale]/(main)/projects/[project]/` — dynamic project detail page. Valid `[project]` slugs are hardcoded in a `projects` map in `page.tsx` (currently `sanaa-towers`, `alhathaa-towers`); `generateStaticParams` statically generates only those slugs, everything else 404s via `notFound()`.
- `src/app/[locale]/contact/`, `src/app/[locale]/socials/` — standalone pages outside the `(main)` group.
- `src/app/api/contact/route.ts` — contact form API route: in-memory per-IP rate limiting (5 req/hour), input validation/sanitization, then proxies to an external sales system at `SALES_API_URL`.

### Content/data model (`src/data/`)

Each project (e.g. `sanaa-towers`, `alhathaa-towers`) is a self-contained data module: an `index.ts` that imports every image asset for that project directly from `public/images/...` and assembles a `ProjectData<T>` object (towers → models → detail sections, features, services, image galleries), plus `towers/` subfolders with per-tower/per-model data.

`src/data/types.ts` defines this shape. Note the type-level trick: `BaseTranslation<T>` derives allowed string values as dot-path leaf keys of that project's `Messages[T]` translation namespace (via `LeafPaths`), so fields like `title`/`alt` in data files are next-intl translation keys (e.g. `"featuresSection.jacuzzi"`), not literal display strings — they get resolved with `getTranslations(projectKey)` at render time, keeping data and copy separate per locale.

Adding a new project means: add a translation namespace to both `messages/en.json` and `messages/ar.json` matching the project name, create a `src/data/<project>/` module conforming to `ProjectData`, and register it in the `projects` map in `projects/[project]/page.tsx`.

### Project towers display

`src/app/[locale]/(main)/projects/components/project-towers-display/` is the most complex UI feature — an interactive tower/model/media browser (tabs for towers → models → layout/photos/videos, fullscreen gallery modal, pan/zoom). State is shared via `towers-display-context.tsx`; navigation and media-selection logic are split into `hooks/useTowerNavigation.ts` and `hooks/useMediaState.ts`.

### Styling/animation conventions

- `cn()` in `src/lib/utils.ts` (`clsx` + `tailwind-merge`) is the standard class-merging helper used throughout.
- `src/lib/easings.ts`, `src/lib/transitions.ts`, `src/lib/luxury-presets.ts` centralize Motion (Framer Motion successor, imported as `motion`) animation presets/easing curves — reuse these instead of inlining new easing curves.
- `src/components/lazy-motion-provider.tsx` wraps the app in Motion's `LazyMotion` — prefer the `m.*` components over `motion.*` inside providers to keep this optimization intact.
- `eslint.config.mjs` turns off `@typescript-eslint/no-explicit-any`, `@typescript-eslint/no-unused-vars`, `react-hooks/exhaustive-deps`, and `react/display-name` — don't rely on lint to catch these.
- Path alias `@/*` → `./src/*` (see `tsconfig.json`); asset imports from `public/` use `@/../public/...`.

### Third-party integrations

Google Analytics, Meta/Facebook Pixel, and PostHog are all optional and gated behind env vars (`NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_FB_PIXEL_ID`) or the `PostHogProvider` wrapper — see their usage in `src/app/[locale]/layout.tsx` and `src/components/providers.tsx`. `netlify.toml` explicitly unsets `SENTRY_ORG` to work around a Netlify secret-scanner false positive (this project does not use Sentry).
