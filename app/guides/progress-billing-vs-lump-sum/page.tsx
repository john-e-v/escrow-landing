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
          <div className="hero-badge">Payment Ops · July 2026</div>
          <h1>Progress Billing vs. Lump Sum: Which Payment Structure Gets You Paid Faster?</h1>
          <p className="hero-subtitle">Lump-sum billing loads your risk onto the back end of the job, where you have the least leverage. Progress billing tied to verifiable milestones keeps cash flowing and shrinks your exposure at every stage.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Switch to progress billing tied to verifiable milestones. That&apos;s the fix. If you&apos;re waiting until the end of a job to collect the bulk of what you&apos;re owed, you&apos;ve built your entire cash position around the moment you have the least leverage — the moment the work is done and the client&apos;s motivation to pay has evaporated.</p>
            <p>Lump-sum billing feels clean on paper. One price, one invoice, one payment. But the structure is backloaded by design, and every dollar you haven&apos;t collected is a dollar you&apos;ve effectively loaned the client at zero interest, secured by nothing but goodwill and a signature.</p>


            <h2>Where lump sum actually hurts you</h2>
            <p>The problem isn&apos;t the total number. It&apos;s *when* the money moves relative to *when* you spend it.</p>
            <p>On a lump-sum job you carry the material costs, the labor, the equipment, and the overhead out of pocket for the entire duration. You&apos;re the bank. And the day you finish is the day your exposure peaks — you&apos;ve spent everything and collected little to nothing. That&apos;s the exact moment a client decides the tile grout looks off, or that they want to &quot;hold a little back until we&apos;re sure.&quot;</p>
            <p>Now you&apos;re negotiating from behind. The work is complete, so your only remaining leverage is threatening a lien or a lawsuit that costs you more than the holdback. Clients who slow-pay know this. Some count on it.</p>
            <blockquote className="article-quote">
              The last 20% of a lump-sum contract is where 100% of the collection fights happen — because that&apos;s the only money the client still controls.
              <cite>— General contractor, commercial buildouts</cite>
            </blockquote>


            <h2>What progress billing changes structurally</h2>
            <p>Progress billing breaks the job into defined stages, each with its own payment due when that stage is verifiably complete. Demo done, draw released. Rough-in inspected, draw released. Drywall hung, draw released.</p>
            <p>This does two things. First, it keeps your cash position roughly flat instead of deeply negative — you&apos;re getting reimbursed as you spend, not months later. Second, and more important, it keeps leverage on your side at every phase. If a client won&apos;t fund the next milestone, you stop before you&apos;ve sunk another dollar into their project. You never end up with $40,000 of your money buried in a job and nothing to show for it but an unpaid final invoice.</p>
            <p>The key word is *verifiable*. Milestones only protect you if both sides agree, in advance and in writing, what &quot;complete&quot; means for each stage. Vague milestones — &quot;framing mostly done&quot; — just move the argument, they don&apos;t end it.</p>


            <h2>Make the milestones enforceable, not just written</h2>
            <p>A progress schedule in a contract is a start, but a schedule alone still relies on the client choosing to cut a check when you hit each mark. That&apos;s the same trust gap that sinks lump-sum jobs, just spread across more invoices.</p>
            <p>The stronger version is milestone-based escrow: the client funds each stage before the work begins, and the money releases automatically when the agreed deliverable is verified. The funds already exist — they&apos;re committed and sitting in a neutral holding account — so there&apos;s no &quot;the check is coming&quot; phase and no reason to chase. You do the work, the milestone clears, the money moves. Your exposure at any point is capped at a single stage instead of the whole contract.</p>
            <p>That structure turns your payment terms from a promise into a mechanism. And a mechanism doesn&apos;t forget, doesn&apos;t stall, and doesn&apos;t wait until the job&apos;s done to develop second thoughts.</p>
            <p>If you&apos;re rebuilding how your jobs get funded, it&apos;s worth seeing how milestone escrow maps onto the kind of work you actually run.</p>
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
