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
          <h1>The Payment Schedule Was Front-Loaded: Why You Paid 70% for 40% of the Work</h1>
          <p className="hero-subtitle">A tile contractor structured his draws so the homeowner paid 70% of the contract before the job was half done. When work slowed to a crawl, there was no money left to hold as leverage. Here&apos;s how a front-loaded schedule quietly strips your only protection.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>The homeowner paid $21,000 on a $30,000 tile job before a single grout line was sealed. That&apos;s 70% of the contract handed over for roughly 40% of the work. When the contractor stopped showing up, there was $9,000 left — not enough to hire anyone to finish, and not enough to make him care about coming back.</p>
            <p>This is the anatomy of a front-loaded payment schedule, and it happens more often than most people realize because the schedule looks reasonable on paper. Nobody reads it as a leverage problem until the leverage is already gone.</p>


            <h2>How the schedule was built to fail</h2>
            <p>The contract broke payment into four draws: 30% at signing, 40% at material delivery, 20% at rough completion, and 10% at final. On the surface that reads fair — big material cost up front, right?</p>
            <p>Except the tile for a 350-square-foot job cost around $4,200. The 40% &quot;material delivery&quot; draw was $12,000. The contractor had collected $21,000 while carrying maybe $5,000 in actual outlay. The margin between what he&apos;d been paid and what he&apos;d spent was pure buffer — his buffer, not the homeowner&apos;s.</p>
            <p>By week three, the pace dropped. One day of work, then four days of silence. Texts got shorter. The homeowner did the math and realized the truth: the contractor had already been paid for the hard part. Everything remaining was the fiddly, low-glory finish work — the parts contractors hate. There was no financial reason left for him to prioritize this job over the next deposit from a new client.</p>
            <blockquote className="article-quote">
              By the time you feel the job slipping, the money that would have made him show up is already in his account. You&apos;re negotiating with someone who&apos;s already been paid.
              <cite>— construction claims adjuster, residential remodels</cite>
            </blockquote>


            <h2>The real number that mattered</h2>
            <p>When the homeowner finally hired a second contractor to finish, the quote came in at $11,400 — more than the $9,000 remaining, because finish work on someone else&apos;s rough-in always costs more. Re-setting a few crooked tiles, correcting slope in the shower pan, redoing grout that had been rushed.</p>
            <p>Total spend to complete a $30,000 job: roughly $32,400, plus six weeks of delay. The overpayment wasn&apos;t stolen in one dramatic moment. It was structured in from the first signature, quietly, in a schedule that front-loaded the money away from the work.</p>


            <h2>What would have actually prevented it</h2>
            <p>The fix isn&apos;t paying less — it&apos;s tying money to completed, verifiable work instead of to a timeline the contractor controls. A properly weighted schedule keeps the deposit small (10–15%, roughly covering real material cost) and releases the largest draws only after inspectable milestones: waterproofing passed, tile set and level, grout cured and sealed.</p>
            <p>Better still is an escrow or milestone arrangement where the funds exist but the contractor can&apos;t touch them until a stage is confirmed done. The money stays real to him — he knows it&apos;s there — but it only moves when the work moves. That single structural change keeps your leverage intact through the exact phase where front-loaded schedules leave you with nothing.</p>
            <p>The homeowner in this case did everything a careful person does. Checked reviews, got references, read the contract. What they didn&apos;t check was whether the payment schedule protected them or the contractor. It protected the contractor.</p>
            <p>If you&apos;re about to sign, look at your draws before anything else. If more than half the money is due before half the work is verifiable, you&apos;re not hiring a contractor — you&apos;re funding one and hoping.</p>
          </div>

          <div className="article-footer">
            <Link href="/guides" className="article-back">← Back to Guides</Link>
            <a href="/create" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>Get matched with contractors who accept escrow payments →</a>
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
