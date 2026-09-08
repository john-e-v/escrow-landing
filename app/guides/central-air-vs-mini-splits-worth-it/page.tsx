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
          <div className="hero-badge">Cost &amp; ROI · August 2026</div>
          <h1>Are Ductless Mini-Splits Worth It vs. Central Air? Cost, ROI, and When Ducts Win</h1>
          <p className="hero-subtitle">It depends on whether your home already has ductwork. Mini-splits win for homes without ducts or with add-ons, but central air pays back better on resale for full-home coverage. Here&apos;s the math and the tipping point.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>It depends on one thing: whether your home already has ductwork. If you have existing ducts in good condition, central air wins on cost and resale. If you don&apos;t, ductless mini-splits win decisively — and it isn&apos;t close.</p>
            <p>Here&apos;s the fast version. Adding central air to a home without ducts means paying $10,000–$16,000 just for the ductwork before you touch the actual system, pushing the total to $18,000–$25,000. A ductless mini-split covering the same square footage runs $8,000–$16,000 installed with no demolition, no soffits, and no lost closet space. That gap is the whole decision.</p>


            <h2>The Math</h2>
            <p>For a home with usable existing ducts: central air installs for $6,000–$12,000 for a 3-ton system. A comparable multi-zone mini-split (3–4 heads) lands at $10,000–$18,000. Central air is cheaper here, full stop, because you&apos;re only replacing equipment.</p>
            <p>For a home without ducts: central air jumps to $18,000–$25,000 once ductwork is added. Mini-splits stay at $8,000–$16,000. You save $6,000–$10,000 up front and skip weeks of drywall repair.</p>
            <p>On operating cost, mini-splits win either way. Their inverter compressors and zoned control cut cooling bills 20–30% versus a single-stage central unit, because you&apos;re not conditioning empty rooms. Over a 15-year lifespan that&apos;s roughly $2,000–$4,000 in savings.</p>
            <p>On payback: a mini-split retrofit in a ductless home effectively pays for itself immediately against the central-air alternative — you never spend the ductwork money. In a ducted home, choosing mini-splits over central air costs you $4,000–$6,000 more up front, recovered slowly through efficiency over 8–12 years. That&apos;s a long wait.</p>
            <blockquote className="article-quote">
              The single biggest cost in any central air retrofit is the ductwork nobody sees. If it&apos;s already there, keep using it.
              <cite>— HVAC estimator, residential retrofits</cite>
            </blockquote>


            <h2>Resale: Where Central Air Pulls Ahead</h2>
            <p>This is the catch that flips the verdict. On resale, central air recovers about 35–50% of its cost and, more importantly, buyers and appraisers treat it as the expected standard. A full-home central system reads as &apos;move-in ready.&apos;</p>
            <p>Mini-splits recover a similar 30–45% but carry a perception penalty in some markets — visible wall units and multiple outdoor condensers can read as a workaround to buyers who don&apos;t understand them. For whole-home coverage in a mid-to-high-end market, central air protects value better.</p>


            <h2>When Ducts Win — and When They Don&apos;t</h2>
            <p>Central air wins if: you have sound existing ductwork, you&apos;re covering the entire home, or you&apos;re in a market where central air is the assumed baseline. In those cases the verdict flips and mini-splits become the more expensive, harder-to-sell choice.</p>
            <p>Mini-splits win if: you have no ducts, you&apos;re cooling an addition, garage, sunroom, or attic conversion, you want room-by-room zoning, or your home has boiler/radiator heat and no air handling at all. For targeted problems, mini-splits are unbeatable — a single-zone unit for one hot room costs $3,000–$5,000 versus rebuilding an entire duct system.</p>
            <p>The tipping point is coverage plus ducts. Whole-home with ducts: go central. Anything else: go ductless.</p>


            <h2>Before You Commit</h2>
            <p>The right answer hinges on an accurate load calculation and an honest inspection of your existing ductwork — two things a good contractor delivers and a bad one skips. Get quotes for both options so you can see the ductwork line item for yourself, then decide with the real numbers in front of you.</p>
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
