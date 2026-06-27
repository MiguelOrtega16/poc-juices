import type { Video } from './types'

/**
 * Recipe video library. IDs verified against the Bar Starz YouTube channel
 * (the channel founder Rick Fogel built before Fresh Blendz).
 */

export const DRINK_MACHINE_VIDEOS: Video[] = [
  { id: 'fADIIA0hJbk', title: 'Miami Vice', category: 'Colada', blurb: 'Piña Colada + Strawberry, layered' },
  { id: 'X4trUBiURmY', title: 'Piña Colada', category: 'Colada', blurb: 'The World’s Best, on tap' },
  { id: 'pRWduVl5pMo', title: 'Strawberry Mango Colada', category: 'Colada', blurb: 'Tropical triple-fruit blend' },
  { id: '83PWufn69Lw', title: 'Mango Colada', category: 'Colada', blurb: 'Kent mango meets coconut' },
  { id: '1MXBz9pbXxU', title: 'Raspberry Colada', category: 'Colada', blurb: 'Meeker raspberry swirl' },
  { id: 'EyUW4ewjfGs', title: 'Very Berry Colada', category: 'Colada', blurb: 'Strawberry + raspberry' },

  { id: 'K3C8y4lCWVU', title: 'Strawberry Daiquiri', category: 'Daiquiri', blurb: 'Chunky Camarosa strawberry' },
  { id: '7yOl4_8X2i8', title: 'Mango Daiquiri', category: 'Daiquiri', blurb: 'Sweet-tart Kent mango' },
  { id: '3KK4AcNmwlU', title: 'Berry Berry Daiquiri', category: 'Daiquiri', blurb: 'Double-berry frozen' },

  { id: 'fnJ31arBaEc', title: 'Classic Margarita', category: 'Margarita', blurb: 'Persian lime + cane sugar' },
  { id: 'jEe0qdcPowc', title: 'Mango Tango Rita', category: 'Margarita', blurb: 'Mango margarita twist' },
  { id: 'pAPXqM3M2DU', title: 'Strawberry Margarita', category: 'Margarita', blurb: 'Lime + fresh strawberry' },
  { id: 'qzZkg9c-IEY', title: 'Mango Margarita', category: 'Margarita', blurb: 'Balanced mango pour' },
  { id: 'dqru5tcv45M', title: 'Raspberry Margarita', category: 'Margarita', blurb: 'Bright berry rita' },
  { id: '4Vt4J2iF1ps', title: 'Very Berry Margarita', category: 'Margarita', blurb: 'Strawberry + raspberry rita' },
  { id: 'K_XvAYYZNcQ', title: 'Electric Margarita', category: 'Margarita', blurb: 'Electric-blue showstopper' },

  { id: 'MWZvzb3ku-E', title: 'Classic Lemonade', category: 'Lemonade', blurb: 'Eureka lemon sour mix' },
  { id: '3_ExBghZ-kw', title: 'Electric Lemonade', category: 'Lemonade', blurb: 'Glowing blue lemonade' },
  { id: '8737gwJrcQ8', title: 'Strawberry Mango Lemonade', category: 'Lemonade', blurb: 'Fruit-forward & tart' },
  { id: 'DshCfEQy1-Y', title: 'Strawberry Lemonade', category: 'Lemonade', blurb: 'Summer in a glass' },
  { id: '6rlvx257ymk', title: 'Mango Lemonade', category: 'Lemonade', blurb: 'Mango + lemon sour' },
  { id: 'LyeijYOG910', title: 'Raspberry Lemonade', category: 'Lemonade', blurb: 'Tart raspberry refresher' },
  { id: 'kGpV9Gn9qZ0', title: 'Very Berry Lemonade', category: 'Lemonade', blurb: 'Mixed-berry lemonade' },
]

