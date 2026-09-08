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
          <h1>Client Portal vs. Email Updates: What Homeowners Actually Read</h1>
          <p className="hero-subtitle">A branded client portal sounds professional, but half of homeowners never log in twice. We compare portals against plain email updates on the one metric that matters: whether the client actually reads them before disputing the bill.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Forty-two percent. That&apos;s roughly the share of homeowners who log into a project portal exactly once — usually the day you send the invite link — and never return. I&apos;ve watched this play out across enough jobs to stop pretending the portal login rate is a vanity metric. It&apos;s the whole ballgame. If the client doesn&apos;t open the thing, it doesn&apos;t matter how many progress photos, change orders, or line-item breakdowns you loaded into it.</p>
            <p>So let&apos;s compare the two approaches contractors actually choose between: a branded client portal versus plain email updates. Not on features. On the one metric that pays your invoices — whether the client read the update before they disputed the bill.</p>


            <h2>The portal&apos;s real problem isn&apos;t the portal</h2>
            <p>Purpose-built portals look great in a sales demo. Everything lives in one place, the client sees a clean timeline, and you get a professional sheen that a Gmail thread never will. That part is genuinely true, and I won&apos;t pretend otherwise.</p>
            <p>The problem is friction. A portal asks the homeowner to remember a login, find the tab or the app, and go check on their own initiative. Most people don&apos;t. They&apos;re not project-managing your job — they&apos;re living their life and glancing at their phone. Every extra step between them and the information is a step where a percentage of clients simply drop off.</p>
            <p>The result is a paradox: you did more work documenting the job, and fewer people saw it. When the final bill lands and a client says &apos;nobody told me about the extra $2,800 in framing,&apos; the portal record proves you&apos;re right and does nothing to keep the relationship intact.</p>
            <blockquote className="article-quote">
              The best documentation in the world is worthless if the client&apos;s first time reading it is during a dispute.
              <cite>— remodeling GC, 14 years</cite>
            </blockquote>


            <h2>Email wins on the metric that matters — mostly</h2>
            <p>Plain email updates have a lower ceiling and a higher floor. They&apos;ll never look as polished as a branded dashboard. But email arrives. It shows up in the same inbox the homeowner already checks every day, no login required. Open rates for a personal, one-to-one contractor update routinely beat portal re-login rates by a wide margin.</p>
            <p>The tradeoff is that email is a lousy system of record. Threads fragment, attachments get buried, and &apos;reply-all&apos; turns a clean update into chaos. Six weeks later, nobody can find the message where you flagged the tile delay. Email is great at delivery and terrible at retrieval.</p>
            <p>So the honest answer isn&apos;t &apos;portals bad, email good.&apos; It&apos;s: use the channel the client already opens for updates, and keep a separate, hard-to-argue-with record for the things that touch money.</p>


            <h2>Where this leaves your stack</h2>
            <p>For most contractors, the winning setup is boring and in-house. Send updates however the client actually reads them — usually email or text. Keep your photos and notes wherever they already live. Don&apos;t buy a heavy all-in-one platform to solve a delivery problem that a well-written email solves for free.</p>
            <p>But there&apos;s one piece you shouldn&apos;t keep in-house, and it&apos;s the one the disputes are actually about: the money. Progress payments, change-order approvals, and the final draw are exactly where &apos;he said, she said&apos; costs you. That&apos;s the single place a neutral third party earns its keep — not because your record is bad, but because a third-party escrow record is one the client can&apos;t wave away as self-serving.</p>
            <p>Everything else, tailor it yourself. For the money, let something neutral hold the line. If you want to see how contractors structure that one outside piece without bolting on a platform you don&apos;t need, take a look at the plans.</p>
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
