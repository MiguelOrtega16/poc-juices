import { useState } from 'react'
import type { CSSProperties } from 'react'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { CtaBand } from '../components/CtaBand'
import { Icon } from '../components/Icon'
import { IsoBar } from '../components/decor/IsoBar'
import type { IsoKind, IsoModule } from '../components/decor/IsoBar'

type Layout = { id: string; name: string; blurb: string; counter: { w: number; d: number; h: number }; modules: IsoModule[] }

const KINDS: { key: IsoKind; label: string; desc: string; swatch: string }[] = [
  { key: 'machine', label: 'Drink Machines', desc: 'Taylor freezers — Cha Cha, Mango Tango, Strawberry, Bomb Pop', swatch: '#0c9a8b' },
  { key: 'mix', label: 'Mix Stations', desc: 'Fresh Blendz mixes & back-up batches, ready to pour', swatch: '#ef5f1a' },
  { key: 'cold', label: 'Cold Storage', desc: 'Walk-in, reach-ins & the upright beer cooler', swatch: '#6f3bc2' },
  { key: 'batch', label: 'Batch & Service', desc: 'Batch cocktails, monster cups, dry storage & ice bins', swatch: '#e23a68' },
]

// Real station names lifted from a Fresh Blendz bar plan. Coordinates are on an
// isometric floor grid (gx → right, gy → back, sizes in grid units).
const LAYOUTS: Layout[] = [
  {
    id: 'island',
    name: 'Center Island Bar',
    blurb: 'A 360° island that serves guests on every side. Four flavor machines anchor the back line — Cha Cha, Mango Tango, Strawberry, Bomb Pop — with mixes, batch cocktails and ice bins within arm’s reach for fast, photogenic builds.',
    counter: { w: 22, d: 7, h: 3 },
    modules: [
      { id: 'batch', label: 'Batch Cocktails', kind: 'batch', variant: 'cabinet', gx: 0.7, gy: 1, w: 2.4, d: 2, h: 4.6 },
      { id: 'cha', label: 'Cha Cha', kind: 'machine', variant: 'machine', gx: 3.6, gy: 1, w: 1.7, d: 2, h: 3.6 },
      { id: 'mango', label: 'Mango Tango', kind: 'machine', variant: 'machine', gx: 5.7, gy: 1, w: 1.7, d: 2, h: 3.6 },
      { id: 'straw', label: 'Strawberry', kind: 'machine', variant: 'machine', gx: 7.8, gy: 1, w: 1.7, d: 2, h: 3.6 },
      { id: 'bomb', label: 'Bomb Pop', kind: 'machine', variant: 'machine', gx: 9.9, gy: 1, w: 1.7, d: 2, h: 3.6 },
      { id: 'beer', label: 'Beer', kind: 'cold', variant: 'cooler', gx: 12.1, gy: 1, w: 2.3, d: 2, h: 5.6 },
      { id: 'mixes', label: 'Mixes', kind: 'mix', variant: 'rail', gx: 14.9, gy: 1.2, w: 3.4, d: 1.8, h: 2.2 },
      { id: 'cups', label: 'Monster Cups', kind: 'batch', variant: 'cabinet', gx: 18.7, gy: 1, w: 2.4, d: 2, h: 4.2 },
      { id: 'ice', label: 'Ice Bins', kind: 'batch', variant: 'icebin', gx: 4.2, gy: 4.6, w: 4.2, d: 1.6, h: 1.4 },
      { id: 'dry', label: 'Dry Storage', kind: 'cold', variant: 'cabinet', gx: 12.4, gy: 4.6, w: 4, d: 1.6, h: 1.5 },
    ],
  },
  {
    id: 'resort',
    name: 'High-Volume Resort',
    blurb: 'Built for peak-hour throughput at a pool or resort bar. A wall of flavor machines plus a walk-in cooler and back-up batches keeps lines moving when hundreds of guests arrive at once.',
    counter: { w: 24, d: 7, h: 3 },
    modules: [
      { id: 'walkin', label: 'Walk-in Cooler', kind: 'cold', variant: 'cooler', gx: 0.7, gy: 1, w: 3.2, d: 2.4, h: 6 },
      { id: 'cha', label: 'Cha Cha', kind: 'machine', variant: 'machine', gx: 4.6, gy: 1, w: 1.7, d: 2, h: 3.6 },
      { id: 'mango', label: 'Mango Tango', kind: 'machine', variant: 'machine', gx: 6.7, gy: 1, w: 1.7, d: 2, h: 3.6 },
      { id: 'straw', label: 'Strawberry', kind: 'machine', variant: 'machine', gx: 8.8, gy: 1, w: 1.7, d: 2, h: 3.6 },
      { id: 'bomb', label: 'Bomb Pop', kind: 'machine', variant: 'machine', gx: 10.9, gy: 1, w: 1.7, d: 2, h: 3.6 },
      { id: 'beer', label: 'Beer', kind: 'cold', variant: 'cooler', gx: 13.1, gy: 1, w: 2.2, d: 2, h: 5.4 },
      { id: 'backup', label: 'Back-up Batches', kind: 'mix', variant: 'rail', gx: 15.8, gy: 1.2, w: 3.4, d: 1.8, h: 2.2 },
      { id: 'cups', label: 'Monster Cups', kind: 'batch', variant: 'cabinet', gx: 19.6, gy: 1, w: 2.4, d: 2, h: 4.2 },
      { id: 'ice', label: 'Ice Bins', kind: 'batch', variant: 'icebin', gx: 5, gy: 4.6, w: 5, d: 1.6, h: 1.4 },
      { id: 'dry', label: 'Dry Storage', kind: 'cold', variant: 'cabinet', gx: 13, gy: 4.6, w: 4.5, d: 1.6, h: 1.5 },
    ],
  },
  {
    id: 'compact',
    name: 'Compact / Pop-Up',
    blurb: 'A small footprint for a service bar, lounge or event activation. One multi-flavor machine, a tidy mix rail and a reach-in deliver frozen cocktails anywhere there’s power.',
    counter: { w: 11, d: 6, h: 3 },
    modules: [
      { id: 'reach', label: 'Reach-in', kind: 'cold', variant: 'cooler', gx: 0.7, gy: 1, w: 2.4, d: 2, h: 4.6 },
      { id: 'cha', label: 'Cha Cha', kind: 'machine', variant: 'machine', gx: 3.6, gy: 1, w: 2.6, d: 2, h: 3.8 },
      { id: 'mixes', label: 'Mixes', kind: 'mix', variant: 'rail', gx: 6.8, gy: 1.2, w: 2.6, d: 1.8, h: 2.2 },
      { id: 'ice', label: 'Ice Bins', kind: 'batch', variant: 'icebin', gx: 3.4, gy: 3.8, w: 3, d: 1.4, h: 1.3 },
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
  const [hotKind, setHotKind] = useState<IsoKind | null>(null)
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
                <IsoBar key={layout.id} modules={layout.modules} counter={layout.counter} hotKind={hotKind} />
              </div>
              <div className="builder__info">
                <div className="builder__head">
                  <h3>{layout.name}</h3>
                  <p>{layout.blurb}</p>
                </div>
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
