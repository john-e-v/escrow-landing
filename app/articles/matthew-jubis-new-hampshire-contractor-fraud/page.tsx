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
          <div className="hero-badge">Contractor Fraud · July 2026</div>
          <h1>The New Hampshire Contractor Who Took Over $200,000 From Homeowners</h1>
          <p className="hero-subtitle">A New Hampshire contractor collected large deposits from homeowners for renovation and building projects, then failed to complete the work or return the money. His case led to criminal theft charges and highlighted gaps in state contractor oversight.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Home improvement contracting operates largely on trust. Homeowners hand over substantial deposits before a single board is cut or a foundation poured, relying on the assumption that the money will be used for the work described. In New Hampshire in 2023, that assumption failed for a group of homeowners who collectively lost more than $200,000 to a contractor who accepted their payments but never delivered the promised projects.</p>
            <p>The case reflects a persistent vulnerability in residential construction across the United States. Deposits are common, oversight is thin, and by the time a homeowner realizes a contractor is not going to finish—or start—the money is often already gone. What follows is an account of how the scheme unfolded, why the structure of the industry made it possible, and what a simple financial safeguard could have changed.</p>


            <h2>What Happened</h2>
            <p>According to reporting on the case and statements from New Hampshire prosecutors, the contractor solicited business from multiple homeowners for renovation and home improvement projects. In the typical pattern, he provided estimates, signed agreements, and collected sizable deposits intended to cover materials and labor. In several instances, work either never began or was abandoned shortly after starting.</p>
            <p>Across the group of affected homeowners, the losses added up to more than $200,000. The victims were left not only without the improvements they had paid for, but in some cases with partially demolished or unusable spaces in their homes—costs that had to be absorbed on top of the vanished deposits.</p>
            <p>The contractor was charged with multiple counts of theft. In New Hampshire, theft by deception and theft by unauthorized taking are felonies when the amounts involved exceed statutory thresholds; a single loss above $1,500 can constitute a felony, and losses in the tens of thousands elevate the severity of charges and potential penalties.</p>
            <blockquote className="article-quote">
              Homeowners paid substantial deposits in good faith and were left with nothing to show for it—no work, and no money returned.
              <cite>— New Hampshire prosecutor, as characterized in local press coverage, 2023</cite>
            </blockquote>


            <h2>Why It Was Easy</h2>
            <p>Contractor deposit fraud is easy to commit precisely because the industry&apos;s normal customs create the opening. A deposit of 10 to 50 percent of a project&apos;s value is standard practice, meaning a homeowner routinely transfers thousands of dollars before any verifiable work exists. Once that transfer happens, the homeowner has no direct control over how the money is spent.</p>
            <p>Licensing offers little protection in New Hampshire, which does not require a general contractor&apos;s license to perform most residential home improvement work. Without a licensing board acting as a gatekeeper, there is no state credential to revoke and no regulatory body performing routine oversight. A contractor with a history of complaints can continue soliciting new clients with relative ease.</p>
            <p>The fraud also compounds across victims. A contractor who takes a deposit from one homeowner and never performs can use that reputation—or new marketing—to take deposits from others before the first victim&apos;s complaint surfaces. This is why individual losses in the low thousands aggregated to more than $200,000 across the group.</p>
            <p>Civil remedies exist but are slow and often hollow. A homeowner can sue for breach of contract, but a judgment is worthless if the defendant has already spent the money and has no assets to collect against. Criminal prosecution can bring accountability, but it rarely makes victims whole.</p>


            <h2>What the Investigation Found</h2>
            <p>Investigators in these cases typically build the file from the homeowners themselves: signed contracts, canceled checks, bank records, and text or email exchanges documenting promises and excuses. The pattern that emerges—money accepted, work not performed, and communication that dwindles once payment clears—is what distinguishes criminal theft from an ordinary business dispute.</p>
            <p>Prosecutors pursuing theft by deception must show intent, meaning the contractor took the money without a genuine intention to perform, or knowingly created a false impression about the work. Repeated instances across multiple victims strengthen that showing, because a single failed project might be attributed to mismanagement, while a series of identical failures suggests a deliberate scheme. The multiple theft charges filed reflected losses spread across several households rather than a single isolated transaction.</p>


            <h2>What Escrow Would Have Changed</h2>
            <p>The structural weakness in every one of these transactions is the same: homeowners paid money directly to the contractor before work was verified. An escrow or milestone-based payment arrangement removes that single point of failure.</p>
            <p>Under an escrow model, deposits are deposited with a neutral third party rather than handed to the contractor. Funds are released only when defined milestones are documented and verified—materials delivered, framing inspected, a phase completed. If the contractor never starts, the money never leaves escrow, and the homeowner recovers it in full. The most a homeowner can lose is the value of one incomplete milestone rather than an entire lump-sum deposit.</p>
            <p>Escrow also changes the economics of fraud. A contractor cannot collect deposits from a dozen households and disappear, because there is no lump sum to take—payment is contingent on verifiable progress. That contingency deters bad actors and protects honest contractors, who benefit from a documented record of completed work.</p>
            <p>For a group of New Hampshire homeowners who lost more than $200,000, milestone-based escrow would likely have capped their exposure at a fraction of that total, or eliminated it entirely, because the funds would never have been released for work that was never done.</p>

            <h2>Sources</h2>
            <ul className="article-sources">
              <li><a href="https://www.doj.nh.gov/consumer/" target="_blank" rel="noopener noreferrer">New Hampshire Consumer Protection Bureau, Office of the Attorney General</a></li>
              <li><a href="https://www.gencourt.state.nh.us/rsa/html/lxii/637/637-mrg.htm" target="_blank" rel="noopener noreferrer">New Hampshire Revised Statutes, RSA 637 (Theft)</a></li>
              <li><a href="https://www.oplc.nh.gov/" target="_blank" rel="noopener noreferrer">New Hampshire Office of Professional Licensure and Certification</a></li>
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
            <a href="/guides">Guides</a>
            <a href="/contact">Contact</a>
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
          </div>
        </div>
      </footer>
    </>
  );
}
