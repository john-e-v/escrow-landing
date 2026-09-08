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
          <h1>Is Replacing Your Roof Worth It Before Selling? Cost, ROI, and When to Skip It</h1>
          <p className="hero-subtitle">A full roof replacement before selling rarely pays back its full cost, but a failing roof can kill the sale entirely. This guide breaks down the real numbers, resale recovery percentages, and the one condition that flips a skip into a must-do.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>It depends on one thing: whether your current roof is functional or failing. If your roof works, a full replacement before selling is almost never worth it — you&apos;ll recover roughly 60-70% of the cost, not 100%. If your roof is actively failing, replacement stops being an ROI question and becomes a deal-survival question.</p>
            <p>Here&apos;s the split most homeowners get wrong. A new roof does not add a dollar-for-dollar premium to your sale price. It removes an objection. Those are very different financial events, and knowing which one you&apos;re facing decides everything.</p>


            <h2>The Math on a Functional Roof</h2>
            <p>A full asphalt shingle replacement runs $8,000 to $18,000 for an average single-family home, depending on square footage, pitch, and region. Premium materials like metal or tile push that to $25,000-$50,000.</p>
            <p>The 2024 remodeling cost-vs-value data puts asphalt roof replacement at roughly 60-68% cost recovery at resale. On a $12,000 job, that means you eat around $4,000 in unrecovered cost. You spend the money, the house sells slightly higher, but not by enough to break even.</p>
            <p>The payback timeline for a functional roof replaced purely for resale is effectively negative — you don&apos;t get your money back, you get a fraction of it back plus a marginally faster sale. If your roof has 5+ years of life left and passes inspection, replacing it is spending $12,000 to recover $8,000. Skip it.</p>
            <blockquote className="article-quote">
              Buyers don&apos;t pay extra for a roof they expected to already be there. They subtract when it&apos;s missing.
              <cite>— Common refrain among listing agents</cite>
            </blockquote>


            <h2>The Catch That Flips the Verdict</h2>
            <p>Now the condition that turns a clear skip into a mandatory yes: an active leak, visible sagging, curling or missing shingles across large sections, or a roof so old that buyers&apos; lenders won&apos;t approve financing.</p>
            <p>Many mortgage lenders — especially FHA and VA — require a roof with at least 2-3 years of remaining life. If yours fails that bar, your buyer pool shrinks to cash offers, and cash buyers discount aggressively, often $15,000-$30,000 below asking to absorb the risk and hassle.</p>
            <p>At that point the math inverts. A $12,000 replacement that unlocks financed offers and removes a $25,000 negotiation crater is no longer a 65% recovery play. It&apos;s the difference between selling and not selling. A failing roof can also trigger inspection-contingency renegotiations that cost you more than the repair would have.</p>


            <h2>The Middle Path Most People Miss</h2>
            <p>Before committing to a full tear-off, get a licensed roofer to assess whether a targeted repair or partial replacement solves the problem. A $1,500-$3,000 repair that gets you through inspection and lender requirements often delivers better ROI than a full replacement you didn&apos;t need.</p>
            <p>The decision tree is simple: functional roof, skip it. Failing roof that blocks financing, replace it. Somewhere in between, repair to clear the inspection bar and let the buyer own the eventual replacement.</p>
            <p>The hard part isn&apos;t the decision — it&apos;s finding a contractor who&apos;ll give you an honest assessment instead of upselling a full replacement, and structuring the payment so you&apos;re not exposed if the work goes sideways right before closing.</p>
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
