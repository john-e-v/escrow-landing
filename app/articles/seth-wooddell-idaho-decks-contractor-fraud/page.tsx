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
          <h1>The Idaho Deck Contractor Arrested After Taking Homeowner Deposits</h1>
          <p className="hero-subtitle">Boise-area contractor Seth Wooddell, owner of Idaho Decks &amp; Exteriors, was arrested on three felony grand theft counts after allegedly taking deposits and failing to complete projects. Alleged victims say the losses and the pattern of broken promises reach far beyond the three charged counts.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>In December 2025, a residential construction case in southwest Idaho&apos;s Treasure Valley crystallized a problem that consumer regulators warn about constantly: what happens when a homeowner hands a large deposit to a contractor who never finishes the work. Seth Wooddell (Idaho Decks &amp; Exteriors LLC), a 31-year-old Boise-area contractor, was arrested and jailed after prosecutors alleged he took money from homeowners and then failed to complete their projects.</p>
            <p>According to Boise-area investigative reporting, Seth Wooddell (Idaho Decks &amp; Exteriors LLC) was booked into the Ada County Jail on a $300,000 bail and charged with three felony counts of grand theft. The arrest followed weeks of reporting and complaints from families who say they were left with neither finished decks nor refunds.</p>


            <h2>What Happened</h2>
            <p>Local police contacted Wooddell and, on December 16, 2025, arrested him on three counts of felony grand theft, booking him into the Ada County Jail. Under Idaho law, grand theft applies to property valued above $1,000, and the criminal complaint alleged Wooddell took more than that amount from three separate victims.</p>
            <p>The alleged conduct followed a familiar pattern. One homeowner, Jason Kuska, signed a contract in August and said he paid $11,000 as half the deposit for a $22,000 deck project. Wooddell&apos;s crew demolished Kuska&apos;s old deck within a few days but never returned to finish the job, and Kuska described weeks of reassurances that work would resume before he concluded something was wrong.</p>
            <p>The scale appears far larger than the three counts charged. Sam Rolofson, who said he and his wife were among those affected, told investigators they were in contact with many other alleged victims.</p>
            <blockquote className="article-quote">
              We know of at least 30 people that are personally victims of Seth Wooddell and similar practices.
              <cite>— Sam Rolofson, alleged victim, to KTVB/7Investigates, December 2025</cite>
            </blockquote>


            <h2>Why It Was Easy for This to Happen</h2>
            <p>Two structural features made the alleged scheme possible. First, the money moved directly from homeowners to the contractor with no intermediary holding it and no requirement that work be verified before payment was released. Once a deposit was paid, the funds were entirely in the contractor&apos;s control.</p>
            <p>Second, warning signs existed but were not visible to new customers at the moment they signed. Court records show a woman successfully sued Wooddell and a company he worked with in January 2024 for nearly $30,000 in Canyon County, and two homeowners filed small claims cases against Wooddell and two of his companies — Idaho Exteriors and Idaho Decks and Exteriors — during 2025. A Boise Police Department spokesperson and Idaho Secretary of State records confirmed Wooddell was linked to multiple business names, a fragmentation that can make a track record harder for consumers to piece together.</p>
            <p>The problem is not unique to Idaho. The Federal Trade Commission received 81,925 reports of home improvement fraud in 2024, and home-improvement work consistently ranks among the top categories for consumer complaints nationwide.</p>


            <h2>The Investigation</h2>
            <p>The criminal case is not the only action against the businesses. On January 20, 2026, the Idaho Attorney General filed an application in the Fourth Judicial District Court of Idaho, Ada County, against Idaho Decks &amp; Exteriors LLC, Idaho Exteriors LLC, and Seth M. Wooddell. The filing seeks a court order compelling the businesses and Wooddell to comply with a civil investigative demand issued as part of a consumer protection investigation.</p>
            <p>According to the Attorney General, the investigation was initiated after multiple Idaho consumers reported that they paid substantial upfront deposits for construction-related goods and services that were not provided, only partially provided, or not completed as promised. The State alleges that, in several cases, consumers did not receive refunds after work was not performed, or that projects were abandoned, with the conduct occurring between June 2025 and December 2025 and potentially violating the Idaho Consumer Protection Act.</p>
            <p>The application asks the court to order the defendants to produce records, temporarily prohibit them from engaging in construction activities in Idaho or with Idaho consumers until they comply, and require payment of the State&apos;s attorney&apos;s fees and costs. The matter remains pending and unresolved, and the allegations have not been proven. The underlying criminal investigation was also described as ongoing, with additional charges possible.</p>


            <h2>What Escrow Would Have Changed</h2>
            <p>The mechanism at the center of this case is the unconditional upfront deposit. When homeowners like Jason Kuska paid thousands of dollars directly to the contractor before verifiable work was completed, there was nothing standing between the money and the alleged theft. That is exactly the structural gap a construction escrow arrangement is designed to close.</p>
            <p>In an escrow model, the homeowner&apos;s deposit and progress payments are placed with a neutral third party rather than the contractor. Funds are released only as defined milestones are reached and verified — for example, permits pulled, demolition completed, framing inspected, materials delivered. Had Kuska&apos;s $11,000 sat in escrow, the demolition-only work Wooddell&apos;s crew performed would have unlocked at most a fraction of the money, and the balance would have remained protected when the crew never returned.</p>
            <p>Escrow also creates the paper trail that was missing here. Milestone-based release requires documentation at each stage, which surfaces problems early instead of after weeks of verbal reassurances. It neutralizes the fragmentation of multiple business names, because the money is tied to a specific project&apos;s verified progress rather than to whichever entity the contractor invoices under. And it aligns with the standard guidance regulators give: consumer authorities routinely warn homeowners never to hand over large cash deposits before work is verifiable, precisely because recovery afterward is difficult. Many of the alleged Idaho victims feared they would never recover their money — the outcome escrow is built to prevent by keeping funds out of the contractor&apos;s hands until the work is actually done.</p>

            <h2>Sources</h2>
            <ul className="article-sources">
              <li><a href="https://www.ktvb.com/article/news/local/treasure-valley-contractor-arrested-after-allegedly-stealing-homeowners/277-4761b89d-807b-4b1e-97d0-26f7376ca37e" target="_blank" rel="noopener noreferrer">KTVB (7Investigates) — Treasure Valley contractor arrested</a></li>
              <li><a href="https://www.bbb.org/us/id/boise/profile/general-contractor/idaho-decks-exteriors-1296-1000185428" target="_blank" rel="noopener noreferrer">BBB Business Profile — Government Action (State of Idaho v. Idaho Decks &amp; Exteriors LLC)</a></li>
              <li><a href="https://idahonews.com/news/local/boise-contractor-arrested-for-grand-theft-after-taking-payments-without-finishing-work" target="_blank" rel="noopener noreferrer">Idaho News (KBOI/CBS2) — Boise contractor arrested for grand theft</a></li>
              <li><a href="https://www.ag.idaho.gov/consumer-protection/" target="_blank" rel="noopener noreferrer">Idaho Office of the Attorney General — Consumer Protection Division</a></li>
              <li><a href="https://www.synovus.com/personal/resource-center/financial-newsletters/2026/january/dont-get-nailed-how-to-protect-yourself-from-contractor-fraud/" target="_blank" rel="noopener noreferrer">Synovus — Contractor fraud statistics (FTC 2024 report)</a></li>
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
