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
          <h1>Is Adding a Second Bathroom Worth It? Cost, Resale Value, and When It Doesn&apos;t Pay</h1>
          <p className="hero-subtitle">Adding a second bathroom is usually worth it when your home has only one — the resale bump and daily livability both pay off. But the math flips when you&apos;re carving space out of a bedroom or fighting a plumbing run that triples the cost.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Yes — adding a second bathroom is worth it if your home currently has only one, and it flips to &quot;not worth it&quot; the moment you&apos;re stealing square footage from a bedroom or extending plumbing more than a few feet from an existing line.</p>
            <p>That&apos;s the whole verdict. The rest is the math that proves it and the single condition that reverses it.</p>


            <h2>The Math When You Go From One Bath to Two</h2>
            <p>A second bathroom added to a one-bath home typically costs $15,000 to $35,000 for a full bath, or $5,000 to $15,000 for a half bath (toilet and sink, no shower). The wide range comes down to whether you&apos;re building within existing space or adding square footage.</p>
            <p>At resale, bathroom additions recover roughly 50% to 60% of their cost in added home value — but that percentage understates the real gain when you&apos;re moving from one bath to two. Listings jump from &quot;1 bath&quot; to &quot;2 bath,&quot; a filter threshold that changes how many buyers even see your home. Appraisers and agents consistently note that the one-to-two jump adds more value than two-to-three or three-to-four.</p>
            <p>Payback timeline: if you recover 55% at resale and enjoy years of a second bathroom in the meantime, the effective cost of daily livability is $6,000 to $15,000 spread across your ownership — which most one-bath households consider a bargain against the morning-traffic-jam alternative.</p>
            <blockquote className="article-quote">
              The one-to-two bathroom jump is the single most reliable resale improvement I see. Two-to-three barely moves the needle by comparison.
              <cite>— residential appraiser, 15+ years</cite>
            </blockquote>


            <h2>Where the Verdict Flips</h2>
            <p>The math breaks in two specific situations.</p>
            <p>First: carving the bathroom out of a bedroom. If your home is a 3-bed/1-bath and you convert a bedroom into a bathroom, you&apos;ve made it a 2-bed/2-bath — and dropping below three bedrooms can cost you more resale value than the bathroom adds. The bathroom gains you 55%; losing the bedroom count can erase all of it and then some in family-home markets.</p>
            <p>Second: the plumbing run. A bathroom placed near existing water and drain lines — back-to-back with a current bath, or directly above/below one — keeps you in the $15,000 range. But if you&apos;re running new supply lines and a new drain stack across the house, breaking through a slab foundation, or upgrading the main to handle another fixture group, the cost can triple to $40,000 or more. At that price the 55% recovery rate means you&apos;re eating $18,000+ in unrecovered cost, and the deal stops making financial sense unless livability alone justifies it.</p>


            <h2>Quick Gut Check</h2>
            <p>Worth it: one-bath home, unused space (closet, oversized hallway, corner of a basement or garage), and existing plumbing within about 15 feet.</p>
            <p>Not worth it: you&apos;d drop below three bedrooms, or the nearest drain line is on the far side of the house.</p>
            <p>Before committing, get real numbers from someone who has actually opened the walls in a house like yours — the plumbing distance is the variable that decides everything, and it&apos;s the one you can&apos;t eyeball from a spreadsheet.</p>
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
