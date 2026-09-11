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
          <div className="hero-badge">Payment Disputes · September 2026</div>
          <h1>The Contractor Broke a Tile Setting Another. Then Billed You for Both.</h1>
          <p className="hero-subtitle">A tile setter cracked three finished tiles while installing the next row, then added the replacement material and labor to your invoice. Rework caused by the contractor&apos;s own error isn&apos;t a change order, and here&apos;s the structure that keeps you from paying for it.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Three cracked tiles. $340 in replacement material and labor, added to the invoice as line item 14: &quot;Additional tile — 3 units, set and grout.&quot; The tiles weren&apos;t additional. They were the ones the setter broke while installing the next row, tapping too hard against a set edge that hadn&apos;t fully cured. He replaced them, folded the cost into the running total, and moved on. The homeowner didn&apos;t catch it until the final walkthrough, when the count didn&apos;t match the original material order.</p>
            <p>This is one of the most common quiet overcharges in residential finish work, and it survives because the damage and the fix happen in the same afternoon. By the time the invoice arrives, there&apos;s no cracked tile to point at — just a slightly higher number that reads like normal project drift.</p>


            <h2>Why this happens</h2>
            <p>Tile is fragile at the exact moment it&apos;s most vulnerable: freshly set, edges exposed, adjacent rows going in inches away. A rubber mallet strike that&apos;s a hair too firm, a spacer left in too long, a knee set down in the wrong place — any of these cracks a finished piece. Good setters expect a small breakage rate and eat it. It&apos;s the cost of doing the work.</p>
            <p>The problem is billing. On a time-and-materials job, the contractor orders more tile, sets it, and lists it. On a lump-sum job with a material allowance, the overage gets passed through as &quot;we needed more than estimated.&quot; Both descriptions are technically true. Neither tells you the tile was needed because the contractor broke the first ones.</p>
            <blockquote className="article-quote">
              Rework to correct the contractor&apos;s own error is not a change order. A change order is you changing the scope. Breakage is the contractor absorbing the risk of their own labor.
              <cite>— Common construction contract principle</cite>
            </blockquote>


            <h2>Run the numbers</h2>
            <p>On a 200-square-foot bathroom at roughly $8/tile for material and $12/tile installed, a 3-tile &quot;correction&quot; is $340. Sounds minor. But breakage during a full backsplash-and-floor job can run 8 to 15 tiles across the timeline, and each gets quietly folded in. Now you&apos;re at $900 to $1,700 for damage you never caused, spread across an invoice too large to audit line by line.</p>
            <p>The timeline hides it too. Week one the floor goes in, week two the wall, week three grout and seal. Each week adds a few replacement tiles. No single week looks wrong. The total does — but only if you kept the original material count and compared.</p>


            <h2>The structural fix</h2>
            <p>The fix isn&apos;t watching the setter more closely. You can&apos;t stand over every row. The fix is a payment structure that ties money to verified, agreed deliverables instead of a running tab you reconcile at the end.</p>
            <p>Under a milestone or escrow arrangement, you define the tile scope and material budget up front, in writing: this many square feet, this much tile, and breakage caused by installation is the contractor&apos;s responsibility. The funds sit in escrow. When the phase completes, you release payment against what was actually agreed — not against a padded invoice discovered after the money&apos;s already been handed over. If replacement material shows up as a new charge, it has to be justified as legitimate scope change before release, not assumed as approved because the work is done.</p>
            <p>That single shift — verify before you release, not after you&apos;ve paid — turns &quot;line item 14&quot; from a fait accompli into a conversation. And most contractors who do clean work have no problem with it, because they weren&apos;t planning to bill you for their own broken tile in the first place.</p>
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
