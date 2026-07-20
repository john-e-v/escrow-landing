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
          <div className="hero-badge">Cost &amp; Timeline · July 2026</div>
          <h1>How Much Does a Water Heater Replacement Cost in 2026?</h1>
          <p className="hero-subtitle">A standard tank water heater replacement runs $1,200 to $3,500 installed in 2026, but tankless jobs can push $4,500 to $8,000. The spread comes down to fuel type, venting, code upgrades, and whether your existing setup meets current requirements.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>A standard tank water heater replacement runs $1,200 to $3,500 installed in 2026, while tankless conversions land between $4,500 and $8,000. That&apos;s a wide spread for what sounds like a simple swap, and the difference isn&apos;t padding — it&apos;s the physical reality of what&apos;s behind your old unit and what code now demands.</p>
            <p>Most homeowners expect a flat price. The truth is your final number gets built from five moving parts, and any one of them can double the job.</p>


            <h2>Fuel Type Sets the Floor</h2>
            <p>A basic 40- or 50-gallon electric tank is the cheapest replacement on the market — often $1,200 to $2,000 installed when it&apos;s a like-for-like swap. Gas tanks run higher, $1,800 to $3,500, because they involve venting, gas line connections, and combustion safety checks.</p>
            <p>Tankless is where the number jumps. A whole-home gas tankless unit costs more than the hardware alone suggests — you&apos;re paying for larger gas lines, new venting, and sometimes an electrical circuit. That&apos;s why the tankless range starts at $4,500 and climbs past $8,000 on complex homes.</p>


            <h2>Code Upgrades Are the Silent Multiplier</h2>
            <p>Here&apos;s what surprises people: replacing a water heater often triggers code requirements that didn&apos;t exist when your old one was installed. Expansion tanks, seismic strapping, drip pans with drain lines, updated venting, and dedicated shutoffs can each add $150 to $600.</p>
            <p>If your home&apos;s original unit predates current code — common in houses over 15 years old — a plumber legally can&apos;t just reconnect the old setup. Those upgrades are why two identical-looking jobs on the same street can quote $800 apart.</p>
            <blockquote className="article-quote">
              The tank is the cheap part. What eats the budget is bringing the venting, the pan, and the gas line up to what the inspector will actually sign off on.
              <cite>— Licensed plumber, residential retrofit specialist</cite>
            </blockquote>


            <h2>Region, Permits, and the Labor Market</h2>
            <p>Where you live changes the labor rate dramatically. In high-cost metros — coastal California, the Northeast, major cities — installation labor alone can run $800 to $1,500. In lower-cost regions, the same labor might be $350 to $600.</p>
            <p>Permitting adds another regional variable. Some jurisdictions require a permit and inspection for any water heater replacement ($75 to $300), while others don&apos;t inspect swaps at all. Skipping a required permit can cause problems at resale, so factor it into the honest number, not the lowball one.</p>


            <h2>Why the Range Stays Wide Until Someone Sees It</h2>
            <p>Scope is the last wildcard. Is the new unit the same size and location as the old one? Is the space accessible, or is it wedged in a tight closet or attic? Does the old unit need hazardous-material disposal? Is there existing water damage under the failing tank?</p>
            <p>Each of these can shift the quote by hundreds of dollars, and no contractor can pin down a real figure without seeing the setup. A quote that&apos;s suspiciously precise over the phone usually means change orders later.</p>
            <p>The smartest move is getting a few itemized bids that break out the unit, labor, code upgrades, and permit separately — so you can see exactly which line item is driving your number and compare apples to apples.</p>
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
