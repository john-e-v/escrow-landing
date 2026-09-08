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
          <h1>How to Vet a Contractor&apos;s Estimate in 10 Minutes: The Line-by-Line Gut Check</h1>
          <p className="hero-subtitle">A screenshot-and-save checklist for pressure-testing any contractor estimate before you sign. Walk through the exact line items, questions, and documents that separate a real bid from a trap.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Print the estimate. If it fits on one page and covers a job worth more than $5,000, you already have your answer — it&apos;s too thin to sign. Everything below is a 10-minute gut check you can run right now, before you commit a dollar.</p>
            <p>Work through these in order. Any item you can&apos;t confirm is a line you renegotiate or a contractor you walk from.</p>


            <h2>The 10-Minute Checklist</h2>
            <p>1. **Confirm the license is real, not just printed.** Take the license number off the estimate and run it through your state&apos;s contractor license board site (search &quot;[your state] contractor license lookup&quot;). Verify the name matches, the status is active, and there are no open disciplinary actions.</p>
            <p>2. **Check that the business name matches the bank account.** Ask: &quot;Who do I make the deposit check out to?&quot; If the answer is a personal name and not the licensed business, stop.</p>
            <p>3. **Request the certificate of insurance directly from the insurer.** Don&apos;t accept a PDF from the contractor — ask for the insurance agent&apos;s contact and confirm general liability and workers&apos; comp are current. A lapsed policy makes you liable for injuries on your property.</p>
            <p>4. **Demand a line-item breakdown, not a lump sum.** Every real estimate splits labor, materials, and permit costs separately. Ask: &quot;Can you break out materials from labor on each line?&quot; A refusal means they&apos;re hiding the markup.</p>
            <p>5. **Look for the allowance traps.** Scan for words like &quot;allowance,&quot; &quot;TBD,&quot; or &quot;as needed.&quot; Ask: &quot;What specific product and quantity is this allowance based on?&quot; Vague allowances are where change-order surprises live.</p>
            <p>6. **Verify the permit responsibility in writing.** Ask: &quot;Are you pulling the permit under your license?&quot; If they want you to pull it as a homeowner, they&apos;re avoiding accountability for code compliance.</p>
            <p>7. **Confirm the payment schedule caps the deposit.** Most states cap deposits at 10% or $1,000, whichever is less. A demand for 40–50% upfront is a funding-the-last-job red flag.</p>
            <p>8. **Request three references from the last 90 days.** Not their best jobs ever — recent ones. Ask each: &quot;Did the final price match the estimate, and did they finish on schedule?&quot;</p>
            <p>9. **Check the start and completion dates are in the document.** &quot;Start date&quot; and &quot;substantial completion&quot; should be written, not verbal. No timeline in writing means no leverage later.</p>
            <p>10. **Read the change-order clause out loud.** Ask: &quot;How are changes priced and approved?&quot; The answer should require your written signature before any extra work. If changes can happen without your sign-off, the budget is fiction.</p>
            <blockquote className="article-quote">
              A lump-sum bid with a big deposit and no line items isn&apos;t an estimate — it&apos;s a request for an interest-free loan you may never see finished.
              <cite>— Common advice from state contractor licensing boards</cite>
            </blockquote>


            <h2>The One Red Flag in Almost Every Bad Hire</h2>
            <p>It&apos;s the rushed deposit. The contractor who pressures you to pay a large sum today — &quot;to lock in the price,&quot; &quot;to get on the schedule,&quot; &quot;before materials go up&quot; — is the one you&apos;ll be chasing later. Real professionals get paid as work gets completed, not before it starts. If the money has to move faster than the work, walk.</p>
            <p>The cleanest way to remove that pressure entirely is to only work with contractors who agree to release payment in stages tied to finished work — so your deposit sits protected until the job actually moves.</p>
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
