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
          <div className="hero-badge">Contractor Ops · July 2026</div>
          <h1>What to Do the Moment a Client Goes Quiet Before Final Payment</h1>
          <p className="hero-subtitle">A client who stops responding before the last payment is following a predictable pattern, and your response window is smaller than you think. Here&apos;s the exact sequence to run before the silence hardens into a dispute — and the structure that removes the leverage they&apos;re counting on.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Send the final invoice today, in writing, with a hard due date and a specific line describing the completed work — before you send another &quot;just checking in&quot; text.</p>
            <p>A client who goes quiet before the last payment is not confused, busy, or on vacation. They&apos;re stalling, and the silence is the tactic. Your job in the first 72 hours is to convert an emotional standoff into a documented, dated paper trail — because everything you do after this point is either building your case or dissolving it.</p>


            <h2>Why the silence starts</h2>
            <p>The pattern is almost always the same. The work is done or nearly done, the client has what they wanted, and the final payment is the one moment in the whole job where you have the least leverage and they have the most. Nothing forces the money to move. They&apos;ve already got the deck, the kitchen, the site, the deliverable.</p>
            <p>So they wait. Not because they won&apos;t pay — most eventually do — but because delaying costs them nothing and costs you real money. Every day of silence is a day your cash is sitting in their account instead of yours. The quiet is a negotiation you didn&apos;t agree to enter.</p>
            <blockquote className="article-quote">
              By the time a client stops answering, the decision to delay has already been made. You&apos;re not persuading them anymore — you&apos;re building the record.
              <cite>— Common pattern in trade and service disputes</cite>
            </blockquote>


            <h2>The sequence to run</h2>
            <p>Day 0: Send the final invoice in writing (email, not text). Reference the specific completed work, the agreed amount, and a firm due date — 7 or 14 days, whatever your contract says. No emotion, no apology, no &quot;hope everything&apos;s okay.&quot;</p>
            <p>Day 1–3: If your contract has a punch list or sign-off step, send it now with a request for written confirmation. This does two things: it either surfaces the real objection they&apos;ve been sitting on, or it documents that you asked and they didn&apos;t raise one.</p>
            <p>Day 7: Send a single, professional payment reminder that restates the due date and references the original signed agreement. Attach it. One reminder — not five.</p>
            <p>Day 14: If still silent, send a formal notice referencing your contract&apos;s late terms or dispute process. This is where most stalls break, because it signals the free waiting period is over.</p>
            <p>Run this whether they respond or not. The record you build is worth more than any one reply.</p>


            <h2>The structural fix</h2>
            <p>Here&apos;s the uncomfortable truth: the entire problem exists because you finished the work before the money moved. The client&apos;s leverage comes from holding the final payment against a job that&apos;s already complete. As long as your payment terms let that gap exist, you&apos;ll keep having this exact standoff.</p>
            <p>Milestone and escrow structures close the gap by design. Instead of chasing a lump sum at the end, the client funds the payment up front into a holding account, and it releases against defined milestones — final payment released on delivery, not requested after it. When the funds are already committed before the last stage of work, there&apos;s nothing to go quiet about. The money isn&apos;t sitting in their account being decided over; it&apos;s staged and waiting on completion, not on their mood.</p>
            <p>That&apos;s the difference between chasing a payment and collecting one. The stall only works when the client controls the timing of the final release. Take that control off the table and the silence loses its purpose.</p>


            <h2>The takeaway</h2>
            <p>For the job you&apos;re chasing right now, run the sequence and build the record — that&apos;s your recovery move. But the real fix is upstream: stop structuring jobs so the last payment depends on a client who&apos;s already been paid in service.</p>
            <p>If you want to see how milestone-based payment structures are set up for contractor work — so the final release is defined before you ever pick up a tool — the contractor plans lay it out.</p>
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
