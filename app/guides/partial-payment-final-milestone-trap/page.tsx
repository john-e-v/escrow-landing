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
          <div className="hero-badge">Contractor Ops · August 2026</div>
          <h1>The Client Paid 90% and Called It &apos;Done.&apos; Here&apos;s How to Stop Eating the Last 10%</h1>
          <p className="hero-subtitle">When a client sends a partial payment and treats the balance as negotiable, you&apos;ve lost your leverage the moment you accept it. Structure the final milestone so the last dollar releases automatically on completion, not on the client&apos;s mood.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>The fix: never let the final payment depend on the client agreeing that you&apos;re done. Tie the last milestone to a defined completion event, funded and held before the work starts, so the release is a mechanical trigger — not a conversation.</p>
            <p>When a client sends 90% and calls the job complete, the problem isn&apos;t the missing 10%. The problem is that you already handed over the finished work and now you&apos;re asking for money you can&apos;t force. You&apos;ve become a collections agent for your own labor. The leverage was gone the moment the last deliverable left your hands with the balance still owed.</p>


            <h2>Why the last 10% is the one you lose</h2>
            <p>Every payment schedule has a weakest link, and it&apos;s always the final one. Early milestones get paid because the client still needs you — there&apos;s more work coming, more leverage on your side. The final payment has no such pressure behind it. The client already has what they wanted. Withholding the last slice costs them nothing and costs you your margin.</p>
            <p>So a client who&apos;s perfectly reasonable at 40% and 70% suddenly discovers &apos;issues&apos; at 100%. Not because the work is bad, but because the final payment is the only one where paying is optional. You&apos;ve structured your entire schedule so the riskiest dollar is the last dollar and the last dollar is the one with zero leverage attached to it.</p>
            <blockquote className="article-quote">
              The final invoice isn&apos;t a payment. It&apos;s a favor you&apos;re hoping the client feels like doing.
              <cite>— General contractor, after eating a 15% balance</cite>
            </blockquote>


            <h2>Move the money before the work, not after</h2>
            <p>The structural answer is milestone escrow. The client funds each milestone into a held account before that phase begins. The money is committed — out of the client&apos;s checking account, out of their control to &apos;renegotiate&apos; — but not yet yours. It releases when the milestone&apos;s completion condition is met.</p>
            <p>That single change flips the whole dynamic. You&apos;re no longer chasing a payment after delivery. The funds are already sitting there, earmarked, waiting on a defined trigger. The client can&apos;t send 90% and call it done, because they don&apos;t control the release timing and the last 10% was funded at kickoff, not begged for at closeout.</p>
            <p>The key is defining the completion condition in writing before anyone starts. Not &apos;client is satisfied&apos; — that&apos;s just their mood in a contract. Use something objective: final walkthrough completed, punch list items checked off, deliverables uploaded and accepted within a stated window. When the condition is met, the money releases. No email thread. No waiting on a check.</p>


            <h2>What this actually protects</h2>
            <p>Escrow doesn&apos;t just protect your final payment — it protects the relationship. A client who knows the funds are already committed stops treating the balance as a bargaining chip, because there&apos;s nothing to bargain over. The negotiation happened up front, when both sides had leverage and goodwill. That&apos;s the right time to argue about scope, not the day before you&apos;d like to get paid.</p>
            <p>And if there&apos;s a genuine dispute, an escrow structure gives you a defined process instead of a standoff. The money doesn&apos;t vanish and it doesn&apos;t get released under pressure — it stays held until the condition is resolved. That&apos;s a far better position than &apos;I finished the job and now I&apos;m hoping.&apos;</p>
            <p>If you&apos;re tired of the last milestone being the one that always slips, look at how contractor plans handle milestone funding and automatic release. It&apos;s the difference between invoicing and getting paid.</p>
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
