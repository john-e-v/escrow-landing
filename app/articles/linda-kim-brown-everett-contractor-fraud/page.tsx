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
          <h1>The Everett Contractor Charged With Taking $500K in Deposits — and Hiding $1.5M</h1>
          <p className="hero-subtitle">Linda Kim Brown allegedly took more than half a million dollars in deposits from three Western Washington homeowners for remodels she never started. Prosecutors say she pocketed the money, delayed for over a year, and hid $1.5 million in income from tax authorities.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>A home remodel is supposed to be an act of hope — new kitchens, second-story additions, sunrooms and decks that make a house into the home a family always wanted. For three Western Washington homeowners, that hope allegedly turned into a six-figure loss. In June 2025, Washington&apos;s Office of the Attorney General charged Everett-area contractor Linda Kim Brown (a/k/a Linda K. Gardenhire) with four counts of first-degree theft and one count of filing a false tax return.</p>
            <p>&lt;cite index=&quot;11-1,11-3&quot;&gt;Charging papers say Brown cheated some Western Washington homeowners out of half a million dollars for construction work she never started, making excuses and breaking promises to three customers for well over a year about the lack of work on their expensive home remodeling projects.&lt;/cite&gt; &lt;cite index=&quot;10-8,14-12&quot;&gt;Brown also goes by the name Linda K. Gardenhire, according to court papers listing addresses for her in Bellevue and Mill Creek, and she was a registered contractor and owner of Aura Construction LLC, KAIX Remodel LLC and Probuilt LLC when the incidents allegedly occurred from July 2021 to mid-October 2023.&lt;/cite&gt;</p>


            <h2>What Happened</h2>
            <p>The alleged scheme followed a consistent pattern across all three victims. &lt;cite index=&quot;11-8&quot;&gt;According to charging papers, Brown arranged for engineering, drawings and permits on her customers&apos; projects, but failed to start construction on any of them.&lt;/cite&gt; The preparatory paperwork gave the appearance of forward motion — while the actual building never began.</p>
            <p>The losses were substantial. &lt;cite index=&quot;11-9&quot;&gt;Subtracting the cost of the preparatory services, the homeowners individually lost over $98,000, $165,000, and $310,000 in down payments to the contractor.&lt;/cite&gt; &lt;cite index=&quot;1-6&quot;&gt;The homeowners lived in Edmonds, Bellevue, and Lynnwood.&lt;/cite&gt;</p>
            <p>The Lynnwood case illustrates the scale. &lt;cite index=&quot;11-12,11-13,11-14&quot;&gt;In March 2022, the Lynnwood homeowner signed a $662,400 contract with Brown to move her kitchen and build a second-story addition with a bedroom, bathroom, sunroom, and a deck. She paid Brown a deposit of $325,824 — nearly 50 percent down, according to an L&amp;I report cited in charging documents. The project was supposed to be completed by that September.&lt;/cite&gt; &lt;cite index=&quot;19-12,19-13&quot;&gt;Soon after signing the contract, however, Brown repeatedly delayed the start of construction, telling the homeowner she needed to be patient, charging papers said. By February 2023 — about five months after the project should have been completed — the homeowner texted Brown that she wanted to cancel the contract.&lt;/cite&gt;</p>


            <h2>Why It Was Easy</h2>
            <p>The mechanics of the alleged fraud reveal a structural weakness in how residential remodeling deals are commonly financed: large deposits paid directly to a contractor, up front, before meaningful work begins. When a homeowner hands over 30, 40, or nearly 50 percent of a contract value as a lump-sum down payment, that money is immediately controlled by the contractor — with no built-in mechanism forcing it to be spent on the project.</p>
            <p>Brown&apos;s registration status added another layer of false reassurance. She was a registered contractor at the time, which many homeowners treat as a stamp of trustworthiness. But registration is not a guarantee of performance. &lt;cite index=&quot;19-4&quot;&gt;L&amp;I, which enforces contractor registration laws, suspended Brown&apos;s registration for KAIX Remodel LLC in May 2022, and for her other two businesses in April 2024, when their insurance policies expired or were cancelled.&lt;/cite&gt; By the time those suspensions landed, deposits had already changed hands.</p>
            <p>The recovery gap is stark. In Washington, &lt;cite index=&quot;17-9&quot;&gt;if the contractor was registered, a homeowner may recover up to the bond amount — $12,000 for general contractors.&lt;/cite&gt; Against individual losses of $98,000, $165,000 and $310,000, a $12,000 bond is a fraction of a fraction.</p>
            <blockquote className="article-quote">
              Dishonest contractors are stealing more than cash — they&apos;re stealing the long-held dreams of homeowners.
              <cite>— Steve Reinmuth, assistant director of L&amp;I&apos;s Field Services and Public Safety, Washington State Department of Labor &amp; Industries news release, June 2025</cite>
            </blockquote>


            <h2>What the Investigation Found</h2>
            <p>The case began with the victims themselves. &lt;cite index=&quot;19-5,19-6&quot;&gt;The three victims filed complaints with L&amp;I about Brown in 2023, and L&amp;I investigated and referred the case for potential criminal charges to the state Office of the Attorney General (AGO), which is now prosecuting Brown.&lt;/cite&gt; &lt;cite index=&quot;1-13&quot;&gt;L&amp;I&apos;s contractor registration program interviewed the victims, collected contracts and other documents, and visited one of the contractor&apos;s job sites.&lt;/cite&gt;</p>
            <p>The financial picture that emerged went well beyond the missing deposits. &lt;cite index=&quot;20-9&quot;&gt;Charging papers state that an AGO investigator found bank, customer and other records showing she actually deposited over $1.5 million into her business accounts during the period she claimed no income.&lt;/cite&gt; &lt;cite index=&quot;20-1&quot;&gt;Brown also faces charges of tax evasion for allegedly failing to report $1.5 million in business income and withholding $72,400 in retail sales tax collected from customers.&lt;/cite&gt; &lt;cite index=&quot;19-1&quot;&gt;In addition, Brown collected $72,400 in retail sales tax from customers but didn&apos;t pass the money on to the state Department of Revenue, charging papers said.&lt;/cite&gt;</p>
            <p>Brown has denied wrongdoing. &lt;cite index=&quot;11-4&quot;&gt;Brown, 36, has pleaded not guilty to four counts of first-degree theft and one count of filing a false tax return.&lt;/cite&gt; &lt;cite index=&quot;12-2&quot;&gt;Each of the four theft counts carries a maximum 10-year prison sentence and a $20,000 fine, and the false-tax-return count carries a maximum 5-year prison sentence and a $10,000 fine.&lt;/cite&gt; &lt;cite index=&quot;11-5,20-6&quot;&gt;Her trial was originally scheduled for Aug. 22, 2025, in Snohomish County Superior Court in Everett, but was rescheduled for October 10, 2025.&lt;/cite&gt;</p>


            <h2>What Escrow Would Have Changed</h2>
            <p>The single fact that made these alleged losses possible is that the down payments went straight into Brown&apos;s business accounts and stayed there. A construction escrow — or a milestone-based disbursement arrangement through a neutral third party — is designed to break exactly that chain.</p>
            <p>Under an escrow structure, the homeowner&apos;s deposit is deposited with an independent escrow agent rather than the contractor. Funds are released only when defined, verifiable milestones are met: permits pulled, foundation poured, framing inspected, and so on. A contractor who &quot;arranges for engineering, drawings and permits&quot; but never breaks ground would, under escrow, receive only the small tranche tied to that early stage — not a $325,824 lump sum. The other roughly 90 percent of the Lynnwood deposit would have remained beyond the contractor&apos;s reach until real construction occurred.</p>
            <p>Escrow also creates an audit trail. Because a third party controls disbursement and requires proof of progress, it becomes far harder to divert customer money into general business accounts — the exact behavior the AGO alleges when it says over $1.5 million flowed into Brown&apos;s accounts. And when a project stalls, escrowed funds can be returned rather than chased through a bond capped at $12,000 or a small-claims court with a $10,000 ceiling.</p>
            <p>L&amp;I&apos;s own guidance points in the same direction of not fronting large sums to a contractor. &lt;cite index=&quot;1-9&quot;&gt;To help avoid losing money to crooked contractors, L&amp;I encourages consumers to get three written bids, verify contractors are currently registered, and pay suppliers directly for building materials.&lt;/cite&gt; Escrow takes that principle a step further, converting good advice into an enforced financial control. Paying suppliers directly, verifying registration, and staging payments to progress are all defenses — but escrow is the structural version that does not depend on a homeowner&apos;s vigilance holding up over the many months a remodel can take.</p>

            <h2>Sources</h2>
            <ul className="article-sources">
              <li><a href="https://lni.wa.gov/news-events/article/25-17" target="_blank" rel="noopener noreferrer">Washington State Dept. of Labor &amp; Industries (L&amp;I) news release</a></li>
              <li><a href="https://lynnwoodtimes.com/2025/07/20/linda-kim-brown/" target="_blank" rel="noopener noreferrer">Lynnwood Times — Contractor faces up to 45 years in prison</a></li>
              <li><a href="https://lynnwoodtoday.com/contractor-who-took-500k-in-deposits-but-never-started-construction-charged-with-felony-theft/" target="_blank" rel="noopener noreferrer">Lynnwood Today — Contractor who took $500K in deposits charged with felony theft</a></li>
              <li><a href="https://www.washingtoncontractors.org/news/wa-contractor-scam-alerts/" target="_blank" rel="noopener noreferrer">Washington Contractor Directory — WA Contractor Scam Alerts</a></li>
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
