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
          <h1>12 Questions to Ask a Contractor Before You Sign Anything</h1>
          <p className="hero-subtitle">Copy-paste these 12 questions and send them to any contractor before you sign an estimate or hand over a deposit. Their answers—and how fast they give them—tell you everything about whether this job goes smoothly or sideways.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Copy these 12 questions. Paste them into a text or email. Send them to any contractor before you sign an estimate or hand over a dollar. The answers matter—but so does the speed. A legitimate contractor answers most of these in under an hour. A bad one stalls, deflects, or goes quiet.</p>
            <p>Here&apos;s the exact list to send.</p>


            <h2>The 12 Questions</h2>
            <p>1. &quot;What&apos;s your license number, and what state is it issued in?&quot; — Then verify it yourself at your state&apos;s contractor licensing board site (search &quot;[your state] contractor license lookup&quot;). Confirm it&apos;s active, not expired or suspended.</p>
            <p>2. &quot;Can you send me a certificate of insurance directly from your carrier?&quot; — You want general liability AND workers&apos; comp. Ask the insurer to email it to you, not a PDF the contractor forwards. Forged COIs are common.</p>
            <p>3. &quot;Are you the person doing the work, or are you subcontracting it?&quot; — If it&apos;s subs, ask for their license and insurance too. You&apos;re liable for uninsured workers on your property.</p>
            <p>4. &quot;What&apos;s your full legal business name and EIN?&quot; — Run the business name through your Secretary of State business search to confirm it exists and is in good standing.</p>
            <p>5. &quot;Can you give me three references from jobs completed in the last six months?&quot; — Recent, not &quot;a customer from 2019.&quot; Call at least two.</p>
            <p>6. &quot;What&apos;s the total price, and is that fixed or an estimate?&quot; — Get the distinction in writing. &quot;Estimate&quot; legally means it can climb.</p>
            <p>7. &quot;What&apos;s your deposit, and what does it cover?&quot; — A deposit over 30% or a demand for full payment upfront is a warning sign. Materials-only deposits should come with receipts.</p>
            <p>8. &quot;Can we put a payment schedule tied to milestones in the contract?&quot; — Payment should follow progress, not a calendar. Money released only when a stage is verifiably done.</p>
            <p>9. &quot;Will you pull the permits, or am I responsible?&quot; — If they want you to pull permits for work they&apos;re doing, that&apos;s a way to dodge liability. Push back.</p>
            <p>10. &quot;What&apos;s the start date and the completion date, and what happens if it runs long?&quot; — Get both dates and any delay terms in the signed document.</p>
            <p>11. &quot;What warranty do you offer on labor and materials, in writing?&quot; — Verbal warranties are worthless. Get the term and what it covers.</p>
            <p>12. &quot;Are you willing to be paid through escrow, where funds release as milestones are completed?&quot; — This is the single best filter you have. A confident, honest contractor says yes. Watch what happens when you ask.</p>
            <blockquote className="article-quote">
              The contractor who fights hardest against milestone-based payment is almost always the one you shouldn&apos;t hire.
              <cite>— common advice from consumer protection agencies</cite>
            </blockquote>


            <h2>Documents to Have in Hand Before You Sign</h2>
            <p>- A copy of the active license (verified by you, not just claimed)
- A certificate of insurance sent from the carrier
- A written contract with fixed price or clearly labeled estimate
- A milestone-based payment schedule
- Warranty terms in writing
- The permit responsibility spelled out</p>
            <p>If any of these are &quot;I&apos;ll get it to you later&quot; after you&apos;ve signed—stop.</p>


            <h2>The One Red Flag in Almost Every Bad Hire</h2>
            <p>They want a large deposit—or the full amount—before any work begins, and they resist tying payment to completed milestones.</p>
            <p>Every other issue can be a misunderstanding. This one is a pattern. Contractors who plan to do the work don&apos;t need your money before they&apos;ve done any of it. Contractors who plan to disappear need it all upfront.</p>
            <p>The cleanest way to remove that risk entirely is to only work with contractors who agree to escrow, where your money sits protected and releases only as each stage is finished and verified.</p>
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
