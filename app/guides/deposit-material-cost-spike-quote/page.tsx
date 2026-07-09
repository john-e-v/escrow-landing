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
          <h1>Why Your Contractor&apos;s Quote Expired Before the Job Even Started</h1>
          <p className="hero-subtitle">You signed a quote in March, but the job didn&apos;t start until June, and suddenly lumber costs $4,200 more. The quote was never locked; it was a snapshot with a shelf life nobody explained to you. Here&apos;s how material price volatility quietly rewrites your budget.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>The quote said $38,500. The final invoice said $42,700. The kitchen was the same size, the tile was the same tile, and the contractor didn&apos;t do anything wrong.</p>
            <p>Here&apos;s what happened. A homeowner in suburban Denver signed a kitchen remodel quote on March 12. Demolition wasn&apos;t scheduled to start until June 2 — an eleven-week gap that felt reasonable at the time. Permits, backordered cabinets, and the contractor&apos;s existing queue all ate into the calendar. By the time the crew showed up, the price of framing lumber and plywood underlayment had climbed roughly 11%, and the appliance package the homeowner picked had a manufacturer price increase baked in. That $4,200 overrun wasn&apos;t padding. It was the market moving underneath a number everyone treated as fixed.</p>


            <h2>A quote is a snapshot, not a contract</h2>
            <p>The mistake almost nobody catches is assuming a signed quote locks the price. It doesn&apos;t. Unless the document explicitly says the pricing is guaranteed through a specific date, a quote reflects material costs on the day it was written. Contractors know this. That&apos;s why most quotes buried in the fine print carry language like &quot;pricing valid for 30 days&quot; or &quot;subject to material cost adjustments.&quot;</p>
            <p>When the job starts months later, the contractor is stuck. They either eat the difference — which no small business can afford on thin margins — or they pass it on. Passing it on is normal. The problem is that it lands on you as a surprise, mid-project, when you have zero leverage because the walls are already open.</p>
            <blockquote className="article-quote">
              By the time we broke ground, the lumber invoice alone was up almost twelve percent. I quoted honest numbers in March. Nobody warned the client those numbers had an expiration date.
              <cite>— General contractor, residential remodels</cite>
            </blockquote>


            <h2>Why the gap is the real culprit</h2>
            <p>The volatility isn&apos;t the villain here. The villain is the unmanaged gap between signing and starting. A three-week gap rarely moves prices enough to notice. An eleven-week gap during a volatile materials market can swing a mid-size remodel by thousands.</p>
            <p>Most homeowners never ask two questions that would have exposed the risk: How long is this pricing actually valid? And when, specifically, will materials be purchased? If cabinets and lumber get ordered the week you sign, the price is effectively locked the moment you commit. If they get ordered the week before demolition, you&apos;re exposed to every price movement in between.</p>


            <h2>The structural fix</h2>
            <p>The clean solution is to tie payment to procurement, not to the calendar. A milestone or escrow structure fixes this by funding the material purchase early — as its own defined milestone — instead of leaving it floating until the crew arrives.</p>
            <p>Here&apos;s how it works in practice. You fund an escrow account at signing. The first milestone release covers materials, and the contractor purchases them at that moment, at that price. The money is protected in escrow until the materials are ordered and confirmed, so the contractor isn&apos;t fronting the cost and you aren&apos;t exposed to eleven weeks of market drift. The number you agreed to in March is the number that clears, because the lumber was bought in March.</p>
            <p>This only works if the contractor is set up to accept escrow and milestone-based payments — many aren&apos;t, and that&apos;s the actual reason surprise overruns keep happening. The ones who are set up for it tend to be the ones who quote honestly, because their pricing structure doesn&apos;t depend on hoping costs hold steady.</p>
            <p>If you&apos;d rather your budget survive the gap between signing and starting, start by working with contractors who structure payment around when materials actually get bought.</p>
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
