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
          <h1>Is a Garage Conversion Worth It? Cost, ROI, and When It Tanks Value</h1>
          <p className="hero-subtitle">A garage conversion pays off only if your neighborhood doesn&apos;t need the parking. Converting a two-car garage to living space runs $15,000–$50,000 and adds usable square footage, but in car-dependent markets it can cut your home&apos;s value instead of raising it.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>It depends on one thing: whether your neighborhood needs the parking. If it does, a garage conversion can tank your resale value. If it doesn&apos;t, you&apos;re adding livable square footage for a fraction of what an addition costs. That&apos;s the whole decision, and everything below is just the math behind it.</p>
            <p>Converting a two-car garage to finished living space runs $15,000–$50,000 depending on scope. A basic bedroom or office conversion — insulation, drywall, flooring, HVAC extension — lands around $15,000–$25,000. Add a bathroom, kitchenette, or a full ADU setup and you&apos;re looking at $35,000–$50,000, sometimes more once permits and egress windows enter the picture.</p>


            <h2>The Math That Makes It Worth It</h2>
            <p>A two-car garage is roughly 400–500 square feet. In markets where finished living space sells for $200–$400 per square foot, that converted space can add $80,000–$200,000 in appraised value — if buyers value the room more than the parking.</p>
            <p>On ROI percentages: a well-done conversion in the right market recovers 60–80% of its cost at resale, and a permitted ADU in a rental-hungry city can recover 100%+ once you factor in rental income. At $1,200–$2,000/month in rent, a $40,000 ADU conversion pays itself back in roughly 2–3 years, then keeps paying.</p>
            <p>That&apos;s the case for doing it. Cheap square footage, fast payback when rented, and a real bump on the appraisal — provided the parking isn&apos;t the sticking point.</p>
            <blockquote className="article-quote">
              Appraisers only credit converted garage space as living area if it&apos;s permitted and finished to code. Un-permitted conversions often appraise as zero added value — or worse, as a deduction for the lost garage.
              <cite>— residential appraiser, on why permits decide the ROI</cite>
            </blockquote>


            <h2>The Catch: When It Flips Negative</h2>
            <p>The verdict flips the moment parking becomes scarce. In dense urban cores, snowbelt cities, and neighborhoods with no driveways or street parking, removing a garage can knock $10,000–$20,000 off your home&apos;s value — buyers walk over it. The same $40,000 you spent &apos;adding&apos; space becomes a net loss.</p>
            <p>Three conditions push you into the red: comparable homes in your area all have garages (yours will look deficient), your climate makes covered parking a hard requirement, or you skip permits and the work reads as un-permitted DIY to any inspector. Any one of these can turn a value-add into a value-drain.</p>
            <p>Before you commit, pull comps within a half-mile. If nearly every recent sale kept its garage, that&apos;s your market telling you parking is priced in. If converted spaces and ADUs are selling fine, you have your green light.</p>


            <h2>If the Numbers Work for You</h2>
            <p>Once you&apos;ve checked your comps and the math lands on the right side, the next thing that decides your ROI is the quality — and legality — of the actual build. A conversion only holds its value if it&apos;s permitted, code-compliant, and finished well enough that an appraiser counts every square foot.</p>
            <p>That&apos;s where getting the right contractor matters more than shaving a few dollars off the bid. Compare quotes from people who&apos;ll pull the permits and stand behind the work, and structure the payment so you&apos;re protected until each phase is done right.</p>
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
