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
          <div className="hero-badge">Payment Fraud · September 2026</div>
          <h1>The Client &apos;Accidentally&apos; Overpaid and Wants the Difference Back: It&apos;s a Scam</h1>
          <p className="hero-subtitle">A client wires more than the deposit and asks you to refund the difference before the payment clears. Recognize the overpayment scam for what it is, and shut it down with a payment structure where money can&apos;t be clawed back after you&apos;ve refunded it.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>If a client sends you more than the agreed deposit and asks you to wire the difference back, stop. Do not refund anything. That money is not yours yet, and the request to return part of it is the entire scam.</p>
            <p>Here&apos;s the mechanic. The client &apos;accidentally&apos; overpays — a $2,000 deposit becomes a $5,200 payment. They&apos;re apologetic, maybe embarrassed, and they ask you to send back the $3,200 difference. You refund it from cleared funds in your account. A week later the original $5,200 payment reverses — the check bounces, the ACH is recalled, the card charge is disputed as fraud. You&apos;re out the $3,200 you wired, and the deposit you thought you had is gone too.</p>


            <h2>Why the overpayment is the tell</h2>
            <p>No legitimate client overpays a contractor by thousands and needs it back the same week. Businesses don&apos;t wire money by accident in round-ish figures and then get anxious about the return. The overpayment isn&apos;t a mistake — it&apos;s the setup. The urgency to refund before the deposit clears is the payload.</p>
            <p>The scam works because of a timing gap most contractors don&apos;t think about: the money shows up in your balance as &apos;available&apos; long before it&apos;s actually irreversible. A wire can look settled and still be recalled. An ACH deposit posts in a day but can be clawed back for weeks. A card payment is disputable for months. When you refund from that not-yet-final money, you&apos;re advancing your own cash against a payment that&apos;s designed to vanish.</p>
            <blockquote className="article-quote">
              The refund always has to clear faster than the original payment. That asymmetry is the whole business model of the scam.
              <cite>— Payments fraud investigator</cite>
            </blockquote>


            <h2>Shut it down with structure, not vigilance</h2>
            <p>You can try to catch every one of these by feel, but the tell isn&apos;t always this obvious, and you&apos;re busy running jobs. The durable fix is a payment structure where overpayment refunds are impossible by design.</p>
            <p>When deposits and milestones run through an escrow-style system, the client funds a specific, agreed amount — not a number they choose. There&apos;s no loose overpayment sitting in your operating account waiting to be &apos;returned.&apos; Funds are held and only release to you when the milestone is met. If a client somehow puts in more than the agreed figure, the correction happens inside the platform against held funds, never as a same-week wire out of your own pocket.</p>
            <p>That one change removes the mechanism entirely. There&apos;s no cleared-vs-uncleared gap for you to guess about, because you&apos;re never advancing your own money to cover someone else&apos;s payment. The &apos;accidental overpayment&apos; has nothing to grab onto.</p>


            <h2>The rule to run</h2>
            <p>Refunds only go back through the same channel the money came in, and only after that original payment is fully, irreversibly settled — never before. If a client resists that, or insists the difference go out to a different account or as a wire, the deal is the scam and you walk.</p>
            <p>Better still, don&apos;t hold refundable overpayments at all. If your deposit and milestone payments are structured so the client can only fund the exact agreed amount, held until work is verified, the overpayment scam never gets off the ground — and neither do the slower, quieter versions of clients clawing back money after you&apos;ve already delivered.</p>
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
