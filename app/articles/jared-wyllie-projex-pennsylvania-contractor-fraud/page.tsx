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
          <h1>The Pottstown Contractor Who Took $156K and Left Homes in Ruins</h1>
          <p className="hero-subtitle">Jared Wyllie of Pottstown, PA operated as PROjex, LLC, using another contractor&apos;s license to sign up four homeowners and pocket more than $156,000 in upfront payments. One victim paid over $108,000 and had to sell her gutted home at a loss before Wyllie was sentenced to state prison.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Between 2021 and 2022, Jared Wyllie (doing business as PROjex, LLC) walked into the homes of four Pennsylvania families as a trusted contractor and walked out with more than $156,000 of their money — leaving behind gutted rooms, tarp-covered roofs, and, in one case, a homeowner forced to sell her house at a loss. In March 2025, a Montgomery County judge sentenced him for it.</p>
            <p>The case, prosecuted by the Pennsylvania Office of Attorney General, illustrates how ordinary a devastating home-improvement fraud can look from the outside — a signed contract, a licensed-sounding business name, and an upfront payment that vanishes into unfinished work.</p>


            <h2>What Happened</h2>
            <p>Jared Wyllie, 48, of Montgomery County, operated under the business name PROjex, LLC. According to prosecutors, &lt;cite index=&quot;14-4,14-5&quot;&gt;between 2021 and 2022, Wyllie operated under the business name PROjex, LLC, and entered into contracts with four homeowners, taking advance payments while using another contractor&apos;s license information without permission.&lt;/cite&gt;</p>
            <p>The damage escalated with each victim. &lt;cite index=&quot;8-9&quot;&gt;The first victims to come forward reported subpar contractor repairs after Wyllie left them with a loss of more than $16,400 and an unfinished room in their residence.&lt;/cite&gt; Another homeowner&apos;s experience was worse: &lt;cite index=&quot;14-9,14-10&quot;&gt;that victim contracted with Wyllie for roof repair and water damage restoration for $27,900.10 but received substandard work requiring multiple corrections, and despite paying an additional $4,240 for roof supplies, only a plastic tarp was placed on the roof.&lt;/cite&gt;</p>
            <p>The most severe loss fell on Wyllie&apos;s final victim. &lt;cite index=&quot;11-5,11-6,11-7&quot;&gt;She entered into a contract with him, initially, for more than $39,300 for demolition and remodeling work; the homeowner paid additional costs for labor and materials, for a total paid to Wyllie of $108,747 for the home improvement project; Wyllie ultimately did not complete the work as contracted and the owner was forced to sell her home at a loss since she could not afford to have the renovations completed after Wyllie&apos;s failure to deliver.&lt;/cite&gt; &lt;cite index=&quot;4-7&quot;&gt;In that instance, Wyllie began demolition work on a Chester County house, rendering it unlivable for a period of time, so his customer temporarily moved to a hotel.&lt;/cite&gt; &lt;cite index=&quot;4-9&quot;&gt;He ignored her calls or made excuses for why the work couldn&apos;t be finished.&lt;/cite&gt;</p>


            <h2>Why It Was So Easy</h2>
            <p>The mechanics of this fraud required almost nothing beyond a convincing pitch and a homeowner&apos;s trust. Wyllie presented himself as legitimate, but the credentials were borrowed. &lt;cite index=&quot;1-4,1-5&quot;&gt;Wyllie did business as PROjex, LLC and alleged to have been a licensed and registered home improvement contractor; in reality, Wyllie had no contractor number registered under his own name or business, and he had no permission to use the other contractors&apos; information.&lt;/cite&gt;</p>
            <p>Crucially, those borrowed credentials were good enough to clear official checkpoints. &lt;cite index=&quot;4-6&quot;&gt;Wyllie obtained permits from local municipalities using contractor licenses that investigators later found were registered to other entities that had nothing to do with his business.&lt;/cite&gt; Because the money changed hands directly and up front — before meaningful work was verified — there was no independent party holding the funds and no mechanism forcing him to earn each payment.</p>
            <p>This pattern is not unusual. &lt;cite index=&quot;24-6&quot;&gt;In the most recent full year of Better Business Bureau data, U.S. consumers filed 81,925 home improvement scam reports with a median loss of $1,800 — the fourth-costliest of 27 tracked scam categories.&lt;/cite&gt; &lt;cite index=&quot;24-7&quot;&gt;The BBB also estimates that nearly one in ten Americans has experienced a home improvement scam.&lt;/cite&gt; Consumer advocates repeatedly warn about the exact red flags present here: &lt;cite index=&quot;20-16,20-17&quot;&gt;homeowners should be hesitant if a contractor wants full payment up front and should consider a payment plan that gives them room to review the work while it&apos;s being done and after its completion.&lt;/cite&gt;</p>


            <h2>The Investigation and Outcome</h2>
            <p>The Office of Attorney General&apos;s investigation established both the pattern of unfinished work and the false licensing at its core. Ultimately, &lt;cite index=&quot;4-3&quot;&gt;Jared Wyllie, 48, pleaded guilty last year to receiving stolen property, court records show, and a Montgomery County judge sentenced him this month to three to six years in prison.&lt;/cite&gt; &lt;cite index=&quot;1-1,1-2&quot;&gt;Attorney General Dave Sunday announced that the Montgomery County man was sentenced to three to six years in state prison, plus two years of probation, and Wyllie was ordered to pay that money back as restitution to the victims.&lt;/cite&gt;</p>
            <p>Several homeowners spoke directly to the court about what the scheme cost them. &lt;cite index=&quot;1-4&quot;&gt;Several of the victims testified before Wyllie was sentenced, including one homeowner who paid more than $100,000 for repairs that were not done, and eventually had to sell their home at a loss due to Wyllie&apos;s failure.&lt;/cite&gt;</p>
            <blockquote className="article-quote">
              A person&apos;s home is their castle, and in this case, the defendant created misery and financial ruin for several individuals who trusted him with their homes
              <cite>— Pennsylvania Attorney General Dave Sunday, quoted in Pottstown Patch, March 19, 2025</cite>
            </blockquote>


            <h2>What Escrow Would Have Changed</h2>
            <p>The single feature that made this fraud possible was direct, upfront payment to the contractor with nothing standing between the homeowner&apos;s money and Wyllie&apos;s bank account. Escrow is the structural fix for exactly that vulnerability.</p>
            <p>In an escrow arrangement, a homeowner&apos;s payment is deposited with a neutral third party rather than handed to the contractor. Funds are released in stages, only as defined milestones are verified as complete. Had the $108,747 that one victim paid between February and April 2022 been held in escrow, Wyllie could not have collected it simply by beginning demolition and then disappearing — each release would have been tied to inspected, completed work. The homeowner who paid over $16,400 for an unfinished room, and the family who paid thousands for roof supplies only to get a plastic tarp, would have retained control of the balance of their money.</p>
            <p>Escrow also changes the incentive structure. A contractor who knows payment is conditioned on verified progress has a reason to finish; one paid in full at the outset does not. This mirrors the standing advice from consumer-protection agencies to structure payments around reviewable progress rather than large lump sums. And escrow complements — rather than replaces — basic due diligence: &lt;cite index=&quot;24-9,24-10&quot;&gt;looking a company up on the BBB, a state attorney general&apos;s consumer complaints database, and court records, with newly formed entities that have no earlier trace worth a hard second look, since sprawling networks of short-lived LLCs are a hallmark of repeat offenders.&lt;/cite&gt;</p>
            <p>No single tool eliminates fraud. But an escrow layer converts a total loss into, at worst, a partial one — because a defrauded homeowner recovers whatever remains unreleased instead of chasing restitution through the courts years later.</p>

            <h2>Sources</h2>
            <ul className="article-sources">
              <li><a href="https://www.attorneygeneral.gov/taking-action/pottstown-based-home-improvement-contractor-jailed-at-least-3-years-for-taking-more-than-156k-for-jobs-he-did-not-complete/" target="_blank" rel="noopener noreferrer">PA Office of Attorney General – Press Release</a></li>
              <li><a href="https://www.inquirer.com/crime/jared-wyllie-sentenced-dave-sunday-attorney-general-20250319.html" target="_blank" rel="noopener noreferrer">The Philadelphia Inquirer</a></li>
              <li><a href="https://www.nicb.org/news/regional-news/jared-blake-wyllie-jailed-158k-home-improvement-fraud" target="_blank" rel="noopener noreferrer">National Insurance Crime Bureau (NICB)</a></li>
              <li><a href="https://patch.com/pennsylvania/pottstown/pottstown-contractor-took-156k-payments-completed-no-work-g" target="_blank" rel="noopener noreferrer">Pottstown Patch</a></li>
              <li><a href="https://legalnewsline.com/stories/670600383-home-improvement-contractor-sentenced-for-uncompleted-projects-totaling-over-156k" target="_blank" rel="noopener noreferrer">Legal Newsline</a></li>
              <li><a href="https://www.wfmz.com/news/area/southeastern-pa/upper-montgomery-county/montco-man-jailed-for-home-improvement-scam-taking-over-156k-for-uncompleted-jobs/article_b5a55aae-042d-11f0-b441-f73c337c99e2.html" target="_blank" rel="noopener noreferrer">WFMZ-TV</a></li>
              <li><a href="https://www.mychesco.com/a/news/social-issues/crime/homeowner-nightmare-fraudulent-contractor-scams-156k-leaves-families-in-financial-ruin/" target="_blank" rel="noopener noreferrer">MyChesCo</a></li>
              <li><a href="https://scamwatchhq.com/home-improvement-contractor-scams-summer-2026/" target="_blank" rel="noopener noreferrer">BBB – Home Improvement Scam Statistics (via ScamWatch HQ)</a></li>
              <li><a href="https://www.fox61.com/article/news/local/10-contractor-mistakes-and-how-to-prevent-them-according-to-bbb-serving-connecticut/520-86d55443-e457-4d1f-a86d-276a272feb98" target="_blank" rel="noopener noreferrer">BBB Serving Connecticut – Contractor Hiring Tips (Fox61)</a></li>
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
