import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { SectionHeading } from '../components/SectionHeading'
import { CtaBand } from '../components/CtaBand'
import { Icon } from '../components/Icon'
import type { IconName } from '../components/Icon'
import { VideoGallery } from '../components/video/VideoGallery'
import { PILLARS, CLIENTS } from '../data/site'
import { PRODUCTS } from '../data/products'
import { DRINK_MACHINE_VIDEOS } from '../data/videos'

const FEATURED_VIDEOS = [DRINK_MACHINE_VIDEOS[0], DRINK_MACHINE_VIDEOS[1], DRINK_MACHINE_VIDEOS[9], DRINK_MACHINE_VIDEOS[16]]

const MARQUEE = ['World’s Best Piña Colada', 'No Concentrates', 'Real Fruit · Named Varieties', 'Frozen or Rocks', 'Built for Volume', '100% All-Natural', 'Quality · Consistency · Volume']

const INTRO_POINTS: { ic: IconName; t: string; d: string }[] = [
  { ic: 'leaf', t: 'Real fruit, named by variety', d: 'Persian limes, Camarosa strawberries, Kent mangos — sourced worldwide.' },
  { ic: 'snowflake', t: 'Frozen or on the rocks', d: 'Versatile mixes for machines, blenders and rocks builds alike.' },
  { ic: 'glass', t: 'Built for the rush', d: 'High-volume machines and equipment programs that keep up with peak hours.' },
]

const MIX_FILL: Record<string, [string, string]> = {
  'pina-colada': ['#e8a000', '#2a1c00'],
  margarita: ['#4f9a2e', '#ffffff'],
  strawberry: ['#e23a68', '#ffffff'],
  mango: ['#ef5f1a', '#ffffff'],
  raspberry: ['#6f3bc2', '#ffffff'],
  'sour-lemon': ['#f4d020', '#2a2400'],
}
const MIX_TILES = PRODUCTS.filter((p) => p.slug in MIX_FILL)
const PILLAR_FILL = ['#4f9a2e', '#ef5f1a', '#0c9a8b']

