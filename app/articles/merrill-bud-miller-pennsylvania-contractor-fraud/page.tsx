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
          <h1>The Pennsylvania Contractor Who Took Deposits Across Three Counties — Then Pleaded Guilty</h1>
          <p className="hero-subtitle">Merrill &quot;Bud&quot; Miller, owner of HFDH LLC, collected home-improvement deposits from homeowners across York, Lancaster, and Dauphin counties and abandoned or never started the work. He pleaded guilty in York County in August 2025 while the Pennsylvania Attorney General moved to revoke his registration and recover restitution.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>For homeowners across south-central Pennsylvania, the pitch was reassuring: a veteran-owned contractor with decades of experience, polished Facebook advertising, and a friendly manner. But according to court records, police, and the Pennsylvania Office of Attorney General, that pitch masked a repeating pattern of collecting deposits and disappearing.</p>
            <p>Merrill &quot;Bud&quot; Miller — owner of HFDH LLC (which also operated as Veteran Deck Builders), based in Hummelstown, Dauphin County — has faced criminal charges in multiple Pennsylvania counties for accepting money from homeowners and then abandoning projects mid-work or never starting them at all. In August 2025, Miller pleaded guilty to a York County charge, even as new charges and a state lawsuit mounted against him.</p>
            <p>This article walks through what happened, why it was so easy for the money to disappear, what investigators found, and how a structural protection like escrow would have changed the outcome for these homeowners.</p>


            <h2>The Guilty Plea in York County</h2>
            <p>The case that produced a conviction began years before the plea. According to online court documents, Merrill &quot;Bud&quot; Miller pleaded guilty to charges of receiving advanced payment for services and failure to perform.</p>
            <p>The underlying facts trace to Carroll Township. A couple told police they hired Miller in September 2021 to enclose an area of their home for an addition, signing a contract and paying a $37,500 deposit. Miller was supposed to start work in December 2021, but the couple said that over the following months they either could not reach him or he took a long time to return calls. When an officer later spoke with Miller, he claimed a hardware company was &quot;nickeling and diming&quot; him over doors and windows — but police said they had an email from that company stating it had canceled the window order because it could not reach Miller. Police added that Miller never applied for the building permits and never returned the deposit.</p>


            <h2>A Pattern Across Three Counties</h2>
            <p>The York County plea was not an isolated incident. Miller became the subject of a CBS 21 Investigates report after being accused of similar conduct in York, Lancaster, and Dauphin counties.</p>
            <p>In Dauphin County, one family, the O&apos;Briens, told CBS 21 they paid Miller $6,000 in April 2024 to fix an aging porch, only to be met with months of excuses. Another homeowner, Brett Novosat, said he cut Miller a $3,000 check partly because he trusted the veteran-owned branding.</p>
            <p>In Lancaster County, the allegations grew more serious. Lancaster Township Police said Miller signed two home improvement contracts to remodel basements and kitchens, took $33,100 from the victims, and started structural, electrical, and demolition work before abandoning the projects. Police said the homes were left with exposed electrical panels and wires, holes in basement floors, and debris strewn throughout. He was later charged with two counts each of home improvement fraud, theft by deception, deceptive or fraudulent business practices, and securing execution of documents by deception, turning himself in on a warrant and being released on a $50,000 bond. Even after the guilty plea, additional accusations surfaced in York County involving an $8,500 deck deposit for a project that never began.</p>
            <blockquote className="article-quote">
              He said all the right things. He said, &apos;Yes, we can do this... Sign the contract.&apos;
              <cite>— Adrienne O&apos;Brien, homeowner, CBS 21 (local21news.com), July 3, 2025</cite>
            </blockquote>


            <h2>Why It Was So Easy</h2>
            <p>The mechanics of these cases were mundane, which is exactly what made them effective. In each instance, a homeowner handed over a large sum of money before meaningful, verifiable work existed — and once the check cleared, the homeowner had almost no leverage.</p>
            <p>Pennsylvania does regulate this space. Under the Home Improvement Consumer Protection Act (HICPA), contractors performing $5,000 or more in work per year must register with the Attorney General, and for contracts over $5,000 a contractor generally cannot collect more than one-third of the total contract price as a deposit, plus the cost of listed special-order materials. HICPA also expressly prohibits abandoning or failing to perform a contract without justification. Yet a deposit cap and a written contract do not, by themselves, keep the money safe — they only define what a contractor is allowed to take and what conduct is illegal after the fact. The funds still went directly to the contractor.</p>
            <p>The scale of the problem is not unique to one man. In 2024, the Federal Trade Commission received 81,925 reports of home improvement scams, and consumer agencies including the FTC, BBB, and state licensing boards have reported rising complaints about deposits and disappearances — the pattern of a fraudster collecting a large down payment, starting demolition, and vanishing before finishing.</p>


            <h2>What the Investigation Found</h2>
            <p>The state&apos;s response escalated over time. The documents state the Bureau of Consumer Protection in the Attorney General&apos;s office opened an investigation into Miller in 2023 for violations of the Consumer Protection Law and HICPA, after receiving complaints that he accepted deposits and advance payments before allegedly abandoning customers. The bureau accused him of failing to provide the promised service or materials and failing to issue refunds.</p>
            <p>In Lancaster County, police said they and the Attorney General investigated Miller and gave him a chance to pay the victims back, but he did not. Ultimately, the state moved to court, asking that Merrill &quot;Bud&quot; Miller be permanently banned from owning or operating a home improvement business, that his contractor registration be revoked, and that he pay more than $108,000 in fines, penalties, and restitution to victims. Miller and his lawyer told CBS 21 they had no comment.</p>


            <h2>What Escrow Would Have Changed</h2>
            <p>The recurring failure in every one of these cases was the same: money moved directly and irreversibly from homeowner to contractor before the work that justified it was ever performed. Escrow is designed precisely to break that chain.</p>
            <p>In an escrow arrangement, the homeowner&apos;s deposit is held by a neutral third party rather than handed to the contractor. The funds are released only when defined milestones are actually met — permits pulled, materials delivered, demolition completed, framing inspected. Had the Carroll Township couple&apos;s $37,500 sat in escrow, no money would have been released when Miller failed to start work in December 2021 or apply for permits; the deposit would simply have been returned. Had the Lancaster homeowners&apos; $33,100 been milestone-based, payments would have stopped the moment the projects were abandoned with basements left in disarray, rather than being spent and gone.</p>
            <p>Escrow does not replace Pennsylvania&apos;s one-third deposit cap or HICPA&apos;s prohibition on abandonment — it complements them by removing the single point of failure those rules can&apos;t address. A deposit cap limits how much a homeowner can lose; escrow can prevent the loss from happening at all, because the contractor never controls funds tied to work not yet done. It also flips the incentive: instead of a homeowner chasing refunds through police reports, consumer-protection complaints, and eventually a court order for restitution, the money never leaves protection until value is delivered. For the homeowners caught in this case, the difference between a signed contract and an escrowed deposit was the difference between chasing $108,000 in restitution and never being at risk in the first place.</p>

            <h2>Sources</h2>
            <ul className="article-sources">
              <li><a href="https://local21news.com/news/local/dauphin-county-contractor-merrill-bud-miller-york-county-guilty-plea-cbs-21-investigates-receiving-advanced-payment-and-failure-to-perform-lawsuits-hfdh-llc-lawsuits-pennsylvania-attorney-general-august-2025" target="_blank" rel="noopener noreferrer">CBS 21 (local21news.com) — Guilty plea in York County</a></li>
              <li><a href="https://local21news.com/news/local/contractor-facing-new-charges-in-lancaster-county-following-previous-guilty-plea-for-theft-york-county-merrill-bud-miller-hfdh-dauphin-county-fraud-district-attorney-august-2025" target="_blank" rel="noopener noreferrer">CBS 21 (local21news.com) — New Lancaster County charges</a></li>
              <li><a href="https://local21news.com/news/local/cbs-21-investigates-hfdh-llc-contractor-charged-merrill-miller-lawsuits-dauphin-county-attorney-general-license-pennsylvania-state-police-criminal-charges-theft-july-2025" target="_blank" rel="noopener noreferrer">CBS 21 (local21news.com) — &apos;He basically ghosted us&apos;</a></li>
              <li><a href="https://local21news.com/news/local/attorney-general-sues-to-revoke-dauphin-county-contractors-license" target="_blank" rel="noopener noreferrer">CBS 21 (local21news.com) — AG sues to revoke license</a></li>
              <li><a href="https://local21news.com/news/local/contractor-faces-additional-home-improvement-fraud-accusations-in-york-county-building-york-county-dauphin-county-lancaster-county-impact-local-justice-court" target="_blank" rel="noopener noreferrer">CBS 21 (local21news.com) — Additional York County fraud accusations</a></li>
              <li><a href="https://www.abc27.com/local-news/contractor-allegedly-defrauded-lancaster-county-homeowners-abanded-remodeling-projects/amp/" target="_blank" rel="noopener noreferrer">ABC27 (WHTM) — Lancaster County homeowners, abandoned projects</a></li>
              <li><a href="https://www.attorneygeneral.gov/resources/home-improvement-contractor-registration/contractor-frequently-asked-questions/" target="_blank" rel="noopener noreferrer">PA Office of Attorney General — HICPA Contractor FAQ</a></li>
              <li><a href="https://www.attorneygeneral.gov/wp-content/uploads/2018/01/Act_132_Home_Improvement.pdf" target="_blank" rel="noopener noreferrer">PA Attorney General — Home Improvement Consumer Protection Act (73 P.S. § 517.1)</a></li>
              <li><a href="https://www.phfa.org/forms/renovate_and_repair/r_and_r_forms/hicpa_info_sheet.pdf" target="_blank" rel="noopener noreferrer">PHFA — HICPA Information Sheet (deposit limit)</a></li>
              <li><a href="https://www.wolfbaldwin.com/articles/commercial-litigation-articles/pennsylvania-s-new-home-improvement-consumer-protection-act/" target="_blank" rel="noopener noreferrer">Wolf, Baldwin &amp; Associates — HICPA prohibited acts (abandonment)</a></li>
              <li><a href="https://www.hippo.com/blog/home-repair-scams" target="_blank" rel="noopener noreferrer">Hippo — Home repair scams / FTC 2024 report figures</a></li>
              <li><a href="https://inszoneinsurance.com/blog/end-of-year-home-repairs" target="_blank" rel="noopener noreferrer">Inszone Insurance — Rising contractor fraud, deposits and disappearances</a></li>
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
