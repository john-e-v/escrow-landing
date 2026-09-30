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
          <h1>The Plymouth Pool Contractor Who Took $500K and Left Backyards Unfinished</h1>
          <p className="hero-subtitle">During the pandemic pool boom, Plymouth contractor Steven Docchio collected more than $500,000 from Massachusetts homeowners with unrealistic timelines and false promises, then abandoned projects. In November 2025 he pleaded guilty to four counts of larceny and was sentenced to state prison.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>For dozens of Massachusetts homeowners who dreamed of a backyard swimming pool during the COVID-19 pandemic, the reality they got instead was a hole in the ground, a half-poured concrete slab, and tens of thousands of dollars gone. The man behind those unfinished projects was Steven Docchio, a Plymouth home-improvement contractor who used his swimming pool business to defraud homeowners across the state.</p>
            <p>On November 18, 2025, Steven Docchio, 59, pleaded guilty in Plymouth Superior Court to four counts of Larceny Over $1,200. He was sentenced to two and a half years in state prison, with nine months to be served and the balance suspended for a total of ten years of probation. As part of his sentence, he was ordered to pay restitution to his victims and is prohibited from engaging in any construction or landscaping work during his probationary term. Prosecutors had sought a far harsher term of four and a half to five years in state prison followed by five years of probation.</p>
            <blockquote className="article-quote">
              This so-called contractor made promises to homeowners that he never delivered upon.
              <cite>— Plymouth County District Attorney Timothy J. Cruz, Plymouth County DA&apos;s Office press release, November 18, 2025</cite>
            </blockquote>


            <h2>What Happened</h2>
            <p>The scheme unfolded during a period of extraordinary demand. During the height of the pandemic, demand for residential swimming pools surged as homeowners invested in their backyards while spending more time at home. Docchio exploited this demand by providing homeowners with unrealistic timelines and falsely claiming he had special access to building departments and material vendors.</p>
            <p>Prosecutors described a repeating pattern. Docchio landed contracts by giving customers unrealistic deadlines, then never ordered the expensive supplies after homeowners had written large checks. When confronted about the lack of progress, he repeatedly gave false assurances that materials had been ordered and work would resume shortly. After collecting substantial payments — often tens of thousands of dollars — he abandoned the projects and left pool installations unfinished. In total, he collected more than $500,000 for work he never completed.</p>
            <p>Court filings laid out what that meant on the ground. An assistant district attorney told the court that Docchio&apos;s actions resulted in significant financial losses for homeowners and left properties in dangerous, unfinished conditions. In one case, an East Bridgewater homeowner wanted a pool for his autistic son, but Docchio abandoned the project without finishing it, leaving a partially constructed concrete slab. In West Boylston, he allegedly took a deposit to build a pool and patio, then dug a hole he left unfilled — creating what prosecutors called a dangerous hazard for the family.</p>
            <blockquote className="article-quote">
              His actions resulted in significant financial losses for homeowners and left properties in dangerous, unfinished conditions.
              <cite>— Plymouth Assistant District Attorney Alex Zane, sentencing memo via Plymouth Independent, November 2025</cite>
            </blockquote>


            <h2>Why the Fraud Was So Easy to Pull Off</h2>
            <p>The timing was central to how the scheme worked. Industry data shows the pandemic triggered a historic construction surge: analysts estimate that pandemic-driven demand pushed new inground pool installations to roughly 120,000 to 130,000 per year during 2020 and 2021, up from a typical baseline of around 80,000 to 90,000 annually. With builders booked out and supply chains strained by shortages of raw materials, equipment, labor, and shipping, long delays and stalled projects became normal across the entire industry — which gave a dishonest contractor perfect cover.</p>
            <p>When every legitimate builder was quoting months-long lead times and blaming supply-chain backlogs, Docchio&apos;s excuses about delayed materials sounded entirely plausible. Homeowners who paid large deposits up front had little reason to suspect fraud when their neighbors&apos; legitimate pools were also running behind schedule.</p>
            <p>The structural weakness was the money itself. In standard home-improvement transactions, homeowners hand large deposits directly to the contractor before meaningful work begins. Once that money changes hands, the customer has almost no leverage. There was also a documented history that should have served as a warning: NBC10 Boston, whose &quot;To Catch a Contractor&quot; investigation first exposed the pattern, reported that Docchio had already been banned as a contractor in Connecticut and Rhode Island before operating in Massachusetts.</p>


            <h2>What the Investigation Found</h2>
            <p>The case originated not with law enforcement but with journalism. An NBC10 Boston investigation in 2021 documented Docchio&apos;s trail of abandoned projects across Massachusetts, including enormous dirt holes left in people&apos;s backyards. That reporting helped spark a Plymouth County grand jury investigation, which resulted in a 17-count indictment against him in 2023.</p>
            <p>After the reporting aired, a state agency permanently revoked Docchio&apos;s home improvement contractor registration in Massachusetts. Notably, prosecutors said the conduct did not stop even then: at sentencing, Assistant District Attorney Alex Zane said Docchio continued taking advantage of homeowners even after the spotlight of NBC10 Boston&apos;s coverage and after having his contractor registration permanently revoked.</p>
            <p>The path to sentencing was lengthy. Docchio was originally indicted in January 2023 on 17 counts, but prosecutors agreed to dismiss most of the charges in exchange for a guilty plea. He had already spent roughly six months in jail before sentencing. As reported by NBC10 Boston, the terms of his probation include a requirement to pay $45,000 in restitution within 30 days of his release and a bar on working in the construction industry.</p>


            <h2>What Escrow Would Have Changed</h2>
            <p>The single feature that made this fraud possible was direct, up-front payment. Homeowners wrote large checks straight to Docchio, and once he held the cash, nothing structurally required him to perform. An escrow arrangement attacks that weakness at its root.</p>
            <p>In an escrow model, a homeowner&apos;s deposit does not go to the contractor. It is deposited with a neutral third party — an escrow agent, title company, or attorney — who holds the funds and releases them only when defined conditions are met. Payments are tied to verified milestones: permits pulled, excavation completed and inspected, the shell installed, the deck poured. Money moves only after a stage is actually finished, not when a contractor promises it will be.</p>
            <p>Applied to this case, escrow would have changed the outcome at every step. The East Bridgewater family would not have lost their full deposit on a project that stopped at a concrete slab, because funds for later stages would still have been held back. The West Boylston homeowners would not have paid for a pool that never advanced past an open, unfilled hole. Because Docchio&apos;s core tactic was collecting substantial payments and then abandoning the work, a milestone-gated escrow would have capped each victim&apos;s exposure to only the small slice of work actually completed — and it would have removed the incentive to walk away, since the bulk of the money would remain unreleased and recoverable.</p>
            <p>Escrow does not make a dishonest contractor honest. What it does is remove the opportunity. It converts a system built on trust and up-front cash into one built on verification, ensuring that a homeowner&apos;s money and a contractor&apos;s performance stay tied together until the job is genuinely done.</p>

            <h2>Sources</h2>
            <ul className="article-sources">
              <li><a href="https://plymouthda.com/news/2025-press-releases/contractor-sentenced-to-state-prison-after-pleading-guilty-to-larceny-charges/" target="_blank" rel="noopener noreferrer">Plymouth County District Attorney</a></li>
              <li><a href="https://www.boston.com/news/crime/2025/12/01/south-shore-man-sent-to-prison-for-pandemic-swimming-pool-scam/" target="_blank" rel="noopener noreferrer">Boston.com</a></li>
              <li><a href="https://www.plymouthindependent.org/plymouth-contractor-gets-nine-month-jail-term/" target="_blank" rel="noopener noreferrer">Plymouth Independent</a></li>
              <li><a href="https://www.nbcboston.com/investigations/steve-docchio-to-catch-a-contractor-guilty-plea/3847107/" target="_blank" rel="noopener noreferrer">NBC10 Boston — Guilty Plea</a></li>
              <li><a href="https://www.nbcboston.com/investigations/2-contractors-investigated-by-nbc10-boston-to-learn-fate-in-criminal-cases/3845112/" target="_blank" rel="noopener noreferrer">NBC10 Boston — 2 Contractors to Learn Fate</a></li>
              <li><a href="https://fallriverreporter.com/contractor-sentenced-to-state-prison-after-bilking-massachusetts-homeowners-out-of-hundreds-of-thousands-of-dollars/" target="_blank" rel="noopener noreferrer">Fall River Reporter</a></li>
              <li><a href="https://www.poolfounder.com/pool-service-industry-statistics" target="_blank" rel="noopener noreferrer">Pool Service Industry Statistics (PoolFounder)</a></li>
              <li><a href="https://www.aquamagazine.com/retail/article/15123501/state-of-the-industry-review-and-forecast" target="_blank" rel="noopener noreferrer">Aqua Magazine — State of the Industry</a></li>
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
