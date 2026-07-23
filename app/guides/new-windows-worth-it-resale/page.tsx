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
          <h1>Are New Windows Worth It? Cost, Resale Value, and When to Skip It</h1>
          <p className="hero-subtitle">New windows recoup roughly 65-70% at resale, but the payback math changes entirely depending on your climate and how long you&apos;re staying. Here&apos;s when replacement pays and when repair beats a full swap.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>It depends on how long you&apos;re staying: new windows are worth it if you&apos;ll be in the house five or more years, and rarely worth it if you&apos;re selling within two.</p>
            <p>That&apos;s the whole decision in one line, but the numbers behind it are worth seeing, because the gap between &quot;great investment&quot; and &quot;money pit&quot; is wider with windows than almost any other upgrade.</p>


            <h2>The Math</h2>
            <p>A full-house window replacement runs $8,000 to $24,000 for an average home, depending on frame material and window count. Vinyl replacements land around $400-$700 per window installed; wood and fiberglass push $800-$1,500 each.</p>
            <p>At resale, you recoup roughly 65-70% of that cost according to national remodeling data. So on a $15,000 job, expect about $10,000 back in home value — a $5,000 net cost on paper.</p>
            <p>But resale isn&apos;t the only return. New energy-efficient windows cut heating and cooling bills by $125-$465 a year per ENERGY STAR estimates. Take the middle of that range — say $300 a year — and your $5,000 net cost pays back in energy savings over roughly 16 years, or faster in extreme climates.</p>
            <p>Here&apos;s where the stay-length rule kicks in. If you sell in year two, you&apos;ve captured almost none of the energy savings and eaten the full resale discount. If you stay 10+ years, you&apos;ve collected $3,000+ in utility savings on top of the resale recovery, and the windows have effectively paid for the majority of themselves.</p>
            <blockquote className="article-quote">
              The biggest mistake I see is homeowners replacing perfectly good windows right before listing, expecting buyers to pay a premium. They don&apos;t. Buyers expect functional windows — they only penalize you for bad ones.
              <cite>— Residential appraiser, 15 years</cite>
            </blockquote>


            <h2>When The Verdict Flips</h2>
            <p>The math above assumes your existing windows are genuinely failing — fogged double panes, rotted frames, drafts you can feel, or single-pane glass in a cold climate.</p>
            <p>If your windows are structurally sound and just look dated or leak a little air, the verdict flips to no. Repair beats replacement almost every time in that case. Reglazing a fogged sealed unit costs $75-$200 per sash. New weatherstripping and caulk runs under $50 a window and can recover most of the air-sealing benefit. Storm windows added over existing single panes cost $100-$300 each and deliver 40-50% of the efficiency gain of a full replacement at a fraction of the price.</p>
            <p>Climate also swings the answer. In mild coastal zones where you barely run heat or AC, the energy savings shrink toward the low end and the payback stretches past 20 years — longer than most people own the home. In those markets, replace only for comfort, noise, or curb appeal, not for the utility math.</p>
            <p>And watch the quality trap: cheap builder-grade windows installed poorly will underperform their efficiency ratings, fail early, and drag your resale recovery below 60%. A good installation on mid-tier windows beats a sloppy install on premium ones.</p>


            <h2>The Bottom Line</h2>
            <p>Staying 5+ years with failing windows? Replace them — the combined resale and energy return justifies it. Selling soon, or working with sound windows? Repair, reseal, or add storm windows and put the money elsewhere.</p>
            <p>Either way, the install quality decides whether you land at 70% recovery or 55%. If you&apos;re moving forward on replacement, it&apos;s worth lining up a few vetted quotes and comparing scope side by side before anyone touches your walls.</p>
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
