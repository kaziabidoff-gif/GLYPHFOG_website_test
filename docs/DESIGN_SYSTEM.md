# GLYPHFOG Design System

Describes what is implemented in `src/app/globals.css` and the components. If code and this file disagree, fix whichever is wrong in the same change.

## Principles

- **Make the complexity disappear.** Clear, calm, capable, intentional.
- Restraint over decoration. Whitespace is part of the design.
- Not everything is a card. Prefer hairlines, spacing and typography for structure.
- Brand accents (glyphs, coordinate labels) are sparse and never decorate for their own sake.
- Light interface only (`color-scheme: light`).

## Color tokens

Defined once as CSS variables in `:root` and exposed to Tailwind through `@theme inline`. Components use the utility names, never hex values.

| Token | Utility | Value | Role |
| --- | --- | --- | --- |
| `--canvas` | `bg-canvas` | `#f6f4ef` | Page background (warm off-white) |
| `--surface` | `bg-surface` | `#fbfaf7` | Lighter bands |
| `--surface-sunken` | `bg-sunken` | `#eeebe4` | Quiet tonal bands, footer |
| `--ink` | `text-ink` | `#1c1d1f` | Primary text, primary button |
| `--ink-muted` | `text-muted` | `#595c60` | Secondary text |
| `--line` | `border-line` | `#ddd9d0` | Hairline borders |
| `--line-strong` | `border-line-strong` | `#c3beb2` | Emphasis and hover borders |
| `--accent` | `text-accent`, `bg-accent` | `#2f5d54` | Single restrained verdigris accent |
| `--accent-soft` | `bg-accent-soft` | `#e2eae6` | Reserved tint (currently unused) |

Contrast (computed): ink on canvas 15.35:1; muted on canvas 6.11:1, on sunken 5.65:1, on surface 6.44:1; accent on canvas 6.79:1, on sunken 6.27:1; canvas on accent 6.79:1. All meet WCAG AA for body text.

The accent is used for: eyebrow in the hero, section micro-labels where emphasis is needed, hover state of the primary button, glyph highlights. It must not become a large fill.

## Typography

- **Geist Sans** for all reading and headings, **Geist Mono** for labels, metadata and technologies. Self-hosted via the `geist` package (no third-party font request).
- Loaded in `src/app/layout.tsx`; exposed as `--font-geist-sans` / `--font-geist-mono`, mapped to `font-sans` / `font-mono`.
- Scale (custom utilities in `globals.css`, all fluid with `clamp()`):

| Utility | Use | Size range | Weight |
| --- | --- | --- | --- |
| `text-display` | Hero H1, final CTA | 2.6rem → 5.25rem | 500 |
| `text-title` | Section H2 | 1.9rem → 3.25rem | 500 |
| `text-subtitle` | Item titles, H3 | 1.25rem → 1.625rem | 500 |
| `text-lead` | Supporting paragraphs (muted) | 1.0625rem → 1.3125rem | 400 |
| `text-label` | Mono uppercase micro-labels | 0.75rem | 400 |

- Body: 1.0625rem / 1.6. Headings use negative tracking (`-0.02em` to `-0.04em`) and `text-wrap: balance`.

## Layout and spacing

- `container-page`: max-width 1240px, horizontal padding `clamp(1.25rem, 4vw, 3rem)`.
- `section-space`: vertical padding `clamp(4.5rem, 9vw, 8.5rem)`.
- 12-column grid at `md`/`lg` for editorial, asymmetric compositions (e.g. text 5 cols / content 6 cols).
- Sections alternate tonal bands (`canvas` → `sunken` / `surface`) separated by hairlines to create hierarchy without cards.

## Borders, radius, shadows

- Borders: 1px, `border-line` by default, `border-line-strong` or `border-ink` for emphasis. List rows are separated by top hairlines.
- Radius tokens: `--radius-sm` 6px, `--radius-md` 10px (buttons), `--radius-lg` 14px (project visuals).
- Shadows: none in v1. Elevation comes from tone and borders. Add a shadow only if hierarchy genuinely requires it.

## Components

- **Button** (`ui/Button`): `primary` (ink fill, accent on hover) and `secondary` (outlined). Min height 48px. Trailing arrow nudges 2px on hover.
- **SectionHeading**: mono coordinate label (`02 / Capabilities`), H2, optional lead.
- **CapabilityItem**: numbered editorial row, not a card. Border and number change on hover/focus-within.
- **ProjectCard**: editorial row alternating sides; type label, category, problem-first description, then status and technologies.
- **ProjectVisual / HeroField**: generated glyph compositions (see below).
- **GlyphMark**: interim brand mark. Replace with the final logo asset when supplied.

## Glyph visual language

- Eight stroke glyphs on a 24px grid (`src/lib/glyphs.ts`), placed on a ruled grid with coordinate labels (A–H, 1–7).
- Generated deterministically from a seed so server and client always match.
- Used in the hero (animated), project placeholders (static), the logo mark, and mono labels. Keep it to those places.

## Responsive rules

- Mobile-first. Layouts collapse to one column below `md`; hero visual sits below the copy and is width-capped.
- Navigation switches at `md` (768px). Touch targets are at least 44px (menu rows 56px, buttons 48px).
- No fixed heights for content. Long words wrap; headings use `text-wrap: balance`.
- Process steps are a 5-column row at `md+`, stacked on mobile.

## Accessibility

- Semantic landmarks (`header`, `nav` with labels, `main#main`, `section[aria-labelledby]`, `footer`), one H1, ordered headings.
- Skip link to `#main`.
- Global `:focus-visible` ring: 2px accent outline, 3px offset. Never remove it without a replacement.
- Mobile menu is a disclosure panel (not a modal): `aria-expanded`/`aria-controls`, Escape closes and restores focus to the button, outside press closes, closed links are `visibility: hidden` so they leave the tab order.
- Decorative SVGs are `aria-hidden`; no information is conveyed only by animation.
- `prefers-reduced-motion` handled globally (see `docs/MOTION.md`).
