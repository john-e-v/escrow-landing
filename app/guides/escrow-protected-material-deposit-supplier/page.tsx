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
          <h1>The Supplier Never Delivered. The Homeowner&apos;s Material Deposit Was Still Safe.</h1>
          <p className="hero-subtitle">A homeowner wired $9,200 for custom cabinets that never arrived after the supplier folded. Because the funds sat in escrow tied to delivery milestones, the money never left the account, and the homeowner recovered every cent to re-order elsewhere.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$9,200 never left the account — and that&apos;s the only reason this story has a happy ending.</p>
            <p>A homeowner in the middle of a kitchen remodel ordered custom cabinets from a supplier her contractor had used before. The quote was fair, the samples were beautiful, and the deposit was standard: fifty percent up front, the rest on delivery. She paid the $9,200 the way most people do — she was ready to wire it directly to the supplier.</p>
            <p>She didn&apos;t. And six weeks later, when the supplier quietly folded, that decision was the difference between a delay and a disaster.</p>


            <h2>What Actually Happened</h2>
            <p>The cabinets were custom, which meant a long lead time. That&apos;s normal. What wasn&apos;t normal was the silence. Two weeks before the promised delivery date, the supplier stopped answering the phone. The showroom went dark. By the time the homeowner drove out to the address, there was a notice on the door.</p>
            <p>The supplier had taken deposits from a dozen customers and gone under owing more than it could ever repay. The other customers who had wired their deposits directly were now unsecured creditors — standing in line behind banks and landlords, hoping to recover pennies on the dollar through a process that could take years.</p>
            <p>This homeowner wasn&apos;t in that line. Because her $9,200 was never actually in the supplier&apos;s hands.</p>


            <h2>Why the Money Was Safe</h2>
            <p>Instead of wiring the deposit, she&apos;d funded the payment into escrow tied to delivery milestones. The structure was simple: the money was committed, the supplier could see it was real and ready, and it would release automatically when the cabinets were delivered and confirmed. Until that milestone was met, the funds sat untouched.</p>
            <p>So when the supplier collapsed, the milestone never triggered. There was no delivery, so there was no release. The money stayed exactly where it had been the whole time — in a holding account with her name on it, not the supplier&apos;s.</p>
            <p>Recovering it wasn&apos;t a legal fight. It wasn&apos;t a claim in a bankruptcy proceeding. It was a return of funds that had never legally changed hands.</p>
            <blockquote className="article-quote">
              Everyone else who paid that supplier is trying to sue a company that doesn&apos;t exist anymore. I just re-ordered from someone else the next week.
              <cite>— the homeowner, after recovering her deposit in full</cite>
            </blockquote>


            <h2>The Part People Miss</h2>
            <p>A deposit isn&apos;t a payment. It&apos;s a promise — you&apos;re handing over money before you&apos;ve received anything, on the assumption that the other side will hold up their end. When they do, the system works fine. When they don&apos;t, the person who paid early is the one holding the risk.</p>
            <p>Direct payment collapses that promise the instant the wire clears. The money is gone, and your only recourse is whatever the other party chooses — or is able — to do. Escrow keeps the promise intact. It ties the money to the thing you&apos;re actually paying for: the delivery, the milestone, the completed work. No delivery, no release. It&apos;s not about distrust. It&apos;s about making sure the sequence stays in the right order.</p>
            <p>The homeowner in this story didn&apos;t do anything unusual. She didn&apos;t hire a lawyer or read the supplier&apos;s financials. She just refused to let the money move before the cabinets did.</p>


            <h2>If You&apos;re About to Pay a Deposit</h2>
            <p>Any time you&apos;re handing over money before you&apos;ve received what you&apos;re paying for, that&apos;s the moment to ask a single question: what happens to this money if the other side disappears?</p>
            <p>If the answer is &quot;I&apos;d have to chase them for it,&quot; you&apos;re carrying the risk. Structuring the payment so it releases on delivery — not on trust — moves that risk back to where it belongs.</p>
            <p>It takes a few minutes to set up before you send a dollar. It&apos;s the kind of thing you only appreciate when it saves you nine thousand of them.</p>
          </div>

          <div className="article-footer">
            <Link href="/guides" className="article-back">← Back to Guides</Link>
            <a href="/create" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>Set up a milestone-based deposit →</a>
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
