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
          <h1>The Niagara County Contractor Who Stole $230K in Deposits for Work He Never Did</h1>
          <p className="hero-subtitle">Newfane contractor Nathaniel Wagner took large upfront deposits from more than a dozen Western New York homeowners, then spent the money on personal expenses instead of building the barns, garages, and decks he promised. He was sentenced to four to eight years in prison and ordered to repay over $453,000.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Between December 2019 and July 2022, Nathaniel Wagner (Wagner Built Construction) ran what New York prosecutors described as a residential contracting fraud scheme across Niagara County, collecting large upfront deposits from more than a dozen homeowners for barns, garages, decks and other home improvements he never built. In September 2024, the case closed with a prison sentence. &lt;cite index=&quot;12-1,12-3&quot;&gt;New York Attorney General Letitia James and State Police Superintendent Steven G. James announced the conviction and sentencing of Nathaniel Wagner, 42, of Newfane, NY, who previously pleaded guilty to Grand Larceny in the Third Degree and Scheme to Defraud in the First Degree and was sentenced to four to eight years in prison.&lt;/cite&gt;</p>
            <p>The damage was substantial. &lt;cite index=&quot;12-2&quot;&gt;From December 2019 to July 2022, Wagner stole more than $230,000 from over a dozen homeowners throughout Niagara County by taking large up-front deposits and spending the money on personal expenses — including on personal investments, Apple products, and groceries — instead of doing any work for those who hired him.&lt;/cite&gt; &lt;cite index=&quot;2-9&quot;&gt;In addition to his prison sentence, Wagner was also ordered to repay his victims, totaling $453,058.&lt;/cite&gt;</p>
            <blockquote className="article-quote">
              Instead of performing the home repairs he was hired to do, Nathaniel Wagner pocketed hundreds of thousands of dollars of his clients&apos; deposits and then strung them along for months and even years as he spent their money on himself.
              <cite>— New York Attorney General Letitia James, NY Attorney General press release, September 6, 2024</cite>
            </blockquote>


            <h2>What Happened</h2>
            <p>Wagner marketed himself the way many small contractors do — through social media and word of mouth. &lt;cite index=&quot;11-5&quot;&gt;Wagner advertised his business, Wagner Built Construction, on Facebook by offering to build and install barns, garages, and decks.&lt;/cite&gt; Homeowners across the county responded.</p>
            <p>The pattern investigators described was consistent. &lt;cite index=&quot;11-6&quot;&gt;Wagner solicited large, upfront deposits ranging from several thousand dollars to over $30,000 for home improvement work, but never performed the work, failed to deliver materials he claimed to have purchased with the deposits, and refused to issue refunds to homeowners.&lt;/cite&gt; When customers pushed back, he did just enough to keep them waiting. &lt;cite index=&quot;10-8&quot;&gt;Wagner also attempted to calm upset customers by delivering minimal materials, which were oftentimes unusable, incorrect, and damaged goods, to their homes, but he never returned to their homes to start construction work.&lt;/cite&gt; In at least one instance the deception went further: &lt;cite index=&quot;9-1&quot;&gt;when a homeowner became suspicious after delays and excuses, Wagner created fake invoices to show the customer.&lt;/cite&gt;</p>


            <h2>Why It Was So Easy</h2>
            <p>The mechanics of this fraud were simple, and that is precisely the problem. A homeowner hands over a deposit — sometimes tens of thousands of dollars — directly into a contractor&apos;s own bank account, and from that moment there is no structural barrier stopping the contractor from spending it on anything at all.</p>
            <p>That is exactly what the state&apos;s audit found here. &lt;cite index=&quot;10-9&quot;&gt;An audit conducted by the OAG revealed that instead of using homeowners&apos; money to purchase materials or perform home improvements, Wagner used the money for personal expenses, including large cash withdrawals, vehicle repairs, child support, personal investments, and even payments to family members.&lt;/cite&gt; Reporting on the case detailed the scale of the diversion: &lt;cite index=&quot;9-5&quot;&gt;Wagner used the money to pay some $90,000 towards his rent, car maintenance and child support payments, as well as for purchases from Apple, eBay and Frankie&apos;s Pizza.&lt;/cite&gt;</p>
            <p>Home improvement fraud is not a fringe crime in New York — it is a recurring one. &lt;cite index=&quot;17-3&quot;&gt;Home improvement scams have consistently ranked among New Yorkers&apos; top five consumer complaints.&lt;/cite&gt; State consumer regulators offer the same warning year after year: &lt;cite index=&quot;17-4,17-5,17-6,17-7&quot;&gt;never pay full price up front, avoid large upfront deposits, use a staged payment schedule tied to completed work, pay by check or credit card when possible, and do not pay with cash, wire transfer, Zelle, or gift cards.&lt;/cite&gt;</p>


            <h2>The Investigation</h2>
            <p>The case was built jointly by state prosecutors and police. &lt;cite index=&quot;11-2&quot;&gt;Wagner&apos;s conviction was the result of a joint investigation by the Office of the Attorney General&apos;s Criminal Enforcement and Financial Crimes Bureau (CEFC) and the New York State Police (NYSP).&lt;/cite&gt; It began with the victims themselves. &lt;cite index=&quot;11-3&quot;&gt;The investigation began in the spring of 2022 when the OAG and NYSP received numerous complaints from homeowners in towns throughout Niagara County, including Lewiston, Lockport, Wilson, Newfane, Ransomville, North Tonawanda, and Niagara Falls.&lt;/cite&gt;</p>
            <p>Wagner was indicted before the charges were later resolved by plea. &lt;cite index=&quot;14-2&quot;&gt;The 15-count indictment, unsealed in Niagara County Court before Judge Caroline Wojtaszek, charged Wagner with stealing more than $230,000 in deposit monies from more than a dozen homeowners that were intended for home improvement projects.&lt;/cite&gt; &lt;cite index=&quot;10-10&quot;&gt;He was arraigned and charged with 12 counts of Grand Larceny in the Third Degree, two counts of Grand Larceny in the Second Degree, and one count of Scheme to Defraud in the First Degree.&lt;/cite&gt;</p>
            <blockquote className="article-quote">
              This individual perpetuated a devious scheme to cheat homeowners out of their hard-earned money for promised contracting work he failed to perform.
              <cite>— New York State Police Superintendent Steven G. James, NY Attorney General press release, September 6, 2024</cite>
            </blockquote>


            <h2>What Escrow Would Have Changed</h2>
            <p>The single feature that made this scheme possible was the absence of any barrier between the homeowners&apos; deposits and Wagner&apos;s personal spending. Escrow — a neutral account that a contractor cannot freely raid — is designed to eliminate exactly that gap, and New York law already recognizes its importance.</p>
            <p>Under state home improvement law, deposits are not supposed to become the contractor&apos;s personal money the moment they change hands. &lt;cite index=&quot;16-2&quot;&gt;The contractor is legally required to deposit all progress payments received prior to completion in an escrow account or post a bond to protect these payments.&lt;/cite&gt; The rules are specific: &lt;cite index=&quot;16-7&quot;&gt;any contract payments received by a contractor from a customer prior to substantial completion of the job must be put into a trust (escrow) account in a bank located in New York State within five business days, and the customer must be informed where the money is being held within ten business days.&lt;/cite&gt; Crucially, the money can only be released against actual progress — &lt;cite index=&quot;16-8&quot;&gt;the contractor can withdraw the deposit only under the terms of the payment schedule agreed on by the contractor and the customers.&lt;/cite&gt;</p>
            <p>Had Wagner&apos;s deposits sat in a genuine escrow account tied to completed milestones, there would have been no pool of cash to spend on rent, electronics, groceries and family payments. Consumer attorneys make the same point directly: &lt;cite index=&quot;20-2,20-3,20-4&quot;&gt;a contract should stipulate that the contractor must put any advance payments into an escrow account, which is one way to ensure that the contractor doesn&apos;t use your deposit to pay for his next vacation, and in many cases failure to escrow advanced funds may constitute both a breach of fiduciary duty and criminal larceny.&lt;/cite&gt;</p>
            <p>Escrow does not make a dishonest contractor honest. But it removes the temptation and the opportunity that a direct-to-pocket deposit creates. In the Wagner case, the state ultimately recovered accountability through prosecution and a restitution order of more than $450,000 — years after the fact, and only after more than a dozen families had lost their money. A structural safeguard applied at the moment of payment, rather than in a courtroom afterward, is the difference between preventing the loss and merely punishing it.</p>

            <h2>Sources</h2>
            <ul className="article-sources">
              <li><a href="https://ag.ny.gov/press-release/2024/attorney-general-james-and-new-york-state-police-announce-conviction-contractor" target="_blank" rel="noopener noreferrer">NY Attorney General Press Release (Conviction, 2024)</a></li>
              <li><a href="https://ag.ny.gov/press-release/2023/attorney-general-james-and-acting-state-police-superintendent-nigrelli-announce" target="_blank" rel="noopener noreferrer">NY Attorney General Press Release (Indictment, 2023)</a></li>
              <li><a href="https://www.wgrz.com/article/news/crime/newfane-contractor-sentenced-stealing-from-homeowners/71-48ab10fc-9b48-41c0-86d3-684163643a57" target="_blank" rel="noopener noreferrer">WGRZ</a></li>
              <li><a href="https://www.wkbw.com/news/local-news/contractor-accused-of-stealing-more-than-230-000-from-over-a-dozen-western-new-york-homeowners" target="_blank" rel="noopener noreferrer">WKBW</a></li>
              <li><a href="https://www.niagara-gazette.com/news/crime/newfane-man-charged-with-defrauding-230k-from-homeowners/article_f2d4fab6-e9da-11ed-9310-9b6c52442118.html" target="_blank" rel="noopener noreferrer">Niagara Gazette</a></li>
              <li><a href="https://www.globalconstructionreview.com/new-york-contractor-jailed-after-stringing-customers-along-for-years/" target="_blank" rel="noopener noreferrer">Global Construction Review</a></li>
              <li><a href="https://wnynewsnow.com/2024/09/10/contractor-sentenced-for-230000-fraud-scheme-a-cautionary-tale-for-homeowners/" target="_blank" rel="noopener noreferrer">WNY News Now</a></li>
              <li><a href="https://ag.ny.gov/home-improvement-fact-sheet" target="_blank" rel="noopener noreferrer">NY Attorney General Home Improvement Fact Sheet</a></li>
              <li><a href="https://dos.ny.gov/news/consumer-alert-nys-department-states-division-consumer-protection-provides-new-yorkers-tips" target="_blank" rel="noopener noreferrer">NYS Department of State Consumer Alert on Home Improvement Scams</a></li>
              <li><a href="https://creditreportlawgroup.com/homeowner-advocacy-in-home-improvement-and-construction-contract-cases/" target="_blank" rel="noopener noreferrer">Credit Report Law Group - NY Home Improvement Contract Guidance</a></li>
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
