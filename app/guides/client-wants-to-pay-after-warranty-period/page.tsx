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
          <div className="hero-badge">Payment Ops · September 2026</div>
          <h1>The Client Wants to Hold Final Payment Until the Warranty Period Ends: Why That&apos;s Not How It Works</h1>
          <p className="hero-subtitle">Some clients try to withhold your final payment for months, claiming they want to &apos;make sure nothing breaks&apos; before they release it. That&apos;s not a warranty holdback — it&apos;s an interest-free loan you never agreed to make. Here&apos;s how to separate payment from warranty so you get paid on completion.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>The fix: warranty obligations and payment obligations are two separate contract terms, and they get separated in writing before the job starts. Payment is due on completion of the work. The warranty is a standalone promise to fix defects for a defined period after that. One does not gate the other, and no client gets to invent a holdback that isn&apos;t in the contract.</p>
            <p>When a client says they want to hold your final payment &quot;until the warranty period ends,&quot; they are not describing a warranty. They are describing a retainage they never negotiated and you never agreed to. A 12-month warranty means you&apos;ll come back and fix a covered defect for 12 months. It does not mean the client keeps 20% of your money in their account for a year, earning them the interest and costing you the cash flow.</p>
            <blockquote className="article-quote">
              Payment is due when the work is complete. The warranty is a separate promise that outlives the payment — it doesn&apos;t delay it.
              <cite>— standard construction contract structure</cite>
            </blockquote>


            <h2>Why clients try this — and why it works on people who let it</h2>
            <p>The logic sounds reasonable at the kitchen table: &quot;I just want to make sure nothing breaks before I pay you the rest.&quot; It preys on your desire to seem confident in your own work. Say no and you look like you&apos;re hiding something.</p>
            <p>But run the math. If you&apos;re holding a $4,000 final payment for a 12-month warranty period, the client has an interest-free loan of $4,000 for a full year, secured against work you&apos;ve already delivered. Multiply that across every job and you&apos;re financing your clients&apos; homes out of your own operating capital. That&apos;s not standard practice. That&apos;s a concession, and concessions have to be agreed to — not assumed.</p>
            <p>The reason it works is that most contractors don&apos;t structure the payment terms up front. They quote a total, do the work, and then negotiate the last payment while emotionally and financially exhausted. That&apos;s the worst possible moment to hold the line.</p>


            <h2>The structural answer: define the milestones before you swing a hammer</h2>
            <p>The clean version of this problem never becomes a fight at the end, because the money is broken into defined milestones from the start, and the final milestone is tied to completion — not to the warranty clock.</p>
            <p>A typical structure looks like: deposit at signing, a progress draw at rough-in, a draw at a defined mid-point, and the balance due at substantial completion and sign-off. Each milestone has a clear trigger. When the trigger is met, that payment releases. The warranty then begins as its own clause with its own timeline.</p>
            <p>The strongest way to make this real is to hold each milestone in escrow. The client funds the milestone up front, so you know the money exists before you do the work. When the milestone is met and signed off, the funds release. There&apos;s no &quot;I&apos;ll pay you when I get around to it,&quot; and there&apos;s no room to reclassify the final payment as a warranty holdback — because the terms of release were agreed and funded before the job began.</p>


            <h2>What to say when they ask at the end</h2>
            <p>&quot;The warranty covers you for 12 months — if anything covered fails, I&apos;ll come fix it. That&apos;s already in the contract. The final payment is due on completion, which is a separate term, also in the contract. If you&apos;d like a defined retainage, we handle that up front on the next job, not retroactively on this one.&quot;</p>
            <p>Said calmly, this ends the conversation. You&apos;re not refusing to stand behind your work. You&apos;re declining to convert a completed project into an unsecured loan.</p>
            <p>If you&apos;re tired of having this fight at the end of every job, the fix is to move the agreement to the front — funded, milestone-based, and released on completion. You can see how contractor plans are structured for exactly this.</p>
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
