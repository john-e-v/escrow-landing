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
          <div className="hero-badge">Contract Templates · July 2026</div>
          <h1>7 Contract Clauses That Stop Disputes Before They Start</h1>
          <p className="hero-subtitle">Most contractor disputes trace back to a clause that was never in the contract. Here are seven copy-paste clauses—payment triggers, delay handling, and material substitutions—you can add to your next agreement today.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Copy this into your next contract today:</p>
            <p>&quot;Payment is due within 7 calendar days of each completed milestone as defined in Exhibit A. Work on the subsequent phase will not begin until payment for the prior phase has cleared. Balances unpaid after 7 days accrue interest at 1.5% per month.&quot;</p>
            <p>That single clause resolves the most common dispute contractors face: the client who accepts the work, then stalls on the check. The clauses below do the same thing—each one closes a specific gap that turns into a fight. Add any of them to your very next agreement.</p>


            <h2>1. Payment Triggers (get paid on progress, not completion)</h2>
            <p>Tie money to milestones, not to a vague finish line. Define each phase in an exhibit and require payment before the next one starts. If the client wants Phase 3, they clear Phase 2. No exceptions, and it&apos;s in writing.</p>
            <blockquote className="article-quote">
              Payment is due within 7 calendar days of each completed milestone as defined in Exhibit A. Work on the subsequent phase will not begin until payment for the prior phase has cleared.
              <cite>— Payment trigger clause</cite>
            </blockquote>


            <h2>2. Change Order Requirement</h2>
            <p>Verbal &quot;can you just also…&quot; requests are the number one source of scope creep and unpaid work. Kill them with a clause that makes written approval mandatory before any extra work happens.</p>
            <blockquote className="article-quote">
              No additional or modified work shall be performed without a written Change Order signed by both parties, stating the added cost and schedule impact. Verbal requests are not binding.
              <cite>— Change order clause</cite>
            </blockquote>


            <h2>3. Delay Handling (protect your timeline)</h2>
            <p>When a client&apos;s slow decisions or the weather push your schedule, you shouldn&apos;t eat the cost. This clause shifts responsibility for delays outside your control and preserves your right to extend the completion date.</p>
            <blockquote className="article-quote">
              The completion date shall extend day-for-day for any delay caused by weather, client-directed changes, delayed selections, or failure to provide site access. Such delays are not a breach by Contractor.
              <cite>— Delay handling clause</cite>
            </blockquote>


            <h2>4. Material Substitution</h2>
            <p>Specified materials go out of stock constantly. Without a clause, a backordered fixture becomes a stalled job. Give yourself the right to substitute equivalents so the project keeps moving.</p>
            <blockquote className="article-quote">
              If a specified material becomes unavailable or lead times exceed 14 days, Contractor may substitute a product of equal or greater quality and value, notifying Client in writing prior to installation.
              <cite>— Material substitution clause</cite>
            </blockquote>


            <h2>5. Stop-Work for Non-Payment</h2>
            <p>You need the explicit right to walk off—cleanly and legally—when payment stops. This clause makes a stoppage your contractual remedy, not an abandonment you can be sued for.</p>
            <blockquote className="article-quote">
              If any payment is more than 10 days overdue, Contractor may suspend all work after 48 hours&apos; written notice, with no liability for resulting delay, until the balance is paid in full.
              <cite>— Stop-work clause</cite>
            </blockquote>


            <h2>6. Final Acceptance &amp; Punch List</h2>
            <p>&quot;It&apos;s not done&quot; becomes a bottomless pit without a defined acceptance step. Require a single written punch list and treat use of the space as acceptance.</p>
            <blockquote className="article-quote">
              Within 5 days of substantial completion, Client shall submit one written punch list. Items not listed are deemed accepted. Occupancy or use of the completed work constitutes final acceptance.
              <cite>— Final acceptance clause</cite>
            </blockquote>


            <h2>7. Documentation &amp; Photo Record</h2>
            <p>The clause that wins the argument you didn&apos;t know you&apos;d have. Make your own dated records the agreed evidence of the work&apos;s condition at each stage.</p>
            <blockquote className="article-quote">
              Contractor will maintain dated photographs and written logs at each milestone. These records shall serve as the agreed evidence of work condition and progress in the event of any dispute.
              <cite>— Documentation clause</cite>
            </blockquote>


            <h2>Put these to work</h2>
            <p>You don&apos;t need all seven at once. Pick the one that matches your last headache—slow payment, scope creep, a backordered part—and paste it into the agreement you send tomorrow. Each clause you add is one dispute that never gets the chance to start.</p>
            <p>If you want these clauses built into contract templates ready for your trade, take a look at the plans below.</p>
          </div>

          <div className="article-footer">
            <Link href="/guides" className="article-back">← Back to Guides</Link>
            <a href="/master" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>See contractor plans →</a>
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
