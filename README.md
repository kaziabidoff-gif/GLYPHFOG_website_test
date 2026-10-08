# GLYPHFOG

Official website for **GLYPHFOG**, a digital solutions company building websites, business software, AI-powered automation and brand design for small and growing businesses.

The site is a client-acquisition and trust-building product: it explains the company quickly, shows real (honestly labeled) work, describes the process, and makes contact easy.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) · React 19 · TypeScript
- Tailwind CSS v4 with design tokens as CSS variables
- [Motion](https://motion.dev) for scroll reveals (hero animation is CSS-only)
- Geist fonts, self-hosted via the `geist` package
- Deployed on Vercel

## Getting started

Requires Node.js 20+ and npm.

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build (the homepage prerenders statically) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

Before finishing any change: `npm run lint && npm run build`.

## Configuration

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact address for the CTA and footer. **Required before launch**; nothing is hard-coded. |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for metadata, sitemap and robots. On Vercel it falls back to the production URL. |

## Deployment

Push to a Git repository and import it in [Vercel](https://vercel.com). No extra configuration is needed. Set the two environment variables above in the Vercel project settings.

## Project structure

```text
src/
├── app/          layout, page, metadata routes (robots, sitemap, icon, OG images), globals.css (tokens)
├── components/   layout/, sections/, ui/, motion/
├── data/         typed content: site, navigation, capabilities, projects, process
├── lib/          glyph generator, OG image
└── types/        domain types
docs/             design system, motion, content, architecture
```

## Documentation

- [Design system](docs/DESIGN_SYSTEM.md): tokens, typography, layout, accessibility
- [Motion](docs/MOTION.md): principles, timing, reduced motion
- [Content](docs/CONTENT.md): positioning, voice, factual limits, **open items needing confirmation**
- [Architecture](docs/ARCHITECTURE.md): rendering, structure, data, extension points
- [AGENTS.md](AGENTS.md) / [CLAUDE.md](CLAUDE.md): guidance for AI coding agents
