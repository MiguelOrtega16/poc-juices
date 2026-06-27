import { Orb } from '../decor/Orb'

type Mix = {
  name: string
  hook: string
  img: string
  flavor: 'strawberry' | 'lemon' | 'raspberry' | 'coconut'
  tint: string
}

const MIXES: Mix[] = [
  { name: 'Piña Colada', hook: 'World’s Best', img: '/ingredients/fruit-coconut.png', flavor: 'coconut', tint: '#e8a000' },
  { name: 'Strawberry', hook: 'Real chunky fruit', img: '/ingredients/fruit-strawberry.png', flavor: 'strawberry', tint: '#e23a68' },
  { name: 'Margarita', hook: 'Frozen or rocks', img: '/ingredients/fruit-lime.png', flavor: 'lemon', tint: '#4f9a2e' },
  { name: 'Raspberry', hook: 'Rich & sweet', img: '/ingredients/fruit-raspberry.png', flavor: 'raspberry', tint: '#6f3bc2' },
]

const PILLARS: { label: string; copy: string }[] = [
  { label: 'Quality', copy: '100% all-natural, fresh fruit pressed into every batch.' },
  { label: 'Consistency', copy: 'The same top-shelf pour, glass after glass.' },
  { label: 'Volume', copy: 'Built to keep up with the busiest service.' },
]

const CLIENTS = ['Ritz-Carlton', 'MGM Grand Las Vegas', 'JW Marriott', 'Marriott International', 'Kalahari Resorts']

