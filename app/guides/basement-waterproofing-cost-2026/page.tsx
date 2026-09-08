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
          <h1>How Much Does Basement Waterproofing Cost in 2026?</h1>
          <p className="hero-subtitle">Basement waterproofing runs $3,000 to $15,000 for most homes, but severe cases push past $30,000. The gap comes down to whether you&apos;re sealing from the inside or excavating the entire foundation from the outside.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Basement waterproofing runs $3,000 to $15,000 for most homes, but severe cases push past $30,000. That&apos;s a five-figure swing on the same job description, and it isn&apos;t padding — it&apos;s the difference between two fundamentally different repairs. The low end is interior sealing. The high end is tearing open the ground around your house.</p>
            <p>Most homeowners land somewhere in the middle, closer to $6,000 to $10,000, once a contractor actually looks at where the water is coming from. But before you anchor to that number, you need to understand what&apos;s pulling it in either direction.</p>


            <h2>The single biggest factor: inside or outside</h2>
            <p>Interior waterproofing — sealants, interior drain tile, a sump pump — typically runs $3,000 to $8,000. It manages water after it&apos;s already reached your foundation. It&apos;s cheaper, faster, and less disruptive because nobody touches your yard.</p>
            <p>Exterior waterproofing is another animal. Crews excavate down to the footing, sometimes 8 feet deep, apply a waterproof membrane, and install exterior drainage. That&apos;s $10,000 to $30,000-plus, and the price climbs with every foot of depth and every obstacle in the way.</p>
            <p>Why the huge gap? Excavation is labor-heavy and unforgiving. If your foundation is wrapped by a deck, a patio, mature landscaping, or a driveway, all of that has to come out and go back — and each one is its own line item.</p>
            <blockquote className="article-quote">
              The quote isn&apos;t for the waterproofing. It&apos;s for everything you have to destroy to reach the waterproofing.
              <cite>— Foundation contractor, 20 years in the trade</cite>
            </blockquote>


            <h2>What else moves the number</h2>
            <p>Scope of the damage. A single damp corner is a patch job. A perimeter that leaks every heavy rain means full drain tile around the footprint of the house — priced by linear foot, usually $50 to $100 per foot.</p>
            <p>Materials. A basic pedestal sump pump is a few hundred dollars. A battery backup system, a second pump, and a sealed radon-rated sump lid can add $1,500 to $3,000 on their own.</p>
            <p>Region and labor market. The same interior system costs noticeably more in a high-cost metro than in a rural county — excavation crews, disposal fees, and skilled labor all track your local market. Coastal and high-water-table areas also demand heavier-duty solutions.</p>
            <p>Permitting. Structural work and exterior excavation often require permits and inspections. In some jurisdictions that&apos;s a $200 formality; in others it triggers engineering drawings and adds weeks plus real cost.</p>
            <p>Access and grading. A walkout basement is easy to reach. A foundation buried against a hillside, or one where the yard slopes toward the house, may need regrading on top of the waterproofing itself.</p>


            <h2>How long does it actually take?</h2>
            <p>Timeline tracks the same interior-versus-exterior split. Interior sealing and sump installation is usually 1 to 3 days. Interior drain tile around the full perimeter runs 3 to 5 days.</p>
            <p>Exterior excavation is where the calendar stretches: 1 to 3 weeks depending on depth, weather, and how much has to be dug out and restored. Rain delays are real — you can&apos;t waterproof a trench that keeps filling with water.</p>
            <p>Add lead time for permits and for scheduling. Good waterproofing crews book out weeks in advance, especially heading into a wet season.</p>


            <h2>Before you sign anything</h2>
            <p>Get at least three quotes, and make sure each one names the actual method — interior seal, interior drain tile, or exterior excavation. If two bids are $8,000 apart, it&apos;s almost always because they&apos;re proposing different repairs, not because one contractor is gouging you.</p>
            <p>A five-figure foundation job is exactly the kind of project where paying up front and hoping for the best goes wrong. When the money sits in escrow and only releases as the work is verified, both sides stay honest — and you&apos;re not chasing a crew that disappeared after the deposit cleared.</p>
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
