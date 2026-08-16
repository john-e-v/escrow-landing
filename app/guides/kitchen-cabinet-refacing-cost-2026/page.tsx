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
          <div className="hero-badge">Cost &amp; Timeline · August 2026</div>
          <h1>How Much Does Kitchen Cabinet Refacing Cost in 2026?</h1>
          <p className="hero-subtitle">Kitchen cabinet refacing runs $4,500 to $12,000 for an average kitchen in 2026, with high-end veneer and door jobs pushing past $15,000. This guide breaks down what drives the spread — material choice, cabinet count, and whether your boxes are even worth saving.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Kitchen cabinet refacing costs between $4,500 and $12,000 for an average-sized kitchen in 2026, with premium veneer-and-door packages climbing past $15,000. That&apos;s a wide spread — nearly triple from bottom to top — and the difference isn&apos;t random. It comes down to three things: how many cabinets you have, what you cover them with, and whether your existing boxes are even worth keeping.</p>
            <p>Refacing keeps your cabinet boxes in place and swaps out the visible parts: new doors, drawer fronts, and a fresh skin (veneer or laminate) over the exposed frame surfaces. It&apos;s the middle path between a $500 paint job and a $30,000 full replacement. The value is real — but only if your boxes are solid.</p>


            <h2>What Pushes You Toward $4,500</h2>
            <p>The low end assumes a small-to-average kitchen — roughly 10 to 15 cabinet doors and drawer fronts — clad in rigid thermofoil (RTF) or plastic laminate. These materials are durable, come in solid colors and basic woodgrains, and install fast. Labor stays low because there&apos;s no custom milling and no exotic material handling.</p>
            <p>If your kitchen is compact, your boxes are plumb and rot-free, and you&apos;re happy with a clean, contemporary look, you can genuinely land in the $4,500 to $6,500 zone.</p>


            <h2>What Pushes You Toward $12,000+</h2>
            <p>The top of the range stacks up fast. Real wood veneer instead of laminate can add $2,000 to $4,000 on its own — it&apos;s more expensive material and demands more skilled labor to apply cleanly around corners and reveals. Solid-wood doors in a paint-grade or stain-grade species push it further.</p>
            <p>Cabinet count matters more than most people expect. A large kitchen with an island, a pantry wall, and 25-plus doors and drawers effectively doubles the material and labor of a galley kitchen. Add soft-close hinges, new hardware, glass inserts, or a matching range hood surround, and you&apos;re firmly above $12,000.</p>
            <blockquote className="article-quote">
              The number one thing that blows up a refacing budget isn&apos;t the doors — it&apos;s discovering the boxes underneath aren&apos;t worth saving. At that point you&apos;re paying to reface junk.
              <cite>— kitchen remodeler, 18 years in the trade</cite>
            </blockquote>


            <h2>The Hidden Variables: Region, Permits, and Labor</h2>
            <p>Where you live moves the number as much as what you choose. Labor rates in major metros — coastal California, the Northeast corridor, Seattle — can run 30 to 50 percent higher than in the rural Midwest or South. That alone can shift an identical job by $2,000 to $3,000.</p>
            <p>Permitting usually isn&apos;t required for pure refacing since you&apos;re not touching plumbing, electrical, or structure — but if your project creeps into modifying cabinet layouts or adding electrical for under-cabinet lighting, permit fees and inspections enter the picture. And in a tight labor market, good finish carpenters book out months ahead and price accordingly. A quiet season can save you real money; a construction boom in your area will cost you.</p>


            <h2>Are Your Boxes Even Worth It?</h2>
            <p>Refacing only makes financial sense if the underlying cabinet boxes are structurally sound. Check for water damage under the sink, sagging shelves, delaminating particleboard, and doors that no longer hang square. If your boxes are 1990s-or-newer plywood or solid wood in good shape, refacing is a smart spend. If they&apos;re crumbling melamine or you&apos;re fighting layout problems, that $12,000 reface is money better put toward replacement.</p>
            <p>The honest verdict: refacing is one of the best-return kitchen updates available — when the bones are good and you know exactly what your materials and labor market will cost before you sign anything.</p>
            <p>Before you commit to a number, get real quotes from vetted local pros who put your payment in escrow until the work is done right.</p>
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
