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
          <div className="hero-badge">Contract Clauses · August 2026</div>
          <h1>The Acceptance Clause That Defines &apos;Done&apos; Before the Dispute Starts</h1>
          <p className="hero-subtitle">Most disputes over final payment come down to one word nobody defined: &apos;done.&apos; This acceptance clause spells out exactly what triggers completion, who signs off, and when the clock starts—so a client can&apos;t move the goalposts after the last coat dries.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Copy this into your next contract, word for word:</p>
            <p>&quot;ACCEPTANCE &amp; FINAL PAYMENT: The Work shall be deemed complete and accepted when all items on the attached Scope Checklist are finished and the Client (or their designated representative) signs the Final Walkthrough Form. If Client does not conduct the walkthrough within three (3) business days of Contractor&apos;s written notice that the Work is ready, the Work is deemed accepted and final payment becomes due. Any items Client identifies during the walkthrough shall be listed on a Punch List; completion of Punch List items does not delay acceptance of all other Work. Client&apos;s use or occupancy of the completed area constitutes acceptance of that area.&quot;</p>
            <p>That one paragraph closes the three loopholes that eat contractors alive at the end of a job.</p>


            <h2>Why &apos;Done&apos; Has To Be Defined In Writing</h2>
            <p>Final-payment disputes almost never start over the work itself. They start because the contractor thinks the job is finished and the client thinks it isn&apos;t—and nobody wrote down who decides.</p>
            <p>Without an acceptance clause, &quot;done&quot; is whatever the client says it is on the day you ask for the check. New requests appear. A door that was fine last week is suddenly &quot;not what we discussed.&quot; You have no trigger, no deadline, and no proof that completion ever happened.</p>
            <p>The clause above fixes that by naming a specific event—a signed walkthrough form—as the moment acceptance occurs. Not a feeling. Not a vibe. A signature or a deadline.</p>


            <h2>Attach The Scope Checklist You Can Point To</h2>
            <p>The clause references an &quot;attached Scope Checklist.&quot; Build it now, before the job, as a numbered list of every deliverable. For a repaint that might read:</p>
            <p>&quot;1. Two coats on all walls, Sherwin-Williams SW7005, north and east bedrooms. 2. Trim and baseboards painted, semi-gloss white. 3. One touch-up coat on hallway ceiling. 4. All outlet covers reinstalled. 5. Debris removed, floors covered during work.&quot;</p>
            <p>When the client says &quot;you never finished the ceiling,&quot; you point at line 3, initialed by them on the day you signed the contract. The checklist turns a memory argument into a document argument—and you win document arguments.</p>
            <blockquote className="article-quote">
              If it&apos;s on the numbered list and it&apos;s checked, that&apos;s the whole conversation. There&apos;s nothing to debate.
              <cite>— residential painting contractor</cite>
            </blockquote>


            <h2>Start The Clock With A Written Notice</h2>
            <p>The deadline only works if you can prove you started it. On your next job, when the work is ready, send one line by text or email:</p>
            <p>&quot;Hi [Name], the work is complete and ready for your final walkthrough. Per our contract, please let me know your preferred time in the next three business days.&quot;</p>
            <p>That timestamped message is what triggers the three-day window in the clause. If the client goes silent, the contract deems the work accepted and your final payment becomes due. You are no longer waiting on someone who has no reason to hurry.</p>


            <h2>Separate The Punch List From Acceptance</h2>
            <p>The most valuable line in the clause is this: &quot;completion of Punch List items does not delay acceptance of all other Work.&quot;</p>
            <p>This stops the client from holding your entire final payment hostage over one scuffed corner. Minor fixes go on a short punch list; the other 95% of the job is accepted and paid. You come back, knock out the list, and collect any small retainage.</p>
            <p>Add the occupancy line too—&quot;use or occupancy constitutes acceptance.&quot; If they&apos;ve moved furniture back into the finished room, they&apos;ve accepted the room. Full stop.</p>


            <h2>Put It On The Next Estimate You Send</h2>
            <p>You don&apos;t need a lawyer to start using this. Paste the acceptance clause into your contract template today, build a numbered scope checklist for your next bid, and save the walkthrough-notice text as a reusable message on your phone.</p>
            <p>The first time a client tries to move the goalposts after the last coat dries, you&apos;ll have a signed definition of &quot;done&quot; waiting for them—and a clock that already ran out on the excuses.</p>
            <p>If you want contract templates, scope checklists, and walkthrough forms built for the trades and ready to send, that&apos;s exactly what we put together for contractors.</p>
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
