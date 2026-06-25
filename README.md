# Restoration Medical

The parent site for **Restoration Medical** — *Refined by Medicine.*

## The model: one institution, many worlds (the "Apple Method")

One domain, one infrastructure — but each **institute** feels like its own
world (its own accent, hero, identity, content, team, and booking funnel),
the way `apple.com` makes Mac, iPhone, and iPad feel like separate sites under
one roof. Everything lives under `restorationmedical.ca` so all SEO authority
consolidates onto a single domain.

```
Restoration Medical (umbrella)
├── /                      Home — "choose your journey"
├── /about                 The institution & its standard
├── /physicians            Roster across all institutes
├── /locations
├── /resources
├── /careers
├── /contact               Consult request
│
├── /family-medicine       Institute of Family Medicine     (planned)
├── /pain-medicine         Institute of Pain Medicine        (planned)
├── /medical-aesthetics    Institute of Medical Aesthetics   (live → merge pending)
├── /rehabilitation        Institute of Rehabilitation       (planned)
├── /performance-medicine  Institute of Performance Medicine (planned)
└── /infusion-therapy      Institute of Infusion Therapy     (live → merge pending)
```

Each institute is built to grow into a full ~40–80 page world (services,
blog, education, FAQs, videos, testimonials, booking funnel).

## How the "different world" effect works

`src/layouts/Base.astro` takes an optional `institute` prop:

- **No prop** → umbrella chrome (Restoration Medical brand, "Institutes"
  mega-menu, house navigation).
- **With prop** → that institute's world: its accent token themes the whole
  page, the nav shows the institute identity and its own links, and a link
  leads back up to the institution. The global footer stays, tying every
  institute back to one practice.

All institute metadata (name, accent, hero copy, pillars, status) lives in
`src/data/institutes.ts`, so the home grid, nav, footer, and each landing page
stay in sync from one source.

## Stack

- [Astro](https://astro.build) (static output), deployed on Vercel
- Shared design system in `src/styles/global.css` — identical tokens, a tight
  two-family type system (Fraunces for display, Inter Tight for body and
  labels), and components used across all the sites, so the whole property
  reads as one practice.
- Shared client behaviour in `src/scripts/site.ts` (reveal-on-scroll, droplet
  cursor, ripple text, mega-menu, mobile drawer) and the hero canvas in
  `src/components/HeroMotif.astro`.
- `@astrojs/sitemap` + `robots.txt` for SEO.

## Status & next step: bringing the live institutes in-house

Medical Aesthetics and Infusion Therapy already exist as standalone sites
(`sho-design/ma1`, `sho-design/IT1`). Their landing pages here currently link
out to those live deployments. To finish the consolidation, the full page
trees from those repos need to be merged into `src/pages/medical-aesthetics/`
and `src/pages/infusion-therapy/`, with internal links rebased to the
subdirectory prefix and canonicals added.

That merge is **pending source access** to `sho-design/ma1` and
`sho-design/IT1` — this session is scoped to `sho-design/rm1` only. Re-scope a
session to include all three repos to complete it.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
```
