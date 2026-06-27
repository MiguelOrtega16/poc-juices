import { Link } from 'react-router-dom'
import { Icon } from './Icon'

type CtaBandProps = {
  kicker?: string
  title: string
  accentWord?: string
  text: string
  to?: string
  label?: string
}

/** Closing call-to-action — a vivid Bento gradient tile. */
export function CtaBand({ kicker = 'Lead with us', title, accentWord, text, to = '/contact', label = 'Contact Us for Distribution' }: CtaBandProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-tile reveal">
          <div className="cta-tile__inner">
            <span className="kicker">{kicker}</span>
            <h2 className="cta-tile__title">
              {title} {accentWord && <span className="accent">{accentWord}</span>}
            </h2>
            <p className="cta-tile__text">{text}</p>
            <Link to={to} className="btn btn--light btn--lg">
              {label}
              <Icon name="arrowUp" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
