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
          <div className="hero-badge">Hidden Cost · September 2026</div>
          <h1>The Contractor Left a Full Dumpster in Your Driveway. Now the Rental Company Bills You.</h1>
          <p className="hero-subtitle">A contractor rented the dumpster in his name, filled it, then vanished before hauling it away. Six weeks later the homeowner is fielding overage fees, daily rental charges, and a lien threat for a contract they never signed.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$1,840. That&apos;s the final bill the homeowner in Aurora paid for a dumpster she never rented, never filled, and never agreed to keep for six weeks.</p>
            <p>Here&apos;s what happened. She hired a contractor for a bathroom and mudroom demo — a $9,400 job. On day one he pulled a 20-yard roll-off dumpster into the driveway. It went in under his name, his account with the rental company, his card on file. Standard. Contractors rent debris containers constantly; it&apos;s easier than making the homeowner do it.</p>
            <p>The demo happened. The dumpster filled. Then the contractor stopped answering. He&apos;d taken a $4,500 deposit, done maybe 40% of the work, and moved on to a job that paid faster. The dumpster sat.</p>


            <h2>Why the bill lands on the homeowner</h2>
            <p>Rental companies charge by the day after the included window — usually 7 to 10 days. This container sat for 44. At roughly $12/day in extended rental fees, that&apos;s over $400 before anyone touches the debris.</p>
            <p>Then the overage. A 20-yard container is rated to a tonnage cap — typically 2 to 4 tons. Bathroom demo is heavy: tile, mortar, cast iron, wet drywall. She was 1.8 tons over at $95/ton. Add the haul-away and dump fee the contractor never triggered because he never called for pickup.</p>
            <p>The contractor&apos;s card on file? Declined. Account closed. So the rental company did what rental companies do: they went after the property. The dumpster was on her land, the debris was from her house, and in their view she&apos;d benefited from the service. When she refused, they sent a notice of intent to file a mechanic&apos;s lien.</p>
            <blockquote className="article-quote">
              The container&apos;s in your name until it&apos;s hauled. If the renter vanishes, the company chases the address, not the ghost. Homeowners find out the hard way that &apos;not my contract&apos; doesn&apos;t stop a lien filing.
              <cite>— Construction attorney, on third-party rental liability</cite>
            </blockquote>


            <h2>The part nobody warned her about</h2>
            <p>She could have fought the lien — and probably won, since she never signed the rental agreement. But fighting means a response deadline, possibly a lawyer, and a cloud on her title while it&apos;s pending. Refinancing or selling with a pending lien is a nightmare. Most people in her position just pay to make it disappear. She paid.</p>
            <p>The deeper problem: she&apos;d already handed the contractor $4,500 for work worth maybe $3,800. He was cash-positive on her job the moment he cashed the deposit. He had zero financial reason to come back, call for a dumpster pickup, or finish. The incentive to disappear was baked in on day one.</p>


            <h2>What actually prevents this</h2>
            <p>The fix isn&apos;t &apos;vet your contractor better&apos; — she checked reviews and a license. The fix is structural: the contractor should never be cash-ahead on unfinished work.</p>
            <p>Under a milestone escrow arrangement, her money sits in a neutral account and releases only as defined stages complete. Demo done and container hauled? Release that milestone. Rough-in inspected? Release the next. A contractor who walks after demo gets paid for demo — nothing more — and has a direct financial reason to close out every open item, including calling the rental company for pickup, because the next release depends on the site being clean and staged for the following phase.</p>
            <p>When the money is tied to completion instead of arrival, disappearing stops being profitable. The dumpster gets hauled because getting paid requires it. That&apos;s the whole difference between a $1,840 surprise and a job that simply moves forward.</p>
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
