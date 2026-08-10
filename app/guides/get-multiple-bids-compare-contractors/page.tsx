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
          <div className="hero-badge">Before You Hire · August 2026</div>
          <h1>How Many Bids Should You Get Before Hiring a Contractor? (And How to Compare Them)</h1>
          <p className="hero-subtitle">Getting three bids sounds simple until you realize each one scopes the job differently, making them impossible to compare. This checklist shows you exactly how to request bids on the same terms and read them side by side without getting fooled by the lowest number.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Get three bids. Not two, not five. Two gives you no way to spot an outlier; five wastes your time and the contractors&apos; time, which the good ones notice. Three is the number that lets you see the real market price for your job.</p>
            <p>But three bids only work if all three are pricing the same job. Most people skip that part, get three wildly different numbers, and pick the lowest one. Here&apos;s the checklist that keeps you from doing that.</p>


            <h2>1. Write one scope of work before you call anyone</h2>
            <p>Type out exactly what you want done, in plain language. &quot;Replace 200 sq ft of subfloor in the master bath, install new vinyl plank, haul away old material.&quot; Send the identical document to every contractor. If each contractor scopes the job their own way, you are comparing three different jobs and the numbers mean nothing.</p>
            <p>Hand every bidder the same list of materials and finishes too. &quot;Mid-grade&quot; means something different to each of them. Name the product or give a price-per-unit ceiling.</p>


            <h2>2. Request each bid as a line-item breakdown</h2>
            <p>Ask for this exact phrasing: &quot;Please break out labor, materials, permits, and disposal as separate line items.&quot; A single lump-sum number tells you nothing and hides where the padding is. When you get line items, you can see that Contractor A&apos;s materials cost matches Contractor B&apos;s while their labor is double.</p>
            <p>Any bidder who refuses to itemize is telling you something. Move on.</p>


            <h2>3. Verify the license and insurance today</h2>
            <p>Look up their license number on your state contractor board website right now. Search &quot;[your state] contractor license lookup.&quot; Confirm the license is active, matches the name on the bid, and covers the trade.</p>
            <p>Then request a certificate of insurance (COI) sent directly from their insurer, not a PDF they email you. Ask for general liability and, if they have a crew, workers&apos; comp. No COI, no hire.</p>


            <h2>4. Ask three questions to every bidder</h2>
            <p>Ask: &quot;What&apos;s your payment schedule?&quot; A fair answer is a small deposit and progress payments tied to milestones. A demand for 50% up front is a warning.</p>
            <p>Ask: &quot;Who is actually doing the work — you, employees, or subs?&quot; You want to know who will be in your home.</p>
            <p>Ask: &quot;Can you give me two references from jobs you finished in the last six months?&quot; Recent references, not a decade-old list. Then call them.</p>
            <blockquote className="article-quote">
              The bid I threw out wasn&apos;t the highest or the lowest. It was the one that wouldn&apos;t put anything in writing.
              <cite>— homeowner, kitchen remodel</cite>
            </blockquote>


            <h2>5. Line the three bids up on one page</h2>
            <p>Put labor, materials, permits, timeline, and payment terms in a grid, one column per contractor. The lowest total number is almost never the right pick. Look for the bid that&apos;s specific, complete, and in the middle of the range. The middle bid priced by someone who itemized everything beats the cheap bid every time.</p>


            <h2>The one red flag in almost every bad hire</h2>
            <p>The contractor who pressures you to decide fast and pay a large deposit up front is the single most reliable warning sign there is. It shows up in nearly every horror story. Good contractors have a backlog; they don&apos;t need your money today and they don&apos;t panic if you take a week to compare bids.</p>
            <p>One way to remove the deposit gamble entirely is to work with contractors who agree to be paid through escrow, so money only releases when milestones are actually met.</p>
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
