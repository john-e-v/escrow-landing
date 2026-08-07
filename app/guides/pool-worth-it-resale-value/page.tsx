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
          <div className="hero-badge">Cost &amp; ROI · August 2026</div>
          <h1>Is an In-Ground Pool Worth It? Cost, Resale Value, and When It Sinks Your Home Value</h1>
          <p className="hero-subtitle">An in-ground pool is rarely worth it for resale — you&apos;ll recover only 5–35% of the build cost, and in cold climates it can actively lower your home&apos;s value. This breaks down the real numbers and the one scenario where a pool pays.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>No — an in-ground pool is not worth it for resale in most of the country. You&apos;ll recover only 5–35% of what you spend to build it, and in cold or northern climates, a pool can actively drag your home&apos;s value down instead of lifting it.</p>
            <p>The verdict flips in exactly one scenario, which we&apos;ll get to. But first, the numbers.</p>


            <h2>The Build Math</h2>
            <p>A basic vinyl in-ground pool runs $35,000–$65,000. Fiberglass lands around $45,000–$85,000. Concrete/gunite — the premium option — starts at $60,000 and routinely crosses $100,000 once you add decking, fencing, lighting, and a heater.</p>
            <p>Now the recovery: appraisers and real-estate data consistently put a pool&apos;s added home value at 5–8% of your home&apos;s total value, not a percentage of what you spent. On a $400,000 home, that&apos;s roughly $20,000–$32,000 in added value against a $65,000 build. You&apos;re recovering somewhere between 30% and 50% in the best regional case, and far less — often 5–15% — where pools aren&apos;t expected.</p>
            <p>Then there&apos;s carrying cost. Budget $3,000–$5,000 per year for chemicals, electricity, water, and maintenance. Over ten years of ownership, that&apos;s $30,000–$50,000 you&apos;ll never see again. A liner replacement (every 7–10 years) adds $4,000–$6,000. A new heater is $2,000–$4,000.</p>
            <blockquote className="article-quote">
              Buyers don&apos;t pay you back for the pool. They pay for the home, and the pool is either a small bonus or a maintenance liability they&apos;re mentally deducting from your asking price.
              <cite>— residential appraiser, Sun Belt market</cite>
            </blockquote>


            <h2>The Payback Timeline</h2>
            <p>There isn&apos;t one — not in dollars. A pool almost never &quot;pays back&quot; as a financial investment. The realistic framing is this: you&apos;re spending $65,000 up front plus $3,000–$5,000 a year to buy enjoyment, and hoping to recover a fraction at sale.</p>
            <p>If you sell within 3–5 years, you eat the full depreciation with little offset. If you stay 15+ years and actually use it, the cost-per-use math starts to feel reasonable — but that&apos;s lifestyle value, not resale value. Don&apos;t confuse the two.</p>


            <h2>The Catch — When a Pool Actually Pays</h2>
            <p>The verdict flips in high-end, warm-climate neighborhoods where a pool is the expected default. In parts of Arizona, Florida, Southern California, and Texas, a comparable home without a pool can sit longer and sell for less — because buyers in those markets assume one is there.</p>
            <p>In that specific case, a pool isn&apos;t a value-add; it&apos;s table stakes. Skipping it can cost you more than building it. Recovery in these markets can approach 100% of value, and homes may become effectively unsellable at competitive prices without one.</p>
            <p>Everywhere else — especially anywhere with a real winter — a pool is a lifestyle purchase you should only make if you&apos;ll use it enough to justify the annual cost, knowing you won&apos;t get the money back.</p>


            <h2>Before You Break Ground</h2>
            <p>If you&apos;ve decided the lifestyle value is worth it for you — go in with eyes open on the build itself. Pool construction is one of the most dispute-prone projects in residential contracting: deposits vanish, timelines slip, and &quot;finished&quot; work fails inspection.</p>
            <p>Protecting your payment structure matters as much as choosing the right shell material. Getting matched with contractors who accept escrow payments means your money releases only as verified work gets completed — so a $65,000 project doesn&apos;t turn into a $65,000 lesson.</p>
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
