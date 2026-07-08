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
          <div className="hero-badge">Timeline &amp; Delays · July 2026</div>
          <h1>Why Your Kitchen Remodel Took 4 Months Instead of 6 Weeks</h1>
          <p className="hero-subtitle">The 6-week kitchen quote is real on paper and fictional in practice. Cabinet lead times, appliance backorders, and the domino effect of a single delayed inspection turn a six-week job into a four-month kitchen-free household.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Six weeks quoted. Eighteen weeks delivered. The family ate takeout for 112 days.</p>
            <p>This is not a horror story about a bad contractor. The contractor was competent, licensed, and mostly honest. The 6-week timeline was real — it was the number of working days his crew needed with hands on tools. What the quote didn&apos;t include was the waiting: the days nobody worked because nobody could. Those are the days that turned a summer project into a Thanksgiving-in-the-garage situation.</p>


            <h2>The timeline that only counts labor</h2>
            <p>Here&apos;s how the 6 weeks was actually structured. Week 1: demo. Week 2: rough plumbing and electrical, then inspection. Weeks 3–4: cabinets and countertops. Week 5: appliances and tile. Week 6: punch list. Clean, sequential, and completely dependent on every material arriving exactly on time and every inspector showing up exactly when scheduled.</p>
            <p>Cabinets were quoted at a 3-week lead time. They came in at 9. That&apos;s not unusual — semi-custom cabinet lead times routinely run 8–12 weeks, and the quote used a best-case number to make the timeline look tight. So the crew finished demo and rough-in by week 2, then stopped. There was nothing to install.</p>
            <blockquote className="article-quote">
              The build takes six weeks. The project takes as long as the slowest thing you&apos;re waiting on — and you&apos;re always waiting on something.
              <cite>— General contractor, 20 years residential remodeling</cite>
            </blockquote>


            <h2>The domino nobody prices in</h2>
            <p>The real damage wasn&apos;t the cabinet delay by itself. It was the cascade.</p>
            <p>When cabinets slipped from week 3 to week 9, the countertop template couldn&apos;t be taken until cabinets were installed — countertops need physical cabinets to measure against. That added another 2–3 week fabrication window on top. The appliance package, ordered to arrive in week 5, sat in a warehouse because the range was backordered, and the crew wouldn&apos;t set the others without the full set. Then the plumbing final inspection — which had been scheduled and canceled once already — got pushed to the back of the inspector&apos;s queue, adding 9 more days.</p>
            <p>Every single delay was small. Every single one moved every downstream task. A 6-week job with three modest slippages became a 16–18 week job, and the homeowner had no kitchen the entire time.</p>


            <h2>Why the contractor didn&apos;t just move on</h2>
            <p>The uncomfortable part: the contractor got paid on a schedule that had nothing to do with progress. A large deposit up front, another draw after demo. By week 3, he&apos;d collected over half the contract for maybe a third of the work — and demo plus rough-in is the cheap, fast part. The money arrived faster than the value did.</p>
            <p>So when cabinets were late, there was no financial pressure on anyone to fix it. The homeowner&apos;s leverage was gone. The contractor had already been paid for phases that were done; the phases that were stuck weren&apos;t tied to any release of funds. Waiting cost him nothing.</p>


            <h2>The structural fix</h2>
            <p>The thing that actually prevents this isn&apos;t a better timeline promise — it&apos;s tying money to completed milestones through escrow. When funds are held and released only when a defined phase is finished and verified, the incentive flips. Nobody gets the cabinet-installation payment until cabinets are installed. That doesn&apos;t make lead times shorter, but it does two things: it forces honest lead-time numbers into the contract up front, because inflated timelines expose the contractor&apos;s own cash flow, and it keeps you from paying ahead of work you haven&apos;t received.</p>
            <p>A milestone-based escrow structure wouldn&apos;t have made the cabinets arrive faster. But it would have kept the homeowner from financing a stalled project, and it would have surfaced the real 12-week lead time before demo day instead of after.</p>
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
