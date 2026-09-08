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
          <div className="hero-badge">Homeowner Risk · July 2026</div>
          <h1>The Solar Company That Took Deposits and Left Panels Unconnected Across Georgia</h1>
          <p className="hero-subtitle">Vision Solar collected thousands from Georgia and multi-state homeowners for rooftop solar installations that were never completed or connected to the grid. Customers were left paying loans on systems that produced no power.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>For thousands of homeowners across Georgia and the eastern United States, the promise was straightforward: install rooftop solar panels, lower your electricity bills, and take advantage of federal tax incentives. What many of them received instead was a set of panels bolted to their roofs, a new loan payment drawn from their bank accounts, and no working solar system connected to the grid.</p>
            <p>Vision Solar, a residential solar installer headquartered in New Jersey that expanded aggressively across multiple states including Georgia, Florida, Pennsylvania, and Massachusetts, became the subject of mounting consumer complaints and state investigations in 2023. The core grievance echoed by customer after customer was the same: they were placed on long-term financing and billed for systems that had never been switched on.</p>


            <h2>What Happened</h2>
            <p>Vision Solar grew rapidly through door-to-door and telephone sales, signing homeowners to solar installations frequently paired with third-party loans that could stretch to 20 or 25 years. In many reported cases, crews arrived, mounted panels, and left. But the projects stalled at the critical final steps: passing local inspection, securing utility interconnection approval, and receiving &apos;permission to operate&apos; from the power company.</p>
            <p>Until a system is interconnected and granted permission to operate, it produces no usable electricity and delivers none of the promised savings. Yet numerous customers reported that loan servicers began drawing monthly payments regardless, leaving them paying both their full utility bill and a new solar loan for hardware that sat dormant on their roofs.</p>
            <p>By 2023, complaints had accumulated with attorneys general and consumer agencies in several states. Connecticut Attorney General William Tong sued Vision Solar that March, alleging unfair and deceptive sales practices; the suit later produced a $5 million judgment against the by-then-bankrupt company. Florida Attorney General Ashley Moody filed a separate suit that December. An 18-plaintiff multistate class action followed, naming customers in Arizona, Massachusetts, New Jersey, Connecticut, Florida, and Pennsylvania who described high-pressure sales, unpermitted work, and loan payments on systems that were never connected to the grid. Vision Solar filed for Chapter 7 bankruptcy on December 28, 2023, listing $100 million to $500 million in debt and more than 60 pending legal actions across seven states — leaving many customers without recourse and without functioning systems.</p>


            <h2>Why It Was So Easy</h2>
            <p>The structure of residential solar financing created a gap that made this outcome possible. In a typical deal, a lender pays the installer a large share of the project cost early, often when panels are physically installed rather than when the system is verified as operational. The homeowner&apos;s loan obligation begins on a schedule tied to that disbursement, not to the moment the system actually generates electricity.</p>
            <p>This decoupling of payment from performance is the heart of the problem. The installer receives funds and the consumer incurs debt before the only outcome that matters, a working and interconnected system, is confirmed. When an installer is disorganized, undercapitalized, or overwhelmed by rapid growth, the last-mile steps of inspection and interconnection can drag on for months or never happen at all.</p>
            <p>High-pressure sales tactics compounded the risk. Complaints described salespeople overstating savings, rushing signatures, and glossing over the distinction between installation and activation. Once documents were signed and panels installed, the financial machinery advanced automatically, leaving homeowners to fight uphill against loan servicers who considered the debt valid.</p>


            <h2>What the Investigations Found</h2>
            <p>State enforcement actions painted a consistent picture. Connecticut's suit alleged deceptive and unfair trade practices, including failure to complete work and misrepresentation of financial benefits, and won a $5 million judgment. The multistate class action covered the same pattern across six states, and Vision Solar's own bankruptcy filing — over 60 pending legal actions in seven states — corroborated the scale of the complaints rather than an isolated dispute.</p>
            <p>Bankruptcy typically halts civil claims and leaves customers as unsecured creditors with little prospect of recovery. Many were left holding loans on hardware that no licensed electrician had ever energized.</p>


            <h2>What Escrow Would Have Changed</h2>
            <p>The Vision Solar failures share a single structural weakness: money moved to the installer, and debt attached to the consumer, before the promised result existed. An escrow-based payment structure directly addresses this by holding funds with a neutral third party and releasing them only when defined milestones are independently verified.</p>
            <p>Under such an arrangement, a portion of project funds might release when permits are approved, another portion when panels are installed and pass inspection, and the final and largest portion only when the utility grants permission to operate and the system is confirmed to generate power. The homeowner&apos;s loan payments, similarly, would begin only at activation.</p>
            <p>This single change would have flipped the incentives. An installer that abandoned a project at the inspection or interconnection stage would forfeit the largest tranche of payment, giving it a strong reason to finish the last mile. A homeowner would never carry a loan payment for a dormant system, because the debt would not activate until the escrow agent verified an operating installation.</p>
            <p>Escrow does not require trusting the installer&apos;s good faith or the lender&apos;s diligence. It substitutes verification for trust at each step. In the Vision Solar case, milestone-conditioned escrow would have converted thousands of dead systems and unjust loans into either completed projects or refunded deposits, because no final payment would have released without proof that the promise had been kept.</p>

            <h2>Sources</h2>
            <ul className="article-sources">
              <li><a href="https://portal.ct.gov/AG/Press-Releases/2023-Press-Releases/Attorney-General-Tong-Sues-Vision-Solar-Over-Unfair-and-Deceptive-Sales" target="_blank" rel="noopener noreferrer">Connecticut Attorney General — Attorney General Tong Sues Vision Solar Over Unfair and Deceptive Sales</a></li>
              <li><a href="https://portal.ct.gov/ag/press-releases/2024-press-releases/attorney-general-tong-announces-5-million-judgment-against-bankrupt-vision-solar" target="_blank" rel="noopener noreferrer">Connecticut Attorney General — $5 Million Judgment Against Bankrupt Vision Solar</a></li>
              <li><a href="https://www.yahoo.com/news/vision-solar-files-bankruptcy-amid-225704943.html" target="_blank" rel="noopener noreferrer">Vision Solar Files for Bankruptcy Amid Lawsuits From Two Attorneys General</a></li>
              <li><a href="https://topclassactions.com/lawsuit-settlements/consumer-products/vision-solar-class-action-claims-company-defrauded-customers-with-nonworking-defective-systems/" target="_blank" rel="noopener noreferrer">Vision Solar Class Action — Customers Defrauded With Nonworking, Defective Systems (multistate)</a></li>
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
