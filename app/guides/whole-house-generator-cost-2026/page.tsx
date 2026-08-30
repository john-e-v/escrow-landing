import Link from 'next/link';

export default function Guide() {
  return (
    <>
      <nav className="navbar scrolled">
        <div className="container nav-inner">
          <a href="/" className="logo">CLRBL<span>T</span></a>
          <div className="nav-links">
            <a href="/guides">Guides</a>
            <a href="/" className="nav-cta">Get Started</a>
          </div>
        </div>
      </nav>

      <section className="hero" style={{ paddingBottom: 40, paddingTop: 120 }}>
        <div className="container hero-content">
          <div className="hero-badge">Cost &amp; Timeline · August 2026</div>
          <h1>How Much Does a Whole-House Generator Cost in 2026?</h1>
          <p className="hero-subtitle">A whole-house standby generator runs $8,000 to $22,000 installed in 2026, and the spread comes down to whether you buy a 14kW unit or a 26kW one. Fuel type, transfer switch, gas line runs, and electrical panel work move the number more than the generator itself.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>A whole-house standby generator runs $8,000 to $22,000 installed in 2026, and most homeowners land somewhere between $12,000 and $16,000 once every line item is accounted for. The generator unit itself is only about 40% of that total. The rest is installation labor, gas plumbing, electrical work, and the permits nobody warns you about.</p>
            <p>That&apos;s a wide range for a reason. A 14kW air-cooled unit sized to run essentials — HVAC, fridge, well pump, a few circuits — is a fundamentally different job than a 26kW liquid-cooled unit that keeps an entire 4,000-square-foot house running like nothing happened. Both are &apos;whole-house&apos; generators in the brochure. They are not the same purchase.</p>


            <h2>What Actually Moves the Number</h2>
            <p>Generator size is the first fork. A 14kW unit costs $4,000 to $6,000 for the equipment alone. Step up to 22kW or 26kW and you&apos;re at $7,000 to $10,000 before anyone touches a wrench. If your load calculation says you need more than 20kW, you&apos;ve already left the low end of the range behind.</p>
            <p>Fuel type is the second. Natural gas connections are cheaper to run if your gas line is close and sized correctly. But if the meter is undersized, the utility may require an upgrade, and that&apos;s a separate $1,000 to $3,000 you didn&apos;t budget for. Propane means a tank — buried or above-ground — and that adds $1,500 to $4,000 depending on capacity and whether you&apos;re digging.</p>
            <p>The transfer switch is where a lot of quotes quietly diverge. A basic manual transfer switch is cheap. An automatic whole-house switch with load management runs $500 to $2,000, and if your electrical panel is old, undersized, or needs to move to accommodate the switch, panel work alone can add $1,500 to $4,000.</p>
            <blockquote className="article-quote">
              The generator was the cheap part. The gas line and the panel upgrade were what blew up my budget — nobody quoted those until the site visit.
              <cite>— homeowner, suburban New Jersey install</cite>
            </blockquote>


            <h2>Region and Permits</h2>
            <p>Where you live changes the math more than most people expect. Labor rates in the Northeast and West Coast run 30% to 50% higher than the rural South. Permitting adds $100 in a lenient jurisdiction and $600-plus where inspections are strict and multiple trades need sign-off. Some coastal and wildfire regions require specific pad, clearance, or emissions compliance that tacks on cost.</p>
            <p>Gas line distance is the sleeper variable. A generator sitting ten feet from your meter is a quick tie-in. One that needs 60 feet of trenched, sized pipe across a finished yard can add several thousand dollars in labor and materials alone. Same generator, very different bill.</p>


            <h2>Getting a Number You Can Trust</h2>
            <p>The honest answer is that no online calculator can price your install, because the price lives in the details a calculator can&apos;t see — your panel&apos;s age, your gas line&apos;s capacity, how far the unit sits from the meter, and what your local inspector demands. A real quote requires a real load calculation and a site visit.</p>
            <p>When you do collect quotes, the spread between them tells you something. A $9,000 and a $17,000 bid for the &apos;same&apos; generator usually means one contractor included the gas upgrade and panel work and the other is planning to surprise you later. Compare scopes, not just totals — and make sure the payment structure protects you until the work is inspected and done right.</p>
          </div>

          <div className="article-footer">
            <Link href="/guides" className="article-back">← Back to Guides</Link>
            <a href="/create" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>Get matched with contractors who accept escrow payments →</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-content">
          <div className="footer-logo">CLRBL<span>T</span></div>
          <div className="footer-links">
            <a href="/about">About</a>
            <a href="/guides">Guides</a>
            <a href="/articles">Articles</a>
            <a href="/contact">Contact</a>
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
          </div>
        </div>
      </footer>
    </>
  );
}
