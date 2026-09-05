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
          <h1>How Much Does a Fireplace Installation Cost in 2026?</h1>
          <p className="hero-subtitle">A new fireplace runs $2,500 to $12,000 installed in 2026, but the type you pick swings that range hard. Gas, wood-burning, and electric each carry wildly different labor, venting, and permitting costs.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>A new fireplace runs $2,500 to $12,000 installed in 2026 — and the type you pick swings that range harder than anything else on the invoice. An electric insert can land near the bottom at $2,500, a mid-range gas unit sits around $5,500 to $8,000, and a full masonry wood-burning fireplace with a new chimney can blow past $12,000 before you&apos;ve bought a single log.</p>
            <p>That&apos;s a 5x spread on the same line item. Here&apos;s exactly what pushes you toward one end or the other.</p>


            <h2>The Fuel Type Sets the Floor and the Ceiling</h2>
            <p>Electric is the cheapest because it&apos;s basically an appliance — you plug it in, maybe add a dedicated circuit ($300–$800), and skip venting entirely. Total jobs often land $2,500 to $4,500.</p>
            <p>Gas is the middle. A direct-vent gas fireplace costs $3,500 to $6,000 for the unit, plus $1,500 to $3,000 to run a gas line and punch venting through a wall or roof. No gas line already at the wall? Add $500 to $2,000 depending on how far the plumber has to run it.</p>
            <p>Wood-burning is the ceiling. A prefab (zero-clearance) firebox with a metal chimney runs $5,000 to $9,000 installed. A true site-built masonry fireplace with a brick chimney is $8,000 to $12,000+ — because you&apos;re paying a mason, not just a installer, and the labor is measured in days, not hours.</p>
            <blockquote className="article-quote">
              The unit price is the part homeowners fixate on. The venting and the chimney are what actually decide your final number.
              <cite>— Fireplace installer, 14 years in the trade</cite>
            </blockquote>


            <h2>Why the Range Is So Wide</h2>
            <p>**Venting and chimney work.** This is the single biggest wildcard. Running a vent through an exterior wall is cheap. Routing it up through two floors and a roofline, adding a chimney chase, and flashing it weathertight can add $2,000 to $4,000. Retrofitting into a home with no existing chimney is always more than a like-for-like replacement.</p>
            <p>**Structural and finish work.** Framing out a new opening, adding a mantel, hearth tile, stone surround, or a floor-to-ceiling accent wall can each add $500 to $3,000. The fireplace itself might be $4,000 while the surround is another $4,000.</p>
            <p>**Permitting and inspection.** Gas and wood-burning installs almost always require a permit and inspection. Permit fees range from $100 to $500, but the real cost is regional — some jurisdictions require licensed gas fitters and separate mechanical inspections that stretch the timeline and the labor bill.</p>
            <p>**Region and labor market.** A gas fitter in a rural county bills very differently than one in a coastal metro. Labor alone can vary 40% or more between markets for the identical scope.</p>


            <h2>How Long It Takes</h2>
            <p>Timeline tracks cost. An electric insert is a same-day job — often 2 to 4 hours. A direct-vent gas fireplace typically takes 1 to 2 days once materials are on site, plus a wait for the inspection to clear before final use.</p>
            <p>A masonry wood-burning fireplace is a 3-to-7-day project, sometimes longer if weather affects chimney work or if the permit and inspection cycle adds a week of waiting between framing and finish.</p>
            <p>Budget an extra 2 to 4 weeks on the front end for permitting in stricter jurisdictions — that&apos;s calendar time, not labor time, but it&apos;s the part that surprises people planning around a holiday deadline.</p>


            <h2>Getting an Honest Number</h2>
            <p>The only way to tighten a $2,500-to-$12,000 range into a real quote is to have someone walk your space and see what&apos;s behind the wall — because the venting path, the existing gas access, and your local permit rules do most of the math for you.</p>
            <p>When you&apos;re comparing bids on a job this size, it&apos;s worth having your payment held safely until the work passes inspection.</p>
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
