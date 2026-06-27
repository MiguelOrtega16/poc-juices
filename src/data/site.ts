/**
 * Brand facts & verbatim copy sourced from the live freshblendzcommercial.com
 * (Quality · Consistency · Volume pillars, founder story, client roster).
 * No phone/email is published anywhere on the live site — all leads route
 * through the contact form, so we don't invent one.
 */
export const SITE = {
  name: 'Fresh Blendz Commercial',
  // appears on the brand's ribbon logo art (trucks / containers)
  tagline: 'Fresh is Best',
  pillarsLine: 'Quality. Consistency. Volume.',
  promise: '100% all-natural fresh fruit-based beverage mixes',
  serving: 'Hawaii · U.S. Mainland · Caribbean',
  founded: 1997,
  // no published email/phone — keep contact routed through the form
  email: '',
  playlists: {
    drinkMachine: 'https://www.youtube.com/playlist?list=PL591Yt7kLGvBINgN7ZGdXaYsWi-MJ16BP',
    blender: 'https://www.youtube.com/playlist?list=PL591Yt7kLGvADpj-bMckVVs00Cwv66YOg',
    channel: 'https://www.youtube.com/channel/UC_XeXXpkhiIiRWS19_hXz3A',
  },
}

export const PILLARS = [
  {
    key: 'quality',
    accent: 'var(--grad-lime)',
    title: 'Quality',
    body:
      'We source the highest quality ingredients from all over the world to create our healthy and superior mixes.',
    points: ['No Artificial Flavors', 'No Concentrates', 'No Preservatives', 'No High-Fructose Corn Syrup'],
  },
  {
    key: 'consistency',
    accent: 'var(--grad-sunset)',
    title: 'Consistency',
    body:
      'Serving a consistent product between bartenders and properties is easy with our instructional drink recipe videos.',
    points: ['Recipe video library', 'Repeatable pours', 'Same drink, every property'],
  },
  {
    key: 'volume',
    accent: 'var(--grad-ocean)',
    title: 'Volume',
    body:
      'Maximize sales during peak hours by integrating high-volume drink machines that increase production, improve consistency, and drive revenue.',
    points: ['High-volume Taylor machines', 'Equipment programs available', 'Built for peak hours'],
  },
]

export const STATS = [
  { value: '25+', label: 'Years of bar-program design' },
  { value: '100%', label: 'All-natural fresh fruit' },
  { value: '80+', label: 'Recipe videos' },
  { value: '3', label: 'Distribution regions' },
]

/** "Our Clients" logo wall (real logos downloaded from the live site). */
export type Client = { name: string; logo: string }
export const CLIENTS: Client[] = [
  { name: 'Ritz-Carlton', logo: '/clients/ritz-carlton.png' },
  { name: 'MGM Grand Las Vegas', logo: '/clients/mgm-grand.png' },
  { name: 'JW Marriott', logo: '/clients/jw-marriott.png' },
  { name: 'Marriott International', logo: '/clients/marriott-international.png' },
  { name: 'Kalahari Resorts', logo: '/clients/kalahari.png' },
  { name: 'Catalina Island Company', logo: '/clients/catalina-island.png' },
  { name: 'Marriott Vacations Worldwide', logo: '/clients/marriott-vacations.png' },
  { name: 'Picosos', logo: '/clients/picosos.png' },
]
