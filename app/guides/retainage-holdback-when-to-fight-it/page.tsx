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
          <h1>Retainage Explained: When a 10% Holdback Is Fair and When It&apos;s a Trap</h1>
          <p className="hero-subtitle">Retainage lets a client hold back 5-10% of every payment until final completion, and on some jobs it&apos;s standard practice. But when the holdback has no release trigger and no timeline, you&apos;re financing the client&apos;s caution with your own cash.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>The fix: never accept retainage without a written release trigger and a hard deadline attached to it. A 10% holdback with &quot;released at final completion&quot; is fine. A 10% holdback with no defined completion event, no timeline, and no interest is a loan you&apos;re making to your client at 0% — and you didn&apos;t agree to be a bank.</p>
            <p>Retainage is standard on a lot of commercial and larger residential work. The client withholds 5-10% of each progress payment as security that you&apos;ll finish and fix any punch-list items. That&apos;s a legitimate structure. The problem isn&apos;t the concept — it&apos;s that the terms are almost always written to protect the client and left vague on the one thing that matters to you: when you actually get the money back.</p>


            <h2>When a 10% holdback is fair</h2>
            <p>Retainage works when three things are defined in the contract before you sign:</p>
            <p>1. A release trigger — a specific event, like &quot;substantial completion&quot; or &quot;issuance of certificate of occupancy,&quot; not a mood.
2. A timeline — retainage released within 30 days of that trigger, in writing.
3. A reduction step — many fair contracts drop retainage from 10% to 5% at 50% completion, because the client&apos;s risk shrinks as the job progresses.</p>
            <p>When those three exist, the holdback is doing its job: it gives the client security and gives you a clear finish line. You can price the cash-flow cost into the bid and move on.</p>
            <blockquote className="article-quote">
              If nobody can tell you the date the money comes back, it&apos;s not retainage. It&apos;s an interest-free loan with your name on it.
              <cite>— GC with 20+ years on commercial jobs</cite>
            </blockquote>


            <h2>When it&apos;s a trap</h2>
            <p>The trap is any holdback where completion is defined by the client&apos;s satisfaction instead of an objective event. &quot;Retainage released upon final approval&quot; gives the client a permanent excuse to sit on your money by simply never approving. Add a punch list that keeps growing and you&apos;ve built a machine that holds 10% of your revenue hostage indefinitely.</p>
            <p>The math is worse than it looks. On a $200K job, 10% retainage is $20K — often more than your actual margin. You&apos;ve completed the work, paid your crew and suppliers, and the profit is parked in someone else&apos;s account with no release date. That&apos;s not caution on the client&apos;s part. That&apos;s you financing their caution out of your own working capital.</p>


            <h2>How to structure around it</h2>
            <p>You don&apos;t fight retainage by refusing it. You fight it by tying the release to an event that can&apos;t be stalled and a deadline that carries a consequence.</p>
            <p>The strongest version is milestone-based release with the retainage held in escrow rather than in the client&apos;s operating account. When the money for each phase is funded up front and held by a neutral third party, the release trigger stops being a favor the client grants you — it becomes a condition that&apos;s already been met. You finish the milestone, the condition clears, the funds move. There&apos;s no &quot;we&apos;ll get to it&quot; because the money was never in the client&apos;s control to sit on.</p>
            <p>That structure also protects the client, which is why it&apos;s easier to sell than a straight &quot;no retainage&quot; demand. They get their security. You get a guaranteed release mechanism. The only thing that disappears is the gray area where your profit goes to die.</p>
            <p>If your last three jobs each left 10% floating for 60-plus days after you finished, the problem isn&apos;t your clients — it&apos;s that your payment terms leave the release date up to them. Build the trigger into the structure and that decision stops being theirs to make.</p>
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
