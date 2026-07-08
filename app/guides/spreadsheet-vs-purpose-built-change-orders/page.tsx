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
          <h1>Change Order Tracking: Spreadsheet vs. Purpose-Built Software</h1>
          <p className="hero-subtitle">A spreadsheet handles change orders fine until a job hits its third revision and someone loses the thread. Here&apos;s an honest look at when a spreadsheet is enough, when purpose-built software earns its cost, and where both leave you exposed on payment.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>A spreadsheet handles change orders fine up to about the third revision on a single job. After that, the failure rate climbs fast — someone edits an old copy, a version gets emailed instead of shared, and the number you&apos;re billing off no longer matches the number the client thinks they approved.</p>
            <p>That&apos;s the whole comparison in one sentence: it&apos;s not about features, it&apos;s about how many people are touching the document and how often it changes. Below is an honest read on where each approach actually wins.</p>


            <h2>When a spreadsheet is genuinely enough</h2>
            <p>If you&apos;re a one- or two-person operation running a handful of jobs at a time, a spreadsheet is not a compromise — it&apos;s the right tool. It&apos;s free, it&apos;s flexible, and you can reshape it in five minutes when a job doesn&apos;t fit your template.</p>
            <p>The conditions where it holds up: one person owns the file, change orders are infrequent, and the client signs a PDF you export manually. As long as there&apos;s a single source of truth and a single hand editing it, the spreadsheet&apos;s weaknesses never surface.</p>
            <p>The honest downside nobody mentions: a spreadsheet has no memory. It won&apos;t tell you a CO was approved verbally but never signed, or that revision 2 superseded revision 1. That discipline lives in your head. For a small shop, your head is enough. At scale, it isn&apos;t.</p>
            <blockquote className="article-quote">
              We lost $14K on one job because two guys were editing different copies of the same change order sheet. The client paid off the lower one.
              <cite>— GC, residential remodel, 9 crew</cite>
            </blockquote>


            <h2>When purpose-built software earns its cost</h2>
            <p>Purpose-built change order tools earn their monthly fee the moment you have more than one person editing, more than a few active jobs, or clients who dispute what they approved. You get version history, an audit trail, and a client-facing approval step that timestamps who signed what.</p>
            <p>The tradeoff is real, though. Purpose-built tools force you into their workflow. If your process is unusual — odd billing splits, phased approvals, weird retainage math — you&apos;ll spend the first month fighting the software&apos;s assumptions. And the all-in-one platforms that bundle change orders with scheduling, invoicing, and CRM often do change orders adequately and everything else adequately, without doing any single thing well.</p>
            <p>That&apos;s the best-of-breed vs. all-in-one fork. All-in-one reduces the number of logins and the number of bills. Best-of-breed gives you a sharper tool for each job but leaves you stitching them together. Neither is wrong; it depends on whether you&apos;d rather manage integrations or accept compromises.</p>


            <h2>Where both leave you exposed</h2>
            <p>Here&apos;s the part neither category solves: tracking a change order and getting paid on it are different problems.</p>
            <p>A spreadsheet documents the CO. Purpose-built software documents it better, with signatures and timestamps. But documentation is evidence, not leverage. When a client approves a $22K change and then stalls on payment, your beautiful audit trail is something you wave in a dispute — after the work is already done and the money is already out of your pocket.</p>
            <p>The gap is the same regardless of which tracking tool you pick: approval and funding are decoupled. You do the work on the promise, and the promise is only as good as the client&apos;s willingness to pay.</p>


            <h2>The stack we&apos;d actually build</h2>
            <p>Tailor most of your stack in-house. Your change order tracking, whether it&apos;s a spreadsheet or a purpose-built tool, should fit how you actually run jobs — and you&apos;re the only one who knows that. Don&apos;t outsource your workflow to a vendor&apos;s assumptions unless the vendor is clearly better than your own process.</p>
            <p>The one piece worth handing to a neutral third party is the money. Escrow closes the gap both tracking tools leave open: the client funds the change order before you build it, and release is tied to the milestone, not to a follow-up email. Track however you like; just don&apos;t let the funding depend on goodwill.</p>
            <p>That&apos;s the split we&apos;d recommend — an in-house-tailored stack with escrow as the single external piece that protects the payment itself.</p>
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
