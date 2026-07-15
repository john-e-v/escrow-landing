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
          <div className="hero-badge">Payment Risk · July 2026</div>
          <h1>Your Contractor Cashed the Deposit and Disappeared: What Actually Happens Next</h1>
          <p className="hero-subtitle">A $14,000 deposit, three weeks of silence, and a half-demolished kitchen. This is the exact sequence of how abandonment plays out — and the one payment structure that would have kept the money from vanishing.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$14,000 gone. A kitchen stripped to the studs. And a phone number that now goes straight to voicemail.</p>
            <p>This is not a warning about what might happen. This is a postmortem of what did — a sequence so common that most contractor-licensing boards have a dedicated form for it. Here is exactly how it unfolds, step by step, and where the money actually goes.</p>


            <h2>Week 1: The deposit that felt reasonable</h2>
            <p>The bid came in at $38,000 for a full kitchen remodel. The contractor asked for a 40% deposit — $15,200 — &quot;to order cabinets and lock in the demo crew.&quot; The homeowner negotiated it down to $14,000. That felt like a win.</p>
            <p>It wasn&apos;t. A 40% upfront deposit on a residential job is a red flag in most states, where the legal cap is often 10% or $1,000, whichever is less. But the number sounded logical: cabinets are expensive, crews need to be paid. So the check cleared, and work started three days later.</p>
            <blockquote className="article-quote">
              Any deposit over 30% means the contractor is financing their business with your money. If they lose another client, your job funds someone else&apos;s problem.
              <cite>— construction attorney, consumer-protection practice</cite>
            </blockquote>


            <h2>Week 2: The demolition — and the pivot</h2>
            <p>The crew showed up, gutted the kitchen in two days, and hauled out the old cabinets. Then the lead texted: the cabinet supplier needed another $6,000 &quot;to release the order.&quot; The homeowner, now staring at a demolished room, paid it. Total out the door: $20,000.</p>
            <p>This is the psychological trap. Once demolition is done, you are hostage to sunk cost. You can&apos;t cook, you can&apos;t back out, and the person holding your money knows it. The second payment almost always follows the first for exactly this reason.</p>


            <h2>Week 3: Silence</h2>
            <p>No crew Monday. &quot;Supplier delay,&quot; came the text Tuesday. Wednesday, nothing. By Friday the number was dead. The cabinet company, when finally called directly, had no order on file under that name. There were no cabinets. There was never going to be.</p>
            <p>The homeowner filed with the state board and small-claims court. Here is the part nobody tells you: a judgment is not a check. The contractor had no assets, no bond that covered the full loss, and three other pending complaints. Recovery, if any, would take 18 months and pennies on the dollar. The realistic loss: the full $20,000 plus another $9,000 to bring in a legitimate contractor to finish — who now had to redo shoddy rough-in work.</p>


            <h2>The structural fix that would have stopped this at $0</h2>
            <p>The failure here wasn&apos;t bad luck or a bad reference. It was the payment structure. Cash handed over upfront has no reverse gear. Once it&apos;s in the contractor&apos;s account, your only recourse is the legal system — slow, expensive, and rarely whole.</p>
            <p>Milestone-based escrow inverts the risk. The full budget sits in a neutral account. The contractor gets paid only when a defined stage is verifiably complete: demo done, rough-in inspected, cabinets installed. If they vanish after demo, they&apos;ve earned the demo payment and nothing more — the remaining $16,000 is still yours, ready to fund the next crew. There is no $14,000 hole. There is no leverage in disappearing, because disappearing pays nothing.</p>
            <p>The homeowner in this case did everything the usual advice says: checked the license, read reviews, got it in writing. None of that protects the money. Only the money structure protects the money.</p>
            <p>If you&apos;re about to hand over a deposit, the question isn&apos;t whether your contractor is trustworthy. It&apos;s whether your payment terms would survive being wrong about that. Contractors who work on escrow have already answered it — they get paid for work done, and you never front the risk.</p>
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
