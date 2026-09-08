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
          <div className="hero-badge">Cost &amp; ROI · August 2026</div>
          <h1>Is Professional Landscaping Worth It? Cost, Resale Value, and When It Doesn&apos;t Pay</h1>
          <p className="hero-subtitle">Professional landscaping pays back better than most interior upgrades, returning 100% or more at resale on mature, low-maintenance designs. But over-planting or high-upkeep features can scare buyers and flip the math against you.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>It depends on one thing: whether your design is mature and low-maintenance, or fussy and high-upkeep. Get that right and professional landscaping returns 100% or more at resale — better than a kitchen remodel, better than a bathroom, better than almost any interior dollar you can spend. Get it wrong and you&apos;ll spend $15,000 to actively lower your sale price.</p>
            <p>Here&apos;s the math that supports the yes.</p>


            <h2>The Numbers</h2>
            <p>A professional landscape design typically runs $3,000 to $15,000 for an average suburban lot, depending on hardscaping, tree size, and irrigation. Full high-end installs with retaining walls, lighting, and mature trees can hit $30,000 to $50,000.</p>
            <p>The return is where landscaping beats the interior competition. The National Association of Realtors and Virginia Tech studies consistently peg landscape ROI at 100% to 215% — meaning a $10,000 investment can add $10,000 to $21,500 in perceived home value. Compare that to a mid-range kitchen remodel, which recovers around 70% to 80%, or a bathroom at 60% to 67%.</p>
            <p>Mature trees alone are the single biggest lever. A healthy, established shade tree can add $1,000 to $10,000 in value per tree, and mature landscaping overall raises perceived value by roughly 5% to 12%. On a $400,000 home, that&apos;s $20,000 to $48,000 — often several times what the work cost.</p>
            <p>Payback timeline: unlike a roof or HVAC that only pays at sale, good landscaping starts working on day one through curb appeal, faster time-on-market (homes with strong landscaping sell 5% to 10% faster), and lower energy bills from shade trees cutting cooling costs 10% to 30%.</p>
            <blockquote className="article-quote">
              Buyers decide within the first eight seconds of pulling up. Landscaping is the only renovation they see before they walk through the door.
              <cite>— residential real estate agent</cite>
            </blockquote>


            <h2>The Catch That Flips It</h2>
            <p>The verdict flips the moment your landscaping reads as a maintenance liability instead of an asset.</p>
            <p>Over-planting is the classic mistake. Dense beds of exotic perennials, koi ponds, elaborate water features, and sprawling annual gardens all say the same thing to a buyer: &apos;this yard is a second job.&apos; A $12,000 water feature can lower your sale price because the average buyer mentally subtracts the cost of ripping it out or hiring someone to maintain it.</p>
            <p>The same goes for anything hyper-personal or high-upkeep — tennis courts, extensive vegetable gardens, tropical plantings in a cold climate, or trees planted too close to the foundation. These narrow your buyer pool and turn a value-add into a value-drain.</p>
            <p>The designs that hit that 100%-plus return share three traits: they&apos;re native or drought-tolerant, they&apos;re mature enough to look established, and they require minimal ongoing work. Clean lines, healthy lawn, structural trees, and simple layered beds beat a botanical showpiece every time. Spend on the bones — grading, trees, hardscape, irrigation — not on plants a new owner has to babysit.</p>
            <p>Do the honest gut check before you sign: would a stranger see your finished yard as one less thing to worry about, or one more? If it&apos;s the second, you&apos;re spending money to make your home harder to sell.</p>


            <h2>Before You Hire</h2>
            <p>Landscaping projects are notorious for the pattern where money goes out before the mature trees and finished hardscape ever go in — deposits paid, plants half-installed, contractor gone. Because so much of the cost is front-loaded into materials and plant stock, protecting your payment until the work is verifiably done matters more here than on almost any other home project.</p>
            <p>If you&apos;re ready to invest in the kind of low-maintenance, resale-friendly design that actually returns your money, start by getting matched with contractors who&apos;ll structure payment around completed milestones.</p>
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
