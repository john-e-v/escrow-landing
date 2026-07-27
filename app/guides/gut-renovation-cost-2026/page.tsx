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
          <div className="hero-badge">Cost &amp; Timeline · July 2026</div>
          <h1>How Much Does a Full Gut Renovation Cost in 2026?</h1>
          <p className="hero-subtitle">A full gut renovation runs $100 to $250 per square foot in 2026, meaning $150K to $375K on a 1,500 sq ft home. The spread comes down to how much structure you touch, your finish level, and what&apos;s hiding behind the walls.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>A full gut renovation runs $100 to $250 per square foot in 2026, which puts a 1,500 sq ft home somewhere between $150,000 and $375,000. That&apos;s a $225,000 swing on the same footprint, and it&apos;s not random — every dollar of that spread traces back to a decision you make or a surprise the house makes for you.</p>
            <p>A gut renovation means you strip the interior down to the studs — sometimes down to the subfloor and joists — and rebuild. New wiring, new plumbing, new HVAC, new insulation, new everything. You&apos;re not refreshing a house. You&apos;re rebuilding it inside its own shell.</p>


            <h2>What Pushes You Toward $100/sq ft</h2>
            <p>The low end assumes you&apos;re keeping the existing floor plan, using mid-grade stock finishes, and working in a region with a healthy contractor supply and reasonable labor rates — think much of the Midwest and Southeast.</p>
            <p>It also assumes the bones are good. Level floors, square walls, plumbing and electrical that are outdated but accessible, and no asbestos or knob-and-tube lurking behind the drywall. A cosmetic-heavy gut in a structurally sound house is the cheapest version of this project.</p>


            <h2>What Pushes You Toward $250/sq ft</h2>
            <p>Three things blow the number up fast. First, moving structure — relocating walls, opening up a load-bearing span, or changing the roofline means engineering, permits, and framing labor that stock layouts never touch.</p>
            <p>Second, finish level. Custom cabinetry, natural stone, imported tile, and high-end fixtures can triple the material cost of any given room. A $12,000 kitchen and a $60,000 kitchen occupy the same square footage.</p>
            <p>Third, region. Labor in coastal metros — the Bay Area, Boston, Seattle, New York — runs 40 to 70 percent above national averages, and permitting timelines in those cities can add months of carrying costs before a single wall comes down.</p>
            <blockquote className="article-quote">
              The estimate is the easy part. It&apos;s what we find after demo that decides whether you&apos;re at the top or bottom of the range.
              <cite>— General contractor, 18 years in residential remodels</cite>
            </blockquote>


            <h2>The Hidden Middle: What&apos;s Behind the Walls</h2>
            <p>The reason the range is genuinely wide — not just marketing caution — is that a gut renovation exposes everything. Rotted sill plates, undersized electrical service, cast-iron drain lines at the end of their life, mold, or a foundation that&apos;s settled more than anyone realized.</p>
            <p>None of that shows up in the original bid. It shows up on day ten, after demo, when the contractor calls with a change order. Budget 15 to 20 percent as a contingency on any gut job, and more if the house is over 60 years old.</p>


            <h2>Timeline</h2>
            <p>Plan on four to nine months from demo to final inspection on a 1,500 sq ft home. Design and permitting eat the first one to three months before construction even starts, and in strict jurisdictions that alone can stretch longer.</p>
            <p>The build itself moves in a fixed sequence — demo, rough framing, mechanicals, inspection, insulation, drywall, finishes — and each stage waits on the one before it. You can&apos;t compress that order with more money. You can only lose time to delayed inspections, backordered materials, and change orders that stop work while you decide.</p>


            <h2>Getting a Number You Can Trust</h2>
            <p>The single biggest variable you control isn&apos;t finishes or layout — it&apos;s who you hire. A contractor who scopes the job honestly, flags likely surprises up front, and structures payments around completed milestones will land you far closer to a predictable number than the lowest bid on the table.</p>
            <p>That&apos;s exactly why payment protection matters on a project this size. When a job runs six figures over half a year, the last thing you want is a contractor holding a large deposit against work that hasn&apos;t happened yet.</p>
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
