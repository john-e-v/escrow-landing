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
          <div className="hero-badge">Payment Ops · September 2026</div>
          <h1>The Client Offered to Pay You in Leftover Materials: Why That&apos;s a Loss, Not a Payment</h1>
          <p className="hero-subtitle">When a client offers to settle the final balance with leftover lumber, tile, or an appliance they never used, they&apos;re handing you a liability dressed as a payment. Here&apos;s why bartering wrecks your books and how to structure payment so cash stays cash.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Say no, and put the remaining balance back on the invoice as cash due. That&apos;s the operational answer. The leftover tile stacked in the client&apos;s garage is worth roughly 30 cents on the dollar to you, and you&apos;ll spend hours converting it to actual money — hours you&apos;re not billing anyone for.</p>
            <p>Here&apos;s the trap. The client owes you $4,200 on the final draw. They offer you a pallet of unused porcelain tile, a mid-grade dishwasher still in the box, and &quot;probably eight hundred bucks of lumber&quot; in the garage. Feels like a win because they&apos;re eager and you&apos;re tired of chasing the balance. It isn&apos;t a win. You just converted a $4,200 receivable into an inventory problem.</p>


            <h2>Retail Value Is Not Your Value</h2>
            <p>The client values that tile at what they paid: retail, plus tax, plus whatever they think their taste is worth. You value it at what you can actually recover, which is resale — and resale on used or partial materials is brutal. A pallet that cost $1,800 at the supply house moves for $500 on Facebook Marketplace after two weeks of tire-kickers and no-shows.</p>
            <p>That gap is a real loss on your books, and it&apos;s invisible until tax time. You marked the job paid in full. In reality you took a haircut on 40% of the final draw and burned labor hours liquidating goods. That&apos;s not a payment. That&apos;s a discount you didn&apos;t agree to.</p>
            <blockquote className="article-quote">
              The moment a receivable turns into physical goods, you&apos;ve stopped being a contractor and started running a pawn shop.
              <cite>— GC, 14 years, residential remodels</cite>
            </blockquote>


            <h2>What Barter Does to Your Books</h2>
            <p>Cash is clean. It reconciles, it&apos;s taxed at a known value, and it doesn&apos;t sit in your truck depreciating. Barter is the opposite of all three.</p>
            <p>The IRS treats bartered goods as income at fair market value — so you owe tax on the tile whether or not you ever sell it. Your bookkeeper can&apos;t reconcile &quot;one dishwasher&quot; against an invoice line. And every day that material sits unsold, it loses value and takes up space you&apos;re paying for. You&apos;ve traded a collectible debt for a depreciating asset and a tax headache. No serious business does this on purpose.</p>


            <h2>The Structural Fix: Don&apos;t Let the Final Balance Float</h2>
            <p>Bartering only becomes tempting when the final payment is already in doubt. Nobody offers you a garage full of tile when the money is locked up and moving on schedule. They offer it when the cash isn&apos;t there and they&apos;re improvising an exit.</p>
            <p>So the fix isn&apos;t a better negotiation at the end — it&apos;s removing the end-of-job scramble entirely. Structure the job in milestones tied to completed phases, and hold each client payment in escrow before the work starts. The client funds the milestone up front. You complete the phase. The money releases as cash. There&apos;s no final $4,200 hanging in the air for a client to &quot;get creative&quot; about, because that balance was already committed and sitting in the account before you swung a hammer on the last phase.</p>
            <p>That structure changes the conversation. When the client says &quot;I&apos;ve got some leftover materials,&quot; you say &quot;Great, that&apos;s yours to keep — the balance is already funded.&quot; No haircut. No pawn shop. No Marketplace listings at 9pm.</p>


            <h2>Cash Stays Cash</h2>
            <p>You didn&apos;t build a business to end up liquidating dishwashers. Every job you close should close in the same currency you priced it in. Milestone funding and escrow aren&apos;t paperwork for the sake of paperwork — they&apos;re the mechanism that keeps a receivable from ever mutating into a pallet of tile.</p>
            <p>If you want to see how milestone-based, escrow-backed payment structures work for the size of jobs you run, take a look at the contractor plans.</p>
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
