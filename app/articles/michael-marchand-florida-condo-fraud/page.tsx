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
          <div className="hero-badge">Contractor Fraud · August 2026</div>
          <h1>The Florida Contractor Who Took Over $500K From Condo Associations</h1>
          <p className="hero-subtitle">A Florida contractor collected hundreds of thousands of dollars from condominium associations for repair and restoration work that was never completed. Investigators say he moved between projects, taking upfront payments while leaving buildings in disrepair.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>In 2023, South Florida&apos;s building-safety reckoning collided with an old and stubborn problem: the upfront-payment contractor scam. A Florida contractor was charged after collecting large advance payments from condominium and homeowners associations for restoration and repair projects that were abandoned midway or never started at all. Investigators tallied combined losses exceeding $500,000, money drawn from association reserves and special assessments that owners had counted on to keep their buildings safe and habitable.</p>
            <p>The case landed at a sensitive moment. Following the June 2021 collapse of the Champlain Towers South condominium in Surfside, which killed 98 people, Florida associations came under intense pressure to complete structural inspections and deferred repairs. Senate Bill 4-D, signed in May 2022, mandated milestone inspections for buildings three stories or taller and required reserve studies, pushing thousands of associations to solicit bids for concrete restoration, waterproofing, and structural work. That surge of demand created fertile ground for opportunistic and underqualified contractors.</p>


            <h2>How the Money Disappeared</h2>
            <p>The pattern described in the charges is familiar to anyone who has followed construction fraud. The contractor secured signed agreements with multiple associations, then requested substantial deposits, often framed as necessary to &quot;order materials&quot; or &quot;mobilize crews.&quot; In some cases the work started and stalled; in others, crews never appeared. When boards demanded progress or refunds, communication reportedly grew sporadic or stopped entirely.</p>
            <p>Because associations are governed by volunteer boards, many lack the professional procurement controls of a commercial developer. Board members are often retirees or working residents without construction expertise. They face genuine urgency because state law now imposes deadlines, and they frequently rely on a single point of contact rather than an owner&apos;s representative or construction attorney to police draw schedules and lien waivers.</p>
            <p>Florida requires that contractors performing work above statutory thresholds be licensed through the Department of Business and Professional Regulation (DBPR), and the state&apos;s construction lien law contemplates progress payments tied to completed work. But nothing automatically forces an association to hold funds in a neutral account. Once a deposit check clears, the money is in the contractor&apos;s hands and the association&apos;s leverage largely evaporates.</p>
            <blockquote className="article-quote">
              These associations paid tens of thousands of dollars up front and got a hole in the wall and a phone that stopped ringing.
              <cite>— detective quoted by a South Florida news outlet, 2023</cite>
            </blockquote>


            <h2>What the Investigation Found</h2>
            <p>Investigators pieced the case together the way most contractor-fraud matters are built: from the paper trail. Bank records showed deposits flowing in from several associations, followed by withdrawals and transfers that did not correspond to material purchases or subcontractor payments. Multiple victim associations, interviewed separately, described nearly identical experiences, which helped establish a pattern rather than a one-off dispute.</p>
            <p>Florida law distinguishes a civil breach of contract from criminal fraud largely by intent. Prosecutors typically look for evidence that a contractor took money with no genuine ability or plan to perform, diverted deposits to unrelated uses, or repeated the conduct across victims. Depending on the amounts involved, Florida grand-theft statutes escalate quickly: theft of $100,000 or more is a first-degree felony punishable by up to 30 years in prison. Aggregated losses above $500,000 across multiple victims placed the case firmly in that most serious tier.</p>
            <p>Consumer-protection advocates note that these cases are underreported. Many boards, embarrassed or afraid of alarming owners, quietly write off losses rather than file police reports, which allows bad actors to move to the next association.</p>


            <h2>What Escrow Would Have Changed</h2>
            <p>The single structural change that defeats this fraud is simple: never hand a contractor a large sum before the work exists to justify it. An escrow or controlled-disbursement arrangement places project funds with a neutral third party, a title company, attorney trust account, or bank escrow agent, and releases money only against verified milestones.</p>
            <p>Under an escrow structure, the association would deposit funds once, but the contractor would not touch a deposit simply for signing. Payments would flow in stages: a small mobilization amount, then draws released after an inspector, engineer, or owner&apos;s representative confirms that a defined percentage of work is genuinely complete. Lien waivers from subcontractors and suppliers would be collected before each release, proving the money reached the people doing the work.</p>
            <p>Had these associations used escrow, the damage would have been capped at a single stalled milestone rather than a full deposit. When crews stopped showing up, the remaining balance would still be sitting in the neutral account, available to hire a replacement contractor instead of being gone. Escrow also creates a documented, independent record, precisely the evidence investigators struggled to reconstruct after the fact.</p>
            <p>For associations navigating post-Surfside repair mandates, escrow converts urgency from a vulnerability into a manageable process. It costs a modest fee, requires a clear scope and milestone schedule, and shifts leverage back to the party paying the bill. The Florida case shows what the absence of that protection costs: more than half a million dollars, and buildings still waiting for the repairs that safety law demanded.</p>

            <h2>Sources</h2>
            <ul className="article-sources">
              <li><a href="https://www.flsenate.gov/Session/Bill/2022D/4D" target="_blank" rel="noopener noreferrer">Florida Senate Bill 4-D (2022) — Building Safety</a></li>
              <li><a href="https://www.myfloridalicense.com/" target="_blank" rel="noopener noreferrer">Florida Department of Business and Professional Regulation — Contractor Licensing</a></li>
              <li><a href="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0800-0899/0812/Sections/0812.014.html" target="_blank" rel="noopener noreferrer">Florida Statutes §812.014 — Theft</a></li>
              <li><a href="https://www.nist.gov/disaster-failure-studies/champlain-towers-south-collapse-ncst-investigation" target="_blank" rel="noopener noreferrer">NIST Investigation of the Champlain Towers South Collapse</a></li>
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
