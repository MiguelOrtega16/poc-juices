import { useState } from 'react'
import type { CSSProperties } from 'react'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { CtaBand } from '../components/CtaBand'
import { Icon } from '../components/Icon'
import { BarPlan } from '../components/decor/BarPlan'

type Station = { label: string; kind: 'machine' | 'mix' | 'cold' | 'batch'; top: string; left: string; w: string; h: string }
type Layout = { id: string; name: string; blurb: string; stations: Station[] }

const KINDS: { key: Station['kind']; label: string; desc: string; swatch: string }[] = [
  { key: 'machine', label: 'Drink Machines', desc: 'Taylor frozen-beverage freezers', swatch: 'var(--ocean)' },
  { key: 'mix', label: 'Mix Stations', desc: 'Fresh Blendz mixes, ready to pour', swatch: 'var(--mango)' },
  { key: 'cold', label: 'Cold Storage', desc: 'Reach-ins & walk-in for fresh mixes', swatch: 'var(--grape)' },
  { key: 'batch', label: 'Batch & Garnish', desc: 'Pre-batched best-sellers + garnish rail', swatch: 'var(--guava)' },
]

const LAYOUTS: Layout[] = [
  {
    id: 'island',
    name: 'Center Island Bar',
    blurb: 'A 360° island that serves guests on every side. Machines anchor the back line; mix and garnish stations sit within arm’s reach for fast, photogenic builds.',
    stations: [
      { label: 'Taylor 432', kind: 'machine', top: '8%', left: '20%', w: '24%', h: '16%' },
      { label: 'Taylor 432', kind: 'machine', top: '8%', left: '56%', w: '24%', h: '16%' },
      { label: 'Mix Rail', kind: 'mix', top: '40%', left: '12%', w: '30%', h: '14%' },
      { label: 'Mix Rail', kind: 'mix', top: '40%', left: '58%', w: '30%', h: '14%' },
      { label: 'Garnish', kind: 'batch', top: '70%', left: '20%', w: '26%', h: '14%' },
      { label: 'Batch Cooler', kind: 'cold', top: '70%', left: '54%', w: '26%', h: '14%' },
    ],
  },
  {
    id: 'resort',
    name: 'High-Volume Resort',
    blurb: 'Built for peak-hour throughput at a pool or resort bar. A wall of machines plus pre-batch storage keeps lines moving when hundreds of guests arrive at once.',
    stations: [
      { label: 'Taylor 432', kind: 'machine', top: '8%', left: '8%', w: '20%', h: '15%' },
      { label: 'Taylor 432', kind: 'machine', top: '8%', left: '32%', w: '20%', h: '15%' },
      { label: 'Taylor 432', kind: 'machine', top: '8%', left: '56%', w: '20%', h: '15%' },
      { label: 'Taylor 430', kind: 'machine', top: '8%', left: '80%', w: '14%', h: '15%' },
      { label: 'Mix Station', kind: 'mix', top: '40%', left: '10%', w: '36%', h: '14%' },
      { label: 'Batch Backup', kind: 'batch', top: '40%', left: '56%', w: '34%', h: '14%' },
      { label: 'Walk-in Cooler', kind: 'cold', top: '70%', left: '12%', w: '32%', h: '16%' },
      { label: 'Ice Bins', kind: 'cold', top: '70%', left: '56%', w: '32%', h: '16%' },
    ],
  },
  {
    id: 'compact',
    name: 'Compact / Pop-Up',
    blurb: 'A small footprint for a service bar, lounge or event activation. One countertop machine and a tidy mix station deliver frozen cocktails anywhere there’s power.',
    stations: [
      { label: 'Taylor 428', kind: 'machine', top: '12%', left: '30%', w: '40%', h: '20%' },
      { label: 'Mix Station', kind: 'mix', top: '46%', left: '14%', w: '34%', h: '16%' },
      { label: 'Reach-in', kind: 'cold', top: '46%', left: '54%', w: '32%', h: '16%' },
      { label: 'Garnish Rail', kind: 'batch', top: '72%', left: '28%', w: '44%', h: '14%' },
    ],
  },
]

const MACHINES = [
  { model: 'Taylor 428', type: 'Countertop · single flavor', specs: [['Freezing cylinder', '1 × 7 qt'], ['Refrigerated hopper', '1 × 20 qt'], ['Best for', 'Smoothies, shakes, single frozen cocktail']] },
  { model: 'Taylor 430', type: 'Countertop · single flavor', specs: [['Freezing cylinder', '1 cylinder'], ['Refrigerated hopper', 'Keeps mix < 41°F'], ['Best for', 'A signature frozen drink, compact bars']] },
  { model: 'Taylor 432', type: 'Two flavor · gravity-fed', specs: [['Freezing cylinders', '2 × 4 qt'], ['Refrigerated hoppers', '2 × 12 qt'], ['Best for', 'Miami Vice, two flavors, high volume']] },
]

