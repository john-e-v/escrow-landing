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
          <h1>The Final Invoice Came in $8K Over the Contract. Escrow Meant It Didn&apos;t Get Paid.</h1>
          <p className="hero-subtitle">A homeowner&apos;s contractor tacked $8,000 of unapproved &apos;extras&apos; onto the final invoice and expected a wire on the spot. Because the money sat in escrow tied to the signed scope, the padded bill never cleared—and the dispute got settled before a dime moved.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$8,000. That&apos;s what the final invoice came in over the signed contract price—and not one dollar of it moved.</p>
            <p>The homeowner, we&apos;ll call her Dana, had a $62,000 kitchen and bathroom remodel. Signed scope, itemized. The job wrapped mostly on time, the tile looked great, and then the contractor handed over a final invoice for $70,100. The extra $8,000 was labeled, vaguely, as &apos;additional framing, material overages, and site conditions.&apos; No change orders. No signatures. No prior conversation. Just a number and an expectation that Dana would wire it that afternoon so the crew could &apos;close out.&apos;</p>
            <p>Here&apos;s why she didn&apos;t have to fight about it in the moment: the money was already in escrow, tied to the signed scope. There was nothing to wire. The funds released against agreed milestones—not against whatever total showed up on the last piece of paper.</p>


            <h2>Why the timing usually favors the padded invoice</h2>
            <p>In a normal handshake job, the leverage flips at the very end. The work is done. The homeowner wants their house back, the crew wants to be paid, and the final invoice arrives at the exact moment the homeowner has the least room to argue. Push back and you risk a lien, a walk-off, or a punch list that never gets finished.</p>
            <p>That pressure is the whole reason surprise &apos;extras&apos; show up at closeout instead of when the work is actually decided. It&apos;s not always malice—sometimes a contractor genuinely ate cost on a bad wall—but the mechanism is the same either way: present the number when the other side can least afford to say no.</p>
            <p>Dana didn&apos;t feel that pressure, because the person holding the money wasn&apos;t her. The escrow held the balance against defined milestones, and &apos;unbudgeted framing&apos; wasn&apos;t one of them.</p>
            <blockquote className="article-quote">
              I kept waiting to feel cornered, and the feeling never came. There was no check to write, so there was nothing to threaten me over.
              <cite>— homeowner, kitchen and bath remodel</cite>
            </blockquote>


            <h2>What actually happened to the $8K</h2>
            <p>The contractor submitted the disputed amount for release. Dana declined it, because there was no approved change order backing it. That declination didn&apos;t cancel the job or freeze the legitimate final payment—the contracted balance released cleanly on schedule. Only the padded $8,000 sat still.</p>
            <p>Then the conversation happened the way it should have happened weeks earlier. The contractor produced receipts for about $2,100 in genuine material overage on a subfloor rot issue nobody could&apos;ve seen. That was real, documented, and reasonable. Dana approved a change order for it. The other ~$5,900—&apos;site conditions,&apos; unexplained framing—evaporated the second someone had to justify it in writing.</p>
            <p>Settled figure: $2,100, not $8,000. And the crucial part is that the dispute got resolved before any money moved, not clawed back after.</p>


            <h2>The quiet part</h2>
            <p>Escrow didn&apos;t accuse anyone of anything. It didn&apos;t assume the contractor was a crook—because most aren&apos;t. What it did was strip the timing advantage out of the final invoice. It turned &apos;wire me this now&apos; into &apos;show me why,&apos; which is the only question that ever needed asking.</p>
            <p>The legitimate overage got paid. The invented one didn&apos;t. Nobody had to sue, nobody had to lien, and nobody had to eat a number they never agreed to just to make the awkwardness stop.</p>
            <p>If you&apos;re a homeowner about to hand real money to real people for real work, the smartest thing you can do is decide—before the job starts—that payment follows the signed scope and nothing else. Set that up once, and the $8,000 surprise never has anywhere to land.</p>
          </div>

          <div className="article-footer">
            <Link href="/guides" className="article-back">← Back to Guides</Link>
            <a href="/create" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>Set up your project scope →</a>
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
