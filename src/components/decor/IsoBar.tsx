/**
 * IsoBar — an isometric (axonometric) bar layout, in the spirit of an
 * architectural CAD render. Draws a faceted bar counter with equipment
 * modules sitting on top (drink machines, coolers, cabinets, mix rails,
 * ice bins), each labelled with its real station name.
 *
 * Default look is neutral grey (like the render); hovering a station type
 * (via `hotKind`) lights those modules up in their brand colour and dims the
 * rest. Pure SVG — no 3D CSS transforms, so it stays cheap to paint.
 */

export type IsoKind = 'machine' | 'mix' | 'cold' | 'batch'
export type IsoVariant = 'machine' | 'cabinet' | 'cooler' | 'rail' | 'icebin'

export interface IsoModule {
  id: string
  label: string
  kind: IsoKind
  variant: IsoVariant
  gx: number
  gy: number
  w: number
  d: number
  h: number
  /** product colour shown in barrels / jugs (frozen-drink slush, mix, etc.) */
  tint?: string
}

interface IsoBarProps {
  modules: IsoModule[]
  counter: { w: number; d: number; h: number }
  hotKind: IsoKind | null
}

// --- Isometric projection (2:1) ---------------------------------------------
const HW = 30
const HH = 15
const ZU = 15
type Pt = { x: number; y: number }
const proj = (gx: number, gy: number, gz: number): Pt => ({
  x: (gx - gy) * HW,
  y: (gx + gy) * HH - gz * ZU,
})
const r1 = (n: number) => Math.round(n * 10) / 10
const poly = (pts: Pt[]) => pts.map((p) => `${r1(p.x)},${r1(p.y)}`).join(' ')

// --- Palette ----------------------------------------------------------------
const GREY = {
  counter: { top: '#ece8e1', right: '#d6d1c8', left: '#beb8ad' },
  equip: { top: '#e0dbd3', right: '#c8c2b8', left: '#aca59b' },
}
const BRAND: Record<IsoKind, string> = {
  machine: '#0c9a8b',
  mix: '#ef5f1a',
  cold: '#6f3bc2',
  batch: '#e23a68',
}
// product colours shown in barrels / jugs, keyed by station name
const FLAVOR: Record<string, string> = {
  'Cha Cha': '#e0466e',
  'Mango Tango': '#f0962a',
  Strawberry: '#e85a86',
  'Bomb Pop': '#3f73d8',
}
function darken(hex: string, f: number): string {
  const n = parseInt(hex.slice(1), 16)
  return `rgb(${Math.round(((n >> 16) & 255) * f)},${Math.round(((n >> 8) & 255) * f)},${Math.round((n & 255) * f)})`
}
const shade = (kind: IsoKind) => ({ top: BRAND[kind], right: darken(BRAND[kind], 0.82), left: darken(BRAND[kind], 0.64) })
// blend a colour toward white (t = 0 keeps it, 1 = white) — for frosty product
function blendWhite(hex: string, t: number): string {
  const n = parseInt(hex.slice(1), 16)
  const cr = (n >> 16) & 255, cg = (n >> 8) & 255, cb = n & 255
  const mix = (c: number) => Math.round(c + (255 - c) * t)
  return `rgb(${mix(cr)},${mix(cg)},${mix(cb)})`
}

// --- Face / detail geometry -------------------------------------------------
function faces(gx: number, gy: number, w: number, d: number, zb: number, h: number) {
  const z = zb + h
  const tA = proj(gx, gy, z), tB = proj(gx + w, gy, z), tC = proj(gx + w, gy + d, z), tD = proj(gx, gy + d, z)
  const bB = proj(gx + w, gy, zb), bC = proj(gx + w, gy + d, zb), bD = proj(gx, gy + d, zb)
  return {
    top: [tA, tB, tC, tD],
    right: [tB, tC, bC, bB], // +x face
    left: [tD, tC, bC, bD], // +y (front) face
    corners: [tA, tB, tC, tD, bB, bC, bD, proj(gx, gy, zb)],
  }
}
// flat rect lying on a horizontal plane at height z
const quadTop = (x0: number, y0: number, wx: number, dy: number, z: number) =>
  [proj(x0, y0, z), proj(x0 + wx, y0, z), proj(x0 + wx, y0 + dy, z), proj(x0, y0 + dy, z)]
// rect on the front (+y) plane at y = yf, x in [x0,x1], z in [z0,z1]
const quadFront = (x0: number, x1: number, z0: number, z1: number, yf: number) =>
  [proj(x0, yf, z1), proj(x1, yf, z1), proj(x1, yf, z0), proj(x0, yf, z0)]

