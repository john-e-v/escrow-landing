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
          <h1>Is Replacing Your Driveway Worth It? Cost, Resale Value, and When to Skip It</h1>
          <p className="hero-subtitle">A new driveway rarely pays for itself in resale dollars, but it can make or break a buyer&apos;s first impression. Here&apos;s the math on cost, recovery, and the one condition that flips the verdict.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>It depends on one thing: whether your current driveway hurts the sale. If it does, replacing it is worth it. If it&apos;s merely old but functional, it usually isn&apos;t.</p>
            <p>A new driveway almost never pays for itself in resale dollars. But it can quietly kill a deal before a buyer walks through your front door — and that&apos;s the number that actually matters.</p>


            <h2>The Math</h2>
            <p>Here are the real cost ranges for a full driveway replacement (tear-out plus new install), based on a standard 2-car, 600-square-foot driveway:</p>
            <p>Asphalt: $3,000–$7,000 ($5–$12 per sq ft)
Concrete: $4,000–$9,000 ($8–$18 per sq ft)
Stamped or decorative concrete: $8,000–$15,000+
Paver driveway: $10,000–$25,000</p>
            <p>Now the recovery. Unlike a kitchen or bath, driveways don&apos;t have a clean, tracked ROI percentage — but exterior and curb-appeal projects generally recover 50–70% of their cost at resale. On a $6,000 asphalt job, that&apos;s roughly $3,000–$4,200 back in sale price. You&apos;re out-of-pocket $1,800–$3,000 net.</p>
            <p>Payback timeline if you&apos;re staying put: essentially never in dollars. A driveway is a depreciating surface, not an appreciating asset. Asphalt lasts 15–20 years, concrete 25–30. You&apos;re buying function and appearance, not equity.</p>
            <blockquote className="article-quote">
              Buyers don&apos;t pay more for a new driveway. They just quietly subtract for a bad one — and they subtract more than it costs to fix.
              <cite>— Residential real estate agent, on pre-listing repairs</cite>
            </blockquote>


            <h2>The Catch That Flips the Verdict</h2>
            <p>The verdict flips the moment your driveway becomes a first-impression liability.</p>
            <p>A driveway is one of the first three things a buyer sees, before they&apos;ve formed any opinion of the house. Deep alligator cracking, sinking slabs, potholes, weeds through the surface, or oil-stained crumbling asphalt all signal &apos;deferred maintenance&apos; — and buyers assume that neglect continues inside. That perception can knock far more off your offers than the $3,000–$6,000 a replacement costs.</p>
            <p>In that case, replacing (or even resurfacing) isn&apos;t about ROI. It&apos;s about not losing 3–5% off your whole sale price because the house &apos;felt run-down&apos; from the curb.</p>
            <p>So the decision tree is simple:</p>
            <p>Staying 5+ years and it&apos;s functional? Skip it. Sealcoat and patch as needed.
Staying and it&apos;s genuinely failing? Replace it for your own use, not for return.
Selling within a year and it looks rough? Replace or resurface — it&apos;s cheap insurance against low offers.
Selling and it&apos;s merely old but tidy? Skip it. A power-wash and crack-fill is enough.</p>


            <h2>The Cheaper Middle Option</h2>
            <p>Before you commit to full replacement, price out resurfacing. If your base is sound, a new asphalt overlay ($2–$4 per sq ft) or concrete resurfacing ($3–$8 per sq ft) can restore the look for a third to half the cost. That option makes the &apos;worth it before selling&apos; math dramatically better.</p>
            <p>The wrong move is overspending on pavers or stamped concrete right before a sale — you&apos;ll never recover the premium. Match the material to the neighborhood, not to your Pinterest board.</p>
            <p>Whatever route you choose, the quality of the crew determines whether you get 20 years or 8 out of the surface. Poor base prep and rushed pours are the top reasons driveways fail early. Compare a few detailed bids, confirm the prep work is spelled out, and structure payment so you&apos;re not fully paid up before the job is done right.</p>
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
