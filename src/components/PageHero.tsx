import type { ReactNode, CSSProperties } from 'react'
import type { OrbFlavor } from './decor/Orb'

type PageHeroProps = {
  no: string
  eyebrow: string
  title: ReactNode
  lead?: string
  /** retained for call-site compatibility; no longer rendered */
  orb?: OrbFlavor
  accent?: string
  actions?: ReactNode
  dark?: boolean
}

/** Bold bento masthead: index no · kicker · oversized headline · lead. */
export function PageHero({ no, eyebrow, title, lead, accent = 'var(--mango)', actions, dark }: PageHeroProps) {
  return (
    <header
      className={`page-hero ${dark ? 'page-hero--dark' : ''}`}
      style={{ ['--accent-color' as string]: accent } as CSSProperties}
    >
      <div className="container page-hero__inner">
        <div className="page-hero__copy">
          <span className="kicker">
            <span className="kicker__no">{no}</span>
            {eyebrow}
          </span>
          <h1 className="page-hero__title">{title}</h1>
          {lead && <p className="page-hero__lead lead measure">{lead}</p>}
          {actions && <div className="page-hero__actions">{actions}</div>}
        </div>
      </div>
      <div className="container"><hr className="rule" /></div>
    </header>
  )
}