const STEPS = [
  { t: 'Share your vision', d: 'Tell us your space, volume and the guest experience you want to create.' },
  { t: 'We design it', d: 'Working directly with your architect and designers to integrate equipment beautifully.' },
  { t: 'Build & integrate', d: 'We assist every step of the development and build-out — visually exciting and functional.' },
  { t: 'Train & launch', d: 'Recipe videos and on-site guidance get every bartender pouring consistently from day one.' },
]

const FEATURES = ['25+ Years Design Experience', 'High Volume & High End', 'Profitable Programs', 'WOW Your Guests']

export function EquipmentPrograms() {
  const [active, setActive] = useState(0)
  const [hotKind, setHotKind] = useState<Station['kind'] | null>(null)
  const layout = LAYOUTS[active]

  return (
    <>
      <PageHero
        no="Design"
        eyebrow="Personalized equipment programs"
        title={<>Expertise for every <span className="accent">experience</span>.</>}
        lead="With over 25 years of design experience — high volume and high end — we create custom cocktail programs that are unique, profitable and WOW your guests."
        orb="mango"
        accent="var(--mango)"
      />

      <section className="section section--tight">
        <div className="container">
          <div className="no-claims reveal">
            {FEATURES.map((f) => (
              <div className="no-claim" key={f}>
                <Icon name="sparkle" size={18} />
                <strong>{f}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive bar builder */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading no="Existing or new builds" eyebrow="Plan it" title={<>Your bar, <span className="accent">station by station</span></>}>
            Switch between real-world layouts and hover a station type to see where it lives. This is the kind of
            plan we build with you — tailored to your space and your volume.
          </SectionHeading>

          <div className="builder reveal" style={{ marginTop: '2.4rem' }}>
            <div className="builder__bar" role="group" aria-label="Choose a bar layout">
              {LAYOUTS.map((l, i) => (
                <button key={l.id} type="button" aria-pressed={active === i} className={`builder__tab ${active === i ? 'is-active' : ''}`} onClick={() => setActive(i)}>
                  <Icon name="ruler" size={16} />
                  {l.name}
                </button>
              ))}
            </div>
            <div className="builder__body">
              <div className="builder__stage">
                <BarPlan key={layout.id} stations={layout.stations} hotKind={hotKind} />
              </div>
              <div className="builder__info">
                <h3>{layout.name}</h3>
                <p>{layout.blurb}</p>
                <div className="legend">
                  {KINDS.map((k) => (
                    <button key={k.key} type="button" aria-pressed={hotKind === k.key} className="legend__item" onMouseEnter={() => setHotKind(k.key)} onMouseLeave={() => setHotKind(null)} onFocus={() => setHotKind(k.key)} onBlur={() => setHotKind(null)}>
                      <span className="legend__swatch" style={{ background: k.swatch }} />
                      <span>
                        <strong>{k.label}</strong>
                        <span>{k.desc}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Taylor machines */}
      <section className="section section--paper-2">
        <div className="container">
          <SectionHeading no="The hardware" eyebrow="What we program" title="Taylor machines" accent="var(--ocean)">
            We spec, place and program Taylor frozen-beverage machines — all with refrigerated hoppers that keep
            your fresh mixes below 41°F.
          </SectionHeading>
          <div className="machines">
            {MACHINES.map((m, i) => (
              <article className="machine reveal" key={m.model} data-delay={i + 1}>
                <span className="machine__no">0{i + 1}</span>
                <h3>{m.model}</h3>
                <span className="machine__type">{m.type}</span>
                <dl className="machine__spec">
                  {m.specs.map(([dt, dd]) => (
                    <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <SectionHeading no="How it works" eyebrow="The process" title="From your vision to opening night" />
          <div className="steps">
            {STEPS.map((s, i) => (
              <div className="step reveal" key={s.t} data-delay={i + 1} style={{ ['--accent-color' as string]: 'var(--mango)' } as CSSProperties}>
                <span className="step__no">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        kicker="Your vision"
        title="Contact us with"
        accentWord="your vision."
        text="We can answer any questions or concerns you might have about what the right plan is for your venue."
        label="Start Your Equipment Program"
      />
    </>
  )
}
