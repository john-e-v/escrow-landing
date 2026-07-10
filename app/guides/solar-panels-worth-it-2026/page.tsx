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
          <h1>Are Solar Panels Worth It in 2026? Cost, Payback, and When They Don&apos;t Pay Off</h1>
          <p className="hero-subtitle">Solar panels are worth it in most cases—but only if you own your home for at least 8 more years and your utility rates are above the national average. This breakdown covers the real payback math and the two conditions that flip the verdict.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Yes—solar panels are worth it for most homeowners in 2026, but only if you&apos;ll stay in the house at least 8 more years and your utility rate is above the national average of roughly 17 cents per kWh.</p>
            <p>That&apos;s the whole verdict in one sentence. Everything below is the math that backs it up and the two conditions that flip it from a smart move to a money pit.</p>


            <h2>The Real Cost Math</h2>
            <p>A typical residential system runs 6 to 10 kW and costs $18,000 to $30,000 before incentives. The federal Residential Clean Energy Credit still covers 30% through 2032, so subtract $5,400 to $9,000 right off the top. That brings your net cost to roughly $12,600 to $21,000.</p>
            <p>The average U.S. household spends about $1,700 a year on electricity. A properly sized system offsets 80% to 100% of that, saving you $1,360 to $1,700 annually. Add state rebates and net-metering credits where they exist, and your effective savings can climb higher.</p>
            <p>Divide net cost by annual savings and you get your payback window: 8 to 12 years for most homeowners. Panels are warrantied for 25 years and typically keep producing beyond that, so the 13-plus years after payback are close to free power.</p>


            <h2>Resale and Home Value</h2>
            <p>Owned solar systems add roughly 4% to home value on average, according to multiple appraisal studies—about $15,000 on a $375,000 home. That often recovers most or all of your net installation cost even if you sell before payback.</p>
            <p>The key word is owned. Leased systems and PPAs (power purchase agreements) add little to no resale value and frequently complicate the sale, because buyers have to assume your contract.</p>
            <blockquote className="article-quote">
              A paid-off system reads to buyers as a free utility upgrade. A leased one reads as a monthly bill they didn&apos;t sign up for.
              <cite>— Residential appraiser, Southwest region</cite>
            </blockquote>


            <h2>When the Verdict Flips</h2>
            <p>Condition one: your utility rate is below average. If you&apos;re paying 11 or 12 cents per kWh—common in parts of the Pacific Northwest and the South with cheap hydro or gas—your annual savings drop enough to push payback past 15 years. At that point you&apos;re betting on rate increases that may not come fast enough.</p>
            <p>Condition two: you won&apos;t stay long enough. If you&apos;re likely to move within 5 to 7 years, you probably won&apos;t hit payback, and while resale value helps, it rarely fully closes the gap this early. Combine a short horizon with a low utility rate and solar becomes a net loss.</p>
            <p>Two other quiet killers: a roof that needs replacement within 10 years (you&apos;ll pay to remove and reinstall panels) and heavy shade that cuts production below the estimates any installer used to sell you.</p>


            <h2>The Bottom Line</h2>
            <p>Run your own numbers before you sign anything. Pull your last 12 months of electric bills, find your actual per-kWh rate, and ask any installer for a production estimate specific to your roof&apos;s orientation and shading—not a regional average.</p>
            <p>If you own your home, plan to stay 8-plus years, and pay above 17 cents per kWh, the math works. If you&apos;re outside those lines, wait or reconsider.</p>
            <p>When you&apos;re ready to get quotes, the biggest risk isn&apos;t the panels—it&apos;s paying a large deposit to a contractor who underdelivers or disappears. Protecting that payment until the work is verified is the difference between a smart investment and an expensive lesson.</p>
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
