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
          <h1>How to Collect Final Payment Before You Demobilize the Job</h1>
          <p className="hero-subtitle">The final payment is the one that gets stuck, because your leverage disappears the moment the work is done. The fix is to stop treating final payment as a step that happens after completion, and start structuring it so the money is already committed before you finish.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Collect the final payment before the truck leaves the site, not after. The moment you demobilize, your leverage is gone — the client has the finished work, you have an invoice, and every day after that is a negotiation you&apos;re losing.</p>
            <p>The reason final payment gets stuck isn&apos;t that clients are dishonest. It&apos;s structural. Throughout the job you hold something they want: the next phase, the next crew, the certificate of completion. On the last day, that flips. Now they hold something you want — the money — and you have nothing left to trade for it. You&apos;ve spent your leverage down to zero right when you need it most.</p>
            <p>So the fix isn&apos;t chasing harder after completion. It&apos;s making sure the final payment is already committed before you reach completion.</p>


            <h2>Stop treating final payment as a post-completion step</h2>
            <p>Most contractors structure a job like this: deposit, progress draws, then final invoice on completion. That last line is the problem. &quot;On completion&quot; means the client evaluates whether to pay you after they already have the finished product. You&apos;ve handed over your only chip and then asked nicely.</p>
            <p>Restructure the tail end so the final amount isn&apos;t sitting in the client&apos;s bank account waiting on their goodwill. Move the last payment into a committed state before you do the last 10% of work. The client funds it, it&apos;s locked, and it releases on the agreed trigger — punch list signed, final walkthrough done, whatever the contract says.</p>
            <p>The difference is subtle but total. In the old model, you finish and then hope they pay. In the new model, the money is already set aside, and finishing the work is what unlocks it.</p>
            <blockquote className="article-quote">
              The invoice you send after the job is done is the weakest document you&apos;ll ever produce. It&apos;s a request. What you want is a release.
              <cite>— GC, commercial interiors</cite>
            </blockquote>


            <h2>How milestone and escrow structures actually solve this</h2>
            <p>An escrow or milestone-based setup does one thing that a net-30 invoice can never do: it separates the client&apos;s decision to pay from the client&apos;s ability to delay paying.</p>
            <p>When the final payment is funded into escrow at the start of the closeout phase, the client has already parted with the money psychologically and literally. It&apos;s committed. Your job shifts from &quot;collecting&quot; to &quot;triggering a release&quot; — and triggering a release is a documentation task, not a confrontation.</p>
            <p>Structure it in tiers. A funded deposit to mobilize. Progress milestones tied to verifiable completion — not calendar dates, which get argued over, but deliverables you can photograph or sign off. Then the final tranche funded before demobilization, releasing on the final walkthrough. Each one is pre-committed, so at no point does your leverage collapse to zero.</p>
            <p>The secondary benefit is that this filters your clients. A client who won&apos;t fund the final milestone before you finish is telling you something about how the final payment would have gone anyway — while you still have crew and time to respond, instead of after you&apos;ve packed up.</p>


            <h2>What to change on your next contract</h2>
            <p>You don&apos;t need to renegotiate everything. Three edits handle most of it.</p>
            <p>First, rename &quot;final payment on completion&quot; to &quot;final payment funded before closeout, released on walkthrough.&quot; That single language change moves the money forward in time.</p>
            <p>Second, tie every milestone to a verifiable event, not a date. Dates invite disputes; deliverables don&apos;t.</p>
            <p>Third, make the funding step a precondition for the closeout phase — the last work starts once the last payment is committed, not before.</p>
            <p>Do this consistently and the stuck-final-payment problem stops being a recurring event. It becomes a scenario your contract already resolved before you ever picked up a broom to sweep the site.</p>


            <p>If you want to see how this milestone-and-escrow structure gets built into the way you already run jobs — deposits, progress draws, and a funded final release — the contractor plans lay it out.</p>
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
