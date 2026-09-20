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
          <div className="hero-badge">Payment Terms · September 2026</div>
          <h1>The Client Won&apos;t Pay Until the City Inspection Passes: Why That&apos;s Their Delay, Not Yours</h1>
          <p className="hero-subtitle">When a client ties your final payment to a municipal inspection you don&apos;t control, they&apos;ve shifted their scheduling risk onto your cash flow. Milestone escrow separates the work you completed from a permit office backlog that has nothing to do with your labor.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Split the payment before the inspection ever enters the conversation. Your labor and your ability to pass a code inspection are two different deliverables, and they should be tied to two different payments. The moment you let both hang on a single final check, you&apos;ve handed the client a free reason to hold your money.</p>
            <p>Here&apos;s the situation you&apos;re in: the work is done, it&apos;s correct, and the client says they&apos;ll release the balance &quot;once the city signs off.&quot; Now you&apos;re waiting on a permit office that schedules inspectors two weeks out, reschedules for weather, and reinspects for a re-tie the client&apos;s own designer changed. None of that is your labor. All of it is now sitting on your cash flow.</p>


            <h2>Whose risk is it, actually</h2>
            <p>A municipal inspection is a scheduling variable owned by the city. You don&apos;t control the inspector&apos;s calendar, the backlog, or whether a plan reviewer flags something outside your scope. When a client conditions your final payment on that event, they are transferring a risk they accepted — the risk of dealing with the permitting authority — onto you, and paying you nothing to carry it.</p>
            <p>That&apos;s the part worth being clear-eyed about. It&apos;s not that the client is refusing to pay. They fully intend to. But they&apos;ve structured the deal so that your money is captive to a third party&apos;s timeline, and they have zero incentive to chase the inspector because the delay costs them nothing. It costs you.</p>
            <blockquote className="article-quote">
              If your payment depends on an event you can&apos;t schedule, you&apos;re not a contractor anymore — you&apos;re an unpaid lender to the permit office.
              <cite>— operational rule of thumb for trade contractors</cite>
            </blockquote>


            <h2>The structural fix: separate the completion from the sign-off</h2>
            <p>Milestone-based escrow solves this by decoupling the two deliverables at the money level, before the job starts.</p>
            <p>You define the milestones in writing. &quot;Rough-in complete and workmanlike&quot; is one milestone, funded and released when the physical work is done and verifiable. &quot;Passes city inspection&quot; is a separate, smaller milestone. The client funds the full amount into escrow up front, so the money already exists — you&apos;re not negotiating over whether they&apos;ll pay, only over when each portion releases.</p>
            <p>When your labor milestone is met, that portion releases on the work, not on the inspector&apos;s calendar. The inspection milestone stays held until the city acts. If the inspector kicks it back for something in your scope, fair — you fix it and it releases. If the delay is a backlog, a weather reschedule, or a change the client&apos;s team made, you&apos;re not floating the entire job&apos;s value while the clock runs.</p>


            <h2>Why this changes the client&apos;s behavior</h2>
            <p>The most useful part isn&apos;t the protection — it&apos;s the incentive shift. Once the money is already in escrow, the client stops treating the inspection as a reason to sit on your check and starts treating it as a task to complete. They funded it. It&apos;s committed. Now getting the inspector out benefits them, because they want their own funds resolved and their project closed.</p>
            <p>You&apos;ve also removed the single most common excuse in the book. &quot;I&apos;ll pay when it passes&quot; only works as a stall when the money is still in the client&apos;s account. When it&apos;s in escrow with clear release conditions, the conversation moves from *whether* to *what the inspector actually said.*</p>


            <h2>Set it up once, use it on every job</h2>
            <p>This isn&apos;t extra paperwork per project — it&apos;s a template you build once and reuse. Standard milestones for your trade, standard release language, standard split between labor and third-party sign-off. After that, every contract you write already has the inspection carve-out baked in, and you never have another job where a permit backlog quietly becomes your financing problem.</p>
            <p>If you&apos;re structuring milestone terms that keep your completed labor from getting held hostage by an inspector&apos;s calendar, it&apos;s worth looking at how the plans are set up for exactly this kind of split.</p>
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
