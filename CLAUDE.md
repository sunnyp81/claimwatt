# claimwatt — Project Brain

> Per-repo brain, migrated from central claude-memory 2026-06-20. Canonical project memory now lives here.

## Current state

claimwatt.com — US energy rebate programmatic SEO site. Affiliate (energy/solar partners) + lead-gen play.

- **Stack:** Astro 5 + Tailwind 4 + content collections + MDX + @astrojs/sitemap. Static SSG. Per-page OG via satori + @resvg/resvg-js.
- **Pages:** 176 (8 utility, 9 federal credits + hub, 51 state hubs + hub, 12 state×tech, 6 tech hubs + hub, 25+ guides, 39+ programs, 25 city overlays).
- **Repo:** `sunnyp81/claimwatt` (public). Local: `C:\Users\sunny\repos\claimwatt`. Branch: `main`.
- **Domain:** claimwatt.com (Sunny owns).
- **Status (Apr 27 2026):** Built and pushed (all 176 pages on `origin/main`). NOT yet deployed to CF Pages or pointed at custom domain — verify live status before assuming. Hermes flagged it DOWN because the custom domain wasn't live yet.
- **Deploy:** CF Pages — connect Git, build `npm run build`, output `dist`, production branch `main`, `NODE_VERSION=22`. `git push` uses Windows Credential Manager cached PAT (no env var / gh CLI needed).

## Key facts & warnings

- **Audit-clean:** 0 LLM fluff, 100% unique titles/descriptions, all schemas parse (Organization, WebSite, Article, GovernmentService, HowTo, FAQPage, CollectionPage, BreadcrumbList), 500+ word floor met. State hubs score lowest (~82/100) — templated prose; writing unique 200-word per-state intros (from `src/data/states.ts`) would lift topical authority.
- **IndexNow key** `730da0f88a8dc3d7dd475da2413707b7` — this is a public verification file already shipped in `public/`, not a secret.
- Affiliate IDs are placeholders (`href="#"`) until Modernize/EnergySage/Networx/Tesla/Amazon accounts approved. StaticForms accessKey in `EmailCapture.astro` is a placeholder — needs real key (lives in ai-memory vault, never commit). Lead-magnet PDF ("Federal + State Stacker Checklist 2026") doesn't exist yet.
- **Architecture quirks:** `/llms.txt` is dynamic (`src/pages/llms.txt.ts`); robots.txt + ai.txt explicitly allow AI crawlers; OG images are 173 PNGs in `public/og/` with manifest `src/data/og-manifest.json` (Base.astro reads `ogSlug` → manifest → `og-default.png`); `findProgramSlug()` in `src/data/programs.ts` fuzzy-matches; generation script `scripts/build-og-pages.mjs`.

## History

- 2026-04-26/27 — Built + pushed. Commits: `c43e800` Wave 1 (112 pages), `1f52d20` Wave 2 (+64 pages + per-page OG), `e59ae55` audit fixes. Ship-decision routine `trig_01KhX8XkMxU8hY8H3Y2JxXsy` fired Mon 2026-05-11.
- Wave 2 backlog (not built): real affiliate IDs, StaticForms key, lead-magnet PDF, DSIRE bulk scrape (3,000 program pages, phase 200 first), bigger city set (~1,000 city overlays).
