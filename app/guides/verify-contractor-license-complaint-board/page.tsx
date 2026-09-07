import Link from 'next/link';

export default function Guide() {
  return (
    <>
      <nav className="navbar scrolled">
        <div className="container nav-inner">
          <a href="/" className="logo">CLRBL<span>T</span></a>
          <div className="nav-links">
            <a href="/guides">Guides</a>
            <a href="/" className="nav-cta">Get Started</a>
          </div>
        </div>
      </nav>

      <section className="hero" style={{ paddingBottom: 40, paddingTop: 120 }}>
        <div className="container hero-content">
          <div className="hero-badge">Before You Hire · September 2026</div>
          <h1>How to Check a Contractor With Your State License Board (Before You Sign)</h1>
          <p className="hero-subtitle">Your state contractor license board holds public records on discipline, complaints, and license status that most homeowners never check. This is the exact search-and-confirm sequence to run before you hand over a deposit or sign anything.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Run these seven checks before you sign anything or hand over a deposit. Each one takes five minutes and can be done from your phone right now.</p>
            <p>1. Find your state&apos;s license board. Search &quot;[your state] contractor license board&quot; and confirm you land on a .gov site — not a lead-generation site that looks official. In California it&apos;s the CSLB; in Florida, the DBPR; in Texas, licensing runs through the TDLR or individual trade boards. Bookmark the real one.</p>
            <p>2. Enter the contractor&apos;s exact license number. Ask the contractor for it in writing before you look — don&apos;t just search their business name. A legitimate contractor gives you the number without hesitation. If they dodge, stall, or say &quot;I&apos;ll get it to you later,&quot; stop there.</p>


            <h2>Confirm the license is active and matches</h2>
            <p>3. Check the status field. It must read &quot;Active&quot; or &quot;Current&quot; — not &quot;Expired,&quot; &quot;Suspended,&quot; &quot;Inactive,&quot; or &quot;Revoked.&quot; An expired license means they&apos;re working illegally today.</p>
            <p>4. Match the name on the license to the name on your contract. The license should belong to the person or business you&apos;re actually hiring. A common scam: a salesperson uses a licensed contractor&apos;s number while the unlicensed crew does the work. If the names don&apos;t match, ask why in writing.</p>
            <p>5. Verify the classification covers your job. A license for general building doesn&apos;t automatically cover electrical, roofing, or plumbing. Confirm their classification matches the work you need done — the board site lists what each license authorizes.</p>
            <blockquote className="article-quote">
              The number of homeowners who never once type the license number into the state site is staggering. That single search would have prevented most of the fraud complaints we see.
              <cite>— State contractor board investigator</cite>
            </blockquote>


            <h2>Pull the discipline and complaint history</h2>
            <p>6. Open the disciplinary actions tab. Most boards publish citations, suspensions, and accusations directly on the license record. Read every entry. One old, resolved paperwork issue is normal. A pattern of abandoned jobs, workmanship complaints, or unpaid judgments is not.</p>
            <p>7. Confirm bond and insurance. The record should show an active surety bond and, in most states, workers&apos; comp and liability coverage. Request current certificates directly from the contractor and confirm the policy numbers with the issuing carrier — not just a PDF the contractor emails you. A forged certificate is trivial to make; a phone call to the insurer is not.</p>


            <h2>Documents to request today</h2>
            <p>Before money changes hands, ask for these in writing:</p>
            <p>- The license number and a screenshot of the active status page
- Current certificates of insurance and bond, with carrier contact info
- A written contract listing the license number, total price, payment schedule, and start and completion dates
- References from jobs completed in the last twelve months</p>
            <p>A contractor who supplies all four quickly is showing you how they&apos;ll behave for the rest of the project.</p>


            <h2>The one red flag that shows up in almost every bad hire</h2>
            <p>They ask for a large cash deposit up front — often 40% or more — before any materials are ordered or any permit is pulled. Legitimate contractors work off a schedule tied to milestones, not a big lump sum handed over on day one. The moment someone pressures you for a heavy cash deposit &quot;to lock in the price&quot; or &quot;to buy materials today,&quot; treat it as a warning, not a discount.</p>
            <p>The cleanest way to protect that deposit is to never let it sit in a contractor&apos;s account before the work is done. When your payment is held in escrow and released as milestones are actually completed, the pressure to pay everything up front disappears — and so does most of the risk.</p>
          </div>

          <div className="article-footer">
            <Link href="/guides" className="article-back">← Back to Guides</Link>
            <a href="/create" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>Get matched with contractors who accept escrow payments →</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-content">
          <div className="footer-logo">CLRBL<span>T</span></div>
          <div className="footer-links">
            <a href="/about">About</a>
            <a href="/guides">Guides</a>
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
