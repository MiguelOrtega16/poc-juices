# Fresh Blendz Commercial — Bold Bento Rebuild (POC)

A from-scratch reimagining of [freshblendzcommercial.com](https://freshblendzcommercial.com) in the
**Bold Bento Color-Block** direction: a bento grid of vivid colour-block tiles, big bold
**Bricolage Grotesque** display type, rounded shapes, real product photos and client logos, and the
tropical palette used as full surfaces. Energetic, modern, premium. Built to run locally.

> Other directions explored along the way (Editorial Ivory, Dark Immersive, Warm Craft) are kept as
> previews on the **`/directions`** page for reference.

## Run it

```bash
npm install
npm run dev      # opens http://localhost:5180
```

Other scripts:

```bash
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build
```

> Requires Node 18+ (built and tested on Node 22).

## What's inside

| Page | Highlights |
|------|-----------|
| **Home** | Tropical sunset hero, animated marquee, the three pillars (Quality · Consistency · Volume), mix lineup, recipe-video teaser, client wall |
| **Drink Machine / Blender / Batch Recipes** | Filterable video galleries (Colada · Daiquiri · Margarita · Lemonade · Specialty). Cards are a **YouTube facade** — only the thumbnail loads until you click; the real video then opens in an accessible lightbox |
| **Ingredients** | Each mix with verbatim sourcing copy, origin/variety pills, colour-coded by flavour + an at-a-glance reference grid |
| **Equipment Programs** | An **interactive bar-build visualiser** (Center Island / High-Volume Resort / Compact) — hover a station type to light it up — plus Taylor 428/430/432 spec cards and the design process. (Replaces the old static schematics.) |
| **Machine Maintenance** | Populated from the (currently empty) live page: the two real Taylor how-to videos + a Daily/Weekly/Quarterly routine |
| **Distribution** | Land-to-water reach map (Hawaii · U.S. mainland · Caribbean) and shipping modes |
| **Our Story** | Founder Rick Fogel's 35-year journey as a timeline (Bar Starz, est. 1997 → Marriott challenge → Fresh Blendz) |
| **Contact** | Lead-capture form (the live site publishes no phone/email — everything routes through the form) |

## How it's built

- **Vite + React + TypeScript** (SPA via `react-router-dom`)
- **Bespoke CSS design system** — no UI framework. Tokens live in [`src/styles/tokens.css`](src/styles/tokens.css);
  shared component + page styles in `src/styles/`. Accent colours are tuned to pass WCAG AA as text on
  ivory; the bright colour pop lives in the orb gradients.
- **Type:** Bricolage Grotesque (bold display) + Space Grotesk (labels) + Inter (body).
- **Icons:** one consistent family — [`lucide-react`](https://lucide.dev).
- **Decoration:** liquid gradient orbs ([`src/components/decor/Orb.tsx`](src/components/decor/Orb.tsx)) + real product
  photos ([`public/ingredients/`](public/ingredients/)) and client logos ([`public/clients/`](public/clients/)).
- **Content is data-driven** — see [`src/data/`](src/data/): `products.ts`, `videos.ts`, `site.ts`.
  All copy, the product lineup and **80+ real recipe video IDs** were sourced from the live site and the
  Bar Starz YouTube channel.
- Reveal-on-scroll via a tiny `IntersectionObserver` hook; motion respects `prefers-reduced-motion`.

## Try the tones (Style Lab)

Not sure on the exact look? The site ships with **5 swappable tone/style themes**:

| Theme | Feel | Type |
|-------|------|------|
| Editorial Ivory *(default)* | Warm ivory + ink, deep jewel accents | Fraunces · Inter |
| Midnight | Dark, cinematic luxe, glowing accents | Fraunces · Inter |
| Coastal Fresh | Bright, cool, crisp modern | Space Grotesk · Inter |
| Sunset Craft | Warm cream + terracotta, rounder | Fraunces · Inter |
| Bold Pop | Sunny, punchy, expressive | Bricolage · Inter |

- Use the **floating control (bottom-right)** to re-skin the whole site live (it remembers your pick).
- Visit **`/style-lab`** to compare all five as specimens side-by-side.
- Each theme is just a remap of the CSS tokens in [`src/styles/themes.css`](src/styles/themes.css) — easy to tweak or add more.

**Different *layouts*, not just colours:** [`/directions`](src/pages/Directions.tsx) previews the alternative
**art directions** the build didn't go with — Bold Bento Color-Block, Dark Immersive, Warm Craft/Sunset —
plus four **decoration/imagery** treatments (liquid orbs, real photography, minimal duotone, type-only).
Self-contained specimens in [`src/components/directions/`](src/components/directions/).

The **Ingredients** page uses the real Fresh Blendz product photos (downloaded to
[`public/ingredients/`](public/ingredients/)) floating over a soft colour glow.

## Notes & next steps

- The contact form is front-end only (POC) — wire it to your backend / form service to go live.
- `"Fresh is Best"` appears only on the brand's logo art, so it's used as a footer tagline, not a headline.
- Fonts (Fraunces + Inter) load from Google Fonts; self-host them for a fully offline build.
- Recipe video IDs are in `src/data/videos.ts` — easy to add/swap as the channel grows.
