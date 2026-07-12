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
          <div className="hero-badge">Cost &amp; Timeline · July 2026</div>
          <h1>How Much Does It Cost to Refinish Hardwood Floors in 2026?</h1>
          <p className="hero-subtitle">Refinishing hardwood floors runs $3 to $8 per square foot in 2026, or $1,100 to $2,900 for a typical room. This guide breaks down what pushes you toward the high end and how long you&apos;ll be locked out of the room.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Refinishing hardwood floors runs $3 to $8 per square foot in 2026, or $1,100 to $2,900 for a typical 350-square-foot room. Whole-home projects covering 1,000 to 1,500 square feet land between $3,000 and $12,000. That&apos;s a wide spread, and it&apos;s wide for real reasons — not because contractors are guessing.</p>
            <p>Here&apos;s what actually moves your number, from the low end to the high end.</p>


            <h2>Scope: Sand-and-Recoat vs. Full Refinish</h2>
            <p>The single biggest lever is how much wood you&apos;re actually removing. A screen-and-recoat — light buffing plus a fresh topcoat — runs $1 to $3 per square foot and is done in a day. It works only if your finish is worn but the wood underneath is clean.</p>
            <p>A full refinish means sanding down to bare wood, staining, and applying three coats. That&apos;s the $3 to $8 range. If your floors have deep gouges, pet stains that soaked into the grain, or water damage, you&apos;re paying the top of that band — and possibly for board replacement on top of it.</p>


            <h2>Materials: The Finish You Choose Changes Everything</h2>
            <p>Oil-based polyurethane is the cheapest coating and the most forgiving to apply, but it yellows over time and takes days to cure. Water-based poly costs 30 to 50 percent more and cures faster with a clearer look. Hard-wax oils and penetrating finishes — the matte, natural look that&apos;s trending in 2026 — can push materials alone to $2 per square foot.</p>
            <p>Stain adds another layer of cost and labor. A clear finish is fastest; a custom stain color means an extra application day and more product.</p>
            <blockquote className="article-quote">
              People assume the sanding is the expensive part. It&apos;s usually the finish and the number of coats that separate a $1,500 job from a $3,000 one.
              <cite>— Flooring contractor, 18 years in the trade</cite>
            </blockquote>


            <h2>Region and Labor Market</h2>
            <p>Labor is 60 to 70 percent of a refinishing bill, so where you live matters more than almost anything else. Expect to pay $5 to $8 per square foot in high-cost metros like San Francisco, Boston, or Seattle. In the Midwest and rural South, the same job can land at $3 to $4.</p>
            <p>Demand also swings seasonally. Spring and early fall are peak — everyone wants floors done before holidays or after winter. Book in January or midsummer and you&apos;ll often find better rates and shorter waits.</p>


            <h2>How Long You&apos;re Locked Out of the Room</h2>
            <p>Plan on three to five days for a single full-refinish room, and don&apos;t cut this short. Sanding takes a day. Staining plus three coats of finish is another two to three days, with cure time between each coat.</p>
            <p>The real number that trips people up is walk time. You can walk in socks after 24 hours, move furniture back after four to five days, and lay down rugs only after two full weeks — the finish keeps curing underneath even when it feels dry. Oil-based finishes stretch that timeline; water-based shortens it.</p>
            <p>For a screen-and-recoat, you&apos;re back in the room the next morning. That difference alone is worth asking your contractor about before you commit to a full sand.</p>


            <h2>Getting a Number You Can Trust</h2>
            <p>The gap between $1,100 and $2,900 for a single room comes down to a handful of decisions you make with your contractor: how much wood to remove, which finish to use, and when to schedule. A good pro will walk your floors, test a sample corner, and give you a written breakdown instead of a lump-sum guess.</p>
            <p>Before you hand over a deposit, it&apos;s worth matching with contractors who&apos;ll put your payment in escrow — so the money releases as the work gets done, not before.</p>
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
