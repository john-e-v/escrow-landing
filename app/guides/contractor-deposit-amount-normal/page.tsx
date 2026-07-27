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
          <div className="hero-badge">Before You Hire · July 2026</div>
          <h1>How Much Should a Contractor Deposit Be? What&apos;s Normal vs. a Warning Sign</h1>
          <p className="hero-subtitle">Before you write a deposit check, know what a reasonable down payment actually looks like and what number should make you walk. This checklist gives you the exact thresholds, the questions to ask, and where the money should legally sit.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>10% is normal. 33% is the ceiling in many states. Anything above 50% before work starts is a warning sign — walk.</p>
            <p>Before you write that check, run every item on this list. Each one is something you can do today, before you commit a dollar.</p>


            <h2>The Deposit Rules That Actually Hold Up</h2>
            <p>1. Confirm the deposit is 10%–33% of the total job. For most residential work, 10% is standard. Some states cap it by law: California caps home improvement deposits at 10% or $1,000, whichever is less. Maryland caps at 1/3. Look up your state&apos;s cap before you negotiate.</p>
            <p>2. Ask directly: &quot;What is this deposit paying for?&quot; A legitimate answer is materials ordering or scheduling. A vague &quot;it&apos;s just how I work&quot; is not an answer.</p>
            <p>3. Request a payment schedule tied to milestones, in writing. You want to see: deposit, then payments at framing/rough-in/completion — never one lump sum up front.</p>
            <p>4. Never pay the full balance before the final walkthrough. Hold at least 10% until the punch list is done and signed off.</p>
            <blockquote className="article-quote">
              If a contractor needs more than a third of the job up front to get started, they&apos;re financing their business with your money — not funding your project.
              <cite>— Common guidance from state contractor licensing boards</cite>
            </blockquote>


            <h2>Verify Before You Pay</h2>
            <p>5. Check the license today. Search your state&apos;s contractor license board (search &quot;[your state] contractor license lookup&quot;). Confirm the name on the license matches the name on the contract.</p>
            <p>6. Ask for the certificate of insurance — general liability AND workers&apos; comp — and confirm it&apos;s current. Request it be sent directly from their insurer or agent, not a PDF they hand you.</p>
            <p>7. Pull two references from jobs completed 12+ months ago. Recent references only prove they started; older ones prove they finished and stood behind the work.</p>
            <p>8. Get the full contract in writing before any money changes hands: scope, materials, start and completion dates, total price, and the deposit amount spelled out.</p>


            <h2>Where the Money Should Legally Sit</h2>
            <p>9. For larger jobs, ask whether they&apos;ll accept escrow or milestone-based release. Your deposit sitting in a neutral account — released as work is verified — protects both sides.</p>
            <p>10. If you pay by card or check, make it traceable. Never pay in cash for a deposit. No paper trail means no leverage if the work stops.</p>
            <p>11. Confirm materials are ordered before the second payment. Ask for the supplier receipt. Real deposits turn into real materials fast.</p>


            <h2>The One Red Flag in Almost Every Bad Hire</h2>
            <p>The pressure for a large cash deposit up front, right now, before you&apos;ve signed anything.</p>
            <p>It shows up in nearly every horror story: the contractor who needs 50% in cash &quot;to lock in the price&quot; or &quot;because the supplier demands it Monday.&quot; A real contractor has a line of credit with suppliers and doesn&apos;t need your cash to buy your materials. Urgency plus a big up-front number is the pattern that precedes the disappearing act.</p>
            <p>The fix is simple: only work with contractors who accept payment structures that protect you. If your deposit sits in escrow and releases only as verified work gets done, the incentive to vanish disappears.</p>
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
