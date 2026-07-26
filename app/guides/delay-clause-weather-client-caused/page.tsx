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
          <div className="hero-badge">Dispute-Proofing · July 2026</div>
          <h1>The Delay Clause That Protects You When the Client (or Weather) Stalls the Job</h1>
          <p className="hero-subtitle">Client-caused and weather delays cost you money and expose you to penalty claims you never earned. This is the exact delay clause and delay-notice text to put in your contract and send the day a stall starts.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Copy this into your contract before your next job:</p>
            <blockquote className="article-quote">
              DELAY CLAUSE. Contractor&apos;s schedule and completion dates assume continuous, unobstructed access to the work area and timely decisions, selections, deposits, and payments by Client. If work is delayed by any cause outside Contractor&apos;s reasonable control — including Client&apos;s acts or omissions, delayed selections or approvals, delayed payments, third-party trades, permit or inspection delays, material shortages, or adverse weather — the completion date shall be extended day-for-day, plus reasonable remobilization time. Delays exceeding 5 consecutive business days entitle Contractor to a standby/remobilization charge of $______ per day and reimbursement of documented added costs. No penalty, liquidated damages, or back-charge may be assessed against Contractor for any delay covered by this clause.
              <cite>— Delay clause — insert in the terms section of your contract</cite>
            </blockquote>


            <h2>Why this clause exists</h2>
            <p>Contractors lose an estimated $30–$40 billion a year to disputes, and a huge share start the same way: the client stalls, then blames you for the missed date. Without a written delay clause, your original completion date becomes the standard you&apos;re held to — even when the client sat on a tile selection for three weeks or the deposit landed four days late.</p>
            <p>The clause above flips that. It ties your schedule to conditions you actually control and makes every outside delay extend the deadline automatically. The standby charge line matters just as much: it turns &quot;the client keeps pausing the job&quot; from your problem into a billable event.</p>


            <h2>The notice you send the day a stall starts</h2>
            <p>A clause only protects you if you paper the delay when it happens — not in a lawsuit six months later. The moment something stalls the job, send this. Text or email, same day:</p>
            <blockquote className="article-quote">
              Hi [Name] — Noting for our records that work is paused as of [date] because [specific cause: countertop selection not yet finalized / balance payment not received / site access blocked]. Under our contract&apos;s delay clause, the completion date extends day-for-day while this continues, and standby charges may apply after 5 business days. We&apos;re ready to resume as soon as [what you need] is provided. Please confirm you received this.
              <cite>— Delay-notice — send same-day, in writing</cite>
            </blockquote>


            <h2>Make the notice bulletproof</h2>
            <p>Name the specific cause every time. &quot;Delayed&quot; is arguable; &quot;tile selection not confirmed as of March 4&quot; is a fact with a date on it. Vague notices get picked apart; specific ones get paid.</p>
            <p>Always send it in writing and ask them to confirm receipt. A text they replied &quot;ok&quot; to is worth more than three phone calls you can&apos;t prove happened. If they never respond, your sent-timestamp still stands as the record.</p>
            <p>Send one notice per delay event. If the same job stalls three separate times, that&apos;s three notices — each with its own date and cause. Stacking them creates a clean timeline no one can dispute, and it&apos;s exactly what an adjuster, arbitrator, or judge wants to see.</p>


            <h2>Weather delays specifically</h2>
            <p>Weather is where good contractors still get burned, because clients assume you should have &quot;planned around it.&quot; The clause names adverse weather as a covered cause — but you still send the notice. &quot;Concrete pour rescheduled from [date] due to rain; forecast shows next dry window [date].&quot; Attach a screenshot of the forecast. Now the extension is documented, not a favor you&apos;re asking for later.</p>
            <p>Do this on your next weather day and every one after. It costs you ninety seconds and closes the exact gap clients use to claw back money at final payment.</p>


            <p>The clause and the notice work as a pair: one sets the rule, the other proves you followed it. Drop both into your next job and every delay becomes a dated record instead of a he-said-she-said at payout time. If you want these built into a contract and notice system you can send from your phone on-site, take a look at the contractor plans.</p>
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