export function CraftDir() {
  return (
    <div className="craft-root">
      <style>{`
        .craft-root {
          --paper: #fdf3e6;
          --ink: #3a2417;
          --ink-soft: #6f5a48;
          --line: #e7d2b6;
          --mango: #ef5f1a;
          --pine: #e8a000;
          --guava: #e23a68;
          position: relative;
          background: var(--paper);
          color: var(--ink);
          font-family: 'Inter', sans-serif;
          border-radius: 28px;
          overflow: hidden;
          padding: clamp(20px, 3vw, 38px);
        }
        .craft-root *, .craft-root *::before, .craft-root *::after { box-sizing: border-box; }
        .craft-root::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.5;
          background-image:
            radial-gradient(rgba(120,80,40,0.05) 1px, transparent 1.4px);
          background-size: 4px 4px;
          z-index: 0;
        }
        .craft-root > *:not(style) { position: relative; z-index: 1; }

        /* ---------- HERO ---------- */
        .craft-hero {
          position: relative;
          border-radius: 26px;
          overflow: hidden;
          padding: clamp(28px, 4.5vw, 60px) clamp(24px, 4vw, 56px) clamp(150px, 18vw, 220px);
          background:
            radial-gradient(120% 120% at 12% 8%, #fff8ee 0%, rgba(255,248,238,0) 55%),
            linear-gradient(120deg, #ffd9a8 0%, #ff9d4d 32%, #f76a3c 62%, #e23a68 100%);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.35);
        }
        .craft-hero::after {
          content: '';
          position: absolute;
          left: -8%;
          right: -8%;
          bottom: -54%;
          height: 100%;
          background: var(--paper);
          border-radius: 50% 50% 0 0 / 60% 60% 0 0;
          box-shadow: 0 -2px 0 rgba(58,36,23,0.06);
        }
        .craft-hero-arc {
          position: absolute;
          right: clamp(-40px, -4vw, -10px);
          top: clamp(-60px, -6vw, -30px);
          width: clamp(220px, 30vw, 360px);
          height: clamp(220px, 30vw, 360px);
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, #fff4d6, #ffb84d 45%, #f76a3c 100%);
          opacity: 0.55;
          filter: blur(2px);
        }
        .craft-eyebrow {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 0.72rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 600;
          color: #5a2a10;
          background: rgba(255,255,255,0.55);
          padding: 7px 15px;
          border-radius: 999px;
          backdrop-filter: blur(4px);
        }
        .craft-eyebrow b { color: var(--mango); font-weight: 800; }
        .craft-h1 {
          position: relative;
          margin: 20px 0 0;
          font-family: 'Fraunces', serif;
          font-weight: 600;
          color: #fffaf2;
          font-size: clamp(2.6rem, 7vw, 5rem);
          line-height: 0.98;
          letter-spacing: -0.02em;
          text-shadow: 0 2px 18px rgba(120,40,10,0.18);
          max-width: 13ch;
        }
        .craft-h1 i {
          font-style: italic;
          color: #fff0d6;
        }
        .craft-sub {
          position: relative;
          margin: 18px 0 0;
          max-width: 46ch;
          font-size: clamp(0.98rem, 1.5vw, 1.12rem);
          line-height: 1.55;
          color: #4a1f0d;
          font-weight: 450;
        }
        .craft-hero-cta {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 26px;
        }
        .craft-btn {
          font-family: inherit;
          font-size: 0.95rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          border-radius: 999px;
          padding: 13px 24px;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .craft-btn-primary {
          background: #3a2417;
          color: #fff6ea;
          box-shadow: 0 8px 22px rgba(58,36,23,0.28);
        }
        .craft-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(58,36,23,0.34); }
        .craft-btn-ghost {
          background: rgba(255,250,242,0.85);
          color: #5a2a10;
        }
        .craft-btn-ghost:hover { transform: translateY(-2px); }

        .craft-hero-stats {
          position: absolute;
          left: 50%;
          bottom: clamp(26px, 4vw, 44px);
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: clamp(18px, 4vw, 48px);
          width: min(92%, 720px);
          padding: 16px clamp(18px, 3vw, 30px);
          background: rgba(255,255,255,0.72);
          border: 1px solid rgba(255,255,255,0.9);
          border-radius: 22px;
          box-shadow: 0 18px 40px rgba(120,60,20,0.12);
          backdrop-filter: blur(6px);
        }
        .craft-stat { text-align: center; }
        .craft-stat b {
          display: block;
          font-family: 'Fraunces', serif;
          font-weight: 600;
          font-size: clamp(1.3rem, 2.6vw, 1.9rem);
          color: var(--mango);
          line-height: 1;
        }
        .craft-stat span {
          display: block;
          margin-top: 5px;
          font-size: 0.7rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-soft);
        }

        /* ---------- STORY STRIP ---------- */
        .craft-story {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: center;
          gap: clamp(18px, 3vw, 36px);
          margin-top: clamp(28px, 4vw, 46px);
          padding: clamp(20px, 3vw, 32px);
          border: 1px dashed var(--line);
          border-radius: 24px;
          background: linear-gradient(180deg, #fff9f0, #fdf3e6);
        }
        .craft-story-orbs {
          display: flex;
          align-items: center;
        }
        .craft-story-orbs > * { margin-left: -22px; }
        .craft-story-orbs > *:first-child { margin-left: 0; }
        .craft-story-kicker {
          font-family: 'Fraunces', serif;
          font-style: italic;
          font-size: 1rem;
          color: var(--mango);
          margin: 0 0 6px;
        }
        .craft-story-h {
          font-family: 'Fraunces', serif;
          font-weight: 600;
          font-size: clamp(1.4rem, 2.8vw, 2.05rem);
          line-height: 1.1;
          margin: 0 0 10px;
          letter-spacing: -0.01em;
        }
        .craft-story-p {
          margin: 0;
          max-width: 60ch;
          color: var(--ink-soft);
          line-height: 1.6;
          font-size: 0.98rem;
        }

        /* ---------- MIXES ---------- */
        .craft-sec-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          margin: clamp(34px, 5vw, 56px) 4px clamp(18px, 2.5vw, 26px);
        }
        .craft-sec-title {
          font-family: 'Fraunces', serif;
          font-weight: 600;
          font-size: clamp(1.7rem, 3.6vw, 2.6rem);
          letter-spacing: -0.02em;
          line-height: 1;
          margin: 0;
        }
        .craft-sec-title i { font-style: italic; color: var(--mango); }
        .craft-sec-note {
          font-size: 0.88rem;
          color: var(--ink-soft);
          max-width: 30ch;
        }
        .craft-mixes {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
          gap: clamp(14px, 2vw, 20px);
        }
        .craft-card {
          position: relative;
          border-radius: 22px;
          padding: 22px 20px 20px;
          background: #fffaf2;
          border: 1px solid var(--line);
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .craft-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 36px rgba(120,60,20,0.14);
        }
        .craft-card-band {
          position: absolute;
          inset: 0 0 auto 0;
          height: 46%;
          background:
            radial-gradient(120% 90% at 80% 0%, rgba(255,255,255,0.5), transparent 60%),
            linear-gradient(160deg, var(--c1), var(--c2));
          opacity: 0.92;
        }
        .craft-card-img {
          position: relative;
          display: block;
          width: clamp(86px, 40%, 116px);
          height: auto;
          margin: 4px auto 14px;
          filter: drop-shadow(0 12px 18px rgba(70,30,10,0.22));
        }
        .craft-card-name {
          position: relative;
          font-family: 'Fraunces', serif;
          font-weight: 600;
          font-size: 1.22rem;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .craft-card-hook {
          position: relative;
          margin: 4px 0 0;
          font-size: 0.86rem;
          color: var(--ink-soft);
        }
        .craft-card-tag {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 2;
          font-size: 0.62rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 700;
          color: #5a2a10;
          background: rgba(255,250,242,0.9);
          padding: 5px 9px;
          border-radius: 999px;
        }

        /* ---------- PILLARS + CLOSE ---------- */
        .craft-close {
          position: relative;
          margin-top: clamp(34px, 5vw, 56px);
          border-radius: 26px;
          overflow: hidden;
          padding: clamp(28px, 4vw, 48px);
          background: linear-gradient(135deg, #f76a3c 0%, #e23a68 55%, #6f3bc2 130%);
          color: #fff6ea;
        }
        .craft-close::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(90% 120% at 90% -10%, rgba(255,210,150,0.5), transparent 55%);
          pointer-events: none;
        }
        .craft-pillars {
          position: relative;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: clamp(14px, 2vw, 22px);
          margin-bottom: clamp(26px, 3.5vw, 38px);
        }
        .craft-pillar {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 18px;
          padding: 18px 18px 16px;
          backdrop-filter: blur(3px);
        }
        .craft-pillar b {
          font-family: 'Fraunces', serif;
          font-weight: 600;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .craft-pillar b::before {
          content: '✦';
          color: #ffe2a8;
          font-size: 0.85em;
        }
        .craft-pillar p {
          margin: 8px 0 0;
          font-size: 0.9rem;
          line-height: 1.5;
          color: rgba(255,246,234,0.88);
        }
        .craft-cta-row {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
          flex-wrap: wrap;
        }
        .craft-cta-h {
          font-family: 'Fraunces', serif;
          font-weight: 600;
          font-size: clamp(1.6rem, 3.4vw, 2.5rem);
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin: 0;
          max-width: 16ch;
        }
        .craft-cta-h i { font-style: italic; color: #ffe2a8; }
        .craft-cta-btn {
          font-family: inherit;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          border: none;
          border-radius: 999px;
          padding: 16px 30px;
          background: #fff6ea;
          color: #5a2a10;
          box-shadow: 0 12px 30px rgba(40,10,40,0.25);
          transition: transform 0.15s ease;
          white-space: nowrap;
        }
        .craft-cta-btn:hover { transform: translateY(-2px); }

        .craft-clients {
          position: relative;
          margin-top: clamp(22px, 3vw, 32px);
          padding-top: clamp(18px, 2.5vw, 24px);
          border-top: 1px solid rgba(255,255,255,0.22);
        }
        .craft-clients-l {
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,246,234,0.7);
          margin: 0 0 12px;
        }
        .craft-clients-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 14px;
          align-items: center;
        }
        .craft-client {
          font-family: 'Fraunces', serif;
          font-weight: 600;
          font-size: clamp(0.95rem, 1.8vw, 1.25rem);
          color: rgba(255,246,234,0.92);
          letter-spacing: -0.01em;
        }
        .craft-client + .craft-client::before {
          content: '●';
          margin-right: 14px;
          font-size: 0.4em;
          vertical-align: middle;
          color: #ffe2a8;
        }

        @media (max-width: 560px) {
          .craft-story { grid-template-columns: 1fr; }
          .craft-story-orbs { justify-content: flex-start; }
        }
      `}</style>

      {/* ============ HERO ============ */}
      <header className="craft-hero">
        <span className="craft-hero-arc" aria-hidden="true" />
        <span className="craft-eyebrow">
          <b>✦</b> Fresh Blendz Commercial · Since 1997
        </span>
        <h1 className="craft-h1">
          World’s Best <i>Cocktail</i> Mixes
        </h1>
        <p className="craft-sub">
          100% all-natural fresh fruit-based beverage mixes — top-shelf flavor, built for
          high-volume performance.
        </p>
        <div className="craft-hero-cta">
          <button type="button" className="craft-btn craft-btn-primary">
            Explore the mixes →
          </button>
          <button type="button" className="craft-btn craft-btn-ghost">
            Become a partner
          </button>
        </div>

        <div className="craft-hero-stats">
          <div className="craft-stat"><b>25+</b><span>Years experience</span></div>
          <div className="craft-stat"><b>100%</b><span>All-natural</span></div>
          <div className="craft-stat"><b>80+</b><span>Recipe videos</span></div>
          <div className="craft-stat"><b>3</b><span>Distribution regions</span></div>
        </div>
      </header>

      {/* ============ FROM SCRATCH STORY ============ */}
      <section className="craft-story">
        <div className="craft-story-orbs" aria-hidden="true">
          <Orb flavor="mango" size={66} shape="blob" float />
          <Orb flavor="strawberry" size={56} shape="blob" />
          <Orb flavor="pina" size={48} shape="blob" float />
        </div>
        <div>
          <p className="craft-story-kicker">From scratch, since ’97</p>
          <h2 className="craft-story-h">Hand-crafted in small batches, poured at scale.</h2>
          <p className="craft-story-p">
            We press real fruit into every mix — no shortcuts, no syrups pretending to be
            something they’re not. The result is a pour your guests can taste, served the same
            way across hotels, casinos and resorts. Fresh is best.
          </p>
        </div>
      </section>

      {/* ============ MIXES SHOWCASE ============ */}
      <div className="craft-sec-head">
        <h2 className="craft-sec-title">
          The <i>flavor</i> lineup
        </h2>
        <p className="craft-sec-note">
          Seven signature mixes — frozen or on the rocks, always real fruit.
        </p>
      </div>
      <div className="craft-mixes">
        {MIXES.map((m) => (
          <article
            key={m.name}
            className="craft-card"
            style={{
              ['--c1' as string]: m.tint,
              ['--c2' as string]: '#ffce8a',
            }}
          >
            <span className="craft-card-band" aria-hidden="true" />
            <span className="craft-card-tag">{m.hook}</span>
            <img className="craft-card-img" src={m.img} alt={`${m.name} fruit`} loading="lazy" />
            <h3 className="craft-card-name">{m.name}</h3>
            <p className="craft-card-hook">Real fruit · {m.flavor}</p>
          </article>
        ))}
      </div>

      {/* ============ PILLARS + CLOSING CTA ============ */}
      <section className="craft-close">
        <div className="craft-pillars">
          {PILLARS.map((p) => (
            <div key={p.label} className="craft-pillar">
              <b>{p.label}</b>
              <p>{p.copy}</p>
            </div>
          ))}
        </div>

        <div className="craft-cta-row">
          <h2 className="craft-cta-h">
            Ready to pour the <i>World’s Best</i>?
          </h2>
          <button type="button" className="craft-cta-btn">
            Start a tasting ↗
          </button>
        </div>

        <div className="craft-clients">
          <p className="craft-clients-l">Trusted by</p>
          <div className="craft-clients-row">
            {CLIENTS.map((c) => (
              <span key={c} className="craft-client">{c}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
