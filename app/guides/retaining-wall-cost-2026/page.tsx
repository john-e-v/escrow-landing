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
          <div className="hero-badge">Cost &amp; Timeline · September 2026</div>
          <h1>How Much Does a Retaining Wall Cost in 2026?</h1>
          <p className="hero-subtitle">A retaining wall runs $3,500 to $12,000 for a typical residential job, but engineered walls over 4 feet can climb past $25,000. Height, material, drainage, and soil conditions are what actually move the number.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>A retaining wall costs $3,500 to $12,000 for a typical residential job, and engineered walls taller than 4 feet routinely climb past $25,000. That&apos;s a huge spread, and it&apos;s not padding — the same 40-foot wall can legitimately cost three times as much depending on how tall it is, what it&apos;s holding back, and what&apos;s underneath it.</p>
            <p>Here&apos;s what actually moves the number, in order of impact.</p>


            <h2>Height Is the Biggest Multiplier</h2>
            <p>A 2-foot garden wall and a 6-foot structural wall are barely the same product. Once a wall passes roughly 4 feet (measured from the bottom of the footing, not ground level), most jurisdictions require an engineer&apos;s stamp, a permit, and reinforcement — rebar, geogrid soil anchors, or a deeper footing.</p>
            <p>That single threshold can add $3,000 to $8,000 in engineering, inspection, and material before you&apos;ve laid a single block. It&apos;s why two neighbors with walls that look similar from the street can have receipts that aren&apos;t remotely close.</p>
            <blockquote className="article-quote">
              The wall you see is maybe 40% of the cost. The other 60% is the drainage, the footing, and the backfill nobody ever looks at.
              <cite>— Excavation contractor, Pacific Northwest</cite>
            </blockquote>


            <h2>Material Sets the Baseline</h2>
            <p>Rough installed ranges per square foot of wall face:</p>
            <p>- Interlocking concrete block (segmental): $20–$40
- Poured concrete: $30–$60
- Natural stone: $40–$80+
- Timber: $15–$30 (but shortest lifespan)
- Boulder / gabion: $25–$50</p>
            <p>Stone and poured concrete cost more up front but last decades longer. Timber is cheap now and expensive later — you&apos;re often rebuilding in 15 to 20 years. The &apos;right&apos; material depends on how long you plan to own the property.</p>


            <h2>Drainage and Soil: The Hidden Budget</h2>
            <p>A retaining wall fails from water pressure, not weight. Proper drainage — gravel backfill, perforated pipe, weep holes, filter fabric — adds $10 to $20 per square foot but is the difference between a wall that lasts 40 years and one that bows out in five.</p>
            <p>Soil is the wildcard nobody quotes accurately until they dig. Clay-heavy or expansive soil needs deeper footings and more reinforcement. If the crew hits bedrock, groundwater, or fill dirt from a previous project, excavation costs jump fast. This is the single most common reason a fair quote grows mid-project.</p>


            <h2>Region, Permits, and Labor</h2>
            <p>Location swings the total more than most homeowners expect. Permit fees range from $50 in rural counties to $1,500+ in strict coastal or seismic zones, and inspections may be required at multiple stages.</p>
            <p>Labor is the other regional lever. In a tight construction market — coastal metros, boom towns — skilled masonry crews are booked out and command premium rates. The same wall built by the same crew can cost 30–40% more in San Diego than in rural Ohio, purely on labor and permitting.</p>


            <h2>How to Read Your Quotes</h2>
            <p>A quote that&apos;s dramatically lower than the others usually means something got skipped — engineering, drainage, or footing depth. Ask every bidder three questions: How deep is the footing? What&apos;s the drainage plan? Is engineering included? If the answers are vague, the price is fiction.</p>
            <p>The safest path is getting multiple detailed bids from contractors who put their scope in writing and stand behind it — including how and when you pay. When your payment is held in escrow and released as work is verified, that low-baller either sharpens their scope or walks away, and either outcome protects you.</p>
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
