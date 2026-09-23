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
          <div className="hero-badge">Vetting &amp; Protection · September 2026</div>
          <h1>State License Isn&apos;t Enough: How to Check Your City&apos;s Contractor Requirements Too</h1>
          <p className="hero-subtitle">A valid state license doesn&apos;t mean a contractor is legal to work in your city. Many municipalities require separate local registration, business licenses, or trade permits that state boards never track.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>1. Ask for the state license number and verify it yourself. Don&apos;t accept a photo of a card. Go to your state contractor board&apos;s website (search &quot;[your state] contractor license lookup&quot;), type in the number, and confirm the name matches, the status is &quot;active,&quot; and there are no suspensions or disciplinary actions listed.</p>
            <p>2. Call your city or county building department and ask one question: &quot;Does a contractor need a local business license or registration to legally work here?&quot; Write down the answer and the name of who told you.</p>
            <p>3. Request the contractor&apos;s local business license or municipal registration number. In many cities this is separate from the state license and is what actually authorizes them to pull permits inside city limits.</p>
            <p>4. Ask which permits your specific job requires — and who pulls them. A legitimate contractor names the permits without hesitation and pulls them under their own license. If they want you to pull the permit as the homeowner, that&apos;s a signal they can&apos;t.</p>


            <h2>Why the State License Passes While the Local One Fails</h2>
            <p>State boards license the trade. Your city licenses the business. These are two different systems that don&apos;t talk to each other. A contractor can hold a spotless state license and still be completely unregistered in your municipality — which means when the permit gets flagged, the fine, the stop-work order, and the re-inspection cost land on you.</p>
            <p>Many cities also require a local trade permit or a home-improvement registration that the state never sees. A contractor who works two towns over may simply have never registered in yours.</p>
            <blockquote className="article-quote">
              The state license told me he was legal. Nobody told me the city required a separate registration until the inspector red-tagged the job.
              <cite>— homeowner, mid-project permit denial</cite>
            </blockquote>


            <h2>Documents to Request Before You Sign Anything</h2>
            <p>5. Certificate of insurance — sent directly from the insurance company or agent, not a PDF forwarded by the contractor. Confirm general liability and workers&apos; comp are active for the dates of your project.</p>
            <p>6. Proof of bonding, if your state or city requires it. Ask for the bond number and the issuer.</p>
            <p>7. A written scope of work with a payment schedule tied to milestones — not a lump sum due up front.</p>
            <p>8. References from two jobs completed in the last six months, ideally in your same city so you know they&apos;ve worked under your local rules.</p>


            <h2>Cross-Check the Business Itself</h2>
            <p>9. Search the business name on your Secretary of State&apos;s website to confirm it&apos;s a registered entity in good standing.</p>
            <p>10. Search the exact business name plus &quot;complaint&quot; and plus &quot;lawsuit.&quot; Also check your state board&apos;s disciplinary records and your local court&apos;s civil case lookup for unpaid subcontractors or mechanic&apos;s liens.</p>
            <p>11. Confirm the address is real. A business that only has a P.O. box and a cell number is harder to hold accountable when something goes wrong.</p>


            <h2>The One Red Flag That Shows Up in Almost Every Bad Hire</h2>
            <p>A large deposit demanded before any work begins.</p>
            <p>Almost every homeowner who gets burned describes the same opening move: the contractor asks for a big chunk of money up front — often &quot;for materials&quot; — before the first permit is pulled or the first board is cut. Legitimate contractors have supplier accounts and cash flow; they don&apos;t need you to fund their operation before they&apos;ve done anything. A demand for heavy money before work starts is the single most reliable warning sign that you&apos;re about to lose it.</p>
            <p>The cleanest protection against that trap is refusing to pay real money until real work is done — and using escrow so your funds only release when milestones are actually met.</p>
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
