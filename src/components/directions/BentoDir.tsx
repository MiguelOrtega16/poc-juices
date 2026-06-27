import { Orb } from '../decor/Orb'

type Mix = {
  name: string
  hook: string
  flavor: 'pina' | 'margarita' | 'strawberry' | 'mango' | 'raspberry' | 'lemon'
  fill: string
  ink: string
  img: string
}

const MIXES: Mix[] = [
  { name: 'Piña Colada', hook: "World's Best", flavor: 'pina', fill: '#e8a000', ink: '#2a1c00', img: '/ingredients/pina-colada.png' },
  { name: 'Margarita', hook: 'Frozen or rocks', flavor: 'margarita', fill: '#4f9a2e', ink: '#ffffff', img: '/ingredients/margarita.png' },
  { name: 'Strawberry', hook: 'Real chunky fruit', flavor: 'strawberry', fill: '#e23a68', ink: '#ffffff', img: '/ingredients/strawberry.png' },
  { name: 'Mango', hook: 'Sweet, sour note', flavor: 'mango', fill: '#ef5f1a', ink: '#ffffff', img: '/ingredients/mango.png' },
  { name: 'Raspberry', hook: 'Rich & sweet', flavor: 'raspberry', fill: '#6f3bc2', ink: '#ffffff', img: '/ingredients/raspberry.png' },
  { name: 'Lemon Sour', hook: 'Lemonade base', flavor: 'lemon', fill: '#f4d020', ink: '#3a2f00', img: '/ingredients/sour-lemon.png' },
]

const PILLARS: { label: string; note: string; fill: string; ink: string }[] = [
  { label: 'Quality', note: '100% all-natural, fresh fruit first', fill: '#0c9a8b', ink: '#ffffff' },
  { label: 'Consistency', note: 'Same top-shelf pour, every batch', fill: '#ef5f1a', ink: '#ffffff' },
  { label: 'Volume', note: 'Built for high-traffic venues', fill: '#6f3bc2', ink: '#ffffff' },
]

const CLIENTS = ['Ritz-Carlton', 'MGM Grand Las Vegas', 'JW Marriott', 'Marriott International', 'Kalahari Resorts']

