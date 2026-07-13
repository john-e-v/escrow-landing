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
          <div className="hero-badge">Payments &amp; Escrow · July 2026</div>
          <h1>Escrow vs. Deposit: Which One Actually Protects You From Non-Payment?</h1>
          <p className="hero-subtitle">A deposit is money you hold and hope covers you if the client walks. Escrow is money already committed to the job before you lift a hammer. This breaks down the operational difference and why one structurally prevents non-payment while the other just delays it.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>A deposit protects you for about 20% of the job. Escrow protects you for 100%. That&apos;s the whole difference, and if you&apos;ve ever eaten a final invoice on a $40k remodel, you already know which number matters.</p>
            <p>Here&apos;s the operational answer up front: stop treating deposits as your non-payment insurance. They aren&apos;t. A deposit only covers the money you&apos;ve already collected — it does nothing for the 70-80% of the contract value still sitting in the client&apos;s bank account when you&apos;re framing, wiring, or hanging cabinets. If you want to structurally remove the risk of non-payment, the funds for each phase need to be committed before you start that phase. That&apos;s escrow with milestones. Everything below is why.</p>


            <h2>What a deposit actually does</h2>
            <p>A deposit is money you hold and hope covers you if the client walks. That&apos;s it. You collect 20-30% up front, you spend most of it on materials and mobilization, and now you&apos;re carrying the rest of the job on your own cash until you invoice at the end.</p>
            <p>The problem is timing. Your exposure grows every single day you work, but your collateral stays fixed at whatever you took on day one. By the time you&apos;re at final walkthrough, you might be $30k into a $10k deposit. The client knows this. The moment a homeowner realizes they&apos;re holding all the leverage — work done, money not yet paid — is the moment &apos;I&apos;m not happy with the tile&apos; becomes a negotiating tactic instead of a punch-list item.</p>
            <p>A deposit doesn&apos;t prevent non-payment. It just delays the point where you find out you&apos;re not getting paid.</p>
            <blockquote className="article-quote">
              The deposit covered materials. The problem was the $22k of labor I&apos;d already put in the ground before the client stopped answering the phone.
              <cite>— GC, exterior renovation</cite>
            </blockquote>


            <h2>What escrow changes structurally</h2>
            <p>Escrow flips the sequence. Instead of you financing the job and chasing payment after, the client commits the funds for a milestone into a neutral account before that milestone begins. The money is already gone from their control. It releases to you when the phase is complete and verified.</p>
            <p>The key word is committed. In a deposit model, the client&apos;s remaining balance is a promise. In an escrow model, it&apos;s cash that&apos;s already left their hands. You are no longer extending credit to a homeowner you met three weeks ago. You&apos;re doing work against money that&apos;s provably there.</p>
            <p>This also kills the most common non-payment scenario: the client who can&apos;t pay, not won&apos;t pay. With a deposit, you don&apos;t discover their financing fell through until you send the final invoice. With escrow, you discover it before you order materials for the next phase — because the funds either land in the account or they don&apos;t. The failure surfaces early, while your exposure is still small.</p>


            <h2>How to run it on real jobs</h2>
            <p>Break the contract into phases that map to natural completion points — demo, rough-in, drywall, finish, punch. Each phase gets a dollar amount. The client funds phase two while you&apos;re finishing phase one, so there&apos;s never a gap where you&apos;re working unfunded.</p>
            <p>Your maximum exposure at any point drops to a single milestone instead of the entire back half of the job. If the relationship goes sideways at drywall, you walk away having been paid for everything up to drywall. No lien fight, no collections, no writing off labor.</p>
            <p>The reason most contractors don&apos;t do this isn&apos;t that they disagree — it&apos;s that setting up milestone escrow felt like a legal project. It isn&apos;t anymore. The scheduling, the phase releases, and the client-facing funding requests can run on the same platform you use to send the contract.</p>


            <h2>The verdict</h2>
            <p>A deposit is a partial hedge. Escrow with milestones is a structural fix — it removes the window where a client can hold finished work hostage against money they may or may not have.</p>
            <p>If your last three jobs each had a stretch where you were carrying more labor than you&apos;d collected, you&apos;ve already priced this problem. The next step is just deciding to stop financing your clients for free.</p>
          </div>

          <div className="article-footer">
            <Link href="/guides" className="article-back">← Back to Guides</Link>
            <a href="/master" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>See contractor plans →</a>
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
