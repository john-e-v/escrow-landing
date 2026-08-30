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
          <div className="hero-badge">Escrow Effect · August 2026</div>
          <h1>The Electrician Buried Undersized Wire in the Wall. Escrow Meant the Homeowner Didn&apos;t Pay for a Fire Hazard.</h1>
          <p className="hero-subtitle">A homeowner&apos;s panel upgrade passed the eye test until the inspector flagged 14-gauge wire feeding a 20-amp circuit. Because payment sat in escrow tied to inspection sign-off, the homeowner had leverage to force the fix instead of eating a rewire.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$0. That&apos;s what the homeowner paid to have a fire hazard removed from inside their walls.</p>
            <p>The panel upgrade looked flawless. New breakers, clean labeling, a service that had been running lights and outlets for three days without a hiccup. Every visible sign said the job was done and done well. Then the inspector pulled the panel cover and traced a run of 14-gauge wire feeding a 20-amp circuit.</p>
            <p>That&apos;s not a paperwork problem. That&apos;s a wire that can carry less current than the breaker protecting it is designed to allow. Under enough load, the breaker holds while the undersized conductor cooks inside the wall. It passed the eye test precisely because the failure was buried where no one looks until something smells like burning plastic.</p>


            <h2>The moment that usually goes wrong</h2>
            <p>Here&apos;s how this story normally ends. The work looks finished, the contractor asks for the balance, and the homeowner pays because everything on the surface checks out. The inspector shows up later, flags the wire, and now the money is already gone. The leverage evaporated the instant the check cleared.</p>
            <p>At that point the homeowner has two bad options: chase a contractor who already got paid and has no reason to come back, or hire someone new to open the walls and rewire a circuit that never should have failed inspection. Either way, they eat the cost of a mistake they didn&apos;t make.</p>
            <p>That&apos;s the exact trap this homeowner didn&apos;t fall into.</p>
            <blockquote className="article-quote">
              Once the money&apos;s out of your hands, you&apos;re not a customer anymore. You&apos;re a phone call they can decline.
              <cite>— residential inspector, 18 years</cite>
            </blockquote>


            <h2>Why the fix happened instead</h2>
            <p>The payment for this job never left escrow. It was tied to a single, non-negotiable condition: passing final inspection. Not the contractor&apos;s word that it passed. The actual sign-off.</p>
            <p>So when the inspector flagged the 14-gauge wire, nothing had been released. The contractor wasn&apos;t arguing with an unhappy customer holding a grudge — he was looking at his own payment sitting on the other side of a correction he had to make. The incentive pointed the right direction for the first time in the whole transaction.</p>
            <p>He pulled the undersized run, replaced it with 12-gauge rated for the 20-amp circuit, and called the inspector back. Second inspection passed. Escrow released. The homeowner paid the full agreed price — not a dollar more — for a job that was actually correct.</p>


            <h2>What actually did the work here</h2>
            <p>Notice what didn&apos;t happen. No shouting match. No small-claims filing. No second contractor. No opening the walls a year later after a scorch mark appeared behind an outlet.</p>
            <p>The homeowner didn&apos;t need to be an electrician to protect themselves. They didn&apos;t need to catch the undersized wire — the inspector did that. What they needed was for their money to still be theirs at the exact moment the problem surfaced. Escrow-first payment kept the leverage where it belonged until the work was proven, not just promised.</p>
            <p>The contractor got paid in full for good work. The homeowner got a safe panel for the price they agreed to. The only thing that lost was the version of this story where a fire hazard sits quietly in a wall because a check cleared too early.</p>
            <p>If you&apos;re the one hiring the work out and you want your payment to answer to the inspection instead of the invoice, that&apos;s the arrangement worth setting up before the first wire goes in.</p>
          </div>

          <div className="article-footer">
            <Link href="/guides" className="article-back">← Back to Guides</Link>
            <a href="/create" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>Set up an escrow-backed project →</a>
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
