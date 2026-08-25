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
          <h1>The Client Wants to Pay Half Now, Half &apos;When It&apos;s Done&apos; — With Nothing In Between</h1>
          <p className="hero-subtitle">A two-payment split with no milestone between deposit and completion leaves your entire labor investment exposed for the length of the job. Restructure the back half into milestone releases so you&apos;re never carrying more than one stage of unpaid work.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>50% deposit, 50% on completion means you are financing 100% of the labor from the moment the deposit runs out until the day the client decides the job is &quot;done.&quot; On a three-week job, that&apos;s often two full weeks where your crew, your materials, and your overhead are all in the ground and the only money you&apos;ve collected is gone.</p>
            <p>The fix is not a bigger deposit. It&apos;s a payment that lands in the middle. Split the back half into milestone releases so the client pays as the work progresses — not in one lump at the end where they hold all the leverage and you hold all the risk.</p>


            <h2>Why the two-payment split fails you specifically</h2>
            <p>The deposit covers your upfront materials and the first stretch of labor. Fine. But the second half sitting at &quot;completion&quot; creates a gap the exact size of the job. The longer the project, the longer you carry unpaid work.</p>
            <p>And &quot;when it&apos;s done&quot; is not a date. It&apos;s a judgment call the client owns. Every punch-list item, every &quot;can you just also,&quot; every delayed walkthrough is now something they can hold your final payment hostage against. You&apos;ve handed them a reason to slow-walk the close and a discount they can negotiate for after the work is already installed.</p>
            <p>The deeper problem: at no point in a two-payment structure are you square. You&apos;re either owed the deposit or owed the balance. There&apos;s no moment mid-job where the paid work and the collected money line up.</p>
            <blockquote className="article-quote">
              If your only two checkpoints are &apos;started&apos; and &apos;finished,&apos; you&apos;ve built your cash flow around the one moment you have the least control over.
              <cite>— operational note for project-based trades</cite>
            </blockquote>


            <h2>Restructure the back half into stages</h2>
            <p>Keep the deposit. Then break the remaining balance into releases tied to observable milestones — not calendar dates, not percentages of time, but points a client can look at and verify.</p>
            <p>A framing job: deposit, then release at rough-in complete, release at inspection passed, release at final. A kitchen: deposit, demo complete, cabinets set, countertops in, final. Pick the natural checkpoints that already exist in how you sequence the work.</p>
            <p>The rule that protects you: never let the unpaid work exceed the value of one stage. When rough-in is done, rough-in gets paid before framing the next section starts. You&apos;re always carrying one milestone of exposure — never the whole job.</p>


            <h2>Make the release automatic, not a phone call</h2>
            <p>Milestones only protect you if the money actually moves when the stage clears. If each release requires you to invoice, follow up, and chase, you&apos;ve just added four collection headaches instead of one.</p>
            <p>This is where holding funds in escrow against defined milestones does the structural work. The client funds the stage up front. The money sits committed — they can see the work is coming, you can see the payment is real. When the milestone is verified, the release happens against the agreed trigger, not against a client&apos;s mood on a Friday afternoon.</p>
            <p>That turns &quot;when it&apos;s done&quot; into a series of small, defined, already-funded gates. The client stops carrying the fear of paying for work they can&apos;t see. You stop carrying weeks of unpaid labor waiting on a walkthrough.</p>


            <h2>The version that fits your jobs</h2>
            <p>The right number of milestones depends on your ticket size and project length. A two-day job might need one middle release. A six-week build needs four or five. The point is the same: no single unpaid stage should ever be large enough to sink a month.</p>
            <p>If you want to see how milestone releases and funded escrow get set up for the kind of work you run, the contractor plans lay out the structure.</p>
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
