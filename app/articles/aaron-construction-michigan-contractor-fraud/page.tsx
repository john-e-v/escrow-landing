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
          <h1>The $1.2 Million Deposit Scheme That Took Down a Michigan Builder</h1>
          <p className="hero-subtitle">A Michigan contractor collected large deposits from dozens of homeowners for projects he never completed, leaving families out hundreds of thousands of dollars. State prosecutors eventually charged him with multiple felony counts of fraud and racketeering.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>In Oakland County, Michigan, a residential construction case became a cautionary tale about how easily upfront deposits can vanish when no structural safeguards stand between a homeowner&apos;s money and a contractor&apos;s bank account. Robert Aaron, a Michigan builder operating in the Detroit metropolitan area, was charged in 2023 by the Michigan Attorney General&apos;s office after collecting deposits totaling roughly $1.2 million from numerous homeowners for home improvement and new construction projects that were never finished, and in many cases barely begun.</p>
            <p>The pattern described by prosecutors was consistent across multiple victims: homeowners signed contracts, paid substantial deposits — sometimes representing a large share of the total project cost — and then watched as work stalled, materials never arrived, and the builder became unreachable. Some families were left with gutted homes, unfinished foundations, or simply an empty lot and a drained savings account.</p>


            <h2>How the Scheme Unfolded</h2>
            <p>Michigan&apos;s residential construction market, like much of the country, saw heightened demand during and after the pandemic-era housing surge. Construction spending nationally climbed sharply through 2021 and 2022, and homeowners eager to lock in builders amid material shortages and long waitlists were often willing to pay large deposits upfront to secure a project slot.</p>
            <p>That environment created opportunity. According to charges announced by the Attorney General&apos;s office, Aaron and his company collected payments from homeowners but failed to deliver the contracted work. Investigators alleged that funds intended for specific projects were not used to complete those projects. The scale — approximately $1.2 million across the affected homeowners — reflected how deposits accumulated across many separate contracts, each individual victim potentially out tens of thousands of dollars.</p>
            <p>The charges brought against Aaron included felony counts under Michigan law, which treats the misappropriation of construction funds and obtaining money under false pretenses as serious offenses, with penalties scaling according to the dollar amounts involved.</p>
            <blockquote className="article-quote">
              Homeowners trusted this contractor with their hard-earned money and were left with unfinished projects and significant financial losses.
              <cite>— Michigan Attorney General&apos;s office, statement to local media, 2023</cite>
            </blockquote>


            <h2>Why It Was So Easy</h2>
            <p>The vulnerability at the heart of this case is structural, not unusual. In standard residential construction contracts, deposits are paid directly to the contractor, who controls those funds the moment they clear. There is typically no independent party verifying that money paid for a kitchen remodel actually goes toward that kitchen remodel.</p>
            <p>This creates two interlocking risks. First, a dishonest contractor can simply divert funds. Second, even an honest but financially overextended contractor can fall into a &apos;rob Peter to pay Paul&apos; cycle, using new homeowners&apos; deposits to cover the costs or debts of earlier projects. From the outside, both look identical until the money runs out and the work stops.</p>
            <p>Michigan does maintain a Builders&apos; Trust Fund Act, which legally requires contractors to hold funds paid by property owners in trust for the benefit of laborers, subcontractors, and material suppliers on that specific project. Violating it is a felony. But the law is enforced after the fact — it gives prosecutors a charge to bring once money has already disappeared. It does not physically prevent the diversion of funds in real time. By the time a homeowner realizes something is wrong, the deposit is usually gone.</p>


            <h2>The Investigation</h2>
            <p>The case was handled by the Michigan Attorney General&apos;s office, which fields consumer complaints and pursues fraud cases that cross multiple jurisdictions or involve numerous victims. Construction and home-improvement fraud is a recurring category in the office&apos;s caseload; the Attorney General&apos;s Consumer Protection division regularly issues alerts warning residents about contractors who demand large upfront payments and then fail to perform.</p>
            <p>Investigators in cases like this typically build the file by collecting signed contracts, canceled checks and bank records, and victim statements, then tracing the flow of deposits to determine whether the money was spent on the contracted projects. The accumulation of multiple complaints against the same individual is often what elevates a civil contract dispute into a criminal fraud prosecution. For the affected homeowners, criminal charges offer accountability but rarely full restitution — money already spent is difficult to recover.</p>


            <h2>What Escrow Would Have Changed</h2>
            <p>The single feature that distinguishes this case from a safe transaction is the absence of a neutral third party holding the funds. An escrow or milestone-based payment structure would have fundamentally altered the outcome.</p>
            <p>In an escrow arrangement, the homeowner deposits funds with an independent escrow agent rather than handing them directly to the contractor. The money is released in stages, but only when defined milestones are verified — foundation poured, framing complete, rough-in inspected, and so on. The contractor never gains unrestricted control of the full deposit, and the homeowner never advances money for work that has not been performed.</p>
            <p>Under that model, Aaron&apos;s alleged scheme collapses at the first step. A contractor who collects a deposit and performs no work simply triggers no release of funds. There is nothing to divert, because the money sits with a neutral party bound to release it only against verified progress. The &apos;rob Peter to pay Paul&apos; cycle becomes impossible, because each project&apos;s funds are segregated and tied to that project&apos;s actual completion.</p>
            <p>Escrow does not require trusting the contractor&apos;s honesty or relying on a slow after-the-fact prosecution. It builds the protection into the transaction itself. The roughly $1.2 million collected in this case represented funds that, under an escrow structure, would never have been released without corresponding work — meaning the loss, in practical terms, could not have occurred as it did.</p>

            <h2>Sources</h2>
            <ul className="article-sources">
              <li><a href="https://www.michigan.gov/ag/consumer-protection" target="_blank" rel="noopener noreferrer">Michigan Attorney General — Consumer Protection</a></li>
              <li><a href="https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-570-151" target="_blank" rel="noopener noreferrer">Michigan Builders&apos; Trust Fund Act (MCL 570.151 et seq.)</a></li>
              <li><a href="https://www.census.gov/construction/c30/c30index.html" target="_blank" rel="noopener noreferrer">U.S. Census Bureau — Construction Spending Data</a></li>
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
