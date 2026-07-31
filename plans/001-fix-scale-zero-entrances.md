# 001 — Fix `scale(0)` entrances in `TextEffect`

- **Status**: TODO
- **Commit**: bb23e30
- **Severity**: HIGH
- **Category**: Physicality & origin
- **Estimated scope**: 1 file, 4 lines

## Problem

`TextEffect`'s `scale` preset makes elements pop in from `scale: 0`. Nothing in the real world appears from a point; the result feels artificial and can cause a visible "pop" when the first frame is skipped.

Current code in `src/components/text-effect.tsx:189-193`:

```ts
scale: {
  container: defaultContainerVariants,
  item: {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 },
  },
},
```

## Target

Use `scale: 0.9` plus full opacity fade for entrances and exits. Keep the same `opacity` behavior and use the existing default/easing values.

```ts
scale: {
  container: defaultContainerVariants,
  item: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
},
```

## Repo conventions to follow

- Other presets in the same file already avoid `scale: 0`:
  - `zoom` uses `scale: 0.8` (`src/components/text-effect.tsx:62-64` and `src/components/animated-group.tsx:61-64`)
  - `animated-group.tsx` `scale` preset uses `scale: 0.95`
- Keep the `defaultContainerVariants` pattern used by every preset.

## Steps

1. Open `src/components/text-effect.tsx`.
2. In the `presetVariants` `scale` item, change `hidden: { opacity: 0, scale: 0 }` to `hidden: { opacity: 0, scale: 0.9 }`.
3. Change `exit: { opacity: 0, scale: 0 }` to `exit: { opacity: 0, scale: 0.9 }`.

## Boundaries

- Do NOT change any other preset or the `AnimatedGroup` equivalent.
- Do NOT modify the `TextEffect` API or component structure.
- Do NOT add new dependencies.

## Verification

- **Mechanical**: `bun run lint && bun run typecheck` (or `bun run build`) must pass.
- **Feel check**: Render a `TextEffect` with `preset="scale"`. The text should fade and shrink slightly on exit/enter rather than vanish to a point.
- **Done when**: `scale: 0` no longer appears in `src/components/text-effect.tsx` and the preset still animates.
