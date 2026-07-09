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
          <h1>What Most Contractor CRMs Get Wrong About Job Scoping</h1>
          <p className="hero-subtitle">Most contractor CRMs treat a job as a static record you fill in once, but real scopes shift the moment demo starts. Here&apos;s where generic CRMs break down on scoping, and how to structure a stack that keeps scope, subs, and payment tied together.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Seven change orders on a $40k bathroom remodel. That&apos;s not a horror story — that&apos;s a normal job once you open the wall and find the joist someone notched to hell in 1978.</p>
            <p>Most contractor CRMs are built like the job is knowable on day one. You fill in the scope, attach a quote, and the record sits there like a birth certificate. But the scope isn&apos;t the thing you wrote down at the kitchen table. The scope is whatever&apos;s true after demo, after the inspector, after the client changes the tile three times. A tool that treats the initial scope as the real scope is describing a job that doesn&apos;t exist anymore by week two.</p>


            <h2>The static-record problem</h2>
            <p>Generic CRMs — and most of the all-in-one contractor platforms — model a job as one record you edit in place. When scope changes, you overwrite the old numbers or bolt on a &quot;change order&quot; note that lives somewhere the client never sees and the sub definitely never sees.</p>
            <p>The result is that three people are working off three different versions of the truth. The office has the updated total. The lead carp is still framing to the original plan. The homeowner thinks the price you quoted in March still holds. Nobody&apos;s lying. The data just never stayed tied together.</p>
            <p>This is where the spreadsheet-vs-purpose-built debate gets interesting. A spreadsheet is dumb but honest — everyone can see it change. A purpose-built CRM is smart but opaque — it hides the change history behind a UI that only the office logs into. Neither one keeps scope, subs, and payment in the same living document.</p>
            <blockquote className="article-quote">
              The number that matters isn&apos;t what you quoted. It&apos;s what everyone currently believes they&apos;re owed and owe. A CRM that can&apos;t show me that in one view is just a fancy address book.
              <cite>— GC, residential remodels, 11 years</cite>
            </blockquote>


            <h2>All-in-one vs. best-of-breed</h2>
            <p>The pitch for all-in-one is obvious: one login, one bill, scope and scheduling and invoicing in one place. And for a lot of small crews, that&apos;s genuinely the right call — fewer tools means fewer things to keep in sync manually.</p>
            <p>Here&apos;s the honest tradeoff, and it doesn&apos;t always favor going modular: best-of-breed stacks create seams. Every integration is a place data goes stale. If your scheduling tool and your payment tool don&apos;t talk, you&apos;ve just recreated the three-versions-of-truth problem with extra subscriptions.</p>
            <p>So the real question isn&apos;t &quot;how many tools&quot; — it&apos;s &quot;which piece actually needs to be run by someone who isn&apos;t you.&quot;</p>


            <h2>The one piece that shouldn&apos;t be in-house</h2>
            <p>Scope tracking should be in-house and tailored. You know your trade, your margins, your change-order rhythm better than any generic template does. Bend the tool to your workflow, not the other way around.</p>
            <p>Money is the exception. The moment scope shifts and a change order adds $6k, the trust question isn&apos;t a data question — it&apos;s a &quot;who&apos;s holding the funds&quot; question. That&apos;s the one seam where a neutral third party earns its keep. Escrow doesn&apos;t need to know your scope logic. It just needs to release the right amount when the milestone the client agreed to actually gets hit.</p>
            <p>Structured that way, your stack is mostly yours: your scoping, your scheduling, your sub coordination — with exactly one third-party piece sitting between you and the client&apos;s money, so nobody has to take anybody&apos;s word for it when scope moves.</p>
            <p>If you want to see how the escrow piece drops into a stack you already control, the contractor plans lay out where it fits.</p>
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
