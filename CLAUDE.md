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
- **Conversion path (fixed 2026-06-26):** Lead-magnet PDF now EXISTS at `public/stacker-checklist-2026.pdf` (real 2-page checklist built from `federal.ts`/`states.ts` data — the 8 federal credits, stacking matrix, traps, claim checklists). `/thanks/` delivers it as an **instant download** (StaticForms can't auto-reply). StaticForms accessKey is now live (`sf_9e906eb6c00416b9d3354749` in `EmailCapture.astro`). Email nurture sequence drafted in `marketing/lead-magnet-emails.md` (templates only — needs emailit-worker/ESP to send).
- **Affiliate links** now resolve via central config `src/data/affiliates.ts` (`affiliateHref()`); all return `#` until enabled. 🔴 £-BLOCKER (Sunny): sign up + get approved for Modernize / Networx / EnergySage publisher accounts, paste tracking links into `affiliates.ts`, flip `enabled:true`. Amazon needs claimwatt.com registered on Associates + a `claimwatt-21` tag (do NOT reuse another site's tag). This is the binding constraint on ALL monetization (affiliate cards AND the email list).
- **Traffic reality (GSC, May–Jun 2026):** near-zero — ~150 impressions/8wk, 0 clicks, positions 40-100; only ~9 of 176 pages get impressions (state hubs FL/MA/TX). Close-to-page-1 outliers: `/state/north-dakota/` pos 8.8, `/technology/ev/` pos 19. Ranking is a separate, bigger bet (links/authority) — not yet pursued.
- To regenerate the PDF: edit `scratchpad` HTML source / re-run headless Chrome `--print-to-pdf` (`scripts/`-free; built ad hoc 2026-06-26).
- **Architecture quirks:** `/llms.txt` is dynamic (`src/pages/llms.txt.ts`); robots.txt + ai.txt explicitly allow AI crawlers; OG images are 173 PNGs in `public/og/` with manifest `src/data/og-manifest.json` (Base.astro reads `ogSlug` → manifest → `og-default.png`); `findProgramSlug()` in `src/data/programs.ts` fuzzy-matches; generation script `scripts/build-og-pages.mjs`.

## History

- 2026-04-26/27 — Built + pushed. Commits: `c43e800` Wave 1 (112 pages), `1f52d20` Wave 2 (+64 pages + per-page OG), `e59ae55` audit fixes. Ship-decision routine `trig_01KhX8XkMxU8hY8H3Y2JxXsy` fired Mon 2026-05-11.
- Wave 2 backlog (not built): real affiliate IDs, StaticForms key, lead-magnet PDF, DSIRE bulk scrape (3,000 program pages, phase 200 first), bigger city set (~1,000 city overlays).
- 2026-06-26 — **Conversion-path fix** (chose "fix £ path" over ranking push; ~0 traffic so on-page won't earn). Built + delivered the Stacker Checklist lead magnet (PDF + instant download on `/thanks/`), refactored affiliate links to `src/data/affiliates.ts` central config, drafted email nurture sequence. Build clean (176 pages). NOT yet pushed/committed. Remaining £-blocker = affiliate publisher accounts (Sunny signup).
