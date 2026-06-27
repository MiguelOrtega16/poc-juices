import type { Product } from './types'

/** The seven Fresh Blendz mixes — descriptions verbatim from the Ingredients page. */
export const PRODUCTS: Product[] = [
  {
    slug: 'pina-colada',
    name: 'Piña Colada',
    tagline: 'The World’s Best',
    flagship: true,
    description:
      'Our flagship mix, known as the “World’s Best Piña Colada”. Coconut Crème from the Dominican Republic and Pineapple Juice from Costa Rica form the perfect base — and a final addition of Dole Crushed Pineapples from Hawaii gives it an unmatched texture and extra flavor boost.',
    uses: 'Coladas · Miami Vice · Lava Flow · frozen tiki',
    pills: [
      { label: 'Coconut Crème — Dominican Republic', kind: 'origin' },
      { label: 'Pineapple Juice — Costa Rica', kind: 'origin' },
      { label: 'Dole Crushed Pineapple — Hawaii', kind: 'origin' },
    ],
    orb: 'pina',
    accent: 'var(--pineapple)',
    image: '/ingredients/pina-colada.png',
  },
  {
    slug: 'margarita',
    name: 'Margarita',
    tagline: 'Frozen or on the rocks',
    description:
      'We start with “Persian” limes from California, chosen for their size and tart flavor, squeeze them fresh, and blend with pure cane simple syrup. Reverse osmosis pulls the water out so the mix works both frozen and — cut 1:1 with water — over the rocks. Versatile, consistent, fresh.',
    uses: 'Classic, Mango Tango & Cadillac margaritas · Long Islands',
    pills: [
      { label: '“Persian” Lime — California', kind: 'origin' },
      { label: 'Pure cane simple syrup', kind: 'process' },
      { label: 'Reverse-osmosis concentrated', kind: 'process' },
    ],
    orb: 'margarita',
    accent: 'var(--lime)',
    image: '/ingredients/margarita.png',
  },
  {
    slug: 'strawberry',
    name: 'Strawberry',
    tagline: 'Real chunky fruit',
    description:
      'Camarosa strawberries from Mexico, picked for their larger size and sweet flavor. We dice them into 3/8" pieces and mix with pure cane sugar at a 3+1 ratio of fruit to sugar — real chunks, real fruit.',
    uses: 'Daiquiris · Margaritas · Coladas · Frosé',
    pills: [
      { label: '“Camarosa” Strawberry — Mexico', kind: 'origin' },
      { label: 'Diced 3/8"', kind: 'process' },
      { label: '3 + 1 fruit-to-cane-sugar', kind: 'process' },
    ],
    orb: 'strawberry',
    accent: 'var(--guava)',
    image: '/ingredients/strawberry.png',
  },
  {
    slug: 'mango',
    name: 'Mango',
    tagline: 'Sweet, with a sour note',
    description:
      '“Kent” mangos from Mexico, balanced between sweet and slightly sour. We dice them into 1/4" pieces, make a purée, blend the two 1:1, and combine with pure cane sugar at a 3+1 ratio of fruit to sugar.',
    uses: 'Mango Tango Rita · Mango Colada · Mango Daiquiri',
    pills: [
      { label: '“Kent” Mango — Mexico', kind: 'origin' },
      { label: 'Diced 1/4" + purée, mixed 1:1', kind: 'process' },
      { label: '3 + 1 fruit-to-cane-sugar', kind: 'process' },
    ],
    orb: 'mango',
    accent: 'var(--mango)',
    image: '/ingredients/mango.png',
  },
  {
    slug: 'raspberry',
    name: 'Raspberry',
    tagline: 'Rich & sweet',
    description:
      '“Meeker” raspberries from Mexico, prized for their rich, sweet flavor. We strain them through a 1/4" screen and mix with pure cane sugar at a 4+1 ratio of fruit to sugar.',
    uses: 'Very Berry colada · Raspberry margarita · Mudslides',
    pills: [
      { label: '“Meeker” Raspberry — Mexico', kind: 'origin' },
      { label: 'Strained through 1/4" screen', kind: 'process' },
      { label: '4 + 1 fruit-to-cane-sugar', kind: 'process' },
    ],
    orb: 'raspberry',
    accent: 'var(--guava)',
    image: '/ingredients/raspberry.png',
  },
  {
    slug: 'sour-lemon',
    name: 'Lemon Sour',
    tagline: 'Lemonade, frozen or rocks',
    description:
      '“Eureka” lemons from California, chosen for their tart flavor and size. Squeezed fresh, blended with pure cane simple syrup, then reverse-osmosis concentrated so it works frozen or 1:1 over the rocks. Not only for lemonades — also Long Island Teas and Whiskey Sours.',
    uses: 'Lemonades · Long Island Teas · Whiskey Sours',
    pills: [
      { label: '“Eureka” Lemon — California', kind: 'origin' },
      { label: 'Pure cane simple syrup', kind: 'process' },
      { label: 'Reverse-osmosis concentrated', kind: 'process' },
    ],
    orb: 'lemon',
    accent: 'var(--pineapple)',
    image: '/ingredients/sour-lemon.png',
  },
  {
    slug: 'ice-cream',
    name: 'Ice Cream',
    tagline: 'Private-label by Edy’s',
    description:
      'A private label by Edy’s, at 10% butterfat — prime for blender drinks. It cuts in half when blended for the perfect balance. Mostly used in Mudslides and Bushwackers, but recommended for any ice-cream-based drink or smoothie.',
    uses: 'Mudslides · Bushwackers · smoothies',
    pills: [
      { label: 'Private label by Edy’s', kind: 'process' },
      { label: '10% butterfat', kind: 'process' },
      { label: 'Cuts in half when blended', kind: 'process' },
    ],
    orb: 'coconut',
    accent: 'var(--grape)',
    image: '/ingredients/ice-cream.png',
  },
]
