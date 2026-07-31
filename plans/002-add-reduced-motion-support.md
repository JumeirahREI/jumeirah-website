# 002 — Add `prefers-reduced-motion` support

- **Status**: TODO
- **Commit**: bb23e30
- **Severity**: HIGH
- **Category**: Accessibility
- **Estimated scope**: 2 files, global CSS + a small motion helper

## Problem

The codebase has zero `prefers-reduced-motion` handling. All scroll-triggered hero animations, carousels, hover-tied reveals, and filter blurs play for users who have explicitly requested reduced motion. This is an accessibility failure.

No matches were found for `prefers-reduced-motion`, `useReducedMotion`, or `@media (hover: hover)` in `src/`.

## Target

1. Add a global CSS rule that disables continuous/entrance motion for users who prefer reduced motion while preserving opacity/color feedback that aids comprehension.
2. Add a reusable React helper that returns `true` when reduced motion is preferred, so Framer Motion variants can branch.
3. Gate hover-only scale/background effects behind `@media (hover: hover) and (pointer: fine)`.

## Repo conventions to follow

- Tailwind CSS v4 is configured in `src/app/globals.css` with `@import "tailwindcss"` and `@theme inline`.
- Framer Motion is imported as `motion/react` and the package name is `motion` (v12).
- Existing components are client components when hooks are needed.

## Steps

1. Open `src/app/globals.css` and append this block at the end of the file:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  .motion-safe {
    animation: none !important;
    transition: none !important;
  }
}

@media (hover: none) {
  .hover-only-motion {
    transform: none !important;
  }
}
```

2. Create `src/lib/use-reduced-motion.ts`:

```ts
"use client";

import { useEffect, useState } from "react";

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(media.matches);
    const listener = (e: MediaQueryListEvent) => setReduced(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  return reduced;
}
```

3. In `src/components/animated-group.tsx`, use the helper to disable motion when reduced motion is preferred:

```ts
import { useReducedMotion } from "@/lib/use-reduced-motion";
```

At the top of the component body:

```ts
const shouldReduceMotion = useReducedMotion();
const isDisabled = disabled || shouldReduceMotion;
```

Replace the `if (disabled)` block with `if (isDisabled)` and use `isDisabled` for the return of the plain container.

4. In `src/components/text-effect.tsx`, do the same:

```ts
import { useReducedMotion } from "@/lib/use-reduced-motion";
```

At the top of the component body:

```ts
const shouldReduceMotion = useReducedMotion();
const isDisabled = disabled || shouldReduceMotion;
```

Replace `if (disabled)` with `if (isDisabled)`.

5. In `src/components/navbar/index.tsx`, wrap `window.scrollTo({ top: 0, behavior: "smooth" })` calls to use `behavior: "auto"` when reduced motion is preferred. Add:

```ts
import { useReducedMotion } from "@/lib/use-reduced-motion";
```

And create a helper in the file (or use `document.documentElement.style.scrollBehavior` temporarily). The simplest change is in `navigation-links.tsx` and `section-link.tsx`:

Replace `window.scrollTo({ top: 0, behavior: "smooth" })` with:

```ts
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
```

Do this in:
- `src/components/navbar/navigation-links.tsx:45`
- `src/components/ui/section-link.tsx:31-33`

## Boundaries

- Do NOT remove animations entirely for reduced motion; only skip transform/position motion. Keep opacity/color feedback.
- Do NOT change the default behavior when reduced motion is not set.
- Do NOT add new dependencies.

## Verification

- **Mechanical**: `bun run lint && bun run build` passes.
- **Feel check**:
  - Open DevTools Rendering panel, enable `prefers-reduced-motion: reduce`.
  - Load the home page. Hero text, project cards, and service cards should appear instantly (opacity only, no y/blur/scale movement).
  - Toggle the setting off; the original entrance motion returns.
  - On a touch device emulator, hover-only scale effects should not fire.
- **Done when**: `@media (prefers-reduced-motion: reduce)` exists in `globals.css`, `useReducedMotion` is used in `AnimatedGroup` and `TextEffect`, and `window.scrollTo` respects the setting.
