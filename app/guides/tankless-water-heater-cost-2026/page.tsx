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
          <div className="hero-badge">Cost &amp; Timeline · August 2026</div>
          <h1>How Much Does a Tankless Water Heater Cost to Install in 2026?</h1>
          <p className="hero-subtitle">A tankless water heater runs $1,800 to $4,500 installed in 2026, but gas retrofits and electrical upgrades can push it past $6,000. Here&apos;s what actually drives the number and why the spread is so wide.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>A tankless water heater costs $1,800 to $4,500 installed in 2026 — but a gas retrofit with electrical upgrades can push the total past $6,000. That&apos;s a wide spread, and it&apos;s not padding. The difference between the low end and the high end usually comes down to one question: are you replacing an existing tankless unit in the same spot, or are you converting from a traditional tank and reworking your gas, venting, and electrical to make it happen?</p>
            <p>If you&apos;re swapping like-for-like, expect the lower half of that range. If you&apos;re converting for the first time, budget for the upper half — and read on before you get sticker shock from a quote.</p>


            <h2>What actually moves the number</h2>
            <p>The unit itself is the smallest variable. A quality tankless heater runs $500 to $1,500 depending on flow rate and fuel type. Everything else on your invoice is labor and infrastructure.</p>
            <p>Here&apos;s what drives the spread from cheap to expensive:</p>
            <p>**Gas line sizing.** Tankless units burn gas fast — often 150,000 to 199,000 BTU versus 40,000 for a tank. Your existing half-inch gas line usually can&apos;t feed that. Upsizing to three-quarter-inch line, sometimes back to the meter, adds $500 to $2,000 depending on the run length.</p>
            <p>**Electrical upgrades.** Electric tankless units are the sneaky expensive ones. They can pull 120+ amps, which frequently means a new dedicated circuit, a subpanel, or even a full 200-amp service upgrade. That last one alone can add $2,000 to $4,000.</p>
            <p>**Venting.** Tankless gas units need stainless steel or PVC venting, not the old galvanized flue. New venting through a wall or roof runs $300 to $1,200.</p>
            <p>**Location and access.** Moving the unit to a new spot means extending water, gas, and vent lines. A tucked-away crawlspace install costs more in labor than a garage wall at eye level.</p>
            <blockquote className="article-quote">
              The unit price barely matters. Ninety percent of my quotes swing on whether the gas line and panel can handle the load — that&apos;s the real cost, and homeowners never see it coming.
              <cite>— Licensed plumbing contractor, describing tankless quotes</cite>
            </blockquote>


            <h2>Why region and permits widen the gap</h2>
            <p>Labor rates alone can double your install cost. A tankless conversion that runs $2,500 in labor in a low-cost metro can hit $5,000+ in coastal California, the Northeast, or any tight labor market where licensed plumbers and electricians are booked out for weeks.</p>
            <p>Permitting adds another layer. Most jurisdictions require permits for gas line changes and electrical service upgrades, and inspection fees range from $50 to $500. Some areas mandate a licensed pro for gas work — no DIY shortcut — which locks in the labor cost whether you like it or not.</p>
            <p>Materials pricing has also stayed volatile into 2026. Copper, stainless venting, and electrical components all fluctuate, so two identical quotes six months apart can differ by several hundred dollars for reasons that have nothing to do with your home.</p>


            <h2>How to read your quotes</h2>
            <p>When you collect estimates, the number to interrogate isn&apos;t the total — it&apos;s the line items. A $2,000 quote and a $5,500 quote for the same house usually mean the two contractors scoped the job differently. One assumed your gas line and panel are fine; the other actually checked.</p>
            <p>Ask each contractor to spell out gas line work, electrical work, venting, and permits separately. If a bid is suspiciously low, it&apos;s often missing one of those — and you&apos;ll pay for it mid-project when the surprises surface.</p>
            <p>Getting matched with a few pros who quote transparently and stand behind their scope is the fastest way to find your real number instead of guessing at a range.</p>
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
