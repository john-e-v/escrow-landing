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
          <div className="hero-badge">Payments &amp; Escrow · August 2026</div>
          <h1>The Client Handed You a Post-Dated Check: Why That&apos;s a Non-Payment in Disguise</h1>
          <p className="hero-subtitle">A post-dated check isn&apos;t a payment—it&apos;s a promise you can&apos;t cash yet, and it hands the client a two-week window to change their mind. Here&apos;s why accepting one puts you back at square one, and the payment structure that removes the gap entirely.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Don&apos;t deposit it. A post-dated check dated two weeks out is not a payment—it&apos;s a written promise with a fuse on it, and the fuse gives the client fourteen days to stop the check, close the account, or decide your finish work &quot;wasn&apos;t quite right.&quot;</p>
            <p>Here&apos;s the operational reality most contractors learn the hard way: when a client hands you a post-dated check at final walkthrough, they&apos;ve reframed the entire transaction. You think the job is closed. They think the negotiation just reopened. And they&apos;re right, because you now hold a piece of paper you legally cannot cash yet—which means you&apos;ve released the work, released your leverage, and taken nothing back in return.</p>


            <h2>Why the two-week gap is the whole problem</h2>
            <p>The gap between &quot;work delivered&quot; and &quot;funds cleared&quot; is where non-payment lives. A same-day check has a small gap. A post-dated check has a deliberate one.</p>
            <p>During those two weeks, anything the client wants to renegotiate becomes your problem, not theirs. A hairline crack they didn&apos;t notice. A cabinet pull that&apos;s slightly off. A neighbor who mentioned they &quot;paid less for the same thing.&quot; Every one of these becomes a reason to call the bank before the date hits. You&apos;ve already demobilized. Your crew is on the next job. And now you&apos;re driving back across town to argue about a $400 punch-list item that&apos;s holding your $18,000 check hostage.</p>
            <p>A post-dated check also tells you something you should take seriously: the client does not have the money available today. If they did, they&apos;d write a check dated today. The future date is an admission that the funds aren&apos;t there yet—and you&apos;re being asked to finance the gap with your own completed labor as collateral.</p>
            <blockquote className="article-quote">
              If the money were sitting in the account, the check would be dated today. The future date is the client telling you it isn&apos;t.
              <cite>— Common lesson from contractors who&apos;ve eaten a bounced final payment</cite>
            </blockquote>


            <h2>The structural fix: fund the money before the work, release it at the milestone</h2>
            <p>The reason the post-dated check works against you is timing—the payment is promised after the work is delivered. Flip that and the problem disappears.</p>
            <p>Milestone escrow reverses the order of operations. Before you start a phase, the client funds that phase into a held account. You don&apos;t see the money yet, but neither can they spend it, stop it, or change their mind about it. When you complete the milestone and it&apos;s approved, the funds release. There&apos;s no fourteen-day window, because the money was already committed before your crew ever showed up.</p>
            <p>This does two things at once. It confirms the client actually has the funds—no more &quot;future-dated&quot; promises standing in for cash. And it removes the client&apos;s ability to renegotiate after delivery, because the leverage they used to have (holding an uncashed check) no longer exists. The money is staged. Approval releases it. Done.</p>
            <p>Run the numbers on your last three jobs. Every payment that arrived late, bounced, or turned into a punch-list standoff shares the same shape: work went out the door before money was secured. Escrow closes that shape entirely by putting the funding step first and the release step at each completed milestone—not two weeks after you&apos;ve packed up and left.</p>


            <h2>What to do the next time a post-dated check comes out</h2>
            <p>Treat it as a signal, not an insult. The client isn&apos;t necessarily trying to stiff you—they may simply not have the liquidity on the date you finished. That&apos;s fine. It just means the payment structure needs to move upstream.</p>
            <p>Instead of accepting a check you can&apos;t cash, you set the terms before the work starts: funds staged per milestone, released on approval. It protects them too—they&apos;re not paying for anything until it&apos;s actually delivered and signed off. Nobody&apos;s floating anybody.</p>
            <p>If you want to see how milestone-based payment terms are built into contractor workflows so you stop financing your clients&apos; cash-flow gaps with your own labor, that&apos;s worth a look.</p>
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
