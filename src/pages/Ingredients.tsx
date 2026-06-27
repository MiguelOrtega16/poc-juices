import { useCallback, useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'
import { Icon } from '../components/Icon'
import { PRODUCTS } from '../data/products'

const NO_CLAIMS = ['No Artificial Flavors', 'No Concentrates', 'No Preservatives', 'No High-Fructose Corn Syrup']

export function Ingredients() {
  const [idx, setIdx] = useState(0)
  const count = PRODUCTS.length
  const go = useCallback((dir: number) => setIdx((i) => (i + dir + count) % count), [count])
  const p = PRODUCTS[idx]

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  return (
    <>
      <PageHero
        no="Sourcing"
        eyebrow="The ingredients"
        title={<>The best fruit <span className="accent">on earth</span>.</>}
        lead="Every Fresh Blendz mix starts with a specific fruit variety, from a specific place, processed a specific way. No concentrates, no shortcuts. Swipe through the lineup."
        accent="var(--pineapple)"
      />

      <section className="section section--tight">
        <div className="container">
          <div className="no-claims reveal">
            {NO_CLAIMS.map((c) => (
              <div className="no-claim" key={c}>
                <Icon name="check" size={20} />
                <strong>{c}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="ing-slider" style={{ ['--accent-color' as string]: p.accent } as CSSProperties}>
            <button className="ing-nav ing-nav--prev" onClick={() => go(-1)} aria-label="Previous ingredient">
              <Icon name="arrow" size={24} />
            </button>

            <div className="ing-stage">
              <article className="ing-slide" key={p.slug}>
                <div className="ing-photo" style={{ ['--glow' as string]: p.accent } as CSSProperties}>
                  <img src={p.image} alt={`Fresh Blendz ${p.name} mix bottle`} />
                </div>
                <div className="ing-body">
                  <span className="ing-no">{String(idx + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}{p.flagship ? ' · Flagship' : ''}</span>
                  <h2 className="ing-name">{p.name}<span className="ing-tagline">{p.tagline}</span></h2>
                  <p className="ing-desc">{p.description}</p>
                  <div className="pills">
                    {p.pills.map((pill) => (
                      <span className="pill" key={pill.label}>
                        <Icon name={pill.kind === 'origin' ? 'pin' : 'flask'} size={14} />
                        {pill.label}
                      </span>
                    ))}
                  </div>
                  {p.uses && (
                    <p className="ing-uses"><strong>Great in:</strong> {p.uses}</p>
                  )}
                </div>
              </article>
            </div>

            <button className="ing-nav ing-nav--next" onClick={() => go(1)} aria-label="Next ingredient">
              <Icon name="arrow" size={24} />
            </button>
          </div>

          <div className="ing-dots" role="tablist" aria-label="Choose an ingredient">
            {PRODUCTS.map((mix, i) => (
              <button
                key={mix.slug}
                role="tab"
                aria-selected={i === idx}
                aria-label={mix.name}
                className={`ing-dot ${i === idx ? 'is-active' : ''}`}
                style={{ ['--dot' as string]: mix.accent } as CSSProperties}
                onClick={() => setIdx(i)}
              >
                <span>{mix.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        kicker="Taste it"
        title="Taste the"
        accentWord="difference."
        text="One simple taste test shows why the highest-rated hotels in the world made the switch. Let's set one up."
        label="Request a Taste Test"
      />
    </>
  )
}
