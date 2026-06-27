import { Orb } from '../decor/Orb'

type Duo = {
  name: string
  hook: string
  img: string
  ink: string
  paper: string
  blend: 'multiply' | 'screen'
}

const SHOWCASE: Duo[] = [
  {
    name: 'Piña Colada',
    hook: 'World’s Best',
    img: '/ingredients/pina-colada.png',
    ink: '#e8a000',
    paper: '#1d150b',
    blend: 'screen',
  },
  {
    name: 'Strawberry',
    hook: 'Real chunky fruit',
    img: '/ingredients/strawberry.png',
    ink: '#e23a68',
    paper: '#fbf3f5',
    blend: 'multiply',
  },
  {
    name: 'Mango',
    hook: 'Sweet, with a sour note',
    img: '/ingredients/mango.png',
    ink: '#ef5f1a',
    paper: '#fdf4ec',
    blend: 'multiply',
  },
]

const PILLARS = ['Quality', 'Consistency', 'Volume']

export function DecorDuotone() {
  return (
    <div className="dduo-root">
      <style>{`
        .dduo-root {
          --dduo-bg: #f5f0e5;
          --dduo-ink: #1a1611;
          --dduo-muted: #756b5d;
          --dduo-line: rgba(26, 22, 17, 0.14);
          font-family: 'Inter', sans-serif;
          color: var(--dduo-ink);
          background:
            radial-gradient(120% 80% at 0% 0%, rgba(232, 160, 0, 0.10), transparent 55%),
            radial-gradient(120% 90% at 100% 100%, rgba(226, 58, 104, 0.08), transparent 55%),
            var(--dduo-bg);
          border-radius: 18px;
          overflow: hidden;
          padding: clamp(1.4rem, 4%, 2.2rem);
          display: flex;
          flex-direction: column;
          gap: 2.4rem;
        }
        .dduo-root *,
        .dduo-root *::before,
        .dduo-root *::after { box-sizing: border-box; }

        /* ---------- HERO ---------- */
        .dduo-root .dduo-hero {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
          gap: 1.4rem;
          align-items: center;
        }
        .dduo-root .dduo-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5ch;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.62rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--dduo-muted);
          margin: 0 0 0.9rem;
        }
        .dduo-root .dduo-eyebrow b {
          width: 26px; height: 1px; background: var(--dduo-line); display: inline-block;
        }
        .dduo-root .dduo-title {
          font-family: 'Fraunces', serif;
          font-weight: 600;
          font-size: clamp(1.9rem, 8.5%, 2.9rem);
          line-height: 0.98;
          letter-spacing: -0.015em;
          margin: 0;
        }
        .dduo-root .dduo-title em {
          font-style: italic;
          background: linear-gradient(92deg, #e8a000, #ef5f1a 55%, #e23a68);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .dduo-root .dduo-sub {
          margin: 0.9rem 0 0;
          max-width: 34ch;
          font-size: 0.86rem;
          line-height: 1.5;
          color: var(--dduo-muted);
        }
        .dduo-root .dduo-tag {
          margin: 1.2rem 0 0;
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.02em;
          color: var(--dduo-ink);
        }
        .dduo-root .dduo-tag span { color: #4f9a2e; }

        /* hero duotone portrait */
        .dduo-root .dduo-portrait {
          position: relative;
          aspect-ratio: 1 / 1;
          border-radius: 16px;
          background:
            radial-gradient(circle at 35% 30%, #14342e, #0c1a17 70%);
          border: 1px solid var(--dduo-line);
          overflow: hidden;
          display: grid;
          place-items: center;
        }
        .dduo-root .dduo-portrait::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, rgba(12, 154, 139, 0.28), transparent 60%);
          mix-blend-mode: screen;
          pointer-events: none;
        }
        .dduo-root .dduo-portrait img {
          width: 64%;
          filter: grayscale(1) contrast(1.15) brightness(1.05);
          mix-blend-mode: screen;
        }
        .dduo-root .dduo-orb-hero {
          position: absolute;
          right: -18px;
          bottom: -18px;
          z-index: 1;
        }

        /* ---------- DUOTONE SHOWCASE ---------- */
        .dduo-root .dduo-sectionhead {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1rem;
          padding-bottom: 0.8rem;
          border-bottom: 1px solid var(--dduo-line);
          margin-bottom: 1.3rem;
        }
        .dduo-root .dduo-sectionhead h2 {
          font-family: 'Fraunces', serif;
          font-weight: 500;
          font-size: 1.3rem;
          letter-spacing: -0.01em;
          margin: 0;
        }
        .dduo-root .dduo-sectionhead p {
          margin: 0;
          font-size: 0.68rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--dduo-muted);
        }
        .dduo-root .dduo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 0.9rem;
        }
        .dduo-root .dduo-card {
          position: relative;
          border-radius: 14px;
          border: 1px solid var(--dduo-line);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .dduo-root .dduo-frame {
          position: relative;
          aspect-ratio: 4 / 5;
          display: grid;
          place-items: center;
          overflow: hidden;
        }
        /* the brand-colour wash that gives the duotone its second colour */
        .dduo-root .dduo-frame::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--card-paper);
          z-index: 0;
        }
        .dduo-root .dduo-frame img {
          position: relative;
          z-index: 1;
          width: 58%;
          filter: grayscale(1) contrast(1.12);
        }
        .dduo-root .dduo-frame.is-multiply img { mix-blend-mode: multiply; }
        .dduo-root .dduo-frame.is-screen img { mix-blend-mode: screen; }
        /* solid brand ink layer painted through the photo's silhouette */
        .dduo-root .dduo-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(120% 90% at 50% 18%, transparent 40%, var(--card-ink) 140%);
          opacity: 0.45;
          mix-blend-mode: overlay;
          z-index: 2;
          pointer-events: none;
        }
        .dduo-root .dduo-cardmeta {
          padding: 0.7rem 0.8rem 0.85rem;
          background: rgba(255, 255, 255, 0.02);
          border-top: 1px solid var(--dduo-line);
        }
        .dduo-root .dduo-cardmeta .swatch {
          display: inline-flex;
          align-items: center;
          gap: 0.45ch;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.58rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--dduo-muted);
        }
        .dduo-root .dduo-cardmeta .swatch i {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--card-ink);
          display: inline-block;
        }
        .dduo-root .dduo-cardmeta h3 {
          font-family: 'Fraunces', serif;
          font-weight: 500;
          font-size: 0.98rem;
          margin: 0.3rem 0 0.15rem;
        }
        .dduo-root .dduo-cardmeta span {
          font-size: 0.74rem;
          color: var(--dduo-muted);
        }

        /* ---------- PILLARS / CLOSING STRIP ---------- */
        .dduo-root .dduo-strip {
          position: relative;
          border-radius: 16px;
          border: 1px solid var(--dduo-line);
          background:
            linear-gradient(100deg, rgba(232, 160, 0, 0.07), rgba(226, 58, 104, 0.05));
          padding: 1.3rem 1.4rem;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1.1rem;
          align-items: center;
        }
        .dduo-root .dduo-pillars {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem 1.3rem;
          list-style: none;
          margin: 0 0 0.7rem;
          padding: 0;
        }
        .dduo-root .dduo-pillars li {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 700;
          font-size: 1.05rem;
          display: inline-flex;
          align-items: center;
          gap: 0.55ch;
        }
        .dduo-root .dduo-pillars li::before {
          content: '●';
          font-size: 0.5rem;
          color: #e8a000;
        }
        .dduo-root .dduo-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem 1.4rem;
        }
        .dduo-root .dduo-stats div { line-height: 1.05; }
        .dduo-root .dduo-stats b {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.05rem;
          display: block;
        }
        .dduo-root .dduo-stats small {
          font-size: 0.6rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--dduo-muted);
        }
        .dduo-root .dduo-cta {
          justify-self: end;
          display: inline-flex;
          align-items: center;
          gap: 0.6ch;
          padding: 0.7rem 1.1rem;
          border-radius: 999px;
          background: var(--dduo-ink);
          color: var(--dduo-bg);
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 0.78rem;
          letter-spacing: 0.02em;
          white-space: nowrap;
        }
        .dduo-root .dduo-since {
          font-size: 0.6rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--dduo-muted);
        }

        @media (max-width: 430px) {
          .dduo-root .dduo-hero { grid-template-columns: 1fr; }
          .dduo-root .dduo-portrait { max-width: 220px; }
          .dduo-root .dduo-strip { grid-template-columns: 1fr; }
          .dduo-root .dduo-cta { justify-self: start; }
        }
      `}</style>

      {/* ---------- HERO ---------- */}
      <header className="dduo-hero">
        <div>
          <p className="dduo-eyebrow"><b /> Fresh Blendz Commercial · Since 1997</p>
          <h1 className="dduo-title">
            World&rsquo;s Best<br /><em>Cocktail Mixes</em>
          </h1>
          <p className="dduo-sub">
            100% all-natural fresh fruit-based beverage mixes &mdash; top-shelf flavor,
            built for high-volume performance.
          </p>
          <p className="dduo-tag"><span>&#10022;</span> Fresh is Best</p>
        </div>
        <div className="dduo-portrait">
          <img src="/ingredients/pina-colada.png" alt="Piña Colada mix" />
          <Orb flavor="ocean" size={86} shape="blob" float className="dduo-orb-hero" />
        </div>
      </header>

      {/* ---------- MINIMAL DUOTONE SHOWCASE ---------- */}
      <section>
        <div className="dduo-sectionhead">
          <h2>Minimal duotone</h2>
          <p>Two-tone motifs</p>
        </div>
        <div className="dduo-grid">
          {SHOWCASE.map((d) => (
            <article
              key={d.name}
              className="dduo-card"
              style={{ ['--card-ink' as string]: d.ink, ['--card-paper' as string]: d.paper }}
            >
              <div className={`dduo-frame ${d.blend === 'screen' ? 'is-screen' : 'is-multiply'}`}>
                <img src={d.img} alt={`${d.name} mix`} />
              </div>
              <div className="dduo-cardmeta">
                <span className="swatch"><i /> Duotone</span>
                <h3>{d.name}</h3>
                <span>{d.hook}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- PILLARS / CLOSING STRIP ---------- */}
      <section className="dduo-strip">
        <div>
          <ul className="dduo-pillars">
            {PILLARS.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <div className="dduo-stats">
            <div><b>25+</b><small>Years</small></div>
            <div><b>100%</b><small>All-natural</small></div>
            <div><b>80+</b><small>Recipe videos</small></div>
            <div><b>3</b><small>Regions</small></div>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <a className="dduo-cta" href="#contact">Become a stockist <span aria-hidden="true">&rarr;</span></a>
          <p className="dduo-since" style={{ marginTop: '0.7rem' }}>Hotels · Casinos · Resorts</p>
        </div>
      </section>
    </div>
  )
}
