export type VideoCategory =
  | 'Colada'
  | 'Daiquiri'
  | 'Margarita'
  | 'Lemonade'
  | 'Specialty'
  | 'Maintenance'

export type Video = {
  /** YouTube video id (11 chars) */
  id: string
  title: string
  category?: VideoCategory | string
  /** short one-liner under the title in a card */
  blurb?: string
  /** longer description shown in the lightbox */
  description?: string
  /** optional custom thumbnail override */
  thumb?: string
}

import type { OrbFlavor } from '../components/decor/Orb'

export type Product = {
  slug: string
  name: string
  /** short hook line */
  tagline: string
  flagship?: boolean
  /** verbatim sourcing/craft description */
  description: string
  /** "great for" usage line */
  uses?: string
  /** sourcing tags — origin pills get a location pin, process pills get a flask */
  pills: { label: string; kind: 'origin' | 'process' }[]
  /** liquid-orb gradient key (used as a colour glow behind the photo + small swatches) */
  orb: OrbFlavor
  /** accent colour CSS var used for kicker / rule / number */
  accent: string
  /** real product bottle photo (in /public/ingredients) */
  image: string
}

export type StoryStat = {
  value: string
  label: string
}
