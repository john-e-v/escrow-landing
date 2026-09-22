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
          <div className="hero-badge">Contractor Ops · September 2026</div>
          <h1>Estimating in a Spreadsheet vs. an App: Where Your Markup Actually Disappears</h1>
          <p className="hero-subtitle">A spreadsheet estimate feels flexible until a broken formula quietly eats your margin. This teardown compares spreadsheet estimating against purpose-built apps, names the real tradeoffs of both, and shows where your markup actually leaks between the two.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>One deleted cell on a $180,000 kitchen remodel cost a contractor I know $11,400 in markup he never got back. The formula that summed his subs still worked. The one that added his 18% margin on top of the subs total? He&apos;d dragged over a row while cleaning up the sheet and it silently referenced the wrong range. The bid went out low, he won it, and he found out at closeout.</p>
            <p>That&apos;s the real problem with the spreadsheet-vs-app question. It&apos;s not about which one looks nicer. It&apos;s about where your markup quietly leaks between the two.</p>


            <h2>What the spreadsheet actually gets right</h2>
            <p>Let&apos;s not pretend the spreadsheet is dumb. For a lot of operators it&apos;s the correct tool, and the app crowd never admits this.</p>
            <p>A spreadsheet is infinitely flexible. You can model a weird phased job, a cost-plus arrangement, and a fixed-bid change order in the same file without asking permission from anyone&apos;s software. It costs nothing beyond what you already own. There&apos;s no per-seat fee that scales against you as you add a PM and an estimator. And you actually understand it, because you built it. When a number looks wrong you can trace it in ninety seconds.</p>
            <p>That last point matters more than app vendors want to say. Nobody trusts a black box that spits out a total. Contractors trust math they can see.</p>
            <blockquote className="article-quote">
              I&apos;ve watched guys abandon a $200-a-month app and go back to their spreadsheet, not because the app was bad, but because they couldn&apos;t explain the number to the client on the phone.
              <cite>— GC, residential remodels</cite>
            </blockquote>


            <h2>Where the spreadsheet quietly eats you</h2>
            <p>The flexibility is also the failure mode. Every formula is a place a mistake can hide, and spreadsheets don&apos;t warn you. A wrong reference, a hardcoded number where a formula should be, a markup applied to a subtotal that no longer includes the line you added last — none of it throws an error. It just prices your labor at zero and moves on.</p>
            <p>The other leak is versioning. &quot;Estimate_final_v3_REAL.xlsx&quot; is a punchline because it&apos;s true. When three people touch a bid and two of them are working off yesterday&apos;s copy, you don&apos;t have one estimate, you have three, and you&apos;ll send the wrong one under deadline.</p>
            <p>Purpose-built apps fix exactly these two things. Markup rules live in one place and apply consistently, so you can&apos;t accidentally drop your margin on line 47. Everyone works off one live version. That&apos;s the honest case for the app.</p>


            <h2>Where the app quietly eats you back</h2>
            <p>But the app has its own leak, and it&apos;s a subtler one: it makes decisions for you. Someone else decided how markup gets applied, how overhead gets allocated, how a change order flows into the contract total. When their default doesn&apos;t match how you actually run jobs, you either bend your business to the software or fight it every bid. And you&apos;re paying monthly for the privilege, forever, whether or not you closed work that month.</p>
            <p>So the real teardown isn&apos;t spreadsheet vs. app. It&apos;s: which parts of your stack should be tailored to exactly how you operate, and which parts should be handled by someone neutral?</p>


            <h2>The one piece that shouldn&apos;t be in-house</h2>
            <p>Estimating should be yours. Whether that&apos;s a locked-down spreadsheet with protected formula cells or a purpose-built app, the logic should match your business, because your margin depends on it. Same with scheduling, punch lists, and job costing — bend those to your workflow, not the other way around.</p>
            <p>The one exception is money that hasn&apos;t been earned yet. Deposits and progress payments are the piece you don&apos;t want to control, because the whole point of them is trust between two parties. A homeowner isn&apos;t reassured that your in-house system says the money is safe. Neither are you when it&apos;s their deposit sitting in your operating account. That&apos;s the single place a neutral third party — escrow — does something your own stack structurally can&apos;t.</p>
            <p>So tailor everything else. Fix your markup where it leaks. And put the payments in the one place nobody has to take your word for.</p>
            <p>If you want to see how the escrow piece fits alongside a stack you already run, look at the contractor plans.</p>
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
