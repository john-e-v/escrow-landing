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
          <h1>How Much Does Crawl Space Encapsulation Cost in 2026?</h1>
          <p className="hero-subtitle">Crawl space encapsulation runs $5,000 to $15,000 for most homes, but severe moisture damage can push it past $30,000. The range hinges on square footage, existing damage, drainage needs, and whether you need a dehumidifier or sump pump added.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Crawl space encapsulation costs $5,000 to $15,000 for a typical home, and jobs with severe moisture damage, structural repair, or major drainage work can climb past $30,000. That&apos;s a huge spread, and it&apos;s not marketing fuzz — the number genuinely swings this much depending on what&apos;s happening under your house before a single vapor barrier goes down.</p>
            <p>Here&apos;s the honest breakdown of what pushes you toward one end or the other, so you can estimate where your home is likely to land before you ever talk to a contractor.</p>


            <h2>Square Footage Is the First Multiplier</h2>
            <p>Most encapsulation is priced per square foot, roughly $3 to $8 installed for the liner alone. A compact 800 sq ft crawl space might come in around $4,000–$6,000. A sprawling 2,000+ sq ft crawl under an older ranch home can double that before you add anything else.</p>
            <p>Thickness matters too. A basic 12-mil liner is cheaper than a reinforced 20-mil barrier, and the heavier material is what you want in high-traffic or high-moisture spaces. Cheaping out on mil thickness is one of the most common regrets homeowners report a few years later.</p>


            <h2>Why Existing Damage Blows Up the Estimate</h2>
            <p>The range is wide mainly because contractors don&apos;t know what&apos;s under your house until they&apos;re in it. Standing water, rotted joists, mold remediation, or failed insulation all get billed separately from the encapsulation itself.</p>
            <p>If you need a sump pump installed, add $1,000–$3,000. A dedicated crawl space dehumidifier runs $1,500–$2,500 with installation. Interior French drains to manage groundwater can tack on $2,000–$6,000. Structural repairs to sagging beams or damaged floor joists are where the truly scary numbers live — sometimes $10,000 or more on their own.</p>
            <blockquote className="article-quote">
              The encapsulation is the cheap part. It&apos;s the water management and the rot you find behind the water that decides whether it&apos;s a $6,000 job or a $26,000 job.
              <cite>— Foundation &amp; moisture contractor, Southeast U.S.</cite>
            </blockquote>


            <h2>Region, Labor, and Permits</h2>
            <p>Where you live moves the number more than most people expect. In the humid Southeast, encapsulation is common and competitive, which keeps labor rates reasonable. In areas where it&apos;s rarer, fewer specialized crews mean higher quotes and longer waits.</p>
            <p>Labor is typically 40–60% of the total, so a tight local labor market pushes your price up fast. Permitting adds $100–$500 depending on your jurisdiction, and some regions require inspections for vapor barrier and dehumidifier work that add days and small fees to the timeline.</p>


            <h2>How Long Does It Take?</h2>
            <p>Most straightforward encapsulations take 2 to 5 days. A clean, dry, average-sized crawl space can be done in a couple of days. Add drainage systems, a sump pump, mold remediation, or structural repair and you&apos;re looking at 1 to 2 weeks.</p>
            <p>Access is the sneaky timeline killer. Tight crawl spaces with low clearance slow crews down dramatically, and everything — liner, dehumidifier, drainage pipe — has to be hauled in by hand through a small opening.</p>


            <h2>Getting a Number You Can Trust</h2>
            <p>The best way to narrow that $5,000–$30,000 range for your specific home is to get a few contractors under the house for an actual inspection. Written scopes that itemize drainage, dehumidification, and any repair work separately are the ones worth comparing — vague lump-sum quotes are where surprise change orders hide.</p>
            <p>When you&apos;re ready to line up estimates from vetted pros — and want the protection of paying through escrow so money only releases as work gets completed — get matched below.</p>
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
