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
          <h1>New Roof vs. Kitchen Remodel: Which Is Worth It First?</h1>
          <p className="hero-subtitle">When you can only fund one, the roof wins if yours is past 20 years or leaking — protecting the house always beats improving it. This guide breaks down the cost, ROI, and the one condition that flips the answer toward the kitchen.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>The roof wins — if yours is past 20 years or actively leaking. Protecting the structure always beats improving a room inside it. A failed roof doesn&apos;t just cost you shingles; it costs you the sheathing, the insulation, the drywall, and eventually the kitchen you were about to remodel anyway.</p>
            <p>So the verdict is clear when your roof is aging or compromised: fix it first. But if your roof is under 15 years old and passes inspection, the answer flips — and we&apos;ll get to exactly when below.</p>


            <h2>The Math That Backs the Roof</h2>
            <p>A full asphalt shingle roof replacement runs $8,000 to $18,000 for an average 2,000 sq ft home, with metal or premium materials pushing $25,000 to $40,000. It&apos;s not glamorous spending — but it&apos;s insurance against catastrophe.</p>
            <p>Roofing recovers about 60–68% of its cost at resale according to national remodeling cost-vs-value data. That&apos;s a middling return on paper, but the number is misleading. A buyer won&apos;t pay full price for a home with a roof they&apos;ll have to replace in two years, and many lenders won&apos;t close on a house with a roof at end-of-life. A bad roof doesn&apos;t lower your offer by 65% of the repair cost — it can kill the deal entirely.</p>
            <p>Compare that to water damage math: a single sustained leak can cause $3,000 to $15,000 in interior repairs, plus mold remediation running $1,500 to $6,000. Delay the roof one storm season and you may end up paying for the roof AND the damage it caused.</p>
            <blockquote className="article-quote">
              I&apos;ve watched homeowners spend $30k on a dream kitchen, then get a spring storm that dumped water straight through it. The roof isn&apos;t the fun project. It&apos;s the one that protects every other dollar you spend.
              <cite>— Residential general contractor, 18 years</cite>
            </blockquote>


            <h2>The Kitchen&apos;s Numbers</h2>
            <p>A minor kitchen remodel — new counters, refaced cabinets, updated appliances — costs $25,000 to $40,000 and returns roughly 70–80% at resale, the strongest ROI of almost any interior project. A full gut remodel runs $50,000 to $100,000+ and recovers closer to 50%.</p>
            <p>The kitchen genuinely drives buyer decisions and daily quality of life in a way a roof never will. That&apos;s real value. But it&apos;s discretionary value — it improves an asset that&apos;s still fundamentally sound. Improvement can wait. Protection can&apos;t.</p>


            <h2>The Condition That Flips the Answer</h2>
            <p>Here&apos;s when the kitchen jumps the line: your roof is under 15 years old, passes a professional inspection with no active leaks or soft decking, and you&apos;re selling within 24 months.</p>
            <p>In that scenario, the roof has years of life left and won&apos;t scare off buyers or lenders. Meanwhile the kitchen&apos;s 70–80% resale return, plus its power to close deals faster and higher, makes it the smarter dollar. Spending $12,000 on a roof that isn&apos;t failing is money frozen in place; spending it on a kitchen that&apos;s about to sell the house is money working for you.</p>
            <p>Everything hinges on that inspection. Guessing wrong on roof age or ignoring early leak signs is how a $35,000 kitchen becomes a $50,000 problem.</p>


            <p>The cleanest way to make this call is to get both quotes on the table — a roof inspection with a real replacement estimate and a scoped kitchen bid — so you&apos;re deciding with numbers instead of dread. From there, the verdict usually names itself.</p>
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
