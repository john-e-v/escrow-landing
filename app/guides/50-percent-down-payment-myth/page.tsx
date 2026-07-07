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
          <div className="hero-badge">Payment Structure · July 2026</div>
          <h1>Why 50% Down Doesn&apos;t Protect You the Way You Think</h1>
          <p className="hero-subtitle">A big deposit feels like protection, but it front-loads your cash and leaves the back half of the job exposed. The real fix is tying money to completed milestones, not to the calendar or a single upfront lump.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Stop collecting 50% up front and call it protection. It isn&apos;t. A big deposit protects your first week of cash flow and nothing else — and it quietly transfers all the risk to the second half of the job, which is exactly where jobs go sideways.</p>
            <p>Here&apos;s the math nobody runs. On a $40,000 job, a 50% deposit puts $20,000 in your account before you&apos;ve bought materials. Feels great. But by the time you&apos;re 70% done — framing up, materials in, most of your labor spent — you&apos;ve collected $20,000 and burned through maybe $28,000 in costs and time. You are now financing your own client, out of pocket, on the most expensive stretch of the project. The deposit didn&apos;t protect you. It just moved the pain to the end, where you have the least leverage to fix it.</p>


            <h2>The Deposit Solves the Wrong Problem</h2>
            <p>A 50% deposit is built to answer one question: &quot;Will this client vanish before I start?&quot; It answers that fine. What it does nothing for is the question that actually costs contractors money: &quot;Will this client pay the back half when the work is nearly done and they&apos;re feeling comfortable?&quot;</p>
            <p>That&apos;s where the losses live. The final 25–40% of a contract is where slow-pays, disputes, and ghosting cluster — because by then the client has most of what they wanted. You&apos;ve delivered value they can already use, and your remaining leverage is a lien you don&apos;t want to file and a relationship you don&apos;t want to torch. The lump deposit did nothing to structure that final stretch. It front-loaded your comfort and left the tail exposed.</p>
            <blockquote className="article-quote">
              The deposit protects the part of the job that was never really at risk, and leaves the part that always is.
              <cite>— the pattern behind most contractor payment losses</cite>
            </blockquote>


            <h2>Tie Money to Milestones, Not the Calendar</h2>
            <p>The structural fix is to stop treating payment as two events — deposit and final — and start treating it as a sequence tied to completed, verifiable work. Break the job into milestones the client can see: demo complete, rough-in done, drywall up, fixtures set, punch list closed. Each milestone releases its own payment. Nobody is ever more than one stage ahead of what they&apos;ve been paid for.</p>
            <p>The difference is that your cash exposure never balloons. Instead of financing $8,000 of uncollected work at the risky end, you&apos;re carrying one milestone at a time. If a client stalls, you stall — with most of the work still ahead of them, not behind them. That&apos;s real leverage, and it&apos;s the leverage a big deposit throws away on day one.</p>


            <h2>Milestones Only Work If the Money Is Held</h2>
            <p>There&apos;s a catch, and it&apos;s the reason milestone billing fails for a lot of contractors: milestones on paper still depend on the client actually cutting the check when the stage is done. You&apos;ve just traded one collection fight for four smaller ones.</p>
            <p>That&apos;s why the milestone structure needs money committed up front and released on completion — an escrow arrangement, where the client funds the job at signing but the funds only move to you as each stage clears. The client isn&apos;t handing you a lump they&apos;ll fight to protect later; they&apos;ve already parted with it, and it&apos;s waiting on the work. You&apos;re not chasing payment at each stage; you&apos;re triggering a release. It removes the awkward conversation entirely, because the money was never in question — only the timing of the work was.</p>
            <p>If you&apos;ve been eating slow final payments and calling your deposit &quot;protection,&quot; this is the part of the operation worth rebuilding. Set up your milestones, price each stage to your real cost curve, and see how the plans structure the release so the back half of every job stops being the risky half.</p>
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
