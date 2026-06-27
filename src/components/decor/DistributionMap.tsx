/**
 * DistributionMap — a stylised nautical distribution map for Fresh Blendz.
 *
 * Shows the three regions they ship to: the U.S. Mainland, Hawaii and the
 * Caribbean. Self-contained: draws its own teal ocean gradient, a faint
 * lat/long grid, cream landmasses, animated shipping routes, pulsing location
 * pins and a compass rose. Fills its parent box (≈4:3). No props, no external
 * assets, no icon libraries.
 *
 * The whole composition is driven by THREE explicit anchor points below. Every
 * pin, route endpoint and label is derived from these, so the route arcs always
 * join pin-to-pin in one coherent coordinate system.
 */

// --- Single source of truth: region anchors (SVG user units, viewBox 1000x760)
const US = { x: 600, y: 300 } as const
const HAWAII = { x: 230, y: 560 } as const
const CARIB = { x: 760, y: 560 } as const

export function DistributionMap() {
  // Route arcs: cubic Béziers whose endpoints EQUAL the anchor coords, with
  // control points pushed out over the ocean for a great-circle feel.
  // US -> HAWAII: bow the lane down-left into open water.
  const routeHawaii =
    `M ${US.x} ${US.y} ` +
    `C ${US.x - 120} ${US.y + 230}, ${HAWAII.x + 70} ${HAWAII.y - 70}, ${HAWAII.x} ${HAWAII.y}`
  // US -> CARIB: shorter lane bowing down-right.
  const routeCarib =
    `M ${US.x} ${US.y} ` +
    `C ${US.x + 130} ${US.y + 170}, ${CARIB.x - 40} ${CARIB.y - 130}, ${CARIB.x} ${CARIB.y}`

  return (
    <div
      className="dmap-root"
      role="img"
      aria-label="Distribution map: Fresh Blendz ships from the U.S. Mainland to Hawaii and the Caribbean."
    >
      <style>{`
        .dmap-root {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: inherit;
          isolation: isolate;
          font-family: 'Space Grotesk', 'Inter', system-ui, sans-serif;
          background: #075f57;
        }
        .dmap-root .dmap-svg {
          display: block;
          width: 100%;
          height: 100%;
        }

        /* --- Lat / long grid --- */
        .dmap-root .dmap-grid line {
          stroke: rgba(255, 255, 255, 0.10);
          stroke-width: 0.8;
        }
        .dmap-root .dmap-grid .dmap-grid-major {
          stroke: rgba(255, 255, 255, 0.18);
          stroke-width: 1.1;
        }

        /* --- Landmasses --- */
        .dmap-root .dmap-land {
          fill: #fbf6ec;
          stroke: #d6c6a3;
          stroke-width: 2;
          stroke-linejoin: round;
        }

        /* --- Route arcs --- */
        .dmap-root .dmap-route { fill: none; stroke-linecap: round; }
        .dmap-root .dmap-route-glow {
          stroke: rgba(232, 160, 0, 0.22);
          stroke-width: 9;
        }
        .dmap-root .dmap-route-dash {
          stroke-width: 3;
          stroke-dasharray: 10 12;
          animation: dmap-dash 1.5s linear infinite;
        }
        .dmap-root .dmap-route-hawaii { stroke: #fbf6ec; }
        .dmap-root .dmap-route-carib { stroke: #f4d020; }
        @keyframes dmap-dash { to { stroke-dashoffset: -44; } }

        /* --- Riding ship glyphs --- */
        .dmap-root .dmap-ship { fill: #ffffff; stroke: #075f57; stroke-width: 1.4; }

        /* --- Pins --- */
        .dmap-root .dmap-pin-ring {
          fill: none;
          stroke-width: 3;
          transform-box: fill-box;
          transform-origin: center;
          opacity: 0;
        }
        .dmap-root .dmap-pin-us .dmap-pin-ring { stroke: #e23a68; animation: dmap-pulse 2.8s ease-out infinite; }
        .dmap-root .dmap-pin-hawaii .dmap-pin-ring { stroke: #ef5f1a; animation: dmap-pulse 2.8s ease-out infinite 0.6s; }
        .dmap-root .dmap-pin-carib .dmap-pin-ring { stroke: #6f3bc2; animation: dmap-pulse 2.8s ease-out infinite 1.2s; }
        @keyframes dmap-pulse {
          0%   { transform: scale(0.4); opacity: 0.85; }
          70%  { transform: scale(1.9); opacity: 0; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        .dmap-root .dmap-pin-body { stroke: #ffffff; stroke-width: 2; }
        .dmap-root .dmap-pin-us .dmap-pin-body { fill: #e23a68; }
        .dmap-root .dmap-pin-hawaii .dmap-pin-body { fill: #ef5f1a; }
        .dmap-root .dmap-pin-carib .dmap-pin-body { fill: #6f3bc2; }
        .dmap-root .dmap-pin-core { fill: #ffffff; }

        /* --- Labels --- */
        .dmap-root .dmap-label {
          fill: #ffffff;
          font-family: 'Space Grotesk', 'Inter', system-ui, sans-serif;
          font-size: 19px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          paint-order: stroke;
          stroke: rgba(7, 56, 51, 0.65);
          stroke-width: 5px;
          stroke-linejoin: round;
        }

        /* --- Compass --- */
        .dmap-root .dmap-compass-needle {
          transform-box: fill-box;
          transform-origin: center;
          animation: dmap-compass 16s ease-in-out infinite;
        }
        @keyframes dmap-compass {
          0%, 100% { transform: rotate(-5deg); }
          50%      { transform: rotate(5deg); }
        }

        /* --- Corner tag --- */
        .dmap-root .dmap-tag {
          position: absolute;
          left: 16px;
          bottom: 14px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(7, 56, 51, 0.46);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.22);
          color: #fbf6ec;
          font-family: 'Space Grotesk', 'Inter', system-ui, sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          white-space: nowrap;
          pointer-events: none;
        }
        .dmap-root .dmap-tag-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #e8a000;
          box-shadow: 0 0 0 3px rgba(232, 160, 0, 0.28);
        }

        @media (prefers-reduced-motion: reduce) {
          .dmap-root .dmap-route-dash,
          .dmap-root .dmap-pin-ring,
          .dmap-root .dmap-compass-needle { animation: none; }
          .dmap-root .dmap-pin-ring { opacity: 0; }
        }
      `}</style>

      <svg
        className="dmap-svg"
        viewBox="0 0 1000 760"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="dmap-ocean" x1="0" y1="0" x2="0.35" y2="1">
            <stop offset="0" stopColor="#0c9a8b" />
            <stop offset="0.55" stopColor="#0a8377" />
            <stop offset="1" stopColor="#075f57" />
          </linearGradient>
          <radialGradient id="dmap-glow" cx="0.4" cy="0.28" r="0.85">
            <stop offset="0" stopColor="rgba(255,255,255,0.16)" />
            <stop offset="1" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
          <filter id="dmap-land-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#053f3a" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Ocean */}
        <rect x="0" y="0" width="1000" height="760" fill="url(#dmap-ocean)" />
        <rect x="0" y="0" width="1000" height="760" fill="url(#dmap-glow)" />

        {/* Lat / long grid */}
        <g className="dmap-grid">
          <line x1="0" y1="95" x2="1000" y2="95" />
          <line className="dmap-grid-major" x1="0" y1="190" x2="1000" y2="190" />
          <line x1="0" y1="285" x2="1000" y2="285" />
          <line className="dmap-grid-major" x1="0" y1="380" x2="1000" y2="380" />
          <line x1="0" y1="475" x2="1000" y2="475" />
          <line className="dmap-grid-major" x1="0" y1="570" x2="1000" y2="570" />
          <line x1="0" y1="665" x2="1000" y2="665" />
          <line x1="125" y1="0" x2="125" y2="760" />
          <line className="dmap-grid-major" x1="250" y1="0" x2="250" y2="760" />
          <line x1="375" y1="0" x2="375" y2="760" />
          <line className="dmap-grid-major" x1="500" y1="0" x2="500" y2="760" />
          <line x1="625" y1="0" x2="625" y2="760" />
          <line className="dmap-grid-major" x1="750" y1="0" x2="750" y2="760" />
          <line x1="875" y1="0" x2="875" y2="760" />
        </g>

        {/* --- Landmasses (drawn UNDER the anchors) --- */}
        <g filter="url(#dmap-land-shadow)">
          {/* U.S. Mainland — broad blob under US, with a Florida-ish nub
              pointing down-right toward the Caribbean. */}
          <path
            className="dmap-land"
            d="M 470 180
               C 540 158, 660 160, 740 196
               C 808 226, 838 268, 820 312
               C 812 332, 786 340, 770 356
               C 758 368, 762 388, 752 402
               C 742 416, 760 432, 768 452
               C 778 478, 770 500, 752 504
               C 736 508, 728 488, 724 470
               C 718 444, 712 424, 696 414
               C 672 398, 636 404, 604 392
               C 560 376, 548 348, 516 332
               C 482 314, 446 320, 430 296
               C 414 272, 432 244, 444 224
               C 452 210, 456 188, 470 180 Z"
          />

          {/* Hawaii — small diagonal island chain centred on HAWAII. */}
          <g className="dmap-land">
            <ellipse cx={HAWAII.x - 36} cy={HAWAII.y - 26} rx="14" ry="9" transform={`rotate(-32 ${HAWAII.x - 36} ${HAWAII.y - 26})`} />
            <ellipse cx={HAWAII.x - 8} cy={HAWAII.y - 6} rx="20" ry="13" transform={`rotate(-32 ${HAWAII.x - 8} ${HAWAII.y - 6})`} />
            <ellipse cx={HAWAII.x + 24} cy={HAWAII.y + 18} rx="12" ry="8" transform={`rotate(-32 ${HAWAII.x + 24} ${HAWAII.y + 18})`} />
            <ellipse cx={HAWAII.x + 46} cy={HAWAII.y + 36} rx="8" ry="6" transform={`rotate(-32 ${HAWAII.x + 46} ${HAWAII.y + 36})`} />
            <ellipse cx={HAWAII.x - 58} cy={HAWAII.y - 44} rx="8" ry="6" transform={`rotate(-32 ${HAWAII.x - 58} ${HAWAII.y - 44})`} />
          </g>

          {/* Caribbean — arc of small islands centred on CARIB. */}
          <g className="dmap-land">
            <ellipse cx={CARIB.x - 60} cy={CARIB.y - 30} rx="22" ry="11" transform={`rotate(14 ${CARIB.x - 60} ${CARIB.y - 30})`} />
            <ellipse cx={CARIB.x - 18} cy={CARIB.y - 8} rx="14" ry="9" transform={`rotate(26 ${CARIB.x - 18} ${CARIB.y - 8})`} />
            <ellipse cx={CARIB.x + 16} cy={CARIB.y + 14} rx="10" ry="8" transform={`rotate(44 ${CARIB.x + 16} ${CARIB.y + 14})`} />
            <ellipse cx={CARIB.x + 38} cy={CARIB.y + 42} rx="8" ry="7" transform={`rotate(60 ${CARIB.x + 38} ${CARIB.y + 42})`} />
            <ellipse cx={CARIB.x + 50} cy={CARIB.y + 72} rx="7" ry="7" />
            <ellipse cx={CARIB.x - 40} cy={CARIB.y + 24} rx="9" ry="7" transform={`rotate(22 ${CARIB.x - 40} ${CARIB.y + 24})`} />
          </g>
        </g>

        {/* --- Shipping routes (endpoints EQUAL the anchors) --- */}
        <path className="dmap-route dmap-route-glow" d={routeHawaii} />
        <path className="dmap-route dmap-route-dash dmap-route-hawaii" d={routeHawaii} />
        <path className="dmap-route dmap-route-glow" d={routeCarib} />
        <path className="dmap-route dmap-route-dash dmap-route-carib" d={routeCarib} />

        {/* Ship glyphs riding partway along each route (static positions
            chosen to sit on the bowed arcs). */}
        <g
          className="dmap-ship"
          transform={`translate(${(US.x + HAWAII.x) / 2 - 30} ${(US.y + HAWAII.y) / 2 + 70}) rotate(-34)`}
        >
          <path d="M -13 -2 L 13 -2 L 8 9 L -8 9 Z M 0 -2 L 0 -16 L 11 -8 Z" />
        </g>
        <g
          className="dmap-ship"
          transform={`translate(${(US.x + CARIB.x) / 2 + 24} ${(US.y + CARIB.y) / 2 + 40}) rotate(40)`}
        >
          <path d="M -13 -2 L 13 -2 L 8 9 L -8 9 Z M 0 -2 L 0 -16 L 11 -8 Z" />
        </g>

        {/* --- Pins (tip touches the anchor) + labels --- */}
        <Pin region="us" anchor={US} label="U.S. Mainland" labelDx={0} labelDy={-58} anchorMode="middle" />
        <Pin region="hawaii" anchor={HAWAII} label="Hawaii" labelDx={0} labelDy={-58} anchorMode="middle" />
        <Pin region="carib" anchor={CARIB} label="Caribbean" labelDx={0} labelDy={-58} anchorMode="middle" />

        {/* --- Compass rose (top-right) --- */}
        <g transform="translate(912 96)">
          <circle r="40" fill="rgba(7,56,51,0.4)" stroke="rgba(255,255,255,0.42)" strokeWidth="1.5" />
          <g className="dmap-compass-needle">
            <path d="M 0 -30 L 8 0 L 0 8 L -8 0 Z" fill="#ef5f1a" />
            <path d="M 0 30 L 8 0 L 0 -8 L -8 0 Z" fill="#fbf6ec" />
          </g>
          <text x="0" y="-46" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="700" letterSpacing="0.1em">N</text>
        </g>
      </svg>

      <span className="dmap-tag">
        <span className="dmap-tag-dot" />
        Land to Water · International
      </span>
    </div>
  )
}

