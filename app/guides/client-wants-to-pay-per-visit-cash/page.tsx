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
          <div className="hero-badge">Contractor Ops · September 2026</div>
          <h1>The Client Wants to Pay Your Crew Directly in Cash Each Day: Why That Wrecks Your Records</h1>
          <p className="hero-subtitle">A client offering to hand your crew cash at the end of each day sounds like fast payment, but it destroys your paper trail and leaves you liable for money you never controlled. Route every dollar through the business and a milestone structure instead.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Tell the client no. When they offer to hand your crew cash at the end of each day, the operational answer is that every dollar routes through your business account or the job doesn&apos;t proceed. That&apos;s not a preference — it&apos;s the only structure that keeps your records intact and your liability clean.</p>
            <p>The cash-per-day arrangement sounds efficient. No invoicing lag, no waiting on a check, your guys walk off site with money in their pockets. But you&apos;re the one who signed the contract, and you&apos;re the one the IRS, your insurer, and any future dispute will hold accountable for that money. You can&apos;t account for cash you never touched.</p>


            <h2>What the cash actually costs you</h2>
            <p>Here&apos;s the paper trail problem in plain terms. If your crew collects $800 in cash on Tuesday, that&apos;s business revenue whether it hit your account or not. You owe tax on it. You owe your subs and employees out of it. But you have no deposit, no invoice, no record showing it came in — just a client&apos;s word and your crew&apos;s memory.</p>
            <p>Now multiply that across a three-week job. At the end, the client says they paid $14,000 in cash. Your foreman thinks it was closer to $11,000. You have nothing to reconcile against because the money never passed through anything you control. That gap is now your problem, and you&apos;re arguing it with a client who already &quot;feels&quot; like they overpaid.</p>
            <p>Worse, cash handed to a worker on site blurs the line on who&apos;s actually being paid — the business or the individual. That&apos;s exactly the kind of ambiguity that turns a routine audit into a worker-classification fight, and it&apos;s the kind of thing that voids the clarity your insurance depends on.</p>
            <blockquote className="article-quote">
              If the money didn&apos;t hit an account with your business name on it, you can&apos;t prove it came in — and you still owe tax on it.
              <cite>— Common bookkeeping guidance for trade contractors</cite>
            </blockquote>


            <h2>The structural fix: milestones, not daily handoffs</h2>
            <p>The client wants to pay fast. Fine — give them a way to pay fast that still runs through your business. Replace &quot;cash at the end of each day&quot; with funded milestones tied to real progress on the job.</p>
            <p>Before work starts, the client funds the first milestone. When you hit a defined checkpoint — demo complete, rough-in done, fixtures set — that milestone releases to your business. The client still gets the speed they wanted; money moves the moment work is verified, not weeks later on a net-30 invoice. But every dollar lands in one place, with your name on it, timestamped against the work it paid for.</p>
            <p>That single change fixes everything the cash arrangement broke. Your revenue is documented. Your reconciliation is automatic — funded amount matches released amount matches deposited amount. Your crew gets paid by you, out of your account, so classification stays clean. And when the client&apos;s memory of &quot;what they paid&quot; drifts, you have the exact record, because the structure kept it for you.</p>


            <h2>Say it to the client this way</h2>
            <p>You don&apos;t have to make it a fight. &quot;I run all job payments through the business so your invoices and warranty are clean — I&apos;ll set up milestones so you&apos;re only paying as work gets done, and it clears fast.&quot; You&apos;ve given them speed and given them protection, and you&apos;ve kept control of your own books.</p>
            <p>A client who insists on paying your crew in cash off the record is asking you to carry all the risk so they can carry none. Structure the payments so the money moves fast and moves through you.</p>
            <p>If you&apos;re setting up milestone-based payment on your next job, it&apos;s worth seeing how the structure is built for contractors specifically.</p>
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
