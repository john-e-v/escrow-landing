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
          <h1>The Contractor Skipped the Permit. Escrow Meant the Homeowner Held the Leverage.</h1>
          <p className="hero-subtitle">A homeowner&apos;s addition passed the framing stage before anyone realized no permit had ever been pulled. Because payment sat in escrow tied to inspection milestones, the contractor fixed it on his own dime instead of the homeowner eating a stop-work order.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$14,200 was still in escrow when the framing inspection got flagged. That number is the entire reason this story doesn&apos;t end with a stop-work order and a homeowner writing a second check to fix the first contractor&apos;s mistake.</p>
            <p>Here&apos;s what happened. A homeowner in a first-ring suburb hired a contractor to build a 340-square-foot addition off the back of the house — new footings, framing, roof tie-in, the works. The job moved fast. Foundation poured in week two, framing up by week four. It looked like a dream project right up until the inspector showed up for the framing sign-off and asked to see the permit.</p>
            <p>There wasn&apos;t one. The contractor had never pulled it.</p>


            <h2>Why This Usually Ends Badly</h2>
            <p>In the normal version of this story, the homeowner is already deep in the hole. Most residential jobs run on a deposit-plus-progress-payment model, which means by the time framing is done, the contractor has typically been paid 50 to 70 percent of the contract. The money is gone. The leverage is gone with it.</p>
            <p>So when the stop-work order lands, the homeowner is the one holding the bag. They own the un-permitted structure. They&apos;re the property owner of record. The city doesn&apos;t care that the contractor made the mistake — the fines, the retroactive permit fees, and sometimes the cost of opening up finished walls for inspection all land on the person whose name is on the deed. The contractor, meanwhile, has already been paid for the work he did wrong, and his incentive to come back and fix it for free is exactly zero.</p>
            <p>That&apos;s the trap. The party who caused the failure has the money, and the party who suffers the failure has the liability.</p>
            <blockquote className="article-quote">
              The homeowner always assumes the permit is the contractor&apos;s job — legally, it&apos;s the property owner who eats the penalty. That gap is where people get destroyed.
              <cite>— residential building inspector</cite>
            </blockquote>


            <h2>What The Escrow Structure Changed</h2>
            <p>This job was set up differently. Payment wasn&apos;t front-loaded on a deposit. It was tied to inspection milestones and held in escrow — meaning the framing payment wouldn&apos;t release until the framing inspection actually passed.</p>
            <p>So when the inspector flagged the missing permit, the math flipped. The contractor wasn&apos;t sitting on a fat progress payment he&apos;d already banked. He was staring at $14,200 he couldn&apos;t touch until the framing passed inspection — and it couldn&apos;t pass inspection without a permit that should have been pulled before the first footing was dug.</p>
            <p>That meant the fastest path to getting paid ran directly through fixing his own mistake. He pulled the permit retroactively, paid the after-the-fact permit surcharge himself, scheduled the inspection, and covered the cost of the two small sections the inspector wanted opened up to verify the framing underneath. None of it touched the homeowner&apos;s wallet, because the leverage — the unreleased payment — was still sitting exactly where it needed to be.</p>


            <h2>The Real Lesson</h2>
            <p>The homeowner didn&apos;t win because they were smart about permits. Most homeowners don&apos;t know a framing inspection from a final. They won because the money was structured so that the person who made the mistake was also the person who had to pay to fix it before getting paid.</p>
            <p>That&apos;s the whole mechanism. Escrow tied to inspection milestones doesn&apos;t prevent a contractor from cutting a corner — nothing does. What it prevents is the corner-cutter walking away with your money while you inherit the consequences. It keeps the incentive pointed in the right direction: the payment doesn&apos;t move until the work is actually right.</p>
            <p>If you&apos;re about to sign for a project where the failure would land on you and the cash would be long gone by the time you found out, the structure of how you pay matters more than any promise in the contract.</p>
          </div>

          <div className="article-footer">
            <Link href="/guides" className="article-back">← Back to Guides</Link>
            <a href="/create" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>Set up milestone escrow for your project →</a>
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
