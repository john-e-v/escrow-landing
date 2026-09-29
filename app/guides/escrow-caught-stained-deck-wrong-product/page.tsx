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
          <h1>The Deck Was Sealed With the Wrong Product. A Seasonal Holdback Meant the Homeowner Didn&apos;t Pay for a Redo.</h1>
          <p className="hero-subtitle">A homeowner spec&apos;d a semi-transparent stain rated for their climate. The crew used a leftover solid-color sealer that peeled within one season. Because the contract held back a slice of payment specifically to survive one weather cycle, the homeowner didn&apos;t fund the mistake — the contractor came back and did it right.</p>
        <p className="hero-subtitle" style={{ fontSize: '0.85rem', opacity: 0.65, marginTop: 8 }}>Illustrative example — a realistic scenario built from common escrow-protected outcomes, not a report of one specific, documented case.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$4,200. That was a deliberate 10% holdback on an otherwise fully-paid $42,000 deck job — money the homeowner had agreed to release only after the finish survived one full freeze-thaw cycle. Eleven months after the crew wrapped up, that clause was the only reason a bad can of stain didn&apos;t become the homeowner&apos;s problem.</p>
            <p>The project itself had gone smoothly. A 480-square-foot cedar deck, sanded, cleaned, and finished over three days by a small two-person crew with good reviews. The homeowner had done their homework — they&apos;d spec&apos;d a semi-transparent stain rated for freeze-thaw cycles and heavy UV exposure, the kind of product that flexes with the wood instead of sitting on top of it. They&apos;d also done something less common: they&apos;d asked the contractor to hold 10% of the final payment for a full season, specifically because a stain failure doesn&apos;t show up on the day the crew packs up — it shows up after the first real winter.</p>
            <p>What didn&apos;t line up was the can that actually came out of the truck.</p>


            <h2>The Wrong Product in the Can</h2>
            <p>The crew had a nearly full pail of solid-color deck sealer left over from a previous job. It was a good product for the wrong application — a film-forming coating meant for older, weathered wood that needs the grain hidden, not fresh cedar that a homeowner wanted to show off. Solid-color sealer also behaves completely differently through a wet-winter, hot-summer swing. It cracks, lifts, and peels in sheets instead of fading gracefully.</p>
            <p>By the following spring, the deck looked like it was shedding. Long strips of finish curled up along the boards nearest the downspout. The homeowner didn&apos;t need a materials expert to see something had gone wrong — they just needed to compare what they&apos;d approved to what they were looking at.</p>
            <blockquote className="article-quote">
              The color was wrong the day it dried. I told myself I was imagining it. Ten months later I wasn&apos;t imagining the peeling.
              <cite>— the homeowner, recounting the project</cite>
            </blockquote>


            <h2>Why the Holdback Was the Right Call</h2>
            <p>Here&apos;s the part that changed the outcome. 90% of the job was paid out normally, right after the final walkthrough — that money was never in question. But the last $4,200 was structured as a defined holdback, held in escrow with one explicit release condition: the finish had to hold through a full season before it counted as done. That&apos;s a term you set up front, not something escrow does automatically on every job — most milestones release within days of a passed walkthrough. This one was written to last longer because the failure mode was slow.</p>
            <p>That single detail flipped the entire conversation. In the version of this story where the homeowner had already paid in full, they&apos;d be chasing a contractor who had every reason to stop returning calls once a season had passed and the invoice was long settled. Redoing a deck is a real cost in labor and materials, and an already-paid contractor absorbs all of it with nothing to gain. The math quietly pushes toward ghosting.</p>
            <p>With the holdback still in escrow, the incentives reversed. The contractor couldn&apos;t access that last slice until the work was right — and the fastest path to getting paid was to come back and make it right.</p>


            <h2>The Redo Nobody Fought Over</h2>
            <p>There was no threat, no small-claims filing, no review-site war. The homeowner pointed to the agreed scope. The stain was semi-transparent, climate-rated, spelled out before a single board was touched. What went on was neither. That wasn&apos;t a matter of opinion.</p>
            <p>The contractor stripped the failed coating, re-sanded, and applied the correct semi-transparent stain the following month. It cost them a weekend and a fresh set of materials — but it also cost them nothing in reputation, because the job closed clean and the holdback released the same day the second coat cured.</p>
            <p>The homeowner paid exactly once, for exactly what they&apos;d specified. The contractor got paid in full for a deck they could photograph for their portfolio. The only thing that was ever really at risk was the wrong pail of sealer.</p>


            <h2>What Actually Did the Work</h2>
            <p>Notice what solved this. It wasn&apos;t a lawyer. It wasn&apos;t a stack of screenshots or a Yelp review written in all caps. It was a payment structure that made &quot;do it right&quot; the profitable choice instead of the charitable one — and, in this case, a holdback term that was set up before the first board was cut, specifically because both sides knew a stain failure takes a season to show.</p>
            <p>Escrow doesn&apos;t assume anyone is a villain. Most contractors want to do good work, and most homeowners want to pay for it. What escrow does is remove the moment where one side holds all the money and the other side holds all the risk — the exact gap where good intentions quietly turn into unanswered texts.</p>
            <p>If you&apos;re a homeowner about to fund a project where the real test only comes after a season of weather, the fix is boring and it works: pay the bulk of the job on completion like normal, and write a small, specific holdback into the scope for the one failure mode that takes time to surface.</p>
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
