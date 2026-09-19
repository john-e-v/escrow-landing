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
          <h1>The Punch-List Clause That Caps What Counts as &apos;Not Done&apos;</h1>
          <p className="hero-subtitle">A vague punch list lets a client hold your final payment hostage over paint touch-ups. This clause defines what qualifies as punch-list work, sets a completion window, and separates minor items from your right to get paid.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Copy this into your contract before your next job starts:</p>
            <p>&quot;PUNCH-LIST &amp; FINAL COMPLETION. Substantial Completion occurs when the Work is usable for its intended purpose. Remaining items shall be documented on a single written punch list delivered by Client within five (5) business days of Substantial Completion. Punch-list items are limited to minor corrections, adjustments, and cosmetic touch-ups that do not prevent use of the Work (e.g., paint touch-ups, caulk lines, hardware adjustments, trim gaps). Contractor shall complete all valid punch-list items within ten (10) business days. Client shall release final payment upon Substantial Completion, less 150% of the reasonable cost to complete outstanding punch-list items, which shall be released upon their completion. Items not listed on the timely-delivered punch list are deemed accepted and waived. Change-order or out-of-scope requests are not punch-list items.&quot;</p>
            <blockquote className="article-quote">
              Punch-list items are limited to minor corrections, adjustments, and cosmetic touch-ups that do not prevent use of the Work.
              <cite>— Punch-List &amp; Final Completion clause</cite>
            </blockquote>


            <h2>Why &apos;Substantial Completion&apos; Is the Line That Gets You Paid</h2>
            <p>The trap is simple: the client walks the job, finds a scuffed baseboard, and decides the whole project is &quot;not done&quot; — so they sit on your final payment for weeks.</p>
            <p>The clause above kills that argument by separating two things clients love to blur. Substantial Completion means the work is usable for its intended purpose. That&apos;s the trigger for final payment. Punch-list items are the leftover cosmetic stuff — and they get their own short deadline and their own small holdback.</p>
            <p>On your next job, say the words out loud at your final walkthrough: &quot;This kitchen is usable, so we&apos;re at substantial completion. Anything else goes on the punch list.&quot; You&apos;ve just reframed the entire conversation from &apos;pay me when it&apos;s perfect&apos; to &apos;pay me now, minus a defined amount.&apos;</p>


            <h2>The 150% Holdback Is Your Anti-Hostage Tool</h2>
            <p>Never let a client hold 100% of your final payment over a $200 touch-up. The clause caps the holdback at 150% of the reasonable cost to complete the open items — not the whole invoice.</p>
            <p>Apply it literally: if the punch list is three items totaling maybe $400 of work, the client can hold $600. Everything else releases. Write the dollar figure next to each item on the punch list itself so there&apos;s no debate later. That number becomes the ceiling on the dispute.</p>
            <p>The extra 50% gives the client a fair cushion and gives you legal cover — it looks reasonable in front of a judge or mediator, which is exactly where you want to look reasonable.</p>


            <h2>The Five-Day Window Ends the Rolling Punch List</h2>
            <p>The worst clients add &quot;one more thing&quot; every time you show up. The five-business-day delivery window shuts that down: they get one list, once. Items not on the timely list are deemed accepted and waived.</p>
            <p>Do this on your very next job — send a short email the day you hit substantial completion: &quot;Per our contract, please send your written punch list within five business days. Items received after that are considered accepted.&quot; You now have a timestamped record and a hard deadline.</p>
            <p>And the last sentence matters just as much: change-order or out-of-scope requests are not punch-list items. When the client tries to sneak new work onto the list, you point at that line and hand them a change order instead of eating the cost.</p>


            <h2>Make It Real Before You Break Ground</h2>
            <p>This clause only protects you if it&apos;s in the signed contract before work starts — not scribbled on the final invoice. Read it into your agreement now, fill in the day counts that match how you actually work, and set the touch-up-versus-scope line where your trade needs it.</p>
            <p>If your current contract doesn&apos;t have language this specific, that&apos;s the gap clients exploit. See the contractor plans built to close it.</p>
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
