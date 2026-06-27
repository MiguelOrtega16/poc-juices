export function DecorType() {
  return (
    <div className="dtype-root">
      <style>{`
        .dtype-root {
          --mango: #ef5f1a;
          --pineapple: #e8a000;
          --lime: #4f9a2e;
          --guava: #e23a68;
          --ocean: #0c9a8b;
          --grape: #6f3bc2;
          --ink: #14110d;
          --paper: #f7f1e6;
          position: relative;
          width: 100%;
          background: var(--ink);
          color: var(--paper);
          font-family: 'Inter', sans-serif;
          border-radius: 18px;
          overflow: hidden;
          letter-spacing: -0.01em;
        }
        .dtype-root *,
        .dtype-root *::before,
        .dtype-root *::after { box-sizing: border-box; }

        /* ---------- HERO ---------- */
        .dtype-root .dtype-hero {
          position: relative;
          padding: 1.6rem 1.4rem 1.4rem;
          background:
            radial-gradient(120% 90% at 100% 0%, rgba(232,160,0,0.18), transparent 55%),
            radial-gradient(120% 90% at 0% 100%, rgba(226,58,104,0.16), transparent 55%);
          border-bottom: 2px solid rgba(247,241,230,0.12);
        }
        .dtype-root .dtype-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.62rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(247,241,230,0.62);
        }
        .dtype-root .dtype-brand {
          display: inline-flex;
          align-items: baseline;
          gap: 0.45rem;
          color: var(--paper);
          font-weight: 700;
        }
        .dtype-root .dtype-brand b { color: var(--pineapple); letter-spacing: 0.18em; }
        .dtype-root .dtype-est {
          font-variant-numeric: tabular-nums;
          color: rgba(247,241,230,0.5);
        }

        .dtype-root .dtype-kicker {
          margin: 1.3rem 0 0.2rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--ocean);
        }
        .dtype-root .dtype-kicker::before {
          content: '';
          width: 1.6rem;
          height: 2px;
          background: var(--ocean);
        }

        .dtype-root .dtype-headline {
          font-family: 'Bricolage Grotesque', 'Space Grotesk', sans-serif;
          font-weight: 800;
          line-height: 0.86;
          letter-spacing: -0.03em;
          font-size: clamp(2.6rem, 13vw, 4.4rem);
          margin: 0.1rem 0 0;
          text-transform: uppercase;
        }
        .dtype-root .dtype-headline .l1 { color: var(--paper); }
        .dtype-root .dtype-headline .l2 {
          display: block;
          color: transparent;
          -webkit-text-stroke: 1.4px var(--pineapple);
        }
        .dtype-root .dtype-headline .l3 {
          display: block;
          color: var(--mango);
        }

        .dtype-root .dtype-sub {
          margin: 0.9rem 0 0;
          max-width: 30ch;
          font-size: 0.82rem;
          line-height: 1.45;
          color: rgba(247,241,230,0.74);
        }

        .dtype-root .dtype-pillars {
          margin-top: 1.1rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .dtype-root .dtype-pillar {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.66rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.34rem 0.7rem;
          border-radius: 999px;
          border: 1.5px solid currentColor;
        }
        .dtype-root .dtype-pillar.p1 { color: var(--lime); }
        .dtype-root .dtype-pillar.p2 { color: var(--ocean); }
        .dtype-root .dtype-pillar.p3 { color: var(--guava); }

        /* ---------- SECTION LABEL ---------- */
        .dtype-root .dtype-seclabel {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          padding: 1.2rem 1.4rem 0.4rem;
          font-family: 'Space Grotesk', sans-serif;
          text-transform: uppercase;
        }
        .dtype-root .dtype-seclabel h2 {
          margin: 0;
          font-size: 0.74rem;
          letter-spacing: 0.2em;
          font-weight: 700;
          color: var(--paper);
        }
        .dtype-root .dtype-seclabel span {
          font-size: 0.6rem;
          letter-spacing: 0.18em;
          color: rgba(247,241,230,0.45);
          font-variant-numeric: tabular-nums;
        }

        /* ---------- TYPE SHOWCASE (the imagery IS the type) ---------- */
        .dtype-root .dtype-showcase {
          display: flex;
          flex-direction: column;
        }
        .dtype-root .dtype-row {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.7rem;
          padding: 0.6rem 1.4rem;
          border-top: 1.5px solid rgba(247,241,230,0.1);
          overflow: hidden;
        }
        .dtype-root .dtype-row .num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.66rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: rgba(247,241,230,0.4);
          font-variant-numeric: tabular-nums;
          width: 1.8rem;
          flex: none;
        }
        .dtype-root .dtype-row .name {
          font-family: 'Bricolage Grotesque', 'Space Grotesk', sans-serif;
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 0.84;
          font-size: clamp(1.9rem, 9.5vw, 3.1rem);
          text-transform: uppercase;
          white-space: nowrap;
          transition: none;
        }
        .dtype-root .dtype-row .hook {
          margin-left: auto;
          text-align: right;
          font-size: 0.62rem;
          letter-spacing: 0.04em;
          line-height: 1.3;
          color: rgba(247,241,230,0.6);
          max-width: 9.5rem;
          flex: none;
        }
        .dtype-root .dtype-row .hook b {
          display: block;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-size: 0.56rem;
          color: rgba(247,241,230,0.9);
        }

        /* colour-blocked rows — the only ornament is colour */
        .dtype-root .dtype-row.pina   .name { color: var(--pineapple); }
        .dtype-root .dtype-row.marg   .name { color: transparent; -webkit-text-stroke: 1.3px var(--lime); }
        .dtype-root .dtype-row.straw  .name { color: var(--guava); }
        .dtype-root .dtype-row.mango  .name { color: var(--mango); }
        .dtype-root .dtype-row.rasp   .name { color: transparent; -webkit-text-stroke: 1.3px var(--grape); }

        .dtype-root .dtype-row.pina   { background: linear-gradient(90deg, rgba(232,160,0,0.1), transparent 60%); }
        .dtype-root .dtype-row.straw  { background: linear-gradient(90deg, rgba(226,58,104,0.1), transparent 60%); }
        .dtype-root .dtype-row.mango  { background: linear-gradient(90deg, rgba(239,95,26,0.1), transparent 60%); }

        .dtype-root .dtype-row .flag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.5rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ink);
          background: var(--pineapple);
          padding: 0.12rem 0.36rem;
          border-radius: 4px;
          align-self: flex-start;
          margin-top: 0.2rem;
        }

        /* ---------- CLOSING STATS STRIP ---------- */
        .dtype-root .dtype-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(247,241,230,0.12);
          border-top: 1.5px solid rgba(247,241,230,0.12);
        }
        .dtype-root .dtype-stat {
          background: var(--ink);
          padding: 0.95rem 0.7rem;
          text-align: left;
        }
        .dtype-root .dtype-stat .big {
          font-family: 'Bricolage Grotesque', 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(1.4rem, 7vw, 2rem);
          line-height: 1;
          letter-spacing: -0.03em;
          font-variant-numeric: tabular-nums;
        }
        .dtype-root .dtype-stat:nth-child(1) .big { color: var(--pineapple); }
        .dtype-root .dtype-stat:nth-child(2) .big { color: var(--lime); }
        .dtype-root .dtype-stat:nth-child(3) .big { color: var(--guava); }
        .dtype-root .dtype-stat:nth-child(4) .big { color: var(--ocean); }
        .dtype-root .dtype-stat .lbl {
          margin-top: 0.3rem;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.52rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(247,241,230,0.55);
          line-height: 1.25;
        }

        /* ---------- CLOSING WORDMARK ---------- */
        .dtype-root .dtype-close {
          padding: 1.3rem 1.4rem 1.5rem;
          background:
            radial-gradient(120% 120% at 0% 0%, rgba(111,59,194,0.22), transparent 55%);
        }
        .dtype-root .dtype-close .word {
          font-family: 'Bricolage Grotesque', 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(2rem, 11vw, 3.4rem);
          line-height: 0.88;
          letter-spacing: -0.035em;
          text-transform: uppercase;
        }
        .dtype-root .dtype-close .word .a { color: var(--paper); }
        .dtype-root .dtype-close .word .b { color: var(--mango); }
        .dtype-root .dtype-close .meta {
          margin-top: 0.8rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.3rem 0.5rem;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.58rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(247,241,230,0.55);
        }
        .dtype-root .dtype-close .meta i {
          font-style: normal;
          color: rgba(247,241,230,0.85);
        }
        .dtype-root .dtype-close .meta .dot { color: var(--ocean); }
      `}</style>

      {/* ===== HERO ===== */}
      <section className="dtype-hero">
        <div className="dtype-topbar">
          <span className="dtype-brand">
            <b>FRESH BLENDZ</b> Fresh is Best
          </span>
          <span className="dtype-est">EST. 1997</span>
        </div>

        <p className="dtype-kicker">Type + colour only</p>

        <h1 className="dtype-headline">
          <span className="l1">World&apos;s</span>
          <span className="l2">Best</span>
          <span className="l3">Cocktail Mixes</span>
        </h1>

        <p className="dtype-sub">
          100% all-natural fresh fruit-based beverage mixes — top-shelf flavor,
          built for high-volume performance.
        </p>

        <div className="dtype-pillars">
          <span className="dtype-pillar p1">Quality</span>
          <span className="dtype-pillar p2">Consistency</span>
          <span className="dtype-pillar p3">Volume</span>
        </div>
      </section>

      {/* ===== TYPE SHOWCASE ===== */}
      <div className="dtype-seclabel">
        <h2>The Mixes</h2>
        <span>07 Recipes</span>
      </div>

      <section className="dtype-showcase">
        <div className="dtype-row pina">
          <span className="num">01</span>
          <span className="name">Piña Colada</span>
          <span className="flag">Flagship</span>
          <span className="hook">
            <b>Signature</b>
            World&apos;s Best
          </span>
        </div>

        <div className="dtype-row marg">
          <span className="num">02</span>
          <span className="name">Margarita</span>
          <span className="hook">
            <b>Serve</b>
            Frozen or rocks
          </span>
        </div>

        <div className="dtype-row straw">
          <span className="num">03</span>
          <span className="name">Strawberry</span>
          <span className="hook">
            <b>Texture</b>
            Real chunky fruit
          </span>
        </div>

        <div className="dtype-row mango">
          <span className="num">04</span>
          <span className="name">Mango</span>
          <span className="hook">
            <b>Profile</b>
            Sweet, sour note
          </span>
        </div>

        <div className="dtype-row rasp">
          <span className="num">05</span>
          <span className="name">Raspberry</span>
          <span className="hook">
            <b>Profile</b>
            Rich &amp; sweet
          </span>
        </div>
      </section>

      {/* ===== STATS STRIP ===== */}
      <section className="dtype-strip">
        <div className="dtype-stat">
          <div className="big">25+</div>
          <div className="lbl">Years design experience</div>
        </div>
        <div className="dtype-stat">
          <div className="big">100%</div>
          <div className="lbl">All-natural</div>
        </div>
        <div className="dtype-stat">
          <div className="big">80+</div>
          <div className="lbl">Recipe videos</div>
        </div>
        <div className="dtype-stat">
          <div className="big">3</div>
          <div className="lbl">Distribution regions</div>
        </div>
      </section>

      {/* ===== CLOSING WORDMARK ===== */}
      <section className="dtype-close">
        <div className="word">
          <span className="a">Fresh </span>
          <span className="b">is Best.</span>
        </div>
        <div className="meta">
          <i>Trusted by</i>
          Ritz-Carlton <span className="dot">●</span>
          MGM Grand <span className="dot">●</span>
          JW Marriott <span className="dot">●</span>
          Marriott Int&apos;l <span className="dot">●</span>
          Kalahari Resorts
        </div>
      </section>
    </div>
  )
}
