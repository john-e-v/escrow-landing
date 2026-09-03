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
          <div className="hero-badge">Cost &amp; ROI · September 2026</div>
          <h1>Is Replacing Your HVAC Worth It Before Selling? Cost, ROI, and When to Skip It</h1>
          <p className="hero-subtitle">Replacing your HVAC before selling usually isn&apos;t worth it as an upgrade play, but it is worth it if the system is dead or failing inspection. The math depends entirely on whether your unit is a repair line item or a deal-killer.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>It depends on one thing: whether your HVAC is a repair line item or a deal-killer. If the system runs but is old, replacing it before selling usually isn&apos;t worth it. If it&apos;s dead, leaking refrigerant, or failing inspection, replacing it is almost always worth it.</p>
            <p>Here&apos;s the split that matters. A working-but-aging unit is a negotiation footnote — buyers might ask for a credit, but they rarely walk. A non-functioning or unsafe unit is a condition that can collapse financing, tank your inspection report, and scare off every buyer who reads it.</p>


            <h2>The Math on an Upgrade Play</h2>
            <p>A full HVAC replacement runs $5,000 to $12,000 for a typical single-family home, with high-efficiency or larger systems pushing $15,000+.</p>
            <p>Now the recovery. HVAC replacement returns roughly 35% to 60% of its cost at resale, depending on your market and climate. In a hot-summer region where AC is non-negotiable, you&apos;re at the top of that range. In a mild climate, the bottom.</p>
            <p>Run the numbers on a $9,000 install: you recover somewhere between $3,150 and $5,400 in added sale price. That&apos;s a $3,600 to $5,850 loss on the upgrade itself. You are effectively paying several thousand dollars for a slightly faster sale and one fewer negotiation point — not for a real return.</p>
            <p>That&apos;s why replacing a functional system as a &apos;value-add&apos; rarely pencils out. Buyers don&apos;t pay a premium for a new furnace the way they do for a renovated kitchen. They expect the HVAC to work, and they price a working system as baseline, not bonus.</p>
            <blockquote className="article-quote">
              A new HVAC doesn&apos;t win you a bidding war. A broken one just loses you buyers.
              <cite>— listing agent perspective on pre-sale upgrades</cite>
            </blockquote>


            <h2>When the Verdict Flips</h2>
            <p>The whole calculation inverts the moment the system becomes a deal-killer.</p>
            <p>If your unit is dead, unsafe, or flagged on inspection, buyers don&apos;t discount it by the repair cost — they discount it by fear. A $9,000 replacement can trigger $15,000 to $25,000 in demanded credits, because buyers pad their estimates for the unknown and use it as leverage on everything else. Some buyers won&apos;t submit an offer at all on a home with a non-working central system, shrinking your buyer pool right when you need it widest.</p>
            <p>Worse, a failing HVAC can stall financing. FHA and VA appraisers can require a functional heating source before the loan clears. No working heat, no loan, no sale.</p>
            <p>In that scenario, spending $9,000 to protect a $30,000 swing in negotiating position and keep the deal alive is obviously worth it. You&apos;re not chasing ROI anymore — you&apos;re removing a landmine.</p>


            <h2>The Catch</h2>
            <p>The verdict flips against replacement in one common case: your system works, but you assume buyers will demand a new one anyway. They usually won&apos;t. Get it serviced, keep the maintenance records, and offer a home warranty for $400 to $600 instead. That covers buyer anxiety at a fraction of replacement cost and keeps your recovery math intact.</p>
            <p>So before you spend a dollar: is the unit functional or not? Functional means service it and disclose it. Non-functional or unsafe means replace it — the loss on the install is smaller than the loss on the deal.</p>
            <p>If you land on replace, the risk is overpaying a contractor who knows you&apos;re on a closing timeline and negotiating from weakness. Locking payment into escrow keeps the leverage with you until the work passes inspection — exactly the protection you want when a sale depends on it.</p>
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
