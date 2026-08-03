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
          <div className="hero-badge">Payments &amp; Escrow · August 2026</div>
          <h1>The Check Cleared, Then Bounced Two Weeks Later: How to Not Get Burned</h1>
          <p className="hero-subtitle">A deposited check showing &apos;available&apos; funds is not the same as a check that cleared, and homeowners can reverse a payment weeks after you&apos;ve bought materials. Here&apos;s how to structure payments so a reversed check never leaves you holding the loss.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Stop releasing materials or labor against a check until it has actually settled — not &quot;available,&quot; settled. Those are two different events, and the gap between them is where contractors lose real money.</p>
            <p>Here&apos;s the operational rule: a deposited check that shows as &quot;available funds&quot; is your bank fronting you the money as a courtesy. It is not confirmation that the homeowner&apos;s account had the funds or that the check was legitimate. Federal rules (Reg CC) force your bank to make a portion available fast — often next day — but the actual clearing can take a week or more, and a check can be returned unpaid well after that. When it bounces, the bank claws the money straight back out of your account.</p>


            <h2>Why the timing burns contractors specifically</h2>
            <p>Your cash cycle is the problem. You take a deposit, and within 48 hours you&apos;re at the supply house buying lumber, ordering cabinets, or paying a crew to start demo. By the time the check comes back marked NSF or &quot;account closed,&quot; you&apos;ve already converted that money into materials sitting on the customer&apos;s property and labor you can&apos;t un-perform.</p>
            <p>A reversed check two weeks later isn&apos;t a delayed payment — it&apos;s a total loss plus the cost of the work you already fronted. And if the homeowner is disputing the job or has simply gone quiet, you&apos;re now chasing a debt with no leverage, because the materials are already installed.</p>
            <blockquote className="article-quote">
              The bank told me the funds were available, so I bought the windows. Sixteen days later they pulled $8,400 back out. The windows were already in the wall.
              <cite>— Replacement window installer, on a bounced homeowner check</cite>
            </blockquote>


            <h2>The structural fix: don&apos;t hold the risk in the first place</h2>
            <p>The reason a bounced check hurts is that the money passed through your account and could be reversed. Remove that condition and the problem disappears. That means restructuring how payment is held, not just how carefully you wait.</p>
            <p>Milestone-based escrow does this. The homeowner&apos;s funds are verified and held by a third party before any work starts. You don&apos;t buy materials against a promise — you buy them knowing the money for that milestone is already confirmed and committed. When you complete the milestone, the held funds release to you. There&apos;s no floating check, no courtesy-credit gap, and no clawback window, because the money was real and locked before you spent a dime on their job.</p>


            <h2>How to phase it so no single loss can wipe you</h2>
            <p>Break the job into funded milestones instead of one large deposit followed by a lump balance:</p>
            <p>1. Mobilization / materials — funded and confirmed before you order or pick up anything.
2. Rough-in or midpoint — funded before that phase starts.
3. Substantial completion — funded before final push.
4. Punch list / final — released on sign-off.</p>
            <p>Structured this way, the most you can ever be exposed to is the cost of one unfunded milestone, and you never front materials for a milestone that isn&apos;t already backed by confirmed money. A homeowner who won&apos;t fund the next milestone tells you to stop working — before you&apos;ve bought their supplies, not after.</p>


            <p>The check that clears then bounces is a symptom of a deeper issue: you&apos;re carrying the payment risk during the exact window when you&apos;re spending the most. Move the money into a confirmed, held structure and that window closes.</p>
            <p>If you want to see how milestone escrow maps onto the way your jobs are already phased, look at the contractor plans and pick the structure that matches your job sizes.</p>
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
