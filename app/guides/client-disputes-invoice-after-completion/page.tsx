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
          <h1>What to Do When a Client Disputes the Invoice After the Job&apos;s Done</h1>
          <p className="hero-subtitle">The dispute you get after final walkthrough is the hardest to win because the leverage is gone. Here&apos;s how to structure payment so the money is already committed before the argument starts.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>The fix is to stop invoicing at the end. Once the last screw is in and the client has walked the job, your leverage is gone — you can&apos;t un-install the cabinets or un-pour the driveway. If you&apos;re only asking for money after all the work exists, you&apos;ve handed the client every card in the deck. The structural answer is to have the money committed to the job before the argument can start, so a dispute becomes a negotiation over a small remaining balance instead of the whole invoice.</p>
            <p>But you&apos;re reading this because it already happened. So handle the current dispute first, then change the structure so the next one can&apos;t cost you the same way.</p>


            <h2>Handle the dispute you&apos;re in now</h2>
            <p>Pull the paper trail before you respond emotionally. You want three things in front of you: the signed scope of work, the change orders (signed or texted), and dated photos of completed conditions. Most &quot;disputes&quot; collapse the moment you can show the client that what they&apos;re now unhappy about was either in the agreed scope, was an approved change, or is a punch-list item — not a defect.</p>
            <p>Separate the two kinds of complaints. A punch-list item (a missing outlet cover, a touch-up) is legitimate and cheap — fix it same-week and take away the excuse. A scope dispute (&quot;I thought that was included&quot;) is a documentation fight, and you win it with the signed scope, not by arguing.</p>
            <p>Then make a written offer that closes the file: &quot;I&apos;ll complete items A and B by Friday. On completion, the balance of $X is due.&quot; You&apos;ve converted an open-ended grievance into a defined, finite obligation with a deadline. That&apos;s a far better position than a standoff over the full amount.</p>
            <blockquote className="article-quote">
              The dispute after final walkthrough isn&apos;t really about quality. It&apos;s about the fact that the client is holding 100% of the money and you&apos;re holding 0% of the leverage.
              <cite>— General contractor, remodels</cite>
            </blockquote>


            <h2>Why end-loaded invoicing creates this every time</h2>
            <p>When your payment schedule is deposit-then-final, you&apos;re financing the client&apos;s entire back half of the job with your own labor and materials. By the time you invoice, you&apos;ve already spent the money. If they balk, you&apos;re not negotiating — you&apos;re trying to collect a debt on work that&apos;s already sunk cost.</p>
            <p>A client who owes you the full balance at the end has a real financial incentive to find something wrong. Every punch-list item they can inflate is a discount they can argue for. You built that incentive into the deal by leaving all the money at the finish line.</p>


            <h2>Structure it so the money is committed before the fight</h2>
            <p>Break the contract into milestones, and get each milestone&apos;s payment committed — deposited into escrow — at the start, not paid to you at the start. The funds are set aside and released as each stage is verified complete. Rough-in done and inspected: that tranche releases. Drywall done: that tranche releases. Final walkthrough: only the last, smallest tranche is still in play.</p>
            <p>This changes the whole dynamic of a late dispute. The client can&apos;t claw back money for work that was already verified and released three weeks ago. The argument is now contained to the final 10-15%, which is exactly the amount a punch-list is worth arguing over anyway. You&apos;ve made the dispute proportional to the actual issue instead of a hostage situation over your whole margin.</p>
            <p>It also protects the client, which is why they&apos;ll agree to it — they&apos;re not writing you a check on faith, the funds release against completed, verifiable stages. That mutual protection is what makes milestone escrow easier to sell to a hesitant homeowner than a big upfront deposit.</p>
            <p>If you want to see how milestone and escrow schedules get set up for jobs like yours, the contractor plans lay out the structure.</p>
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
