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
          <div className="hero-badge">Payment Red Flags · September 2026</div>
          <h1>The Client Wants to Pay in Two Checks to &apos;Keep It Under Reporting&apos;: Why That&apos;s Your Problem</h1>
          <p className="hero-subtitle">When a client asks you to split payment into smaller checks to dodge reporting thresholds, you&apos;re the one who eats the audit risk and the non-payment exposure. Structure the deal through milestone escrow so the money moves in full and on the record every time.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Say no, and route the payment through milestone escrow instead. That&apos;s the whole fix. When a client asks you to split a $14,000 payment into two $7,000 checks &apos;to keep it under reporting,&apos; the correct operational answer is to decline the split and structure the job so the money releases in full at defined milestones, on the record, every time.</p>
            <p>Here&apos;s why this lands on you and not them. The reporting threshold they&apos;re trying to dodge — whether it&apos;s a 1099-K trigger, a bank&apos;s cash-transaction reporting, or a state licensing board&apos;s job-value cap — attaches to the transaction, not to their intent. When it unwinds, the person holding the paper trail is you. You deposited the checks. You did the work at that address. You&apos;re the one with a business license, an EIN, and a filing history that an examiner can pull in an afternoon.</p>


            <h2>The client&apos;s convenience is your liability</h2>
            <p>A client asking you to fragment a payment is asking you to take on their risk for free. Think about what you&apos;re actually agreeing to:</p>
            <p>You&apos;re agreeing to under-report or mis-time income, which is your tax problem, not theirs. You&apos;re agreeing to two separate collection events instead of one — meaning after check one clears, check two becomes &apos;let me get back to you next month.&apos; You&apos;re agreeing to a paper trail that contradicts your own contract value, which is the exact discrepancy that turns a routine review into a real one. And if the job value crosses a licensing threshold in your state, splitting the invoice doesn&apos;t make the job smaller — it just makes your records look like you tried to hide that it wasn&apos;t.</p>
            <p>The client walks away clean. You&apos;re the licensed entity holding a stack of checks that don&apos;t add up to the contract you signed.</p>
            <blockquote className="article-quote">
              The moment you agree to make their money invisible, you&apos;ve volunteered to be the one it becomes visible on.
              <cite>— Contractor who ate a two-check split and a follow-up notice</cite>
            </blockquote>


            <h2>What escrow actually solves here</h2>
            <p>Milestone escrow removes the entire negotiation because there&apos;s nothing to split. The client funds the full job value into escrow up front — before you swing a hammer. The money is committed, documented, and sitting there in one clean amount tied to your contract. As you hit each defined milestone, funds release to you automatically against work that&apos;s actually done.</p>
            <p>That structure kills the &apos;two checks&apos; request at the root. The client can&apos;t ask you to fragment a payment they&apos;ve already funded as a single deposit. The record shows one contract, one funded amount, one set of milestone releases — a paper trail that matches itself instead of fighting itself.</p>
            <p>It also fixes the collection problem hiding inside the reporting problem. A client who wants to split checks is a client who is thinking about how to control the money after the work is done. Escrow moves that control to the front, where it belongs. You don&apos;t chase check two. It&apos;s already funded and waiting on the milestone.</p>


            <h2>The line to hold</h2>
            <p>When the split gets floated, your answer is short: &apos;I run all jobs through escrow — the full amount gets funded up front and releases as we hit milestones. It&apos;s cleaner on both sides and it&apos;s how I keep my licensing and taxes straight.&apos; A legitimate client hears risk protection. A client who was counting on your books being flexible hears the door closing — and that&apos;s information you wanted anyway.</p>
            <p>You don&apos;t fix a client&apos;s reporting angle by absorbing it. You fix it by structuring the deal so there&apos;s no angle left to work. If you want to see how milestone escrow is set up for contract jobs at your scale, take a look at the plans built for it.</p>
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
