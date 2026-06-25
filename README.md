# Restoration Medical

The parent practice site for **Restoration Medical** — *Refined by Medicine.*

It is built to consolidate SEO authority onto a single domain: the two existing
division sites live **within** this site as subdirectory route trees rather than
on separate domains.

- `/medical-aesthetics` → Medical Aesthetics division
- `/infusion-therapy` → Infusion Therapy division

## Stack

- [Astro](https://astro.build) (static output), deployed on Vercel
- Shared design system in `src/styles/global.css` — identical tokens, type
  (Fraunces / Inter Tight / Spline Sans Mono), and components used across all
  three sites, so the whole property reads as one practice.
- Shared client behaviour in `src/scripts/site.ts` (reveal-on-scroll, droplet
  cursor, ripple text, mega-menu, mobile drawer) and the hero canvas in
  `src/components/HeroMotif.astro`.

## Structure

```
src/
  layouts/Base.astro        # head, nav + mega-menu, mobile drawer, footer, grain
  components/HeroMotif.astro # animated hero orb
  pages/
    index.astro              # homepage
    practice.astro           # how we practise / clinical standard
    team.astro               # roster (placeholder bios)
    contact.astro            # consult request form
    privacy / terms / accessibility
    404.astro
    medical-aesthetics/index.astro   # division landing (links to full site)
    infusion-therapy/index.astro     # division landing (links to full site)
```

## Status & next step: bringing the divisions in-house

The division landing pages currently link out to the live division
deployments (`ma1` and `IT1`). To complete the consolidation, the full page
trees from those two repos need to be merged into `src/pages/medical-aesthetics/`
and `src/pages/infusion-therapy/`, with their internal links rebased to the
subdirectory prefix.

That merge is pending source access to `sho-design/ma1` and `sho-design/IT1`
(this session is scoped to `sho-design/rm1` only).

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
```
