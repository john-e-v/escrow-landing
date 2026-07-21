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
          <div className="hero-badge">Vetting Checklist · July 2026</div>
          <h1>9 Contractor Red Flags to Spot in the First Meeting</h1>
          <p className="hero-subtitle">Most bad hires reveal themselves before you sign anything—if you know what to watch for. This is the exact checklist to run during your first meeting with any contractor, from how they handle your questions to the one deposit request that should end the conversation.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Run this checklist during your first meeting with any contractor. Every item is something you can verify today—a question to ask, a document to request, or a site to check. Nine of these get flagged before a contract is ever signed. Go in order.</p>
            <p>1. Ask for their license number, then check it yourself. Don&apos;t accept a photo of a laminated card. Get the number and look it up on your state&apos;s contractor licensing board site (search &quot;[your state] contractor license lookup&quot;). Confirm the name matches, the license is active, and there are no suspensions.</p>
            <p>2. Request a certificate of insurance—not a verbal &apos;yes, I&apos;m covered.&apos; Ask them to have their insurer send a COI naming you as certificate holder. You want general liability and, if they have a crew, workers&apos; comp. No paperwork within 48 hours is an answer.</p>


            <h2>Questions to ask out loud</h2>
            <p>3. &quot;Can I have three references from jobs you finished in the last six months?&quot; Recent and complete matters. Anyone can dig up one happy client from three years ago. Call at least two.</p>
            <p>4. &quot;Who is actually doing the work—you, employees, or subs?&quot; Then ask if the subs are licensed and insured too. If they get vague or annoyed, that&apos;s your answer about how the job will be managed.</p>
            <p>5. &quot;What&apos;s your written change-order process?&quot; A pro has one. They&apos;ll tell you changes are documented and priced before work continues. If the answer is &apos;we&apos;ll just figure it out as we go,&apos; expect surprise costs.</p>
            <p>6. &quot;What does the payment schedule look like?&quot; You want it tied to milestones, not the calendar. Deposit, then payments as defined phases complete, with a final payment held until you sign off.</p>
            <blockquote className="article-quote">
              A contractor who won&apos;t put the payment schedule in writing is telling you how the dispute will go before it starts.
              <cite>— Construction dispute mediator</cite>
            </blockquote>


            <h2>Documents to get in hand</h2>
            <p>7. Get a written, itemized estimate—line items for labor, materials, and timeline. Not a single lump-sum number scrawled on the back of a card. Vague estimates become vague invoices.</p>
            <p>8. Ask for the contract before you&apos;re asked for money. Read it for a start date, a substantial-completion date, a scope of work, and how disputes get handled. Missing dates are missing accountability.</p>
            <p>9. Search their business name plus your city, plus the word &apos;complaint&apos; and &apos;lawsuit.&apos; Check your state contractor board&apos;s disciplinary records and the Better Business Bureau. Two minutes now saves months later.</p>


            <h2>The one red flag in almost every bad hire</h2>
            <p>They ask for a large cash deposit up front—often 40%, 50%, or more—before any materials are ordered or any work begins. Sometimes they&apos;ll push for cash specifically, or offer a discount if you pay the whole thing early.</p>
            <p>This is the single request that shows up in nearly every horror story: the deposit that funds their last job&apos;s shortfall, or the deposit that simply disappears. A legitimate contractor ties payments to completed work and does not need your full budget before lifting a tool. If a deposit request feels large, unstructured, or cash-only, end the conversation there.</p>
            <p>The cleanest protection against this is to only hire contractors who agree to release payments as milestones are met—so your money moves when the work does, not before.</p>
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
