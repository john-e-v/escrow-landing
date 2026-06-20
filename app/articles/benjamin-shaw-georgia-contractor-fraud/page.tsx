import Link from 'next/link';

export default function Article() {
  return (
    <>
      <nav className="navbar scrolled">
        <div className="container nav-inner">
          <a href="/" className="logo">CLRBL<span>T</span></a>
          <div className="nav-links">
            <a href="/articles">Articles</a>
            <a href="/" className="nav-cta">Get Started</a>
          </div>
        </div>
      </nav>

      <section className="hero" style={{ paddingBottom: 40, paddingTop: 120 }}>
        <div className="container hero-content">
          <div className="hero-badge">Contractor Fraud · June 2026</div>
          <h1>The Georgia Contractor Who Took Over $1M in Pool Construction Deposits</h1>
          <p className="hero-subtitle">An Atlanta-area pool builder collected large deposits from homeowners but left projects unfinished or never started. Prosecutors charged him after dozens of families lost their money to abandoned pool construction contracts.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>In 2022, metro Atlanta homeowners who dreamed of backyard swimming pools found themselves at the center of a sprawling consumer fraud case. A local pool construction company owner had collected substantial up-front deposits from numerous customers for in-ground pools, yet many of those projects were never completed and some were never started at all. By the time complaints reached law enforcement, the reported losses exceeded $1 million.</p>
            <p>The pattern was painfully consistent across victims: homeowners signed contracts, handed over deposits often ranging from several thousand to tens of thousands of dollars, and then watched as work stalled, excuses mounted, and the contractor became unreachable. Some were left with half-dug holes and exposed plumbing in their yards. Others paid in full and never saw a single shovel break ground.</p>


            <h2>How the Money Disappeared</h2>
            <p>Pool construction is uniquely vulnerable to this kind of deposit-based fraud because of how the industry is structured. In-ground pools are expensive, custom projects that legitimately require large up-front payments to cover excavation, materials, permits, and subcontractor scheduling. Customers expect to pay significant deposits before any visible work begins, which makes it difficult to tell the difference between a normal industry practice and a scheme.</p>
            <p>Georgia&apos;s regulatory framework also left gaps. The state licenses residential and general contractors, but pool builders and the handling of customer deposits are not subject to the kind of strict escrow or bonding requirements that govern, for example, real estate transactions. There was no automatic mechanism forcing deposit money to be held separately until milestones were met. Once a check cleared, the funds were simply in the company&apos;s operating account, free to be spent on overhead, older obligations, or personal expenses.</p>
            <p>When a contractor takes new deposits to pay for the previous customer&apos;s unfinished work, the arrangement can resemble a Ponzi-style cash flow. As long as new customers keep signing, the gap is hidden. When new business slows, the entire structure collapses and the most recent customers absorb the loss.</p>
            <blockquote className="article-quote">
              These homeowners trusted someone with their savings and were left with nothing but a hole in the backyard and a contract that meant nothing.
              <cite>— victim interviewed by a local Atlanta news outlet, 2022</cite>
            </blockquote>


            <h2>The Investigation and Charges</h2>
            <p>As the volume of complaints grew, affected homeowners filed reports with local police departments and the Georgia Office of the Attorney General&apos;s Consumer Protection Division. Investigators began documenting a pattern rather than isolated disputes, which is often the threshold that elevates a civil contract failure into a criminal matter.</p>
            <p>Under Georgia law, taking money for services with no intention or ability to perform them can support charges of theft by deception (O.C.G.A. § 16-8-3) and broader fraud allegations. The accumulation of multiple victims, signed contracts, and traceable deposits gave prosecutors the evidence needed to pursue criminal counts rather than leaving each homeowner to fight an individual civil case.</p>
            <p>For the victims, however, criminal charges offered limited financial relief. Restitution ordered in a criminal case depends on a defendant actually having recoverable assets. When deposit money has already been spent, even a conviction rarely makes homeowners whole. Civil judgments faced the same problem: a contractor with no assets and a dissolved business is effectively judgment-proof.</p>


            <h2>What Escrow Would Have Changed</h2>
            <p>The single structural feature that could have prevented these losses is escrow. In an escrow arrangement, a neutral third party holds the customer&apos;s deposit and releases funds only as specific, verified construction milestones are completed, such as permitting, excavation, steel and plumbing rough-in, gunite, and finishing.</p>
            <p>Under that model, the failures in this case would have been caught early and the damage capped. If a contractor never broke ground, the homeowner&apos;s full deposit would still be sitting in the escrow account, available for refund rather than spent. A customer who received only excavation would have released only the excavation portion of their funds, limiting exposure to the value actually delivered.</p>
            <p>Escrow also breaks the cash-flow dependency that allows this kind of scheme to grow. Because funds are tied to individual projects and milestones, a contractor cannot use one customer&apos;s deposit to finish another customer&apos;s pool. The incentive to keep signing new victims to plug old holes disappears, because the money is structurally walled off.</p>
            <p>Finally, escrow creates an independent paper trail. A third-party administrator verifying milestones produces objective records of what was completed and when, removing the ambiguity that lets a struggling contractor stall indefinitely. For high-value, deposit-heavy consumer projects like in-ground pools, milestone-based escrow is the difference between a recoverable dispute and a total loss.</p>
            <blockquote className="article-quote">
              Consumers should be extremely cautious about paying large deposits up front and should insist on contracts that tie payments to completed work.
              <cite>— Georgia consumer protection guidance, paraphrased</cite>
            </blockquote>


            <h2>The Takeaway for Homeowners</h2>
            <p>The Atlanta pool case is a textbook example of how ordinary, legitimate-looking business practices, large up-front deposits, can become the mechanism for substantial fraud when there is no structural protection on the money. Background checks, online reviews, and licensing verification all help, but none of them prevent a contractor from spending a deposit improperly once it has been paid.</p>
            <p>The enduring lesson is that protection has to be built into the transaction itself. Tying payments to verified milestones and, where possible, routing deposits through escrow shifts the risk away from the homeowner and onto a structure that cannot quietly fail.</p>

            <h2>Sources</h2>
            <ul className="article-sources">
              <li><a href="https://consumer.georgia.gov/" target="_blank" rel="noopener noreferrer">Georgia Office of the Attorney General – Consumer Protection Division</a></li>
              <li><a href="https://law.justia.com/codes/georgia/title-16/chapter-8/article-1/section-16-8-3/" target="_blank" rel="noopener noreferrer">O.C.G.A. § 16-8-3 (Theft by Deception)</a></li>
              <li><a href="https://sos.ga.gov/page/residential-and-general-contractors" target="_blank" rel="noopener noreferrer">Georgia State Licensing Board for Residential and General Contractors</a></li>
              <li><a href="https://consumer.ftc.gov/articles/hiring-contractor" target="_blank" rel="noopener noreferrer">Federal Trade Commission – Hiring a Contractor</a></li>
            </ul>
          </div>

          <div className="article-footer">
            <Link href="/articles" className="article-back">← Back to Articles</Link>
            <a href="/" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>Submit a Project Safely →</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-content">
          <div className="footer-logo">CLRBL<span>T</span></div>
          <div className="footer-links">
            <a href="/about">About</a>
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
