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
          <h1>How to Check a Contractor&apos;s References (The 6 Questions That Actually Matter)</h1>
          <p className="hero-subtitle">Most homeowners call references and ask &apos;were you happy?&apos;—which tells you nothing. This checklist gives you the exact six questions that surface hidden problems, plus what to do when a contractor &apos;can&apos;t find&apos; any recent references.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Question 1: &quot;What was the final price compared to the original quote?&quot;</p>
            <p>This is the first thing you ask—before &quot;were you happy,&quot; before anything. If the reference laughs, pauses, or says &quot;well, there were some extras,&quot; you&apos;ve already learned more than most homeowners ever do. A well-run job lands within 10% of the estimate barring changes the homeowner requested. Ask specifically: &quot;Did the final invoice surprise you?&quot; The word &quot;surprise&quot; pulls out the truth.</p>


            <h2>The Six Questions, In Order</h2>
            <p>Ask these exactly as written. The order matters—each one builds on the last.</p>
            <p>2. &quot;Did the crew show up when they said they would?&quot; — Reliability predicts everything else. A contractor who ghosts on scheduling ghosts on warranty callbacks too. Listen for &quot;mostly&quot; and &quot;eventually.&quot;</p>
            <p>3. &quot;Who was actually on site—the person you hired, or a sub you never met?&quot; — This surfaces the bait-and-switch where the polished salesman hands your job to an unvetted crew.</p>
            <p>4. &quot;When something went wrong, how did they handle it?&quot; — Note that I said *when*, not *if*. Every real project has a problem. You&apos;re testing how they respond to it, not whether it happened.</p>
            <p>5. &quot;Did they clean up and finish the punch list, or did you have to chase them?&quot; — The last 5% of a job is where bad contractors vanish. This question finds them.</p>
            <p>6. &quot;Would you hire them again for something bigger—and did you?&quot; — &quot;I&apos;d use them again&quot; is cheap talk. &quot;I did use them again&quot; is proof. If the reference has only used them once, ask why they didn&apos;t come back.</p>
            <blockquote className="article-quote">
              The reference who hesitates before answering &quot;would you hire them again&quot; is telling you no in the politest way they know how.
              <cite>— Common pattern among homeowners reviewing past contractors</cite>
            </blockquote>


            <h2>What To Actually Verify (Not Just Ask)</h2>
            <p>References can be coached. Documents can&apos;t. Today, before your next call:</p>
            <p>- Ask for three references from the last 6 months, plus one from two years ago. The recent ones prove they&apos;re still competent; the old one proves their work lasted.
- Request the license number and check it on your state&apos;s contractor licensing board site (search &quot;[your state] contractor license lookup&quot;). Confirm it&apos;s active and matches the business name on the quote.
- Ask for a certificate of insurance sent directly from their insurer—not a photo of a document. Verify the policy is current.
- Search the business name plus &quot;complaint&quot; and check your county court records for judgments or liens.</p>


            <h2>When A Contractor &quot;Can&apos;t Find&quot; Recent References</h2>
            <p>Treat this as a hard stop. A working contractor finished a job last month and the month before. If they can only offer references from years ago, or say their recent clients &quot;value their privacy,&quot; or steer you toward a single glowing review, something is being hidden—usually a string of recent jobs that went badly.</p>
            <p>The legitimate version of this excuse doesn&apos;t exist. Every honest contractor has a phone full of people who&apos;d vouch for them, and they&apos;re proud to hand the list over.</p>


            <h2>The One Red Flag In Almost Every Bad Hire</h2>
            <p>Pressure on the deposit. It shows up in nearly every horror story: the contractor who needs a large payment up front—40%, 50%, sometimes the full amount—&quot;to buy materials&quot; or &quot;to lock in the schedule.&quot; Money-first contractors are the ones who disappear, because your deposit is the whole business model. A reputable pro invoices against completed work, not promises.</p>
            <p>The cleanest protection against this is simple: only pay into escrow, so funds release as milestones are actually finished—not before.</p>
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
