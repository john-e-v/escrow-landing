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
          <div className="hero-badge">Contractor Ops · August 2026</div>
          <h1>The Client Offered Cash for a Discount: Why It Costs You More Than It Saves</h1>
          <p className="hero-subtitle">A cash-for-discount offer feels like easy money until a dispute hits and you have no record of the payment or the terms. Here&apos;s why the discount you gave up is smaller than the leverage you lost, and how to structure payment so you keep both.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Say no to the cash discount. If a client offers you $9,000 cash instead of $10,000 on the books, the $1,000 you &quot;save&quot; them is the cheapest liability insurance you&apos;ll ever throw away.</p>
            <p>Here&apos;s the operational reality: the discount is a fixed, known number. The leverage you give up is variable and unbounded. You&apos;re trading a small certainty for a large unknown, and that math almost never works in your favor.</p>


            <h2>What the cash actually buys</h2>
            <p>A cash-for-discount deal quietly removes three things you&apos;d want in a fight: a timestamped payment record, a paper trail tying the payment to a specific scope, and any third party who can confirm the transaction happened.</p>
            <p>Most jobs run fine. The problem is the ones that don&apos;t. When a client claims the work was defective, or that they &quot;already paid you for that,&quot; or disputes the balance owed, your first move is to produce the record. With cash, there is no record. It&apos;s your word against theirs, and &quot;we agreed on cash to save you money&quot; is not a sentence you want to say in front of anyone deciding who&apos;s right.</p>
            <blockquote className="article-quote">
              The client who wants a cash discount and the client who later disputes the bill are, in my experience, the same client about a third of the time.
              <cite>— Remodeling GC, 14 years in business</cite>
            </blockquote>


            <h2>The discount is the smaller loss</h2>
            <p>Run the numbers on a real dispute. If a client withholds a $4,000 final payment on that &quot;cash&quot; job, you have no invoice, no signed milestone, no proof of what was owed. Now you&apos;re choosing between eating the loss or paying a lawyer to reconstruct a transaction that was designed to be invisible. The $1,000 you gave up was never the expensive part.</p>
            <p>Even a lien becomes harder. Lien rights depend on documented contract amounts and payment history. An off-the-books arrangement undercuts the exact records you&apos;d file against. You didn&apos;t just discount the job — you weakened your ability to collect on it.</p>


            <h2>Structure the payment so you keep both</h2>
            <p>The client wants a deal. Fine. But give the discount inside a structure that still protects you, not outside of it.</p>
            <p>The cleanest version is milestone-based payment held in escrow. The client funds each milestone up front into a neutral account. You complete the work, it&apos;s marked done, and the funds release. If they want a discount, you write the reduced amount into the milestone terms — on the record, agreed to in writing, with the money already committed.</p>
            <p>That flips the whole thing. Instead of trusting a client to pay cash after the work, the money is secured before you start each phase. The client gets their price. You get a documented, verifiable, funded agreement. And the &quot;I already paid you&quot; argument disappears, because every release is logged.</p>
            <p>The reason cash feels safer to a client is that it feels like leverage — they hold the money until they&apos;re happy. Escrow gives them that same comfort without stripping you of your record. They&apos;re not paying you and hoping; they&apos;re funding a milestone that only releases on completion. It&apos;s the same psychological deal, minus the liability you&apos;d otherwise absorb.</p>


            <h2>The rule</h2>
            <p>Any discount you offer should live inside your payment structure, not replace it. The moment you take money off the books to satisfy a client, you&apos;ve made yourself the least protected party in the deal.</p>
            <p>If you&apos;re tired of choosing between winning the job and protecting the payment, set your projects up so both happen automatically — funded milestones, documented terms, clean releases.</p>
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
