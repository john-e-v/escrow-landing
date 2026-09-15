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
          <div className="hero-badge">Before You Hire · September 2026</div>
          <h1>The Contractor Wants to Start on a Handshake: Why No Written Contract Ends the Deal</h1>
          <p className="hero-subtitle">A contractor who won&apos;t sign a written contract before starting is telling you exactly how the job will go when something breaks. Here&apos;s the exact script to request one today, and what has to be in it before you hand over a cent.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>1. Ask this today, word for word: &quot;Send me your standard written contract before we schedule anything.&quot; A legitimate contractor already has one. If the answer is &quot;I don&apos;t really do contracts&quot; or &quot;we&apos;ll sort the paperwork later,&quot; the job is over. Stop here.</p>
            <p>A contractor who won&apos;t put terms in writing before starting is telling you exactly how the job will go when something breaks: there will be no record, no recourse, and no accountability. The handshake isn&apos;t friendliness. It&apos;s the absence of a paper trail — by design.</p>


            <h2>The Request Script</h2>
            <p>Copy this into a text or email and send it before you agree to a start date:</p>
            <p>&quot;Before we begin, I need a written contract covering: total price, payment schedule, scope of work, materials, start and completion dates, and what happens if either of us cancels. Can you send that over by [date]?&quot;</p>
            <p>That&apos;s it. You&apos;re not being difficult. You&apos;re doing what every commercial client does automatically. Watch how they respond — a pro sends it same-day; a problem stalls, argues, or tells you it&apos;s unnecessary for &quot;a job this small.&quot;</p>
            <blockquote className="article-quote">
              The size of the job has nothing to do with whether it needs a contract. The smaller the job, the faster a bad contractor disappears with your deposit.
              <cite>— construction dispute mediator</cite>
            </blockquote>


            <h2>What Has To Be In It Before You Pay a Cent</h2>
            <p>Do not hand over a deposit until the document contains every one of these. Check them off:</p>
            <p>2. Legal business name and physical address — not just a cell number and a first name.</p>
            <p>3. License number, printed on the contract. Then verify it. Search your state&apos;s contractor licensing board (search &quot;[your state] contractor license lookup&quot;) and confirm it&apos;s active and matches the name on the document.</p>
            <p>4. Proof of insurance. Request a Certificate of Insurance (COI) naming general liability and workers&apos; comp. Ask that it be sent directly from their insurer, not a photo of a lapsed card.</p>
            <p>5. Total price and a payment schedule tied to milestones — not dates. &quot;50% on rough-in complete, 40% on inspection pass, 10% on final walkthrough.&quot; Never &quot;50% up front.&quot; A deposit above 20–30% is a warning.</p>
            <p>6. Detailed scope of work. Specific materials, brands, quantities, and finishes. &quot;Install flooring&quot; is not a scope. &quot;Install 340 sq ft of [brand/model] LVP, including underlayment and quarter-round&quot; is.</p>
            <p>7. Start date and substantial completion date, with a written note on delays.</p>
            <p>8. A change-order clause requiring any added cost to be signed in writing before work proceeds. This single line prevents the most common form of price gouging.</p>
            <p>9. A lien waiver clause — the contractor provides waivers as you pay, so a subcontractor they stiff can&apos;t put a lien on your home.</p>
            <p>10. Warranty terms in writing: what&apos;s covered, for how long, and how you request a repair.</p>


            <h2>The Red Flag In Almost Every Bad Hire</h2>
            <p>It&apos;s pressure to pay in cash, up front, before anything is in writing.</p>
            <p>Every version of the bad-contractor story starts the same way: a large cash deposit demanded fast, with a reason it can&apos;t wait — a supplier deadline, a &quot;discount&quot; that expires, a crew that&apos;s &quot;only free this week.&quot; Cash leaves no record. Up front means no leverage. Before writing means no proof of what you were promised.</p>
            <p>When you hold your money in escrow and release it only as verified milestones are met, that pressure evaporates — and so does the contractor who was counting on it.</p>
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
