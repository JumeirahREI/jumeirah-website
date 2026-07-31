# 004 — Standardize press feedback and remove `transition-all`

- **Status**: TODO
- **Commit**: bb23e30
- **Severity**: MEDIUM
- **Category**: Easing & duration / Performance
- **Estimated scope**: 6 files, ~20 class changes

## Problem

Multiple interactive elements use `active:scale-95` with long, symmetric `ease-in-out` timing or bare `transition`/`transition-all`, which makes clicks feel sluggish and wastes GPU cycles animating unintended properties.

1. `src/app/[locale]/(main)/components/sections/our-projects.section.tsx:80`

```tsx
className="... duration-300 ease-in-out active:scale-95 active:brightness-80 ..."
```

2. `src/app/[locale]/(main)/projects/[project]/image-gallery.section.tsx:208`

```tsx
className="... transition-all hover:brightness-75 active:scale-95 active:brightness-75 ..."
```

3. `src/app/[locale]/(main)/projects/[project]/video.section.tsx:57`

```tsx
className="... transition group-hover:brightness-90"
```

4. `src/components/ui/section-link.tsx:23`

```tsx
className="... transition ... active:scale-95 active:opacity-50 ..."
```

5. `src/app/[locale]/(main)/projects/components/gallery-fullscreen-modal.tsx:196`

```tsx
className="... transition-all md:h-auto md:w-auto ..."
```

6. `src/app/[locale]/(main)/projects/components/project-towers-display/fullscreen-modal.tsx:242`

```tsx
className="... transition-all ..."
```

7. `src/app/globals.css:161-164`

```css
.fade,
.fade-start,
.fade-end,
.fade-y,
.fade-x {
  ...
  transition-property: --fade-start, --fade-end;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}
```

This one is correctly scoped, so it is not a target.

## Target

- Press feedback should use `transform: scale(0.97)` with `transition-transform duration-150 ease-out`.
- Hover/active effects should not use `transition-all`; use `transition-transform`, `transition-colors`, or `transition-opacity`.
- Avoid animating `filter` (brightness) on hover; use opacity or color instead.

## Repo conventions to follow

- Tailwind utilities are used everywhere; keep changes class-only where possible.
- Strong ease-out for UI: `duration-150 ease-out` or `cubic-bezier(0.23, 1, 0.32, 1)`.

## Steps

1. `our-projects.section.tsx`
   - Replace `duration-300 ease-in-out active:scale-95 active:brightness-80` with:
     `transition-transform duration-150 ease-out active:scale-[0.97]`.
   - Remove `active:brightness-80` or replace with `active:opacity-80`.

2. `image-gallery.section.tsx`
   - Replace `transition-all hover:brightness-75 active:scale-95 active:brightness-75` with:
     `transition-transform duration-150 ease-out hover:opacity-90 active:scale-[0.97]`.

3. `video.section.tsx`
   - Remove `group-hover:brightness-90` from the `Image`.
   - If a hover state is required, use `group-hover:opacity-90` and `transition-opacity duration-300`.

4. `section-link.tsx`
   - Replace the `transition` class with `transition-transform`.
   - Change `active:scale-95 active:opacity-50` to `active:scale-[0.97]`.

5. `gallery-fullscreen-modal.tsx`
   - Replace `transition-all` with `transition-transform duration-200` (the selected thumbnail only needs scale/border-color; border-color can be `transition-colors`).

6. `fullscreen-modal.tsx`
   - Replace `transition-all` with `transition-transform transition-colors`.

7. `app-link.tsx`
   - The default variant has `transition-shadow transition transition-discrete` with `hover:drop-shadow-md hover:drop-shadow-[0_0_5px_#ffcb05]`. `drop-shadow` is a filter and `transition-shadow` only animates `box-shadow`. Simplify to:
     `transition-colors duration-150` and replace `hover:drop-shadow-md hover:drop-shadow-[0_0_5px_#ffcb05] hover:brightness-110` with `hover:shadow-[0_0_5px_#ffcb05]` or remove the glow. The `brightness-110` should be `hover:opacity-90` if a luminosity change is needed.

## Boundaries

- Do NOT change component APIs.
- Do NOT remove hover feedback entirely; only change the animated property/easing.
- Do NOT add new dependencies.

## Verification

- **Mechanical**: `bun run lint && bun run build` passes.
- **Feel check**:
  - On project cards and gallery buttons, click rapidly. The press feedback should feel snappy and release instantly.
  - In DevTools Animations panel, the active/hover animations should not list `filter`, `width`, or `height` as animated properties.
- **Done when**: `transition-all` is no longer used on the listed interactive elements, press feedback uses `scale-[0.97]` with `duration-150 ease-out`, and no `brightness`/`drop-shadow` is animated on hover.