export function BentoDir() {
  return (
    <div className="bento-root">
      <style>{`
        .bento-root {
          --ink: #1a120a;
          font-family: 'Inter', system-ui, sans-serif;
          color: var(--ink);
          background:
            radial-gradient(120% 90% at 100% 0%, rgba(232,160,0,0.14), transparent 55%),
            radial-gradient(120% 90% at 0% 100%, rgba(12,154,139,0.14), transparent 55%),
            #fbf6ec;
          padding: clamp(16px, 2.4vw, 28px);
          border-radius: 24px;
          width: 100%;
          box-sizing: border-box;
        }
        .bento-root *, .bento-root *::before, .bento-root *::after { box-sizing: border-box; }

        .bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(10px, 1.2vw, 16px);
        }
        .bento-tile {
          border-radius: 20px;
          padding: clamp(18px, 2vw, 26px);
          position: relative;
          overflow: hidden;
          min-height: 0;
        }

        /* ---- HERO ---- */
        .bento-hero {
          grid-column: span 3;
          grid-row: span 2;
          background:
            radial-gradient(140% 120% at 100% 0%, rgba(255,255,255,0.22), transparent 60%),
            linear-gradient(135deg, #ef5f1a 0%, #e23a68 52%, #6f3bc2 100%);
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 22px;
          min-height: 320px;
        }
        .bento-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 0.74rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.16);
          border: 1px solid rgba(255,255,255,0.32);
          width: fit-content;
        }
        .bento-hero h1 {
          font-family: 'Bricolage Grotesque', 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(2.4rem, 5.4vw, 4.1rem);
          line-height: 0.96;
          letter-spacing: -0.03em;
          margin: 0;
          max-width: 12ch;
          text-shadow: 0 6px 30px rgba(40,10,30,0.28);
        }
        .bento-hero p {
          margin: 14px 0 0;
          font-size: clamp(0.95rem, 1.3vw, 1.1rem);
          line-height: 1.45;
          max-width: 46ch;
          color: rgba(255,255,255,0.92);
        }
        .bento-hero-foot {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px 24px;
          justify-content: space-between;
        }
        .bento-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          color: #1a120a;
          background: #fff;
          padding: 14px 24px;
          border-radius: 999px;
          text-decoration: none;
          box-shadow: 0 14px 30px rgba(40,10,30,0.28);
          transition: transform 0.18s ease;
        }
        .bento-cta:hover { transform: translateY(-2px); }
        .bento-cta span { font-size: 1.15rem; line-height: 1; }
        .bento-founded {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.86);
        }
        .bento-hero-orb {
          position: absolute;
          right: -52px;
          top: -42px;
          opacity: 0.85;
          pointer-events: none;
        }

        /* ---- STAT TILES (right rail) ---- */
        .bento-stat {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 4px;
          min-height: 0;
        }
        .bento-stat-a {
          grid-column: span 1;
          background: linear-gradient(155deg, #e8a000, #ef5f1a);
          color: #2a1c00;
        }
        .bento-stat-b {
          grid-column: span 1;
          background: linear-gradient(155deg, #0c9a8b, #0a7d8a);
          color: #fff;
        }
        .bento-stat .num {
          font-family: 'Bricolage Grotesque', 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(2.1rem, 3.2vw, 2.9rem);
          line-height: 0.95;
          letter-spacing: -0.03em;
        }
        .bento-stat .cap {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 0.78rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          opacity: 0.92;
        }

        /* ---- SECTION HEADER ---- */
        .bento-sec-head {
          grid-column: 1 / -1;
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: clamp(6px, 1vw, 12px);
        }
        .bento-sec-head h2 {
          font-family: 'Bricolage Grotesque', 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(1.5rem, 2.6vw, 2.1rem);
          letter-spacing: -0.02em;
          margin: 0;
        }
        .bento-sec-head .tag {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 0.82rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #8a6b3f;
        }

        /* ---- MIX TILES ---- */
        .bento-mix {
          grid-column: span 2;
          min-height: 140px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 12px;
        }
        .bento-mix .mix-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
        }
        .bento-mix .mix-hook {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 0.74rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          opacity: 0.85;
        }
        .bento-mix .mix-name {
          font-family: 'Bricolage Grotesque', 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(1.3rem, 2.2vw, 1.7rem);
          letter-spacing: -0.02em;
          line-height: 1;
        }
        .bento-mix .mix-bottle {
          position: absolute;
          right: -8px;
          bottom: -10px;
          height: 118px;
          width: auto;
          filter: drop-shadow(0 12px 18px rgba(0,0,0,0.25));
          pointer-events: none;
        }
        .bento-mix .mix-orb { align-self: flex-start; }

        /* ---- PILLARS ---- */
        .bento-pillar {
          grid-column: span 1;
          min-height: 150px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 14px;
        }
        .bento-pillar .p-no {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 0.82rem;
          letter-spacing: 0.1em;
          opacity: 0.78;
        }
        .bento-pillar .p-label {
          font-family: 'Bricolage Grotesque', 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(1.4rem, 2.4vw, 1.9rem);
          letter-spacing: -0.02em;
          line-height: 1;
        }
        .bento-pillar .p-note {
          font-size: 0.9rem;
          line-height: 1.4;
          opacity: 0.95;
        }

        /* ---- CLOSING / CLIENTS STRIP ---- */
        .bento-close {
          grid-column: 1 / -1;
          background:
            radial-gradient(120% 160% at 0% 0%, rgba(232,160,0,0.5), transparent 60%),
            #1a120a;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px 32px;
          flex-wrap: wrap;
        }
        .bento-close .c-left {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .bento-close .c-mark {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 0.76rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #e8a000;
        }
        .bento-close .c-title {
          font-family: 'Bricolage Grotesque', 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(1.2rem, 2vw, 1.6rem);
          letter-spacing: -0.02em;
        }
        .bento-clients {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 10px;
          max-width: 560px;
        }
        .bento-clients span {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 0.82rem;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.16);
          color: rgba(255,255,255,0.92);
        }

        @media (max-width: 760px) {
          .bento-grid { grid-template-columns: repeat(2, 1fr); }
          .bento-hero { grid-column: 1 / -1; grid-row: auto; }
          .bento-mix { grid-column: span 2; }
          .bento-pillar { grid-column: span 2; min-height: 120px; }
        }
      `}</style>

      <div className="bento-grid">
        {/* HERO */}
        <section className="bento-tile bento-hero">
          <Orb flavor="hero" size={300} shape="blob" className="bento-hero-orb" float />
          <div>
            <span className="bento-eyebrow">✦ Fresh is Best — Est. 1997</span>
            <h1>World's Best Cocktail Mixes</h1>
            <p>
              100% all-natural fresh fruit-based beverage mixes — top-shelf flavor,
              built for high-volume performance. Quality · Consistency · Volume.
            </p>
          </div>
          <div className="bento-hero-foot">
            <a className="bento-cta" href="#contact">
              Contact for Distribution <span>↗</span>
            </a>
            <span className="bento-founded">Fresh Blendz Commercial · B2B Supply</span>
          </div>
        </section>

        {/* RIGHT-RAIL STATS */}
        <div className="bento-tile bento-stat bento-stat-a">
          <span className="num">80+</span>
          <span className="cap">Recipe videos</span>
        </div>
        <div className="bento-tile bento-stat bento-stat-b">
          <span className="num">25+</span>
          <span className="cap">Years design exp.</span>
        </div>

        {/* MIXES SECTION */}
        <div className="bento-sec-head">
          <h2>The Mixes</h2>
          <span className="tag">7 signature blends · all-natural</span>
        </div>

        {MIXES.map((m) => (
          <article
            key={m.name}
            className="bento-tile bento-mix"
            style={{ background: m.fill, color: m.ink }}
          >
            <div className="mix-top">
              <div>
                <div className="mix-hook">{m.hook}</div>
                <div className="mix-name">{m.name}</div>
              </div>
              <Orb flavor={m.flavor} size={40} className="mix-orb" />
            </div>
            <img className="mix-bottle" src={m.img} alt={`${m.name} mix bottle`} />
          </article>
        ))}

        {/* PILLARS SECTION */}
        <div className="bento-sec-head">
          <h2>Built On Three</h2>
          <span className="tag">Why venues pour Fresh Blendz</span>
        </div>

        {PILLARS.map((p, i) => (
          <div
            key={p.label}
            className="bento-tile bento-pillar"
            style={{ background: p.fill, color: p.ink }}
          >
            <span className="p-no">0{i + 1} / 03</span>
            <div>
              <div className="p-label">{p.label}</div>
              <div className="p-note">{p.note}</div>
            </div>
          </div>
        ))}

        {/* CLOSING / CLIENTS */}
        <section className="bento-tile bento-close" id="contact">
          <div className="c-left">
            <span className="c-mark">● Trusted at high-volume venues</span>
            <span className="c-title">Poured across 3 distribution regions</span>
          </div>
          <div className="bento-clients">
            {CLIENTS.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
