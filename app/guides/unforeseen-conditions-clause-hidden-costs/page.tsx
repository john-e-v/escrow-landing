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
          <h1>The Unforeseen Conditions Clause: Who Pays When You Open the Wall and It&apos;s Worse</h1>
          <p className="hero-subtitle">When demo reveals rot, code violations, or hidden damage nobody quoted, the unforeseen conditions clause decides who pays. Here&apos;s the exact clause text to add before your next job so a surprise inside the wall doesn&apos;t come out of your margin.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Copy this into your contract before your next job:</p>
            <p>&quot;UNFORESEEN CONDITIONS: The Contract Price and Schedule are based on visible, accessible conditions at the time of estimate. If concealed conditions are discovered during the Work — including but not limited to rot, water damage, mold, insect damage, code violations, non-permitted prior work, faulty wiring or plumbing, or structural deficiencies — that were not reasonably knowable before demolition or access, Contractor will stop work in the affected area and notify Owner within 24 hours. Contractor will provide a written Change Order describing the condition, the required corrective work, and the added cost and time. Work on the affected condition will not proceed until Owner approves the Change Order in writing. Owner is responsible for the cost of correcting unforeseen conditions.&quot;</p>
            <p>That paragraph is the difference between eating a $4,000 rot repair and getting paid for it. Add it today. Below is how to make it hold up.</p>


            <h2>Photograph the condition the minute you find it — before you touch it</h2>
            <p>The clause only works if you can prove the condition was concealed. On your next demo, keep your phone in your pocket. The second you open a wall or pull a fixture and see something you didn&apos;t quote — stop.</p>
            <p>Take three photos: a wide shot showing the room and the opening, a medium shot showing the condition in context, and a close-up showing the actual damage. Then take one more with a tape measure or a pen in frame for scale. Text those photos to the homeowner immediately with one line: &quot;Opened the wall for the vanity and found active water damage on the studs — sending a change order this afternoon.&quot;</p>
            <p>That timestamp and that text message are your evidence. You just documented that the condition existed before you did any work on it and that you notified the owner the same day, exactly as your clause requires.</p>
            <blockquote className="article-quote">
              The contractor who photographs the concealed condition on discovery almost never loses the change order dispute. The one who fixes it first and asks later almost always does.
              <cite>— construction attorney, on unforeseen-condition claims</cite>
            </blockquote>


            <h2>Write the change order the same day — don&apos;t verbal it</h2>
            <p>Do not fix the rot and mention the extra cost when you hand over the final invoice. That&apos;s how you end up in small claims. Your clause says work stops until the owner approves in writing, so honor your own clause.</p>
            <p>Use this three-line change order format on your next surprise:</p>
            <p>&quot;CHANGE ORDER #___ — [date]. Condition found: [what you saw, e.g. &apos;water-damaged bottom plate and two studs behind shower valve&apos;]. Corrective work: [what it takes, e.g. &apos;remove and replace 6 ft of bottom plate and two studs, treat area&apos;]. Added cost: $______. Added time: ___ days. Owner signature: ___________&quot;</p>
            <p>Get a photo of the signature or a texted &quot;approved.&quot; A one-word text approving a specific dollar figure is enforceable. A handshake in a dusty bathroom is not.</p>


            <h2>Set an allowance for the conditions you already suspect</h2>
            <p>Some surprises aren&apos;t really surprises. If you&apos;re renovating a 1960s bathroom, you know there&apos;s a real chance of galvanized pipe or a rotted subfloor. On your next old-house job, add an allowance line to the estimate itself:</p>
            <p>&quot;SUBFLOOR ALLOWANCE: $800. If subfloor replacement exceeds this amount once demo exposes the condition, additional work will be handled by Change Order per the Unforeseen Conditions clause.&quot;</p>
            <p>This does two things. It warns the homeowner before signing that hidden problems are possible, so the change order isn&apos;t a shock later. And it starts the money conversation while they&apos;re excited about the project, not angry about a delay.</p>


            <h2>The pattern that keeps your margin intact</h2>
            <p>Every recommendation here is one habit: never do concealed-condition work without a photo, a written notice, and a signed number first. Clause in the contract, camera before the crowbar, change order the same day, allowance for the obvious risks. Do those four and the surprise inside the wall stops coming out of your pocket.</p>
            <p>If you want the full unforeseen-conditions clause plus the change-order and allowance templates already built into a contract you can send from your phone, that&apos;s what the contractor plans are for.</p>
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
