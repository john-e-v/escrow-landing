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
          <h1>Why Your Second Payment Is Always Late (And How to Structure It Out)</h1>
          <p className="hero-subtitle">The first payment clears fine, but the second one drags every time — that&apos;s a structural gap, not a client problem. Tie each release to a verifiable milestone in an escrow account and the money is already committed before the work starts.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>The fix: stop invoicing for the second payment and start releasing it. Fund the full project value into an escrow account up front, split it into milestones, and tie each release to a specific deliverable the client can verify. The money is committed before you pick up a tool. The second payment isn&apos;t &quot;late&quot; anymore because it was never sitting in the client&apos;s account to begin with.</p>
            <p>Most contractors read a dragging second payment as a client problem — a slow payer, a bad apple, a cash-flow issue on their end. Sometimes it is. But when it happens on almost every job, across different clients, that&apos;s not a client pattern. That&apos;s a structural gap in how you collect.</p>


            <h2>Why the first payment always clears and the second one doesn&apos;t</h2>
            <p>The first payment is easy because the client wants something they don&apos;t have yet: your commitment to start. The money buys motion. Every incentive points toward paying.</p>
            <p>By the time the second payment is due, the incentive has flipped. You&apos;ve already started. Material is on site, the demo is done, the framing is up. From the client&apos;s chair, they already have most of what they&apos;re paying for. Paying you now buys them nothing new — it just moves money out of their account. So it drags. Not out of malice, usually, but because nothing is pushing it forward. You&apos;re now a creditor chasing a debtor, and you&apos;re doing it while trying to keep the job on schedule.</p>
            <p>That&apos;s the whole trap: the point where your leverage is lowest is exactly the point where you need the client to act.</p>
            <blockquote className="article-quote">
              I stopped thinking of it as a payment I had to collect and started thinking of it as a release I had to unlock. That reframe changed how I wrote every contract after.
              <cite>— GC, remodeling</cite>
            </blockquote>


            <h2>Milestones move the leverage back to the front</h2>
            <p>Escrow with milestone releases fixes the incentive, not just the paperwork. Here&apos;s the mechanic:</p>
            <p>The client funds the full contract value into a neutral escrow account at signing. That&apos;s the hard part, and it&apos;s the part that filters out clients who were never going to pay the back half anyway — if they can&apos;t fund the project, better to know that before demo than after.</p>
            <p>Once funded, you define release triggers: rough-in complete, inspection passed, cabinets set, final walkthrough. Each one is a verifiable event, not a calendar date and not a vibe. When you hit the milestone and it&apos;s confirmed, that portion releases to you. You&apos;re not asking the client to write a check mid-job. You&apos;re asking them to confirm work they can see — a much smaller ask, and one with a clear yes/no answer.</p>
            <p>The result: your payment schedule stops depending on the client&apos;s willingness to part with money they already have, and starts depending on whether you did the work. That&apos;s a fight you can win every time.</p>


            <h2>What to do this week</h2>
            <p>Pull your last five jobs and mark which payment slipped. If it&apos;s consistently the middle or back payments, you have a structure problem, and no amount of politer reminder emails will fix it.</p>
            <p>Then rewrite your next proposal around release triggers instead of invoice dates. Define three to five milestones. Attach a dollar amount to each. Make each one something a client can look at and confirm in a sentence. Front-load nothing you can&apos;t defend and back-load nothing you&apos;ll be waiting on.</p>
            <p>The goal isn&apos;t to squeeze clients. It&apos;s to remove the moment where a client has to choose between paying you and keeping money in their account — because in that moment, you lose more often than you should.</p>
            <p>If you want to see how milestone-based escrow terms get structured for contractor work specifically, that&apos;s worth a look before your next contract.</p>
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
