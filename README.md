# GrantComply — Marketing Site

The GrantComply marketing website: a Next.js 15 + React 19 + Tailwind v4 redesign
of the original static landing page. Dark-mode-first, minimal, no animations
(hover transitions only).

## Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, Tailwind CSS v4 (CSS-first, no `tailwind.config.ts`)
- **Fonts:** Inter (sans) + Instrument Serif (hero), via `next/font`
- **Analytics:** Vercel Web Analytics
- **Deploy:** Vercel (auto-deploy from `main`)

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Structure

```
app/                 Routes (App Router)
  page.tsx           Landing (/)
  government/        + nonprofit, healthcare, education, public-safety, small-business
  pricing/ about/ blog/ privacy/ security/ terms/
  api/early-access/  POST endpoint (logs signups to data/early-access.jsonl)
  sitemap.ts robots.ts
components/           Reusable sections (hero, carousel, pricing, forms, …)
lib/
  content.ts         All marketing copy, organized by page
  metadata.ts        Per-page SEO/OG metadata helpers
public/
  og-image.png favicon.svg
  screenshots/       Drop real (blurred) product screenshots here — filenames
                     are referenced in lib/content.ts. Until present, the
                     carousel shows labeled placeholder slots.
```

## Verticals

Government and Nonprofit are live. Healthcare, Public Safety (Q4 2026),
Education, and Small Business (Q1 2027) are early-access pages. A 7th vertical
is TBD.

## Screenshots

Carousel images are referenced by path (e.g. `/screenshots/government-discovery.png`).
Add the PNGs to `public/screenshots/` and they replace the placeholders
automatically — no code change needed.
