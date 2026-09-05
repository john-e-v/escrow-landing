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
          <div className="hero-badge">Contract Clauses · September 2026</div>
          <h1>The Indemnification Clause That Stops a Client&apos;s Neighbor From Suing You</h1>
          <p className="hero-subtitle">When a client&apos;s neighbor, guest, or the client themselves files a third-party claim over your work, the indemnification clause decides who pays the lawyer. This is the exact language to drop into your contract before your next job starts.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Copy this into your contract before your next job:</p>
            <p>&quot;Contractor shall indemnify, defend, and hold harmless Client from and against any and all third-party claims, damages, liabilities, and reasonable attorneys&apos; fees arising out of bodily injury or property damage to the extent caused by the negligent acts or omissions of Contractor in the performance of the Work. This obligation shall not extend to claims arising from the negligence or willful misconduct of Client, Client&apos;s agents, or other parties not under Contractor&apos;s control.&quot;</p>
            <p>That second sentence is the whole game. Without it, you just agreed to pay for the client&apos;s mistakes too.</p>


            <h2>Why the Neighbor&apos;s Claim Lands on You</h2>
            <p>Here&apos;s the scenario that ends careers: You&apos;re re-grading a backyard. Water reroutes and floods the neighbor&apos;s basement. The neighbor sues the homeowner. The homeowner turns around and points at your contract.</p>
            <p>If your indemnification clause is open-ended — &apos;Contractor indemnifies Client from all claims arising from the Work&apos; — you now owe the homeowner&apos;s legal defense AND the neighbor&apos;s damages, even if the drainage plan the homeowner insisted on was the real cause.</p>
            <p>The fix is the phrase &apos;to the extent caused by the negligent acts or omissions of Contractor.&apos; Those eight words convert a blank check into a proportional obligation. You pay for your share of the fault. Not theirs.</p>
            <blockquote className="article-quote">
              The difference between &apos;arising out of the Work&apos; and &apos;to the extent caused by Contractor&apos;s negligence&apos; is the difference between a $2,000 claim and a $60,000 one.
              <cite>— construction defense attorney</cite>
            </blockquote>


            <h2>Add the Duty-to-Defend Trigger</h2>
            <p>One clause isn&apos;t enough. Indemnification pays after a verdict. &apos;Defense&apos; pays for the lawyer while the fight is happening — which is where the money actually goes.</p>
            <p>Drop this line directly beneath the clause above:</p>
            <p>&quot;Contractor&apos;s duty to defend arises upon written tender of the claim by Client and applies regardless of the ultimate determination of fault, subject to reimbursement by Client for any portion of defense costs allocable to Client&apos;s own negligence.&quot;</p>
            <p>That &apos;subject to reimbursement&apos; language means you defend up front but get paid back for the portion that wasn&apos;t your fault. Without it, you defend the whole thing and eat the cost even when you win.</p>


            <h2>Do These Three Things on Your Next Job</h2>
            <p>1. Paste both clauses into your standard contract today — before you sign anything new. Retroactive edits don&apos;t count.</p>
            <p>2. Name your insurance carrier and policy number in the contract, and add &apos;Contractor shall name Client as additional insured for the duration of the Work.&apos; This puts your insurer, not your bank account, on the hook first.</p>
            <p>3. Photograph the site condition before you start — especially shared property lines, existing drainage, and any pre-existing cracks or damage on adjacent structures. When a neighbor claims your job caused a problem, your timestamped photo showing it was already there is the cheapest defense you&apos;ll ever buy.</p>
            <p>The clause decides who&apos;s liable. The photos decide whether the claim survives at all.</p>


            <h2>Make It Standard, Not Special</h2>
            <p>The contractors who get sued into oblivion aren&apos;t careless — they&apos;re inconsistent. They use the strong clause on the big commercial job and a handshake on the neighbor&apos;s kitchen remodel. Third-party claims don&apos;t care how big the project was.</p>
            <p>Every contract you send should carry the same defense language, the same additional-insured requirement, and the same before-photo habit. If you&apos;re rebuilding your contract from scratch every time, you&apos;re leaving gaps a plaintiff&apos;s lawyer will find.</p>
            <p>If you want these clauses already built into a contract template that&apos;s ready to send, take a look at the plans below.</p>
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
