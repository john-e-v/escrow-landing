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
          <h1>The Portland Contractor Who Took $380K From Maine Homeowners — Then Pleaded Guilty</h1>
          <p className="hero-subtitle">Portland contractor Tim Galvez took large upfront deposits from at least 16 Maine homeowners for home renovations he abandoned or never started, collectively costing them more than $380,000. He pleaded guilty to felony theft in June 2026 and was ordered to pay over $397,000 in restitution.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>For years, homeowners from York County to Maine&apos;s Midcoast handed over deposits — sometimes tens of thousands of dollars — to a Portland contractor who promised decks, siding, renovations, and in one case a retirement home. Instead, many were left with unfinished work, defective work, or nothing at all.</p>
            <p>The man at the center of the case is Tim Galvez (Timothy Galvez), 33, of Portland. In June 2026, one year after his arrest, Galvez changed his plea to guilty on a felony theft charge, admitting to a scheme that prosecutors say cost Maine homeowners hundreds of thousands of dollars.</p>
            <p>Galvez was originally indicted in June 2025 on a felony charge of theft by unauthorized taking. The indictment named at least 16 homeowners who collectively reported losing more than $380,000 after hiring him for home renovation and construction projects.</p>


            <h2>What Happened</h2>
            <p>Galvez did business under a rotating set of names, and the pattern investigators described was consistent: large money up front, little or nothing delivered.</p>
            <p>According to reporting on the case, Galvez did business as Tim&apos;s Express Decks and Odd Jobs, Galvez Properties, and Ben and Sons Express Construction, and police say he had been stealing from customers since at least 2019.</p>
            <p>Among the homeowners in the courtroom for the guilty plea was Ian Arnold, who said he and his wife hired Galvez to build their retirement home. Instead, they say the project was abandoned, leaving them more than $46,000 out of pocket and no longer able to retire.</p>
            <blockquote className="article-quote">
              The continuous turmoil he put us through over these past three years has worn us down and aged us.
              <cite>— victim Ian Arnold, WGME/CBS13 I-Team, June 26, 2026</cite>
            </blockquote>


            <h2>Why It Was So Easy</h2>
            <p>The mechanics of the scheme relied on a simple vulnerability: the money changed hands before the work did. Investigators said Galvez often demanded large upfront payments, failed to obtain necessary permits, and provided incomplete or inadequate services. In several instances, the state&apos;s civil lawsuit alleges, he accepted deposits and performed no work at all.</p>
            <p>Galvez also made himself hard to track. According to the Attorney General&apos;s lawsuit, he routinely changed the name of his business because of bad reviews, deceiving customers and making it difficult for consumers to obtain truthful information about his skills and business practices. He allegedly operated under aliases including Timothy Enoch, Timoteo Enoch, Timothy Beruca, and Builders of Maine. In some cases, the AG alleges Galvez offered refunds only if dissatisfied customers removed negative online reviews.</p>
            <p>Underlying all of this is a structural gap in Maine law. Maine does not license or regulate home contractors, and the Attorney General&apos;s Consumer Mediation Program receives more complaints about contractors than any other category of business. Maine is one of only a handful of states without such licensing requirements. As Pine Tree Legal Assistance puts it, in Maine just about anyone with a hammer and a business card can represent themselves as a contractor.</p>


            <h2>What the Investigation Found</h2>
            <p>The criminal case grew out of a monthslong investigation by the Westbrook Police Department into Galvez&apos;s business practices, which the department said pointed to home repair fraud going on for several years. Early in the investigation, officers had identified at least 14 victims with losses in the several hundred thousand dollars; the indictment ultimately listed at least 16.</p>
            <p>Running parallel to the criminal case was a civil suit filed by the Maine Attorney General&apos;s Office, which accused Galvez of violating multiple provisions of the Unfair Trade Practices Act — including failing to perform contracted work, performing defective work, and making misrepresentations to consumers. The lawsuit claims Galvez entered into at least 37 contracts that failed to meet the Maine Home Construction Contracts Act, and cited at least 17 instances of shoddy workmanship and 22 of not completing the work.</p>
            <p>The civil case ended in a judgment requiring Galvez to pay more than $397,000 in restitution to victims, along with $90,000 in civil penalties, and barring him for 15 years from owning or operating a construction business in Maine. Under the criminal plea agreement, Galvez received a three-year suspended jail sentence and probation, which he avoids serving as long as he keeps up restitution payments. Prosecutors said he is current on payments totaling $7,000 per month, rising to $10,000 a month in January 2027.</p>
            <blockquote className="article-quote">
              I want to make right. I don&apos;t want 10 years down the line people in the streets saying he owes me money.
              <cite>— Tim Galvez in court, WGME/CBS13 I-Team, June 26, 2026</cite>
            </blockquote>


            <h2>What Escrow Would Have Changed</h2>
            <p>The single fact that made this scheme possible is that homeowners paid Galvez directly, in advance, with no independent party holding the money until the work was verified. Once a deposit was in his account, the homeowner&apos;s only remedy was to sue — and Maine&apos;s own Attorney General warns that even when civil or criminal lawsuits succeed, the state has often been unable to collect because builders are bankrupt, judgment-proof, or have left the state.</p>
            <p>An escrow arrangement inverts that risk. Instead of a lump-sum deposit going straight to the contractor, funds are placed with a neutral third party and released in stages only as defined milestones are inspected and completed. Had Galvez&apos;s clients used milestone-based escrow, a contractor who accepted a deposit and performed no work — as the AG alleges happened repeatedly — would never have been able to walk away with the cash, because the money would still be sitting untouched.</p>
            <p>Escrow also blunts the two tactics that let Galvez operate for years. His habit of demanding large upfront payments only works when the payment is unconditional; escrow ties release to verified progress. And his practice of shedding bad reviews by rebranding under new business names matters far less when payment depends on documented completion rather than reputation. Maine law already caps deposits at no more than one-third of the contract price for projects over $3,000, but caps are only as good as enforcement — escrow builds the protection into the transaction itself rather than leaving it to a lawsuit after the money is gone.</p>
            <p>Maine lawmakers are moving toward licensing: LD 1226, which would require licenses for residential projects over $15,000, is set to take effect January 1, 2027. But licensing addresses who may work, not how money moves. For homeowners, structured payment — releasing funds only against completed, inspected work — remains the most direct defense against exactly the kind of loss the Galvez victims suffered.</p>

            <h2>Sources</h2>
            <ul className="article-sources">
              <li><a href="https://wgme.com/news/i-team/portland-contractor-pleads-guilty-to-felony-theft-ordered-to-repay-more-homeowners" target="_blank" rel="noopener noreferrer">WGME/CBS13 I-Team — Galvez pleads guilty</a></li>
              <li><a href="https://wgme.com/news/i-team/maine-contractor-at-center-of-i-team-investigation-faces-criminal-charges-ag-lawsuit" target="_blank" rel="noopener noreferrer">WGME/CBS13 I-Team — Criminal charges &amp; AG lawsuit</a></li>
              <li><a href="https://wgme.com/news/i-team/maine-contractor-accused-of-wrongdoing-reaches-civil-deal-with-restitution-for-victims" target="_blank" rel="noopener noreferrer">WGME/CBS13 I-Team — Civil settlement &amp; restitution</a></li>
              <li><a href="https://wgme.com/news/i-team/portland-contractor-accused-of-theft-waives-arraignment" target="_blank" rel="noopener noreferrer">WGME/CBS13 I-Team — Contractor waives arraignment</a></li>
              <li><a href="https://wgme.com/news/i-team/maine-homeowners-costly-contractor-dispute-highlights-calls-for-consumer-protections" target="_blank" rel="noopener noreferrer">WGME/CBS13 I-Team — Costly contractor dispute / consumer protections</a></li>
              <li><a href="https://www.pressherald.com/2025/06/26/maine-contractor-accused-of-significant-home-repair-fraud/" target="_blank" rel="noopener noreferrer">Portland Press Herald — &apos;Significant&apos; home repair fraud</a></li>
              <li><a href="https://www.pressherald.com/2024/01/14/with-increased-demand-for-home-contractors-is-time-right-for-licensing-requirements/" target="_blank" rel="noopener noreferrer">Portland Press Herald — Contractor licensing debate</a></li>
              <li><a href="https://www.maine.gov/ag/consumer-protection/consumer-help-topics/housing/home-construction-contracts" target="_blank" rel="noopener noreferrer">Maine Attorney General — Home Construction Contracts</a></li>
              <li><a href="https://www1.maine.gov/ag/consumer/housing/for_contractors.shtml" target="_blank" rel="noopener noreferrer">Maine Attorney General — For Contractors (no licensing)</a></li>
              <li><a href="https://www.ptla.org/home-repair-contracts-maine" target="_blank" rel="noopener noreferrer">Pine Tree Legal Assistance — Home Repair Contracts in Maine</a></li>
              <li><a href="https://wgme.com/news/i-team/long-overdue-maine-lawmakers-once-again-debate-bill-to-license-home-contractors" target="_blank" rel="noopener noreferrer">WGME/CBS13 I-Team — Maine lawmakers debate contractor licensing (LD 1226)</a></li>
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
