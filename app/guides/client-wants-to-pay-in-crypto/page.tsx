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
          <div className="hero-badge">Payment Ops · September 2026</div>
          <h1>The Client Wants to Pay in Crypto: Why That&apos;s Not a Payment Until It Clears</h1>
          <p className="hero-subtitle">Crypto payments look modern, but they carry volatility risk, no chargeback protection you control, and settlement lag that can leave you holding the loss. Here&apos;s why a milestone-based escrow structure protects your cash better than any wallet transfer.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>A crypto transfer that hasn&apos;t cleared is not a payment. It&apos;s a promise with a price tag that changes while you wait.</p>
            <p>Here&apos;s the operational rule: don&apos;t mark an invoice paid until the funds are irreversibly settled in an asset you can spend. Until then, you&apos;ve accepted a receivable — one that can lose value, reverse, or vanish before it becomes money you can use. If a client says &quot;I sent it,&quot; that&apos;s a status update, not a settlement.</p>


            <h2>The three risks you&apos;re actually taking on</h2>
            <p>Volatility is the obvious one. If you agree to $12,000 worth of a coin and it drops 9% before you convert to fiat, you just gave a discount you never negotiated. On a thin-margin job, that swing is your profit. You did the work; the market took the pay.</p>
            <p>Settlement lag is the quieter problem. Network confirmations, exchange holds, and off-ramp delays mean the &quot;instant&quot; transfer can take hours or days to become spendable dollars. During that window, you carry the exposure. If it crashes mid-transit, you eat it.</p>
            <p>And the chargeback story is backwards from what clients tell you. Crypto is often sold as &quot;no chargebacks,&quot; which sounds great — until you realize it also means no dispute leverage for you. If the client sends the wrong amount, sends to a wrong address, or claims fraud through their exchange, you have no protocol that guarantees you get made whole. Irreversibility protects whoever holds the coins, and that&apos;s not always you.</p>
            <blockquote className="article-quote">
              The problem was never getting paid in crypto. It was calling it &apos;paid&apos; before it cleared, then finding out the number moved.
              <cite>— GC who took a partial crypto deposit on a remodel</cite>
            </blockquote>


            <h2>The structural fix: milestone escrow</h2>
            <p>The reason a wallet transfer feels risky is that it collapses two separate events — funding and release — into one moment you don&apos;t control. Escrow splits them back apart, and that&apos;s the whole fix.</p>
            <p>Here&apos;s how it works structurally. The client funds the full milestone amount into escrow before you start the phase. The amount is locked to the agreed value — denominated in the currency you actually price in — so a market swing during the job doesn&apos;t rewrite your contract. You do the work. When the milestone is verified, the funds release. You never front labor and materials against money that only exists as a pending transaction.</p>
            <p>That sequence kills all three risks at once. Volatility is neutralized because the value is fixed at funding, not at some fuzzy conversion moment later. Settlement lag stops mattering because the money was already confirmed and held before you lifted a tool. And the dispute problem inverts in your favor — instead of chasing a client who already has the deliverable, you hold verified funds and release on completion.</p>


            <h2>What this changes about how you quote</h2>
            <p>Once payment is structured this way, the crypto-versus-fiat question stops being scary. You&apos;re no longer betting on a coin or hoping a transfer finalizes. You&apos;re working against money that&apos;s confirmed, locked to your agreed number, and staged to release as you hit checkpoints.</p>
            <p>Break the job into milestones — deposit, rough-in, completion, whatever fits the scope. Each one funds before it starts and releases when it&apos;s done. The client gets proof their money is committed. You get proof you&apos;ll be paid for work you&apos;re about to perform. Nobody is trusting a screenshot.</p>
            <p>That&apos;s the difference between accepting a modern payment method and taking on a modern liability. The method isn&apos;t the problem. Getting paid before the value moves out from under you is the point.</p>
            <p>If you want to see how milestone-based escrow lines up against the way you already run jobs and bill clients, it&apos;s worth walking through the structure before your next deposit.</p>
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
