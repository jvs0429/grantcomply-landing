# GrantComply — Light Redesign · Design Notes

## v3 addendum — font, headline, pain-point messaging

**Display font: Newsreader → Fraunces.** Newsreader read as a stock system serif
("default Times") at hero scale. Fraunces — a high-contrast old-style serif with a
live optical-size (`opsz`) axis — reads as a deliberate, characterful choice:
authority + warmth without tipping into boutique/fashion. Loaded via `next/font`
with `axes: ["opsz"]` (weight omitted so wght stays variable); `font-optical-sizing:
auto` lets it interpolate display contrast at 80px and steadier contrast at text
sizes. Body stays **IBM Plex Sans**, data/labels **IBM Plex Mono**.
Discipline learned from critique: reserve Fraunces for the hero, section H2s, and
pull-quotes — card/step titles dropped to Plex Sans 600 so serif = the brand's
voice, sans = product labeling. (Source Serif 4 / Newsreader were judged safer but
blander — they'd cost the page its point of view.)

**Headline: "Grants, without the dread."** Options considered:
1. *Grants, without the dread.* ← chosen — names the buyers' defining feeling (fear
   of getting it wrong), short, warm, universal, spacious for big type
2. Never miss another grant. · 3. Every grant, audit-ready. · 4. Stop leaving
   funding on the table. · 5. Win more grants. Fear fewer audits. · 6. The whole
   grant lifecycle, finally handled.
A 3-persona critique confirmed #1 lands hardest on the grant manager, survives for
the finance director (rescued by the subhead's "audit-ready closeout"), and is
backstopped for the nonprofit ED by the subhead + their own persona card. The
subheading carries the outcome and ties to the stats: *a two-person team can chase
the funding a ten-person team would.*

**Pain-point messaging — "Built for your world."** New section with a Today → With
GrantComply transformation per buyer: Cities & Counties (deadlines *and* 2 CFR Part
200 audit-readiness — serves both the grant manager and the finance director),
Nonprofits (ten applications out the door instead of two), plus an honest coming-soon
panel (fire, police, hospitals, universities, small business). CTAs throughout shifted
from generic to empathy/outcome-driven — "Start free — we set you up", "Get
audit-ready", "See what you'd qualify for", "Get early access" — same links.

---

# Light Redesign v2 · Design Notes

**The buyer.** A city finance director, county grant manager, or nonprofit ED. Tired of
juggling grants across spreadsheets, email, and five portals. Anxious about 2 CFR / ARPA /
federal deadlines. Afraid an audit will surface something they missed. Small team, big
responsibility. Skeptical of vendors who don't understand government reality.

Every choice below is in service of one feeling: *"Finally. Someone built this for me."*

## Typography — chosen for people who read dense rules all day

| Role | Typeface | Why |
|------|----------|-----|
| Display | **Newsreader** | An editorial serif optimized for reading dense text on screen. It carries authority *and* warmth without the boutique cream-serif cliché. Conceptual rhyme: the buyer reads 50-page NOFOs and CFR text — this face says "we make the complicated legible." |
| Body / UI | **IBM Plex Sans** | Civic-tech heritage (IBM; echoed across government design systems). Engineered, legible, institutional — but not cold. Speaks the buyer's world. |
| Data / labels | **IBM Plex Mono** | The signature material. Trust stats and step numerals are set in mono so the numbers read like a **clean audit summary / financial-statement readout** — the thing the finance director wishes every grant produced. |

Rejected: Inter (the default everyone reaches for), Fraunces (too boutique/editorial-fashion
for an anxious government buyer), Geist (reads "tech startup," not "public institution").

## Color — light, calm, accessible

- `bg #ffffff` · `surface #f8fafc` (slate-50 alt) · `surface-2 #f1f5f9`
- `ink #0f172a` (headlines) · `fg #1f2937` (body) · `muted #4b5563` · `faint #6b7280`
- `accent #2563eb` blue-600 (action) · hover `#1d4ed8`
- `accent-alt #10b981` emerald (the signature "audit-ready / live / done" relief color — used
  for fills, dots, hairline rules) · `accent-alt-strong #047857` for teal **text** (AA on white)
- `line #e5e7eb` · `line-strong #d1d5db`

Accessibility: all text colors clear WCAG AA on white. Teal at #10b981 fails as text on white,
so readable teal text uses #047857; #10b981 is reserved for non-text accents.

## Signature element — the audit ledger

The trust-stats band (**2 people · $30M · 10× · audit-ready**) is rendered as a financial-
statement readout: large Plex Mono numerals, hairline vertical column rules (the spreadsheet/
ledger the buyer lives in), with the "audit-ready" cell resolving to a teal check — the
emotional payoff. Boldness is spent here; everything else stays quiet.

## Structure (ruthlessly simplified)

Hero → audit ledger (stats) → "you know this cycle" empathy → how it works (3 numbered steps,
a real sequence: Discover → Apply → Stay audit-ready) → social proof (Judge Franklin + nonprofit
ED) → founder credibility (Jonathan, who lived it) → final CTA → footer.

Removed from the homepage: verticals grid, thesis triptych, roadmap, full pricing table — they
still live on their own pages. Nav trimmed to Government · Nonprofit · Pricing · About.

## Secondary button

In light theme a teal-filled button with white text fails contrast, so "Schedule Demo" is a
bordered/outline button (white, charcoal text, gray border) — cleaner and more ServiceNow-like
than a second filled color competing with the blue primary.

## CTAs (canonical)

- **Start Free Trial** → https://app.grantcomply.app/signup
- **Schedule Demo** → https://calendly.com/jonathanvstuart/30min
