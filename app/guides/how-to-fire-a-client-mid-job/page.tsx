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
          <div className="hero-badge">Contractor Ops · July 2026</div>
          <h1>How to Fire a Non-Paying Client Mid-Job Without Eating the Loss</h1>
          <p className="hero-subtitle">When a client stops paying mid-project, the fix is to stop work at a funded milestone boundary, not walk off in anger. This breaks down how to exit a bad job cleanly while protecting the money you&apos;ve already earned.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Stop work at the last funded milestone boundary. That&apos;s the move. Not the next morning, not after one more phone call, not once the drywall is up — the moment a payment clears its deadline without landing, you finish the task that&apos;s already funded, document the state of the work, and you stop.</p>
            <p>The mistake contractors make when a client goes cold on payment isn&apos;t quitting. It&apos;s quitting at the wrong point. You get angry, you walk off a half-finished phase, and now you&apos;re the one who breached. You&apos;ve done $8K of labor into a milestone that was supposed to pay $12K, the client owes you nothing until completion, and you&apos;ve handed them a reason to withhold everything and call it your fault.</p>


            <h2>Why the Boundary Matters More Than the Anger</h2>
            <p>A job doesn&apos;t fall apart because a client is a jerk. It falls apart because your money and your labor are out of sync. If you&apos;re always one phase of work ahead of the last payment, then the day a client decides to stop paying, they&apos;re holding leverage you gave them for free.</p>
            <p>The non-paying client is a known failure mode. Roughly one in four contractors reports chasing a slow-pay or no-pay client at any given time. You don&apos;t fix that by being tougher on the phone. You fix it structurally — by making sure the point where you&apos;d want to walk away is always a point where you&apos;re square.</p>
            <blockquote className="article-quote">
              The question isn&apos;t &apos;will a client stiff me.&apos; It&apos;s &apos;when one does, how much unpaid labor am I standing on?&apos;
              <cite>— general contractor, 14 years in remodels</cite>
            </blockquote>


            <h2>The Clean Exit Checklist</h2>
            <p>When the payment misses its deadline, run this in order:</p>
            <p>1. Confirm the last funded milestone is fully complete and matches what was scoped. Do not start the next one.</p>
            <p>2. Photograph and document current site state — completed work, materials on site, anything owed back.</p>
            <p>3. Send a written notice: the funded phase is done, the next phase is unfunded, and work is paused pending payment per the agreement. Calm, factual, no threats.</p>
            <p>4. Give a hard resume-or-terminate date. If money lands, you continue. If it doesn&apos;t, the contract terminates at the last paid boundary and you&apos;re gone — paid in full for everything you touched.</p>
            <p>Notice what this does. There&apos;s no dispute about what you&apos;re owed, because you never worked past what was funded. There&apos;s no abandonment claim, because you followed the payment terms in writing. You didn&apos;t storm off — you stopped exactly where the contract said the client&apos;s obligation ended.</p>


            <h2>The Structural Fix Behind the Checklist</h2>
            <p>This whole exit only works if your payments are broken into milestones and each milestone is funded before you start it. That&apos;s the actual fix — escrow or milestone-funded payment structures where the client commits the money up front for the phase you&apos;re about to do, and it releases to you when that phase is signed off.</p>
            <p>Run a job this way and the &apos;fire a non-paying client&apos; problem mostly disappears, because a non-paying client can&apos;t get ahead of you. If they won&apos;t fund the next milestone, you simply don&apos;t begin it. Worst case, you&apos;re out zero unpaid labor instead of a full phase. You never have to eat the loss because the loss was never allowed to accumulate.</p>
            <p>Deposits alone don&apos;t do this. A deposit protects the front of the job. Milestone funding protects every boundary after it — which is where mid-job walkaways actually happen.</p>
            <p>If you&apos;re tired of finding out a client won&apos;t pay only after you&apos;ve already done the work, the fix is to structure the whole job so that never happens again.</p>
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
