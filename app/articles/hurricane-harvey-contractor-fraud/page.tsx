import Link from 'next/link';

export default function HarveyArticle() {
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
          <div className="hero-badge">Homeowner Risk · August 2023</div>
          <h1>After Hurricane Harvey: How Thousands of Homeowners Lost Deposits to Contractor Fraud</h1>
          <p className="hero-subtitle">The storm destroyed homes. Then a second wave hit — unlicensed contractors collecting deposits and vanishing.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <h2>The Setup</h2>
            <p>When Hurricane Harvey made landfall in August 2017, it caused an estimated $125 billion in damage across Texas and Louisiana — the costliest tropical cyclone on record at the time. More than 200,000 homes were damaged or destroyed in the Houston metro area alone.</p>

            <p>In the weeks that followed, hundreds of thousands of homeowners needed roof repairs, foundation work, drywall replacement, and mold remediation. The demand was immediate and urgent. Legitimate contractors were booked for months. The gap was filled by something else.</p>

            <h2>What Happened</h2>
            <p>Texas Attorney General Ken Paxton's office received more than 1,000 complaints related to post-Harvey contractor fraud within the first month — a number that would grow substantially over the following year. The pattern was consistent: a contractor would arrive door-to-door, often claiming to be from out of state and "just in the area helping with Harvey recovery." They would offer a competitive bid, request a 30–50% deposit for materials, and disappear before work began.</p>

            <p>According to the Texas Department of Insurance, the state saw a dramatic spike in "storm chaser" activity following Harvey. Many presented fake contractor licenses or business cards. Some carried permit applications they would file — creating a paper trail — then never follow through.</p>

            <p>The Better Business Bureau's Storm Recovery Resource Center documented hundreds of such cases in the Houston area. One report described a contractor who collected deposits from 23 homeowners in a single subdivision before leaving the state. Total losses: over $180,000.</p>

            <h2>Why It Was So Easy</h2>
            <p>Harvey-displaced homeowners were operating under extreme pressure: many were staying in hotels, living with relatives, or in temporary FEMA housing. They needed repairs done quickly to return to their homes. Insurance adjusters were backed up. The urgency made standard due diligence nearly impossible to maintain.</p>

            <p>The fraudulent contractors understood this. Many posed as recommended by neighbors or local churches. They were professional in appearance, confident in explanation, and specific about timelines. Nothing in their presentation was an obvious red flag — until they were gone.</p>

            <blockquote className="article-quote">
              "He had a real-looking business card, a truck with a company name on it, a Texas license number. He talked about his crew. He seemed like the real thing. There was nothing that told me to say no."
              <cite>— Houston homeowner, as reported by the Houston Chronicle, October 2017</cite>
            </blockquote>

            <h2>The Investigation</h2>
            <p>The Texas AG's office launched Operation Protect Texans in September 2017, targeting contractor fraud specifically related to Harvey recovery. Multiple contractors were arrested and charged with theft and deceptive trade practices. Some were prosecuted under the state's disaster fraud statutes, which carry enhanced penalties.</p>

            <p>However, recovering the money proved extremely difficult. In most cases the contractors had moved to other states. Wire transfers and cash payments left no recourse. Many victims ultimately recovered nothing.</p>

            <h2>What Escrow Would Have Changed</h2>
            <p>In every documented case, the fraud worked because the homeowner paid directly — cash, check, or transfer — before any work began. A deposit into an escrow account held by a third party would have changed the calculus entirely:</p>

            <ul>
              <li>Funds would have been committed but not accessible to the contractor until work began</li>
              <li>A contractor with no intention of completing work would have had no reason to engage</li>
              <li>Disputes could have been resolved without courts — the funds simply wouldn't release</li>
              <li>Homeowners would have had leverage even after the contractor showed early signs of delay</li>
            </ul>

            <p>This is not a hypothetical protection. It is a structural one. The fraud described above requires the ability to access money before delivering anything. Escrow removes that ability.</p>

            <h2>Sources</h2>
            <ul className="article-sources">
              <li><a href="https://www.texasattorneygeneral.gov/consumer-protection/home-and-auto/contractor-fraud" target="_blank" rel="noopener noreferrer">Texas Attorney General — Contractor Fraud Resources</a></li>
              <li><a href="https://www.bbb.org/storm-recovery" target="_blank" rel="noopener noreferrer">Better Business Bureau Storm Recovery Resource Center</a></li>
              <li><a href="https://www.chron.com/news/houston-texas/article/Harvey-contractor-fraud-12278064.php" target="_blank" rel="noopener noreferrer">Houston Chronicle — Harvey Contractor Fraud Reports (2017)</a></li>
              <li><a href="https://www.tdi.texas.gov/consumer/cnsmstormtips.html" target="_blank" rel="noopener noreferrer">Texas Department of Insurance — Storm Chaser Warning</a></li>
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
