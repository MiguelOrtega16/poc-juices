import type { CSSProperties } from 'react'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { CtaBand } from '../components/CtaBand'
import { CLIENTS } from '../data/site'

const TIMELINE = [
  { year: 'The bar', title: 'A champion behind the bar', body: 'Rick Fogel started as a bartender at Hyatt Regency, became a Master Bartender at TGI Fridays, and finished as a World Champion performance bartender in Ybor City.' },
  { year: 'R&D', title: 'Bahama Breeze & frozen drinks', body: 'Consulting on the Bahama Breeze concept launch gave Rick the foundation in frozen-drink ingredient R&D and drink-machine knowledge.' },
  { year: '1997', title: 'Bar Starz is born', body: 'Rick founded Bar Starz — quickly recognized as the industry-leading expert on frozen-drink programming and bar design.' },
  { year: 'The challenge', title: 'Marriott raises the bar', body: '“If I asked you to create the highest quality mixes in the industry, could you do it?” asked Marriott’s VP of F&B. Rick didn’t hesitate: “Yes!”' },
  { year: 'The mix', title: 'Fresh Blendz is created', body: 'Two calls — to Gary, a high-quality fruit broker, and Marc, a fresh-juice packer — turned Rick’s TGI Fridays flavor profiles into large-batch recipes. Fresh Blendz became a reality.' },
  { year: 'Today', title: 'In the world’s best hotels', body: 'One taste test was all it took. Fresh Blendz moved into some of the highest-rated hotels, casinos and restaurants in the world.' },
]

const VALUES = [
  { t: 'Quality', d: 'The highest-quality fruit and juices available in the world — named by variety and origin.', c: 'var(--lime)' },
  { t: 'Consistency', d: 'A recipe video library so every bartender, at every property, pours the same perfect drink.', c: 'var(--mango)' },
  { t: 'Volume', d: 'Machines and programs engineered to keep up with your busiest, most profitable nights.', c: 'var(--ocean)' },
]

export function OurStory() {
  return (
    <>
      <PageHero
        no="Since 1997"
        eyebrow="From scratch"
        title={<>Our <span className="accent">story</span>.</>}
        lead="The rich history of Fresh Blendz spans Rick Fogel’s 35-year career in food and beverage — from world-champion bartender to creating the world’s best cocktail mixes."
        orb="strawberry"
        accent="var(--guava)"
      />

      <section className="section">
        <div className="container">
          <div className="esplit" style={{ ['--accent-color' as string]: 'var(--guava)' } as CSSProperties}>
            <div className="esplit__aside reveal">
              <span className="kicker"><span className="kicker__no">Why we exist</span>The goal</span>
              <h2 className="esplit__statement" style={{ marginTop: '1.4rem' }}>
                Create the best mixes in the industry — <span className="accent">period</span>.
              </h2>
            </div>
            <div className="reveal" data-delay="1">
              <p className="lead measure">
                Using the highest-quality fruit and juices available in the world. The signature “World’s Best Piña
                Colada.” Fresh chunky purées of real strawberries, mangos and raspberries. Fresh juices from the
                finest lemons and limes. And ice cream from Rick’s own private-label recipe.
              </p>
              <p className="measure" style={{ marginTop: '1.1rem' }}>
                Fresh Blendz became a viable upgrade for luxury hotels, casinos and restaurants. Just one taste
                test, and the difference in quality was an easy choice to make.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--paper-2">
        <div className="container">
          <SectionHeading no="The journey" eyebrow="35 years in the making" title="How Fresh Blendz came to be" accent="var(--guava)" />
          <div className="timeline">
            {TIMELINE.map((t) => (
              <div className="tl-item reveal" key={t.title}>
                <span className="tl-year">{t.year}</span>
                <div>
                  <h3>{t.title}</h3>
                  <p>{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading no="What we stand for" eyebrow="Our values" title={<>Quality. Consistency. <span className="accent">Volume.</span></>} />
          <div className="values">
            {VALUES.map((v, i) => (
              <div className="value reveal" key={v.t} data-delay={i + 1} style={{ ['--accent-color' as string]: v.c } as CSSProperties}>
                <span className="value__no">0{i + 1}</span>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--night">
        <div className="container">
          <SectionHeading no="Trusted by the best" eyebrow="Our clients" title="Poured at the world’s finest properties" align="center" />
          <div className="clients" style={{ marginTop: '2.2rem' }}>
            {CLIENTS.map((c) => (
              <div className="client" key={c.name} title={c.name}>
                <img src={c.logo} alt={c.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        kicker="Join us"
        title="Create memorable"
        accentWord="guest experiences."
        text="Set up a simple taste test and experience fresh yourself. Contact us today."
        label="Set Up a Taste Test"
      />
    </>
  )
}
