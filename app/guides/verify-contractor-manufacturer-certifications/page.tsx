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
          <div className="hero-badge">Vetting &amp; Protection · August 2026</div>
          <h1>How to Verify a Contractor&apos;s Manufacturer Certifications (And Why Fakes Are Common)</h1>
          <p className="hero-subtitle">That &apos;GAF Master Elite&apos; or &apos;Pella Certified&apos; badge on the truck could be expired, fabricated, or belong to a company that fired the contractor years ago. Here&apos;s how to confirm a manufacturer certification in minutes and why it protects your warranty.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>1. Get the exact certification name and the contractor&apos;s business name in writing. Not &quot;we&apos;re GAF certified&quot; — the specific tier (GAF Master Elite, Pella Certified Contractor, CertainTeed SELECT ShingleMaster) and the legal company name it&apos;s registered under. You verify against both.</p>
            <p>2. Go to the manufacturer&apos;s official contractor locator — not a link the contractor sends you. Type the manufacturer name plus &quot;find a contractor&quot; into a search engine yourself. GAF: gaf.com/en-us/roofing-contractors. Pella: pella.com and search by ZIP. CertainTeed: certainteed.com/find-a-pro. Owens Corning: owenscorning.com/roofing/contractors.</p>
            <p>3. Search by ZIP code and match the company name exactly. If the contractor claims a certification and their business does not appear in that manufacturer&apos;s own directory for their service area, the certification is not active. Full stop.</p>
            <p>4. Call the manufacturer directly. Every major manufacturer has a contractor verification line. Give them the company name and ask: &quot;Is this contractor currently certified, and at what level?&quot; This takes five minutes and catches expired credentials the online directory hasn&apos;t purged yet.</p>


            <h2>Documents to request before you sign</h2>
            <p>5. Ask for the certification number and the year it was issued or last renewed. Certifications lapse. A Master Elite status from 2019 means nothing in 2024 if they stopped meeting volume and insurance requirements.</p>
            <p>6. Request the certificate of insurance (COI) with the manufacturer named, if the certification requires it. Many top-tier programs require the contractor to carry specific coverage. If they can&apos;t produce it, the certification is either fake or void.</p>
            <p>7. Ask which crew members are certified installers. Some manufacturer warranties only apply if a certified installer performs the work. A certified company that subcontracts to an uncertified crew can void your warranty without you knowing.</p>
            <blockquote className="article-quote">
              The badge on the truck certifies the company, not the guys on your roof. Always ask who is actually installing.
              <cite>— Manufacturer warranty administrator</cite>
            </blockquote>


            <h2>Why fakes are so common</h2>
            <p>Manufacturer certifications unlock enhanced warranties — 25 to 50 years of coverage on materials and workmanship that a standard install can&apos;t offer. That warranty is the single biggest selling point on many jobs, so there&apos;s a strong incentive to claim a badge that isn&apos;t real.</p>
            <p>The common scenarios: a contractor was certified years ago and got dropped for failing to maintain volume or insurance. A salesperson worked at a certified company and now runs his own uncertified shop using the old logo. A truck wrap or website was never updated. Or the badge was simply copied off Google Images because most homeowners never check.</p>
            <p>Here&apos;s what actually matters to you: if the certification isn&apos;t active at the time of your install, the enhanced warranty does not exist. You paid a premium for coverage that will be denied the first time you file a claim — often a decade later, when the contractor is long gone.</p>


            <h2>The one red flag in almost every bad hire</h2>
            <p>The contractor gets defensive, vague, or rushes you when you ask them to spell the certification name and confirm the business it&apos;s registered under. A legitimately certified contractor is proud of it and will hand you the number without hesitation. A fake one changes the subject, says &quot;you can just trust me,&quot; or pressures you to sign before you&apos;ve had time to check the directory.</p>
            <p>If verifying a credential feels like an inconvenience to them, that&apos;s your answer.</p>


            <p>Verification is the floor, not the ceiling. Once you&apos;ve confirmed a contractor is real, protect the money too — work with pros who agree to hold payment in escrow until milestones are actually met.</p>
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
