<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# GLYPHFOG: agent instructions

## Purpose

Official website for GLYPHFOG (digital solutions: websites, business software, AI & automation, branding). It must read as a credible, premium, conversion-oriented company site for a **new** company. Core idea: turning complexity into clarity. Business-first, not technology-first.

## Stack

Next.js 16 App Router, React 19, TypeScript (strict), Tailwind v4, `motion`, self-hosted Geist. Vercel. npm.

## Directories

- `src/app`: layout, page, metadata routes, `globals.css` (design tokens)
- `src/components/{layout,sections,ui,motion}`
- `src/data`: all repeated content (typed). `src/types/content.ts`: its types
- `src/lib`: glyph generator, OG image
- `docs/`: source-of-truth documentation

## Conventions

- Server Components by default; add `"use client"` only for state/effects/in-view motion.
- Content goes in `src/data`, not duplicated JSX. Small focused components; no giant page components.
- No `any`. Typed props. Semantic HTML (real `button`/`a`, not clickable `div`s).
- Under Cache Components, never read `new Date()`, `Math.random()` or request data during prerender; use `"use cache"` or a client component.
- Add a dependency only with a clear reason, and say why in the PR/summary.

## Design-system rules

- Use token utilities (`bg-canvas`, `text-ink`, `text-muted`, `border-line`, `text-accent`). **Never hard-code colors in components**; change tokens in `globals.css`.
- Light theme only. One restrained accent. No glassmorphism, gradients, glow, floating cards or shadows by default.
- Prefer hairlines and whitespace to cards. Glyph/coordinate motifs only where `docs/DESIGN_SYSTEM.md` allows.
- Interactive targets at least 44px. Never remove focus rings.

## Animation rules

- Opacity/transform only; subtle and short (see `docs/MOTION.md`). No scroll-jacking, parallax, bounce, particles, cursor effects.
- Every animation must respect `prefers-reduced-motion` and keep content visible without JS.
- Do not add GSAP.

## Content rules

- **Never invent** clients, testimonials, logos, statistics, awards, results, metrics, partnerships, or capabilities.
- Label projects truthfully (`Project.type`). A university project is never client work; a concept is never a deployed product.
- No fake social links, legal pages, or contact forms that don't send anything.
- Unknown facts: leave a clear placeholder and record it in `docs/CONTENT.md`.
- Avoid hype words (revolutionary, world-class, next-generation, cutting-edge, 10x). Specific beats impressive.

## Validate

```bash
npm run lint
npm run build
```

Also check: one `h1`, heading order, anchors resolve, no horizontal overflow at 375/768/1024/1440px, keyboard navigation and focus, reduced motion.

## Do not

- Do not replace the framework or restructure without a documented reason.
- Do not run `npm audit fix --force` (it downgrades `eslint-config-next`; remaining advisories are dev-tooling only).
- Do not commit `.env*` files other than `.env.example`.
- Do not add analytics or third-party trackers unless explicitly requested.
