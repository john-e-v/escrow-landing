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
          <h1>How Much Does Spray Foam Insulation Cost in 2026?</h1>
          <p className="hero-subtitle">Spray foam insulation runs $1.50 to $4.50 per board foot in 2026, with a whole-home job landing anywhere from $4,000 to $15,000. The spread comes down to open-cell vs. closed-cell foam, how much prep the crew has to do, and whether they can spray from an existing cavity or a full gut.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Spray foam insulation costs $1.50 to $4.50 per board foot in 2026, which puts a whole-home job anywhere from $4,000 to $15,000. That&apos;s a huge spread, and it&apos;s not marketing fuzz — the same house can genuinely land at either end depending on a handful of decisions you make before the crew ever shows up.</p>
            <p>Here&apos;s the short version of what you&apos;re actually paying for: the type of foam, how much access the crew has to the cavities, and how much prep and cleanup the job requires. Everything else is a rounding error next to those three.</p>


            <h2>Open-cell vs. closed-cell is the biggest lever</h2>
            <p>Open-cell foam runs roughly $1.50 to $2.50 per board foot. It&apos;s lighter, expands more, and is great for interior walls and sound dampening. Closed-cell foam runs $2.50 to $4.50 per board foot because it&apos;s denser, adds structural rigidity, and acts as its own vapor barrier — which is why it&apos;s the go-to for basements, crawl spaces, and anywhere moisture is a concern.</p>
            <p>That single choice can double your material cost on the same square footage. If a contractor quotes you a suspiciously low number, the first question to ask is which foam they&apos;re bidding.</p>
            <blockquote className="article-quote">
              People see two quotes $6,000 apart and assume someone&apos;s ripping them off. Half the time it&apos;s just open-cell versus closed-cell on the same walls.
              <cite>— Insulation contractor, 12 years in the trade</cite>
            </blockquote>


            <h2>Access changes everything</h2>
            <p>Spraying into an open cavity during new construction or a full gut renovation is fast and cheap on a per-foot basis — the crew walks in, sprays, and leaves. Retrofitting an existing finished home is where costs climb.</p>
            <p>If they have to drill, inject, and patch, or if they&apos;re working attics with low clearance and awkward angles, labor hours pile up. A tight crawl space that takes two people all day costs far more per board foot than an open garage wall, even though the material is identical. This is also why the same 1,500-square-foot job can swing $3,000 to $4,000 on labor alone.</p>


            <h2>Prep, region, and permitting</h2>
            <p>Prep is the hidden line item. Old insulation that needs removal, moisture remediation, or masking off finished surfaces all add hours. A clean, empty cavity is the cheapest thing a crew can spray.</p>
            <p>Region matters too. Labor rates in a major metro can run 30 to 50 percent higher than in a rural area, and cold-climate jobs often spec thicker closed-cell for R-value, which pushes material cost up. Permitting is usually minor for insulation alone, but if the work ties into a larger renovation, inspection requirements can add days to the timeline and a modest fee.</p>
            <p>On timeline: a straightforward whole-home spray is often a one- to two-day job. Add gut work, remediation, or a large square footage and you&apos;re looking at three to five days.</p>


            <h2>Getting a number you can trust</h2>
            <p>The best way to avoid a bad surprise is a detailed, itemized quote — foam type, board footage, prep scope, and labor broken out separately. That&apos;s the document that lets you compare two bids honestly instead of just picking the lower one and hoping.</p>
            <p>Once you know your scope, the next step is finding a contractor who&apos;ll put those terms in writing and stand behind them.</p>
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
