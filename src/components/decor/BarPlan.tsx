type StationKind = 'machine' | 'mix' | 'cold' | 'batch'

type Station = {
  label: string
  kind: StationKind
  top: string
  left: string
  w: string
  h: string
}

type BarPlanProps = {
  stations: Station[]
  hotKind: StationKind | null
}

const COLORS: Record<StationKind, string> = {
  machine: '#0c9a8b', // ocean
  mix: '#ef5f1a', // mango
  cold: '#6f3bc2', // grape
  batch: '#e23a68', // guava
}

/** Parse a CSS percent string like '24%' into a number (24). Falls back to 0. */
function pct(value: string): number {
  const n = parseFloat(value)
  return Number.isFinite(n) ? n : 0
}

/** Rich inline glyph per station kind — inherits currentColor. */
function KindIcon({ kind }: { kind: StationKind }) {
  switch (kind) {
    case 'machine':
      // Taylor twin-barrel frozen-drink machine: two hoppers, two taps, a drip tray.
      return (
        <svg viewBox="0 0 28 28" className="plan-glyph" aria-hidden="true">
          {/* hoppers / cylinders */}
          <rect className="plan-fill" x="4.6" y="2.6" width="7.6" height="8.4" rx="2.2" />
          <rect className="plan-fill" x="15.8" y="2.6" width="7.6" height="8.4" rx="2.2" />
          {/* hopper lids */}
          <path className="plan-stroke" d="M5.6 4.8h5.6M16.8 4.8h5.6" opacity="0.55" />
          {/* liquid windows */}
          <rect className="plan-liquid plan-liquid--a" x="6.2" y="6.4" width="4.4" height="3.4" rx="1" />
          <rect className="plan-liquid plan-liquid--b" x="17.4" y="6.4" width="4.4" height="3.4" rx="1" />
          {/* body / console */}
          <rect className="plan-fill" x="3.4" y="11.6" width="21.2" height="6.6" rx="2.4" />
          {/* taps + falling stream */}
          <path className="plan-stroke" d="M9 18.2v2.6M19 18.2v2.6" />
          <path className="plan-stream plan-stream--a" d="M9 21v2.6" />
          <path className="plan-stream plan-stream--b" d="M19 21v2.6" />
          {/* drip tray */}
          <path className="plan-fill" d="M5 23.4h18l-1.4 2.6H6.4L5 23.4Z" />
        </svg>
      )
    case 'mix':
      // fresh-juice jug with droplet + spout
      return (
        <svg viewBox="0 0 28 28" className="plan-glyph" aria-hidden="true">
          <path
            className="plan-fill"
            d="M7.4 7.2h11.4l-1 14.2a3 3 0 0 1-3 2.8H11.4a3 3 0 0 1-3-2.8L7.4 7.2Z"
          />
          {/* spout */}
          <path className="plan-fill" d="M18.6 8.6c2.8.1 4.6 1.3 4.6 3.1 0 1.6-1.5 2.5-3.6 2.6l-.2-2.2c.9-.05 1.4-.3 1.4-.6 0-.4-.7-.7-2-.75l-.2-2.2Z" />
          {/* juice level + droplet shimmer */}
          <path className="plan-liquid plan-liquid--a" d="M8 13.6h12l-.55 8a2 2 0 0 1-2 1.9h-3.9a2 2 0 0 1-2-1.9L8 13.6Z" />
          <path className="plan-droplet" d="M14 15.4c1.5 1.9 2.5 3.1 2.5 4.4a2.5 2.5 0 0 1-5 0c0-1.3 1-2.5 2.5-4.4Z" />
        </svg>
      )
    case 'cold':
      // fridge with snowflake
      return (
        <svg viewBox="0 0 28 28" className="plan-glyph" aria-hidden="true">
          <rect className="plan-fill" x="6" y="2.6" width="16" height="22.8" rx="3" />
          <path className="plan-stroke" d="M6 11.2h16" opacity="0.5" />
          <path className="plan-stroke" d="M9.4 6v2.2M9.4 14.4v2.2" />
          {/* snowflake */}
          <g className="plan-snow">
            <path
              className="plan-stroke"
              d="M14 16v6.6M11 17.7l6 3.2M11 20.9l6-3.2M14 17.4l-1.4-1.4M14 17.4l1.4-1.4M14 21.2l-1.4 1.4M14 21.2l1.4 1.4"
            />
          </g>
        </svg>
      )
    case 'batch':
      // stacked batch containers
      return (
        <svg viewBox="0 0 28 28" className="plan-glyph" aria-hidden="true">
          <rect className="plan-fill" x="6.5" y="17.4" width="15" height="7" rx="2" />
          <rect className="plan-fill" x="7.6" y="10.4" width="12.8" height="6.4" rx="2" />
          <rect className="plan-fill" x="8.8" y="3.8" width="10.4" height="5.8" rx="2" />
          <path className="plan-stroke" d="M10.2 5.2h7.6M9 11.8h10M7.8 18.8h12.4" opacity="0.5" />
        </svg>
      )
  }
}