type Region = 'us' | 'hawaii' | 'carib'

interface PinProps {
  region: Region
  anchor: { x: number; y: number }
  label: string
  labelDx: number
  labelDy: number
  anchorMode: 'start' | 'middle' | 'end'
}

/**
 * A teardrop location pin whose TIP sits exactly on `anchor`, plus a pulsing
 * ring and an uppercase label offset from the tip.
 */
function Pin({ region, anchor, label, labelDx, labelDy, anchorMode }: PinProps) {
  // Teardrop: tip at (0,0), bulb above it. The pin <g> is translated so the
  // tip lands precisely on the anchor.
  const teardrop =
    'M 0 0 ' +
    'C -10 -18, -22 -26, -22 -42 ' +
    'A 22 22 0 1 1 22 -42 ' +
    'C 22 -26, 10 -18, 0 0 Z'
  return (
    <g className={`dmap-pin dmap-pin-${region}`} transform={`translate(${anchor.x} ${anchor.y})`}>
      <circle className="dmap-pin-ring" cx="0" cy="-42" r="20" />
      <path className="dmap-pin-body" d={teardrop} />
      <circle className="dmap-pin-core" cx="0" cy="-42" r="8" />
      <text className="dmap-label" x={labelDx} y={labelDy} textAnchor={anchorMode}>
        {label}
      </text>
    </g>
  )
}
