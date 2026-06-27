import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { CtaBand } from '../components/CtaBand'
import { Icon } from '../components/Icon'
import type { IconName } from '../components/Icon'
import { DistributionMap } from '../components/decor/DistributionMap'

const MODES: { icon: IconName; title: string; body: string }[] = [
  { icon: 'truck', title: 'Land', body: 'Refrigerated trucking across the U.S. mainland keeps mixes cold from our packer to your bar.' },
  { icon: 'ship', title: 'Water', body: 'Reefer-container ocean freight reaches Hawaii, the Caribbean and beyond — land-to-water options.' },
  { icon: 'globe', title: 'International', body: "Outside our current footprint? We'll build a custom distribution option that works for you." },
]

export function Distribution() {
  return (
    <>
      <PageHero
        no="Reach"
        eyebrow="International distribution"
        title={<>Wherever you are, <span className="accent">we'll be there</span>.</>}
        lead="Distribution spanning Hawaii, across the United States mainland, and to the Caribbean — we guarantee an option that works for you. Location is no limit to having the best cocktail mixes."
        orb="ocean"
        accent="var(--ocean)"
      />

      <section className="section">
        <div className="container">
          <div className="reach">
            <div className="reach__map reveal">
              <DistributionMap />
            </div>
            <div className="reveal" data-delay="1" style={{ ['--accent-color' as string]: 'var(--ocean)' }}>
              <span className="kicker"><span className="kicker__no">Land to water</span>Cold-chain</span>
              <h2 className="sec-head__title" style={{ marginTop: '1rem' }}>Coast to coast — and across the sea</h2>
              <p className="lead" style={{ marginTop: '1.2rem' }}>
                Fresh Blendz mixes are fresh and perishable, so distribution is built around the cold chain.
                From refrigerated trucks to reefer containers, we keep every mix below 41°F the whole way.
              </p>
              <p style={{ marginTop: '1rem' }}>
                And if we don't already reach you? We'll work with you to create the perfect option —
                contact us to find your distributor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--paper-2" style={{ ['--accent-color' as string]: 'var(--ocean)' } as React.CSSProperties}>
        <div className="container">
          <SectionHeading no="How we move" eyebrow="Three ways" title="Getting fresh to you" accent="var(--ocean)">
            Fresh and perishable means everything moves on the cold chain — by land and by sea.
          </SectionHeading>
          <div className="modes modes--row" style={{ marginTop: '2.2rem' }}>
            {MODES.map((m, i) => (
              <div className="mode reveal" key={m.title} data-delay={i + 1}>
                <span className="mode__ic"><Icon name={m.icon} size={24} /></span>
                <div>
                  <h3>{m.title}</h3>
                  <p>{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        kicker="Find your distributor"
        title="Tell us where"
        accentWord="you are."
        text="Tell us your location and what you pour. We'll connect you with the right distribution option for your venue."
        label="Contact Us to Find Your Distributor"
      />
    </>
  )
}
