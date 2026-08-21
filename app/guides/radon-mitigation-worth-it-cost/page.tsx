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
          <div className="hero-badge">Cost &amp; ROI · August 2026</div>
          <h1>Is Radon Mitigation Worth It? Cost, Health Payback, and When to Skip It</h1>
          <p className="hero-subtitle">Radon mitigation is worth it if your test reads 4.0 pCi/L or higher — the fix runs $800 to $2,500 and cuts a real lung-cancer risk. Below that threshold, the math and the urgency both change fast.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Yes — if your radon test reads 4.0 pCi/L or higher, mitigation is worth it, full stop. At that level the EPA recommends action, and the fix pays back in risk reduction that no other home upgrade comes close to matching.</p>
            <p>Radon is the second-leading cause of lung cancer in the U.S. after smoking, responsible for roughly 21,000 deaths a year. A reading at or above 4.0 pCi/L is where the health math stops being abstract and starts being your basement. So the verdict isn&apos;t really about your house — it&apos;s about the number on your test kit.</p>


            <h2>The Math</h2>
            <p>A standard active soil depressurization system — the fan-and-pipe setup that vents radon out from under your slab — runs $800 to $2,500 installed. Most homes land between $1,200 and $1,700. The variables are simple: slab-on-grade with a single suction point sits at the low end, while a home with a crawlspace, a sump pit, or multiple foundation types climbs toward the top.</p>
            <p>Running costs are trivial. The fan draws about the same power as a 40-watt bulb, adding $5 to $10 a month to your electric bill, plus a negligible bump in heating from vented conditioned air. Fans last 5 to 10 years and cost $150 to $300 to replace.</p>
            <p>On resale, mitigation doesn&apos;t add dollar-for-dollar value the way a kitchen does — but it removes a deal-killer. A high radon reading during a buyer&apos;s inspection routinely triggers a $1,500 to $2,000 credit demand or a stalled closing. Installing the system yourself, on your timeline, costs the same or less and takes the negotiation off the table entirely.</p>
            <blockquote className="article-quote">
              The system pays for itself the day a buyer&apos;s inspector clips a test kit to your basement joist and it comes back clean.
              <cite>— Certified radon mitigation contractor</cite>
            </blockquote>


            <h2>When the Verdict Flips</h2>
            <p>Below 4.0 pCi/L, the urgency drops sharply. Between 2.0 and 4.0 pCi/L, the EPA says you may want to consider mitigation — there&apos;s still measurable risk, but it&apos;s a judgment call, not a mandate. Many homeowners in this band retest annually instead of installing a system, especially if the reading is closer to 2.0.</p>
            <p>Under 2.0 pCi/L, skip it. There&apos;s no such thing as zero radon — it&apos;s a natural gas in the ground everywhere — and chasing a reading below 2.0 spends real money for a difference the science can&apos;t reliably measure.</p>
            <p>The one thing that flips the whole calculation: a single test isn&apos;t enough to justify or dismiss the spend. Radon fluctuates with weather, season, and whether your windows were open. A 48-hour charcoal kit that reads 5.0 in a sealed winter basement might read 2.5 in spring. Before you commit to a system, confirm with either a long-term test (90+ days) or a second short-term test. Mitigating off one bad number is how people spend $1,500 solving a problem that wasn&apos;t there.</p>


            <h2>If Your Number Says Go</h2>
            <p>Once you&apos;ve confirmed a reading at or above 4.0 pCi/L, the job is straightforward but worth doing right — a poorly placed suction point or an under-sized fan can leave you paying for a system that barely moves your levels. Get a post-mitigation test written into the work so you know the number actually dropped.</p>
            <p>When you&apos;re ready to price it out, comparing certified installers who&apos;ll stand behind the result is the difference between a fix and a repeat expense.</p>
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
