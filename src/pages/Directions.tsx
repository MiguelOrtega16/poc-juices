import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { Orb } from '../components/decor/Orb'
import { BentoDir } from '../components/directions/BentoDir'
import { ImmersiveDir } from '../components/directions/ImmersiveDir'
import { CraftDir } from '../components/directions/CraftDir'
import { DecorPhoto } from '../components/directions/DecorPhoto'
import { DecorDuotone } from '../components/directions/DecorDuotone'
import { DecorType } from '../components/directions/DecorType'

type Block = { no: string; name: string; current?: boolean; desc: string; node: React.ReactNode }

const ART: Block[] = [
  { no: '01', name: 'Bold Bento Color-Block', current: true, desc: 'Now live on the site — bento grid of varied tiles + full-bleed colour blocks, big bold sans type, rounded. Energetic and modern.', node: <BentoDir /> },
  { no: '02', name: 'Editorial Ivory', desc: 'The earlier build — oversized Fraunces headlines, hairline ledger rules, generous whitespace, jewel accents.', node: <EditorialRecap /> },
  { no: '03', name: 'Dark Immersive', desc: 'Near-black, cinematic, glowing tropical accents and a spotlit product. Premium nightlife energy.', node: <ImmersiveDir /> },
  { no: '04', name: 'Warm Craft / Sunset', desc: 'Warm cream + sunset gradients, serif italics, rounder shapes. Artisanal and inviting.', node: <CraftDir /> },
]

const DECO: Block[] = [
  { no: '01', name: 'Liquid orbs', current: true, desc: 'Abstract gradient spheres (current).', node: <OrbsRecap /> },
  { no: '02', name: 'Real photography', desc: 'Product photos lead the design.', node: <DecorPhoto /> },
  { no: '03', name: 'Minimal duotone', desc: 'Quiet two-tone treated imagery.', node: <DecorDuotone /> },
  { no: '04', name: 'Type + colour only', desc: 'No imagery — type is the visual.', node: <DecorType /> },
]

export function Directions() {
  return (
    <>
      <PageHero
        no="The forks"
        eyebrow="Other directions"
        title={<>How else it could be <span className="accent">composed</span>.</>}
        lead="The theme switcher only recolours the editorial layout. These are the bigger forks — the art directions that change how every section is laid out, plus the imagery/decoration options. Previews, not full pages."
        orb="grape"
        accent="var(--grape)"
      />

      <section className="section section--tight">
        <div className="container">
          <SectionHeading no="A" eyebrow="Art directions" title="How the sections compose" accent="var(--grape)">
            Each of these reworks the layout language itself, not just the palette.
          </SectionHeading>
          {ART.map((b) => (
            <div className="dir-block reveal" key={b.name}>
              <div className="dir-head">
                <span className="dir-head__no">{b.no}</span>
                <span className="dir-name">{b.name}</span>
                <span className={`dir-badge ${b.current ? '' : 'dir-badge--alt'}`}>{b.current ? 'Live' : 'Option'}</span>
                <p className="dir-desc">{b.desc}</p>
              </div>
              <div className="dir-frame">{b.node}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--paper-2">
        <div className="container">
          <SectionHeading no="B" eyebrow="Decoration & imagery" title="Four ways to handle imagery" accent="var(--ocean)">
            The same idea, four treatments — from abstract orbs to real photography to pure type.
          </SectionHeading>
          <div className="dir-deco-grid" style={{ marginTop: '2rem' }}>
            {DECO.map((b) => (
              <div className="dir-deco reveal" key={b.name}>
                <div className="dir-head">
                  <span className="dir-head__no">{b.no}</span>
                  <span className="dir-name" style={{ fontSize: '1.3rem' }}>{b.name}</span>
                  <span className={`dir-badge ${b.current ? '' : 'dir-badge--alt'}`}>{b.current ? 'Current' : 'Option'}</span>
                </div>
                <div className="dir-frame">{b.node}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

/* ---- "current" reference recaps (self-contained) ---- */
function EditorialRecap() {
  return (
    <div className="edrc-root">
      <style>{`
        .edrc-root { background: #f7f1e6; color: #534a3c; font-family: 'Inter', sans-serif; padding: clamp(1.6rem, 3vw, 2.6rem); }
        .edrc-root .edrc-kick { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: #6a6051; display: flex; align-items: center; gap: 0.6rem; }
        .edrc-root .edrc-kick::before { content: ''; width: 26px; height: 1px; background: #b53e07; }
        .edrc-root .edrc-h { font-family: 'Fraunces', serif; font-weight: 400; color: #1a1611; font-size: clamp(2rem, 4vw, 3.2rem); letter-spacing: -0.03em; line-height: 1; margin: 0.9rem 0 0; }
        .edrc-root .edrc-h em { font-style: italic; color: #b53e07; }
        .edrc-root .edrc-rows { margin-top: 1.6rem; border-top: 1px solid rgba(26,22,17,0.14); }
        .edrc-root .edrc-row { display: flex; align-items: center; gap: 1rem; padding: 0.8rem 0; border-bottom: 1px solid rgba(26,22,17,0.14); }
        .edrc-root .edrc-no { font-family: 'Fraunces', serif; color: #6a6051; font-size: 0.9rem; }
        .edrc-root .edrc-name { font-family: 'Fraunces', serif; font-size: 1.25rem; color: #1a1611; }
        .edrc-root .edrc-tag { margin-left: auto; font-style: italic; font-family: 'Fraunces', serif; color: #6a6051; }
      `}</style>
      <span className="edrc-kick">Est. 1997 — Commercial mixes</span>
      <h3 className="edrc-h">World’s Best <em>Cocktail</em> Mixes</h3>
      <div className="edrc-rows">
        {[['01', 'Piña Colada', 'pina', 'World’s Best'], ['02', 'Margarita', 'margarita', 'Frozen or rocks'], ['03', 'Strawberry', 'strawberry', 'Real chunky fruit']].map(([n, name, orb, tag]) => (
          <div className="edrc-row" key={n}>
            <span className="edrc-no">{n}</span>
            <Orb flavor={orb as never} size={32} />
            <span className="edrc-name">{name}</span>
            <span className="edrc-tag">{tag}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function OrbsRecap() {
  return (
    <div className="orrc-root">
      <style>{`
        .orrc-root { background: #f7f1e6; padding: 1.8rem; display: grid; gap: 1.2rem; }
        .orrc-root .orrc-row { display: flex; gap: 1.4rem; justify-content: center; }
        .orrc-root .orrc-item { display: grid; place-items: center; gap: 0.5rem; }
        .orrc-root .orrc-item span { font-family: 'Fraunces', serif; color: #1a1611; font-size: 0.85rem; }
      `}</style>
      <div className="orrc-row">
        {[['pina', 'Piña'], ['margarita', 'Margarita'], ['strawberry', 'Strawberry'], ['mango', 'Mango']].map(([orb, name]) => (
          <div className="orrc-item" key={orb}>
            <Orb flavor={orb as never} size={64} shape="blob" />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
