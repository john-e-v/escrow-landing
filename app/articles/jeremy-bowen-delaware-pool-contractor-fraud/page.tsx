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
          <div className="hero-badge">Contractor Fraud · September 2026</div>
          <h1>The Delaware Pool Contractor Who Took Deposits From 13 Homeowners</h1>
          <p className="hero-subtitle">Contractor Jeremy Bowen took deposits for inground pools and other projects across 13 contracts in Delaware&apos;s Kent and Sussex counties, then never completed the work. He was ordered to pay roughly $270,000 in restitution and sentenced to prison, with many victims being seniors.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Jeremy Bowen, 46, operating through Delmarva Landscaping Solutions, LLC and Shoreline Escapes, LLC, accepted payments from homeowners across Delaware for inground pools, fencing, and related outdoor projects—then failed to deliver the work. On June 20, 2025, he was sentenced in Sussex County Superior Court after pleading guilty to felony home improvement fraud, closing a case that had left more than a dozen families out significant sums of money.</p>
            <p>The scale of the harm was substantial. According to the Delaware Department of Justice, the plea resolved complaints alleging that Bowen had taken funds and then failed to perform on 13 contracts throughout Kent and Sussex counties. On April 7, 2025, Bowen pled guilty to three counts of felony Home Improvement Fraud, one count of Issuing a Bad Check, and one count of misdemeanor Home Improvement Fraud. He was sentenced to six months in prison and ordered to pay approximately $270,000 in restitution to his victims.</p>
            <blockquote className="article-quote">
              Jeremy Bowen&apos;s deceitful actions didn&apos;t just hurt his victims financially – they caused a great deal of emotional and psychological distress to several families across our state.
              <cite>— Delaware Attorney General Kathy Jennings, Delaware Department of Justice press release, July 2, 2025</cite>
            </blockquote>


            <h2>What Happened</h2>
            <p>The pattern was consistent across the contracts investigators reviewed. Homeowners signed agreements with Bowen for pool construction or fencing, handed over large deposits, and then watched the work stall or never begin. Investigators documented representative examples: a March 2023 contract with a 65-year-old Georgetown man to install an inground pool, for which Bowen was paid $27,500; a September 2023 contract with an Ocean View woman for an inground pool, for which she paid $18,000; and a March 2024 contract with a Frankford man to install a fence, for which Bowen received $1,600. In each of these cases, the work was not completed, the contracts were not fulfilled, and only one of the victims received partial reimbursement.</p>
            <p>The earliest charge in the wider matter dated to March 2024, when police accused Bowen of taking $43,000 from a 72-year-old man to build an inground pool and doing no work; he was released on his own recognizance at that time. Many of the projects involved contracts for swimming pool construction, and several of the victims were seniors. At his sentencing, Deputy Attorney General Jason Cohee called forward several of Bowen&apos;s victims to give statements, including one who described paying Bowen $43,000 to renovate her pool and the financial and emotional hardship that followed.</p>


            <h2>Why It Was Easy to Happen</h2>
            <p>Home improvement contracts in Delaware typically run on trust and upfront deposits. A homeowner signs a contract, pays a substantial down payment before any materials are delivered or ground is broken, and then depends entirely on the contractor to follow through. When the money changes hands directly and immediately, there is no structural checkpoint between payment and performance—nothing that ties the release of funds to the completion of actual work.</p>
            <p>That gap is precisely what allowed the losses here to accumulate. Because deposits went straight to the contractor, each new homeowner had no way of knowing whether prior projects had been abandoned. The situation was compounded by history: Lewes police said Bowen had previously been arrested and charged with home improvement fraud eight separate times since 2017, and reporting noted that troubled contractors in the region sometimes file for bankruptcy and reopen under a new name. Bowen conducted business under two separate LLCs, Delmarva Landscaping Solutions and Shoreline Escapes, illustrating how a shifting business identity can make it harder for a prospective customer to connect a contractor to earlier complaints.</p>
            <p>The problem is not isolated to one bad actor. The Delaware Department of Justice&apos;s Consumer Protection Unit has said it received roughly 339 home improvement complaints during 2023—an indication of how common deposit-and-disappear disputes are across the state.</p>
            <blockquote className="article-quote">
              During 2023, we got about 339 complaints, which is a good amount of complaints and home improvement fraud.
              <cite>— Marion Quirk, Director of Consumer Protection, CoastTV, March 2024</cite>
            </blockquote>


            <h2>What the Investigation Found</h2>
            <p>The criminal case grew out of work by Delaware State Police. In July 2024, Troop 4 Financial Crimes Detectives began investigating Bowen and his two companies, Delmarva Landscaping Solutions, LLC and Shoreline Escapes, LLC, for home improvement fraud. Detectives traced individual contracts, the deposits paid, and the absence of completed work, ultimately documenting a repeating pattern across multiple homeowners.</p>
            <p>Detectives obtained arrest warrants, and Bowen turned himself in at Troop 4, where he was arraigned by Justice of the Peace Court 2 and released after posting an $8,000 secured bond and a $3,000 cash bond. The felony counts he faced included home improvement fraud over $1,500 with enhancements where victims were over 62. Beyond the prison term and restitution, once released Bowen will be subject to an additional year of home confinement and is barred by the Superior Court from working in home improvement for four and a half years.</p>


            <h2>What Escrow Would Have Changed</h2>
            <p>The central failure in this case is structural: money left each homeowner&apos;s control the moment a deposit was written, long before any corresponding work existed. An escrow arrangement inverts that dynamic. Rather than paying the contractor directly, the homeowner places funds with a neutral third party, and money is released only as defined milestones are verifiably completed—excavation, plumbing rough-in, decking, and so on. The contractor still gets paid, but only against work actually delivered.</p>
            <p>Applied to the contracts here, escrow would have capped exposure at a single, small milestone rather than the full deposit. The 65-year-old Georgetown homeowner&apos;s $27,500, the Ocean View homeowner&apos;s $18,000, and the $43,000 pool payment would not have transferred in full at signing; funds would have remained protected and returnable when the promised work never materialized. Because releases are tied to verified progress, a contractor who abandons a job simply never receives the later tranches—removing the incentive to collect deposits and walk away, and removing the ability to do so undetected across many customers at once.</p>
            <p>Escrow also creates a paper trail and a neutral arbiter. A funding agent that never sees completed milestones has documented, contemporaneous evidence of non-performance—useful long before a matter reaches a Financial Crimes Unit. For seniors and other homeowners who, as officials noted, pour their savings into their homes, that structural checkpoint between payment and performance is exactly the protection that direct-deposit contracting lacks.</p>

            <h2>Sources</h2>
            <ul className="article-sources">
              <li><a href="https://news.delaware.gov/2025/07/02/doj-secures-prison-time-for-fraudulent-home-improvement-contractor" target="_blank" rel="noopener noreferrer">Delaware Department of Justice — DOJ secures prison time for fraudulent home improvement contractor</a></li>
              <li><a href="https://www.capegazette.com/article/contractor-serve-six-months-home-improvement-fraud/292858" target="_blank" rel="noopener noreferrer">Cape Gazette — Contractor to serve six months for home improvement fraud</a></li>
              <li><a href="https://www.capegazette.com/article/contractor-pleads-guilty-home-improvement-fraud-cases/291700" target="_blank" rel="noopener noreferrer">Cape Gazette — Contractor pleads guilty in home improvement fraud cases</a></li>
              <li><a href="https://delawarelive.com/detectives-arrest-man-for-home-improvement-fraud/" target="_blank" rel="noopener noreferrer">Delaware LIVE — Detectives Arrest Man for Home Improvement Fraud</a></li>
              <li><a href="https://www.stardem.com/news/caroline/greensboro-contractor-sentenced-for-felony-home-improvement-fraud/article_40c53904-ba40-4669-86c3-8ae5a60784d8.html" target="_blank" rel="noopener noreferrer">Star Democrat — Greensboro contractor sentenced for felony home improvement fraud</a></li>
              <li><a href="https://www.coasttv.com/news/delaware-doj-sentences-fraudulent-maryland-based-home-improvement-contractor-to-six-months-in-prison/article_67e57c94-c516-443f-8a40-f586095e531a.html" target="_blank" rel="noopener noreferrer">CoastTV — Delaware DOJ sentences fraudulent contractor to six months</a></li>
              <li><a href="https://www.coastalpoint.com/news/state/doj-secures-prison-time-for-fraudulent-contractor/article_bc22eb57-662d-4692-9dcb-0905869d938f.html" target="_blank" rel="noopener noreferrer">Coastal Point — DOJ secures prison time for fraudulent contractor</a></li>
              <li><a href="https://www.wmdt.com/2024/06/ocean-view-man-arrested-for-home-improvement-fraud/" target="_blank" rel="noopener noreferrer">WMDT/47abc — Ocean View man arrested for home improvement fraud</a></li>
              <li><a href="https://www.capegazette.com/article/home-improvement-scams-plague-region/284248" target="_blank" rel="noopener noreferrer">Cape Gazette — Home improvement scams plague region</a></li>
              <li><a href="https://www.coasttv.com/news/community-seeks-justice-residents-claim-unfinished-projects-and-lost-savings-with-a-local-landscaping-business/article_57ea90d2-dfee-11ee-9622-f39f11b973d2.html" target="_blank" rel="noopener noreferrer">CoastTV — Community seeks justice: residents claim unfinished projects and lost savings</a></li>
              <li><a href="https://www.shorenewsnetwork.com/2024/03/15/delaware-contractor-arrested-for-home-improvement-fraud-more-victims-suspected/" target="_blank" rel="noopener noreferrer">Shore News Network — Delaware contractor arrested for home improvement fraud</a></li>
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
