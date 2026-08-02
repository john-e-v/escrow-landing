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
          <h1>How Much Does It Cost to Drill a Well in 2026?</h1>
          <p className="hero-subtitle">A residential water well runs $5,500 to $18,000 in 2026, and the spread comes down to how deep the drill has to go before it hits usable water. Depth, geology, casing, and the pump system are what turn a routine job into a five-figure surprise.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>A residential water well costs $5,500 to $18,000 in 2026, and the single biggest reason for that spread is depth — how far the drill has to punch through rock and soil before it reaches usable water.</p>
            <p>Most homeowners quote the job by the foot, and that&apos;s where the number gets slippery. Drilling runs $30 to $65 per foot in 2026, so a 150-foot well in soft ground can land near the bottom of the range, while a 500-foot well through granite blows past the top. Nobody knows the exact depth until the drill is already in the ground, which is why honest contractors give you a range and a per-foot rate instead of a flat price.</p>


            <h2>What Actually Moves the Number</h2>
            <p>Depth is the headline, but four other factors decide where you land inside that range.</p>
            <p>**Geology.** Soft sand and clay drill fast and cheap. Hard bedrock — granite, basalt, dense shale — slows the rig down, chews through bits, and adds hours of labor per foot. Two neighbors on the same street can pay thousands apart because the water table dips under one property and the rock starts higher under the other.</p>
            <p>**Casing and grouting.** Every well needs steel or PVC casing to keep the borehole from collapsing and to seal out surface contamination. Deeper wells need more casing, and some regions legally require grouting the full length. That&apos;s material and labor that scales directly with depth — another reason a deep well isn&apos;t just &apos;a little more.&apos;</p>
            <p>**The pump system.** A shallow well might run on a jet pump for under $1,000 installed. A deep well needs a submersible pump, a pressure tank, wiring, and sometimes a booster — a $2,500 to $5,000 line item on its own. This is the part people forget when they compare drilling quotes side by side.</p>
            <blockquote className="article-quote">
              The drilling quote and the water quote are two different things. You can hit water at 200 feet and still spend three grand getting it into the house.
              <cite>— Licensed well driller, Upper Midwest</cite>
            </blockquote>


            <h2>Region and Permitting</h2>
            <p>Where you live changes the math before the rig ever shows up. In parts of the arid West, the water table sits 400 to 600 feet down, so a &apos;normal&apos; well there starts where an expensive one ends in the rain-fed Southeast.</p>
            <p>Permitting adds $150 to $1,200 depending on the county, and some jurisdictions require water-quality testing, a licensed pump installer, and inspection sign-off — each a small fee that stacks up. Tight local labor markets push rates higher too; a region with only two licensed drillers and a six-week backlog will quote more than one with real competition.</p>


            <h2>The Honest Way to Budget</h2>
            <p>Plan for the middle — roughly $9,000 to $12,000 for a complete, working well with the pump installed — and keep a cushion in case the drill has to chase water deeper than expected. Ask every contractor to break out the per-foot drilling rate, the casing cost, and the pump package as separate lines. If a quote is a single flat number with no depth assumption behind it, that&apos;s a sign someone is guessing.</p>
            <p>Because so much of this job is priced on an estimate that only firms up once drilling starts, it&apos;s worth working with someone who&apos;ll put terms in writing and stand behind them. Matching with a vetted driller who accepts escrow payments means your money isn&apos;t released until the well is actually delivering water — so a deep-hole surprise stays a scope conversation, not a payment dispute.</p>
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
