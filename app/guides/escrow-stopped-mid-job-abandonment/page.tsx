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
          <div className="hero-badge">Escrow Effect · July 2026</div>
          <h1>The Framer Walked Off at 60%. Escrow Meant the Homeowner Didn&apos;t Lose a Dime.</h1>
          <p className="hero-subtitle">A garage-to-ADU conversion stalled when the framing crew vanished at 60% complete—but the homeowner had only released payment for verified milestones. Here&apos;s how escrow-first structuring turned a nightmare into a manageable delay instead of a five-figure loss.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$0. That&apos;s how much the homeowner lost when their framing crew walked off a garage-to-ADU conversion at 60% complete.</p>
            <p>Not because they got lucky. Not because the crew came back. The framer never returned a call after that Friday—the trailer was gone Monday, the phone went to a full voicemail box by Wednesday, and the LLC dissolved before the month was out. By every measure this was the exact horror story that turns a $90,000 renovation into a lawyit-and-lien nightmare.</p>
            <p>Except the homeowner had released payment for three verified milestones and not one dollar more. The money for the work that never happened was still sitting in escrow, untouched, waiting for proof that didn&apos;t come.</p>


            <h2>What Actually Got Paid</h2>
            <p>The conversion was broken into milestones before a single stud went up: demo and slab prep, rough framing to lock-up, sheathing and window bucks, then MEP rough-in, and so on down the line. Each milestone had a payment attached, and each payment released only when the work tied to it was documented and confirmed.</p>
            <p>When the crew vanished, they&apos;d finished demo, slab prep, and most of the rough framing—the first two milestones plus a partial third. Those first two were verified and paid. Fair. The framer earned that money and got it.</p>
            <p>The third milestone—the one covering the framing they abandoned at roughly 60%—was never released. The sheathing milestone hadn&apos;t even been triggered. So the funds that a traditional &apos;pay-as-you-go&apos; or big-deposit arrangement would have already handed over were exactly where they belonged: held, not spent.</p>
            <blockquote className="article-quote">
              If I&apos;d paid on the old schedule, I&apos;d have been out about $28,000 for work I&apos;d have to tear out and redo. Instead I was out nothing, and I had a partially framed structure I could hand to the next crew.
              <cite>— Homeowner, garage-to-ADU conversion</cite>
            </blockquote>


            <h2>Why the Structure Held</h2>
            <p>The reason this worked isn&apos;t that escrow is magic. It&apos;s that escrow forces the question everyone skips: what, specifically, does this payment buy, and how will we both know it&apos;s done?</p>
            <p>A handshake deposit answers none of that. It moves money based on trust and a start date. When the relationship breaks, the money is already gone and the only recovery path is legal—slow, expensive, and usually pointless against a dissolved LLC.</p>
            <p>Milestone-based escrow answers all of it up front. Scope is defined. Proof is required. And the money moves in step with the work instead of ahead of it. That alignment is the whole point: a contractor who walks away can only walk away with what they&apos;ve actually earned. The homeowner keeps leverage precisely when they&apos;d otherwise have none.</p>


            <h2>The Delay That Wasn&apos;t a Disaster</h2>
            <p>Bringing in a second framing crew cost time—about five weeks to vet, bid, and schedule around the half-finished structure. That&apos;s a real inconvenience. Nobody&apos;s pretending an abandoned job is fun.</p>
            <p>But a five-week delay is a scheduling problem. A five-figure loss on top of a five-week delay is a financial crisis. Escrow-first structuring is what turned the first into the second&apos;s much smaller cousin.</p>
            <p>The new crew picked up at the exact milestone the old one abandoned, the held funds rolled into their contract, and the ADU got finished. The homeowner&apos;s total overrun was the cost of re-vetting and a slightly higher rate on the remaining work—not the price of paying twice.</p>
            <p>Every renovation is a bet on a stranger&apos;s reliability. You can place that bet with your money already on the table, or you can structure it so the money only moves when the work is real. If you want to see how milestone-first payment terms come together before you hand anyone a deposit, that&apos;s where to start.</p>
          </div>

          <div className="article-footer">
            <Link href="/guides" className="article-back">← Back to Guides</Link>
            <a href="/create" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>Structure your project with escrow-first milestones →</a>
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