export function Home() {
  return (
    <>
      {/* HERO (bento) */}
      <section className="section hero-bento">
        <div className="container">
          <div className="hb reveal">
            <div className="tile hb-hero">
              <div>
                <span className="pill-eyebrow">✦ Fresh is Best — Est. 1997</span>
                <h1 style={{ marginTop: '1.1rem' }}>World’s Best <span className="accent">Cocktail</span> Mixes</h1>
                <p className="hb-hero__sub">
                  100% all-natural fresh fruit-based beverage mixes — top-shelf flavor, built for high-volume
                  performance. Quality · Consistency · Volume.
                </p>
              </div>
              <div className="hb-hero__foot">
                <Link to="/contact" className="btn btn--light btn--lg">
                  Contact for Distribution <Icon name="arrowUp" size={18} />
                </Link>
                <span className="hb-hero__note">B2B supply · Hotels · Casinos · Resorts</span>
              </div>
            </div>
            <div className="tile hb-stat hb-stat--a">
              <span className="hb-stat__num">80+</span>
              <span className="hb-stat__cap">Recipe videos</span>
            </div>
            <div className="tile hb-stat hb-stat--b">
              <span className="hb-stat__num">25+</span>
              <span className="hb-stat__cap">Years design exp.</span>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map((dup) => (
            <span key={dup}>{MARQUEE.map((m) => <span className="marquee__item" key={m}>{m}</span>)}</span>
          ))}
        </div>
      </div>

      {/* INTRO — 01 */}
      <section className="section">
        <div className="container">
          <div className="esplit">
            <div className="esplit__aside reveal">
              <span className="kicker">Fresh-crafted</span>
              <p className="esplit__statement" style={{ marginTop: '1.2rem' }}>
                Handcraft flavor, <span className="accent">high-volume</span> performance.
              </p>
            </div>
            <div className="reveal" data-delay="1">
              <p className="lead measure">
                Our top-shelf quality fuses handcrafted flavor with high-volume performance — a consistent,
                high-quality product, pour after pour.
              </p>
              <div className="points">
                {INTRO_POINTS.map((p) => (
                  <div className="point" key={p.t}>
                    <span className="point__ic"><Icon name={p.ic} size={20} /></span>
                    <div>
                      <h3>{p.t}</h3>
                      <p>{p.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/our-story" className="link-arrow" style={{ marginTop: '1.6rem' }}>
                Read our story <Icon name="arrow" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS — 02 */}
      <section className="section section--paper-2">
        <div className="container">
          <SectionHeading eyebrow="Why Fresh Blendz" title={<>Quality. Consistency. <span className="accent">Volume.</span></>} accent="var(--mango)">
            Three pillars behind every mix we make and every bar program we build.
          </SectionHeading>
          <div className="pillars" style={{ marginTop: '2rem' }}>
            {PILLARS.map((p, i) => (
              <article className="pillar reveal" key={p.key} data-delay={i + 1} style={{ ['--fill' as string]: PILLAR_FILL[i] } as CSSProperties}>
                <span className="pillar__no">0{i + 1} / 03</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <ul className="pillar__list">
                  {p.points.map((pt) => <li key={pt}><Icon name="check" size={16} /> {pt}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MIXES — 03 */}
      <section className="section">
        <div className="container">
          <div className="bento-head">
            <h2>The <span className="accent">Mixes</span></h2>
            <span className="bento-head__tag">7 signature blends · 100% all-natural</span>
          </div>
          <div className="mixgrid reveal">
            {MIX_TILES.map((p) => {
              const [fill, on] = MIX_FILL[p.slug]
              return (
                <Link to="/ingredients" className="mixtile" key={p.slug} style={{ ['--fill' as string]: fill, ['--fill-on' as string]: on } as CSSProperties}>
                  <span className="mixtile__hook">{p.tagline}</span>
                  <span className="mixtile__name">{p.name}</span>
                  <span className="mixtile__uses">{p.uses}</span>
                  <img className="mixtile__bottle" src={p.image} alt="" loading="lazy" />
                </Link>
              )
            })}
          </div>
          <div style={{ marginTop: '1.6rem' }}>
            <Link to="/ingredients" className="link-arrow">See all ingredients &amp; sourcing <Icon name="arrow" size={16} /></Link>
          </div>
        </div>
      </section>

      {/* RECIPE TEASER — 04 */}
      <section className="section section--paper-2">
        <div className="container">
          <SectionHeading eyebrow="Recipe videos" title={<>See it built, <span className="accent">pour it perfect</span></>} accent="var(--guava)">
            Short, step-by-step videos make every drink repeatable across every bartender and property.
          </SectionHeading>
          <div style={{ marginTop: '2.2rem' }}>
            <VideoGallery videos={FEATURED_VIDEOS} filterable={false} />
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/drink-machine-recipes" className="btn btn--ghost">View all drink videos <Icon name="arrowUp" size={16} /></Link>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="section">
        <div className="container">
          <div className="quote reveal">
            <p className="quote__text">
              If I asked you to create the <span className="accent">highest quality mixes</span> in the industry,
              could you do it?
            </p>
            <p className="quote__cite">— Marriott VP of F&amp;B, to founder Rick Fogel · He said “Yes.”</p>
          </div>
        </div>
      </section>

      {/* CLIENTS — 05 */}
      <section className="section section--paper-2">
        <div className="container">
          <SectionHeading eyebrow="Our clients" title="Poured at the world’s finest properties" align="center" accent="var(--ocean)" />
          <div className="clients reveal" style={{ marginTop: '2.2rem' }}>
            {CLIENTS.map((c) => (
              <div className="client" key={c.name} title={c.name}>
                <img src={c.logo} alt={c.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPMENT TEASER — 06 */}
      <section className="section">
        <div className="container">
          <div className="esplit esplit--rev" style={{ ['--accent-color' as string]: 'var(--ocean)' } as CSSProperties}>
            <div className="reveal eq-teaser">
              <Icon name="ruler" size={40} />
              <strong>25+</strong>
              <span>Years designing high-volume bars</span>
            </div>
            <div className="reveal" data-delay="1">
              <span className="kicker">Equipment programs</span>
              <p className="esplit__statement" style={{ marginTop: '1rem' }}>
                We design &amp; build your <span className="accent">frozen-drink operation</span>.
              </p>
              <p className="lead measure" style={{ marginTop: '1.2rem' }}>
                Over 25 years of design experience — high volume and high end. We integrate equipment into a
                visually exciting, functional bar, working directly with your architect and designers.
              </p>
              <Link to="/equipment-programs" className="link-arrow" style={{ marginTop: '1.6rem' }}>
                Explore equipment programs <Icon name="arrow" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to taste the"
        accentWord="difference?"
        text="Set up a simple taste test and find your distributor. Wherever you are, Fresh Blendz will be there."
      />
    </>
  )
}
