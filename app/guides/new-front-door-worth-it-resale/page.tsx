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
          <h1>Is a New Front Door Worth It? Cost, Resale Value, and When It Pays Off</h1>
          <p className="hero-subtitle">A steel entry door replacement is one of the few renovations that returns close to what you spend, making it a rare yes for sellers. But the math flips fast when you upgrade to a $4,000 custom wood door that buyers won&apos;t pay a premium for.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Yes — a steel front door replacement is worth it, and it&apos;s one of the few renovations that returns nearly every dollar you spend.</p>
            <p>According to the Remodeling 2024 Cost vs. Value Report, a steel entry door replacement costs about $2,355 on average and recovers roughly $1,799 at resale — a return of around 76%. Some regional markets push that number past 90%, and in a few years it has occasionally cracked 100%, making it one of the highest-ROI projects in the entire report. Compare that to a mid-range kitchen remodel (about 96% in a great year but tens of thousands out of pocket) or a bathroom addition (around 35%), and the front door starts to look like the smartest small-dollar move a seller can make.</p>
            <p>The reason is simple: a front door is the first thing a buyer touches. It sets the tone for the walkthrough before they&apos;ve seen a single room. A tired, dented, or drafty door signals deferred maintenance. A crisp new one signals a house that&apos;s been cared for.</p>


            <h2>The Math for Different Door Types</h2>
            <p>Here&apos;s where the dollars land depending on what you buy:</p>
            <p>• Steel door: $500–$1,500 for the door, $1,800–$2,400 installed. Best ROI, best payback, buyer-neutral appeal.</p>
            <p>• Fiberglass door: $1,000–$2,500 for the door, $2,500–$4,000 installed. Recovers around 68–70%. More durable and better-looking than steel, but you eat more of the cost.</p>
            <p>• Custom wood door: $2,500–$6,000+ installed. This is where the verdict starts to wobble.</p>
            <p>On energy alone, a properly sealed new door can trim $75–$150 a year off heating and cooling bills — not life-changing, but it shortens the effective payback if you&apos;re staying put for a few years.</p>
            <blockquote className="article-quote">
              A $2,000 steel door reads as &apos;well-maintained.&apos; A $5,000 wood door reads as &apos;nice, but I&apos;m not paying extra for it.&apos; Buyers rarely itemize the door — they just feel the house.
              <cite>— Residential real estate agent, on buyer walkthroughs</cite>
            </blockquote>


            <h2>The Catch: When the Verdict Flips</h2>
            <p>The math flips the moment you treat the front door as a design statement instead of a repair.</p>
            <p>Upgrade to a $4,000 custom wood or handcrafted door and your recovery rate can drop into the 40–50% range. Buyers won&apos;t pay a premium for a luxury door on an otherwise mid-range home — it looks out of place, and appraisers won&apos;t credit it. You&apos;ve spent $4,000 to recover maybe $1,800, the same dollar figure the $2,300 steel door would have returned. You just burned the difference.</p>
            <p>The verdict also flips if you&apos;re planning to stay ten-plus years and the current door still works. At that horizon, resale value doesn&apos;t matter, and the energy savings alone won&apos;t justify replacement unless the old door is actively failing.</p>
            <p>So: replacing a worn door before selling? Clear yes. Splurging on custom wood to impress buyers? Clear no. Everything in between depends on how long you&apos;re staying and how much of the cost you&apos;re willing to eat for aesthetics.</p>
            <p>Whatever door you land on, the install matters as much as the door itself — a poorly hung door drafts, sticks, and undoes the whole return. If you&apos;re ready to price it out, it&apos;s worth lining up a contractor before you commit a dime.</p>
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
