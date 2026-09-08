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
          <div className="hero-badge">Hidden Cost · September 2026</div>
          <h1>The Fill Dirt Settled and Your New Patio Sank 4 Inches. Who Pays?</h1>
          <p className="hero-subtitle">A contractor built a patio on uncompacted fill to save two days. Eight months later it sank four inches and cracked. Here&apos;s why the homeowner paid twice, and the payment structure that would have held the money until the base was proven.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Four inches. That&apos;s how far the northeast corner of a 320-square-foot paver patio dropped eight months after it was installed. The homeowner paid $9,400 to build it. She paid another $7,100 to tear it out and do it right. The second contractor sent a photo of the base as evidence: fresh fill dirt, no visible compaction lifts, poured over during the same week the excavation happened.</p>
            <p>The patio didn&apos;t fail because of bad pavers or a bad joint compound. It failed underneath, in a layer nobody could see once the surface went down.</p>


            <h2>What actually happened</h2>
            <p>The lot had a slight grade drop toward the back fence. To level it, the first crew brought in about 18 cubic yards of fill dirt to raise the low corner roughly two feet. That fill needed to be placed in lifts — six to eight inches at a time — with a plate compactor run over each lift and, ideally, a few days to settle with some water.</p>
            <p>Instead, the crew dumped the fill, roughly graded it, laid a thin gravel base, and set pavers over it within the same week. The schedule was tight and skipping proper compaction saved them about two days of labor and equipment rental. On day one, everything looked perfect. It always does.</p>
            <p>Over the next eight months, the uncompacted fill did what uncompacted fill does. It consolidated under its own weight and under seasonal moisture cycles. The deepest fill — the two-foot corner — settled the most. Four inches of drop over that corner pulled the paver field apart, cracked the perimeter, and created a standing-water low spot that made it worse each rain.</p>
            <blockquote className="article-quote">
              You can&apos;t inspect compaction after the surface is down. By then the only proof you have is whether it moves — and by the time it moves, you&apos;re already paying to rebuild it.
              <cite>— site prep contractor, 20+ years</cite>
            </blockquote>


            <h2>Why she paid twice</h2>
            <p>The homeowner had paid the first contractor in full on completion, because the patio looked finished and correct. There was no way for her to know the base was hollow. When it sank, the contractor had already been paid, had moved on, and stopped answering. Chasing him would have meant small claims court, an expert to testify on compaction standards, and months of her time — for a $9,400 judgment against someone who might not have the assets to collect from.</p>
            <p>So she did the math homeowners always end up doing: paying $7,100 for a correct rebuild was cheaper and faster than litigating the first one. The first contractor&apos;s shortcut cost her the entire original price plus the teardown. He kept his money. She absorbed the failure.</p>


            <h2>The fix was structural, not personal</h2>
            <p>This wasn&apos;t a scam. It was a schedule pressure that got hidden inside invisible work. The prevention isn&apos;t &apos;hire a more honest contractor&apos; — it&apos;s not paying for buried work until the buried work is proven.</p>
            <p>A milestone escrow structure would have caught this. The base compaction becomes its own release point: funds for the surface installation don&apos;t release until the compacted subgrade is verified — a compaction pass documented, or a short settling window observed, before pavers ever go down. If the crew wants to skip lifts to save two days, they can&apos;t quietly bill for a finished patio, because the money for the finished patio is locked behind a base that hasn&apos;t been signed off.</p>
            <p>Escrow doesn&apos;t slow down honest contractors. It just moves the incentive to the right place: the money follows the work that&apos;s actually there, not the work that merely looks done on the surface. The corner that would eventually sink four inches becomes a line item someone has to stand behind before getting paid.</p>
            <p>If you&apos;re about to build on fill, grade change, or any base you&apos;ll never see again once it&apos;s covered, structure the payment so the hidden layer gets paid last.</p>
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
