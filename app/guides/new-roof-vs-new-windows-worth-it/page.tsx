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
          <div className="hero-badge">Cost &amp; ROI · September 2026</div>
          <h1>New Roof vs. New Windows: Which Is Worth It First?</h1>
          <p className="hero-subtitle">It depends on which one is actively failing — but if both are due, the roof wins nearly every time. This breakdown compares cost, ROI, and the resale math that decides which upgrade earns your dollars first.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>The roof wins first — nearly every time both are due at once. If your roof is actively leaking or has curling, missing, or granule-shedding shingles, that upgrade is not optional and it can&apos;t wait for a better quarter. Windows can. That&apos;s the whole verdict in one line, and the math below only reinforces it.</p>
            <p>A roof failure doesn&apos;t stay a roof problem. Water gets into decking, insulation, drywall, and eventually framing, and each of those turns a $10,000 job into a $25,000 one. Windows that are drafty or foggy cost you money slowly, in higher energy bills — but they don&apos;t rot your house while you decide.</p>


            <h2>The Cost and ROI Math</h2>
            <p>Here&apos;s what the two projects actually run and return:</p>
            <p>**New roof (asphalt shingle):** $9,000–$18,000 for an average home. Resale value recouped at sale: roughly 60–68% according to national remodeling cost-vs-value data. A new roof also removes a deal-killer — buyers and inspectors flag aging roofs hard, and lenders sometimes won&apos;t close without a certified remaining lifespan.</p>
            <p>**New windows (full replacement, whole house):** $10,000–$25,000 depending on frame material and count. Resale value recouped: roughly 63–68% for vinyl, slightly higher for wood-clad. Energy savings run $150–$500 per year, meaning the efficiency payback alone stretches 20–40 years — longer than most people own the house.</p>
            <p>On pure resale percentage, the two are close. The tiebreaker is risk. The roof protects the entire value of the structure below it; windows improve comfort and bills at the margins. Dollar for dollar, the roof defends more of your investment.</p>
            <blockquote className="article-quote">
              A roof that fails takes the ceiling, the insulation, and half the framing with it. A window that fails just costs you a little on the heating bill until you get to it.
              <cite>— General contractor, 20+ years in residential restoration</cite>
            </blockquote>


            <h2>When the Verdict Flips</h2>
            <p>The roof-first rule inverts under one condition: your roof is genuinely sound and your windows are the thing actively failing.</p>
            <p>If your roof was replaced in the last 10–15 years and passes inspection, but your windows are single-pane, painted shut, fogged between panes, or letting visible drafts through — then windows earn your dollars first. In that scenario the roof isn&apos;t at risk, and the windows are the item dragging down comfort, efficiency, and buyer impressions today.</p>
            <p>The flip also happens in extreme climates. In a hot-summer or cold-winter market where HVAC costs dominate, high-performance windows can shorten their payback to 10–15 years and score better with energy-conscious buyers. But this only applies when the roof isn&apos;t the one bleeding — if both are aging, water damage always outranks a utility bill.</p>
            <p>The honest test: walk the attic after a hard rain. If you see staining, damp decking, or daylight through the boards, stop reading and call for a roof quote. If it&apos;s bone dry and your windows rattle in the wind, start with the glass.</p>


            <h2>Before You Commit Either Way</h2>
            <p>Both of these are five-figure jobs where the wrong contractor costs you more than the wrong choice between roof and windows. Get the failing item scoped first, get real numbers from people who&apos;ll stand behind the work, and protect the payment until the job is verified done.</p>
            <p>If you&apos;re ready to price out whichever one is due, get matched with contractors who accept escrow payments — so your money moves only when the work is actually finished.</p>
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
