# GLYPHFOG Content

Source of truth for messaging and factual limits. Copy lives in `src/data/*` and `src/components/sections/*`.

## Positioning

> GLYPHFOG builds practical digital solutions around real business needs.

Business understanding + design + software + automation. Philosophy: *Understand the problem first. Then build the right solution.* Conceptual flow: Problem → Structure → Solution → Growth.

## Messaging hierarchy

1. Eyebrow: `GLYPHFOG · DIGITAL SOLUTIONS`
2. Headline: *We build digital solutions for growing businesses.*
3. Support: *Websites, business software, automation and design, shaped around what your business actually needs.*
4. CTAs: **Start a project** / **View our work**

Homepage story, in order: Hero → Problem → Capabilities → What we build → Selected work → Process → Why GLYPHFOG (philosophy) → About → Contact. Section labels are numbered `01`–`08`.

## Capabilities

| # | Capability | Positioning |
| --- | --- | --- |
| 01 | Websites | Establishing a strong digital presence. |
| 02 | Business Software | Turning business processes into useful software. |
| 03 | AI & Automation | Reducing manual work and making systems smarter. |
| 04 | Branding & Creative | Making the business communicate clearly and consistently. |

AI is one capability, not the brand. Do not imply AI research capability.

## Project metadata (`src/data/projects.ts`)

Each project has `title, category, type, description, technologies, status, image`. `type` is one of Client, Freelance, University, Personal, Concept, Prototype. Problem is described before technology.

| Project | Type | Status wording | Source |
| --- | --- | --- | --- |
| Noashal Rosui Ghor | Freelance | Delivered freelance website | Founder brief |
| MEDSYNC | University | Academic project. Not a deployed healthcare product. | Founder brief + project notes |
| Franchise Brand Management System (FBMS) | University | Software engineering course project | Founder brief |

`image: null` renders an abstract glyph placeholder. It is never presented as a screenshot.

## Voice and tone

Clear, direct, intelligent, calm, confident, human. Specific over impressive. US English. No hype words (revolutionary, world-class, next-generation, cutting-edge, disruptive, "10x"), no fake urgency, no exclamation marks.

## Hard factual limits

Never publish: client names, testimonials, logos, counts, awards, certifications, statistics, revenue, user numbers, partnerships, performance or conversion claims, or case-study results that cannot be backed up. No fake social accounts or legal pages. The contact area must not pretend a form exists.

## Needs founder / client confirmation

Anything below is **unresolved** and should be settled before launch.

- [ ] **Contact email** (blocking). Not set. Provide it via `NEXT_PUBLIC_CONTACT_EMAIL`. Until then the contact section shows "Direct contact details are being set up" and the footer links to `#contact`.
- [ ] **Production domain.** Set `NEXT_PUBLIC_SITE_URL` (or rely on Vercel's production URL). Canonical, sitemap, robots and Open Graph URLs fall back to `localhost` otherwise.
- [ ] **Business name spelling:** "Noashal Rosui Ghor" (used) vs "Noauhal Rosui Ghor" (appears in some project notes).
- [ ] **Noashal Rosui Ghor details:** live URL, whether a screenshot may be shown, exact scope (menu, ordering, messaging channel), client permission to be named.
- [ ] **MEDSYNC / FBMS:** confirm the technologies listed (FBMS lists only Node.js, Express, MySQL; any React frontend not stated), course names if wanted, and whether screenshots or a demo may be shown.
- [ ] **About section:** founder name, photo and bio wording. Current text is deliberately generic and based on: software/web development, database projects, brand design, running a small food business.
- [ ] **Location line** in the footer ("Dhaka, Bangladesh").
- [ ] **Final logo asset.** The current mark and wordmark are interim.
- [ ] **Social / professional links.** None are published; add only real, verified profiles to `site.social`.
- [ ] **Privacy / legal pages.** Not created. Add only when real.
