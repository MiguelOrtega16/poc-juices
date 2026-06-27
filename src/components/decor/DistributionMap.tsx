/**
 * DistributionMap — an accurate nautical distribution map for Fresh Blendz.
 *
 * The landmasses are REAL geography: Natural Earth country outlines (1:50m),
 * Mercator-projected and embedded as SVG paths by scripts/gen-map.mjs. The
 * lower-48 U.S. and the Caribbean share one projection, so they sit in their
 * true relative positions; Hawaii is drawn as a separate inset (the standard
 * U.S.-map convention, since true-scale Hawaii would be a far-left speck).
 *
 * Everything else — ocean, graticule, shipping lanes, pins, compass — is drawn
 * on top of that real basemap. Self-contained: no props, no runtime map deps.
 */
import {
  VIEW,
  INSET,
  US_PATH,
  CARIB_PATHS,
  HAWAII_PATH,
  US_HUB,
  CARIB_PIN,
  HAWAII_PIN,
  GRID_LAT,
  GRID_LON,
} from './mapData'

type P = { x: number; y: number }

// --- Cubic-bézier helpers: position + heading at parameter t ----------------
function cubicAt(t: number, p0: P, c1: P, c2: P, p3: P): P {
  const u = 1 - t
  return {
    x: u * u * u * p0.x + 3 * u * u * t * c1.x + 3 * u * t * t * c2.x + t * t * t * p3.x,
    y: u * u * u * p0.y + 3 * u * u * t * c1.y + 3 * u * t * t * c2.y + t * t * t * p3.y,
  }
}
function cubicAngle(t: number, p0: P, c1: P, c2: P, p3: P): number {
  const u = 1 - t
  const dx = 3 * u * u * (c1.x - p0.x) + 6 * u * t * (c2.x - c1.x) + 3 * t * t * (p3.x - c2.x)
  const dy = 3 * u * u * (c1.y - p0.y) + 6 * u * t * (c2.y - c1.y) + 3 * t * t * (p3.y - c2.y)
  return (Math.atan2(dy, dx) * 180) / Math.PI
}
const dPath = (p0: P, c1: P, c2: P, p3: P) =>
  `M ${p0.x} ${p0.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${p3.x} ${p3.y}`

// Shipping lanes (origin = central mainland, endpoints = the island pins).
const caribCtrl = {
  p0: US_HUB,
  c1: { x: US_HUB.x + 70, y: US_HUB.y + 150 },
  c2: { x: CARIB_PIN.x - 20, y: CARIB_PIN.y - 150 },
  p3: CARIB_PIN,
}
const hawaiiCtrl = {
  p0: US_HUB,
  c1: { x: US_HUB.x - 150, y: US_HUB.y + 170 },
  c2: { x: HAWAII_PIN.x + 130, y: HAWAII_PIN.y - 120 },
  p3: HAWAII_PIN,
}
const routeCarib = dPath(caribCtrl.p0, caribCtrl.c1, caribCtrl.c2, caribCtrl.p3)
const routeHawaii = dPath(hawaiiCtrl.p0, hawaiiCtrl.c1, hawaiiCtrl.c2, hawaiiCtrl.p3)
const shipHawaii = cubicAt(0.52, hawaiiCtrl.p0, hawaiiCtrl.c1, hawaiiCtrl.c2, hawaiiCtrl.p3)
const shipHawaiiA = cubicAngle(0.52, hawaiiCtrl.p0, hawaiiCtrl.c1, hawaiiCtrl.c2, hawaiiCtrl.p3)

// Graticule: real lines from the projection + midpoints for denser texture.
const densify = (vals: number[]) => {
  const out: number[] = []
  for (let i = 0; i < vals.length; i++) {
    out.push(vals[i])
    if (i < vals.length - 1) out.push((vals[i] + vals[i + 1]) / 2)
  }
  return out
}
const latLines = densify(GRID_LAT)
const lonLines = densify(GRID_LON)

// Degree labels (kept clear of the Hawaii inset in the bottom-left).
const latLabels: { y: number; t: string }[] = [
  { y: GRID_LAT[1], t: '40°N' },
  { y: GRID_LAT[2], t: '30°N' },
  { y: GRID_LAT[3], t: '20°N' },
]
const lonLabels: { x: number; t: string }[] = [
  { x: GRID_LON[1], t: '100°W' },
  { x: GRID_LON[2], t: '80°W' },
  { x: GRID_LON[3], t: '60°W' },
]

