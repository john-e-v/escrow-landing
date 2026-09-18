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
          <div className="hero-badge">Project Postmortem · September 2026</div>
          <h1>The Fence Posts Weren&apos;t Set Below Frost Line. By Spring, Half the Fence Leaned.</h1>
          <p className="hero-subtitle">A homeowner paid $6,800 for a new fence in November. By April, twelve posts had heaved out of the ground and the whole run listed like a shipwreck. The contractor set the posts 18 inches deep in a 42-inch frost zone — and the money was already gone.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Twelve posts. That&apos;s how many heaved out of the ground by April, on a fence that was installed in November for $6,800. The contractor set them 18 inches deep. The local frost line was 42 inches. The verdict was written the day the holes were dug — nobody just knew it yet.</p>
            <p>Here&apos;s what happened, plainly. Water in the soil freezes and expands. When it expands, it grabs the sides of a post and lifts it — a process called frost heave. If the base of your post sits above the frost line, the frozen ground pushes it up a little each freeze-thaw cycle. Come spring, the ice melts, but the post doesn&apos;t drop all the way back. Repeat that a few dozen times over one winter and you get exactly what this homeowner got: a $6,800 fence listing like a shipwreck.</p>


            <h2>The math nobody ran before the check cleared</h2>
            <p>The job took three days in early November. Payment terms were simple and common: 50% down to start ($3,400), 50% on completion ($3,400). The fence looked perfect on day three. Straight, level, gate swung clean. The homeowner paid the balance and the contractor cashed it before the first hard freeze.</p>
            <p>That timing is the whole problem. A fence installed in fall doesn&apos;t reveal a frost-line failure until spring. By the time the posts heaved, four months had passed. The &apos;completion&apos; the homeowner paid for wasn&apos;t actually complete work — it was work that hadn&apos;t failed yet. There&apos;s a difference, and the payment structure erased it.</p>
            <p>Repair estimates came back between $4,200 and $5,500 — nearly the cost of the original fence — because heaved posts often crack, and re-digging to 42 inches means new concrete, new posts, and re-hanging panels. The original contractor stopped answering calls in March.</p>
            <blockquote className="article-quote">
              The fence passed every eyeball test on the day I paid. The ground failed the test four months later, and by then there was no leverage left.
              <cite>— the homeowner, recounting the claim</cite>
            </blockquote>


            <h2>Why &apos;looks done&apos; and &apos;is done&apos; aren&apos;t the same invoice</h2>
            <p>Frost-line depth isn&apos;t a judgment call. Every jurisdiction publishes a required minimum embedment depth for the exact reason above. Setting posts to 18 inches in a 42-inch zone isn&apos;t a style choice or a shortcut — it&apos;s a code violation that guarantees failure. A permit inspection would likely have caught it. But small fence jobs often skip permits, and the homeowner had no way to know a compliant depth from a shallow one once the concrete was poured.</p>
            <p>So the failure was baked in at hour one, invisible for four months, and unrecoverable by the time it surfaced. Three bad conditions stacked on top of a payment structure that released 100% of the money before a single freeze-thaw cycle could test the work.</p>


            <h2>The fix is structural, not a warning to &apos;be careful&apos;</h2>
            <p>You can&apos;t inspect what&apos;s already under concrete, and you can&apos;t chase a contractor who&apos;s already been paid in full. What you can change is when the money moves.</p>
            <p>Milestone escrow would have preserved leverage exactly where it mattered. Instead of 50/50, split it: deposit, a draw on install completion, and a final retention — say 15 to 20% — held in escrow through the first spring thaw. If the posts hold, the final draw releases automatically. If twelve of them heave, that retained amount funds the fix or forces the contractor back to the site while they still have a reason to pick up the phone.</p>
            <p>The point isn&apos;t distrust. It&apos;s matching payment to when a job can actually be verified. For work that only proves itself across a season, the last slice of payment should survive that season too.</p>
            <p>That&apos;s the difference between a $6,800 fence and a $6,800 fence plus a $5,000 repair — and it comes down to who&apos;s holding the final draw when the ground thaws.</p>
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
