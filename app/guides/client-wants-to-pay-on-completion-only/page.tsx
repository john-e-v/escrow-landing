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
          <div className="hero-badge">Payment Structure · August 2026</div>
          <h1>The Client Wants to Pay Everything on Completion: Why That&apos;s Their Risk, Not Yours</h1>
          <p className="hero-subtitle">A client who refuses to pay until the job is fully done is asking you to finance their entire project with your own cash. Milestone-based escrow flips the risk back where it belongs — funds committed upfront, released as you hit verified checkpoints.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>&quot;Pay on completion&quot; means you&apos;re the bank. Every hour of labor, every material run, every subcontractor invoice — you carry all of it, interest-free, until a client decides the job is done enough to open their wallet. That&apos;s not a payment term. That&apos;s an unsecured loan you didn&apos;t agree to make.</p>
            <p>The fix is structural: milestone-based escrow. The full contract value gets committed to a held account before you lift a tool, then released in stages as you hit verified checkpoints. The client isn&apos;t paying you early. They&apos;re proving the money exists and locking it where neither of you can touch it until the work earns it.</p>


            <h2>Why &quot;pay on completion&quot; is a risk transfer, not a courtesy</h2>
            <p>When a client insists on paying everything at the end, look at what they&apos;ve actually done: they&apos;ve moved 100% of the financial risk onto you and kept 100% of the leverage for themselves. If they run short on cash halfway through, that&apos;s now your problem. If they invent a punch-list dispute at the finish line, they&apos;re holding the entire payment hostage over it.</p>
            <p>You&apos;ve seen how this ends. The final 20% becomes a negotiation. The scope &quot;wasn&apos;t clear.&quot; The check is &quot;in the mail.&quot; And because you already delivered, you have nothing left to hold. Your only recourse is a lien or a lawsuit — months of your time to collect money you already earned.</p>
            <p>A client who is solvent and acting in good faith loses nothing by funding escrow. The only client who fights it is the one who either doesn&apos;t have the money yet or wants the option to withhold it later. Either way, that&apos;s information you want before you start.</p>
            <blockquote className="article-quote">
              If they can&apos;t commit the funds upfront, they were never going to have the funds at the end. Escrow just tells you that on day one instead of day ninety.
              <cite>— GC, remodel contractor</cite>
            </blockquote>


            <h2>How milestones flip the leverage back</h2>
            <p>Break the job into checkpoints that map to real, inspectable progress — demo complete, rough-in passed, drywall closed, final walkthrough. Each milestone releases a defined slice of the committed funds once the work is verified.</p>
            <p>This does two things at once. It caps your exposure to a single stage instead of the whole contract, so a dispute over the last checkpoint can never swallow the value of everything before it. And it removes the emotional back-and-forth from getting paid: the money is already there, the trigger is objective, and release isn&apos;t a favor the client grants — it&apos;s the terms both of you agreed to in writing.</p>
            <p>You stop chasing. The client stops stalling. The checkpoint either happened or it didn&apos;t, and the funds move accordingly.</p>


            <h2>What this changes about how you quote</h2>
            <p>Once escrow is standard on your jobs, your bid stops competing on who&apos;s willing to float the most money. A contractor who funds the whole project out of pocket has to price that risk in — or get burned pricing it out. You don&apos;t.</p>
            <p>You also stop pre-qualifying clients by gut feel. The funding step does it for you. Serious clients fund and move forward. The ones who were going to be a collections nightmare either walk or reveal themselves before you&apos;re committed.</p>
            <p>If you&apos;re tired of being the involuntary lender on your own jobs, the setup for milestone escrow is worth a look — it&apos;s built for exactly this handoff of risk.</p>
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
