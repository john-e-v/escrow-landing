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
          <div className="hero-badge">Hidden Costs · July 2026</div>
          <h1>Why the Allowances in Your Contract Blew Your Budget by $9K</h1>
          <p className="hero-subtitle">Allowances look like clean line items on your estimate, but they&apos;re placeholders for decisions you haven&apos;t made yet. Here&apos;s how a $3,000 tile allowance quietly turned into a $12,000 line and why the fix is milestone-based approval before the work proceeds.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>The tile allowance was $3,000. The final tile invoice was $12,000. Nobody lied, nobody padded the bill, and the homeowner still got a surprise check request for $9,000 halfway through a bathroom remodel.</p>
            <p>Here&apos;s how it happened, because it happens the same way almost every time. The original estimate had a clean line: &quot;Tile allowance — $3,000.&quot; It looked like a budgeted cost. It wasn&apos;t. An allowance is a placeholder for a decision you haven&apos;t made yet, and the number in it is usually whatever the contractor needed to make the total bid competitive.</p>


            <h2>What the $3,000 actually covered</h2>
            <p>The allowance assumed builder-grade ceramic at roughly $3 per square foot, standard thinset, no waterproofing membrane upgrade, and straight-lay installation with no pattern work. It covered material only — labor was buried in a separate line, or so the homeowner thought.</p>
            <p>When the homeowner walked into the tile showroom, none of that context came with them. They picked a porcelain look-alike marble at $9 per square foot for the floor, a handmade zellige for the shower niche at $28 per square foot, and a herringbone layout for the main wall. Reasonable choices. Nice bathroom. But every one of them broke an assumption the allowance was built on.</p>
            <blockquote className="article-quote">
              The allowance wasn&apos;t a budget. It was a guess we made so the bid would clear, and the client treated it like a ceiling.
              <cite>— General contractor, residential remodels</cite>
            </blockquote>


            <h2>The math nobody walked through</h2>
            <p>Material jumped from $3,000 to about $7,400 across 300 square feet of mixed selections. Herringbone added roughly 20% to labor because of the extra cuts and waste. The zellige needed a specialty setter for two days. The marble-look porcelain required a crack-isolation membrane the original scope didn&apos;t include.</p>
            <p>By the time the selections were locked, the true tile line was $12,000. The overage — $9,000 — landed as a change order the homeowner didn&apos;t see coming, three weeks into a job where materials had already been ordered. Cancelling meant eating a restocking fee. Proceeding meant paying. There was no clean exit.</p>


            <h2>The verdict</h2>
            <p>This wasn&apos;t a bad contractor or a careless client. It was a structural gap: money was committed on paper before any real decision was made, and the decision point and the payment point were disconnected by three weeks and one showroom visit.</p>
            <p>The allowance created the illusion of a fixed price while quietly deferring the most expensive choices in the project to a moment when the homeowner had the least leverage — after demo, after the schedule was set, after the setter was booked.</p>


            <h2>The fix: approve the real number before the work proceeds</h2>
            <p>The structural fix is to tie every allowance to a milestone approval that releases funds only after the actual selection is priced and signed off. Instead of &quot;tile allowance — $3,000&quot; sitting in a lump-sum total, the tile phase becomes its own milestone: selections finalized, real quote issued, homeowner approves the true cost, and only then does the money for that phase get released to the contractor.</p>
            <p>Under a milestone-based escrow structure, the $12,000 tile reality surfaces before anything is ordered. The homeowner sees the delta while they still have room to trade the zellige for something cheaper, or drop the herringbone to a straight lay, or accept the cost with open eyes. No mid-job ambush, no restocking fees, no financing a surprise. The money stays parked until the number is real and agreed.</p>
            <p>Allowances aren&apos;t the enemy — unapproved allowances are. When each phase has to be priced and released on its own, the placeholder can&apos;t grow into a $9,000 shock while your back is turned.</p>
            <p>If you want your next project structured this way, get matched with contractors who work in milestone-approved phases from the start.</p>
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
