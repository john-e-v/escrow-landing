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
          <div className="hero-badge">Cost &amp; Timeline · September 2026</div>
          <h1>How Much Does Sod Installation Cost in 2026?</h1>
          <p className="hero-subtitle">Sod installation runs $0.90 to $2.50 per square foot installed in 2026, or roughly $2,000 to $8,000 for a typical yard. Grass type, site prep, and delivery distance are what stretch that range wide.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Sod installation runs $0.90 to $2.50 per square foot installed in 2026, or roughly $2,000 to $8,000 for a typical 3,000-square-foot yard. Most homeowners land near $1.40 per square foot once you factor in grass type, delivery, and basic site prep.</p>
            <p>That&apos;s a wide range, and it&apos;s not padding. The difference between the low end and the high end usually comes down to three things: what kind of grass you&apos;re laying, how much work your soil needs before the sod ever touches it, and how far the pallets have to travel to reach you.</p>


            <h2>What Grass Type Does to the Number</h2>
            <p>Grass alone can swing your material cost by 3x. Bermuda and Kentucky bluegrass sit at the affordable end, often $0.30 to $0.45 per square foot for the sod itself. Zoysia and premium St. Augustine varieties push $0.60 to $0.85, because they&apos;re slower-growing and harder for farms to produce at volume.</p>
            <p>Region matters here too. If you&apos;re buying grass that isn&apos;t commonly farmed near you, you&apos;re paying to ship a perishable product. A cool-season grass in a warm-season market — or vice versa — can quietly add hundreds to your bill before installation even starts.</p>
            <blockquote className="article-quote">
              People assume the price is the sod. Half the time the price is the dirt underneath it.
              <cite>— Landscape installer, Georgia</cite>
            </blockquote>


            <h2>Site Prep Is the Hidden Multiplier</h2>
            <p>Rolling out sod onto ready soil is cheap and fast. The expensive part is getting the soil ready. If your yard needs old grass killed and stripped, that&apos;s labor. If it needs grading so water drains away from your foundation, that&apos;s a machine and an operator. If your soil is compacted clay or sandy fill, you&apos;re buying topsoil and amendments by the cubic yard.</p>
            <p>A flat, clean lot might need $200 in prep. A sloped yard full of dead turf, rocks, and drainage problems can need $1,500 to $3,000 before a single roll goes down. This is the single biggest reason two neighbors get quotes that are thousands of dollars apart for the same square footage.</p>


            <h2>Delivery, Region, and the Labor Market</h2>
            <p>Sod is heavy and it dies fast, so delivery distance is priced in aggressively. Farms within 30 miles are cheap to source from. Anything beyond that adds freight and urgency — sod that sits on a truck too long is a warranty problem nobody wants.</p>
            <p>Labor rates finish the equation. In a high-cost metro with a tight construction labor market, an installer&apos;s crew time might run $0.60 to $0.90 per square foot. In a rural area with slack labor, the same work runs closer to $0.30. Permitting rarely applies to sod itself, but if grading disturbs drainage or you&apos;re near a protected area, a permit or inspection can tack on a few hundred dollars.</p>


            <h2>Getting a Number You Can Trust</h2>
            <p>The honest way to price your project is to have someone walk the yard, measure the real square footage, and look at the soil. A quote built on a phone-call estimate almost always changes once prep gets factored in — and that&apos;s where surprise costs live.</p>
            <p>If you&apos;d rather compare real quotes side by side without chasing crews, it helps to work with contractors who put your payment in escrow until the work is done and the grass is actually rooting.</p>
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
