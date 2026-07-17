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
          <h1>You Paid in Full. Then a Subcontractor Put a Lien on Your House.</h1>
          <p className="hero-subtitle">You paid your general contractor every dollar, on time. Six weeks later a tile supplier files a mechanic&apos;s lien against your home because the GC never paid them. Here&apos;s how paid homeowners still end up on the hook — and the payment structure that blocks it.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$14,200. That&apos;s the amount a homeowner in Austin paid twice — once to her general contractor, and again to a flooring supplier who filed a mechanic&apos;s lien on her house six weeks after the job was done.</p>
            <p>She did everything right. She paid her GC in full, on schedule, by the terms of the contract. Every invoice cleared. The kitchen remodel looked great. Then a certified letter arrived from a tile distributor she&apos;d never spoken to, demanding $14,200 or they&apos;d move to foreclose on the lien attached to her property.</p>
            <p>Her GC had cashed her final payment and stopped answering the phone. The supplier didn&apos;t care. Under mechanic&apos;s lien law in most states, they didn&apos;t have to.</p>


            <h2>How a paid homeowner still owes the debt</h2>
            <p>Mechanic&apos;s lien statutes exist to protect the people who supply labor and materials — subcontractors, suppliers, laborers — from getting stiffed by the general contractor. The catch: the law makes the property owner the ultimate backstop, not the GC.</p>
            <p>When you pay your general contractor, that money is supposed to flow down to everyone who worked on your project. If the GC pockets it, mismanages it, or goes bankrupt, the unpaid subs and suppliers can attach a lien directly to your home — regardless of whether you already paid for that exact work.</p>
            <p>In plain terms: the supplier&apos;s contract was with your GC, but their lien is against you. You become the collection agency for a debt you already settled.</p>
            <blockquote className="article-quote">
              I paid the contractor for the materials. Then I paid the material company for the same materials. The court told me that&apos;s just how liens work.
              <cite>— homeowner, post-lien settlement</cite>
            </blockquote>


            <h2>The timeline that makes it worse</h2>
            <p>The danger window is longer than most people think. In many states, a supplier or sub has 60 to 90 days after their last delivery to file a lien. That means the job can be finished, the crew gone, and your final check cashed — and the clock is still running.</p>
            <p>By the time the lien lands, the GC has often moved the money. On a $50,000 remodel, the materials and subcontractor labor can easily represent $20,000 to $30,000 of exposure. If the GC failed to pay any slice of it, that slice becomes your problem, plus legal fees to clear the lien from your title.</p>
            <p>You usually don&apos;t discover the gap until you try to sell or refinance — and the title company flags a lien you didn&apos;t know existed.</p>


            <h2>The structural fix: don&apos;t let the money pool with the GC</h2>
            <p>The reason this failure happens is that a lump-sum payment gives the general contractor full custody of funds meant for other people. The fix is to remove that custody problem entirely.</p>
            <p>Escrow and milestone payments do this by holding funds with a neutral third party and releasing them only as verified work is completed — often paired with lien waivers signed by each subcontractor and supplier before their portion is released. A conditional lien waiver is a signed acknowledgment that a party has been paid for work through a given date and gives up their right to lien for it.</p>
            <p>With that structure, money never sits in the GC&apos;s account waiting to be diverted. Each release is tied to proof that the people who could file a lien have already been made whole. The Austin homeowner&apos;s $14,200 second payment simply couldn&apos;t have happened — the supplier would have signed off before those funds ever moved.</p>
            <p>It doesn&apos;t require you to trust the GC less. It just removes the single point of failure that turns their bad decision into your foreclosure notice.</p>


            <p>If you&apos;re about to start a project, the cleanest protection is to work with contractors who already operate this way — funds held in escrow, released against milestones, with lien waivers built into the process.</p>
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
