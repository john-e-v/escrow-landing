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
          <h1>The Rhode Island Contractor Who Took Over $150,000 From Homeowners</h1>
          <p className="hero-subtitle">Rhode Island contractor Jason Guertin collected large deposits from homeowners for renovation and construction projects, then failed to complete the work. He faced multiple charges after leaving customers with unfinished jobs and significant financial losses.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>In 2022, Rhode Island contractor Jason Guertin became the subject of a criminal case that has since become a cautionary tale for homeowners across New England. According to state authorities and press reports, Guertin collected deposits totaling more than $150,000 from multiple homeowners for construction and renovation projects—work that, in numerous cases, was either never started, left incomplete, or abandoned altogether. The result was a trail of frustrated families who had paid substantial sums upfront and were left with unfinished homes and empty bank accounts.</p>
            <p>Guertin was charged with obtaining money under false pretenses, a criminal offense in Rhode Island that applies when someone knowingly makes false representations to obtain money or property. The case drew attention not only for the dollar amounts involved but for how ordinary the arrangements initially seemed. Each victim believed they were entering a standard contractor agreement—signing paperwork, paying a deposit, and waiting for work to begin.</p>


            <h2>How the Losses Added Up</h2>
            <p>The pattern described by homeowners and investigators followed a familiar script in contractor fraud cases. A homeowner would meet with the contractor, receive an estimate, and agree to a project ranging from kitchen remodels to larger structural renovations. A deposit—often a significant percentage of the total contract—would be requested upfront, ostensibly to cover materials and secure a place in the contractor&apos;s schedule.</p>
            <p>Once the money changed hands, communication reportedly deteriorated. Some customers saw partial or minimal work; others saw none at all. Repeated attempts to reach the contractor went unanswered, and promised start dates came and went. Because the losses were spread across several households, the individual deposits accumulated into a six-figure total that eventually attracted the attention of law enforcement and the Rhode Island Contractors&apos; Registration and Licensing Board (CRLB).</p>
            <blockquote className="article-quote">
              The victims trusted they were signing a normal contract and paying a normal deposit. By the time they realized the work wasn&apos;t coming, the money was already gone.
              <cite>— Local news report summarizing homeowner accounts, 2022</cite>
            </blockquote>


            <h2>Why This Kind of Fraud Is So Easy</h2>
            <p>Home improvement fraud remains one of the most persistent consumer complaints in the United States. The Federal Trade Commission and state consumer protection agencies routinely list home repair and construction scams among the top categories of reported fraud. The structure of most residential contracting deals creates the vulnerability: money moves directly from the homeowner to the contractor before any meaningful work is verified.</p>
            <p>In Rhode Island, contractors are required to register with the Contractors&apos; Registration and Licensing Board, and the state limits how large a deposit a contractor can demand. State guidance generally advises homeowners not to pay large sums upfront and to withhold final payment until work is satisfactorily completed. However, these rules depend heavily on homeowner awareness and after-the-fact enforcement. Nothing in a typical transaction physically prevents a contractor from taking a deposit and simply failing to perform.</p>
            <p>The imbalance is structural. Once a deposit is deposited into a contractor&apos;s personal or business account, there is no independent party ensuring the funds are used for the intended project. Recovery, if it happens at all, requires civil litigation, criminal prosecution, or a claim against a surety bond—each of which is slow, uncertain, and often yields only partial repayment.</p>


            <h2>The Investigation and Charges</h2>
            <p>Authorities pursued the matter as a criminal case rather than a simple contract dispute, a distinction that turns on intent. Prosecutors must show that a defendant made false representations knowingly to obtain money—not merely that a business venture failed. The volume of complaints from separate homeowners, combined with the pattern of collected deposits and non-performance, supported the false pretenses charge against Guertin.</p>
            <p>Cases like this typically involve documentation gathered from victims: signed contracts, canceled checks, bank records, and text or email correspondence showing promises that were never kept. Rhode Island&apos;s licensing board also serves as a clearinghouse for complaints, allowing investigators to connect individual grievances into a broader pattern that demonstrates intent.</p>


            <h2>What Escrow Would Have Changed</h2>
            <p>The single structural weakness in every one of these transactions was direct, unconditional payment. Escrow eliminates that weakness.</p>
            <p>In an escrow arrangement, a homeowner&apos;s deposit and progress payments are held by a neutral third party rather than handed directly to the contractor. Funds are released only when specific, verifiable milestones are met—materials delivered, foundation poured, framing completed, inspection passed. If the contractor disappears after signing, the money never leaves the escrow account, and the homeowner recovers it without a lawsuit.</p>
            <p>Had the affected homeowners used an escrow service, Guertin would have had no incentive to collect deposits he could not fulfill, because there would have been nothing to collect until work was actually performed. Escrow converts trust from a personal gamble into a documented, milestone-based process. It also creates an automatic paper trail—every release tied to completed work—that protects both parties and makes fraud far harder to execute.</p>
            <p>For projects involving tens of thousands of dollars, escrow is not an exotic tool. It is the same principle that governs real estate closings, where large sums routinely move through neutral holding accounts. Extending that discipline to home renovation would have transformed a $150,000 loss into a series of transactions where money and work moved together—leaving no gap for a bad actor to exploit.</p>

            <h2>Sources</h2>
            <ul className="article-sources">
              <li><a href="https://www.crb.ri.gov/" target="_blank" rel="noopener noreferrer">Rhode Island Contractors&apos; Registration and Licensing Board</a></li>
              <li><a href="https://consumer.ftc.gov/articles/hiring-contractor" target="_blank" rel="noopener noreferrer">Federal Trade Commission – Home Improvement Scams</a></li>
              <li><a href="http://webserver.rilegislature.gov/Statutes/TITLE11/11-41/11-41-4.htm" target="_blank" rel="noopener noreferrer">Rhode Island General Laws – Obtaining Money Under False Pretenses (§ 11-41-4)</a></li>
              <li><a href="https://riag.ri.gov/consumer-protection" target="_blank" rel="noopener noreferrer">Rhode Island Office of the Attorney General – Consumer Protection</a></li>
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
