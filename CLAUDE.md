# CLAUDE.md

GLYPHFOG company website (Next.js 16, TypeScript, Tailwind v4). Operational rules for agents are in [AGENTS.md](AGENTS.md); read it first. Next.js here differs from older versions: check `node_modules/next/dist/docs/` before using framework APIs.

## Source of truth

- Design → [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md)
- Motion → [docs/MOTION.md](docs/MOTION.md)
- Content, voice, factual limits, open questions → [docs/CONTENT.md](docs/CONTENT.md)
- Architecture → [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)

Update the relevant doc in the same change when behavior changes. Do not duplicate their contents here.

## Commands

`npm run dev` · `npm run lint` · `npm run build` (run lint and build before declaring done)

## Non-negotiables

1. Factual honesty: no invented proof, results or capabilities; label project types truthfully.
2. Tokens only for color; light theme; restrained accent.
3. Accessible by default (semantics, focus, contrast, reduced motion).
4. Keep it simple and fast: static, minimal client JS, minimal dependencies.
