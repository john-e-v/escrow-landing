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
          <div className="hero-badge">Payment Terms · September 2026</div>
          <h1>The Client Offered to Prepay the Whole Job for a Discount: Why It Costs You Later</h1>
          <p className="hero-subtitle">A client offering to prepay the full contract for a discount sounds like a cash-flow win, but it strips your leverage and exposes you to chargebacks and scope demands. Milestone-released escrow gets you the same funded certainty without handing back margin or control.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Say no to the full prepay. Take the same money in milestones instead.</p>
            <p>That 5% discount a client wants in exchange for paying the whole job up front is not a cash-flow win. It&apos;s you selling your leverage back to the client for pennies on the dollar, and then carrying every risk on the job with none of the protection. The money feels good on day one. It costs you on day forty.</p>
            <p>Here&apos;s what actually happens when you take a lump-sum prepay.</p>


            <h2>You just became the one who owes</h2>
            <p>The moment that full payment hits your account, the power flips. You&apos;re no longer the contractor owed money for work performed — you&apos;re the party holding the client&apos;s money and owing them a finished job.</p>
            <p>Every delay, every material backorder, every weather day is now leverage against you. The client who prepaid feels entitled to hover, to add scope, to demand changes, because in their mind they&apos;ve already paid for a result and you haven&apos;t delivered it yet. You spent your best negotiating position on a 5% discount.</p>
            <blockquote className="article-quote">
              Once they&apos;ve paid in full, every conversation starts from &apos;I already gave you the money.&apos; You lose that argument before it starts.
              <cite>— Remodeling contractor, 14 years</cite>
            </blockquote>


            <h2>The chargeback window is longer than your job</h2>
            <p>If that prepay came through a card or a payment app, the client can dispute it for months — often 60 to 120 days after the charge, sometimes longer. That&apos;s a window that outlasts most jobs.</p>
            <p>So picture the job done, the client unhappy about one punch-list item, and they file a chargeback for the entire contract. Now the money you already spent on labor and materials gets clawed out of your account, and you&apos;re fighting a dispute with a processor who defaults to the cardholder. You did the work. You bought the materials. And you&apos;re the one out the full amount, defending yourself to a bank.</p>


            <h2>Discounting the prepay trains bad clients</h2>
            <p>Offering a discount for full prepayment also selects for the wrong clients. The ones who push hardest for that deal are frequently the ones most likely to squeeze scope later, because they came in optimizing for price, not for a clean working relationship.</p>
            <p>You&apos;re handing your thinnest-margin terms to the client most likely to eat your time. That&apos;s backwards. Your good clients don&apos;t need a discount to pay you — they just pay.</p>


            <h2>The fix: funded certainty without the giveback</h2>
            <p>What you actually want out of a prepay is one thing: proof the money exists so you&apos;re not financing the job out of your own pocket. You don&apos;t need the money sitting in your account to get that.</p>
            <p>Milestone-released escrow gives you the exact certainty a prepay promises, minus the downside. The client funds the full contract up front into a neutral hold, so you know the money is real before you order a single board. Then it releases to you in stages as you hit defined milestones — deposit at signing, next tranche at rough-in, balance at completion.</p>
            <p>Because the funds are committed and held, there&apos;s no chargeback to fight and no &apos;I already paid you&apos; leverage, since each release is tied to work the client has already approved. And because you&apos;re not discounting to get the money secured, you keep your full margin. The client gets the security of knowing the work is funded in stages; you get paid on schedule without handing back control or price.</p>
            <p>If you&apos;re tired of choosing between cash-flow certainty and keeping your leverage, it&apos;s worth seeing how milestone terms are structured for jobs like yours.</p>
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
