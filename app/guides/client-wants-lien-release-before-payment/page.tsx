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
          <div className="hero-badge">Contractor Ops · August 2026</div>
          <h1>The Client Wants the Lien Release Signed Before They Pay: Why That&apos;s Backwards</h1>
          <p className="hero-subtitle">A client asking you to sign a lien waiver before the check clears is asking you to give up your only leverage for free. Sign it after payment funds, or structure the exchange so both happen at once.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Never sign an unconditional lien waiver before the payment it covers has actually funded. Sign a conditional waiver instead — one that only takes effect when the check clears — or structure the exchange so the signature and the money change hands at the same moment.</p>
            <p>That&apos;s the operational fix. Everything below is why the sequence matters and how to hold the line without blowing up the relationship.</p>


            <h2>What the waiver actually does</h2>
            <p>A lien waiver is you giving up your right to file a mechanic&apos;s lien on the property for the work covered by that payment. The lien is the single strongest collection tool you have. It attaches to the property itself, it clouds title, and it forces the money to eventually come to you if the property ever sells or refinances.</p>
            <p>When a client asks you to sign an unconditional waiver before they pay, they&apos;re asking you to hand over that right for free. If the check never comes — or bounces, or they cut it for less than agreed — you&apos;ve already released your claim. You&apos;re now an unsecured creditor chasing a promise instead of a lienholder with a legal grip on the asset.</p>
            <blockquote className="article-quote">
              An unconditional waiver signed before payment turns your strongest collection tool into a piece of paper you gave away.
              <cite>— construction payment attorney, general principle</cite>
            </blockquote>


            <h2>The two-waiver system that exists for exactly this</h2>
            <p>Most states recognize two flavors: conditional and unconditional. A conditional waiver says &quot;this release is only effective once I actually receive and clear the payment described.&quot; An unconditional waiver says &quot;I release my rights, full stop, regardless of whether I got paid.&quot;</p>
            <p>So when a client insists on a waiver before they pay, you don&apos;t have to refuse — you hand them a conditional one. They get their signed document for the file and the lender. You keep your lien rights until the money is real. Once it clears, you send the unconditional release. That&apos;s the correct order, and it&apos;s standard enough that any legitimate GC, owner, or title company will recognize it.</p>


            <h2>Why &apos;they need it for the draw&apos; isn&apos;t your problem to solve for free</h2>
            <p>The usual pressure is that the client needs your signed waiver to release their own draw from the lender. Fine — that&apos;s a real constraint. But it&apos;s a timing problem, and timing problems get solved with structure, not with you eating the risk.</p>
            <p>The clean version: your conditional waiver satisfies the lender&apos;s paperwork, the draw funds, and the payment to you is released in the same cycle. You&apos;re releasing rights against money that is moving toward you on a defined schedule — not against a vague future intention. If the client can&apos;t or won&apos;t put the payment on a defined schedule tied to the release, that hesitation is telling you something about how the final payment is going to go.</p>


            <h2>The structural fix: make signature and money simultaneous</h2>
            <p>The reason this whole standoff exists is that the signature and the payment are two separate events with a gap between them, and whoever moves first is exposed. Eliminate the gap and the argument disappears.</p>
            <p>Milestone-based escrow does this by design. The client funds the milestone amount up front into a holding account. The work gets done and verified. The release of funds to you and the release of your lien rights happen against the same trigger, at the same time. Nobody signs into a void. Nobody pays into a promise. The order-of-operations fight — the one that starts with &quot;sign this first&quot; — never happens, because there&apos;s no first. Both sides are covered by the same mechanism.</p>
            <p>If you&apos;re tired of relitigating the payment sequence on every job, structuring it this way from the contract stage is the fix.</p>
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
