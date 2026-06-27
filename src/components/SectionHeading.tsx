import type { ReactNode, CSSProperties } from 'react'

type SectionHeadingProps = {
  no?: string
  eyebrow?: string
  title: ReactNode
  children?: ReactNode
  accent?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ no, eyebrow, title, children, accent = 'var(--mango)', align = 'left' }: SectionHeadingProps) {
  return (
    <div
      className={`sec-head sec-head--${align} reveal`}
      style={{ ['--accent-color' as string]: accent } as CSSProperties}
    >
      {eyebrow && (
        <span className="kicker">
          {no && <span className="kicker__no">{no}</span>}
          {eyebrow}
        </span>
      )}
      <h2 className="sec-head__title">{title}</h2>
      {children && <p className="lead measure">{children}</p>}
    </div>
  )
}
