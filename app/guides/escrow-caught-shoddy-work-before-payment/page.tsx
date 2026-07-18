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
          <div className="hero-badge">Escrow Effect · July 2026</div>
          <h1>The Inspector Failed the Job. Escrow Meant the Homeowner Hadn&apos;t Paid Yet.</h1>
          <p className="hero-subtitle">A $38K basement finish looked done until the framing inspection failed on egress and fire-blocking. Because the final milestone sat in escrow, the homeowner held every dollar of leverage until the contractor corrected the work and passed re-inspection.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$11,400 was still sitting in escrow when the framing inspection failed.</p>
            <p>That&apos;s the whole story, really — but it&apos;s worth walking through why that one detail changed everything. The project was a $38K basement finish: full egress window, a wet bar, a guest bath, and a rec room the homeowners had been picturing for three years. On paper it looked done. Drywall was hung. The framing crew had packed up. The homeowners had already mentally moved the sectional in.</p>
            <p>Then the inspector showed up.</p>


            <h2>What the inspector caught</h2>
            <p>The verdict came back FAILED on two counts. First, the egress window well didn&apos;t meet the minimum clear opening for a legal bedroom-adjacent space — the rough opening had been framed to the window&apos;s outer dimensions, not the operable clear space code requires. Second, fire-blocking was missing at several concealed stud cavities where the new framing met the existing foundation wall.</p>
            <p>Neither of these is exotic. Both are the kind of thing that gets buried behind drywall and forgotten until a re-sale inspection or, worse, a fire marshal after something goes wrong. If the homeowner had paid in full on &apos;substantial completion,&apos; this is exactly where the leverage evaporates.</p>
            <blockquote className="article-quote">
              By the time you find out the fire-blocking is missing, the money&apos;s usually gone and the contractor&apos;s on his next job. You&apos;re the one paying to open the wall back up.
              <cite>— residential building inspector, 14 years</cite>
            </blockquote>


            <h2>Why the money hadn&apos;t moved</h2>
            <p>Here&apos;s where the structure did the work. The project had been broken into milestones, and the final milestone — the one covering completion and inspection sign-off — was funded but held in escrow. The homeowners had committed the money. The contractor could see it was real, sitting there, ready. But it didn&apos;t release on &apos;looks done.&apos; It released on &apos;passed.&apos;</p>
            <p>That distinction is everything. The contractor wasn&apos;t chasing a homeowner who might stiff him — he could see the funds were locked and waiting. The homeowner wasn&apos;t in the ugly position of demanding a refund for money already spent. Nobody had to threaten anybody. The condition for payment was simply not yet met, and both sides knew it going in.</p>


            <h2>How it actually resolved</h2>
            <p>The contractor came back the following week. He re-framed the egress opening to hit the required clear dimensions and installed the missing fire-blocking. It cost him about a day and a half of labor and a small material run. Annoying, but not catastrophic — and critically, it was cheaper than fighting over $11K he hadn&apos;t been paid.</p>
            <p>Re-inspection passed. The milestone released the same day the corrected paperwork cleared. The homeowners got a basement that was actually to code, not just to the eye. The contractor got paid in full, on time, with no dispute and a client who&apos;d happily refer him.</p>
            <p>Compare that to the version where the money moved first. The failed inspection becomes a collections problem. The homeowner is out of pocket, the contractor has no financial reason to rush back, and the fix turns into a two-month standoff over who owes what — often ending with the homeowner hiring someone else to correct the first guy&apos;s work.</p>


            <h2>The pattern underneath</h2>
            <p>The escrow didn&apos;t make the contractor honest and it didn&apos;t make the inspector lenient. What it did was align the moment of payment with the moment of proof. &apos;Done&apos; stopped being a subjective claim and became an objective event — a passed inspection — that everyone had agreed to in advance.</p>
            <p>Most payment disputes aren&apos;t about bad actors. They&apos;re about the gap between when money moves and when work is verified. Close that gap and the whole category of conflict mostly disappears.</p>
            <p>If you&apos;re a homeowner about to fund a project, this is the part worth setting up before the first nail goes in — while you still have all the leverage instead of none of it.</p>
          </div>

          <div className="article-footer">
            <Link href="/guides" className="article-back">← Back to Guides</Link>
            <a href="/create" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>Set up milestone escrow on your project →</a>
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
