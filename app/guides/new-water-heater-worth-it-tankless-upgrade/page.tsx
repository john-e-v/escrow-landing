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
          <div className="hero-badge">Cost &amp; ROI · September 2026</div>
          <h1>Is Upgrading to Tankless Worth It When Your Tank Water Heater Dies?</h1>
          <p className="hero-subtitle">When your tank water heater fails, upgrading to tankless usually isn&apos;t worth the premium unless you&apos;re staying 8+ years or run out of hot water daily. The math hinges on your timeline and gas line. Here&apos;s the breakdown and the one condition that flips it.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>It depends on one thing: how long you&apos;re staying in the house. If it&apos;s 8+ years, tankless is worth it. If it&apos;s less, replace the tank and keep the difference.</p>
            <p>Here&apos;s why timeline is the whole decision. A standard tank water heater replacement runs $1,200 to $2,500 installed. A tankless unit costs $3,000 to $6,000 installed — sometimes more if your gas line and venting need upgrades. So you&apos;re paying a $1,800 to $3,500 premium up front for the tankless option.</p>
            <p>What do you get back? A tankless unit is 24% to 34% more energy-efficient for homes using under 41 gallons a day, according to the Department of Energy. In real dollars, that&apos;s roughly $80 to $110 a year off your water heating bill for a typical household. Do the math: a $2,500 premium divided by $100 a year in savings is a 25-year payback. Tankless units last 20 years; tanks last 10 to 12. Even accounting for one fewer replacement over that span, the pure ROI is a wash at best.</p>


            <h2>The Math That Actually Justifies It</h2>
            <p>The savings case is weak on its own. The real value shows up in two places the spreadsheet misses.</p>
            <p>First, resale. Tankless adds modest but real buyer appeal — appraisers and agents generally credit it as a premium fixture, and homes list it as a selling point. You won&apos;t recoup the full install, but expect to recover 40% to 60% of the premium at sale if it&apos;s reasonably new. Combined with a decade of energy savings, a long-term owner can come out ahead.</p>
            <p>Second, capacity. If your household runs out of hot water — the third shower goes cold, the dishwasher and laundry can&apos;t run together — tankless solves a daily annoyance a bigger tank only partly fixes. That&apos;s a quality-of-life value no payback chart captures.</p>
            <blockquote className="article-quote">
              Most homeowners I install tankless for aren&apos;t chasing energy savings — they&apos;re tired of running out of hot water at 7 a.m. That&apos;s the real reason it&apos;s worth it.
              <cite>— licensed plumbing contractor, 15 years in residential retrofits</cite>
            </blockquote>


            <h2>The Condition That Flips the Verdict</h2>
            <p>The math flips hard against tankless if your gas line or electrical panel can&apos;t handle it.</p>
            <p>Gas tankless units need a 3/4-inch gas line and often a dedicated high-BTU supply. If your home has a 1/2-inch line, retrofitting it can add $500 to $1,500. Electric tankless is worse — whole-home units frequently require a 200-amp panel and new circuits, which can push total cost past $8,000 once an electrician is involved. At that point, even a 10-year owner rarely breaks even.</p>
            <p>So the clean rule: staying 8+ years AND your gas line is already 3/4-inch AND you actually run short on hot water? Go tankless. Miss any one of those, and a high-efficiency tank is the smarter money.</p>
            <p>When your heater dies, you&apos;re deciding under pressure — no hot water, a contractor quoting on the spot, and a tempting upsell. The one thing you can control is who you hire and how you pay. Get firm quotes for both options, confirm your gas line size in writing, and don&apos;t release full payment until the work passes inspection.</p>
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
