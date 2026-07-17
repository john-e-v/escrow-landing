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
          <div className="hero-badge">Cost &amp; ROI · July 2026</div>
          <h1>Is a Primary Suite Addition Worth It? Cost, ROI, and When It Backfires</h1>
          <p className="hero-subtitle">A primary suite addition costs $100K–$300K and returns only 50–60% at resale, so it&apos;s worth it for the years you&apos;ll live there, not the sale. This guide breaks down the math, the payback reality, and the one condition that flips the verdict.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>It depends on how long you&apos;ll stay: a primary suite addition is worth it if you&apos;ll live there five or more years, and a money-loser if you&apos;re building it to sell.</p>
            <p>Here&apos;s why. A primary suite addition runs $100,000 to $300,000 depending on square footage, whether you&apos;re building up or out, and how much you spend on the bathroom (which alone can eat $30,000 to $60,000). At resale, you recover only 50% to 60% of that. On a $200,000 addition, that&apos;s $100,000 to $120,000 back — a paper loss of $80,000 to $100,000 the day you sell.</p>
            <p>So the verdict flips entirely on the calendar.</p>


            <h2>The Math That Actually Matters</h2>
            <p>Forget resale ROI for a second. The real return on a suite addition is the years you use it.</p>
            <p>Spread a $200,000 addition over 10 years of ownership and you&apos;re paying roughly $20,000 a year for a larger, more private, more functional home — before you recover the $100,000+ at sale. Compare that to renting a bigger house or moving up to a larger property, and the addition often wins, especially once you factor in a mortgage you&apos;ve already locked in at a lower rate than today&apos;s.</p>
            <p>Payback timeline in pure resale terms: you don&apos;t fully break even. You accept the 40-50% haircut as the cost of living better. That&apos;s a defensible trade when the alternative — selling and buying up — carries 8-10% in transaction costs (agent commissions, closing, moving) on the entire home value, not just the addition.</p>
            <blockquote className="article-quote">
              Homeowners who add a suite for the last stretch before selling almost always regret it. The ones who use it for a decade rarely think about the ROI number at all.
              <cite>— Residential appraiser, 15 years</cite>
            </blockquote>


            <h2>The Catch That Flips the Verdict</h2>
            <p>The verdict flips to &quot;not worth it&quot; the moment your finished home value pushes past the ceiling of your neighborhood.</p>
            <p>If comparable homes on your street top out at $600,000 and your addition takes you to $750,000, you won&apos;t recover 50-60% — you&apos;ll recover closer to 30%, because buyers won&apos;t pay premium prices in a mid-tier area. This is over-improvement, and it&apos;s the single most common way suite additions backfire. The safe rule: your post-addition value should stay under 110-115% of the highest recent sale within a few blocks.</p>
            <p>The second flip: a five-figure structural surprise. Additions that require foundation work, roofline changes, or rerouting HVAC and plumbing can blow past budget by 20-40%. That&apos;s where the ROI math collapses fastest — and where a vague contractor estimate becomes a real financial risk.</p>


            <h2>Before You Commit</h2>
            <p>Pull three to five recent sales within a quarter-mile, confirm your projected value stays under the neighborhood ceiling, and get itemized bids so you know exactly where the $100K-$300K is going. If you&apos;re staying five-plus years and your numbers clear the ceiling, build it. If you&apos;re selling within two, put the money toward a targeted kitchen or bath refresh instead — those recover 70-80%.</p>
            <p>When you&apos;re ready to price it out for real, the biggest variable left is who does the work and how you protect the payment against the exact structural surprises that wreck the budget.</p>
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
