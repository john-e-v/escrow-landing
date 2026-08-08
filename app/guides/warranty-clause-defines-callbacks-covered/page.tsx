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
          <div className="hero-badge">Contract Clauses · August 2026</div>
          <h1>The Warranty Clause That Says Exactly What You&apos;ll Fix (And What You Won&apos;t)</h1>
          <p className="hero-subtitle">Most contractor warranties are one vague sentence that turns every callback into a free repair. This is the exact warranty paragraph to paste into your next contract, defining what&apos;s covered, for how long, and what voids it.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Here is the exact warranty paragraph. Copy it, change the bracketed numbers, and paste it into your next contract:</p>
            <p>&quot;Contractor warrants all labor and workmanship for a period of twelve (12) months from the date of substantial completion. During this period, Contractor will repair, at no cost to the Client, any defect caused by faulty workmanship. This warranty covers workmanship only. Materials are covered solely by the manufacturer&apos;s warranty, which Contractor will pass through to the Client. This warranty does not cover: (a) normal wear, settling, or shrinkage; (b) damage from misuse, neglect, or lack of maintenance; (c) work altered or repaired by anyone other than Contractor; (d) damage from weather, moisture intrusion not caused by Contractor&apos;s work, or acts of God; (e) any item where the Client has not paid the balance in full. To make a warranty claim, Client must notify Contractor in writing within thirty (30) days of discovering the issue. This warranty is void if the balance owed is not paid in full.&quot;</p>
            <p>That is the whole thing. Nine lines that end most callback arguments before they start.</p>
            <blockquote className="article-quote">
              Contractor warrants all labor and workmanship for a period of twelve (12) months from the date of substantial completion. This warranty covers workmanship only. This warranty is void if the balance owed is not paid in full.
              <cite>— core language to paste into your next contract</cite>
            </blockquote>


            <h2>Why the vague version costs you money</h2>
            <p>Most contractor warranties read like this: &quot;All work guaranteed.&quot; That&apos;s it. Two words that a customer can stretch to mean anything — their dog scratched the floor, the drywall cracked because the house settled, they painted over your work and don&apos;t like how it looks. Under &quot;all work guaranteed,&quot; you&apos;re on the hook for all of it.</p>
            <p>The fix is specificity. The paragraph above does three jobs at once: it sets a clock (12 months), it names what&apos;s covered (workmanship), and it lists what isn&apos;t. When a customer calls in month 14, you point to the date. When they call about a manufacturer defect, you point to the pass-through clause and hand them the manufacturer&apos;s number.</p>


            <h2>Set your numbers before you sign anything</h2>
            <p>On your next estimate, fill in two brackets. First, the term. Twelve months is standard for most trades; go 24 for structural work if you&apos;re confident, 90 days for punch-list-heavy jobs like painting. Pick one and use it every time so you&apos;re not negotiating warranty length per customer.</p>
            <p>Second, the substantial completion date. Write it on the final invoice in plain text: &quot;Substantial completion: [date]. Warranty expires: [date].&quot; Now the clock is documented and undisputed. If you skip this, the customer will argue the clock started whenever it benefits them.</p>


            <h2>The two clauses that protect you most</h2>
            <p>The written-notice requirement and the paid-in-full trigger do the heavy lifting.</p>
            <p>The 30-day written notice means a customer can&apos;t sit on a problem for six months, let it get worse, then blame you for the whole thing. If they didn&apos;t tell you in writing, the claim doesn&apos;t qualify. Give them an easy way to comply — a text or email counts as &quot;in writing.&quot;</p>
            <p>The paid-in-full clause is your leverage. A customer who withholds the final payment loses the warranty entirely. This turns your warranty from a liability into a reason to close out the balance. Say it out loud at signing: &quot;Your warranty kicks in the day the final invoice is paid.&quot;</p>


            <h2>Do this on your very next job</h2>
            <p>Before you send your next contract, paste the paragraph in, set your term, and add the completion-date line to your invoice template. Fifteen minutes now saves you a weekend of free repairs later.</p>
            <p>If you want the completion-date line, the notice clause, and the payment trigger already wired into a contract that reads clean and holds up, that&apos;s what we build.</p>
          </div>

          <div className="article-footer">
            <Link href="/guides" className="article-back">← Back to Guides</Link>
            <a href="/master" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>See contractor plans →</a>
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
