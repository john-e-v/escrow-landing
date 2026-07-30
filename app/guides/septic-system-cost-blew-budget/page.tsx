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
          <h1>The Septic Surprise: Why Your $12K Job Became a $34K Dig</h1>
          <p className="hero-subtitle">A failed perc test turned a routine septic replacement into a five-figure engineering project. The homeowner had already paid the full deposit on a number that no longer existed. Here&apos;s how the budget unraveled and what would have stopped the bleed.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>The final invoice read $34,180. The signed contract said $12,400. The homeowner had already handed over a $6,200 deposit — half of a number that stopped existing the moment the excavator hit clay.</p>
            <p>Here is what happened, and why the money was gone before anyone knew there was a problem.</p>
            <p>The job was supposed to be routine: replace a 30-year-old septic tank on a half-acre lot in a rural county. The contractor quoted $12,400 flat — tank, standard drain field, permit, backfill. The homeowner paid 50% up front because that&apos;s what the contractor asked for, and $6,200 felt reasonable for a job that size. Work was scheduled to start in three weeks.</p>


            <h2>Where the number died</h2>
            <p>The original quote assumed the existing drain field could be reused or lightly refreshed. It couldn&apos;t. When the county required a fresh perc test before issuing the permit, the soil failed — water sat in the test hole for over four hours instead of draining in the required window.</p>
            <p>A failed perc test means the standard gravity drain field is off the table. The county now required an engineered mound system: a raised, sand-filled bed with a pump chamber to push effluent uphill against the soil&apos;s refusal to absorb it. That&apos;s not a bigger version of the same job. It&apos;s a different job.</p>
            <p>The revised scope: a $2,800 engineered design and soil report, a $4,500 pump and control system, roughly 40 tons of specified sand fill, additional excavation, and a second permit review. The line items stacked to $34,180.</p>
            <blockquote className="article-quote">
              The homeowner thought they were buying a tank swap. The county was requiring a wastewater treatment system. Same hole, completely different project.
              <cite>— septic installer, 15 years in rural permitting</cite>
            </blockquote>


            <h2>Why the deposit made it worse</h2>
            <p>The $6,200 wasn&apos;t just spent — it was structurally committed to a plan that no longer applied. The contractor had ordered the standard tank and booked the crew against that original scope. When the perc failed, the homeowner was told the deposit had already gone toward materials and mobilization.</p>
            <p>So the choice became: walk away and eat the $6,200, or fund the difference on a $34K project they never agreed to. There was no clean exit, because the money had already changed hands with nothing tying its release to actual, verified progress.</p>
            <p>The perc test — the single thing that determined whether this was a $12K job or a $34K job — happened *after* the deposit cleared. The most important variable in the entire project was resolved on the wrong side of the payment.</p>


            <h2>What would have stopped the bleed</h2>
            <p>A milestone payment structure would have caught this before a dollar was at risk. The first release should never be tied to &quot;signing&quot; — it should be tied to permit approval, which requires a passing perc test.</p>
            <p>Under that structure, the sequence flips: perc test first, permit second, then the deposit releases against a scope that&apos;s actually been validated by the county. A failed perc surfaces the mound-system reality while the homeowner still has full leverage — they can renegotiate, re-bid, or walk, with their money intact.</p>
            <p>Escrow enforces the same logic. Funds sit held, and each release is gated behind a verifiable milestone: permit issued, tank set, drain field inspected, backfill passed. The contractor still gets paid on schedule for real work. But nobody gets to spend a deposit against a number that a soil test is about to erase.</p>
            <p>The failure here wasn&apos;t the clay. Bad soil is a known risk on rural lots. The failure was paying for certainty before certainty existed.</p>
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
