# 003 — Replace layout-property animations with transform/opacity

- **Status**: TODO
- **Commit**: bb23e30
- **Severity**: HIGH
- **Category**: Performance
- **Estimated scope**: 5 files, ~40 lines

## Problem

Several components animate `width`, `height`, and `maxHeight`. These force layout and paint on every frame, dropping frames on lower-end devices and producing janky accordion/expand effects.

Affected locations:

1. `src/components/faqs-section.tsx:72-89`

```ts
const faqCardVariants: Variants = {
  inactive: {
    width: "var(--max-width-inactive)",
    transition: { type: "tween", duration: 0.4, ease: "linear" },
  },
  active: {
    width: "var(--max-width-active)",
    transition: { type: "tween", duration: 0.1, ease: "linear" },
  },
};
```

The answer panel at `faqs-section.tsx:124-139` animates `maxHeight: 0` ↔ `300`.

2. `src/components/navbar/mobile-menu.tsx:12-15`

```ts
const navMenuVariants: Variants = {
  open: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: 0 },
};
```

3. `src/app/[locale]/(main)/components/service-gallery-card.tsx:10-19`

```ts
const listVariants: Variants = {
  initial: { opacity: 0, height: 0 },
  active: { opacity: 1, height: "auto" },
};
```

The list expands on hover and mobile `whileInView`.

4. `src/app/[locale]/(main)/projects/[project]/video.section.tsx:45-48`

```tsx
<div className="... transition-all duration-500 group-hover:size-28 ...">
  <div className="... transition-all duration-500 group-hover:size-28 ...">
    <div className="... transition-all duration-500 group-hover:size-28 ...">
      <PlayButtonIcon className="... transition-all duration-500 group-hover:size-10" />
```

These classes animate `width`/`height` (the `size-*` utilities set both) on the play button ripple.

## Target

Use `transform: scale(...)` / `opacity` / `clip-path` / `grid-template-rows` / `fr` tricks for expand/collapse, and `scale` for the play button. Never animate `width`, `height`, or `maxHeight`.

### FAQ card

Remove the `faqCardVariants` width animation and instead rely on the existing CSS flex/grid classes. The active/inactive widths are both `100%` on mobile and `90%`/`66%` on large screens; these can be static classes driven by `data-active`.

For the answer panel, replace the `maxHeight` animation with a CSS grid row transition:

```tsx
<m.div
  layout // optional, but prefer CSS grid
  initial={{ opacity: 0 }}
  animate={isActive ? { opacity: 1 } : { opacity: 0 }}
  transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
  className="grid transition-all duration-200 ease-out"
  style={{
    gridTemplateRows: isActive ? "1fr" : "0fr",
  }}
>
  <div className="overflow-hidden">
    <p className="pt-4 pb-4 text-[#9C9C9C] lg:pt-8">{answer}</p>
  </div>
</m.div>
```

Then add CSS to the panel to animate `grid-template-rows`:

```css
/* in src/app/globals.css */
.faq-answer {
  transition: grid-template-rows 200ms cubic-bezier(0.23, 1, 0.32, 1);
}
```

Alternatively, use `m.div` with `animate={{ height: isActive ? "auto" : 0 }}` is still bad; use `clipPath: inset(0 0 100% 0)` to `clipPath: inset(0 0 0% 0)` with `opacity`.

### Mobile menu

Replace `height: "auto"`/`0` with a clip-path/opacity reveal:

```ts
const navMenuVariants: Variants = {
  open: { opacity: 1, clipPath: "inset(0 0 0% 0)" },
  closed: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
};
```

Set `className="origin-top"` on the `m.div`.

### Service gallery card

Replace `height: 0` → `height: "auto"` with `clipPath` and `opacity`:

```ts
const listVariants: Variants = {
  initial: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
  active: { opacity: 1, clipPath: "inset(0 0 0% 0)" },
};
```

### Video play button

Replace the nested `size-*` width/height transitions with `scale`. The outer container should be a fixed `size-36` and inner elements scale:

```tsx
<div className="flex size-36 items-center justify-center rounded-full bg-white/5 backdrop-blur-xs transition-transform duration-300 ease-out group-hover:scale-90 group-hover:bg-white/20">
  <div className="flex size-28 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 ease-out group-hover:scale-100">
    <div className="flex size-20 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 ease-out group-hover:scale-140">
      <PlayButtonIcon className="ml-1 size-9 transition-transform duration-300 ease-out group-hover:scale-110" />
    </div>
  </div>
</div>
```

Note: `group-hover:scale-140` may need `scale-[1.4]` in Tailwind. Use arbitrary values if needed.

Also replace the thumbnail `transition group-hover:brightness-90` with `transition-opacity` or remove brightness animation; `brightness` is a filter that is expensive to animate.

## Repo conventions to follow

- Framer Motion easings are centralized in `src/lib/easings.ts`.
- For strong ease-out use `[0.23, 1, 0.32, 1]` or reference `easings.luxuryEaseOut`.
- Tailwind `transition-*` utilities are used throughout; prefer `transition-transform` and `transition-opacity` over `transition-all`.

## Steps

1. `src/components/faqs-section.tsx`
   - Remove `faqCardVariants` and the `variants/initial/animate` props on the FAQ card `m.div`.
   - Drive width via static classes or `data-active`.
   - Replace the answer `m.div` `maxHeight` animation with `clipPath`/`opacity` or CSS grid row transition.
   - Change the answer transition to `duration: 0.2, ease: [0.23, 1, 0.32, 1]`.

2. `src/components/navbar/mobile-menu.tsx`
   - Change `navMenuVariants` to use `clipPath`/`opacity` and add `origin-top`.
   - Update `transition` to use `duration: 0.25, ease: [0.23, 1, 0.32, 1]`.

3. `src/app/[locale]/(main)/components/service-gallery-card.tsx`
   - Change `listVariants` to use `clipPath`/`opacity`.
   - Keep `duration: 0.5` but use `ease: [0.23, 1, 0.32, 1]`.

4. `src/app/[locale]/(main)/projects/[project]/video.section.tsx`
   - Convert play button ripple to `scale` transitions.
   - Change thumbnail `transition group-hover:brightness-90` to `transition-opacity` (if opacity change is needed) or remove brightness animation.

5. `src/app/globals.css`
   - Add a `.motion-safe` / reduced-motion rule (see Plan 002) or at least ensure these new transform-based animations can be disabled.

## Boundaries

- Do NOT change component markup structure beyond what is necessary to replace the animated property.
- Do NOT introduce new state or side effects.
- Do NOT add new dependencies.

## Verification

- **Mechanical**: `bun run lint && bun run build` passes.
- **Feel check**:
  - FAQ accordion: opening/closing should feel crisp (200-300ms) and not resize the surrounding page layout during the animation.
  - Mobile menu: open/close should fade/slide without reflowing the navbar height.
  - Service gallery cards: hovering should reveal the list smoothly without layout thrash.
  - Video play button: hovering should shrink/ripple via scale, not width/height.
- **Performance check**: In DevTools Performance, record while toggling FAQ and mobile menu. No purple "Layout" bars should appear during the animation; only green "Paint" and "Composite" bars.
- **Done when**: `width`, `height`, and `maxHeight` are no longer used as animated values in the four files above, and `transition-all` is replaced with targeted transitions.
