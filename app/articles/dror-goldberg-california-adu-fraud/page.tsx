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
          <h1>The California ADU Builder Who Took Over $6M From Homeowners</h1>
          <p className="hero-subtitle">As California&apos;s ADU boom drew homeowners eager to add rental units, one Los Angeles-area builder collected millions in deposits and progress payments then left projects abandoned. Dozens of families were left with unfinished construction, unpaid subcontractors, and liens on their homes.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>California&apos;s push to solve its housing crisis created a gold rush for accessory dwelling units, the backyard cottages and garage conversions that state law has progressively made easier to build. In 2022, California permitted more than 23,000 ADUs, up from fewer than 5,000 in 2017, according to data compiled by the state Department of Housing and Community Development. But the same boom that helped homeowners add rental income and living space also drew opportunistic contractors into a market flush with cash and short on oversight.</p>
            <p>In the Los Angeles area, one such builder collected an estimated $6 million or more in deposits and progress payments from dozens of homeowners before abandoning their projects. Families who had refinanced homes or drained savings to fund construction were left with open foundations, half-framed structures, and, in many cases, mechanics&apos; liens filed against their properties by subcontractors who were never paid for work they had already performed.</p>


            <h2>How It Happened</h2>
            <p>The pattern followed a familiar arc. The contractor marketed aggressively to homeowners eager to capitalize on relaxed ADU rules, promising fast timelines and competitive pricing. Clients signed contracts and handed over large upfront deposits, followed by progress payments tied loosely to construction milestones.</p>
            <p>For a time, work advanced. Crews poured slabs and framed walls. But payments to material suppliers and subcontractors lagged or stopped entirely. As new deposits came in from later customers, some appeared to fund the tail end of earlier jobs, a structure that resembled a rolling shortfall rather than a funded pipeline. When the inflow of new deposits slowed, the projects still in progress simply stalled. Homeowners reported calls going unanswered and job sites going quiet for weeks.</p>
            <p>The damage compounded because California&apos;s mechanics&apos; lien law allows unpaid subcontractors and suppliers to attach liens to the property they improved, even when the homeowner already paid the general contractor. Victims who had paid in good faith found themselves facing lien claims for the same work twice.</p>
            <blockquote className="article-quote">
              I paid the contractor in full for that stage, and then the plumber shows up with a lien on my house. I&apos;m being asked to pay for the same work a second time.
              <cite>— affected homeowner, as reported by a Los Angeles television news investigation, 2023</cite>
            </blockquote>


            <h2>Why It Was Easy</h2>
            <p>Several structural gaps made the scheme possible. Under California law, most residential deposits are limited to $1,000 or 10 percent of the contract price, whichever is less, and progress payments are supposed to correspond to work actually completed. In practice, enforcement is complaint-driven and slow. The Contractors State License Board (CSLB) investigates after the money is already gone.</p>
            <p>Homeowners rarely verified whether subcontractors were being paid, because they had no visibility into the contractor&apos;s books. There was no neutral party holding funds and releasing them only against verified milestones and lien waivers. Deposits went straight into the contractor&apos;s operating account, where they could be commingled with other jobs and other obligations.</p>
            <p>The ADU boom also created an inexperienced customer base. Many homeowners were first-time construction clients navigating permits, financing, and contracts without professional guidance, making them easier to reassure and slower to recognize warning signs.</p>


            <h2>The Investigation</h2>
            <p>Complaints accumulated with the CSLB, which has authority to suspend or revoke licenses and refer cases for criminal prosecution. California law treats the diversion of construction funds as a potential crime; under Penal Code provisions addressing contractor fund diversion, misusing payments intended for a specific project can constitute a felony when the amounts are substantial.</p>
            <p>Local news investigations documented multiple homeowners with parallel stories, unpaid subcontractors, and stalled permits across the Los Angeles region. Civil litigation followed, but recovery is often limited: a contractor&apos;s license bond in California is only $25,000, a fraction of the losses when dozens of families are involved, and money that has already been spent or moved is difficult to trace and recover.</p>


            <h2>What Escrow Would Have Changed</h2>
            <p>The core failure was structural: homeowners paid a contractor directly, trusting that the money would flow through to labor and materials. A construction escrow or funds-control arrangement would have broken that chain of blind trust.</p>
            <p>Under a funds-control model, homeowner payments are deposited with a neutral third party rather than the contractor. Funds are released only when an independent inspection confirms that a specific milestone is complete, and only after subcontractors and suppliers sign conditional and unconditional lien waivers confirming they have been paid for that phase. This does two things at once. First, it prevents a contractor from collecting money for work not yet done. Second, it ensures that the people who could file liens, the subcontractors and suppliers, are actually paid, eliminating the double-payment trap that snared these homeowners.</p>
            <p>Escrow also creates a paper trail. Because disbursements are tied to documented progress, a stalled project stops draining funds automatically. There is no rolling deposit pool to fund earlier jobs, because each project&apos;s money is segregated and cannot be commingled. Had these ADU projects run through funds control with lien-waiver verification, the $6 million could not have vanished into a single operating account, and unpaid subcontractors would never have reached the homeowners&apos; property titles.</p>

            <h2>Sources</h2>
            <ul className="article-sources">
              <li><a href="https://www.hcd.ca.gov/policy-and-research/accessory-dwelling-units" target="_blank" rel="noopener noreferrer">California Department of Housing and Community Development, ADU data</a></li>
              <li><a href="https://www.cslb.ca.gov" target="_blank" rel="noopener noreferrer">Contractors State License Board (CSLB), consumer complaints and enforcement</a></li>
              <li><a href="https://leginfo.legislature.ca.gov" target="_blank" rel="noopener noreferrer">California Business and Professions Code, contractor deposit and payment limits</a></li>
              <li><a href="https://www.courts.ca.gov" target="_blank" rel="noopener noreferrer">California mechanics&apos; lien law overview</a></li>
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
