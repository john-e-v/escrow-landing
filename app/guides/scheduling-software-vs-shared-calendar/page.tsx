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
          <h1>Scheduling Software vs. Shared Calendar: What Breaks When You Run 3 Jobs at Once</h1>
          <p className="hero-subtitle">A shared calendar works fine until you&apos;re juggling three active jobs and six subs who all think Tuesday is theirs. This teardown compares the shared-calendar approach against purpose-built scheduling, and where the seams actually rip.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>A shared calendar holds up for exactly two active jobs. On the third, something drops — and it&apos;s usually the framing sub who showed up to a slab that wasn&apos;t poured yet.</p>
            <p>This isn&apos;t a knock on calendars. For a solo operator running one job at a time, a shared calendar is the correct tool. It&apos;s free, everyone already knows how to use it, and it syncs to the phone in your pocket. The problem isn&apos;t the tool. It&apos;s what you&apos;re asking it to do once concurrency enters the picture.</p>
            <p>Below is where the seams actually rip, in the order they rip.</p>


            <h2>Seam 1: The calendar shows time, not sequence</h2>
            <p>A calendar answers &quot;when.&quot; It does not answer &quot;in what order,&quot; and construction is a sequence problem before it&apos;s a time problem. When you drag electrical to Wednesday, the calendar happily lets you leave it before inspection, before drywall — before the wall it&apos;s supposed to be inside of exists.</p>
            <p>Purpose-built scheduling encodes dependencies: this task can&apos;t start until that one closes. That&apos;s the whole difference. A calendar is a list of appointments. A schedule is a set of rules. Running three jobs, you stop being able to hold the rules in your head, and the tool that only tracks appointments starts letting you book impossible days.</p>


            <h2>Seam 2: Everyone edits, nobody owns</h2>
            <p>Six subs on a shared calendar means six people who can move a block. Tuesday gets claimed three times because three people looked, saw it open, and grabbed it. There&apos;s no version of a shared calendar where you get proposal-and-approval — everyone has write access or nobody&apos;s on it.</p>
            <p>Here&apos;s the honest tradeoff the other direction: purpose-built tools add friction. Your subs have to log into something, learn something, maybe get a notification they&apos;ll ignore. A calendar link works on day one with zero training. If your crew is small and loyal and answers texts, that friction may not be worth paying. Name that cost honestly before you switch.</p>
            <blockquote className="article-quote">
              The day I stopped being able to fix a double-booking by lunch was the day the calendar stopped being free.
              <cite>— GC running 3–4 concurrent residential jobs</cite>
            </blockquote>


            <h2>Seam 3: The schedule and the money live in different places</h2>
            <p>This is the seam nobody plans for. Your calendar knows the rough-in happens Thursday. It has no idea whether the client funded the rough-in draw. So you schedule the sub, the sub shows, the work happens, and then you&apos;re chasing payment on work you already authorized — because the calendar and the money never talked.</p>
            <p>The temptation is to solve this with an all-in-one platform that does scheduling, invoicing, payments, and CRM in one login. Sometimes that&apos;s right. But all-in-one means your schedule, your client data, and your money are all hostage to one vendor&apos;s roadmap and one vendor&apos;s outage. Best-of-breed keeps each piece replaceable.</p>


            <h2>Where the third party actually belongs</h2>
            <p>Our bias, stated plainly: most of your stack should stay in-house and tailored — your schedule, your task rules, your client notes. Those are yours, and no external tool understands your crew better than you do. The one piece that genuinely benefits from a neutral third party is the money.</p>
            <p>Scheduling can be internal because a wrong date costs a day. Escrow should be external because a wrong payment costs trust — and neither you nor the client wants the other one holding the account. A third-party escrow layer ties funded milestones to the work so the schedule stops writing checks the draw hasn&apos;t covered. That&apos;s the seam a calendar can&apos;t reach and an all-in-one shouldn&apos;t own alone.</p>
            <p>If you&apos;re at the point where the third job is exposing all three of these seams at once, it&apos;s worth seeing how the money layer plugs into a stack you already control.</p>
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
