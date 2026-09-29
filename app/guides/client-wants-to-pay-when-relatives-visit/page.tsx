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
          <h1>The Client Wants to Wait to Pay Until &apos;After the Holidays&apos;: Why the Calendar Isn&apos;t Your Problem</h1>
          <p className="hero-subtitle">When a client asks to push final payment past a holiday, a vacation, or &apos;a busy month,&apos; they&apos;re borrowing your cash flow for free. The fix isn&apos;t a firmer conversation — it&apos;s a payment structure that releases funds on completion, not on their schedule.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>The fix is this: stop billing on their calendar and start releasing funds on completion. If the work is done, the money moves — holiday or not.</p>
            <p>When a client asks to push final payment until &quot;after the holidays,&quot; they are not asking for a favor. They are asking to use your money as a free short-term loan while their own cash sits collecting interest in their account. The completed work is already theirs. The only thing outstanding is your money, sitting in their bank instead of yours. Framing it as scheduling makes it sound reasonable. It isn&apos;t reasonable. It&apos;s a financing arrangement you never agreed to.</p>


            <h2>The calendar is a stall, not a reason</h2>
            <p>Notice the pattern: the reasons rotate but the outcome is always the same. &quot;After the holidays.&quot; &quot;Once we&apos;re through our busy month.&quot; &quot;When I&apos;m back from vacation.&quot; &quot;After we close the quarter.&quot; There is always a next milestone on their side that conveniently justifies delaying yours.</p>
            <p>Here&apos;s the tell — none of these reasons have anything to do with whether your work is finished. A client who genuinely can&apos;t pay will tell you they can&apos;t pay. A client who won&apos;t pay yet reaches for the calendar, because a date sounds softer than a refusal. But a 30-day delay on a completed job is a 30-day interest-free loan you funded, and you&apos;re the one absorbing the risk that the date moves again.</p>
            <blockquote className="article-quote">
              The moment payment depends on someone else&apos;s schedule instead of the work being done, you&apos;ve handed them control of your cash flow.
              <cite>— the operational reality behind every &apos;after the holidays&apos; request</cite>
            </blockquote>


            <h2>Why a firmer conversation won&apos;t fix it</h2>
            <p>The instinct is to have a stronger talk — send a polite-but-direct email, restate your terms, maybe add a late fee clause. That helps at the margins, but it doesn&apos;t fix the underlying structure. You&apos;re still asking a client to voluntarily part with money they&apos;ve already decided to hold. Every follow-up email is you spending unpaid time chasing money you already earned.</p>
            <p>The problem isn&apos;t your tone. It&apos;s that the money is in the wrong place. As long as the client is the one physically holding the funds, the timing of payment is their decision, and no amount of firmness changes who&apos;s holding the checkbook.</p>


            <h2>Move the money before the calendar becomes an issue</h2>
            <p>The structural fix is milestone-based escrow. The client funds the project — or each phase of it — into a holding account before the work begins. The money is committed and out of their operating account. When a milestone is completed and approved, the funds release to you automatically. Completion triggers payment, not a date the client picks later.</p>
            <p>Under this structure, &quot;after the holidays&quot; stops being a lever. The money for the final phase is already set aside. There&apos;s nothing to negotiate, because the client isn&apos;t deciding whether to pay — they decided that when they funded the milestone. Approval of the work is the only remaining step, and that&apos;s a far easier conversation than prying loose cash they&apos;d rather keep.</p>
            <p>The added benefit runs in both directions. Clients are often more comfortable committing funds to escrow than paying you outright, because they know the money only moves when the work meets the agreed standard. You get certainty on timing; they get certainty on delivery. The calendar goes back to being a calendar instead of a payment strategy.</p>


            <h2>The bottom line</h2>
            <p>You can keep having the same conversation every holiday season, every busy month, every vacation — or you can change where the money sits so the conversation stops happening. A completed job should not wait on someone else&apos;s return from the beach.</p>
            <p>If you want to see how milestone and escrow-based payment structures work for the kind of jobs you run, take a look at the contractor plans and pick the structure that fits your workflow.</p>
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
