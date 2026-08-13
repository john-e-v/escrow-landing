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
          <div className="hero-badge">The Hidden Cost · August 2026</div>
          <h1>Your Epoxy Garage Floor Peeled in a Year. Here&apos;s Who Actually Pays</h1>
          <p className="hero-subtitle">A $4,200 epoxy floor peeled off in sheets eleven months after install because the contractor skipped the moisture test and grinding prep. The homeowner had paid in full on completion day, and the fix cost more than the original job. Here&apos;s the prep step nobody quoted and the payment structure that would have kept leverage alive.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Eleven months. That&apos;s how long the $4,200 epoxy floor lasted before it started lifting off the slab in sheets you could roll up like carpet.</p>
            <p>The homeowner did everything a reasonable person does. Got three quotes. Picked the middle one. Watched the crew show up, roll on a glossy coat over a garage floor that looked clean, and walked the finished job that afternoon. It looked incredible. They paid the balance in full on completion day — check handed over while the fumes were still in the air.</p>
            <p>The verdict, delivered by the second contractor called in to assess the failure: the slab was never tested for moisture, and the concrete was never mechanically ground. The coating had nothing to bond to. It was, functionally, expensive paint sitting on a sealed surface.</p>


            <h2>The Two Steps That Weren&apos;t in the Quote</h2>
            <p>Concrete holds water. A slab-on-grade garage floor wicks moisture up from the ground constantly, and if you trap that vapor under an impermeable epoxy coating, it pushes the coating right off the surface. The industry standard is a calcium chloride or relative humidity test before anything goes down — a $30 test kit and 24 hours of patience.</p>
            <p>The second step is surface profiling. Epoxy needs a rough, open concrete surface to grip — the industry calls it a CSP-2 or CSP-3 profile, achieved with a diamond grinder or shot blaster. The original crew skipped it because grinding is loud, dusty, and slow. They acid-etched at best, or wiped it down and rolled at worst.</p>
            <p>Neither step appeared on the quote. Neither was refused by the homeowner — it was never offered as a line item to accept or decline. The corners were cut silently, and they don&apos;t show up for months.</p>
            <blockquote className="article-quote">
              A proper garage epoxy job is 70% prep and 30% coating. If the quote doesn&apos;t mention grinding or a moisture test, you&apos;re paying for the 30% and hoping.
              <cite>— Commercial flooring installer, 15 years</cite>
            </blockquote>


            <h2>What the Fix Actually Cost</h2>
            <p>The repair was worse than the original job. The failed coating had to be ground off completely — now a demolition step, not just prep. The slab had to be tested, dried, re-profiled, and re-coated with a moisture-mitigating primer the first crew never used.</p>
            <p>Total remediation: roughly $5,600. Add the $4,200 already spent on a floor that lasted less than a year, and the homeowner was nearly $10,000 into a garage floor that should have cost $4,200 once.</p>
            <p>The original contractor stopped answering calls in week two of the dispute. There was no leverage left, because there was no money left on the table. The check had cleared ten months earlier.</p>


            <h2>The Structural Fix</h2>
            <p>Paying in full on completion day is the actual failure here — not the skipped grinding. The grinding was a symptom. The disease is a payment structure that hands over 100% of your leverage before the work has proven it will last past the fumes clearing.</p>
            <p>Profiling and moisture failures don&apos;t reveal themselves at handoff. They surface months later. A payment schedule that holds back a meaningful portion — released only after a defined settling window, or tied to a documented prep step — keeps you at the table when the coating decides whether it&apos;s staying.</p>
            <p>Milestone and escrow payments do exactly this: money is committed so the contractor knows they&apos;ll be paid, but it releases against actual completed stages instead of a single completion-day check. If prep gets skipped, the funds haven&apos;t cleared, and suddenly the contractor has every reason to answer the phone.</p>
            <p>The homeowner in this story didn&apos;t lose $10,000 because they picked a bad crew. They lost it because they had no way to make good work the condition of getting paid. If you&apos;re about to hire for a coating, a slab, or anything where the failure shows up long after the invoice, structure the payment so leverage outlives the handshake.</p>
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
