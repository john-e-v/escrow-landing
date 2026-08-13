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
          <h1>Field App vs. Office Software: Where Job Data Actually Breaks in Transit</h1>
          <p className="hero-subtitle">The crew logs progress on their phones, the office runs the numbers on a desktop, and somewhere between the two your job data goes stale. This teardown compares field-first apps against office-first systems and shows where the sync gap quietly costs you.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>The gap between when your crew logs a task and when your office sees it is where the money leaks. On most jobs I&apos;ve audited, that lag runs 6 to 30 hours — which means the person cutting checks is working off yesterday&apos;s reality.</p>
            <p>That&apos;s the whole problem with the field-vs-office split. Both tools work fine on their own. It&apos;s the handoff between them that&apos;s broken, and neither vendor is incentivized to fix it because the sync gap lives in the seam nobody owns.</p>


            <h2>Field-first apps: fast input, thin math</h2>
            <p>Field-first tools are built for a guy standing in mud with one bar of signal. Big buttons, photo capture, offline mode, quick daily logs. Crews actually use them, which is more than you can say for most software.</p>
            <p>The tradeoff is on the accounting side. Field-first systems treat cost as an afterthought — you get quantities and photos, but retention tracking, change-order margins, and draw schedules are either bolted on or missing. You end up re-keying field data into a spreadsheet or accounting package anyway. So the sync gap doesn&apos;t disappear. It just moves to a human at a desk at 9 p.m.</p>
            <blockquote className="article-quote">
              We had beautiful daily logs and no idea if the job was making money until the CPA told us in March.
              <cite>— residential GC, 14 crew</cite>
            </blockquote>


            <h2>Office-first systems: strong math, weak input</h2>
            <p>Office-first software flips it. The numbers are solid — job costing, WIP, AR aging, forecasting. The problem is nobody in the field will touch it. The interface assumes a keyboard, a full screen, and someone who cares about GL codes.</p>
            <p>So the office ends up chasing crews for updates, and the data that reaches the accurate system is late and filtered through a foreman&apos;s memory. Precise math on stale inputs is still a wrong answer. It just looks more official.</p>


            <h2>All-in-one vs. best-of-breed</h2>
            <p>The pitch for all-in-one is that one system means no sync gap. In practice, all-in-one tools are excellent at one thing and mediocre at the other four — you&apos;re paying for a suite to avoid a handoff, then discovering the field module is an afterthought or the accounting side can&apos;t handle your draw structure.</p>
            <p>Best-of-breed lets you pick the sharpest tool for each job, but you own every integration and every seam. That&apos;s real work and real risk. There&apos;s no free answer here. The honest question is which seams you can afford to own and which ones need to be airtight.</p>


            <h2>Where the one third-party piece belongs</h2>
            <p>Most of your stack should be tailored to how you actually run — field logging, costing, scheduling. Those are yours to configure and yours to change when the business changes. The more of that you keep in-house and under your control, the fewer seams break in transit.</p>
            <p>The exception is money that changes hands on disputed or milestone work. That&apos;s the one place you want a neutral third party, not because your software is bad, but because trust between you and a client shouldn&apos;t depend on whose spreadsheet is right. Escrow is the piece that should sit outside your stack on purpose — a shared source of truth for funds that neither side can quietly edit.</p>
            <p>If you&apos;re mapping out which parts of your workflow stay in-house and which one belongs to a neutral party, that&apos;s the right frame to start from.</p>
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
