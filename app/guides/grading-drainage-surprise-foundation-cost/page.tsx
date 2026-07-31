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
          <div className="hero-badge">Hidden Cost · July 2026</div>
          <h1>The Grading Mistake That Turned a $8K Patio Into a $27K Foundation Fix</h1>
          <p className="hero-subtitle">A backyard patio poured on the wrong slope sent water toward the house for two winters before the basement flooded. The repair cost more than triple the original job. Here&apos;s why nobody caught it, and the payment structure that would have.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>The final repair bill was $27,400. The original patio cost $8,000.</p>
            <p>A homeowner in a suburb outside Cleveland hired a contractor to pour a 400-square-foot concrete patio off the back of the house. The job was clean. The finish was smooth. It looked exactly like the photo in the contractor&apos;s portfolio. Final payment was released the day the forms came off. Everyone shook hands.</p>
            <p>The problem was invisible until it wasn&apos;t: the patio was poured with a slope of roughly a quarter inch per foot running toward the house instead of away from it.</p>


            <h2>Why nobody caught it</h2>
            <p>Concrete grading failures don&apos;t announce themselves. On a dry day, a patio sloped the wrong way looks identical to one sloped correctly. You cannot eyeball a quarter inch per foot across twelve feet of slab. The homeowner didn&apos;t own a laser level, and even if they had, they wouldn&apos;t have known to check.</p>
            <p>The first winter, snowmelt pooled against the foundation and soaked into the soil. Freeze-thaw cycles did the rest. By the second spring, hydrostatic pressure had opened a hairline crack in the basement wall. Water followed.</p>
            <p>The flood came in March of the second year. Two inches of standing water in a finished basement — ruined drywall, ruined carpet, a dead water heater, and a foundation crack that now needed excavation, exterior waterproofing membrane, and a French drain to fix properly.</p>
            <blockquote className="article-quote">
              Nobody signs off on grading. It&apos;s the one measurement that costs nothing to get right and everything to get wrong.
              <cite>— Foundation repair estimator, Ohio</cite>
            </blockquote>


            <h2>The real cost breakdown</h2>
            <p>The $8,000 patio became a $27,400 problem:</p>
            <p>— Foundation crack repair and exterior excavation: $11,200
— French drain and regrading: $6,800
— Basement water damage remediation: $5,900
— New water heater: $1,500
— Removing and re-pouring the patio at the correct slope: $2,000 (the original contractor was long gone and unreachable)</p>
            <p>The original contractor had been paid in full within 24 hours of finishing. There was no leverage, no retained funds, no reason for anyone to come back and verify the slope held up under real conditions. By the time the failure surfaced, the money was spent and the paper trail had gone cold.</p>


            <h2>The fix that would have caught it</h2>
            <p>The single measurement that would have prevented all of this — slope away from the foundation — is verifiable on day one with a level and five minutes. The problem wasn&apos;t skill. It was that final payment was released before anyone confirmed the work actually protected the house it was attached to.</p>
            <p>A milestone escrow structure changes the incentive. Funds sit in escrow and release against confirmed conditions, not against a smooth-looking surface. A final milestone tied to a documented slope check — laser level reading, photographed, away from the foundation — means the contractor doesn&apos;t get the last payment until the one number that matters is on record.</p>
            <p>That&apos;s not distrust. It&apos;s the difference between a contractor who knows their grading will be checked and one who knows it never will. The first one gets it right the first time. The second one poured this patio.</p>
            <p>Escrow doesn&apos;t make bad work impossible. It makes the invisible failures visible before the money is gone — while you still have leverage to make it right.</p>
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
