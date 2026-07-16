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
          <div className="hero-badge">Cost &amp; ROI · July 2026</div>
          <h1>Is a Kitchen Remodel Worth It? Cost, Resale Value, and When to Skip It</h1>
          <p className="hero-subtitle">A minor kitchen remodel returns about 96% of its cost at resale, but a full luxury gut renovation recovers closer to 38%. This guide breaks down the real dollar ranges, payback math, and the one condition that flips the verdict against you.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>It depends on scope: a minor kitchen remodel is worth it, a full luxury gut renovation usually isn&apos;t. That&apos;s the verdict, and the line between them is the number that matters most.</p>
            <p>A minor midrange kitchen remodel returns about 96% of its cost at resale. A full upscale gut renovation returns closer to 38%. Same room, wildly different math — and the difference comes down to how much you spend before you stop recovering it.</p>


            <h2>The Math That Supports It</h2>
            <p>A minor kitchen remodel runs roughly $24,000 to $27,000 nationally. That covers refacing or repainting cabinets, new hardware, a mid-tier countertop, an updated sink and faucet, a new energy-efficient appliance or two, and fresh flooring. At ~96% resale recovery, you&apos;re getting back around $23,000 to $26,000 of it — plus the daily use you actually enjoy while you live there.</p>
            <p>A midrange full remodel — new cabinets, semi-custom layout, quartz counters, full appliance suite — lands around $75,000 to $80,000 and recovers roughly 50% to 60%. Still defensible if you&apos;re staying five-plus years and the kitchen is genuinely dated.</p>
            <p>An upscale gut job — custom cabinetry, high-end appliances, stone slabs, structural changes — can hit $150,000 or more and recovers only about 38%. You&apos;re eating $90,000+ the moment you sell.</p>
            <blockquote className="article-quote">
              The homeowners who lose money aren&apos;t the ones who remodeled — they&apos;re the ones who out-remodeled their block.
              <cite>— residential appraiser, on over-improvement</cite>
            </blockquote>


            <h2>Payback Timeline</h2>
            <p>Resale recovery isn&apos;t the whole story if you&apos;re not selling soon. Factor in use-value: a functional kitchen you cook in daily pays back in quality of life, not just dollars.</p>
            <p>If you plan to sell within two years, treat the resale percentage as your real return — a minor remodel nearly breaks even, a luxury one loses badly. If you&apos;re staying seven-plus years, the calculus loosens: you&apos;re buying years of daily use, and the resale hit matters less because market appreciation often absorbs part of it.</p>
            <p>Rule of thumb: keep total kitchen spend under 10% to 15% of your home&apos;s value. Spend $80,000 remodeling a $300,000 house and you&apos;ve priced yourself above the neighborhood ceiling.</p>


            <h2>The Catch That Flips the Verdict</h2>
            <p>The verdict flips when your kitchen already matches or exceeds the neighborhood standard. Over-improvement is where even a modest remodel becomes a loss.</p>
            <p>If comparable homes on your street sell with builder-grade kitchens and yours already has functional, clean finishes, a $27,000 refresh won&apos;t return 96% — it&apos;ll return a fraction, because buyers won&apos;t pay a premium the market doesn&apos;t support. The 96% figure assumes you&apos;re upgrading a dated or worn kitchen to the neighborhood norm. Push past that norm and every dollar above it recovers pennies.</p>
            <p>So before you spend: pull three recent sales of homes like yours and look at their kitchens. If yours is already at that level, skip the remodel or keep it to cosmetic touch-ups. If yours is visibly behind, a minor remodel is one of the best-returning projects in real estate.</p>


            <h2>Before You Commit</h2>
            <p>The math only works if the labor and materials come in where the estimates say they will — and if the contractor finishes what they start. Cost overruns and half-done jobs are how a 96% project quietly slides toward 60%.</p>
            <p>Get matched with vetted contractors who accept escrow payments, so your money releases only as the work gets done — and your resale math stays intact from demo to final walkthrough.</p>
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
