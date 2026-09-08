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
          <h1>Accounting Software vs. Payroll Add-On: Where Crew Costs Actually Get Buried</h1>
          <p className="hero-subtitle">Running payroll through your accounting software feels tidy until crew labor stops mapping cleanly to jobs. This teardown compares a standalone payroll approach against an accounting bolt-on, and where each one loses the labor-cost visibility your margins depend on.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Payroll costs your crew $47/hour loaded, but your accounting software probably books it at $32. That 15-dollar gap — burden, taxes, workers&apos; comp, unpaid drive time — is where job margins quietly die, and where the payroll-vs-accounting decision actually gets decided.</p>
            <p>Most contractors don&apos;t pick a payroll approach on purpose. You start with accounting software, it offers a payroll add-on, you click yes because one login beats two. That&apos;s a defensible call. But the question isn&apos;t which tool is better in the abstract — it&apos;s which one keeps labor cost mapped to the job it was spent on. That&apos;s the number your margins depend on, and it&apos;s the one both approaches are worst at protecting.</p>


            <h2>The accounting bolt-on: tidy books, blurry jobs</h2>
            <p>The accounting-software payroll add-on wins on reconciliation. Wages, taxes, and liabilities land in the general ledger automatically, and at tax time your accountant loves you. For a crew that mostly does one type of work, this is genuinely hard to beat.</p>
            <p>Where it loses you is job-level attribution. Accounting-first tools think in accounts, not jobs. Getting labor to split cleanly across three concurrent projects usually means class tracking, manual allocation, or a paid tier you didn&apos;t budget for. Overtime and burden often post as lump-sum ledger entries, not per-job cost — so the Miller job looks profitable until you realize it ate 60% of last week&apos;s overtime that got smeared across everything.</p>
            <blockquote className="article-quote">
              Our books balanced to the penny and I still couldn&apos;t tell you which job lost money. The labor was all in one bucket.
              <cite>— remodeling contractor, 9-person crew</cite>
            </blockquote>


            <h2>The standalone payroll approach: sharp cost, extra seams</h2>
            <p>Purpose-built payroll (or a field-time app feeding it) usually captures cost at the source — clock-in tied to a job code, burden calculated per hour, overtime attributed to the shift that caused it. That&apos;s the visibility the accounting bolt-on struggles to reconstruct after the fact.</p>
            <p>The tradeoff is real and it&apos;s not in anyone&apos;s favor: you now have two systems that have to talk. Every standalone tool eventually needs a sync into your books, and that sync is where hours get double-counted, a pay period straddles two jobs wrong, or a manual export quietly drifts from what the ledger says. Best-of-breed gives you sharper data and one more seam to babysit. All-in-one gives you fewer seams and softer data. Pick your poison honestly.</p>


            <h2>Where the money actually gets buried</h2>
            <p>Neither approach loses money in the payroll run itself — the checks clear either way. The loss happens in the translation layer between &quot;what the crew cost&quot; and &quot;which job it belonged to.&quot; The bolt-on buries it in ledger buckets. The standalone buries it in sync gaps. Same wound, different knife.</p>
            <p>The practical fix isn&apos;t a magic tool. It&apos;s deciding, before you buy, which number you refuse to lose. If job-cost accuracy is what protects your bids, weight toward the standalone approach and budget real time for the sync. If clean books and one login matter more, take the bolt-on and build a monthly labor-allocation habit to recover job detail by hand.</p>
            <p>Our bias, for the record: keep as much of the stack in-house and tailored to how you actually run jobs — and reserve the third-party dependency for the one place where a neutral middle genuinely earns its keep. That&apos;s escrow. Payment holds shouldn&apos;t live inside the same tool that runs your labor, because the point of escrow is that neither side controls it. Everything else you can shape to fit your crew.</p>
            <p>If you&apos;re rebuilding the stack and want to see where a neutral escrow layer fits alongside your payroll and books, the contractor plans lay it out.</p>
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
