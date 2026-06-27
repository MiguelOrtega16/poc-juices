import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { CtaBand } from '../components/CtaBand'
import { VideoGallery } from '../components/video/VideoGallery'
import { Icon } from '../components/Icon'
import { MAINTENANCE_VIDEOS } from '../data/videos'

const ROUTINE = [
  { when: 'Daily', items: ['Wipe down drip trays & splash zones', 'Check mix levels and top up hoppers', 'Confirm hopper temp is below 41°F'] },
  { when: 'Weekly', items: ['Full disassembly clean & sanitize', 'Inspect o-rings and seals for wear', 'Clear and rinse the drip-pan lines'] },
  { when: 'Quarterly', items: ['Run the Taylor tune-up kit (428 · 430 · 432)', 'Replace scraper blades & worn seals', 'Check viscosity calibration'] },
]

export function MachineMaintenance() {
  return (
    <>
      <PageHero
        no="Care"
        eyebrow="Machine maintenance"
        title={<>Keep it running <span className="accent">like new</span>.</>}
        lead="Clean machines pour better drinks. Follow these walkthroughs and the simple routine below to keep your Taylor machines spotless, sanitary and serving perfect texture."
        orb="ocean"
        accent="var(--ocean)"
      />

      <section className="section section--tight">
        <div className="container">
          <SectionHeading no="Watch" eyebrow="How-to videos" title="The walkthroughs" accent="var(--ocean)" />
          <div style={{ marginTop: '2.4rem' }}>
            <VideoGallery videos={MAINTENANCE_VIDEOS} filterable={false} />
          </div>
        </div>
      </section>

      <section className="section section--paper-2">
        <div className="container">
          <SectionHeading no="Routine" eyebrow="Stay ahead of it" title="A simple maintenance rhythm" accent="var(--ocean)">
            A little routine prevents the big breakdowns — and protects the fresh, perishable mixes inside.
          </SectionHeading>
          <div className="steps">
            {ROUTINE.map((r, i) => (
              <div className="step reveal" key={r.when} data-delay={i + 1}>
                <span className="step__no">{String(i + 1).padStart(2, '0')}</span>
                <h3>{r.when}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0.9rem 0 0', display: 'grid', gap: '0.6rem' }}>
                  {r.items.map((it) => (
                    <li key={it} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.94rem' }}>
                      <Icon name="check" size={16} className="text-ocean" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        kicker="We support it"
        title="Need parts or a"
        accentWord="service plan?"
        text="We support every machine we place — from tune-up kits to full service programs. Tell us what you run."
        label="Get Maintenance Support"
      />
    </>
  )
}
