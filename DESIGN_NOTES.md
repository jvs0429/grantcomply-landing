# GrantComply — Light Redesign v2 · Design Notes

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