export function BarPlan({ stations, hotKind }: BarPlanProps) {
  // Bounding box across all stations (in plan-percent units) → drives the counter shape.
  let minX = 100
  let minY = 100
  let maxX = 0
  let maxY = 0
  for (const s of stations) {
    const l = pct(s.left)
    const t = pct(s.top)
    const r = l + pct(s.w)
    const b = t + pct(s.h)
    if (l < minX) minX = l
    if (t < minY) minY = t
    if (r > maxX) maxX = r
    if (b > maxY) maxY = b
  }
  if (!stations.length) {
    minX = 18
    minY = 18
    maxX = 82
    maxY = 82
  }

  // Counter: inset a touch inside the bounding box so module cards overhang the edge slightly.
  const pad = 4
  const cTop = Math.max(4, minY - pad)
  const cLeft = Math.max(4, minX - pad)
  const cRight = Math.min(96, maxX + pad)
  const cBottom = Math.min(96, maxY + pad)
  const cW = cRight - cLeft
  const cH = cBottom - cTop

  // Stools spaced evenly around the counter perimeter (fully deterministic).
  const STOOLS = 14
  const stools = Array.from({ length: STOOLS }, (_, i) => {
    const angle = (i / STOOLS) * Math.PI * 2 - Math.PI / 2
    const rx = cW / 2 + 6
    const ry = cH / 2 + 6
    const cx = cLeft + cW / 2 + Math.cos(angle) * rx
    const cy = cTop + cH / 2 + Math.sin(angle) * ry
    return { key: i, x: cx, y: cy }
  }).filter((s) => s.x > 2 && s.x < 98 && s.y > 2 && s.y < 98)

  // Signature of the current layout → used as a React key so switching layout tabs
  // remounts the animated module layer and re-triggers the staggered pop-in.
  const layoutSig = stations.map((s) => `${s.kind}:${s.left}:${s.top}`).join('|')

  return (
    <div className={`plan-root ${hotKind ? 'has-hot' : ''}`} role="img" aria-label="Bar floor plan with equipment modules">
      <style>{`
        .plan-root {
          width: 100%;
          height: 100%;
          display: grid;
          place-items: center;
          position: relative;
          isolation: isolate;
          --plan-spring: cubic-bezier(0.34, 1.42, 0.5, 1);
        }

        /* ===== square stage with a gentle isometric tilt ===== */
        .plan-stage {
          position: relative;
          width: 100%;
          max-width: 460px;
          aspect-ratio: 1 / 1;
          perspective: 1300px;
          perspective-origin: 50% 18%;
        }
        .plan-area {
          position: absolute;
          inset: 0;
          border-radius: 26px;
          overflow: hidden;
          transform-style: preserve-3d;
          transform: rotateX(20deg) rotateZ(-1deg) scale(0.92) translateY(2%);
          background:
            radial-gradient(120% 110% at 20% 8%, rgba(12,154,139,0.10), transparent 58%),
            radial-gradient(130% 120% at 86% 96%, rgba(111,59,194,0.10), transparent 60%),
            linear-gradient(180deg, #f6f9fc 0%, #eef2f7 100%);
          box-shadow:
            0 40px 60px -34px rgba(26,18,10,0.55),
            inset 0 0 0 1.5px rgba(26,18,10,0.10),
            inset 0 2px 0 rgba(255,255,255,0.8);
          animation: plan-floor-in 0.7s var(--plan-spring) both;
        }
        /* blueprint grid */
        .plan-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(26,18,10,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,18,10,0.05) 1px, transparent 1px),
            linear-gradient(rgba(26,18,10,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,18,10,0.028) 1px, transparent 1px);
          background-size: 58px 58px, 58px 58px, 14.5px 14.5px, 14.5px 14.5px;
          background-position: -1px -1px;
          pointer-events: none;
        }
        .plan-ticks {
          position: absolute;
          inset: 14px;
          border-radius: 16px;
          border: 1.5px dashed rgba(26,18,10,0.13);
          pointer-events: none;
        }
        /* layer that carries floor furniture a touch above the base plane */
        .plan-layer {
          position: absolute;
          inset: 0;
          transform-style: preserve-3d;
        }

        /* ===== raised bar counter (3D with thickness) ===== */
        .plan-counter {
          position: absolute;
          border-radius: 28px;
          transform-style: preserve-3d;
          z-index: 1;
        }
        /* the chunky side / front face → reads as thickness */
        .plan-counter__side {
          position: absolute;
          inset: 6px -2px -2px 6px;
          border-radius: 28px;
          background: linear-gradient(180deg, #3a2517 0%, #2a1a10 100%);
          box-shadow: 0 22px 30px -16px rgba(26,18,10,0.7);
        }
        /* the polished wood top surface */
        .plan-counter__top {
          position: absolute;
          inset: 0;
          border-radius: 28px;
          background:
            linear-gradient(150deg, #7a5436 0%, #6b4a2f 38%, #58391f 78%, #4a3120 100%);
          box-shadow:
            inset 0 2px 0 rgba(255,255,255,0.16),
            inset 0 -4px 12px rgba(0,0,0,0.34),
            inset 0 0 0 1.5px rgba(255,255,255,0.05);
          overflow: hidden;
        }
        /* wood grain */
        .plan-counter__top::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            repeating-linear-gradient(
              118deg,
              rgba(255,255,255,0.055) 0 2px,
              rgba(0,0,0,0.06) 2px 8px
            );
          opacity: 0.5;
          mix-blend-mode: overlay;
        }
        /* travelling sheen across the polished top */
        .plan-counter__top::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            118deg,
            transparent 36%,
            rgba(255,255,255,0.22) 49%,
            rgba(255,255,255,0.05) 56%,
            transparent 66%
          );
          transform: translateX(-130%);
          animation: plan-sheen 7s cubic-bezier(0.4,0,0.2,1) infinite;
        }
        /* darker back-bar lip */
        .plan-backbar {
          position: absolute;
          left: 4%;
          right: 4%;
          top: -3.2%;
          height: 6.4%;
          border-radius: 22px;
          background: linear-gradient(180deg, #3c281a, #2a1b11);
          box-shadow: 0 5px 12px -4px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.09);
        }

        /* ===== bar stools ===== */
        .plan-stool {
          position: absolute;
          width: 6.4%;
          height: 6.4%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: radial-gradient(circle at 36% 28%, #fff 0%, #ecdfc8 44%, #cdb892 100%);
          box-shadow:
            0 7px 10px -5px rgba(26,18,10,0.55),
            inset 0 0 0 1.5px rgba(26,18,10,0.18);
          z-index: 0;
          animation: plan-stool-in 0.5s var(--plan-spring) both;
        }
        .plan-stool::after {
          content: '';
          position: absolute;
          inset: 30%;
          border-radius: 50%;
          background: rgba(26,18,10,0.12);
          box-shadow: inset 0 1px 2px rgba(0,0,0,0.25);
        }

        /* ===== module cards ===== */
        .plan-mod {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.16rem;
          text-align: center;
          padding: 0.3rem 0.32rem;
          border-radius: 15px;
          background: #fffdf8;
          color: #1a120a;
          border: 2px solid var(--plan-c);
          box-shadow:
            0 2px 0 color-mix(in srgb, var(--plan-c) 30%, #c9b9a0),
            0 12px 20px -12px rgba(26,18,10,0.5),
            inset 0 1px 0 rgba(255,255,255,0.75);
          overflow: hidden;
          z-index: 3;
          transform-origin: center bottom;
          transition:
            transform 0.42s var(--plan-spring),
            background 0.34s ease,
            color 0.34s ease,
            border-color 0.34s ease,
            box-shadow 0.42s ease,
            opacity 0.34s ease,
            filter 0.34s ease;
          animation: plan-mod-in 0.6s var(--plan-spring) backwards;
          animation-delay: var(--plan-delay, 0s);
        }
        /* ambient contact shadow beneath each module */
        .plan-mod::before {
          content: '';
          position: absolute;
          left: 12%;
          right: 12%;
          bottom: -9px;
          height: 12px;
          border-radius: 50%;
          background: rgba(26,18,10,0.32);
          filter: blur(5px);
          z-index: -1;
          opacity: 0.55;
          transition: opacity 0.34s ease, transform 0.42s var(--plan-spring);
        }
        /* live "dispensing" liquid glow sweeping inside machine modules */
        .plan-mod--live::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(
            60% 45% at 50% 12%,
            color-mix(in srgb, var(--plan-c) 26%, transparent),
            transparent 70%
          );
          opacity: 0.7;
          animation: plan-glow 2.4s ease-in-out infinite;
          pointer-events: none;
        }
        .plan-mod__icon {
          position: relative;
          display: grid;
          place-items: center;
          width: 1.7rem;
          height: 1.7rem;
          flex: none;
          border-radius: 10px;
          color: var(--plan-c);
          background: color-mix(in srgb, var(--plan-c) 14%, transparent);
          transition: background 0.34s ease, color 0.34s ease;
        }
        .plan-glyph {
          width: 1.2rem;
          height: 1.2rem;
        }
        .plan-fill { fill: currentColor; }
        .plan-stroke {
          fill: none;
          stroke: currentColor;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .plan-liquid {
          fill: color-mix(in srgb, currentColor 45%, #fff);
          opacity: 0.85;
        }
        .plan-mod.is-hot .plan-liquid { fill: rgba(255,255,255,0.55); }
        .plan-droplet { fill: color-mix(in srgb, currentColor 35%, #fff); }
        .plan-mod.is-hot .plan-droplet { fill: rgba(255,255,255,0.7); }
        .plan-mod__label {
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-weight: 600;
          font-size: 0.6rem;
          letter-spacing: 0.03em;
          line-height: 1.05;
          text-transform: uppercase;
          word-break: break-word;
          hyphens: auto;
          max-width: 100%;
        }
        /* live-dot beacon on machine modules */
        .plan-pulse {
          position: absolute;
          top: 6px;
          right: 6px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--plan-c);
          box-shadow: 0 0 0 0 var(--plan-c);
          animation: plan-pulse 2.4s ease-out infinite;
        }
        /* the dispensing stream + liquid windows only animate on live machine glyphs */
        .plan-mod--live .plan-stream {
          stroke: color-mix(in srgb, currentColor 60%, #fff);
          stroke-width: 1.6;
          stroke-linecap: round;
          stroke-dasharray: 2 4;
          animation: plan-drip 1.1s linear infinite;
        }
        .plan-mod--live .plan-stream--b { animation-delay: 0.55s; }
        .plan-mod--live .plan-liquid--a { animation: plan-bob 2.1s ease-in-out infinite; }
        .plan-mod--live .plan-liquid--b { animation: plan-bob 2.1s ease-in-out infinite 0.5s; }

        /* ===== dimming of non-hot modules ===== */
        .plan-root.has-hot .plan-mod:not(.is-hot) {
          opacity: 0.62;
          filter: saturate(0.8);
          transform: scale(0.97);
        }

        /* ===== highlighted (hot) module — pops dramatically ===== */
        .plan-mod.is-hot {
          background: var(--plan-c);
          color: #fff;
          border-color: #fff;
          transform: translateZ(40px) scale(1.16);
          z-index: 6;
          box-shadow:
            0 0 0 4px color-mix(in srgb, var(--plan-c) 28%, transparent),
            0 22px 38px -12px color-mix(in srgb, var(--plan-c) 65%, rgba(26,18,10,0.5)),
            inset 0 1px 0 rgba(255,255,255,0.4);
        }
        .plan-mod.is-hot::before {
          opacity: 0.7;
          transform: scale(1.25) translateY(4px);
        }
        .plan-mod.is-hot .plan-mod__icon {
          background: rgba(255,255,255,0.22);
          color: #fff;
        }
        .plan-mod.is-hot .plan-pulse {
          background: #fff;
          box-shadow: 0 0 0 0 rgba(255,255,255,0.7);
        }

        /* ===== keyframes ===== */
        @keyframes plan-floor-in {
          from { opacity: 0; transform: rotateX(30deg) rotateZ(-1deg) scale(0.84) translateY(8%); }
          to   { opacity: 1; transform: rotateX(20deg) rotateZ(-1deg) scale(0.92) translateY(2%); }
        }
        @keyframes plan-mod-in {
          0%   { opacity: 0; transform: translateY(16px) scale(0.6); }
          70%  { opacity: 1; }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes plan-stool-in {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.4); }
          to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes plan-sheen {
          0% { transform: translateX(-130%); }
          55%, 100% { transform: translateX(130%); }
        }
        @keyframes plan-pulse {
          0%   { box-shadow: 0 0 0 0 color-mix(in srgb, var(--plan-c) 55%, transparent); }
          70%  { box-shadow: 0 0 0 7px transparent; }
          100% { box-shadow: 0 0 0 0 transparent; }
        }
        @keyframes plan-glow {
          0%, 100% { opacity: 0.35; }
          50%      { opacity: 0.85; }
        }
        @keyframes plan-drip {
          to { stroke-dashoffset: -6; }
        }
        @keyframes plan-bob {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(0.6px); }
        }

        /* perf: drop always-on loops (box-shadow / blur / stroke repaints) that
           cause scroll jank — keep the entrance + hover/highlight which feel dynamic */
        .plan-counter__top::after,
        .plan-mod--live::after,
        .plan-pulse,
        .plan-mod--live .plan-stream,
        .plan-mod--live .plan-liquid--a,
        .plan-mod--live .plan-liquid--b { animation: none !important; }

        @media (prefers-reduced-motion: reduce) {
          .plan-area,
          .plan-stool,
          .plan-mod { animation: none !important; }
        }
      `}</style>

      <div className="plan-stage">
        <div className="plan-area">
          <div className="plan-grid" />
          <div className="plan-ticks" />

          {/* furniture layer keyed to the layout → remounts + re-pops on tab switch */}
          <div className="plan-layer" key={layoutSig}>
            {/* raised bar counter island */}
            <div
              className="plan-counter"
              style={{
                top: `${cTop}%`,
                left: `${cLeft}%`,
                width: `${cW}%`,
                height: `${cH}%`,
              }}
            >
              <span className="plan-counter__side" />
              <span className="plan-counter__top" />
              <span className="plan-backbar" />
            </div>

            {/* stools around the perimeter */}
            {stools.map((s) => (
              <span
                key={s.key}
                className="plan-stool"
                style={{
                  top: `${s.y}%`,
                  left: `${s.x}%`,
                  animationDelay: `${0.25 + s.key * 0.025}s`,
                }}
              />
            ))}

            {/* equipment module cards */}
            {stations.map((s, i) => {
              const hot = hotKind === s.kind
              const live = s.kind === 'machine'
              return (
                <div
                  key={s.label + i}
                  className={`plan-mod ${hot ? 'is-hot' : ''} ${live ? 'plan-mod--live' : ''}`}
                  style={{
                    top: s.top,
                    left: s.left,
                    width: s.w,
                    height: s.h,
                    ['--plan-c' as string]: COLORS[s.kind],
                    ['--plan-delay' as string]: `${0.12 + i * 0.07}s`,
                  }}
                >
                  <span className="plan-mod__icon">
                    <KindIcon kind={s.kind} />
                  </span>
                  <span className="plan-mod__label">{s.label}</span>
                  {live && <span className="plan-pulse" aria-hidden="true" />}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
