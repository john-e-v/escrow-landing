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
          <h1>3 Charged After Las Vegas&apos; GC Construction Took Deposits and Vanished</h1>
          <p className="hero-subtitle">Nevada prosecutors charged three men tied to GC Construction and Golden Hammer LV with felony fraud and theft after homeowners cumulatively lost hundreds of thousands of dollars on renovations that were never completed. The company&apos;s license had already been revoked before the charges came down.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Three men connected to a now-defunct Las Vegas Valley construction business have been charged with felony fraud and theft after homeowners collectively paid hundreds of thousands of dollars for renovations that were never finished — and never refunded. The Nevada Attorney General&apos;s office charged Michael Howard Epstein, 70, Jose Andres Lopez, 39, and Gary L. Martin, 52 — linked to GC Construction and Golden Hammer LV Investments LLC — with engaging in felony fraud and theft of more than $100,000, according to court records.</p>
            <p>The case centers on a pattern that consumer investigators in Nevada have seen repeatedly: deposits collected up front, work left undone, and no money returned. The criminal complaint states plainly that G.C. Construction &quot;entered into contracts with real property owners for renovations, accepted payments, never completed or abandoned the projects and failed to issue refunds.&quot; Authorities say the cumulative losses to customers ran into the hundreds of thousands of dollars.</p>


            <h2>What Investigators Found</h2>
            <p>According to an Attorney General&apos;s office criminal complaint, Epstein was the sole manager of Carpenter Renovations LLC, a limited liability company doing business as GC Construction. Lopez and Martin were managing members of a separate entity, Golden Hammer LV Investments LLC, a Nevada limited liability company doing business as Golden Hammer LV C&amp;C.</p>
            <p>The two operations were tightly intertwined. A declaration of warrant written by an investigator with the Nevada State Contractors Board identified Lopez and Martin as associates or &quot;de facto&quot; employees of Epstein and GC. Investigators said the contracts they reviewed were between victims and GC Construction, but there was evidence of significant commingling of funds between GC Construction and Golden Hammer — a detail that helped tie the entities together.</p>
            <p>A key structural problem underpinned the alleged scheme. In October 2023, GC Construction&apos;s Nevada contractors&apos; license was revoked for cause by the Nevada State Contractors Board. Golden Hammer, meanwhile, was never licensed as a contractor in the state of Nevada at all — meaning customers were, in some instances, paying an entity with no legal authority to perform the work.</p>
            <p>A criminal complaint was first filed against the trio in January. The men were arrested in March and April and are no longer in custody. An attorney for Epstein declined comment, an attorney representing both Lopez and Martin did not respond to a request for comment, and a spokesman for the Attorney General&apos;s office also declined comment. The three defendants were scheduled to appear in court in June.</p>


            <h2>Why It Was Easy for the Money to Disappear</h2>
            <p>This case illustrates how ordinary residential remodeling contracts leave homeowners exposed. When a customer signs a renovation deal and hands over a substantial deposit, that money typically goes straight into the contractor&apos;s own operating account. There is no neutral third party holding the funds, and no requirement that money be released only as verified work is completed. Once the deposit is spent — or moved between related companies — the homeowner&apos;s leverage evaporates.</p>
            <p>The alleged commingling of funds between GC Construction and Golden Hammer is a textbook version of this vulnerability. When money can flow freely between a licensed shell and an unlicensed affiliate, it becomes far harder for a homeowner — or later, an investigator — to trace where deposits actually went. And because one of the entities involved was never licensed, the usual regulatory guardrails did not fully apply.</p>
            <p>Nevada regulators have repeatedly flagged the warning signs. In a separate 2025 case, Luis Quesada, Director of Investigations of the Nevada State Contractors Board, warned homeowners about exactly this danger, telling 8 News Now that writing a check to a different business name is a common red flag and stressing that consumers should verify they are paying the licensed business itself.</p>
            <blockquote className="article-quote">
              It&apos;s very important, especially in these large projects, that you read and verify the contract. Make sure you&apos;re paying the contractor, the business itself.
              <cite>— Luis Quesada, Director of Investigations, Nevada State Contractors Board, via 8 News Now (reported by Moneywise, Aug. 2025)</cite>
            </blockquote>


            <h2>What Escrow Would Have Changed</h2>
            <p>The core failure in cases like this is structural: homeowners pay before work is done, and nothing independent stands between their money and a contractor who may spend, divert, or commingle it. Escrow is designed to close exactly that gap.</p>
            <p>Under an escrow arrangement, a homeowner&apos;s deposit and progress payments are held by a neutral third party rather than the contractor. Funds are released only when defined milestones are met and verified — a completed demolition, a passed inspection, a delivered material order. If the contractor abandons the job, as the complaint alleges happened here, the unspent balance remains protected rather than gone. Commingling between a licensed entity and an unlicensed affiliate becomes far more difficult, because the money never sits in the contractor&apos;s control in the first place.</p>
            <p>Nevada already recognizes the value of a backstop, though an imperfect one. The state&apos;s Residential Recovery Fund, established by the Legislature in 1999, provides limited compensation to homeowners harmed by a licensed contractor. But its protections are capped and conditional: a single claim cannot exceed $40,000, and claims against a single contractor cannot exceed $750,000, or 20% of the account balance, whichever is less. Crucially, the fund covers only losses tied to a properly licensed contractor — which would exclude any deposits paid to an unlicensed entity like Golden Hammer, and complicate claims tied to a company whose license had already been revoked. The fund has awarded roughly $15 million to harmed homeowners since its inception, but recovery is never guaranteed and can arrive only after a lengthy investigation.</p>
            <p>Escrow, by contrast, prevents the loss rather than trying to reimburse it afterward. Had the GC Construction deposits been held in escrow and released against verified progress, the homeowners&apos; exposure would have been limited to the value of work actually performed — not the full sums they say vanished with the projects.</p>


            <h2>The Bigger Picture</h2>
            <p>The GC Construction case is not an outlier in Nevada. Regulators and prosecutors in the state have pursued a string of similar matters, from a landscaping contractor accused of taking more than $308,000 in deposits, to a patio-cover company that reportedly collected over $137,000 it never made good on. The common thread is unprotected up-front money and vulnerable homeowners left with unfinished projects and empty accounts.</p>
            <p>For consumers, the practical lessons echo what the Contractors Board has long advised: verify a contractor&apos;s license before signing, be wary of large cash deposits, and confirm that payments go to the licensed business named on the contract. But the deeper takeaway is structural. As long as deposits flow directly into a contractor&apos;s hands with no independent hold, the next abandoned project is only a signature away.</p>

            <h2>Sources</h2>
            <ul className="article-sources">
              <li><a href="https://www.reviewjournal.com/crime/courts/3-charged-with-fraud-theft-in-unfinished-contractor-jobs-3737352/" target="_blank" rel="noopener noreferrer">Las Vegas Review-Journal — 3 charged with fraud, theft in unfinished contractor jobs</a></li>
              <li><a href="https://moneywise.com/news/top-stories/las-vegas-residents-hit-with-double-whammy-after-losing-thousands-in-alleged-contractor-scam" target="_blank" rel="noopener noreferrer">Moneywise — Las Vegas residents denied reimbursement after alleged contractor scam</a></li>
              <li><a href="https://news3lv.com/news/local/las-vegas-contractor-arrested-for-allegedly-defrauding-homeowners-seniors-attorney-general-criminal-case-warrant" target="_blank" rel="noopener noreferrer">News3LV — Las Vegas contractor arrested for allegedly defrauding homeowners out of $308K</a></li>
              <li><a href="https://www.kolotv.com/2025/02/05/nevada-contractor-arrested-after-investigation-by-ags-office/" target="_blank" rel="noopener noreferrer">KOLO TV — Nevada contractor arrested after investigation by AG&apos;s office</a></li>
              <li><a href="https://www.nvcontractorsboard.com/resources/residential-recovery-fund/residential-recovery-fund-overview/" target="_blank" rel="noopener noreferrer">Nevada State Contractors Board — Residential Recovery Fund Overview</a></li>
              <li><a href="https://www.nvcontractorsboard.com/resources/residential-recovery-fund/" target="_blank" rel="noopener noreferrer">Nevada State Contractors Board — Residential Recovery Fund</a></li>
              <li><a href="https://www.ktnv.com/news/homeowners-harmed-by-contractors-awarded-almost-400k-through-recovery-fund" target="_blank" rel="noopener noreferrer">KTNV — Homeowners harmed by contractors awarded almost $400K through recovery fund</a></li>
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