export function IsoBar({ modules, counter, hotKind }: IsoBarProps) {
  // depth sort (painter's algorithm): farther + lower drawn first
  const ordered = [...modules].sort((a, b) => a.gx + a.gy + a.h * 0.001 - (b.gx + b.gy + b.h * 0.001))

  // collect every corner (+ label headroom) to auto-fit the scene
  const all: Pt[] = []
  const cF = faces(0, 0, counter.w, counter.d, 0, counter.h)
  all.push(...cF.corners)
  for (const m of modules) all.push(...faces(m.gx, m.gy, m.w, m.d, counter.h, m.h).corners)
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
  for (const p of all) { if (p.x < minX) minX = p.x; if (p.x > maxX) maxX = p.x; if (p.y < minY) minY = p.y; if (p.y > maxY) maxY = p.y }
  // pad: extra headroom on top for floating labels
  minX -= 70; maxX += 70; minY -= 78; maxY += 30
  const VW = 1180, VH = 760
  const s = Math.min(VW / (maxX - minX), VH / (maxY - minY))
  const tx = (VW - (maxX + minX) * s) / 2
  const ty = (VH - (maxY + minY) * s) / 2
  const fit = `translate(${r1(tx)} ${r1(ty)}) scale(${r1(s)})`

  const cz = counter.h // equipment base elevation

  function renderModule(m: IsoModule, i: number) {
    const hot = hotKind === m.kind
    const dim = hotKind !== null && !hot
    const fl = hot ? shade(m.kind) : GREY.equip
    const f = faces(m.gx, m.gy, m.w, m.d, cz, m.h)
    const yf = m.gy + m.d
    const detailFill = hot ? 'rgba(255,255,255,0.30)' : 'rgba(26,18,10,0.16)'
    const dark = hot ? 'rgba(0,0,0,0.20)' : 'rgba(26,18,10,0.28)'
    const metal = hot ? 'rgba(255,255,255,0.34)' : '#c9c4ba'
    const tint = m.tint ?? FLAVOR[m.label] ?? (m.variant === 'rail' ? '#7fb04a' : '#cdd3da')
    const tc = proj(m.gx + m.w / 2, m.gy + m.d / 2, cz + m.h) // top centre
    const top = cz + m.h

    const details: JSX.Element[] = []
    if (m.variant === 'machine') {
      // raised compressor housing on top
      const hf = faces(m.gx + 0.2, m.gy + 0.24, m.w - 0.4, m.d - 0.48, top, 0.45)
      details.push(<polygon key="hl" points={poly(hf.left)} fill={hot ? darken(BRAND[m.kind], 0.6) : '#a39c92'} />)
      details.push(<polygon key="hr" points={poly(hf.right)} fill={hot ? darken(BRAND[m.kind], 0.74) : '#b6b0a6'} />)
      details.push(<polygon key="ht" points={poly(hf.top)} fill={hot ? darken(BRAND[m.kind], 0.92) : '#d0cabf'} stroke="rgba(26,18,10,0.12)" strokeWidth={0.4} />)
      // two frozen-product barrels on the front, with sheen + a dispense valve under each
      const bw = (m.w - 0.56) / 2 - 0.1
      for (let k = 0; k < 2; k++) {
        const x0 = m.gx + 0.3 + k * (bw + 0.26)
        const xc = x0 + bw / 2
        details.push(<polygon key={`bw${k}`} points={poly(quadFront(x0, x0 + bw, cz + m.h * 0.5, cz + m.h * 0.86, yf))} fill={blendWhite(tint, 0.4)} stroke="rgba(26,18,10,0.24)" strokeWidth={0.5} />)
        details.push(<polygon key={`bs${k}`} points={poly(quadFront(x0 + 0.05, x0 + bw * 0.42, cz + m.h * 0.53, cz + m.h * 0.83, yf))} fill="rgba(255,255,255,0.42)" />)
        details.push(<polygon key={`bv${k}`} points={poly(quadFront(xc - 0.06, xc + 0.06, cz + 0.24, cz + 0.52, yf))} fill={dark} />)
      }
      // stainless drip tray on the counter, just in front of the machine
      details.push(<polygon key="tray" points={poly(quadTop(m.gx + 0.32, yf, m.w - 0.64, 0.24, cz + 0.1))} fill={metal} stroke="rgba(26,18,10,0.2)" strokeWidth={0.4} />)
    } else if (m.variant === 'icebin') {
      // open insulated bins: dark cavity + recessed ice surface with a facet
      const cw = (m.w - 0.4) / 4
      for (let k = 0; k < 4; k++) {
        const x0 = m.gx + 0.2 + k * cw
        details.push(<polygon key={`co${k}`} points={poly(quadTop(x0 + 0.07, m.gy + 0.24, cw - 0.18, m.d - 0.48, top))} fill={hot ? 'rgba(0,0,0,0.24)' : 'rgba(26,18,10,0.34)'} />)
        details.push(<polygon key={`ci${k}`} points={poly(quadTop(x0 + 0.15, m.gy + 0.32, cw - 0.34, m.d - 0.64, top - 0.3))} fill={hot ? '#eafaff' : '#dcedf3'} />)
        details.push(<polygon key={`cf${k}`} points={poly(quadTop(x0 + 0.22, m.gy + 0.38, (cw - 0.34) * 0.36, (m.d - 0.64) * 0.42, top - 0.29))} fill="rgba(255,255,255,0.72)" />)
      }
    } else if (m.variant === 'rail') {
      // mix station: dispenser jugs on the rail, each with a product window + spigot
      const slot = (m.w - 0.5) / 3
      for (let k = 0; k < 3; k++) {
        const jx = m.gx + 0.25 + k * slot
        const jw = slot - 0.24
        const jy = m.gy + m.d * 0.22
        const jd = m.d * 0.56
        const jh = 1.15
        const jf = faces(jx, jy, jw, jd, top, jh)
        const jyf = jy + jd
        details.push(<polygon key={`jl${k}`} points={poly(jf.left)} fill={hot ? darken(BRAND[m.kind], 0.7) : '#b1aa9f'} />)
        details.push(<polygon key={`jr${k}`} points={poly(jf.right)} fill={hot ? darken(BRAND[m.kind], 0.82) : '#c1bbb0'} />)
        details.push(<polygon key={`jt${k}`} points={poly(jf.top)} fill={hot ? '#fff' : '#d9d3c9'} stroke="rgba(26,18,10,0.12)" strokeWidth={0.4} />)
        details.push(<polygon key={`jw${k}`} points={poly(quadFront(jx + 0.07, jx + jw - 0.07, top + 0.2, top + jh - 0.2, jyf))} fill={blendWhite(tint, 0.26)} stroke="rgba(26,18,10,0.18)" strokeWidth={0.4} />)
        const sc = jx + jw / 2
        details.push(<polygon key={`js${k}`} points={poly(quadFront(sc - 0.05, sc + 0.05, top - 0.02, top + 0.22, jyf))} fill={dark} />)
      }
    } else if (m.variant === 'cooler') {
      // upright cooler: glass door, shelves and a few bottles
      const gx0 = m.gx + 0.28, gx1 = m.gx + m.w - 0.28
      details.push(<polygon key="glass" points={poly(quadFront(gx0, gx1, cz + 0.3, cz + m.h - 0.45, yf))} fill={hot ? 'rgba(255,255,255,0.3)' : 'rgba(120,170,180,0.4)'} stroke="rgba(26,18,10,0.18)" strokeWidth={0.6} />)
      const bottleCols = ['#c79a3e', '#9bbf4a', '#c79a3e', '#b0673a']
      for (let k = 0; k < 4; k++) {
        const bx = gx0 + 0.22 + k * ((gx1 - gx0 - 0.44) / 3.2)
        details.push(<polygon key={`bo${k}`} points={poly(quadFront(bx, bx + 0.17, cz + 0.8, cz + m.h - 0.75, yf))} fill={bottleCols[k]} opacity={0.5} />)
      }
      for (let k = 0; k < 3; k++) {
        const z = cz + 0.72 + k * ((m.h - 1.4) / 3)
        details.push(<polygon key={`sh${k}`} points={poly(quadFront(gx0, gx1, z, z + 0.07, yf))} fill="rgba(255,255,255,0.3)" />)
      }
    } else if (m.variant === 'cabinet') {
      // two doors + handles
      const mid = m.gx + m.w / 2
      details.push(<polygon key="d0" points={poly(quadFront(m.gx + 0.22, mid - 0.07, cz + 0.25, cz + m.h - 0.3, yf))} fill="none" stroke={detailFill} strokeWidth={1} />)
      details.push(<polygon key="d1" points={poly(quadFront(mid + 0.07, m.gx + m.w - 0.22, cz + 0.25, cz + m.h - 0.3, yf))} fill="none" stroke={detailFill} strokeWidth={1} />)
      details.push(<polygon key="hh0" points={poly(quadFront(mid - 0.22, mid - 0.13, cz + m.h * 0.42, cz + m.h * 0.6, yf))} fill={detailFill} />)
      details.push(<polygon key="hh1" points={poly(quadFront(mid + 0.13, mid + 0.22, cz + m.h * 0.42, cz + m.h * 0.6, yf))} fill={detailFill} />)
    }

    // label: flavour names sit on the machine; zone names float above
    const onMachine = m.variant === 'machine'
    const label = onMachine ? (
      (() => {
        const fc = proj(m.gx + m.w / 2, yf, cz + m.h * 0.28)
        return (
          <text className="iso-mlabel" x={r1(fc.x)} y={r1(fc.y)} textAnchor="middle" fill={hot ? '#fff' : '#3c372f'}>
            {m.label}
          </text>
        )
      })()
    ) : (
      <Chip x={tc.x} y={tc.y} text={m.label} kind={m.kind} hot={hot} stagger={i % 2} />
    )

    return (
      <g key={m.id} className="iso-mod" style={{ opacity: dim ? 0.42 : 1, transform: hot ? 'translateY(-5px)' : 'none' }}>
        <polygon className="iso-face" points={poly(f.left)} fill={fl.left} />
        <polygon className="iso-face" points={poly(f.right)} fill={fl.right} />
        <polygon className="iso-face" points={poly(f.top)} fill={fl.top} stroke="rgba(26,18,10,0.10)" strokeWidth={0.5} />
        {details}
        {label}
      </g>
    )
  }

  return (
    <div className="isobar" role="img" aria-label="Isometric bar layout showing equipment stations">
      <style>{`
        .isobar { width: 100%; height: 100%; display: grid; place-items: center; }
        .isobar svg { width: 100%; height: 100%; display: block; }
        .isobar .iso-face { transition: fill 0.3s ease; }
        .isobar .iso-mod { transition: opacity 0.3s ease, transform 0.3s ease; }
        .isobar .iso-mlabel {
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-size: 8.4px; font-weight: 600; letter-spacing: 0.04em;
          text-transform: uppercase; transition: fill 0.3s ease;
          paint-order: stroke; stroke: rgba(255,255,255,0.55); stroke-width: 2.4px; stroke-linejoin: round;
        }
        .isobar .iso-chip-bg { transition: fill 0.3s ease, stroke 0.3s ease; }
        .isobar .iso-chip-tx {
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-size: 11px; font-weight: 600; letter-spacing: 0.04em;
          text-transform: uppercase; transition: fill 0.3s ease;
        }
        @media (prefers-reduced-motion: reduce) {
          .isobar .iso-face, .isobar .iso-mod, .isobar .iso-mlabel, .isobar .iso-chip-bg, .isobar .iso-chip-tx { transition: none; }
        }
      `}</style>
      <svg viewBox={`0 0 ${VW} ${VH}`} preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <g transform={fit}>
          {/* soft ground shadow */}
          <polygon
            points={poly([proj(-0.4, counter.d + 0.6, 0), proj(counter.w + 0.4, counter.d + 0.6, 0), proj(counter.w + 1.2, -0.6, 0), proj(0.4, -0.6, 0)])}
            fill="rgba(26,18,10,0.12)"
          />
          {/* counter island */}
          <g>
            <polygon points={poly(cF.left)} fill={GREY.counter.left} />
            <polygon points={poly(cF.right)} fill={GREY.counter.right} />
            <polygon points={poly(cF.top)} fill={GREY.counter.top} stroke="rgba(26,18,10,0.12)" strokeWidth={0.6} />
            {/* inset bar-top edge */}
            <polygon
              points={poly(quadTop(0.4, 0.4, counter.w - 0.8, counter.d - 0.8, counter.h))}
              fill="none"
              stroke="rgba(26,18,10,0.10)"
              strokeWidth={0.6}
            />
          </g>
          {/* equipment */}
          {ordered.map((m, i) => renderModule(m, i))}
        </g>
      </svg>
    </div>
  )
}

