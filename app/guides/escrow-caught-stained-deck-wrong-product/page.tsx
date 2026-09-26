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
          <div className="hero-badge">Escrow Effect · September 2026</div>
          <h1>The Deck Was Sealed With the Wrong Product. Escrow Meant the Homeowner Didn&apos;t Pay for a Redo.</h1>
          <p className="hero-subtitle">A homeowner spec&apos;d a semi-transparent stain rated for their climate. The crew used a leftover solid-color sealer that peeled within one season. Because the final payment sat in escrow, the homeowner didn&apos;t fund the mistake — the contractor came back and did it right.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$4,200. That was the final payment sitting in escrow when the homeowner noticed the deck stain starting to peel eleven months after the crew wrapped up.</p>
            <p>The project itself had gone smoothly. A 480-square-foot cedar deck, sanded, cleaned, and finished over three days by a small two-person crew with good reviews. The homeowner had done their homework — they&apos;d spec&apos;d a semi-transparent stain rated for freeze-thaw cycles and heavy UV exposure, the kind of product that flexes with the wood instead of sitting on top of it. On paper, everything lined up.</p>
            <p>What didn&apos;t line up was the can that actually came out of the truck.</p>


            <h2>The Wrong Product in the Can</h2>
            <p>The crew had a nearly full pail of solid-color deck sealer left over from a previous job. It was a good product for the wrong application — a film-forming coating meant for older, weathered wood that needs the grain hidden, not fresh cedar that a homeowner wanted to show off. Solid-color sealer also behaves completely differently through a wet-winter, hot-summer swing. It cracks, lifts, and peels in sheets instead of fading gracefully.</p>
            <p>By the following spring, the deck looked like it was shedding. Long strips of finish curled up along the boards nearest the downspout. The homeowner didn&apos;t need a materials expert to see something had gone wrong — they just needed to compare what they&apos;d approved to what they were looking at.</p>
            <blockquote className="article-quote">
              The color was wrong the day it dried. I told myself I was imagining it. Ten months later I wasn&apos;t imagining the peeling.
              <cite>— the homeowner, recounting the project</cite>
            </blockquote>


            <h2>Why the Money Never Left</h2>
            <p>Here&apos;s the part that changed the outcome. The final $4,200 wasn&apos;t paid out at the end of the job on a handshake and a smile. It was held in escrow, released only when the finished work matched the scope both sides had agreed to at the start — including the specific product.</p>
            <p>That single detail flipped the entire conversation. In the version of this story where the homeowner had already paid in full, they&apos;d be chasing a contractor who had every reason to stop returning calls. Redoing a deck is a real cost in labor and materials, and an already-paid contractor absorbs all of it with nothing to gain. The math quietly pushes toward ghosting.</p>
            <p>With the payment still in escrow, the incentives reversed. The contractor couldn&apos;t access the balance until the work was right — and the fastest path to getting paid was to come back and make it right.</p>


            <h2>The Redo Nobody Fought Over</h2>
            <p>There was no threat, no small-claims filing, no review-site war. The homeowner pointed to the agreed scope. The stain was semi-transparent, climate-rated, spelled out before a single board was touched. What went on was neither. That wasn&apos;t a matter of opinion.</p>
            <p>The contractor stripped the failed coating, re-sanded, and applied the correct semi-transparent stain the following month. It cost them a weekend and a fresh set of materials — but it also cost them nothing in reputation, because the job closed clean and the escrow released the same day the second coat cured.</p>
            <p>The homeowner paid exactly once, for exactly what they&apos;d specified. The contractor got paid in full for a deck they could photograph for their portfolio. The only thing that was ever really at risk was the wrong pail of sealer.</p>


            <h2>What Actually Did the Work</h2>
            <p>Notice what solved this. It wasn&apos;t a lawyer. It wasn&apos;t a stack of screenshots or a Yelp review written in all caps. It was a payment structure that made &quot;do it right&quot; the profitable choice instead of the charitable one.</p>
            <p>Escrow doesn&apos;t assume anyone is a villain. Most contractors want to do good work, and most homeowners want to pay for it. What escrow does is remove the moment where one side holds all the money and the other side holds all the risk — the exact gap where good intentions quietly turn into unanswered texts.</p>
            <p>If you&apos;re a homeowner about to fund a project on the honor system, the fix is boring and it works: define the scope, then hold the final payment until the scope is met.</p>
          </div>

          <div className="article-footer">
            <Link href="/guides" className="article-back">← Back to Guides</Link>
            <a href="/create" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>Set up your project on clrblt.com/create →</a>
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
