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
          <h1>The Client Says They&apos;ll Pay &apos;When the House Sells&apos;: Why That&apos;s Not a Payment Plan</h1>
          <p className="hero-subtitle">A client tying your final payment to their home sale isn&apos;t offering terms — they&apos;re handing you their market risk for free. Here&apos;s why you refuse it and how milestone escrow removes the conversation entirely.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>The answer: you don&apos;t accept it, and you don&apos;t negotiate it. &quot;When the house sells&quot; is not a payment date. It&apos;s a request for you to finance a real estate transaction you have no stake in, no control over, and no visibility into.</p>
            <p>When a client ties your final payment to their home sale, they&apos;re not offering you terms. They&apos;re transferring their market risk onto your balance sheet — for free. If the house sits for eight months, your money sits for eight months. If they pull the listing, your invoice becomes a lawsuit. You did the work on your timeline. There&apos;s no reason your payment should run on theirs.</p>


            <h2>What They&apos;re Actually Asking You to Do</h2>
            <p>Strip the friendly framing away and the request is this: front the labor and materials, wait an unknown number of months, and absorb the loss if the sale falls through. No bank underwrites a loan that way. No supplier ships on those terms. Yet contractors agree to it constantly, because the ask arrives wrapped in rapport — &quot;you know I&apos;m good for it,&quot; &quot;the house is basically sold.&quot;</p>
            <p>Here&apos;s the tell: a client who can only pay you after their asset liquidates is a client who cannot currently pay you. That&apos;s not a character judgment. It&apos;s a cash-flow fact. And a payment structure built on a future event you can&apos;t verify or influence isn&apos;t a payment plan — it&apos;s a bet you were talked into placing.</p>
            <blockquote className="article-quote">
              If the payment depends on something you can&apos;t see, can&apos;t schedule, and can&apos;t enforce, it isn&apos;t a term — it&apos;s a hope.
              <cite>— operational rule of thumb for contractor collections</cite>
            </blockquote>


            <h2>The Structural Fix</h2>
            <p>The problem isn&apos;t that clients are dishonest. It&apos;s that your payment timing is coupled to events outside the job. The fix is to decouple it — permanently — by attaching money to work completed, not to anything happening in the client&apos;s life.</p>
            <p>Milestone escrow does exactly that. Before the job starts, the client funds the full contract into escrow. The money is already committed, already set aside, already out of their checking account. As you complete defined stages — demo, rough-in, finish, punch list — each milestone releases on approval. The final payment isn&apos;t waiting on a sale, a refinance, or a mood. It&apos;s sitting in escrow, earmarked for the moment you finish.</p>
            <p>This kills the &quot;when the house sells&quot; conversation before it can start. You can&apos;t be asked to wait on a home sale when the funds were deposited before your first day on site. There&apos;s nothing left to renegotiate, because the money already moved.</p>


            <h2>Why This Protects Both Sides</h2>
            <p>Escrow isn&apos;t a leash on the client — it&apos;s proof of good faith in both directions. They know their money only releases against real, approved progress, so they&apos;re not fronting a lump sum to someone who might disappear. You know the money exists, because you watched it get funded. Neither party is financing the other on trust.</p>
            <p>That&apos;s the shift. Instead of chasing a final check tied to a market you don&apos;t control, you&apos;re releasing pre-committed funds against work you&apos;ve already delivered. The risk goes back where it belongs — with the person who owns the house and the market exposure that comes with it.</p>
            <p>If your last three jobs each had a payment that dragged past completion for reasons that had nothing to do with your work, that&apos;s not bad luck. That&apos;s a structural gap in how your payments are timed — and it&apos;s fixable.</p>
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
