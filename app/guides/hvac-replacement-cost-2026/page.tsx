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
          <h1>How Much Does a New HVAC System Cost in 2026?</h1>
          <p className="hero-subtitle">A full HVAC replacement runs $7,000 to $16,000 in 2026, with heat pump and high-efficiency systems pushing past $20,000. The spread comes down to system type, ductwork condition, home size, and how your region prices refrigerant compliance.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>A full HVAC replacement runs $7,000 to $16,000 in 2026, and that&apos;s before you get into the high-efficiency territory where heat pumps and variable-speed systems routinely cross $20,000. If someone quotes you a flat number over the phone before seeing your house, they&apos;re guessing — and the guess is usually low.</p>
            <p>That $9,000 spread isn&apos;t padding. It reflects genuinely different jobs hiding under the same three letters. A straight AC-and-furnace swap in a house with good existing ductwork is a very different project than a full electrification retrofit in a home that&apos;s never had a heat pump. Both get called &quot;a new HVAC system.&quot; They don&apos;t cost anything close to the same.</p>


            <h2>What Actually Moves the Number</h2>
            <p>The single biggest lever is system type. A basic split-system AC paired with a gas furnace sits at the low end. A ducted heat pump with a backup air handler runs mid-range. A cold-climate heat pump, a multi-zone mini-split setup, or a geothermal system pushes you toward and past $20,000 — geothermal can hit $30,000 once ground loops are involved.</p>
            <p>The second lever is your ductwork. Contractors don&apos;t love talking about this because it&apos;s the part that blows up estimates. If your ducts are undersized, leaky, or absent, you&apos;re not buying a system — you&apos;re buying a system plus a sheet-metal project. Duct replacement or major modification adds $2,000 to $6,000, and it&apos;s the most common reason a &apos;simple&apos; quote balloons.</p>
            <p>Home size and load matter too, but not the way people assume. Tonnage isn&apos;t just square footage — a properly done Manual J load calculation accounts for insulation, windows, ceiling height, and orientation. A contractor who sizes by eyeball either oversells you capacity or leaves you with a system that short-cycles.</p>
            <blockquote className="article-quote">
              Half the &apos;expensive&apos; quotes I write aren&apos;t about the equipment. They&apos;re about fixing the duct system the last three installers ignored.
              <cite>— Residential HVAC installer, 18 years in the trade</cite>
            </blockquote>


            <h2>Why Region Swings It So Hard</h2>
            <p>Where you live changes the math more than most homeowners expect. Labor rates in high-cost metros can double the installation portion of your bill versus a rural market. Permitting and inspection requirements vary wildly — some jurisdictions wave you through, others require sealed permits, load calcs on file, and separate electrical inspections that add days and dollars.</p>
            <p>Refrigerant compliance is the 2026 wildcard. The phase-down of older refrigerants means systems are transitioning to A2L refrigerants like R-454B, and regions enforce the handling, storage, and installation rules at different speeds. Areas with stricter enforcement see higher labor and certification costs baked into every quote. It&apos;s a real cost, and it&apos;s regional, which is why two identical homes in two states can see a $3,000 gap on the same equipment.</p>
            <p>Climate feeds into it as well. Cold-climate heat pumps carry a premium, and if you need robust backup heat, that&apos;s another line item that only shows up in certain regions.</p>


            <h2>How to Read a Quote Without Getting Burned</h2>
            <p>Get three quotes minimum, and make sure each one lists the equipment model number, the SEER2 and HSPF2 ratings, whether a load calculation was performed, and exactly what ductwork is included or excluded. A quote that&apos;s vague on ductwork is a quote designed to grow later.</p>
            <p>Watch the deposit structure. Full HVAC jobs often ask for material money up front, which is reasonable — but &apos;reasonable&apos; and &apos;safe for you&apos; aren&apos;t the same thing. Tying payments to completed milestones protects both sides, especially on a multi-day install where the equipment shows up before the work is done.</p>
            <p>When you&apos;re ready to compare real bids on your actual home, the tools below make it easier to line up contractors, keep the scope honest, and hold your money until the work is finished.</p>
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
