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
          <div className="hero-badge">Contractor Ops · September 2026</div>
          <h1>The Client Says the Bank &apos;Hasn&apos;t Released the Draw Yet&apos;: Why That&apos;s Not Your Cash Flow Problem</h1>
          <p className="hero-subtitle">When a client blames a construction loan draw for a late payment, they&apos;re asking you to float their financing gap out of your own pocket. The fix is structural: money that&apos;s earmarked and held before the milestone starts, so a bank&apos;s paperwork delay never becomes your unpaid labor.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Stop invoicing against money that isn&apos;t sitting in a bank you control. That&apos;s the fix. When a client tells you the draw &quot;hasn&apos;t been released yet,&quot; the operational error already happened weeks earlier — you agreed to perform work backed by money that lives inside someone else&apos;s financing timeline.</p>
            <p>Here&apos;s what&apos;s actually going on. On a construction loan, the lender doesn&apos;t hand your client a pile of cash up front. They release money in draws, tied to inspections and paperwork. Your client submits a draw request, an inspector or lender rep verifies the work, and then — on the bank&apos;s schedule, not yours — funds move. That cycle routinely runs 7 to 21 days, and it stalls on holidays, missing lien waivers, appraiser backlogs, and loan officers who are out sick.</p>
            <p>None of that is your problem to finance. But the way most contractors structure payment, it becomes exactly that.</p>


            <h2>You&apos;re Being Asked to Be the Bank</h2>
            <p>When you pay your crew, your suppliers, and your fuel on Friday, but the draw doesn&apos;t clear until the following Thursday, you just floated your client&apos;s financing gap out of your own working capital. Do that across three active jobs and you&apos;re carrying five figures of someone else&apos;s loan paperwork on your line of credit.</p>
            <p>The client isn&apos;t necessarily lying. The draw genuinely may not have cleared. That&apos;s the trap — it&apos;s a true statement that still leaves you unpaid. &quot;The bank hasn&apos;t released it&quot; is a real explanation and a completely useless one, because your payroll doesn&apos;t run on the lender&apos;s calendar.</p>
            <blockquote className="article-quote">
              If your ability to make payroll depends on a loan officer clearing paperwork you never see, you don&apos;t have a client — you have a co-signer on a debt you didn&apos;t agree to.
              <cite>— General contractor, 14 years commercial framing</cite>
            </blockquote>


            <h2>The Structural Fix: Fund the Milestone Before It Starts</h2>
            <p>The answer isn&apos;t a sternly worded email or a late fee the client will dispute. It&apos;s changing when the money moves relative to when the work moves.</p>
            <p>Milestone-based escrow closes the gap. Before a phase of work begins, the funds for that phase are deposited and held — earmarked, out of the client&apos;s operating account, verified as present. You don&apos;t lift a hammer on the milestone until you can confirm the money is already sitting there. When the milestone is delivered and approved, it releases to you on a defined schedule, not the bank&apos;s.</p>
            <p>Notice what this does to the draw problem. The client&apos;s job is now to keep the next milestone funded ahead of the work. If the bank draw is slow, that&apos;s a conversation the client has to have with their lender — before your crew shows up, not after your invoice is 20 days old. The financing risk sits where it belongs: with the party who took out the loan.</p>


            <h2>What This Changes in Practice</h2>
            <p>Sequence your contract so no phase starts unfunded. Milestone one funds, milestone one runs, milestone one releases. Milestone two must be funded before you mobilize for it. A stalled draw halts the next start — it never converts into work you&apos;ve already performed and paid for.</p>
            <p>This also cleans up the ugliest version of the conversation. You&apos;re no longer chasing money for labor already spent. You&apos;re simply confirming a milestone is funded before you commit resources to it. &quot;Bank hasn&apos;t released the draw&quot; stops being your emergency and becomes a scheduling fact: we start when it&apos;s funded.</p>
            <p>The contractors who never carry a client&apos;s loan timeline aren&apos;t tougher negotiators. They just refuse to perform against money they can&apos;t see. If you want to see how milestone funding and release schedules get structured for the way trade work actually gets billed, it&apos;s worth reviewing the contractor plans directly.</p>
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
