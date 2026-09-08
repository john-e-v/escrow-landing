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
          <h1>Is New Siding Worth It Before Selling? Cost, ROI, and When to Skip It</h1>
          <p className="hero-subtitle">New siding recoups a strong share of its cost at resale, but full replacement rarely pays for itself when you&apos;re selling within a year. Here&apos;s the math on recovery rates, the payback timeline, and the condition that flips the verdict entirely.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>It depends on one thing: the condition of your current siding. If it&apos;s rotting, warped, or visibly failing, new siding is worth it before selling. If it&apos;s merely dated but sound, it usually isn&apos;t — and here&apos;s the math to prove it.</p>
            <p>New siding is one of the highest-recovering exterior projects in real estate. According to industry cost-versus-value data, fiber-cement siding recoups roughly 55% to 88% of its cost at resale, and vinyl siding lands in the 63% to 82% range depending on your market. Those are strong numbers compared to interior remodels, but read them carefully: recouping 80% still means you eat 20% of the bill.</p>


            <h2>The Dollars and the Payback Timeline</h2>
            <p>A full siding replacement on an average 1,500 to 2,000 square-foot home runs $14,000 to $30,000 for vinyl and $18,000 to $45,000 for fiber-cement, installed. At a 75% recovery rate, a $25,000 job returns about $18,750 in added sale value — a net cost of roughly $6,250 to you.</p>
            <p>That gap is the problem when you&apos;re selling inside a year. You don&apos;t get the payback timeline that a long-term owner gets. A homeowner staying 10 years also collects lower maintenance costs, better insulation, and fewer repairs. A seller collects none of that — just the one-time resale bump, minus the shortfall.</p>
            <p>So if your siding is sound, you&apos;re spending $6,000 or more to recover value you could get for far less. A quality pressure-wash ($300 to $600) plus spot repairs and fresh trim paint ($1,500 to $3,500) often delivers 90% of the curb-appeal impact at a tenth of the cost.</p>
            <blockquote className="article-quote">
              Buyers react to what they see in the first ten seconds. Clean, intact siding photographs the same as new siding — the ROI difference is almost entirely in the failures you can hide with a wash and some caulk.
              <cite>— Residential appraiser, on pre-listing improvements</cite>
            </blockquote>


            <h2>The Condition That Flips the Verdict</h2>
            <p>Everything above assumes your siding is cosmetically tired but structurally fine. The verdict flips completely the moment it isn&apos;t.</p>
            <p>If an inspector finds rot, moisture intrusion, pest damage, or asbestos-containing panels, buyers won&apos;t negotiate — they&apos;ll walk, or demand a credit far larger than the repair. A failing siding disclosure can knock $10,000 to $20,000 off offers and shrink your buyer pool to bargain hunters. In that scenario, replacing before listing isn&apos;t a luxury upgrade; it&apos;s damage control that protects your entire sale price.</p>
            <p>The test is simple: press on the boards near the ground and around windows. Soft spots, bubbling, or crumbling means replace. Faded color and old style mean clean and paint.</p>


            <h2>Before You Decide</h2>
            <p>Get two or three quotes from licensed siding contractors and ask each to assess whether repair or replacement is genuinely warranted — not just what earns them the bigger invoice. A trustworthy contractor will tell you when a wash-and-repair is the smarter play for a quick sale.</p>
            <p>Protect yourself on the money side, too. On a five-figure exterior job, milestone-based escrow payments mean the contractor gets paid as verified work is completed, not before. That keeps everyone honest and keeps your listing timeline on track.</p>
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
