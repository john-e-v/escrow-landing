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
          <div className="hero-badge">Cost &amp; ROI · August 2026</div>
          <h1>Is a Sunroom Addition Worth It? Cost, ROI, and When It Backfires</h1>
          <p className="hero-subtitle">A sunroom addition rarely pays for itself at resale, returning roughly 45-55% of its cost. The verdict flips only when it&apos;s built on a proper foundation with heating and cooling that makes it count as year-round living space.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>It depends on one thing: whether the sunroom counts as heated, year-round living space. If it does, you&apos;re looking at a return worth chasing. If it doesn&apos;t, a sunroom addition returns roughly 45–55% of its cost at resale — one of the weakest ROIs of any home addition.</p>
            <p>That&apos;s the verdict. Now the math.</p>


            <h2>The Numbers</h2>
            <p>A three-season sunroom — screened or glass-enclosed, sitting on a slab or existing deck, no HVAC — runs $15,000 to $35,000 depending on size and glazing. At resale, appraisers rarely add it to your square footage because it isn&apos;t conditioned space. You recoup somewhere between $7,000 and $19,000 of that. Call it 45–55%.</p>
            <p>A four-season room changes the equation. Built on a proper foundation, insulated, and tied into your home&apos;s heating and cooling, it costs $30,000 to $80,000 — but it gets counted as living area. That pushes returns into the 60–70% range, and in hot markets where finished square footage is scarce, some owners report near-full recovery.</p>
            <p>Payback in pure resale terms is never 100% — this is not a kitchen remodel. But the use-value while you live there is real: a room you actually occupy 300 days a year is worth more to you than a spreadsheet suggests.</p>
            <blockquote className="article-quote">
              The cheapest sunroom is the most expensive per dollar recovered. A slab-and-screen room feels like savings until the appraiser won&apos;t count a square foot of it.
              <cite>— residential appraiser, on three-season additions</cite>
            </blockquote>


            <h2>When It Backfires</h2>
            <p>The verdict flips hard when the build cuts corners on the foundation or the climate control.</p>
            <p>A sunroom dropped onto an old deck without footings will heave, sag, and leak within a few winters — and now you&apos;re paying to demolish it before you can sell. A glass room with no HVAC becomes an oven in July and a freezer in January, meaning nobody uses it and no appraiser credits it. Either failure turns a 55% return into a liability that lowers your asking price.</p>
            <p>The other trap is over-building for the neighborhood. An $80,000 four-season room on a $250,000 house won&apos;t find a buyer willing to pay for it. Match the addition to your home&apos;s value tier, or you&apos;re subsidizing the next owner.</p>


            <h2>The Bottom Line</h2>
            <p>Build it cheap on a slab with no heat, and a sunroom is a lifestyle purchase you&apos;ll never see again at resale. Build it right — real foundation, insulation, and HVAC that makes it count as living space — and it becomes an asset that returns 60–70% and gets used every day.</p>
            <p>The difference between those two outcomes is entirely in the execution, which means it&apos;s entirely in who you hire. A contractor who understands foundation depth, glazing ratios, and how to tie into your existing HVAC is the whole ballgame here.</p>
            <p>Before you commit tens of thousands to a room whose value hinges on getting the details right, line up builders who&apos;ll put the money in escrow and release it as the work passes inspection — so a heaved slab or a skipped step is their problem to fix, not yours to eat.</p>
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
