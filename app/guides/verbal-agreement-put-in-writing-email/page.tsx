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
          <div className="hero-badge">Documentation · July 2026</div>
          <h1>The Confirmation Email That Turns a Verbal &apos;Yes&apos; Into a Binding Record</h1>
          <p className="hero-subtitle">Every job has a moment where the client agrees to something out loud and never signs anything. This is the exact email template that locks in that verbal approval before it becomes a &apos;that&apos;s not what I said&apos; dispute six weeks later.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Copy this. Send it within an hour of every verbal approval:</p>
            <p>&quot;Hi [Name] — great talking through the changes today. Confirming what we agreed so we&apos;re both on the same page:</p>
            <p>1. You approved [specific change] at an additional cost of $[amount].
2. This adds approximately [X] days to the timeline, pushing completion to [date].
3. Work on this item starts [date] once you reply &apos;yes&apos; to this email.</p>
            <p>If anything here looks off, let me know by [date/time]. Otherwise I&apos;ll treat this as your go-ahead and get started. Thanks!&quot;</p>
            <p>That email is the entire post. If you stop reading now and just send that after your next site conversation, you&apos;ve already dispute-proofed the job. The rest of this explains why each line matters and how to make it airtight.</p>
            <blockquote className="article-quote">
              Confirming what we agreed so we&apos;re both on the same page: You approved [specific change] at an additional cost of $[amount]. If anything here looks off, let me know by [date/time]. Otherwise I&apos;ll treat this as your go-ahead and get started.
              <cite>— The confirmation email — send within one hour of verbal approval</cite>
            </blockquote>


            <h2>Why the one-hour window matters</h2>
            <p>Memory decays fast, and it decays in the client&apos;s favor. Six weeks from now, &quot;I told you to use the mid-grade tile&quot; becomes &quot;I never approved that upgrade.&quot; A verbal yes has no timestamp, no witness, and no paper. Your confirmation email creates all three.</p>
            <p>Send it the same day — ideally within the hour, while you&apos;re still in your truck. The speed itself is evidence. A message sent at 2:47 PM the day of the conversation is far harder to dispute than one you scramble to reconstruct after a fight starts.</p>


            <h2>The &apos;silence = yes&apos; clause is doing the heavy lifting</h2>
            <p>Look at this line again: &quot;Otherwise I&apos;ll treat this as your go-ahead and get started.&quot;</p>
            <p>Most contractors wait for the client to reply before they feel safe. That&apos;s backwards. You&apos;ve now put the burden on them to object. If they say nothing and you proceed, their silence — combined with letting you work — is exactly what a small claims judge or mediator will read as consent.</p>
            <p>Give them a real deadline: &quot;let me know by Thursday 5 PM.&quot; Vague deadlines get ignored. Specific ones get answered.</p>


            <h2>Three numbers that end most disputes before they start</h2>
            <p>Every confirmation email needs the same three facts, because these are the three things clients most often claim they never agreed to:</p>
            <p>The scope — exactly what changed, in plain terms a non-builder understands. Not &quot;the electrical revision,&quot; but &quot;moving the two kitchen outlets to the island.&quot;</p>
            <p>The cost — a dollar figure, not &quot;some additional charges.&quot; Even a range (&quot;$400–$600 depending on final materials&quot;) beats leaving it blank.</p>
            <p>The timeline impact — because &quot;you made me late&quot; is the second-most-common complaint after price. State the new completion date every single time.</p>


            <h2>Make it your default, not your exception</h2>
            <p>The contractors who never get burned aren&apos;t the ones with the best contracts. They&apos;re the ones who send this email after every conversation — the small approvals, the &quot;yeah that&apos;s fine&quot; moments, the driveway chats. The disputes that sink jobs almost always trace back to something nobody wrote down because it felt too minor at the time.</p>
            <p>Build it into your routine: conversation ends, email goes out before you leave the site. Keep the template in your phone&apos;s notes app so you&apos;re only filling in blanks, not writing from scratch.</p>
            <p>If you want that template — plus the change-order and sign-off scripts that plug into it — ready to drop into every job, that&apos;s what we put together for contractors who&apos;d rather prevent a fight than win one.</p>
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
