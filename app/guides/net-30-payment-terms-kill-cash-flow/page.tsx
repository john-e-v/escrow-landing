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
          <h1>Net-30 Is Quietly Killing Your Cash Flow: How to Get Paid on Completion Instead</h1>
          <p className="hero-subtitle">Net-30 terms turn every finished job into an unsecured loan you made to the client. Here&apos;s how to restructure payment timing so funds are committed before you demobilize, not thirty days after.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Stop invoicing Net-30 on completion. Move the payment trigger to the milestone, and require the funds to be committed before you demobilize — not billed thirty days after you&apos;ve left the site.</p>
            <p>Here&apos;s the problem in plain numbers. You finish a $40,000 job. You invoice on the last day. Under Net-30, the client legally owes you nothing for thirty days, and in practice pays on day 38 after a follow-up call. During that window you&apos;ve already covered materials, subs, and payroll out of your own pocket. You didn&apos;t get paid on completion — you made the client a five-week, interest-free, unsecured loan. And you did it without a credit check, without collateral, and without asking.</p>
            <p>That&apos;s the reframe that matters: Net-30 isn&apos;t a payment term. It&apos;s a financing product you&apos;re extending, and you&apos;re the lender carrying all the risk.</p>


            <h2>Why &quot;invoice on completion&quot; is the weakest possible position</h2>
            <p>The moment you finish the work is the moment your leverage evaporates. Before completion, the client needs you — they have an unfinished building, an exposed system, a deadline. After completion, they have what they wanted and you have a piece of paper.</p>
            <p>Every day past completion, collection gets harder, not easier. The job goes cold. The project manager who approved the scope moves on. Accounts payable finds a punch-list item to dispute. Your invoice sits in a queue behind vendors who structured their terms better than you did.</p>
            <p>Net-30 codifies this weakness. It hands the client the finished product first, then asks them to pay a month later out of goodwill and process. Goodwill and process are not cash-flow strategies.</p>
            <blockquote className="article-quote">
              If the money isn&apos;t secured before you pack up the truck, you&apos;re not collecting a payment — you&apos;re opening a case.
              <cite>— Commercial GC, on switching to milestone terms</cite>
            </blockquote>


            <h2>The structural fix: fund the milestone before the work, release it on completion</h2>
            <p>The answer isn&apos;t chasing invoices faster. It&apos;s changing when the money becomes real. Break the contract into defined milestones — mobilization, rough-in, substantial completion, final. Before each phase begins, the client commits the funds for that phase into escrow.</p>
            <p>The money is verified and locked before you start the phase. You do the work knowing the cash already exists and is earmarked for you. When the milestone is signed off, the funds release — on completion, not thirty days after it. No aging invoice, no float, no unsecured loan.</p>
            <p>This flips the risk. Instead of you financing the client, the client demonstrates they can pay before you commit labor and materials. If they can&apos;t fund the milestone, you find that out on day zero — not after you&apos;ve spent $12,000 on rough-in for a client who&apos;s quietly insolvent.</p>


            <h2>What this changes in practice</h2>
            <p>You stop being a bank. Your working capital stays yours instead of being tied up in receivables for weeks at a time. You underwrite fewer clients by accident, because a client who won&apos;t fund an escrow milestone is telling you something Net-30 would have hidden until it was too late.</p>
            <p>Disputes shrink too. When the funds are already committed and release conditions are agreed in writing up front, a late punch-list item becomes a scoped conversation about that item — not a reason to hold your entire payment hostage.</p>
            <p>The contractors who make this switch usually report the same thing: fewer collections calls, faster access to earned revenue, and a cleaner read on which clients are actually worth taking. The terms did the filtering for them.</p>
            <p>If you&apos;re ready to restructure how and when your payments land — with milestone funding built in from the start — it&apos;s worth looking at how the contractor plans are set up to handle exactly this.</p>
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
