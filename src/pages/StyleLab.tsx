import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Orb } from '../components/decor/Orb'
import { Icon } from '../components/Icon'
import { THEMES } from '../data/themes'
import type { OrbFlavor } from '../components/decor/Orb'

const SPEC_ROWS: { no: string; name: string; tag: string; orb: OrbFlavor }[] = [
  { no: '01', name: 'Piña Colada', tag: "World's Best", orb: 'pina' },
  { no: '02', name: 'Margarita', tag: 'Frozen or rocks', orb: 'margarita' },
  { no: '03', name: 'Strawberry', tag: 'Real chunky fruit', orb: 'strawberry' },
]

export function StyleLab() {
  return (
    <>
      <PageHero
        no="Pick a tone"
        eyebrow="Style lab"
        title={<>Five ways it could <span className="accent">feel</span>.</>}
        lead="The same content in five different colour & type tones, shown as specimens below. (The live site now uses the Bold Bento direction — these are kept for reference.)"
        orb="grape"
        accent="var(--grape)"
        actions={
          <Link to="/directions" className="link-arrow">
            These only recolour the layout — see the other art directions <Icon name="arrow" size={16} />
          </Link>
        }
      />

      <section className="section section--tight">
        <div className="container">
          <div className="lab-grid">
            {THEMES.map((t, i) => (
              <article className="spec reveal" data-theme={t.id} key={t.id} data-delay={(i % 2) + 1}>
                <div className="spec__canvas">
                  <span className="kicker"><span className="kicker__no">{String(i + 1).padStart(2, '0')}</span>{t.name}</span>
                  <h2 className="spec__headline">
                    World’s Best <span className="accent">Cocktail</span> Mixes
                  </h2>
                  <p className="spec__lead">
                    100% all-natural fresh fruit mixes — top-shelf flavor, built for high-volume performance.
                  </p>
                  <div className="spec__actions">
                    <button type="button" className="btn" tabIndex={-1}>Distribution <Icon name="arrowUp" size={15} /></button>
                    <span className="link-arrow">Watch videos <Icon name="arrow" size={14} /></span>
                  </div>

                  <hr className="rule" style={{ margin: '1.4rem 0 0.4rem' }} />
                  <div className="spec__rows">
                    {SPEC_ROWS.map((r) => (
                      <div className="spec__row" key={r.no}>
                        <span className="spec__row-no">{r.no}</span>
                        <Orb flavor={r.orb} size={34} />
                        <span className="spec__row-name">{r.name}</span>
                        <span className="spec__row-tag accent">{r.tag}</span>
                      </div>
                    ))}
                  </div>

                  <div className="spec__night">
                    <span>Quality. Consistency. <span className="accent">Volume.</span></span>
                    <span className="spec__chip">Fresh is Best</span>
                  </div>
                </div>

                <div className="spec__meta">
                  <div>
                    <strong>{t.name}</strong>
                    <p>{t.tone}</p>
                  </div>
                  <div className="spec__metaside">
                    <span className="spec__type">{t.type}</span>
                    <span className="spec__sw">
                      {t.swatches.map((c, s) => <span key={s} style={{ background: c }} />)}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
