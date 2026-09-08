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
          <div className="hero-badge">Hidden Cost · September 2026</div>
          <h1>Your Contractor Poured on a Cold Day and Rushed the Cure. Now the Slab Is Cracking.</h1>
          <p className="hero-subtitle">A garage slab poured at 38°F with no blankets and stripped forms in two days spider-cracked by spring. The homeowner had already paid in full. Here&apos;s why cure time is the line item nobody quotes, and how milestone payments would have kept the leverage where it belonged.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>38°F at 7 a.m. on pour day. The forms came off Wednesday afternoon, roughly 48 hours after the truck left. By April, a 22-foot garage slab had three spider-cracks radiating from the center and one long crack tracking a control joint that never got cut deep enough. The homeowner had paid the $4,800 balance in full the week of the pour, because the concrete was down and it &quot;looked done.&quot;</p>
            <p>Here&apos;s the verdict, plainly: the slab didn&apos;t fail because the concrete was bad. It failed because nobody paid for the part of the job you can&apos;t see — the cure.</p>


            <h2>What actually went wrong</h2>
            <p>Concrete doesn&apos;t dry. It hydrates — a chemical reaction that needs time, moisture, and temperature to reach strength. At 70°F, a slab hits meaningful strength in about 7 days. At 38°F, the reaction slows to a crawl, and below 40°F it can effectively stall. Pouring in the cold without insulated blankets means the surface sets while the mass underneath is still weak.</p>
            <p>The contractor stripped the forms at 48 hours because his crew was booked on the next job Thursday. That&apos;s the real reason — scheduling, not engineering. A slab that should have been protected and left alone for a week got exposed to freeze-thaw within days. The control joints, which give cracks a place to hide, were cut too shallow and too late. So the slab cracked where it wanted to, not where it was told to.</p>
            <p>None of this showed up in the quote. The line item said &quot;4&quot; concrete slab, broom finish — $6,200.&quot; It did not say &quot;blankets, $180&quot; or &quot;cure and protect 7 days, no traffic.&quot; Cure time is invisible labor. It&apos;s the crew NOT being there, which is exactly why it&apos;s the first thing sacrificed when the calendar gets tight.</p>
            <blockquote className="article-quote">
              Cold-weather concrete isn&apos;t a materials problem. It&apos;s a patience problem — and patience is the first thing that disappears when the money&apos;s already collected.
              <cite>— Concrete finisher, 20 years residential</cite>
            </blockquote>


            <h2>Why full payment was the real mistake</h2>
            <p>The homeowner lost every ounce of leverage the moment the balance cleared. Once you&apos;ve paid in full, &quot;come back and fix the cracks&quot; becomes a favor you&apos;re asking for, not a term you&apos;re enforcing. The contractor already has your money and a truck full of next week&apos;s work. Guess which one wins.</p>
            <p>The repair options were all bad: epoxy injection that&apos;s cosmetic, a grind-and-overlay that adds a failure plane, or tear-out and re-pour for another $5,000+. The homeowner ended up eating a $1,900 patch job that will crack again along the same lines within a few seasons.</p>


            <h2>The fix: pay for the cure, not the pour</h2>
            <p>A milestone payment structure would have prevented all of it. Instead of a balance due on pour day, the schedule ties the final release to the outcome you actually care about: a sound, cured slab.</p>
            <p>A realistic split for this job: 30% at mobilization, 40% when the concrete is placed and finished, and the final 30% released after 7 days with no cracks and a passed walkthrough. Hold that last third in escrow and the incentive flips. Now the contractor WANTS to leave the blankets on, cut the joints properly, and keep his crew off your slab for a week — because that&apos;s how he gets paid.</p>
            <p>The money isn&apos;t a threat; it&apos;s aligned with the physics. The cure has to happen for the slab to be good, and the payment happens when the cure does. The contractor who&apos;s confident in his work has no problem with this. The one who&apos;s already mentally on the next job is the one who fights it — which tells you exactly who you&apos;re dealing with.</p>
            <p>If you&apos;re about to put concrete in the ground, structure the payment so the last dollar is still yours until the slab has proven itself. That&apos;s the difference between a slab you paid for and a slab you own.</p>
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
