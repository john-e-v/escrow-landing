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
          <div className="hero-badge">Hidden Cost · August 2026</div>
          <h1>The Contractor Left the Permit Open. Now You Can&apos;t Sell Your House.</h1>
          <p className="hero-subtitle">A finished kitchen remodel looked done—until the title company flagged an open permit two years later, hours before closing. The original contractor was gone, and the buyer walked. Here&apos;s how an unclosed permit becomes a five-figure problem long after the job ends.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>The buyer&apos;s earnest money was already in escrow. $14,000, gone the moment they walked—and they walked because of a single line on a title report: PERMIT #2019-04471, STATUS: OPEN.</p>
            <p>Here&apos;s what happened. In spring 2019, a homeowner in a mid-sized suburb hired a licensed contractor for a full kitchen remodel. Cabinets, electrical, a moved gas line, new plumbing under the sink. The quoted price was $38,000. The contractor pulled the required permits—which is exactly what you want—and did the work over about seven weeks. The kitchen looked finished. It photographed well. The homeowner paid the final invoice, the contractor shook hands, and everyone moved on.</p>
            <p>What nobody did was schedule the final inspection. The permit was pulled, the work was done, but the last step—the inspector signing off and closing the permit—never happened. The contractor moved on to the next job. The homeowner had no reason to think about a permit ever again. The kitchen worked.</p>


            <h2>Two years later, at the worst possible moment</h2>
            <p>In 2021 the homeowner listed the property and accepted an offer at $465,000. Closing was scheduled, movers were booked, and the family had already put a deposit on their next house. Then, roughly 48 hours before closing, the title company ran its municipal search and flagged the open permit from 2019.</p>
            <p>An open permit means the city&apos;s official record says work was started but never inspected and approved. To a title company and a lender, that&apos;s an unresolved liability attached to the property. The buyer&apos;s lender wouldn&apos;t fund with an open permit on record. The clock the homeowner didn&apos;t know was running had just expired.</p>
            <blockquote className="article-quote">
              An open permit isn&apos;t a paperwork typo. To the municipality, the job legally isn&apos;t finished—no matter how good the kitchen looks.
              <cite>— residential permit expediter</cite>
            </blockquote>


            <h2>Why it became a five-figure problem</h2>
            <p>Closing a permit two years late is not a phone call. The inspector has to physically verify work that&apos;s now buried behind finished walls, cabinets, and drywall. In this case the city required the electrical junction boxes and part of the gas line to be re-exposed for inspection—which meant pulling cabinets and cutting into finished surfaces.</p>
            <p>The homeowner tried to reach the original contractor. Disconnected number, dissolved LLC, no response. So the work fell to a new contractor at emergency rates: roughly $6,800 to expose, inspect, correct one code issue the inspector found, and re-finish. Add re-inspection fees, a late-permit penalty, and two weeks of delay.</p>
            <p>The buyer, unwilling to wait through an open-ended repair on a house they didn&apos;t own yet, invoked their inspection contingency and walked—forfeiting nothing, taking their financing with them. The seller lost the sale, the moving deposit, and had to re-list. All-in, the open permit cost well over $20,000 and four months.</p>


            <h2>The fix that would have prevented all of it</h2>
            <p>The failure point was structural, not personal. Final payment was released the moment the kitchen looked done—before the one thing that legally marks a job complete: a closed permit with a passed final inspection.</p>
            <p>The fix is to tie the final payment to the final inspection, not the final coat of paint. When a portion of the contract is held in escrow and released only on a defined milestone—here, the signed-off, closed permit—the contractor has a direct financial reason to schedule that last inspection instead of driving to the next job. The permit gets closed while the walls are still open, while the work is fresh, while the contractor is still in business.</p>
            <p>If 15% of that $38,000 had been sitting in escrow against a closed permit, the homeowner would have had one line to point to two years later: the permit is closed, here&apos;s the record. No exposed gas line, no forfeited sale, no emergency contractor.</p>
            <p>An open permit is a debt with no due date—until the day you try to sell. Structuring payment around inspections, not appearances, is the difference between a finished kitchen and a finished job.</p>
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
