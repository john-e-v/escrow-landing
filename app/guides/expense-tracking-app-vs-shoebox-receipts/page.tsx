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
          <div className="hero-badge">Contractor Ops · August 2026</div>
          <h1>Expense Tracking App vs. Shoebox Receipts: Where Job Costs Actually Get Lost</h1>
          <p className="hero-subtitle">The shoebox method feels free until tax season, when a missing $340 receipt costs you a $340 deduction. This teardown compares loose receipts against a real expense workflow, and where each one actually breaks on a live job.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>A missing $340 receipt costs you the $340 deduction, plus roughly $75-$110 in tax you didn&apos;t have to pay, depending on your bracket. That&apos;s the shoebox method&apos;s real price, and it doesn&apos;t show up until nine months after the receipt faded in your truck console.</p>
            <p>So let&apos;s do the honest teardown. Loose receipts versus a real expense workflow — not on paper, but on a live job where you&apos;re covered in drywall dust and the last thing you want to do is photograph a lumber slip.</p>


            <h2>The shoebox: where it actually breaks</h2>
            <p>The shoebox isn&apos;t stupid. It&apos;s fast. You buy something, the receipt goes in the console or the glovebox or the actual shoebox, and you move on with your day. Zero friction at the moment of purchase, which matters more than app people admit.</p>
            <p>Where it breaks isn&apos;t the receipt you lose — it&apos;s the receipt you can&apos;t attach to a job. You&apos;ve got a $2,100 pile at year end and no memory of whether that $340 in fittings went to the Henderson bathroom or the spec house. So it becomes a general deduction, which is fine for taxes but useless for knowing whether the Henderson job actually made money.</p>
            <p>The second break: thermal paper fades. A receipt from March is a blank slip by December. The IRS accepts a bank statement line as backup, but a statement line says &apos;HOME DEPOT $340.18&apos; — it doesn&apos;t say what you bought or why it was deductible.</p>
            <blockquote className="article-quote">
              I found out the Miller job lost money eight months after I finished it. The receipts were all in one pile. By then it was just a lesson.
              <cite>— remodeling contractor, 2-crew shop</cite>
            </blockquote>


            <h2>The expense app: where it actually breaks</h2>
            <p>A real expense workflow — snap the receipt, tag the job, done — fixes the two shoebox failures. Receipts don&apos;t fade because they&apos;re photos. Costs attach to jobs while you still remember. That&apos;s genuine, and if you run more than a couple jobs at once it pays for itself fast.</p>
            <p>But be honest about the cost. Every purpose-built app adds a step at the exact moment you least want one. Adoption is the whole game. If you snap 80% of receipts and forget 20%, you now have an incomplete digital record and a partial shoebox — arguably worse than committing to one system, because you trust the app and stop keeping the paper.</p>
            <p>The other tradeoff is lock-in. All-in-one platforms bundle expenses with invoicing, scheduling, and payments. Convenient, until pricing changes or you outgrow one module and can&apos;t unbundle. Best-of-breed tools each do one thing well but multiply your subscriptions and your logins.</p>


            <h2>The verdict, and the part nobody sells you</h2>
            <p>For anything past a one-man operation, the workflow wins — but only if you&apos;ll actually use it every day. If you know you won&apos;t, a disciplined shoebox with jobs written on each receipt in Sharpie beats an app you abandon in April.</p>
            <p>Here&apos;s the part that shapes the rest of your stack: expense tracking is something you should own and tailor in-house. It&apos;s your data, your job codes, your margins. You don&apos;t want a third party sitting between you and your own numbers. The same goes for scheduling and invoicing — keep them close, keep them yours.</p>
            <p>The one place a third party belongs is escrow. Holding a client&apos;s deposit or a progress payment is exactly the job you don&apos;t want on your own books or in your own control, because the whole point is that neither side can touch it until the work&apos;s verified. That&apos;s the single outside piece worth having in an otherwise in-house stack.</p>
            <p>If you&apos;re mapping out which tools to own and which to outsource, that&apos;s a good line to draw first.</p>
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
