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
          <div className="hero-badge">Before You Hire · August 2026</div>
          <h1>The Contractor Wants Full Payment Before Starting: Why That Ends the Conversation</h1>
          <p className="hero-subtitle">A legitimate contractor never needs 100% of the job cost before they&apos;ve swung a hammer. This checklist gives you the exact payment terms to demand, the documents to request, and the one line that should end any meeting on the spot.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>A contractor who asks for 100% upfront is telling you they can&apos;t finance their own work — or they don&apos;t intend to finish it. Either way, the conversation is over. The industry standard is a deposit of 10-30% to secure your slot and cover initial materials. Anything above that, and you&apos;re the one funding the business.</p>
            <p>Run through this list before you sign anything or hand over a dollar. Every item is something you can do today, in the next hour, from your phone.</p>


            <h2>1. Set the payment schedule in writing before work begins</h2>
            <p>Demand a milestone-based schedule and refuse anything else. A healthy structure looks like this: 10-30% deposit, progress payments tied to completed phases (demo done, rough-in inspected, drywall up), and a final 10-15% held until the job passes inspection and you&apos;ve walked it.</p>
            <p>Write this exact line into your agreement: &quot;Final payment of [amount] is due upon completion, final inspection, and written punch-list sign-off.&quot; If they push back on holding the final payment, that tells you what final quality is going to look like.</p>


            <h2>2. Ask for the license number — then verify it yourself</h2>
            <p>Don&apos;t accept a laminated card at face value. Get the license number and check it against your state&apos;s contractor licensing board. Most states have a free lookup at their Department of Consumer Affairs or Contractors State License Board (search &quot;[your state] contractor license lookup&quot;).</p>
            <p>Confirm three things: the license is active, it&apos;s in the contractor&apos;s or company&apos;s actual name, and there are no suspensions or disciplinary actions on file.</p>


            <h2>3. Request the certificate of insurance directly from their carrier</h2>
            <p>Ask for a Certificate of Insurance (COI) showing general liability and workers&apos; comp. Then ask for the insurance agent&apos;s phone number and call to confirm the policy is current. A contractor can hand you an expired or canceled certificate and you&apos;d never know.</p>
            <p>If a worker gets hurt on your property and there&apos;s no workers&apos; comp, that liability can land on you.</p>


            <h2>4. Get three references from jobs completed 1-3 years ago</h2>
            <p>Recent references are easy to stage. Ask specifically for jobs finished one to three years ago so you can ask: &quot;Has anything failed or needed rework since?&quot; Then ask each reference the question that matters most — &quot;Did the final cost match the original quote, and if not, why?&quot;</p>


            <h2>5. Require a written, line-itemized contract</h2>
            <p>No handshake deals, no napkin math. The contract must list scope of work, materials and grades, start and completion dates, total price, the payment schedule, and who pulls the permits. If the contract says &quot;labor and materials — $18,000&quot; with no breakdown, you have no way to dispute a single charge later.</p>


            <h2>6. Confirm who pulls the permit</h2>
            <p>The contractor should pull it — always. If they ask you to pull the permit yourself, they may be uninsured, unlicensed, or trying to make you legally responsible for the work. That&apos;s a workaround, not a convenience.</p>


            <h2>The one red flag that shows up in almost every bad hire</h2>
            <p>They pressure you to decide fast and pay in cash. &quot;I&apos;ve got an opening this week if you can put down the full amount today.&quot; Urgency plus cash-only plus a large upfront demand is the pattern behind nearly every disappearing-contractor story. A legitimate professional has a pipeline, accepts traceable payment, and gives you time to verify everything on this list.</p>
            <p>The simplest protection against all of it is to never let your money get ahead of the work. When funds sit in escrow and release only as milestones are met, an upfront-payment demand simply can&apos;t happen.</p>
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
