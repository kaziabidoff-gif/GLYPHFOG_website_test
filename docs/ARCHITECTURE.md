# Architecture

## Stack

- Next.js 16 (App Router), React 19, TypeScript (strict), Tailwind CSS v4
- `motion` for scroll reveals; `geist` for self-hosted fonts
- npm; deployed on Vercel (no extra config required)

This repository started empty, so this structure was established from scratch.

## Rendering strategy

- `next.config.ts` has `cacheComponents` and `partialPrefetching` enabled (scaffold defaults). The homepage is fully **static** (`○` in the build output).
- Server Components by default. Client components: `Navbar` (menu state) and `Reveal` (in-view motion) only.
- Anything that reads the current time during prerender breaks the build under Cache Components. The footer year is a `"use cache"` component for that reason.
- Hero animation is CSS-only so it adds no JavaScript.

## Structure

```text
src/
├── app/                  layout, page, robots, sitemap, icon, OG/Twitter images, globals.css (tokens)
├── components/
│   ├── layout/           Navbar (client), Footer
│   ├── sections/         Hero, Problem, Capabilities, WhatWeBuild, SelectedWork,
│   │                     Process, WhyGlyphfog, About, FinalCTA
│   ├── ui/               Button, SectionHeading, CapabilityItem, ProjectCard,
│   │                     ProjectVisual, HeroField, GlyphMark
│   └── motion/           Reveal (client)
├── data/                 site, navigation, capabilities (+ build outcomes), projects, process (+ principles)
├── lib/                  glyphs (glyph paths + seeded generator), og (shared OG image)
└── types/                content.ts (domain types)
```

## Data architecture

Repeated content is typed data in `src/data`, rendered by section components. Types live in `src/types/content.ts`. This keeps a future CMS swap to a data-layer change. No CMS in v1.

## Routing

Single route `/` with in-page anchors: `#work`, `#capabilities`, `#process`, `#about`, `#contact`. Planned expansion: `/work`, `/work/[slug]` (use `Project.slug`, case-study structure: context, problem, approach, solution, technology, result/status, lessons), `/about`, `/contact`.

## SEO

`metadata` and `viewport` in `layout.tsx` (title template, description, canonical, Open Graph, Twitter). `opengraph-image.tsx` / `twitter-image.tsx` render a text-only image via `lib/og.tsx`. `robots.ts`, `sitemap.ts`, `icon.svg`. JSON-LD: Organization + WebSite only (sanitized with `<` escaping).

## Assets

No stock photography. Projects without screenshots use generated abstract placeholders. When adding a real screenshot, place it in `public/work/`, set `Project.image`, and provide meaningful alt text (rendered via `next/image`).

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Enables the contact CTA and footer email |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin (falls back to `VERCEL_PROJECT_PRODUCTION_URL`, then localhost) |

## Extension points

- Contact form: add only with a real provider; follow accessible-form and honest-state rules in `AGENTS.md`.
- Case-study pages: new `app/work/[slug]/page.tsx` driven by `projects.ts`.
- Dark theme: not planned; tokens are centralized if it is ever needed.
