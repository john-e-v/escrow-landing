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
          <div className="hero-badge">Contractor Ops · July 2026</div>
          <h1>How to Manage Multiple Subs on One Job Without Losing the Thread</h1>
          <p className="hero-subtitle">Running four subs on one job means four schedules, four invoices, and four ways for accountability to slip. Here&apos;s how to structure the coordination so nothing falls through the cracks—and where a purpose-built approach beats stitching together five apps.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Four subs on one job means twelve failure points: four schedules that can collide, four invoices that arrive on four different logics, and four separate assumptions about who&apos;s responsible when the framing isn&apos;t ready for the electrician.</p>
            <p>Most contractors I&apos;ve watched try to solve this with more apps. That&apos;s usually the wrong move. The problem isn&apos;t that you lack software—it&apos;s that coordination between subs is a workflow question, and you can solve most of it with structure before you spend a dollar on tools.</p>
            <p>Here&apos;s the honest breakdown of the approaches, including where each one falls apart.</p>


            <h2>The spreadsheet approach: cheaper than you think, until it isn&apos;t</h2>
            <p>A shared spreadsheet with a row per sub, columns for scope, start date, dependency, and payment status will genuinely get you through a small job. Don&apos;t let anyone tell you it&apos;s amateur hour—for two subs and a two-week timeline, it&apos;s the right tool.</p>
            <p>Where it breaks: dependencies. A spreadsheet can&apos;t tell you that the drywaller can&apos;t start until the electrician passes rough-in inspection. You end up holding that logic in your head, and the whole point was to get it out of your head. The second failure is payment. A spreadsheet tracks that you owe someone; it does nothing to protect either side when a sub claims work is done and you disagree.</p>


            <h2>The all-in-one platform: one login, one blind spot</h2>
            <p>The pitch for all-in-one is real: scheduling, invoicing, messaging, and payments under one roof means no data re-entry and one source of truth. When it works, it&apos;s clean.</p>
            <p>The tradeoff is that you&apos;re renting someone else&apos;s opinion about how your business runs. All-in-one tools optimize for the average contractor, which means your specific sequencing rules, your retainage terms, your inspection gates—the things that actually differentiate a well-run job—get flattened into generic fields. You also concentrate risk: if that one platform has an outage or a billing dispute, every part of your operation stalls at once.</p>
            <blockquote className="article-quote">
              The moment a tool starts telling me how to run my sequence instead of the other way around, I&apos;ve lost the thing I was paying it to protect.
              <cite>— GC running 6–10 subs per job</cite>
            </blockquote>


            <h2>Best-of-breed: powerful, and a maintenance job of its own</h2>
            <p>Stitching together the best scheduling app, the best invoicing app, and the best messaging app gives you a stack that fits your business exactly. The catch is that you—or someone you pay—now own the integrations between them. Every app update is a chance for the connection to break, and the plumbing becomes a second job nobody scheduled.</p>
            <p>The realistic version of best-of-breed isn&apos;t five apps. It&apos;s a small in-house-tailored core: your own scheduling logic (even in a spreadsheet), your own invoicing rhythm, your own sub communication—and exactly one specialized third-party piece where the risk genuinely warrants an outside party.</p>


            <h2>Where the one outside piece earns its keep</h2>
            <p>The single coordination point that shouldn&apos;t live in your own stack is money that changes hands on disputed work. That&apos;s escrow. When four subs are staged in sequence, the fights aren&apos;t about scheduling—they&apos;re about whether a milestone was actually hit before the next sub could proceed and before payment released.</p>
            <p>Everything else can and probably should be tailored in-house, because you know your sequence better than any vendor. But the payment-on-completion decision benefits from a neutral third party holding the funds against agreed milestones, so &apos;is it done?&apos; stops being a your-word-against-mine conversation. Keep the coordination yours. Outsource only the part where neutrality is the whole point.</p>
            <p>If you want to see how that one piece fits without rebuilding your stack around it, look at how the milestone-and-release structure is set up for multi-sub jobs.</p>
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
