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
          <h1>The Wisconsin Contractor Who Stole Over $250,000 From Homeowners</h1>
          <p className="hero-subtitle">Wisconsin contractor Tony Hieber took deposits from multiple homeowners for remodeling and construction projects, then failed to complete the work or refund the money. He was charged with multiple felony theft counts after victims came forward.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>In 2023, Wisconsin contractor Tony Hieber, operating under the name Hieber Construction, became the subject of multiple felony charges after authorities alleged he collected substantial deposits from homeowners for remodeling and new-construction projects he never completed. The case, which prosecutors built around the state&apos;s theft-by-contractor statute, illustrates a recurring pattern in residential construction fraud: large sums of money changing hands at the start of a project, with little protection for the people writing the checks.</p>
            <p>According to charging documents and local reporting, the alleged losses exceeded $250,000 spread across several victims. Homeowners described paying for materials and labor on kitchen remodels, additions, and home builds, only to see work stall, stop entirely, or never begin. In many of these arrangements, the money was simply gone.</p>


            <h2>What Happened</h2>
            <p>The complaints against Hieber followed a familiar arc. Homeowners signed contracts and provided upfront deposits—often tens of thousands of dollars—intended to cover materials and secure the contractor&apos;s schedule. In a number of cases, prosecutors alleged that the funds were not applied to the projects for which they were paid. Materials went unordered, subcontractors went unpaid, and promised timelines slipped indefinitely.</p>
            <p>Wisconsin charges these cases under the state&apos;s theft-by-contractor law (Wis. Stat. § 779.02(5)), which treats money paid to a prime contractor as funds held in trust for the project, its subcontractors, and suppliers. When a contractor diverts that money to other uses, the diversion itself can constitute felony theft. Because the alleged totals crossed felony thresholds, Hieber faced multiple counts, each carrying the possibility of significant prison time and restitution obligations.</p>
            <p>For the affected homeowners, the financial damage was compounded by the practical reality of unfinished work—exposed framing, half-demolished kitchens, and homes left less livable than before the project started.</p>
            <blockquote className="article-quote">
              The money homeowners hand over for materials and labor is supposed to stay with the job. When it doesn&apos;t, families are left paying twice to fix what was never built.
              <cite>— paraphrased from a Wisconsin consumer protection official, as reported by local press, 2023</cite>
            </blockquote>


            <h2>Why It Was Easy</h2>
            <p>Residential construction is structurally vulnerable to this kind of loss because of how money moves. Custom is to pay large deposits before work begins—sometimes 30 to 50 percent of a project&apos;s value—directly into a contractor&apos;s general operating account. Once deposited, that money is commingled with the contractor&apos;s other funds and is functionally indistinguishable from revenue. There is rarely any independent verification that it is being spent on the customer&apos;s project.</p>
            <p>This creates an environment where a struggling or dishonest contractor can use new deposits to cover old debts, pay personal expenses, or finance unrelated projects—a practice that can spiral until the business collapses and multiple customers are left unpaid. By the time homeowners realize the work has stalled, the money is often spent and unrecoverable.</p>
            <p>The construction industry&apos;s reliance on trust, combined with the lack of routine third-party oversight on individual payments, is precisely why theft-by-contractor statutes exist. But criminal charges come after the loss; they do not return the deposit. National data underscores the scale of the problem: home improvement and repair fraud is consistently among the most common complaint categories reported to state consumer protection agencies and tracked by the Federal Trade Commission&apos;s Consumer Sentinel Network.</p>


            <h2>What the Investigation Found</h2>
            <p>Investigators in the Hieber case relied on the financial trail and victim statements to establish the alleged diversion of funds. The theft-by-contractor framework allows prosecutors to demonstrate that money received for a specific project was not used for that project—a determination that typically depends on bank records, contracts, and the absence of payments to suppliers and subcontractors.</p>
            <p>Multiple homeowners came forward, allowing authorities to consolidate a pattern of conduct rather than treating each loss as an isolated dispute. That pattern is often what elevates a matter from a civil contract disagreement to a criminal prosecution. The aggregate figure—over $250,000—reflected the combined losses across these complainants, and the felony counts were structured accordingly.</p>


            <h2>What Escrow Would Have Changed</h2>
            <p>The single structural reform that would have prevented these losses is straightforward: an escrow or trust account holding the homeowner&apos;s funds, with disbursements tied to verified milestones.</p>
            <p>Under an escrow model, a homeowner&apos;s deposit is not paid directly to the contractor. Instead, it is held by a neutral third party. Money is released only when defined stages of work are completed and confirmed—for example, after permits are pulled, after framing is inspected, or after materials are delivered to the site. If the contractor never orders the materials or never begins the work, the money is still in the account, and it can be returned to the homeowner.</p>
            <p>Escrow accomplishes what criminal statutes cannot. Theft-by-contractor laws punish the diversion after it occurs; escrow makes the diversion impossible in the first place by removing the contractor&apos;s unilateral access to the lump sum. The funds physically cannot be spent on personal expenses or unrelated debts because they are not in the contractor&apos;s account.</p>
            <p>Milestone-based release also realigns incentives. A contractor is paid for progress, not for promises, which reduces the leverage created by large upfront deposits. For honest contractors, escrow offers protection too: it documents that funds were available and that the homeowner&apos;s obligations were met. In the Hieber case, an escrow structure would have left the bulk of more than $250,000 recoverable—turning a criminal loss into a refundable balance.</p>

            <h2>Sources</h2>
            <ul className="article-sources">
              <li><a href="https://docs.legis.wisconsin.gov/statutes/statutes/779" target="_blank" rel="noopener noreferrer">Wisconsin Statutes § 779.02(5) – Theft by Contractor</a></li>
              <li><a href="https://www.ftc.gov/news-events/data-visualizations/data-spotlight" target="_blank" rel="noopener noreferrer">FTC Consumer Sentinel Network Data Book</a></li>
              <li><a href="https://datcp.wi.gov/Pages/Programs_Services/HomeImprovement.aspx" target="_blank" rel="noopener noreferrer">Wisconsin Department of Agriculture, Trade and Consumer Protection – Home Improvement</a></li>
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
