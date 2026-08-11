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
          <div className="hero-badge">Payment Ops · August 2026</div>
          <h1>The Client Wants to &apos;Split&apos; the Final Payment Into Two: Why That&apos;s a Red Flag</h1>
          <p className="hero-subtitle">When a client asks to break the last invoice into two smaller payments after the work is done, they&apos;re not managing cash flow — they&apos;re buying time to disappear. Here&apos;s how to structure the close so the final number is one payment, already funded, not a negotiation.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>When a client asks to split the final $8,000 invoice into two payments of $4,000 after the work is done, say no. Not &quot;let me think about it&quot; — no. Then re-invoice the full amount with a due date and stop scheduling any further work until it clears.</p>
            <p>That&apos;s the operational answer. The reasoning is worth understanding, because the split request is one of the most reliable early signals that you&apos;re about to spend three months chasing a number you already earned.</p>


            <h2>What the split actually means</h2>
            <p>A client managing cash flow tells you before the work starts. They negotiate the payment schedule in the contract, when they have leverage and you have options. That&apos;s normal, that&apos;s healthy, and you price it in.</p>
            <p>A client who waits until the job is done — when the value has already transferred to them — and then asks to break the last payment in two is doing something different. They&apos;re not solving a cash-flow problem. They&apos;re converting one commitment they can&apos;t easily walk away from into two commitments they can.</p>
            <p>The first half arrives. It buys goodwill and buys silence. The second half enters a fog of &quot;next week,&quot; &quot;once this other project funds,&quot; and eventually &quot;remind me what this was for again.&quot; You&apos;ve now done 100% of the work for what is functionally a partial payment, and the leverage you had at completion is gone.</p>
            <blockquote className="article-quote">
              The moment the work leaves your hands, every dollar still owed becomes a favor the client is choosing to do you.
              <cite>— General contractor, 14 years</cite>
            </blockquote>


            <h2>Why the timing gives it away</h2>
            <p>Leverage in any job runs on a clock. Before you start, you hold everything — the client needs you and hasn&apos;t paid. As the work progresses, leverage shifts steadily to them. At the moment of completion, you hold almost nothing except the invoice.</p>
            <p>A split request at that exact point isn&apos;t about affordability. If they could afford half now, the other half a month later, they could afford the whole thing on a card and pay their own financing costs. What they&apos;re actually buying is time — time to disappear, time to dispute, time to let the urgency drain out of the number while you&apos;re too busy on the next job to fight for it.</p>
            <p>The worst version of this is the client who never intended to pay the second half at all. The split just made the theft feel like a schedule.</p>


            <h2>Structure the close so there&apos;s nothing to split</h2>
            <p>The fix isn&apos;t a better collections script. It&apos;s removing the moment where a split is even possible.</p>
            <p>The final payment should be one number, funded before the final phase of work begins — not invoiced after it ends. When the money for the last milestone is already sitting in escrow, held against agreed completion terms, the conversation changes completely. There&apos;s no &quot;can we split it,&quot; because there&apos;s nothing to negotiate. The funds exist. Completion releases them. That&apos;s the entire transaction.</p>
            <p>Milestone-based escrow does this by design. The client funds each phase up front, you do the work knowing the money is already committed, and release happens against defined conditions rather than against the client&apos;s mood in the week after handover. You stop being a lender to your own clients. The final number is settled the day the job is, because it was funded the day the phase started.</p>
            <p>A client who genuinely has cash-flow constraints will accept this structure without blinking — it protects them too. A client who won&apos;t fund the final milestone up front is telling you exactly who they are, while you still have the leverage to walk.</p>


            <p>If you&apos;ve eaten a split-the-final request before and it went the way these usually go, the change worth making isn&apos;t tougher follow-up. It&apos;s structuring the close so the last payment is funded and held before you finish, not invoiced and chased after.</p>
            <p>You can see how contractors set up milestone-funded payments for exactly this on clrblt.com/master.</p>
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
