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
          <div className="hero-badge">The Escrow Effect · August 2026</div>
          <h1>The Contractor Installed the Wrong-Size HVAC. Escrow Meant the Homeowner Hadn&apos;t Paid.</h1>
          <p className="hero-subtitle">A homeowner nearly paid in full for a 2-ton system when the load calc called for 3. Because the final release was held in escrow, the undersized unit got caught—and corrected—before a single dollar moved. Here&apos;s how the timing saved them $6,400.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$6,400. That&apos;s what the homeowner would have overpaid for a system that couldn&apos;t heat and cool their house—if the final payment hadn&apos;t been sitting in escrow when the mistake surfaced.</p>
            <p>The project looked routine. A 1,900-square-foot two-story in a mixed climate, aging furnace, a summer of a struggling window unit. The homeowner got three quotes, picked a mid-priced contractor with solid reviews, and signed off on a full system replacement. The scope said 3-ton. The load calculation, done properly for the square footage, insulation, and window count, said 3-ton. Everyone agreed on 3-ton.</p>
            <p>What got installed was a 2-ton.</p>


            <h2>How It Almost Slipped Through</h2>
            <p>The installing crew wasn&apos;t the crew that sold the job. Somewhere between the sales estimate, the equipment order, and the warehouse pull, the unit got swapped down a size—cheaper for the contractor, invisible to the homeowner. The condenser was outside, the air handler was in the attic, the thermostat was blinking a friendly blue. From the couch, it looked done.</p>
            <p>Under the old way of paying, this is the exact moment the homeowner writes the final check. The system runs. It&apos;s summer, it&apos;s cooling, everyone&apos;s relieved. The undersizing wouldn&apos;t announce itself until the first real heat wave—when the unit runs nonstop, never quite catches up, and the utility bill climbs. By then the money&apos;s gone and the conversation shifts from &apos;fix this&apos; to &apos;prove it.&apos;</p>
            <blockquote className="article-quote">
              The failures I see aren&apos;t usually bad work. They&apos;re the wrong equipment, quietly installed, discovered after the money&apos;s already changed hands.
              <cite>— HVAC inspector, 20+ years</cite>
            </blockquote>


            <h2>Why the Timing Held</h2>
            <p>This job used escrow-first payment. The homeowner had funded the full amount up front—so the contractor knew the money was real and committed—but the final release was tied to a defined completion milestone, not a handshake and a running compressor.</p>
            <p>That milestone included a match between the installed equipment and the agreed scope. When the homeowner&apos;s brother-in-law, an HVAC tech, stopped by and read the model number off the condenser, the 2-ton stamp didn&apos;t line up with the 3-ton contract. The final release hadn&apos;t happened. The leverage hadn&apos;t evaporated.</p>
            <p>So the correction was simple. The contractor pulled the undersized unit, ordered the correct 3-ton, and swapped it—because the only path to getting paid ran straight through delivering what was agreed. No lawyers. No chargeback fight. No living with an underpowered system for a decade to avoid a legal battle.</p>


            <h2>The Part Worth Sitting With</h2>
            <p>Nobody had to be a villain for this to go wrong. The contractor wasn&apos;t running a scam. The homeowner wasn&apos;t naive. A wrong box got pulled, and without a checkpoint between installation and payment, wrong boxes become permanent facts.</p>
            <p>Escrow didn&apos;t catch the mistake—a sharp brother-in-law did. What escrow did was make catching it matter. It kept the money in a place where the answer to &apos;this is the wrong size&apos; was still &apos;okay, we&apos;ll fix it,&apos; instead of &apos;you already paid, take me to court.&apos;</p>
            <p>That&apos;s the whole mechanism. Payment funded, so the work is trusted. Payment released only on verified completion, so the standard is enforceable. The gap between those two moments is where $6,400 mistakes get corrected instead of inherited.</p>
            <p>If you&apos;re about to hand a contractor a large sum for work you can&apos;t fully inspect yourself, the question isn&apos;t whether they&apos;re honest. It&apos;s whether the timing of your payment still gives you room to say &apos;not yet.&apos;</p>
          </div>

          <div className="article-footer">
            <Link href="/guides" className="article-back">← Back to Guides</Link>
            <a href="/create" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>Set up an escrow-backed project →</a>
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
