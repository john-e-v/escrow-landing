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
          <h1>Is Building a Detached Garage Worth It? Cost, ROI, and When It Doesn&apos;t Pay</h1>
          <p className="hero-subtitle">A detached garage runs $35K-$70K and returns roughly 65-80% at resale in most markets. This breakdown shows the real math, the payback timeline, and the one condition that flips the verdict from smart investment to money pit.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>It depends on one thing: whether your local market rewards covered parking. In cold or high-crime metros where garages are expected, a detached garage is worth it. In warm-weather markets where carports and driveways are the norm, it usually isn&apos;t — you&apos;ll eat most of the cost.</p>
            <p>A detached garage runs $35,000 to $70,000 depending on size, foundation, and finish level. It returns roughly 65% to 80% at resale in markets that value it. That means on a $50,000 build you recover somewhere between $32,500 and $40,000 in added home value — a real cost of $10,000 to $17,500 after you sell.</p>


            <h2>The Math</h2>
            <p>Here&apos;s the breakdown by build type:</p>
            <p>**Basic 2-car (24x24, slab, no finish):** $35,000–$45,000. Adds roughly $28,000–$36,000 in value. Net cost: $7,000–$9,000.</p>
            <p>**Mid-range 2-car (insulated, drywall, electrical, garage door opener):** $50,000–$60,000. Adds $35,000–$48,000. Net cost: $12,000–$15,000.</p>
            <p>**Premium (3-car, or with loft/workshop/attached utilities):** $65,000–$70,000+. Adds $42,000–$56,000. Net cost: $14,000–$24,000.</p>
            <p>The payback timeline isn&apos;t about resale alone. If you&apos;re pulling a car out of the weather, avoiding $1,200–$2,000 a year in exterior storage or covered parking rentals, or converting part of the loft into a rentable space, the build pays down faster. Rented loft space at $600/month recovers a $50,000 build in under seven years — before you count the resale bump.</p>
            <blockquote className="article-quote">
              Buyers in Minneapolis will walk from a house without a garage in January. Buyers in Phoenix shrug at it. Same structure, completely different return.
              <cite>— Regional appraiser, quoted on garage valuation</cite>
            </blockquote>


            <h2>The Catch</h2>
            <p>The verdict flips from smart investment to money pit when your build cost outruns your neighborhood ceiling.</p>
            <p>Every neighborhood has a price cap — the most any home there realistically sells for. If your house is already near that cap, a $60,000 garage doesn&apos;t add $45,000 in value. It adds maybe $15,000, because buyers won&apos;t pay $30,000 over the top comparable sale just for a nicer garage. You&apos;ve over-improved, and the ROI collapses to 25% or worse.</p>
            <p>The rule: before you build, find the three highest recent sales within half a mile. If those homes have garages and yours doesn&apos;t, you&apos;re filling a gap — build it. If those homes are selling at prices you&apos;d blow past by adding the garage, scale down the finish level or skip it entirely.</p>
            <p>The other flip is warm-weather markets. In Florida, Texas, and Arizona metros where covered parking isn&apos;t a buyer priority, detached garages routinely return under 50%. There, a garage is a personal-use decision, not an investment one — build it because you want a workshop, not because you expect the money back.</p>


            <h2>Before You Commit</h2>
            <p>Run the numbers against your own comps, not national averages. A garage that returns 80% in Chicago might return 45% two states south. Once you know your market rewards it, the next variable is who builds it — and how you protect the $50,000 you&apos;re putting on the line.</p>
            <p>Get contractor quotes that reflect your actual build type and finish level, and structure the payment so your money stays protected until the work is verified done.</p>
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
