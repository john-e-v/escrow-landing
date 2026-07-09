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
          <h1>Is a Deck Worth It? Cost, Resale Value, and When It Backfires</h1>
          <p className="hero-subtitle">A wood deck returns most of its cost at resale — but only if you keep it simple and sized to the house. Composite and elaborate builds tell a different story once you run the actual numbers.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Yes — a simple wood deck is worth it, returning about 68% of its cost at resale according to national remodeling data. That&apos;s one of the highest recovery rates of any outdoor project, and it beats most kitchen and bathroom remodels on pure ROI.</p>
            <p>But that verdict comes with a size and material asterisk that most homeowners blow past. Get those two things wrong and the same project that pays you back becomes money you&apos;ll never see again.</p>


            <h2>The Math That Backs the Verdict</h2>
            <p>A pressure-treated wood deck runs $15 to $25 per square foot installed. For a standard 300-square-foot deck, that&apos;s roughly $4,500 to $7,500. At a 68% resale return, you recover $3,000 to $5,100 of that when you sell.</p>
            <p>The rest isn&apos;t wasted — it&apos;s the price of using the deck for years before you list. If you sell within five to seven years, the recovered value plus the use you got makes the payback effectively complete. Buyers now expect outdoor living space, so a deck also helps a house sell faster, which is its own form of return that never shows up in the ROI percentage.</p>
            <p>Composite tells a different story. A composite deck costs $30 to $60 per square foot — double or triple the wood price — but only returns around 63% at resale. You&apos;re spending far more to recover a smaller percentage of a bigger number. The upside is maintenance: composite skips the every-few-years staining and sealing that wood demands, which can be worth the premium if you&apos;re staying put for 15 or 20 years.</p>
            <blockquote className="article-quote">
              The decks that hold value are the boring ones — right size, simple shape, no built-in features nobody asked for.
              <cite>— residential appraiser, Midwest market</cite>
            </blockquote>


            <h2>When the Verdict Flips</h2>
            <p>The catch is proportion. A deck should cost no more than 10% to 15% of your home&apos;s value, and it should be sized to match the house. Bolt a $40,000 multi-level deck with a built-in kitchen, pergola, and hot tub onto a $250,000 home and the resale math collapses — buyers won&apos;t pay a premium that exceeds what comparable homes in the neighborhood carry. You&apos;ve priced yourself above the ceiling for your street.</p>
            <p>Elaborate builds also age faster in buyer preference. Custom features feel dated within a decade, while a clean rectangular deck stays neutral. The rule holds in reverse too: an undersized deck crammed against a large home reads as an afterthought and adds almost nothing.</p>
            <p>The verdict flips the moment your deck stops looking like it belongs to the house. Match the scale, keep the design simple, and lean toward wood unless you&apos;re staying long enough for maintenance savings to matter.</p>


            <h2>Before You Build</h2>
            <p>The single biggest variable in whether a deck pays off isn&apos;t material or size — it&apos;s the quality of the build and whether you actually get what you paid for. A deck that fails inspection, sags, or gets abandoned mid-project turns a 68% return into a total loss.</p>
            <p>That&apos;s the part worth protecting. Getting matched with vetted contractors who agree to escrow payments means your money is only released as the work meets each milestone — so a stalled or shoddy build doesn&apos;t leave you holding the bill.</p>
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
