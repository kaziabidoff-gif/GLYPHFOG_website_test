# GLYPHFOG Motion

Motion guides attention and shows relationships. It is never the only carrier of information.

## Principles

- Purposeful, short, subtle. The interface never fights the user.
- Animate opacity and transform only. No layout-affecting animation.
- Prefer CSS where it is enough; use Motion only for in-view reveals.
- No scroll-jacking, parallax, bounce or looping decorative animation.

## Timing and easing

| Use | Duration | Easing |
| --- | --- | --- |
| Hover / color / border | 160–240ms (`--duration-fast`, `--duration-base`) | default |
| Scroll reveal | 500ms | `cubic-bezier(0.2, 0.7, 0.2, 1)` (`--ease-out`) |
| Hero entrance (`.rise`) | 600ms, staggered 0 / 80 / 160 / 240ms | `--ease-out` |
| Hero glyph resolve | 900ms per glyph, delays ≈ column × 55ms + jitter ≤160ms | `--ease-out` |
| Mobile menu | 160ms opacity/visibility | default |

Nothing exceeds ~1.2s total, including stagger.

## Patterns

### Hero: complexity → structure → clarity (CSS only)
- `HeroField` renders the **resolved** composition as the base style. `.glyph-cell` animates *from* a displaced, rotated, transparent state with `animation-fill-mode: backwards`, so the resolved state is what exists without animation.
- Glyphs settle roughly left to right; the ruled grid (`.glyph-guides`) fades in after.
- Hero copy uses `.rise` (opacity + 12px translate). It is CSS, not JS, so the LCP element is never gated on hydration.

### Section reveal (`motion/Reveal`)
- Client component using `motion/react` with `LazyMotion` + `domAnimation` (small bundle).
- Opacity 0 → 1 and `y` 12px → 0 when the element is within ~10% of entering the viewport; plays once.
- Related items stagger with `delay={index * 0.05–0.06}` seconds. Keep stagger small.

### Hover / focus
- Buttons: background/border color change; arrow translates 2px.
- Capability rows: top border darkens, number turns accent (also on `focus-within`).
- Nav links: color change only.

### Page transitions
- None in v1 (single page). In-page anchor navigation uses `scroll-behavior: smooth` with `scroll-padding-top` for the sticky header.

## Reduced motion

`@media (prefers-reduced-motion: reduce)` in `globals.css`:
- Disables `.glyph-cell`, `.glyph-guides`, `.rise` animations (final state shown immediately).
- Forces `[data-reveal]` to `opacity: 1; transform: none` (covers server-rendered HTML before hydration).
- Sets `scroll-behavior: auto`, collapses transitions to ~0ms.
- `Reveal` also reads `useReducedMotion()` and skips its initial offset.
- Button arrow nudge is disabled with `motion-reduce:` utilities.

No JavaScript: a `<noscript>` rule in `layout.tsx` forces reveal elements visible.

## When NOT to animate

- Body copy blocks, forms, error messages, and anything the user must read immediately.
- Anything that loops or runs continuously.
- Navigation state changes beyond a ≤160ms fade.
- Decoration that has no meaning (cursor effects, floating objects, particles, noise).
- Do not add GSAP. Reach for it only if a specific interaction cannot be done with CSS or Motion, and document why here.
