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
          <div className="hero-badge">The Hidden Cost · September 2026</div>
          <h1>Your Contractor Took Out a Load-Bearing Wall Without an Engineer. Now the Second Floor Sags.</h1>
          <p className="hero-subtitle">A homeowner paid for an open-concept kitchen and got a sagging ceiling instead. The contractor pulled a wall without a structural engineer&apos;s sign-off, and the fix cost more than the entire original job. Here&apos;s how it happened and what would have stopped it.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$41,000. That was the final repair bill to jack up a sagging second floor after a contractor removed a load-bearing wall during a $28,000 kitchen remodel. The original job — the open-concept kitchen the homeowner actually wanted — cost less than the fix for the damage caused getting there.</p>
            <p>Here&apos;s what happened, and why it was entirely predictable.</p>


            <h2>The Timeline</h2>
            <p>The homeowner hired a general contractor in March to open up a galley kitchen into the adjacent dining room. The plan required removing a wall between the two rooms. The contractor looked at it, said &quot;that&apos;s not load-bearing,&quot; and pulled it in a single afternoon during week two of the job.</p>
            <p>It was load-bearing. The wall carried joists supporting the second-floor bedrooms. Within six weeks, the homeowner noticed a bedroom door that wouldn&apos;t latch. Then a hairline crack above the new opening. By month three, a bathroom door upstairs was scraping the frame and the floor had a visible dip near the center of the house.</p>
            <blockquote className="article-quote">
              He was so confident. He said he&apos;d done a hundred of these. I had no reason to think he was wrong until my daughter&apos;s door stopped closing.
              <cite>— the homeowner, recounting the project</cite>
            </blockquote>


            <h2>Why It Went Wrong</h2>
            <p>No structural engineer was ever consulted. In most jurisdictions, removing a load-bearing wall requires a permit, and the permit requires an engineer&apos;s stamp specifying the beam size, the type, and how the load transfers down to the foundation. The contractor skipped all of it to save time and the roughly $600–$1,200 an engineer&apos;s assessment would have cost.</p>
            <p>Without a properly sized beam and adequate posts carrying the load to the footings, the joists began to deflect under the weight they were never rebuilt to hold. The fix required a structural engineer (belatedly), a steel beam, new posts, footing work under the slab, and drywall repair on two floors. Then there was the part nobody budgets for: the homeowner had already paid the contractor 70% of the contract up front, and by the time the damage surfaced, he&apos;d stopped answering the phone.</p>


            <h2>What Would Have Prevented It</h2>
            <p>Two things, and they work together.</p>
            <p>First: any wall removal in a project should trigger a hard stop until a structural engineer confirms whether it&apos;s load-bearing and, if so, specs the beam. This isn&apos;t optional and it isn&apos;t the contractor&apos;s judgment call to make alone. A good contractor volunteers this before you have to ask.</p>
            <p>Second — and this is the part that would have saved the money — the payment structure. When a homeowner pays 70% up front, the contractor has no financial reason to slow down, get the engineer, or fix mistakes. The leverage is gone the moment the deposit clears. Under a milestone-based escrow arrangement, funds release only as verified stages complete. The structural opening would have been its own milestone, and no payment for that phase would release until the permitted, engineer-approved beam passed inspection. A contractor who cut the corner would simply not get paid for it.</p>
            <p>Escrow doesn&apos;t make a bad contractor good. It makes it impossible for a bad decision to get funded before someone catches it. That single structural change to how the money moves would have forced the engineer into the process — because there&apos;d be no way to get paid without one.</p>


            <p>The kitchen was the easy part. The load path was the job. If you&apos;re planning anything that touches a wall, the way you pay matters as much as who you hire.</p>
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
