# Animation improvement plans — `/` (index) page

Branch: `animations/index-page-improvements` (based off `dev` at commit `d603e1d`).

Scope: fix flagged animation issues on the home page, plus a small set of gated
missed-opportunity additions (press feedback, popover exit animation). UI design
is preserved — every plan changes only motion properties (transitions, easing,
transform), never markup, layout, or visual styling.

| # | Title | Severity | Category | Status |
| --- | --- | --- | --- | --- |
| [001](001-faq-card-motion.md) | Fix FAQ card open/close motion (width easing, timing) | HIGH | Performance / Easing / Interruptibility | TODO |
| [002](002-mobile-menu-height-to-transform.md) | Move mobile nav menu open/close off layout property | MEDIUM | Performance | TODO |
| [003](003-service-card-hover-height.md) | Service card hover list: stop animating height | MEDIUM | Performance | TODO |
| [004](004-shorthand-transform-shared-presets.md) | Shared entrance presets use y/scale shorthand | LOW | Performance | DEFERRED |
| [005](005-locale-dropdown-exit-and-origin.md) | Locale dropdown: add exit animation + anchor to trigger | MEDIUM | Missed opportunity | TODO |
| [006](006-applink-press-feedback.md) | Add press feedback to primary CTA links | LOW | Missed opportunity | TODO |

## Execution order

001 → 002 → 003 → 005 → 006, in that order. No plan depends on another —
they touch disjoint files (`faqs-section.tsx`, `mobile-menu.tsx`,
`service-gallery-card.tsx`, `locale-switcher.tsx`, `app-link.tsx`) — but this
order goes highest-severity first.

Plan 004 is intentionally **deferred**, not executed on this branch: it would
touch shared preset files (`luxury-presets.ts`, `animated-group.tsx`,
`text-effect.tsx`) imported by every route in the app, not just `/`, and needs
its own dedicated review pass across all consuming pages before it's safe to
change. The plan file documents the finding and a scoped recommendation for
that future pass.

## Rejected candidates (considered, not planned)

- Embla carousel drag physics (`our-projects.section.tsx`) — already has its
  own momentum/snap handling via the Embla library; not a gap.
- Hover color/brightness transitions using Tailwind's plain `hover:` (not
  `@media (hover: hover)`-gated) across the site — real but very low-impact
  (color/shadow only, not movement) and site-wide in scope; not worth a
  dedicated plan for the index-page-only branch.
- `HeaderLinks` component (`src/app/[locale]/(main)/components/header-links.tsx`)
  — dead code, not imported anywhere in the app; skipped.