export function DistributionMap() {
  return (
    <div
      className="dmap-root"
      role="img"
      aria-label="Distribution map: Fresh Blendz ships from the U.S. mainland to Hawaii and the Caribbean, by land and by sea."
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
        .dmap-root .dmap-svg { display: block; width: 100%; height: 100%; }

        /* Graticule */
        .dmap-root .dmap-grid line { stroke: rgba(255,255,255,0.09); stroke-width: 0.8; }
        .dmap-root .dmap-grid .dmap-grid-major { stroke: rgba(255,255,255,0.15); stroke-width: 1.1; }
        .dmap-root .dmap-deg {
          fill: rgba(255,255,255,0.5);
          font-size: 12px; font-weight: 600; letter-spacing: 0.1em;
        }

        /* Landmasses */
        .dmap-root .dmap-land {
          fill: #fbf6ec;
          stroke: #cbb98f;
          stroke-width: 1.1;
          stroke-linejoin: round;
        }
        .dmap-root .dmap-land-carib { stroke-width: 0.8; }

        /* Hawaii inset frame */
        .dmap-root .dmap-inset-frame {
          fill: rgba(5,52,47,0.55);
          stroke: rgba(255,255,255,0.34);
          stroke-width: 1.4;
        }
        .dmap-root .dmap-inset-label {
          fill: #fbf6ec; font-size: 13px; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase;
        }
        .dmap-root .dmap-inset-sub {
          fill: rgba(255,255,255,0.5); font-size: 9px; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
        }

        /* Shipping lanes */
        .dmap-root .dmap-route { fill: none; stroke-linecap: round; }
        .dmap-root .dmap-route-glow { stroke: rgba(232,160,0,0.20); stroke-width: 9; }
        .dmap-root .dmap-route-dash {
          stroke-width: 3; stroke-dasharray: 10 12;
          animation: dmap-dash 1.5s linear infinite;
        }
        .dmap-root .dmap-route-hawaii { stroke: #fbf6ec; }
        .dmap-root .dmap-route-carib { stroke: #f4d020; }
        @keyframes dmap-dash { to { stroke-dashoffset: -44; } }

        .dmap-root .dmap-ship { fill: #ffffff; stroke: #075f57; stroke-width: 1.4; }

        /* Pins */
        .dmap-root .dmap-pin-ring {
          fill: none; stroke-width: 3;
          transform-box: fill-box; transform-origin: center; opacity: 0;
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

        .dmap-root .dmap-label {
          fill: #ffffff;
          font-size: 18px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase;
          paint-order: stroke; stroke: rgba(7,56,51,0.7);
          stroke-width: 5px; stroke-linejoin: round;
        }

        /* Compass */
        .dmap-root .dmap-compass-needle {
          transform-box: fill-box; transform-origin: center;
          animation: dmap-compass 16s ease-in-out infinite;
        }
        @keyframes dmap-compass {
          0%, 100% { transform: rotate(-5deg); }
          50%      { transform: rotate(5deg); }
        }

        /* Corner tag */
        .dmap-root .dmap-tag {
          position: absolute; right: 16px; bottom: 14px;
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 12px; border-radius: 999px;
          background: rgba(7,56,51,0.5);
          backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
          border: 1px solid rgba(255,255,255,0.22);
          color: #fbf6ec; font-size: 10px; font-weight: 600;
          letter-spacing: 0.16em; text-transform: uppercase;
          white-space: nowrap; pointer-events: none;
        }
        .dmap-root .dmap-tag-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #e8a000; box-shadow: 0 0 0 3px rgba(232,160,0,0.28);
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
        viewBox={`0 0 ${VIEW.w} ${VIEW.h}`}
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="dmap-ocean" x1="0" y1="0" x2="0.35" y2="1">
            <stop offset="0" stopColor="#0c9a8b" />
            <stop offset="0.55" stopColor="#0a8377" />
            <stop offset="1" stopColor="#075f57" />
          </linearGradient>
          <radialGradient id="dmap-glow" cx="0.42" cy="0.26" r="0.85">
            <stop offset="0" stopColor="rgba(255,255,255,0.16)" />
            <stop offset="1" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
          <filter id="dmap-land-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#053f3a" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* Ocean */}
        <rect x="0" y="0" width={VIEW.w} height={VIEW.h} fill="url(#dmap-ocean)" />
        <rect x="0" y="0" width={VIEW.w} height={VIEW.h} fill="url(#dmap-glow)" />

        {/* Graticule */}
        <g className="dmap-grid">
          {latLines.map((y, i) => (
            <line key={`la${i}`} className={i % 2 ? '' : 'dmap-grid-major'} x1="0" y1={y} x2={VIEW.w} y2={y} />
          ))}
          {lonLines.map((x, i) => (
            <line key={`lo${i}`} className={i % 2 ? '' : 'dmap-grid-major'} x1={x} y1="0" x2={x} y2={VIEW.h} />
          ))}
        </g>
        <g>
          {latLabels.map((l) => (
            <text key={l.t} className="dmap-deg" x="14" y={l.y - 6}>{l.t}</text>
          ))}
          {lonLabels.map((l) => (
            <text key={l.t} className="dmap-deg" x={l.x + 6} y={VIEW.h - 16}>{l.t}</text>
          ))}
        </g>

        {/* Shipping lanes — drawn FIRST, under the landmasses, so only their
            over-ocean stretch shows and each reads as departing the coast. */}
        <path className="dmap-route dmap-route-glow" d={routeCarib} />
        <path className="dmap-route dmap-route-dash dmap-route-carib" d={routeCarib} />
        <path className="dmap-route dmap-route-glow" d={routeHawaii} />
        <path className="dmap-route dmap-route-dash dmap-route-hawaii" d={routeHawaii} />

        {/* Ships at sea — one on the Pacific lane (placed on the curve), one
            crossing the open Atlantic (decorative, well clear of any land). */}
        <g className="dmap-ship" transform={`translate(${shipHawaii.x.toFixed(1)} ${shipHawaii.y.toFixed(1)}) rotate(${shipHawaiiA.toFixed(1)})`}>
          <path d="M -13 -2 L 13 -2 L 8 9 L -8 9 Z M 0 -2 L 0 -16 L 11 -8 Z" />
        </g>
        <g className="dmap-ship" transform="translate(872 352) rotate(212)">
          <path d="M -13 -2 L 13 -2 L 8 9 L -8 9 Z M 0 -2 L 0 -16 L 11 -8 Z" />
        </g>

        {/* Real landmasses (cover the inland part of the lanes) */}
        <g filter="url(#dmap-land-shadow)">
          <path className="dmap-land" d={US_PATH} />
          {CARIB_PATHS.map((d, i) => (
            <path key={`c${i}`} className="dmap-land dmap-land-carib" d={d} />
          ))}
        </g>

        {/* Hawaii inset (standard U.S.-map convention) */}
        <g filter="url(#dmap-land-shadow)">
          <rect className="dmap-inset-frame" x={INSET.x} y={INSET.y} width={INSET.w} height={INSET.h} rx="10" />
        </g>
        <path className="dmap-land" d={HAWAII_PATH} />
        <text className="dmap-inset-label" x={INSET.x + 12} y={INSET.y + 20}>Hawaii</text>
        <text className="dmap-inset-sub" x={INSET.x + INSET.w - 12} y={INSET.y + 20} textAnchor="end">Not to scale</text>

        {/* Pins + region labels */}
        <Pin region="us" anchor={US_HUB} label="U.S. Mainland" labelDy={-56} />
        <Pin region="carib" anchor={CARIB_PIN} label="Caribbean" labelDy={-56} />
        <Pin region="hawaii" anchor={HAWAII_PIN} scale={0.55} />

        {/* Compass rose */}
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
  anchor: P
  label?: string
  labelDy?: number
  scale?: number
}

/** Teardrop pin whose tip sits exactly on `anchor`, with a pulsing ring. */
function Pin({ region, anchor, label, labelDy = -56, scale = 1 }: PinProps) {
  const teardrop =
    'M 0 0 C -10 -18, -22 -26, -22 -42 A 22 22 0 1 1 22 -42 C 22 -26, 10 -18, 0 0 Z'
  return (
    <g className={`dmap-pin dmap-pin-${region}`} transform={`translate(${anchor.x} ${anchor.y}) scale(${scale})`}>
      <circle className="dmap-pin-ring" cx="0" cy="-42" r="20" />
      <path className="dmap-pin-body" d={teardrop} />
      <circle className="dmap-pin-core" cx="0" cy="-42" r="8" />
      {label && (
        <text className="dmap-label" x="0" y={labelDy} textAnchor="middle">
          {label}
        </text>
      )}
    </g>
  )
}
