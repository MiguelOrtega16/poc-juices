import { Orb } from '../decor/Orb'

type Mix = {
  src: string
  name: string
  hook: string
  accent: string
}

const MIXES: Mix[] = [
  { src: '/ingredients/pina-colada.png', name: 'Piña Colada', hook: 'World’s Best — our flagship', accent: '#e8a000' },
  { src: '/ingredients/margarita.png', name: 'Margarita', hook: 'Frozen or on the rocks', accent: '#4f9a2e' },
  { src: '/ingredients/strawberry.png', name: 'Strawberry', hook: 'Real, chunky fruit', accent: '#e23a68' },
  { src: '/ingredients/mango.png', name: 'Mango', hook: 'Sweet, with a sour note', accent: '#ef5f1a' },
]

export function DecorPhoto() {
  return (
    <div className="dphoto-root">
      <style>{`
        .dphoto-root {
          --ink: #1d1a16;
          --muted: #6f675c;
          --paper: #f6f3ee;
          --line: rgba(29,26,22,0.10);
          font-family: 'Inter', system-ui, sans-serif;
          color: var(--ink);
          background:
            radial-gradient(120% 90% at 12% -10%, #fffdf9 0%, var(--paper) 46%, #efeae2 100%);
          border-radius: 20px;
          padding: clamp(1.4rem, 4vw, 2.2rem);
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }
        .dphoto-root *,
        .dphoto-root *::before,
        .dphoto-root *::after { box-sizing: border-box; }

        .dphoto-root .dphoto-glow {
          position: absolute;
          z-index: 0;
          filter: blur(6px);
          opacity: 0.5;
          pointer-events: none;
        }
        .dphoto-root .dphoto-glow--a { top: -34px; right: -30px; }
        .dphoto-root .dphoto-glow--b { bottom: -46px; left: -40px; }

        .dphoto-root .dphoto-eyebrow {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Space Grotesk', 'Inter', sans-serif;
          font-size: 0.66rem;
          font-weight: 600;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .dphoto-root .dphoto-eyebrow::before {
          content: '';
          width: 1.6rem;
          height: 1px;
          background: linear-gradient(90deg, transparent, currentColor);
        }

        .dphoto-root .dphoto-head {
          position: relative;
          z-index: 1;
          margin: 0.55rem 0 0.3rem;
          font-family: 'Fraunces', Georgia, serif;
          font-weight: 600;
          font-size: clamp(1.9rem, 7vw, 2.7rem);
          line-height: 0.98;
          letter-spacing: -0.015em;
        }
        .dphoto-root .dphoto-head em {
          font-style: italic;
          color: #ef5f1a;
        }
        .dphoto-root .dphoto-sub {
          position: relative;
          z-index: 1;
          max-width: 30rem;
          margin: 0;
          font-size: 0.86rem;
          line-height: 1.5;
          color: var(--muted);
        }

        .dphoto-root .dphoto-spread {
          position: relative;
          z-index: 1;
          margin-top: clamp(1.3rem, 4vw, 1.9rem);
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(0.7rem, 2.4vw, 1rem);
        }

        .dphoto-root .dphoto-card {
          position: relative;
          display: grid;
          grid-template-rows: 1fr auto;
          padding: 1rem 1rem 1.05rem;
          border-radius: 16px;
          background: linear-gradient(180deg, #ffffff 0%, #fbf8f3 100%);
          border: 1px solid var(--line);
          box-shadow:
            0 1px 0 rgba(255,255,255,0.9) inset,
            0 18px 30px -22px rgba(29,26,22,0.5);
          overflow: hidden;
          transition: transform 240ms ease, box-shadow 240ms ease;
        }
        .dphoto-root .dphoto-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 28px 44px -24px rgba(29,26,22,0.55);
        }
        .dphoto-root .dphoto-card::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 3px;
          background: var(--ac);
          opacity: 0.85;
        }

        .dphoto-root .dphoto-stage {
          position: relative;
          display: grid;
          place-items: center;
          min-height: clamp(120px, 30vw, 168px);
        }
        .dphoto-root .dphoto-disc {
          position: absolute;
          width: 78%;
          aspect-ratio: 1;
          border-radius: 50%;
          background:
            radial-gradient(circle at 50% 38%, color-mix(in srgb, var(--ac) 22%, #ffffff) 0%, transparent 66%);
          filter: blur(2px);
        }
        .dphoto-root .dphoto-bottle {
          position: relative;
          z-index: 1;
          height: clamp(108px, 27vw, 158px);
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 16px 14px rgba(29,26,22,0.28));
          transition: transform 300ms ease;
        }
        .dphoto-root .dphoto-card:hover .dphoto-bottle {
          transform: translateY(-3px) scale(1.03);
        }

        .dphoto-root .dphoto-meta {
          margin-top: 0.7rem;
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 0.5rem;
        }
        .dphoto-root .dphoto-name {
          font-family: 'Fraunces', Georgia, serif;
          font-weight: 600;
          font-size: 1.04rem;
          letter-spacing: -0.01em;
          line-height: 1.05;
        }
        .dphoto-root .dphoto-mark {
          font-size: 0.7rem;
          color: var(--ac);
          flex: none;
        }
        .dphoto-root .dphoto-hook {
          margin: 0.18rem 0 0;
          font-size: 0.76rem;
          line-height: 1.35;
          color: var(--muted);
        }

        .dphoto-root .dphoto-strip {
          position: relative;
          z-index: 1;
          margin-top: clamp(1rem, 3vw, 1.4rem);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.5rem 1.1rem;
          padding: 0.85rem 1.05rem;
          border-radius: 14px;
          background: rgba(29,26,22,0.04);
          border: 1px solid var(--line);
        }
        .dphoto-root .dphoto-pillar {
          font-family: 'Space Grotesk', 'Inter', sans-serif;
          font-size: 0.74rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--ink);
        }
        .dphoto-root .dphoto-dot {
          color: #ef5f1a;
          font-size: 0.6rem;
        }
        .dphoto-root .dphoto-tag {
          margin-left: auto;
          font-size: 0.68rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--muted);
        }

        @media (max-width: 380px) {
          .dphoto-root .dphoto-spread { grid-template-columns: 1fr; }
        }
      `}</style>

      <Orb flavor="pina" size={150} shape="blob" float className="dphoto-glow dphoto-glow--a" />
      <Orb flavor="strawberry" size={170} shape="blob" float className="dphoto-glow dphoto-glow--b" />

      <span className="dphoto-eyebrow">Real photography</span>
      <h2 className="dphoto-head">
        Our <em>mixes</em>, shot for shelf
      </h2>
      <p className="dphoto-sub">
        100% all-natural fresh fruit-based beverage mixes — the product photo is the hero,
        names and hooks kept quiet beside it.
      </p>

      <div className="dphoto-spread">
        {MIXES.map((m) => (
          <article key={m.name} className="dphoto-card" style={{ ['--ac' as string]: m.accent }}>
            <div className="dphoto-stage">
              <span className="dphoto-disc" />
              <img className="dphoto-bottle" src={m.src} alt={`${m.name} mix bottle`} loading="lazy" />
            </div>
            <div>
              <div className="dphoto-meta">
                <span className="dphoto-name">{m.name}</span>
                <span className="dphoto-mark">✦</span>
              </div>
              <p className="dphoto-hook">{m.hook}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="dphoto-strip">
        <span className="dphoto-pillar">Quality</span>
        <span className="dphoto-dot">●</span>
        <span className="dphoto-pillar">Consistency</span>
        <span className="dphoto-dot">●</span>
        <span className="dphoto-pillar">Volume</span>
        <span className="dphoto-tag">Fresh is Best</span>
      </div>
    </div>
  )
}
