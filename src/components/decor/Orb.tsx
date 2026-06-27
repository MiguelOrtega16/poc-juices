import type { CSSProperties } from 'react'

export type OrbFlavor =
  | 'pina'
  | 'margarita'
  | 'strawberry'
  | 'mango'
  | 'raspberry'
  | 'lemon'
  | 'ocean'
  | 'coconut'
  | 'grape'
  | 'hero'

type OrbProps = {
  flavor: OrbFlavor
  size?: number | string
  shape?: 'circle' | 'blob'
  float?: boolean
  className?: string
  style?: CSSProperties
}

/**
 * Abstract "liquid" gradient orb — the bespoke decorative language that
 * replaces literal fruit illustrations. Pure CSS, scales crisply.
 */
export function Orb({ flavor, size = 120, shape = 'circle', float = false, className = '', style }: OrbProps) {
  return (
    <span
      className={`orb orb--${flavor} ${shape === 'blob' ? 'orb--blob' : ''} ${float ? 'orb--float' : ''} ${className}`}
      style={{ width: size, height: size, ...style }}
      aria-hidden="true"
    />
  )
}