export const BLENDER_VIDEOS: Video[] = [
  // Colada
  { id: 'CDgBZyY83mE', title: 'Piña Colada', category: 'Colada' },
  { id: 'BXaklmd17TQ', title: 'Mango Colada', category: 'Colada' },
  { id: 'RoJ9hwayTo4', title: 'Raspberry Colada', category: 'Colada' },
  { id: 'uvFSMJDUqCA', title: 'Strawberry Banana Colada', category: 'Colada' },
  { id: 'iH5dimZjilE', title: 'Strawberry Mango Colada', category: 'Colada' },
  { id: 'LSIVzPxRvhU', title: 'Strawberry Colada', category: 'Colada' },
  { id: 'whVHwizUmNw', title: 'Lava Flow', category: 'Colada' },
  { id: 'nZ-HDIKaw6c', title: 'Chi Chi Frozen', category: 'Colada' },
  { id: 'tR5Sy0t4ThM', title: 'Chi Chi Rocks', category: 'Colada' },
  { id: 'n83nGIaNBl8', title: 'Coco Rey Banana', category: 'Colada' },
  { id: '1yol8T5USjM', title: 'Miami Vice', category: 'Colada' },
  // Daiquiri
  { id: 'hNd66fcUgUg', title: 'Strawberry Daiquiri', category: 'Daiquiri' },
  { id: '3Vxkrjm9Iuk', title: 'Mango Daiquiri', category: 'Daiquiri' },
  { id: 'QtmKG0jnKiY', title: 'Raspberry Daiquiri', category: 'Daiquiri' },
  { id: 'IdWvSBcCMXE', title: 'Lime Daiquiri', category: 'Daiquiri' },
  { id: 'xIGEl9A7Olg', title: 'Strawberry Banana Daiquiri', category: 'Daiquiri' },
  // Margarita
  { id: '7c2Xnr23cgs', title: 'Classic Margarita', category: 'Margarita' },
  { id: 'GpHmea1OF80', title: 'Strawberry Margarita', category: 'Margarita' },
  { id: 'qKIrpbtdKwM', title: 'Raspberry Margarita', category: 'Margarita' },
  { id: 'B28Nu7oIYNU', title: 'Mango Tango Rita', category: 'Margarita' },
  { id: 'UTeygZ67b04', title: 'Cool Blue Margarita', category: 'Margarita' },
  { id: 'zB5BjYotTcQ', title: 'Cadillac Margarita', category: 'Margarita' },
  { id: 'XgyVIQYNFqg', title: 'Patron Top Shelf Marg', category: 'Margarita' },
  { id: 'hBU3Oku3MiA', title: 'Strawberry Banana Margarita', category: 'Margarita' },
  { id: 'DI9sea7tBHI', title: 'Top Shelf Margarita', category: 'Margarita' },
  { id: '-FrkTIDnKgk', title: 'SelvaRey Rita', category: 'Margarita' },
  // Lemonade
  { id: '79CewJu16cI', title: 'Electric Lemonade (Frozen)', category: 'Lemonade' },
  { id: 'B9uAGZFRU68', title: 'Electric Lemonade (Rocks)', category: 'Lemonade' },
  { id: 'Qd4b44cCcQQ', title: 'Lynchburg Lemonade (Frozen)', category: 'Lemonade' },
  { id: '_TPQeurFuRY', title: 'Lynchburg Lemonade (Rocks)', category: 'Lemonade' },
  // Specialty / tiki / classics / cream
  { id: '7hDEpJ3lEIw', title: 'Blue Hawaii', category: 'Specialty' },
  { id: 'KMhYgUjDqPs', title: 'Mai Tai', category: 'Specialty' },
  { id: 'YGo1G78-22g', title: 'Bahama Mama (Frozen)', category: 'Specialty' },
  { id: 'BaLZ_cqk_WA', title: 'Bahama Mama (Rocks)', category: 'Specialty' },
  { id: '29YqYz2mHPQ', title: 'Hurricane (Frozen)', category: 'Specialty' },
  { id: 'dbee_nv4A0s', title: 'Hurricane (Rocks)', category: 'Specialty' },
  { id: 'yDmfvf6JvJg', title: 'Rum Runner (Frozen)', category: 'Specialty' },
  { id: 's07tcYJLfBo', title: 'Rum Runner (Rocks)', category: 'Specialty' },
  { id: 'F4lhMQmrBDk', title: 'Island Berry Runner', category: 'Specialty' },
  { id: 'f_Ag-aGUxgE', title: 'Bomb Pop', category: 'Specialty' },
  { id: 'Vz_e3ZFasuE', title: 'Frosé', category: 'Specialty' },
  { id: 'G2a3C_JnREc', title: 'Banana Banshee', category: 'Specialty' },
  { id: 'Nz6sfWUa3mQ', title: 'Mudslide', category: 'Specialty' },
  { id: 'vYwFc9N3riI', title: 'Raspberry Mudslide', category: 'Specialty' },
  { id: 'y3phDomb7zs', title: 'Brandy Alexander (Frozen)', category: 'Specialty' },
  { id: 'pg44rY0vkQQ', title: 'Toasted Almond', category: 'Specialty' },
  { id: 'Xm9lLWEzGDA', title: 'Velvet Hammer', category: 'Specialty' },
  { id: 'A14_0Ugu9cM', title: 'Long Beach Iced Tea', category: 'Specialty' },
  { id: 'Vr5VDApxSQk', title: 'Long Island (Frozen)', category: 'Specialty' },
  { id: 'AorhIPi0UCU', title: 'Strawberry Long Island', category: 'Specialty' },
  { id: 'ZvXM-ahWVeM', title: 'Tom Collins', category: 'Specialty' },
  { id: 'TJdTFgAhDPw', title: 'Whiskey Sour', category: 'Specialty' },
  { id: 'it4Dvo4XujI', title: 'Twisted Whiskey', category: 'Specialty' },
  { id: '_b_fvjkdnfw', title: 'Waterloo Spritz', category: 'Specialty' },
]

export const BATCH_VIDEOS: Video[] = [
  { id: '7bnwhNKwN2Y', title: 'Piña Colada Batch', category: 'Colada', blurb: 'Pre-batched for service' },
  { id: 'XXI8tvkaa-4', title: 'Strawberry Daiquiri Batch', category: 'Daiquiri', blurb: 'Large-format batching' },
  { id: 'Ejy6fSoijKM', title: 'Margarita Batch', category: 'Margarita', blurb: 'Scale the classic' },
  { id: 'uvqskZQdz4I', title: 'Lemonade Batch', category: 'Lemonade', blurb: 'Crowd-ready lemonade' },
]

export const MAINTENANCE_VIDEOS: Video[] = [
  {
    id: 'F9SApnV9Atc',
    title: 'Taylor 432 — Disassemble & Reassemble',
    category: 'Maintenance',
    blurb: 'Full teardown walkthrough',
    description:
      'A complete how-to on safely disassembling and reassembling the Taylor 432 two-flavor drink machine for cleaning and sanitizing.',
  },
  {
    id: '0xPOQyDrwwA',
    title: 'Taylor Tune-Up Kit — 428 · 430 · 432',
    category: 'Maintenance',
    blurb: 'Seals, o-rings & scraper blades',
    description:
      'How to run a preventative tune-up on Taylor 428, 430 and 432 machines — replacing o-rings, seals and scraper blades to keep mixes flowing perfectly.',
  },
]
