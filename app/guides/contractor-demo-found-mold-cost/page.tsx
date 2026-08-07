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
          <div className="hero-badge">Hidden Cost · August 2026</div>
          <h1>The Wall Came Down and So Did Your Budget: The Mold Nobody Quoted</h1>
          <p className="hero-subtitle">A bathroom remodel opened one wall and revealed hidden mold and rotted framing, turning a $19K job into a $31K job overnight. Here&apos;s why nobody caught it, and the payment structure that keeps a discovery like this from wrecking your finances.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>The final invoice came to $31,400. The signed contract said $19,000.</p>
            <p>The difference wasn&apos;t a scam, and it wasn&apos;t padding. It was what lived behind the shower wall of a 1974 bathroom that nobody could see when the quote was written. When the demo crew pulled the tile backer on day two, they found black mold creeping up two studs and a bottom plate that had gone soft enough to press a thumb into. A slow supply-line drip, probably eight to ten years old, had been feeding it the whole time.</p>
            <p>The homeowner had done everything right. Three bids. Checked reviews. Picked the middle number. And they still got hit with a $12,000 surprise because the failure was structural — literally inside the wall — and no honest contractor quotes what they can&apos;t see.</p>


            <h2>Why nobody caught it</h2>
            <p>Here&apos;s the part that stings: it wasn&apos;t catchable. A pre-demo inspection can flag moisture with a meter if someone thinks to check that spot, but a standard remodel bid is priced off what&apos;s visible and what&apos;s assumed. The assumption is &quot;framing is fine unless proven otherwise.&quot; Proving otherwise requires opening the wall — which is the job itself.</p>
            <p>So the timeline went like this. Day one, demo starts. Day two, mold found, work stops. Day three, a remediation specialist walks it and quotes $4,800 for containment and removal. Days four through six, nothing happens while the homeowner scrambles to approve the change order and figure out where the money comes from. The original crew sits idle or moves to another job, and now you&apos;re at the back of their queue. Add $3,200 for new framing and subfloor, $2,100 for the schedule disruption and re-mobilization, another $1,900 in materials that got water-damaged in the delay.</p>
            <p>The $12,000 wasn&apos;t the mold. It was the mold plus the chaos of paying for the mold.</p>
            <blockquote className="article-quote">
              The change order isn&apos;t the expensive part. The two weeks of frozen job while everyone argues about who pays is what actually breaks the budget.
              <cite>— General contractor, 20 years residential remodeling</cite>
            </blockquote>


            <h2>What actually would have prevented the damage</h2>
            <p>Not the mold — that was already there. What could have been prevented was the financial free-fall. And the fix is boring: milestone-based escrow.</p>
            <p>When a job is funded through escrow released at milestones — demo, rough-in, finish — the money for the project already exists in a neutral account before work begins. So when the wall opens and a $12,000 problem appears, the conversation is about scope and price, not about whether the homeowner can wire funds by Friday. The contractor knows the funded amount is real. The homeowner knows a change order releases only when the specific work is documented and agreed. Nobody is fronting cash on trust.</p>
            <p>In the real version of this story, the homeowner had paid a 50% deposit up front in cash. When the mold hit, that deposit was already spent on materials and labor, so the extra $12,000 had to come from a HELOC drawn under pressure at a bad rate. With escrow, the contingency conversation happens against a funded pool: you approve the remediation milestone, funds release for that milestone, and the timeline barely hiccups.</p>


            <h2>The takeaway</h2>
            <p>Hidden mold behind a wall is not a rare event. It&apos;s a Tuesday. Roughly one in five older-home bathroom remodels turns up water damage the bid never mentioned, because the bid physically couldn&apos;t.</p>
            <p>You can&apos;t inspect your way out of every surprise. But you can structure the payment so a surprise costs you a decision instead of a financial emergency. The homeowners who survive a $12,000 discovery without wrecking their finances aren&apos;t luckier — they set up the money differently before the first swing of the hammer.</p>
            <p>If you&apos;re about to open a wall you can&apos;t see behind, that&apos;s the move: fund the job so the discovery is a change order, not a crisis.</p>
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
