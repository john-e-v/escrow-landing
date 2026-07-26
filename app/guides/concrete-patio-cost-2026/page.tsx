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
          <h1>How Much Does a Concrete Patio Cost in 2026?</h1>
          <p className="hero-subtitle">A concrete patio runs $8 to $20 per square foot in 2026, meaning a 300-square-foot slab lands between $2,400 and $6,000 installed. The spread comes down to finish, thickness, site prep, and how far your truck has to pour.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>A concrete patio runs $8 to $20 per square foot in 2026, so a standard 300-square-foot slab lands between $2,400 and $6,000 installed. Most homeowners with a basic broom-finish patio pay somewhere in the $10 to $13 range — call it $3,000 to $3,900 for that same 300 feet.</p>
            <p>That&apos;s a wide spread for what looks like a simple gray rectangle. Here&apos;s what actually moves the number.</p>


            <h2>Finish is the single biggest lever</h2>
            <p>A plain broom finish is the floor of the price range. The moment you add decorative work, the per-square-foot cost climbs fast.</p>
            <p>Stamped concrete that mimics stone or brick typically runs $12 to $18 per square foot. Stained or colored concrete adds $2 to $6 on top of the base. Exposed aggregate lands in the middle. If you&apos;re seeing a quote near $20, you&apos;re paying for a decorative finish, integral color, and a sealer — not just concrete.</p>
            <blockquote className="article-quote">
              People think they&apos;re buying concrete. What they&apos;re actually paying for is labor hours and finish detail. A stamped patio is three times the handwork of a broom finish.
              <cite>— Concrete finisher, 15 years in residential work</cite>
            </blockquote>


            <h2>Thickness and site prep hide under the slab</h2>
            <p>A patio you&apos;ll only walk on can be poured at 4 inches. If you&apos;re parking anything on it or the soil is unstable, you&apos;re going 5 to 6 inches — and that&apos;s roughly 25% more concrete plus rebar or wire mesh reinforcement.</p>
            <p>Site prep is where budgets quietly blow up. A flat, accessible yard with good drainage is cheap to prep. A sloped lot that needs grading, a tree stump that needs removal, or clay soil that needs a gravel base can add $1,000 to $3,000 before a single yard of concrete shows up. Old slab that needs demolition and haul-away? Add $2 to $6 per square foot just to clear the space.</p>


            <h2>Region, permits, and the pour distance</h2>
            <p>The same patio costs noticeably more in San Francisco or Boston than in rural Texas. Labor markets drive that — a region where skilled finishers are booked out charges premium rates, and 2026&apos;s tight construction labor market has kept those rates high.</p>
            <p>Permits vary from a $50 flat fee to a few hundred dollars depending on your municipality, and some areas require inspections that add days to the timeline. Then there&apos;s the literal pour distance: if the truck can back up to your slab, you&apos;re fine. If it can&apos;t, the crew pumps or wheelbarrows the concrete — and pumping alone can add $600 to $1,200.</p>


            <h2>Timeline: faster than you&apos;d think, slower than you&apos;d hope</h2>
            <p>The pour itself is one day. Forming and prep is one to two days before that. But concrete needs to cure — you can walk on it in 24 to 48 hours, but it won&apos;t reach full strength for about 28 days, and you shouldn&apos;t put furniture or heavy loads on it for at least a week.</p>
            <p>The real timeline variable is scheduling. Booking a reputable crew in peak season (late spring through early fall) can mean a two-to-six-week wait. Weather delays a wet pour, and cold snaps below 40°F stall curing entirely.</p>


            <h2>Getting a number you can trust</h2>
            <p>The gap between $2,400 and $6,000 on the same slab comes down to decisions you make and conditions you can&apos;t fully control. The best way to narrow it is to get two or three itemized quotes that break out prep, materials, finish, and labor separately — vague lump sums are where surprises live.</p>
            <p>When you&apos;re comparing bids and handing over deposits, it helps to work with contractors who&apos;ll put your payment in escrow so funds only release as the work gets done.</p>
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
