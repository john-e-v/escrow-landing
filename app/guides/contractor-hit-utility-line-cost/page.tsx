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
          <div className="hero-badge">Hidden Cost · August 2026</div>
          <h1>The Contractor Hit a Gas Line Digging Your Trench. Who Pays the $18K?</h1>
          <p className="hero-subtitle">A skipped 811 call turned a $6K sewer line replacement into an $18K emergency involving a severed gas main, evacuated neighbors, and a utility company invoice. Here&apos;s who actually eats the cost—and the payment structure that keeps you from paying for someone else&apos;s shortcut.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>The utility company&apos;s invoice came to $11,400. The gas main repair, the emergency crew callout, the temporary shutdown to 40 homes on the block. Add the $6,000 the homeowner had already agreed to pay for the sewer line replacement, and the total sat at $17,400 before anyone talked about the neighbor&apos;s damaged fence or the two nights three families spent in a hotel.</p>
            <p>The contractor didn&apos;t call 811. That&apos;s the whole story, compressed into one sentence. Everything downstream of that decision is just accounting.</p>


            <h2>What Actually Happened</h2>
            <p>The job was routine. A cracked sewer lateral running from the house to the city main, roughly 60 feet, about 4 feet deep. A licensed plumber quoted $6,000 and said he could start Thursday. The homeowner paid $3,000 up front—half now, half on completion, the way it usually goes.</p>
            <p>Thursday morning the crew brought in a mini excavator and started trenching. Nobody had marked the utilities. In most states you&apos;re legally required to call 811 at least two to three business days before you dig, and the locating service comes out free to paint the ground where gas, electric, water, and telecom lines run. That call takes about ten minutes. It didn&apos;t happen.</p>
            <p>At roughly 3 feet down, the excavator bucket caught a 1.25-inch polyethylene gas service line that had been installed at a shallow depth years earlier. It sheared clean. The smell hit within seconds. The crew evacuated, the fire department shut the block, and the gas utility rolled an emergency crew that treated it as a live hazard—which it was.</p>
            <blockquote className="article-quote">
              The ten-minute call would have cost nothing. Skipping it cost more than triple the price of the job.
              <cite>— damage claims adjuster, underground utility incidents</cite>
            </blockquote>


            <h2>Who Pays</h2>
            <p>Legally, the contractor. Failure to call 811 is negligence, and in a clean world his general liability policy absorbs the utility invoice, the neighbor&apos;s fence, and the hotel bills. That&apos;s what insurance is for.</p>
            <p>The problem is what happens in the gap between &quot;legally the contractor&quot; and &quot;actually paid.&quot; Small operators are often underinsured or carry policies with exclusions for utility strikes. Claims get disputed. The utility company, meanwhile, doesn&apos;t care about the contract between you and the plumber—their invoice goes to the property owner, because it&apos;s your property the line served. You become the collection target while you sue your contractor to get made whole.</p>
            <p>And here&apos;s the part that stings: the homeowner had already handed over $3,000. When the contractor&apos;s insurance stalled and the utility started calling, that $3,000 was gone—spent on a trench that now needed to be re-permitted and redone by someone else. The homeowner was out the deposit, staring at an $11,400 utility bill, and negotiating with two insurance companies at once.</p>


            <h2>The Structural Fix</h2>
            <p>You can&apos;t force a contractor to call 811. But you can control when your money changes hands—and that changes the whole risk math.</p>
            <p>With milestone-based escrow, the deposit doesn&apos;t go to the contractor on day one. It sits in a neutral account and releases only when defined checkpoints are met. For a dig job, the first release condition is simple and non-negotiable: proof of the 811 ticket number and dated utility markings before the excavator touches dirt. No ticket, no release, no dig.</p>
            <p>That single condition would have stopped this cold. A contractor who knows his deposit is locked until he produces a locate ticket makes the ten-minute call. And if he walks away rather than do it right, you&apos;ve lost nothing—the money never left escrow. You&apos;re not chasing a $3,000 deposit through small claims while the gas company invoices you for someone else&apos;s shortcut.</p>
            <p>Escrow doesn&apos;t make bad contractors good. It makes their corners expensive to cut before the corner gets cut—which is the only point that matters.</p>
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
