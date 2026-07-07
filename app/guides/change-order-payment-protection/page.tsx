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
          <h1>How to Get Paid for Change Orders Without Chasing the Client</h1>
          <p className="hero-subtitle">Change orders are where profit quietly leaks out of a job. Learn how to structure mid-project scope changes so the money is committed before the work starts — not argued over after it&apos;s done.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>The rule is simple: no change order gets built until it&apos;s signed and funded. If the money isn&apos;t committed before the work starts, you&apos;re not managing a change order — you&apos;re extending credit and hoping.</p>
            <p>That&apos;s the operational fix. Everything below is the reasoning behind why the sequence matters, and how to structure it so it holds up on every job instead of the ones where the client happens to be easy.</p>


            <h2>Why Change Orders Leak Profit</h2>
            <p>The base contract has a natural gate: nobody starts until it&apos;s signed. Change orders usually don&apos;t. A client asks for an extra outlet, a different tile, a wall moved eight inches — and because the crew is already on site and moving fast, the work gets done first and the paperwork chases it.</p>
            <p>That&apos;s the exact moment your leverage disappears. Before the work is done, the client wants the change and you hold the value. After it&apos;s done, you&apos;re holding an invoice and they&apos;re holding an opinion about whether it was &apos;really&apos; extra. You&apos;ve flipped from negotiating to collecting, and collecting is always the weaker position.</p>
            <p>The leak isn&apos;t usually one big disputed number. It&apos;s the accumulation of small verbal yeses that never got priced, signed, or funded — and by the end of the job they&apos;re tangled into the final balance where they&apos;re easiest to argue down.</p>
            <blockquote className="article-quote">
              The change was approved when the crew was standing there. It got &apos;unapproved&apos; when the final invoice showed up.
              <cite>— General contractor, residential remodels</cite>
            </blockquote>


            <h2>The Structure That Closes the Gap</h2>
            <p>Treat every change order like a mini-contract with the same gate as the main job. Three steps, in this order:</p>
            <p>1. Write the scope and price in plain terms before touching a tool — what&apos;s changing, what it costs, how it affects the schedule.
2. Get a signature that specifically approves that number, separate from the base contract.
3. Fund it before the work begins, so the money is already committed rather than promised.</p>
            <p>The first two steps are common. It&apos;s the third one — funding before work — that actually stops the leak. A signature is a promise. Committed money is a fact. When the change-order amount is already sitting in escrow or released on a defined milestone, there&apos;s nothing to renegotiate later because the price was locked when your leverage was highest.</p>


            <h2>How Milestone Funding Fits Mid-Project</h2>
            <p>You don&apos;t need to restructure the whole contract to do this. A milestone or escrow arrangement lets you attach a funded checkpoint to a change without renegotiating the original deal. The client authorizes and funds the change-order amount, it&apos;s held against a defined completion point, and it releases when that point is met.</p>
            <p>This does three useful things at once. It forces the price conversation to the front, where it belongs. It removes the &apos;I&apos;ll settle up at the end&apos; drift that buries small changes in the final number. And it protects the relationship — because nobody&apos;s arguing over work that&apos;s already finished. The terms were agreed and funded while everyone was still on the same page.</p>
            <p>For the client, it&apos;s not a trust penalty. Their money isn&apos;t gone; it&apos;s committed against defined work. For you, it means the extra outlet, the moved wall, and the upgraded tile are each paid for on their own terms instead of stacking into one disputed balance at closeout.</p>


            <p>The verdict holds across every trade: chasing change-order money is a structural problem, not a client problem. Fix the sequence — price, sign, fund, then build — and the chasing stops because there&apos;s nothing left to chase.</p>
            <p>If you want to see how milestone and escrow funding can be built into your contracts so change orders are committed before the work starts, take a look at the contractor plans.</p>
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
