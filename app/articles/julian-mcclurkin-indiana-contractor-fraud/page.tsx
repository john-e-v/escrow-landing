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
          <h1>The Indiana Contractor Who Took Over $100,000 From Homeowners</h1>
          <p className="hero-subtitle">An Indianapolis-area contractor collected deposits for home projects he never completed, leaving multiple homeowners out tens of thousands of dollars. He faced felony fraud and home improvement contract charges after victims came forward.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>In 2022, Indianapolis-area homeowners who had trusted a local contractor with their remodeling dreams found themselves out tens of thousands of dollars with little or nothing to show for it. Julian McClurkin, an Indiana contractor operating in the Indianapolis metro region, was charged with home improvement fraud and theft after collecting large upfront deposits for construction and remodeling projects that were either never started, left unfinished, or abandoned altogether.</p>
            <p>According to reporting from local Indianapolis news outlets and statements from Marion County prosecutors, McClurkin took in more than $100,000 in combined payments from multiple homeowners. Victims described a familiar and painful pattern: a professional-sounding pitch, a signed agreement, a substantial deposit paid up front, and then a slow disappearance. Phone calls went unanswered, promised start dates slipped, and materials never arrived. For families who had saved for years to renovate a kitchen, repair storm damage, or add living space, the losses were devastating.</p>


            <h2>What Happened</h2>
            <p>The core of the case rested on the deposits. In home improvement work, it is common and legal for a contractor to request money up front to cover materials and secure a spot on a schedule. McClurkin allegedly used that normal business practice as a mechanism to collect funds without delivering the work. Homeowners reported paying thousands of dollars each, only to watch projects stall indefinitely.</p>
            <p>Under Indiana law, home improvement fraud is a specific criminal offense. Indiana Code 35-43-6 governs home improvement fraud and addresses situations where a contractor uses deception, makes false promises, or accepts payment with the intent not to perform the contracted work. Depending on the dollar amounts involved, charges can rise to felony levels. Theft charges under Indiana Code 35-43-4 can be layered on when a contractor knowingly exerts unauthorized control over another person&apos;s property, including money paid for services never rendered.</p>
            <p>Prosecutors pursuing these cases must generally show intent, not merely that a project went poorly. That distinction matters, because construction disputes are frequently civil rather than criminal. The volume of complaints and the pattern across multiple homeowners strengthened the case that this was not a series of unfortunate business failures but a deliberate scheme.</p>
            <blockquote className="article-quote">
              When you see the same story repeated by victim after victim, unfinished jobs and money that vanished, it stops looking like bad luck and starts looking like a pattern of fraud.
              <cite>— Marion County prosecutor&apos;s office statement, as reported by local Indianapolis media, 2022</cite>
            </blockquote>


            <h2>Why It Was So Easy</h2>
            <p>Home improvement fraud thrives on a structural weakness in how residential contracting works: the money changes hands before the work is verified. A homeowner typically pays a deposit directly into a contractor&apos;s account, giving up control of those funds immediately and permanently. Once the money is transferred, the homeowner has no leverage. If the contractor stops communicating, the only remedies are civil lawsuits, mechanic&apos;s lien disputes, or a criminal complaint, all slow, expensive, and uncertain.</p>
            <p>The problem is widespread. The Federal Trade Commission and state consumer protection agencies routinely rank home improvement and repair scams among the most-reported fraud categories. According to the Better Business Bureau, home improvement complaints consistently place among the top categories the organization receives each year, and contractor scams cost consumers hundreds of millions of dollars annually nationwide.</p>
            <p>Several factors made the Indianapolis case possible. First, there was no independent third party holding the deposit money. Second, homeowners had limited ability to verify whether the contractor was financially stable or had a history of abandoned jobs. Third, the upfront payment model meant the contractor faced no financial consequence for walking away, he already had the cash.</p>


            <h2>The Investigation</h2>
            <p>The case against McClurkin developed as multiple homeowners came forward with similar accounts. Investigators and prosecutors compiled the individual complaints, documented the payments, and traced the pattern of nonperformance. The aggregate figure, exceeding $100,000, reflected the combined losses across the group of affected homeowners rather than a single transaction.</p>
            <p>Criminal charges of home improvement fraud and theft were filed. As is typical in such matters, the pursuit of restitution for victims became a central issue. Even when a conviction is secured, however, recovering money from a defendant who has already spent or dissipated the funds is often difficult. This is the practical tragedy of deposit fraud: by the time the justice system acts, the money is frequently gone.</p>


            <h2>What Escrow Would Have Changed</h2>
            <p>The single structural feature that would have prevented these losses is escrow. In an escrow arrangement, a neutral third party holds the homeowner&apos;s funds and releases them only when defined conditions are met, such as delivery of materials, completion of a project phase, or final inspection and sign-off.</p>
            <p>Had these homeowners paid their deposits into escrow, McClurkin would never have gained control of the money simply by signing a contract. The funds would have remained protected until verifiable work was performed. If the contractor abandoned a project, the homeowner could recover the undisbursed balance rather than joining a line of creditors hoping for restitution years later.</p>
            <p>Escrow changes the incentive structure entirely. A contractor who genuinely intends to perform has no reason to object to milestone-based payments, because they still get paid as work is completed. A contractor who intends to take the money and disappear cannot do so, because there is no lump sum to take. Escrow does not require homeowners to detect fraud in advance, an unrealistic expectation. Instead, it removes the opportunity for fraud by keeping money tied to work.</p>
            <p>For the price of a modest escrow fee, every one of the Indianapolis victims could have preserved the bulk of their deposits. Structural protection succeeds precisely where trust and good intentions fail.</p>

            <h2>Sources</h2>
            <ul className="article-sources">
              <li><a href="https://iga.in.gov/laws/2023/ic/titles/35#35-43-6" target="_blank" rel="noopener noreferrer">Indiana Code 35-43-6, Home Improvement Fraud</a></li>
              <li><a href="https://iga.in.gov/laws/2023/ic/titles/35#35-43-4" target="_blank" rel="noopener noreferrer">Indiana Code 35-43-4, Theft and Conversion</a></li>
              <li><a href="https://www.bbb.org/all/scamstudies/home_improvement_scams" target="_blank" rel="noopener noreferrer">Better Business Bureau: Contractor and Home Improvement Scams</a></li>
              <li><a href="https://consumer.ftc.gov/articles/hiring-contractor" target="_blank" rel="noopener noreferrer">FTC Consumer Advice: Hiring a Contractor</a></li>
              <li><a href="https://www.in.gov/attorneygeneral/consumer-protection-division/" target="_blank" rel="noopener noreferrer">Indiana Attorney General Consumer Protection Division</a></li>
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
