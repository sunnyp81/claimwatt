# ClaimWatt — Stacker Checklist email sequence

Lead magnet: **2026 Federal + State Rebate Stacker Checklist** (PDF, `/stacker-checklist-2026.pdf`).
Capture: StaticForms on `EmailCapture.astro` → `/thanks/` instant download.

**Delivery status:** StaticForms only notifies Sunny; it does NOT auto-reply to the subscriber.
Instant download on `/thanks/` covers delivery today. To also email the PDF + run this nurture
sequence, wire an autoresponder — reuse `emailit-worker` (already used by citationgenerator for
instant-download/autoreply) or an ESP. Until then these are templates, not live sends.

US audience — use $ and US spelling. One-click unsubscribe required on every send (run
`/email-compliance` before going live).

---

## 0 · Delivery email (send immediately)

**Subject:** Your 2026 Rebate Stacker Checklist (inside)

Hi {first_name|there},

Here's your free checklist — download it here: {pdf_link}

One thing most people miss: state and utility rebates **reduce your federal 25C/25D basis**, so
your 30% is calculated on the lower number. Stacking still wins almost every time — but only if you
order the claims right. The checklist shows you exactly how.

Next, look up the exact programs for your state: {site_link}/state/

— The ClaimWatt team

{unsubscribe_link}

---

## 1 · Day 1 — the trap that costs the most

**Subject:** The $14,000 mistake on heat pumps

You can't claim **both** the federal 25C credit *and* a HEEHRA rebate on the same heat pump.
HEEHRA wins for income-qualified households (up to $14,000); 25C wins for higher earners.
Pick wrong and you leave thousands on the table.

How to choose in 2 minutes: {site_link}/federal/heehra-high-efficiency-electric-home-rebate/

{unsubscribe_link}

---

## 2 · Day 3 — the biggest legal stack

**Subject:** How to stack $8,000 + $3,200/yr on one retrofit

HOMES + 25C is the most powerful combo for a whole-home retrofit — and unlike most rebates,
the IRS does **not** treat HOMES as reducing your 25C basis. That's a rare double-dip that's
fully legal.

See the full stack (and the order to claim it): {site_link}/

{unsubscribe_link}

---

## 3 · Day 5 — "I don't know where to start"

**Subject:** Start with your state, not the IRS

Federal credits are the same everywhere — the real variation (and the deadlines that expire
first-come, first-served) is at the **state and utility** level. Find yours here, sorted by
technology: {site_link}/state/

{unsubscribe_link}

---

## 4 · Day 8 — get matched to an installer

**Subject:** Free quotes from vetted local installers

Most of these credits require a qualified contractor to file the paperwork. Get up to 4 free,
no-obligation quotes from pre-screened pros in your area: {affiliate_link}

(We may earn a commission — it costs you nothing and funds the free guides.)

{unsubscribe_link}

---

## Merge fields
`{first_name}` `{pdf_link}` `{site_link}` `{affiliate_link}` `{unsubscribe_link}`