// Floating callout chip with a small kind-coloured dot + leader.
function Chip({ x, y, text, kind, hot, stagger }: { x: number; y: number; text: string; kind: IsoKind; hot: boolean; stagger: number }) {
  const w = text.length * 7 + 26
  const h = 19
  const cy = y - 30 - stagger * 16
  const cx = x
  return (
    <g>
      <line x1={r1(cx)} y1={r1(cy + h / 2)} x2={r1(x)} y2={r1(y - 2)} stroke={hot ? BRAND[kind] : 'rgba(26,18,10,0.32)'} strokeWidth={1} />
      <rect
        className="iso-chip-bg"
        x={r1(cx - w / 2)}
        y={r1(cy - h / 2)}
        width={r1(w)}
        height={h}
        rx={9.5}
        fill={hot ? BRAND[kind] : '#fffdf8'}
        stroke={hot ? BRAND[kind] : 'rgba(26,18,10,0.16)'}
        strokeWidth={1.2}
      />
      <circle cx={r1(cx - w / 2 + 12)} cy={r1(cy)} r={3.4} fill={hot ? '#fff' : BRAND[kind]} />
      <text className="iso-chip-tx" x={r1(cx + 6)} y={r1(cy + 4)} textAnchor="middle" fill={hot ? '#fff' : '#2a2118'}>
        {text}
      </text>
    </g>
  )
}
