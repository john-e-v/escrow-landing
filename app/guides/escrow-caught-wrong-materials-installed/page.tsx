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
          <div className="hero-badge">Escrow Effect · August 2026</div>
          <h1>The Contractor Installed the Cheaper Fixtures. Escrow Meant the Homeowner Caught It Before Paying.</h1>
          <p className="hero-subtitle">A homeowner speced quartz counters and mid-grade cabinet hardware, then noticed the installed materials didn&apos;t match the contract. Because the final milestone was still in escrow, she had leverage to force the swap instead of eating a $7K substitution.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$7,000. That&apos;s what the substitution would have cost her if the last milestone had already been paid.</p>
            <p>Instead, she paid nothing extra. The contractor swapped the fixtures, the counters matched the contract, and the final release cleared a week later than planned but at the number both sides originally agreed to. The reason that story ends well — instead of ending in small claims court — is boring and mechanical: the money for the final milestone was sitting in escrow, not in the contractor&apos;s account.</p>
            <p>Here&apos;s how the near-miss actually played out.</p>


            <h2>What she speced vs. what got installed</h2>
            <p>The contract was specific. Quartz counters, a named brand and slab line. Mid-grade cabinet hardware, listed by SKU. That specificity is the only reason any of this was catchable — a contract that just says &quot;quartz counters, cabinet hardware included&quot; gives you nothing to point at.</p>
            <p>On walkthrough, she noticed the hardware felt light. Different finish, different weight, different SKU than the sheet she&apos;d signed. She checked the counters next. Also a downgrade — a cheaper line that looked close enough to pass at a glance but wasn&apos;t what she&apos;d paid for. The delta between speced and installed was roughly $7,000 in materials.</p>
            <p>Under the old way this goes, she&apos;s already handed over most of the money. The contractor is 90% paid, the job is &apos;done,&apos; and her only remaining leverage is a bad review and a lawsuit that costs more than the substitution.</p>
            <blockquote className="article-quote">
              The finish was the tell. Once I saw the hardware didn&apos;t match the SKU, I stopped trusting the counters — and I was right not to.
              <cite>— homeowner, kitchen remodel</cite>
            </blockquote>


            <h2>Why the escrow changed the math</h2>
            <p>The project had been structured so payment released in milestones, and the final milestone — the largest one — didn&apos;t release automatically on the contractor&apos;s say-so. It released when the work matching the contract was confirmed.</p>
            <p>That single detail flipped the leverage. She wasn&apos;t asking for a refund on money that was already gone. She was declining to release money that was still held, until the deliverable matched the agreement. Those are very different conversations. One is a plea. The other is a clause.</p>
            <p>The contractor did the math too. Fighting over a $7K substitution when the final payment is still sitting untouched is a losing position — the fix is cheaper than the standoff. So he ordered the correct fixtures, installed them, and the final milestone released against the corrected work.</p>


            <h2>What actually did the work</h2>
            <p>Notice what didn&apos;t save this project: not trust, not vibes, not the contractor being a good guy. What saved it was sequence. The money moved after verification instead of before it.</p>
            <p>Most payment disputes aren&apos;t about whether someone was wronged. They&apos;re about who&apos;s holding the funds when the disagreement starts. If the money&apos;s already spent, the wronged party chases. If the money&apos;s still in escrow, the party who under-delivered has to earn the release. Same facts, opposite outcomes.</p>
            <p>That&apos;s not a trick you pull mid-project. It&apos;s a structure you set up at the start — specific milestones, specific deliverables, and payment that releases against the contract instead of against a handshake. If you&apos;re a homeowner about to hand real money to someone whose incentives quietly point toward the cheaper fixture, the time to build that leverage in is before the first dollar moves, not after the walkthrough.</p>
          </div>

          <div className="article-footer">
            <Link href="/guides" className="article-back">← Back to Guides</Link>
            <a href="/create" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>Set up a milestone project →</a>
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
