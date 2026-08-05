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
          <div className="hero-badge">Contractor Ops · August 2026</div>
          <h1>Can You Take Your Data When You Leave? The Lock-In Test for Contractor Software</h1>
          <p className="hero-subtitle">Most contractor software makes it easy to get your data in and quietly hard to get it out. Before you commit a stack, run the export test—because the day you switch tools is the day you find out who actually owns your job history.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Run this test before you sign anything: ask the software to export every job, every photo, every invoice, and every customer note into a file you can open without their app. Then actually open it. If what comes out is a CSV with half the fields missing and none of the attachments, you don&apos;t own your data—you&apos;re renting access to it.</p>
            <p>Most contractor tools are built to make the front door wide and the back door narrow. Onboarding is smooth because they want you in. Export is an afterthought because they&apos;d rather you never leave. That asymmetry is a business decision, not a technical limitation, and it&apos;s worth understanding before it costs you a season of job history.</p>


            <h2>The two lock-in traps</h2>
            <p>Trap one is the all-in-one suite. It&apos;s genuinely convenient—scheduling, invoicing, CRM, and job tracking under one login. The tradeoff is that when one piece stops fitting, you can&apos;t swap just that piece. Your customer list is entangled with your invoicing which is entangled with your scheduling, and pulling one thread unravels the whole thing. The convenience you paid for becomes the reason you can&apos;t leave.</p>
            <p>Trap two is the opposite: a best-of-breed stack where every tool does one thing well. You keep flexibility, but now your data lives in five places with five export formats and no single source of truth. Switch one vendor and you&apos;re re-mapping fields by hand. Flexibility isn&apos;t free either—it&apos;s just a different bill.</p>
            <p>We&apos;ll be honest: there&apos;s no configuration that makes lock-in disappear. Every tool you adopt is a small bet that it&apos;ll still serve you in three years. The question isn&apos;t whether you&apos;re exposed—it&apos;s which pieces you can afford to lose access to overnight.</p>
            <blockquote className="article-quote">
              The day you switch tools is the day you find out who actually owned your job history—and by then it&apos;s too late to negotiate.
              <cite>— common lesson from contractors mid-migration</cite>
            </blockquote>


            <h2>Rank your data by what hurts to lose</h2>
            <p>Not all data carries the same switching cost. Scheduling is annoying to rebuild but survivable—you can reconstruct next month&apos;s calendar in an afternoon. A CRM export that comes out clean is recoverable. But the records tied to money and disputes—signed change orders, payment milestones, proof of what was agreed—are the ones you can&apos;t afford to have trapped behind someone else&apos;s login when a client contests a bill two years later.</p>
            <p>This is where we land differently than most stacks. We think the money-and-agreement layer is the one piece that shouldn&apos;t live inside a tool you might churn out of. Escrow works precisely because it&apos;s a neutral third party—it doesn&apos;t care which scheduling app or accounting software you use, and it isn&apos;t trying to hold your data hostage to keep you subscribed. Its whole job is to hold the record straight and hand it over when asked.</p>


            <h2>The stack we&apos;d actually build</h2>
            <p>Keep the operational layer close and in-house-tailored: scheduling, notes, photos, and CRM in whatever fits how you already run jobs, chosen on the assumption you might replace it. Assume those tools are swappable and don&apos;t over-invest in their permanence.</p>
            <p>Then make escrow the one deliberate third-party dependency—the neutral holder for payment terms and agreed scope, kept outside any single vendor&apos;s export policy on purpose. That&apos;s the layer where being locked in actually protects you instead of the vendor.</p>
            <p>Before you commit to anything, run the export test on every tool you&apos;re considering, and pay closest attention to how the money layer behaves. If you want to see how the escrow piece fits alongside the rest of your stack, the contractor plans lay it out plainly.</p>
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
