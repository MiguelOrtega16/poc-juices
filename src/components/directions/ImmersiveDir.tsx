import { Orb } from '../decor/Orb'

type Mix = {
  name: string
  hook: string
  img: string
  flavor: 'pina' | 'margarita' | 'strawberry' | 'mango' | 'raspberry' | 'lemon' | 'ocean'
  accent: string
}

const MIXES: Mix[] = [
  { name: 'Piña Colada', hook: 'World’s Best', img: '/ingredients/pina-colada.png', flavor: 'pina', accent: '#e8a000' },
  { name: 'Margarita', hook: 'Frozen or rocks', img: '/ingredients/margarita.png', flavor: 'margarita', accent: '#9bd84a' },
  { name: 'Strawberry', hook: 'Real chunky fruit', img: '/ingredients/strawberry.png', flavor: 'strawberry', accent: '#ff5a7e' },
  { name: 'Mango', hook: 'Sweet, sour note', img: '/ingredients/mango.png', flavor: 'mango', accent: '#ff7a2a' },
  { name: 'Raspberry', hook: 'Rich & sweet', img: '/ingredients/raspberry.png', flavor: 'raspberry', accent: '#ff4f86' },
  { name: 'Lemon Sour', hook: 'Lemonade base', img: '/ingredients/sour-lemon.png', flavor: 'lemon', accent: '#ffd23a' },
  { name: 'Ice Cream', hook: 'Edy’s private label', img: '/ingredients/ice-cream.png', flavor: 'ocean', accent: '#2fd0c0' },
]

const PILLARS = ['Quality', 'Consistency', 'Volume']

const STATS: { value: string; label: string }[] = [
  { value: '25+', label: 'Years design experience' },
  { value: '100%', label: 'All-natural' },
  { value: '80+', label: 'Recipe videos' },
  { value: '3', label: 'Distribution regions' },
]

const CLIENTS = ['Ritz-Carlton', 'MGM Grand Las Vegas', 'JW Marriott', 'Marriott International', 'Kalahari Resorts']

