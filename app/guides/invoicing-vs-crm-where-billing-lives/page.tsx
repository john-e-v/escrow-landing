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
          <div className="hero-badge">Tool Stack · September 2026</div>
          <h1>Where Your Billing Actually Lives: Standalone Invoicing vs. CRM Module</h1>
          <p className="hero-subtitle">Contractors keep asking whether billing belongs in a standalone invoicing tool or bolted onto the CRM. The honest answer depends on where your job data already lives — and whether you can pull it back out when you leave.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Verdict first: if your job data already lives in a CRM, keep billing in the CRM. If it lives in a field app, a spreadsheet, or your head, a standalone invoicing tool is usually the cleaner call. Almost every wrong answer I&apos;ve seen came from picking the tool before answering that one question.</p>
            <p>The reason contractors keep re-litigating this is that both approaches actually work — they just fail in different places. So instead of telling you which one wins, let me show you where each one breaks, so you can pick the failure you can live with.</p>


            <h2>The case for billing inside the CRM</h2>
            <p>If you&apos;re already tracking leads, estimates, and job stages in a CRM, adding a billing module means your invoice pulls from the same customer record you&apos;ve been updating all along. No re-typing the address. No mismatched job numbers. When a customer calls, everything is in one screen.</p>
            <p>The tradeoff is dependency. Your invoices, payment history, and customer ledger now live inside a system you don&apos;t own and can&apos;t easily export in a usable form. The day you outgrow that CRM — or its pricing changes, or it sunsets the feature — your entire financial history is hostage to their export button. I&apos;ve watched contractors stay on tools they hated for two extra years purely because leaving meant abandoning their billing records.</p>
            <blockquote className="article-quote">
              We didn&apos;t switch CRMs because switching meant re-keying three years of invoices by hand. The software knew that. That&apos;s why the price kept going up.
              <cite>— remodeling contractor, 11 employees</cite>
            </blockquote>


            <h2>The case for standalone invoicing</h2>
            <p>A dedicated invoicing tool does one job and tends to do it well: clean invoices, faster payment options, better reminders, cleaner reports for your accountant. It doesn&apos;t care what CRM you use, so you can swap the CRM later without touching your billing.</p>
            <p>The cost is double-entry. Somebody has to move job data from wherever it lives into the invoicing tool, and every manual hop is a place for a wrong number to sneak in. For a two-person crew doing a handful of invoices a month, that&apos;s nothing. For a shop running twenty active jobs, that friction adds up into real overhead — or into a part-time bookkeeper.</p>


            <h2>The question nobody asks until it&apos;s too late</h2>
            <p>Both camps skip the same question: can you pull your data back out when you leave? Not &quot;is there an export&quot; — there&apos;s always an export. The real question is whether the export is usable. A CSV of raw fields with no invoice PDFs and no payment linkage is technically an export and practically worthless.</p>
            <p>Before you commit to either approach, run one test: export your data today and see what you actually get. If it&apos;s a clean, complete record you could hand to a new system, you&apos;re free. If it&apos;s a mess, you&apos;re locked in whether you know it or not.</p>


            <h2>Where escrow fits in this</h2>
            <p>Here&apos;s the part I&apos;ll argue for openly. Most of your stack should be built around your business — your CRM, your invoicing, your field tools should bend to how you actually work. The one place I&apos;d deliberately hand control to a neutral third party is escrow.</p>
            <p>Why? Because escrow&apos;s whole value is that neither you nor the customer controls it. If your deposit-holding and milestone-release logic lives inside your own CRM or invoicing tool, it&apos;s not really escrow — it&apos;s just a balance you promise to honor. A neutral escrow layer sitting outside your stack is the one piece where being independent is the feature, not a bug. Keep everything else in-house and tailored. Let the money-holding be the exception.</p>
            <p>If you&apos;re mapping out where each piece of your stack should live, that&apos;s the frame worth borrowing: own what runs your business, outsource only the trust.</p>
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
