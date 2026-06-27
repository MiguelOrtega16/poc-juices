export type ThemeId = 'editorial' | 'midnight' | 'coastal' | 'sunset' | 'pop'

export type Theme = {
  id: ThemeId
  name: string
  tone: string
  /** type pairing label */
  type: string
  /** swatches for the preview chip: [paper, ink, accentA, accentB] */
  swatches: [string, string, string, string]
}

export const THEMES: Theme[] = [
  {
    id: 'editorial',
    name: 'Editorial Ivory',
    tone: 'Warm ivory + ink, deep jewel accents. Calm, premium, magazine.',
    type: 'Fraunces · Inter',
    swatches: ['#f7f1e6', '#1a1611', '#b53e07', '#0a7a6e'],
  },
  {
    id: 'midnight',
    name: 'Midnight',
    tone: 'Dark, cinematic luxe. Neon-tropical accents glow against near-black.',
    type: 'Fraunces · Inter',
    swatches: ['#15120c', '#f6efe1', '#ff7d33', '#2ec7b4'],
  },
  {
    id: 'coastal',
    name: 'Coastal Fresh',
    tone: 'Bright, cool, crisp. Ocean teal + citrus, a clean modern grotesque.',
    type: 'Space Grotesk · Inter',
    swatches: ['#f4fbfb', '#0f312f', '#098a81', '#df5d0c'],
  },
  {
    id: 'sunset',
    name: 'Sunset Craft',
    tone: 'Warm cream + terracotta, softer & rounder. Artisanal and inviting.',
    type: 'Fraunces · Inter',
    swatches: ['#fdf3e6', '#2a1810', '#cf4e08', '#c32a52'],
  },
  {
    id: 'pop',
    name: 'Bold Pop',
    tone: 'Sunny, punchy, expressive. Big bold type and rounded shapes.',
    type: 'Bricolage · Inter',
    swatches: ['#fffcf1', '#181203', '#ef520b', '#df185a'],
  },
]
