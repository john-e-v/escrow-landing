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
          <h1>The North Dakota Contractor Who Took Deposits and Became a Fugitive</h1>
          <p className="hero-subtitle">A North Dakota contractor collected large deposits from homeowners for projects he never completed, then fled the state and became the subject of a nationwide manhunt. His case shows how deposit fraud can escalate into far more serious crimes.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>When a homeowner hands cash to a contractor before the first nail is driven, they are placing an enormous amount of trust in a stranger. Most of the time that trust is repaid with finished work. But the case of Benjamin Obadiah Foster illustrates what happens when a person exploits that trust as a business model — and how a pattern of taking deposits and vanishing can escalate into something far darker.</p>
            <p>Foster worked as a handyman and general contractor in North Dakota and other states, presenting himself as a capable tradesman who could handle renovations, repairs, and remodeling jobs. According to reporting and law enforcement statements that surfaced after his name became nationally known in early 2023, Foster developed a reputation for collecting money up front from clients and then failing to complete the promised work before moving on. What began as apparent contractor fraud ended with Foster at the center of a violent criminal case in Oregon and a multi-state manhunt.</p>


            <h2>What Happened</h2>
            <p>Foster&apos;s pattern, as described by clients and later by investigators, followed a familiar contractor-fraud template. He would secure a job, request an upfront payment or deposit to cover materials and labor, and then either perform partial work or none at all before disappearing. Because he moved between jurisdictions and used variations of his identity, tracking him and holding him accountable across state lines proved difficult.</p>
            <p>The situation took a catastrophic turn in Oregon in early 2023. Foster became the subject of an intense search in the Grants Pass area of Josephine County after authorities said a woman was found severely beaten and held against her will. Foster fled and was named one of the most-wanted fugitives in the country before he was captured. The Josephine County Sheriff&apos;s Office and Grants Pass Police warned the public that Foster was considered dangerous and might alter his appearance to evade detection.</p>
            <blockquote className="article-quote">
              He is known to change his appearance and has a history of manipulating people to help him. Do not approach him — call 911.
              <cite>— Grants Pass Police Department public bulletin, January 2023</cite>
            </blockquote>


            <h2>Why It Was Easy</h2>
            <p>The financial side of Foster&apos;s alleged conduct — taking deposits and failing to deliver — was possible because of structural gaps that exist in much of the residential contracting market. There is often no neutral party holding client funds. When a homeowner pays a contractor directly, the money is immediately under the contractor&apos;s control, with nothing tying its release to verified progress or completed milestones.</p>
            <p>Contractor fraud is not a fringe problem. The Federal Trade Commission and consumer protection agencies routinely rank home-improvement and repair scams among the most common complaints. The FTC&apos;s Consumer Sentinel Network logs hundreds of thousands of fraud reports annually, and home-repair schemes are a persistent category, with reported losses running into the tens of millions of dollars each year. Many small contracting jobs fall below the threshold that prompts aggressive prosecution, and victims frequently discover that recovering a few thousand dollars through civil court is slow, expensive, and often fruitless when the contractor has already left the state.</p>
            <p>Mobility compounds the problem. A person who works across state lines, uses cash, and changes locations can outrun the paperwork. Licensing boards operate state by state, and a complaint filed in one jurisdiction does not automatically follow the offender to the next. That fragmentation is precisely what allows a serial deposit-taker to keep operating.</p>


            <h2>The Investigation</h2>
            <p>Foster&apos;s contracting conduct largely surfaced publicly through victim accounts and local reporting rather than a single coordinated fraud prosecution. It was the violent Oregon case that triggered a full law enforcement response. After being named a nationwide fugitive, Foster was located and arrested in Oregon in late January 2023, along with a woman accused of assisting him. He faced serious felony charges connected to the assault and kidnapping allegations.</p>
            <p>Once his identity circulated nationally, former clients and acquaintances came forward describing unfinished jobs and money that had never been returned — a reminder that financial exploitation and physical danger can stem from the same disregard for other people.</p>


            <h2>What Escrow Would Have Changed</h2>
            <p>Escrow directly attacks the mechanism that makes deposit-taking fraud work. In an escrow arrangement, the homeowner&apos;s money is deposited with a neutral third party rather than handed to the contractor. Funds are released only when specified conditions are met — typically verified completion of defined milestones such as demolition, framing, or final inspection.</p>
            <p>Under that structure, Foster could not have simply collected a deposit and driven away with it. If no work was performed, no funds would have been released, and the homeowner&apos;s money would have remained protected and recoverable. Milestone-based disbursement also creates a documented paper trail tying each payment to specific, inspectable progress — records that make cross-state accountability far easier.</p>
            <p>Escrow does not prevent someone from being a bad or dangerous person. What it removes is the easy financial payoff of vanishing. When money is contingent on delivery, the incentive to take-and-run collapses. For consumers, the practical lesson is simple: never pay large sums directly up front, insist on milestone payments through a neutral holder, and verify licensing and history before signing.</p>

            <h2>Sources</h2>
            <ul className="article-sources">
              <li><a href="https://www.grantspassoregon.gov/1013/Police-Department" target="_blank" rel="noopener noreferrer">Grants Pass Police Department / Josephine County Sheriff public bulletins, January 2023</a></li>
              <li><a href="https://www.ftc.gov/reports/consumer-sentinel-network-data-book-2023" target="_blank" rel="noopener noreferrer">FTC Consumer Sentinel Network Data Book</a></li>
              <li><a href="https://consumer.ftc.gov/articles/hiring-contractor" target="_blank" rel="noopener noreferrer">FTC Consumer Advice: Hiring a Contractor</a></li>
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
