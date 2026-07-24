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
          <h1>The Dumpster Fee Nobody Quoted: Why Demo Jobs Blow Past Budget</h1>
          <p className="hero-subtitle">A $6,200 demo quote turned into $9,800 because disposal, dump fees, and haul-off were never line items. Here&apos;s how debris removal quietly becomes the biggest surprise on renovation invoices, and the payment structure that stops it.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>The quote said $6,200. The final invoice said $9,800. The gap wasn&apos;t fraud, and it wasn&apos;t a scope change the homeowner requested. It was debris.</p>
            <p>A Denver couple hired a contractor to demo a 1970s kitchen and a small back deck. The bid was clean and specific: cabinet removal, countertop teardown, flooring pull-up, deck dismantle, labor for a two-man crew over three days. Everything in the scope was accurate. What wasn&apos;t in the scope was what happened to the pile of material after it left the walls.</p>
            <p>That pile cost $3,600.</p>


            <h2>Where the $3,600 came from</h2>
            <p>Demo generates weight, and weight is what dump scales charge for. Here&apos;s the breakdown that never appeared on the original quote:</p>
            <p>Dumpster rental (30-yard, two swaps): $1,150. The first container filled on day one — old cabinets, plaster, and subfloor are dense. A single 30-yard bin holds far less renovation debris than people assume.</p>
            <p>Dump tipping fees: $1,480. Mixed construction waste runs $50–$90 per ton at most transfer stations, and the deck lumber, treated wood, and old flooring added up to roughly 8 tons across the job.</p>
            <p>Haul-off labor and hauling trips: $970. The crew spent parts of two days loading and driving instead of demolishing, and that time got billed.</p>
            <p>None of this was optional. You cannot demo a kitchen and leave the debris in the driveway. But because &quot;disposal&quot; lived in the contractor&apos;s head as an assumed cost rather than a written line item, it arrived as a surprise — invoiced after the work was done, when the homeowner had zero leverage to question it.</p>
            <blockquote className="article-quote">
              Disposal is the single most under-quoted part of any demo job. The teardown is easy to price. Nobody weighs the pile before it exists.
              <cite>— General contractor, 18 years in residential renovation</cite>
            </blockquote>


            <h2>Why this keeps happening</h2>
            <p>Demo is priced by the visible task and paid for by the invisible aftermath. A contractor eyeballs a kitchen and prices the tearing-out. The tonnage, the container swaps, and the transfer-station receipts don&apos;t materialize until the work is already in motion — and by then the homeowner has usually paid a deposit and lost all negotiating power.</p>
            <p>The honest fix isn&apos;t demanding a lower price. Disposal is real and someone has to pay it. The fix is forcing it onto paper before money changes hands, and structuring payment so the surprise can&apos;t land after the fact.</p>


            <h2>The structural fix: milestone-based escrow</h2>
            <p>When a demo job is paid through milestone escrow instead of a lump deposit, the disposal problem gets solved at the contract stage — because every dollar has to be assigned to a defined stage before it&apos;s funded.</p>
            <p>An escrow-structured demo job forces a full itemization: teardown labor, container rental, tipping fees, and haul-off each become their own funded milestone. The homeowner sees the disposal number before the crew starts, not after. If tonnage runs over, that&apos;s a documented conversation against a defined baseline — not a mystery line on a final bill.</p>
            <p>Had the Denver couple funded this job in milestones, the $3,600 in disposal would have been visible, questioned, and either negotiated or accepted before day one. The budget doesn&apos;t blow past when every cost has to clear escrow before the work it pays for begins.</p>


            <p>The best time to catch a hidden cost is before it&apos;s spent. Contractors who work on milestone escrow have to write disposal into the contract — because they can&apos;t get paid for a line item that doesn&apos;t exist.</p>
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
