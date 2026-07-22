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
          <div className="hero-badge">Hidden Cost · July 2026</div>
          <h1>Why Your Quote Said $28K and the Final Bill Was $41K</h1>
          <p className="hero-subtitle">The gap between quote and final invoice usually isn&apos;t dishonesty—it&apos;s exclusions buried in the fine print. A homeowner learned this when a $28K addition landed at $41K, and every overage was technically &apos;not included&apos; from day one.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>The quote said $28,000. The final invoice said $41,320. Nobody lied. Every single one of those extra dollars was technically &quot;not included&quot; from the day the contract was signed—the homeowner just didn&apos;t know how to read the document that told them so.</p>
            <p>This is a postmortem on a real category of failure: the 30-50% overage that shows up on fixed-scope residential projects. It&apos;s not fraud. It&apos;s exclusions. And exclusions are legal, common, and almost always invisible to the person paying the bill.</p>


            <h2>The Project</h2>
            <p>A 320-square-foot bedroom addition. Two competing bids came in at $31K and $28K. The homeowner picked the lower one, signed a two-page agreement, and paid a 40% deposit—$11,200—to hold a start date six weeks out.</p>
            <p>The contract listed the scope in five bullet points: framing, roofing, electrical rough-in, drywall, and &quot;standard finishes.&quot; At the bottom, in a paragraph most people skim, was a line reading: &quot;Excludes permits, engineering, site conditions, and material price adjustments.&quot; That one sentence is where the $13,000 came from.</p>
            <blockquote className="article-quote">
              I thought &apos;excludes permits&apos; meant I&apos;d pay the city a fee. I didn&apos;t know it meant the engineer, the survey, and every surprise behind the drywall was on me too.
              <cite>— Homeowner, 320 sq ft addition</cite>
            </blockquote>


            <h2>Where the $13,000 Went</h2>
            <p>Permits and engineering: $2,400. The addition needed a stamped foundation plan the quote never mentioned. &quot;Excludes engineering&quot; covered it.</p>
            <p>Site conditions: $6,100. When they dug the footing, they hit an old buried oil tank and undocumented plumbing. &quot;Excludes site conditions&quot; meant every hour of that was a change order at $95/hr plus disposal fees.</p>
            <p>Material adjustments: $2,900. Lumber and electrical costs rose between quote and build. &quot;Material price adjustments&quot; let the contractor pass through the difference.</p>
            <p>&quot;Standard finishes&quot; upgrade: $1,900. The homeowner assumed the flooring and trim in the design renderings were included. They weren&apos;t—&quot;standard&quot; meant builder-grade, and matching the existing house cost extra.</p>
            <p>Each line was defensible. Together they turned a $28K decision into a $41K reality, and by the time the oil tank appeared, $11,200 was already spent and the framing was up. Walking away wasn&apos;t an option.</p>


            <h2>What Would Have Prevented It</h2>
            <p>The failure wasn&apos;t the exclusions—it was the payment structure. A 40% upfront deposit removed all leverage the moment the shovel hit dirt. Once you&apos;ve paid nearly half before verifiable work exists, every change order is a negotiation you&apos;re guaranteed to lose.</p>
            <p>The structural fix is milestone-based escrow. Instead of a lump deposit, funds are released in tranches tied to completed, inspected stages: permits secured, foundation poured, framing passed, and so on. Money sits in escrow, not the contractor&apos;s account, until each milestone is verified.</p>
            <p>That changes the entire dynamic around exclusions. When the oil tank appears, the conversation happens before the next tranche releases—while you still hold the funds and can demand a written change order with a fixed price, not an open hourly meter. Escrow forces exclusions into daylight, because the contractor has to justify each release. Vague terms like &quot;site conditions&quot; get itemized when payment depends on it.</p>
            <p>It also filters who you work with. Contractors confident in their quotes accept milestone escrow without hesitation. The ones who insist on large upfront deposits and won&apos;t tie payment to inspected progress are often the ones relying on exclusions to close the gap later.</p>
            <p>The $28K-to-$41K jump wasn&apos;t caused by a dishonest contractor. It was caused by a homeowner who paid too much, too early, before the fine print had a chance to matter—and by then it was too late to change anything.</p>


            <p>If you want your next project quote to stay honest from footing to finish, start by working with people who&apos;ll agree to get paid the way that protects you.</p>
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
