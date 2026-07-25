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
          <h1>Is a New Fence Worth It? Cost, Resale Value, and When It Doesn&apos;t Pay</h1>
          <p className="hero-subtitle">A new fence recovers about 50-65% of its cost at resale, but its real payoff is faster sales and buyer appeal for the right household. This guide breaks down the dollar ranges, the payback math, and the one condition that flips the verdict against you.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>It depends on one thing: whether you&apos;re selling within two years or staying put. That single fact flips a new fence from a smart move to a money-loser.</p>
            <p>Here&apos;s the baseline. A new fence recovers roughly 50-65% of its cost when you sell. Spend $6,000 and you&apos;ll typically see $3,000-$3,900 of it reflected in your sale price. You don&apos;t get your money back — but you rarely do with any exterior improvement short of a garage door or new siding. What a fence buys you beyond that percentage is speed and buyer appeal, and for the right household, that&apos;s where the real payoff hides.</p>


            <h2>The Dollar Ranges</h2>
            <p>Installed fence costs cluster by material. Here&apos;s what most homeowners actually pay in 2024:</p>
            <p>Pressure-treated wood: $15-$30 per linear foot, or $2,700-$5,400 for a typical 180-foot yard perimeter.</p>
            <p>Vinyl: $25-$40 per linear foot, or $4,500-$7,200 — higher upfront but near-zero maintenance.</p>
            <p>Chain link: $10-$20 per linear foot, or $1,800-$3,600 — cheapest, but adds the least resale value.</p>
            <p>Aluminum or ornamental steel: $30-$60 per linear foot, or $5,400-$10,800 for the upper tier of curb appeal.</p>
            <p>At resale, wood and vinyl in good condition recover the strongest share of that spend. Chain link recovers the least — buyers see it as functional, not a feature.</p>


            <h2>The Payback Math</h2>
            <p>Run the numbers on a $6,000 vinyl fence. At a 58% resale recovery, you get back about $3,480 at closing. On paper, that&apos;s a $2,520 loss.</p>
            <p>But resale recovery isn&apos;t the whole equation. Homes with fenced yards sell measurably faster in markets with families and pet owners. If a fence shaves even two weeks off your time on market, that&apos;s two fewer weeks of mortgage, taxes, and insurance — often $1,500-$3,000 for a mid-priced home — plus a lower chance of a price cut. Factor those in and the effective payback narrows sharply.</p>
            <p>And if you&apos;re staying, the math changes entirely. You&apos;re not buying resale value — you&apos;re buying 15-20 years of privacy, security, and a contained yard. Spread over that lifespan, a $6,000 fence costs roughly $300-$400 a year. That&apos;s a use-value purchase, and it pays back in daily living, not at closing.</p>
            <blockquote className="article-quote">
              The fence pays for itself when a buyer with a dog or a toddler walks in and mentally crosses off a to-do. That emotional shortcut closes deals.
              <cite>— Residential real estate agent</cite>
            </blockquote>


            <h2>The Catch That Flips It</h2>
            <p>The verdict reverses when your buyer pool doesn&apos;t want a fence. In dense urban markets, small lots, or neighborhoods dominated by retirees and young professionals, a fence adds little and can even read as a maintenance liability. In HOA communities with strict fence rules, a non-compliant install can cost you at inspection.</p>
            <p>The other flip: a cheap or poorly installed fence. A leaning, mismatched, or half-rotted fence actively lowers your sale price — it signals deferred maintenance across the whole property. A bad fence is worse than no fence. If you can&apos;t afford to do it right, don&apos;t do it at all before selling.</p>


            <h2>Bottom Line</h2>
            <p>Staying five-plus years or selling to a family market? A well-built fence is worth it. Selling fast to buyers who won&apos;t value it, or working with a budget that only stretches to a low-grade job? Skip it.</p>
            <p>Either way, installation quality decides whether you land at 50% recovery or 65% — and that comes down to who does the work. Getting real quotes from vetted local contractors is the fastest way to see where your specific yard falls.</p>
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
