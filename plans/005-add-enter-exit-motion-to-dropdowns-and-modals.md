# 005 — Add scale/origin enter/exit motion to dropdowns and modals

- **Status**: TODO
- **Commit**: bb23e30
- **Severity**: MEDIUM
- **Category**: Physicality & origin / Missed opportunities
- **Estimated scope**: 5 files, ~30 lines

## Problem

Several spatially-connected UI surfaces simply pop in and out with no motion explaining where they came from, or they unmount without an exit animation.

1. `src/components/navbar/locale-switcher.tsx:163-207`

The desktop locale dropdown is rendered with `{open && (...)}`. It has `initial={{ opacity: 0, y: 8 }}` and `animate={{ opacity: 1, y: 0 }}` but no `scale`, no `transform-origin`, and no `AnimatePresence` for exit.

2. `src/app/[locale]/(main)/projects/components/project-towers-display/fullscreen-modal.tsx:70-268`

The fullscreen media modal renders directly with no enter/exit animation. Same for `src/app/[locale]/(main)/projects/components/gallery-fullscreen-modal.tsx:80-287`.

3. `src/app/[locale]/(main)/projects/[project]/video.section.tsx:104-139`

The YouTube modal is also rendered directly with no enter/exit animation.

## Target

- Dropdowns should scale from `0.95` to `1` with `opacity` and `transform-origin` set to the trigger anchor point.
- Modals should fade in with a slight scale (`0.97` → `1`) and a backdrop fade; on exit they reverse.
- Wrap conditional renders in `AnimatePresence` so exit animations actually play.

## Repo conventions to follow

- `AnimatePresence` is already imported from `motion/react` in `text-effect.tsx`.
- Use the strong ease-out curve `[0.23, 1, 0.32, 1]` or `easings.luxuryEaseOut` for entrances.
- Duration budgets: dropdowns 150-250ms, modals 200-300ms.

## Steps

1. `src/components/navbar/locale-switcher.tsx`
   - Wrap the dropdown `m.div` in `<AnimatePresence>`.
   - Change the dropdown `m.div` to include `exit` and `scale`:

```tsx
{open && (
  <m.div
    className="absolute right-0 z-[1000] mt-3 min-w-44 origin-top-right ..."
    initial={{ opacity: 0, y: 8, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 8, scale: 0.95 }}
    transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
  >
```

   - For RTL, set `origin-top-left` via the `rtl:` variant or compute from `useLocale()`.

2. `src/app/[locale]/(main)/projects/components/project-towers-display/fullscreen-modal.tsx`
   - Wrap the top-level `div` in `<AnimatePresence>` and make it an `m.div`:

```tsx
import { AnimatePresence, m } from "motion/react";

// ...

<m.div
  initial={{ opacity: 0, scale: 0.98 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.98 }}
  transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
  className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm"
>
  ...
</m.div>
```

   - The modal is mounted/unmounted by the parent; ensure the parent uses `AnimatePresence` or keep the modal always mounted with an `isOpen` prop. If the parent conditionally renders it (`{isOpen && <FullscreenModal ... />}`), wrap that in `AnimatePresence` in the parent.

3. `src/app/[locale]/(main)/projects/components/gallery-fullscreen-modal.tsx`
   - Same treatment as step 2.

4. `src/app/[locale]/(main)/projects/[project]/video.section.tsx`
   - Wrap the modal `div` in `AnimatePresence` and convert to `m.div`:

```tsx
<AnimatePresence>
  {isModalOpen && videoUrl && (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex size-full items-center justify-center bg-black/90 p-4"
      onClick={() => setIsModalOpen(false)}
    >
      ...
    </m.div>
  )}
</AnimatePresence>
```

## Boundaries

- Do NOT change the modal content, controls, or keyboard handling.
- Do NOT add new dependencies.
- Do NOT animate `width`/`height` for layout; use `scale` and `opacity` only.

## Verification

- **Mechanical**: `bun run lint && bun run build` passes.
- **Feel check**:
  - Locale dropdown: click the globe. The menu should appear to grow from the button's top-right, and fade/scale away on close.
  - Fullscreen modals: opening should fade in and scale slightly up; closing should reverse.
  - Video modal: should fade in/out.
  - In DevTools Animations panel, verify exit animations are present (this confirms `AnimatePresence` is wired).
- **Done when**: dropdowns use `scale` + `origin-*` with `AnimatePresence`, and all three modals have `AnimatePresence`-wrapped enter/exit.
