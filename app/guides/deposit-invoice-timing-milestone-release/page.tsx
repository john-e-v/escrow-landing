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
          <h1>You Invoiced Before You Started the Work. Here&apos;s Why the Money Still Isn&apos;t Yours</h1>
          <p className="hero-subtitle">Invoicing early feels like progress, but a paid invoice on unstarted work is a liability, not a win. Tie every release to a milestone the client can verify so the money you collect is money you actually keep.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Stop tying your invoice date to your calendar and start tying it to the work. A deposit collected before a single hour is logged isn&apos;t revenue — it&apos;s an obligation you now owe back the moment the job stalls, the scope shifts, or the client changes their mind. You billed early because it felt like locking in the deal. What you actually did was convert your client&apos;s cash into your liability.</p>
            <p>Here&apos;s the operational fix: never release a payment until a verifiable milestone is complete. Break the job into stages the client can inspect — rough-in done, materials delivered, fixtures set, final walkthrough passed — and attach a payment to each one. The money moves when the work is provably there, not when a date arrives on your accounting software.</p>


            <h2>Why a Paid Invoice Isn&apos;t Paid Money</h2>
            <p>The mistake is treating collection as the finish line. It isn&apos;t. Money you take before delivering is money that can be clawed back — through a chargeback, a dispute, a refund demand, or a lawsuit when the relationship sours. If you&apos;ve already spent that deposit on materials and payroll, you&apos;re now covering a refund out of your own pocket for work you never got paid to keep.</p>
            <p>Think about what a front-loaded invoice actually signals to a client: that they&apos;ve handed you leverage and gotten nothing verifiable in return. When the job hits a snag — and jobs hit snags — you&apos;re the one holding funds you can&apos;t defend. Every unearned dollar is a dollar the client can still legitimately ask back.</p>
            <blockquote className="article-quote">
              A deposit isn&apos;t earned income. It&apos;s a loan from your client that comes due the second they lose confidence.
              <cite>— principle every contractor learns the expensive way</cite>
            </blockquote>


            <h2>Milestones Turn Collection Into Ownership</h2>
            <p>When each release is tied to a completed, inspectable stage, the money becomes yours the instant it lands. There&apos;s no window for the client to reverse it, because the work backing that payment already exists and they signed off on it. You&apos;re not collecting against a promise — you&apos;re collecting against a delivery.</p>
            <p>This also fixes the cash-flow problem that pushed you to invoice early in the first place. Instead of one nervous deposit up front and a stressful chase at the end, you get a steady sequence of releases that track the actual pace of the job. You fund the next phase with money you&apos;ve genuinely earned from the last one, not with a float you&apos;re praying doesn&apos;t come back to bite you.</p>


            <h2>How to Structure It</h2>
            <p>Split the contract into three to five stages, each with a written definition of &quot;done&quot; that both sides agree on before work starts. Attach a dollar amount to each. Hold the funds where neither party can unilaterally grab them — an escrow or milestone-release setup keeps the money committed but unspendable until the stage is verified. When the client confirms the stage, the release triggers.</p>
            <p>That structure does two jobs at once. It reassures the client that their money is safe until they see results, which makes them faster to commit larger amounts. And it guarantees that every dollar you collect is a dollar you&apos;ve already delivered against — no clawbacks, no disputes over unfinished work, no refunds out of your own margin.</p>
            <p>If your current billing still runs on invoice dates instead of verified milestones, that&apos;s the gap turning your collected cash into money you don&apos;t yet own. It&apos;s worth looking at how contractor payment plans are built to release on completion, so the money you take is money that stays.</p>
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
