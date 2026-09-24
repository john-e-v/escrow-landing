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
          <div className="hero-badge">Payment Disputes · September 2026</div>
          <h1>The Contractor Back-Charged You for a Delay You Didn&apos;t Cause</h1>
          <p className="hero-subtitle">A tile crew showed up two weeks late, then billed the homeowner $3,200 in &apos;standby&apos; charges for a delay the contractor&apos;s own scheduling caused. Here&apos;s how vague delay language turns a contractor&apos;s mistake into your invoice line item.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>The invoice said $3,200 in &quot;standby charges.&quot; The homeowner had never heard the term before it appeared on paper.</p>
            <p>Here&apos;s what happened. A bathroom remodel in a mid-sized suburban home. The tile crew was scheduled to start on a Monday. They didn&apos;t show. No call. The general contractor&apos;s project manager said the crew was &quot;finishing another job&quot; and would arrive the following Monday. That slipped too. The tile crew finally walked in fourteen days behind schedule.</p>
            <p>Then the invoice arrived. The contractor billed $3,200 for &quot;crew standby and remobilization&quot; — the argument being that because the tile couldn&apos;t be laid on time, the plumber and the electrician had to be rescheduled, and those trades charged a re-visit fee that got passed straight through to the homeowner. A delay the contractor&apos;s own scheduling created had been converted into a line item the homeowner was expected to pay.</p>


            <h2>How the language did the work</h2>
            <p>The contract had one sentence that made this possible: &quot;Client is responsible for costs arising from delays affecting the project schedule.&quot; No definition of who caused the delay. No carve-out for contractor-side scheduling failures. Just a blanket clause that reads reasonable until it&apos;s aimed at you.</p>
            <p>That sentence is doing something specific. It removes the question of fault entirely. It doesn&apos;t say &quot;delays caused by the client.&quot; It says &quot;delays affecting the schedule&quot; — and every delay affects the schedule, including the ones the contractor is responsible for. The homeowner assumed the phrase meant homeowner-caused delays: a late material selection, a change order, a locked gate. It meant all of them.</p>
            <blockquote className="article-quote">
              The clause never said whose fault. That&apos;s not an accident — vague fault language always defaults to the party writing the invoice.
              <cite>— construction dispute mediator</cite>
            </blockquote>


            <h2>What the money actually looked like</h2>
            <p>Break down the $3,200. The plumber&apos;s re-visit fee was $650. The electrician&apos;s was $500. The tile crew billed $1,400 in &quot;remobilization&quot; — the cost of tearing down and setting up again, even though they&apos;d never set up in the first place. The remaining $650 was a flat &quot;schedule disruption&quot; fee with no supporting math at all.</p>
            <p>The homeowner paid it. Not because they agreed, but because the final 40% of the contract balance hadn&apos;t been released, and the contractor made clear that the tile wouldn&apos;t be grouted and the project wouldn&apos;t be closed out until the standby charge was settled. That&apos;s leverage. When your money has already left your control and the work is 90% done, disputing a $3,200 line item means risking a stalled, half-finished bathroom.</p>


            <h2>The fix that would have stopped it</h2>
            <p>Two things would have prevented this, and they work together.</p>
            <p>First, delay language that assigns fault. A single revision — &quot;Client is responsible only for costs arising from delays caused by the client, including late selections and change orders&quot; — turns the contractor&apos;s blank check into a defined, defensible clause. Standby charges tied to the contractor&apos;s own late crew become unbillable on their face.</p>
            <p>Second, and more structural: milestone-based escrow. When funds are held in escrow and released against completed milestones — rough-in passed, tile set, final walkthrough — a surprise standby charge can&apos;t be used as a hostage. The homeowner isn&apos;t choosing between paying a disputed invoice and living with a grouted-halfway bathroom. The money for the tile milestone releases when the tile milestone is genuinely complete, and a disputed add-on gets negotiated on its merits, not under threat of a stalled job.</p>
            <p>The reason this scenario works so cleanly for the contractor is timing: the leverage lands after the money is committed but before the work is closed. Escrow flips that. It keeps the payment tied to the deliverable instead of to the contractor&apos;s willingness to finish.</p>
            <p>If you want a delay clause that names who caused the delay, and a payment structure that doesn&apos;t hand your leverage away on day one, start by working with contractors who already build this way.</p>
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
