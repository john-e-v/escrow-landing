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
          <div className="hero-badge">Payment Ops · August 2026</div>
          <h1>The Client Says They&apos;ll Pay &apos;When the HELOC Comes Through&apos;: Why That&apos;s Not Your Problem</h1>
          <p className="hero-subtitle">When a client ties your payment to their financing timeline, you&apos;ve quietly become their lender without agreeing to it. Structure the job so funds are committed before you mobilize, not promised against a loan that hasn&apos;t closed.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Stop mobilizing on a promise tied to someone else&apos;s loan closing. If the client says they&apos;ll pay &quot;when the HELOC comes through,&quot; the answer is simple: the money gets committed to the job before your crew shows up, or the job doesn&apos;t start. That&apos;s not a hard-line negotiation stance. That&apos;s just not funding their construction loan out of your own receivables.</p>
            <p>Here&apos;s what&apos;s actually happening when a client ties your payment to their financing timeline. You&apos;ve become their lender. You didn&apos;t sign a loan agreement, you didn&apos;t run their credit, and you didn&apos;t price in the risk — but you&apos;re now carrying labor, materials, and overhead against a loan that hasn&apos;t closed and might not close on the schedule they described.</p>


            <h2>A HELOC Is Not a Guarantee of Anything</h2>
            <p>Home equity lines fall through, get delayed, and come in smaller than expected all the time. Appraisals come back low. Underwriting stalls. The client&apos;s debt-to-income shifts because they financed a truck in the middle of it. None of that is visible to you, and none of it is under your control — yet all of it lands on your books the moment you start buying materials against it.</p>
            <p>The timeline they quote you is the best-case timeline their loan officer gave them. Best case is not a payment schedule. When you accept &quot;when it comes through&quot; as your terms, you&apos;ve accepted their most optimistic assumption as your operating reality.</p>
            <blockquote className="article-quote">
              Every dollar you spend before their loan funds is a dollar you&apos;ve loaned them at zero interest, with no collateral and no closing date.
              <cite>— operational reality of financing-contingent work</cite>
            </blockquote>


            <h2>The Structural Fix: Commit the Funds First</h2>
            <p>You don&apos;t solve this by getting a better verbal promise. You solve it by changing where the money sits before work begins.</p>
            <p>Structure the job so the funds for the current phase are committed and held before you mobilize on that phase. Milestone-based escrow does exactly this: the client deposits the funds for a defined stage into a neutral hold, the money is confirmed as present, and it releases to you when that stage is completed and signed off. The client&apos;s financing timeline becomes their problem to solve before the phase starts — not yours to absorb after it&apos;s underway.</p>
            <p>The difference is subtle but total. Under &quot;pay when the HELOC comes through,&quot; you carry the risk of their loan. Under committed milestone funding, the money is already there before you spend a dollar of your own. You&apos;re no longer betting your payroll on an underwriter you&apos;ve never met.</p>


            <h2>How to Say It Without Losing the Job</h2>
            <p>You don&apos;t have to accuse anyone of not being good for it. The framing is procedural, not personal: &quot;I schedule crews and order materials against funds that are already committed to the job. Once the funds for phase one are in the hold, I can put you on the calendar.&quot;</p>
            <p>That sentence does two things. It tells the honest client exactly how to move forward. And it tells you something important about the client who suddenly gets vague — because a client who has real financing lined up has no problem committing the first phase, and a client who balks at committing the first phase was never going to pay you cleanly on the fifth.</p>
            <p>The clients you want are the ones who understand that a professional operation runs on committed funds, not favors. Structuring the job this way filters for exactly those clients before you&apos;ve spent anything you can&apos;t get back.</p>
            <p>If you&apos;re tired of financing other people&apos;s home improvements, look at how milestone-based payment structures are set up for contractors who want the money committed before the truck rolls.</p>
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