export function ImmersiveDir() {
  return (
    <div className="imm-root">
      <style>{`
        .imm-root {
          --imm-bg: #0e0c08;
          --imm-ink: #f6f1e6;
          --imm-muted: rgba(246,241,230,0.58);
          --imm-line: rgba(246,241,230,0.10);
          position: relative;
          background:
            radial-gradient(120% 80% at 88% -8%, rgba(232,160,0,0.20), transparent 55%),
            radial-gradient(90% 70% at 4% 100%, rgba(12,154,139,0.18), transparent 55%),
            radial-gradient(60% 50% at 50% 50%, rgba(226,58,104,0.07), transparent 70%),
            var(--imm-bg);
          color: var(--imm-ink);
          font-family: 'Inter', sans-serif;
          border-radius: 22px;
          overflow: hidden;
          padding: clamp(1.5rem, 4vw, 3rem);
          isolation: isolate;
        }
        .imm-root *,
        .imm-root *::before,
        .imm-root *::after { box-sizing: border-box; }

        .imm-root .imm-grain {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background-image:
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.04) 0, transparent 1px),
            radial-gradient(circle at 70% 60%, rgba(255,255,255,0.03) 0, transparent 1px);
          background-size: 7px 7px, 11px 11px;
          mix-blend-mode: screen;
          opacity: 0.6;
        }

        /* ---------- nav strip ---------- */
        .imm-root .imm-topbar {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: clamp(1.5rem, 3vw, 2.5rem);
          border-bottom: 1px solid var(--imm-line);
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .imm-root .imm-brand {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 700;
          letter-spacing: -0.01em;
          font-size: 1.05rem;
        }
        .imm-root .imm-brand-dot {
          width: 30px; height: 30px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, #ffd27a, #ef5f1a 60%, #b8390a);
          box-shadow: 0 0 22px rgba(239,95,26,0.6);
        }
        .imm-root .imm-tagline {
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--imm-muted);
        }
        .imm-root .imm-est {
          font-size: 0.72rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--imm-muted);
        }

        /* ---------- hero ---------- */
        .imm-root .imm-hero {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: clamp(1.5rem, 4vw, 3rem);
          align-items: center;
          padding: clamp(2rem, 6vw, 4.5rem) 0 clamp(1.5rem, 4vw, 3rem);
        }
        .imm-root .imm-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          font-size: 0.72rem;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: var(--imm-muted);
          padding: 0.45rem 0.9rem;
          border: 1px solid var(--imm-line);
          border-radius: 100px;
          background: rgba(246,241,230,0.03);
          backdrop-filter: blur(4px);
        }
        .imm-root .imm-eyebrow .imm-spark { color: #e8a000; }
        .imm-root .imm-headline {
          font-family: 'Fraunces', serif;
          font-weight: 600;
          font-size: clamp(2.6rem, 6.4vw, 4.6rem);
          line-height: 0.96;
          letter-spacing: -0.02em;
          margin: 1.3rem 0 0;
        }
        .imm-root .imm-headline .imm-glowword {
          background: linear-gradient(102deg, #ffce63 0%, #ef5f1a 48%, #e23a68 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-style: italic;
        }
        .imm-root .imm-sub {
          margin: 1.4rem 0 0;
          max-width: 30rem;
          font-size: clamp(0.98rem, 1.6vw, 1.12rem);
          line-height: 1.6;
          color: var(--imm-muted);
        }
        .imm-root .imm-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-top: 2rem;
        }
        .imm-root .imm-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.85rem 1.5rem;
          border-radius: 100px;
          font-size: 0.92rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          cursor: pointer;
          border: 1px solid transparent;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .imm-root .imm-btn-primary {
          color: #1a1303;
          background: linear-gradient(100deg, #ffd27a, #ef9a1a);
          box-shadow: 0 14px 40px -10px rgba(239,154,26,0.7);
        }
        .imm-root .imm-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 20px 50px -10px rgba(239,154,26,0.85); }
        .imm-root .imm-btn-ghost {
          color: var(--imm-ink);
          border-color: var(--imm-line);
          background: rgba(246,241,230,0.04);
        }
        .imm-root .imm-btn-ghost:hover { transform: translateY(-2px); border-color: rgba(246,241,230,0.3); }

        .imm-root .imm-pillars {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.7rem;
          margin-top: 2.4rem;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.82rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--imm-muted);
        }
        .imm-root .imm-pillars b { color: var(--imm-ink); font-weight: 600; }
        .imm-root .imm-pillars .imm-sep { color: #ef5f1a; }

        /* ---------- hero stage / spotlit product ---------- */
        .imm-root .imm-stage {
          position: relative;
          min-height: clamp(320px, 42vw, 460px);
          display: grid;
          place-items: center;
        }
        .imm-root .imm-glow {
          position: absolute;
          filter: blur(34px);
          opacity: 0.85;
          z-index: 0;
        }
        .imm-root .imm-stage-ring {
          position: absolute;
          width: min(85%, 360px);
          aspect-ratio: 1;
          border-radius: 50%;
          border: 1px solid rgba(246,241,230,0.12);
          box-shadow: inset 0 0 60px rgba(232,160,0,0.18);
          z-index: 1;
        }
        .imm-root .imm-stage-ring::after {
          content: '';
          position: absolute;
          inset: -28px;
          border-radius: 50%;
          border: 1px solid rgba(246,241,230,0.05);
        }
        .imm-root .imm-bottle {
          position: relative;
          z-index: 2;
          width: clamp(150px, 26vw, 240px);
          height: auto;
          filter: drop-shadow(0 30px 50px rgba(0,0,0,0.7)) drop-shadow(0 0 38px rgba(232,160,0,0.35));
          animation: imm-bob 8s ease-in-out infinite;
        }
        @keyframes imm-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        .imm-root .imm-badge {
          position: absolute;
          z-index: 3;
          top: 6%;
          right: 2%;
          padding: 0.5rem 0.85rem;
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #1a1303;
          background: linear-gradient(100deg, #ffe39a, #e8a000);
          box-shadow: 0 0 26px rgba(232,160,0,0.6);
        }

        /* ---------- stats ribbon ---------- */
        .imm-root .imm-stats {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--imm-line);
          border: 1px solid var(--imm-line);
          border-radius: 16px;
          overflow: hidden;
          margin: clamp(1rem, 3vw, 2rem) 0 clamp(2.5rem, 6vw, 4rem);
        }
        .imm-root .imm-stat {
          background: rgba(14,12,8,0.6);
          padding: 1.25rem 1rem;
          text-align: center;
        }
        .imm-root .imm-stat-v {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.5rem, 3vw, 2.1rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          background: linear-gradient(120deg, #ffd27a, #ef5f1a);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .imm-root .imm-stat-l {
          margin-top: 0.3rem;
          font-size: 0.74rem;
          letter-spacing: 0.05em;
          color: var(--imm-muted);
        }

        /* ---------- section heading ---------- */
        .imm-root .imm-sec-head {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1.6rem;
          flex-wrap: wrap;
        }
        .imm-root .imm-sec-kicker {
          font-size: 0.72rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #e8a000;
        }
        .imm-root .imm-sec-title {
          font-family: 'Fraunces', serif;
          font-weight: 600;
          font-size: clamp(1.7rem, 3.4vw, 2.5rem);
          letter-spacing: -0.02em;
          line-height: 1.05;
          margin: 0.4rem 0 0;
        }
        .imm-root .imm-sec-note {
          font-size: 0.86rem;
          color: var(--imm-muted);
          max-width: 18rem;
          text-align: right;
        }

        /* ---------- mixes row ---------- */
        .imm-root .imm-mixes {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: clamp(0.8rem, 1.6vw, 1.1rem);
          margin-bottom: clamp(2.5rem, 6vw, 4rem);
        }
        .imm-root .imm-chip {
          position: relative;
          overflow: hidden;
          border-radius: 18px;
          border: 1px solid var(--imm-line);
          background: linear-gradient(180deg, rgba(246,241,230,0.05), rgba(246,241,230,0.01));
          padding: 1.2rem 1.1rem 1.3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .imm-root .imm-chip::before {
          content: '';
          position: absolute;
          top: -40%;
          left: 50%;
          width: 150%;
          aspect-ratio: 1;
          transform: translateX(-50%);
          background: radial-gradient(circle, var(--imm-chip-accent) 0%, transparent 62%);
          opacity: 0.22;
          transition: opacity 0.3s ease;
          z-index: 0;
          pointer-events: none;
        }
        .imm-root .imm-chip:hover {
          transform: translateY(-6px);
          border-color: rgba(246,241,230,0.22);
        }
        .imm-root .imm-chip:hover::before { opacity: 0.4; }
        .imm-root .imm-chip-stage {
          position: relative;
          z-index: 1;
          height: 118px;
          display: grid;
          place-items: center;
          margin-bottom: 0.7rem;
        }
        .imm-root .imm-chip-orb {
          position: absolute;
          filter: blur(10px);
          opacity: 0.7;
        }
        .imm-root .imm-chip-img {
          position: relative;
          z-index: 1;
          max-height: 118px;
          width: auto;
          filter: drop-shadow(0 14px 18px rgba(0,0,0,0.6));
        }
        .imm-root .imm-chip-name {
          position: relative;
          z-index: 1;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 1.02rem;
          letter-spacing: -0.01em;
        }
        .imm-root .imm-chip-hook {
          position: relative;
          z-index: 1;
          margin-top: 0.22rem;
          font-size: 0.78rem;
          letter-spacing: 0.04em;
          color: var(--imm-muted);
        }

        /* ---------- pull-quote ---------- */
        .imm-root .imm-quote {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: clamp(2.5rem, 6vw, 4.5rem) clamp(1rem, 4vw, 3rem);
          border-radius: 24px;
          border: 1px solid var(--imm-line);
          background:
            radial-gradient(80% 120% at 50% 0%, rgba(232,160,0,0.16), transparent 60%),
            radial-gradient(80% 120% at 50% 100%, rgba(12,154,139,0.14), transparent 60%),
            rgba(246,241,230,0.02);
          overflow: hidden;
          margin-bottom: clamp(2.5rem, 6vw, 4rem);
        }
        .imm-root .imm-quote-mark {
          font-family: 'Fraunces', serif;
          font-size: 4rem;
          line-height: 0.5;
          color: #ef5f1a;
          opacity: 0.7;
        }
        .imm-root .imm-quote-text {
          font-family: 'Fraunces', serif;
          font-weight: 500;
          font-style: italic;
          font-size: clamp(1.6rem, 3.8vw, 2.7rem);
          line-height: 1.18;
          letter-spacing: -0.01em;
          max-width: 24ch;
          margin: 1rem auto 0;
        }
        .imm-root .imm-quote-text em {
          font-style: italic;
          background: linear-gradient(100deg, #ffce63, #e23a68);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .imm-root .imm-quote-by {
          margin-top: 1.6rem;
          font-size: 0.74rem;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: var(--imm-muted);
        }

        /* ---------- closing / pillars + clients strip ---------- */
        .imm-root .imm-close {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(1.2rem, 3vw, 2rem);
          align-items: center;
        }
        .imm-root .imm-close-card {
          border: 1px solid var(--imm-line);
          border-radius: 20px;
          padding: clamp(1.5rem, 3vw, 2.2rem);
          background: rgba(246,241,230,0.02);
        }
        .imm-root .imm-pillarslist {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }
        .imm-root .imm-pillar-item {
          display: flex;
          align-items: baseline;
          gap: 0.9rem;
        }
        .imm-root .imm-pillar-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.8rem;
          color: #e8a000;
          letter-spacing: 0.1em;
        }
        .imm-root .imm-pillar-word {
          font-family: 'Fraunces', serif;
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          font-weight: 600;
          letter-spacing: -0.01em;
        }
        .imm-root .imm-clients-label {
          font-size: 0.72rem;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: var(--imm-muted);
          margin-bottom: 1.1rem;
        }
        .imm-root .imm-clients {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }
        .imm-root .imm-client {
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: var(--imm-ink);
          padding: 0.5rem 0.9rem;
          border-radius: 100px;
          border: 1px solid var(--imm-line);
          background: rgba(246,241,230,0.03);
        }

        @media (max-width: 820px) {
          .imm-root .imm-hero { grid-template-columns: 1fr; }
          .imm-root .imm-stage { order: -1; min-height: 300px; }
          .imm-root .imm-stats { grid-template-columns: repeat(2, 1fr); }
          .imm-root .imm-close { grid-template-columns: 1fr; }
          .imm-root .imm-sec-note { text-align: left; }
        }
      `}</style>

      <span className="imm-grain" />

      {/* nav strip */}
      <div className="imm-topbar">
        <div className="imm-brand">
          <span className="imm-brand-dot" />
          Fresh Blendz
          <span className="imm-tagline">Fresh is Best</span>
        </div>
        <span className="imm-est">Est. 1997 · Commercial</span>
      </div>

      {/* hero */}
      <section className="imm-hero">
        <div className="imm-hero-copy">
          <span className="imm-eyebrow"><span className="imm-spark">✦</span> B2B Cocktail Mix Supplier</span>
          <h1 className="imm-headline">
            World&rsquo;s Best<br />
            <span className="imm-glowword">Cocktail Mixes</span>
          </h1>
          <p className="imm-sub">
            100% all-natural fresh fruit-based beverage mixes — top-shelf flavor,
            built for high-volume performance.
          </p>
          <div className="imm-cta-row">
            <button className="imm-btn imm-btn-primary" type="button">Request samples →</button>
            <button className="imm-btn imm-btn-ghost" type="button">Watch recipes ↗</button>
          </div>
          <div className="imm-pillars">
            <b>Quality</b> <span className="imm-sep">●</span> <b>Consistency</b> <span className="imm-sep">●</span> <b>Volume</b>
          </div>
        </div>

        <div className="imm-stage">
          <Orb flavor="hero" size={420} className="imm-glow" float />
          <span className="imm-stage-ring" />
          <span className="imm-badge">Flagship</span>
          <img className="imm-bottle" src="/ingredients/pina-colada.png" alt="Piña Colada cocktail mix" />
        </div>
      </section>

      {/* stats */}
      <div className="imm-stats">
        {STATS.map((s) => (
          <div className="imm-stat" key={s.label}>
            <div className="imm-stat-v">{s.value}</div>
            <div className="imm-stat-l">{s.label}</div>
          </div>
        ))}
      </div>

      {/* mixes showcase */}
      <div className="imm-sec-head">
        <div>
          <div className="imm-sec-kicker">The Lineup</div>
          <h2 className="imm-sec-title">Mixes that pour like magic</h2>
        </div>
        <p className="imm-sec-note">Real fruit. Real consistency. Engineered for the speed of a packed bar.</p>
      </div>

      <div className="imm-mixes">
        {MIXES.map((m) => (
          <article
            className="imm-chip"
            key={m.name}
            style={{ ['--imm-chip-accent' as string]: m.accent }}
          >
            <div className="imm-chip-stage">
              <Orb flavor={m.flavor} size={92} className="imm-chip-orb" />
              <img className="imm-chip-img" src={m.img} alt={`${m.name} mix bottle`} />
            </div>
            <div className="imm-chip-name">{m.name}</div>
            <div className="imm-chip-hook">{m.hook}</div>
          </article>
        ))}
      </div>

      {/* pull-quote */}
      <section className="imm-quote">
        <div className="imm-quote-mark">&ldquo;</div>
        <p className="imm-quote-text">
          We deliver the <em>highest quality mixes</em> in the industry.
        </p>
        <div className="imm-quote-by">Fresh Blendz Commercial — Since 1997</div>
      </section>

      {/* closing strip */}
      <section className="imm-close">
        <div className="imm-close-card">
          <div className="imm-sec-kicker">Built On</div>
          <div className="imm-pillarslist">
            {PILLARS.map((p, i) => (
              <div className="imm-pillar-item" key={p}>
                <span className="imm-pillar-num">0{i + 1}</span>
                <span className="imm-pillar-word">{p}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="imm-close-card">
          <div className="imm-clients-label">Trusted by high-volume venues</div>
          <div className="imm-clients">
            {CLIENTS.map((c) => (
              <span className="imm-client" key={c}>{c}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
