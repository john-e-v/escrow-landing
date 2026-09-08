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
          <div className="hero-badge">Contractor Ops · September 2026</div>
          <h1>Dispatch Software vs. Group Text: What Breaks When You Send Crews to 5 Sites</h1>
          <p className="hero-subtitle">Running a group text to send crews to job sites works until it doesn&apos;t—then you&apos;re eating a truck roll to the wrong address. Here&apos;s an honest look at where a shared thread breaks and where dispatch software actually earns its cost.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>One wrong-address truck roll costs you about $180 in wages, fuel, and the hour you&apos;ll never bill back. If your group text sends five crews to five sites every morning, you&apos;re one thumb-typo away from that number showing up on a Tuesday. That&apos;s the whole comparison in a sentence—but let&apos;s walk it honestly, because a group text isn&apos;t stupid. It&apos;s free, everyone already has it, and for a two-crew outfit it genuinely works.</p>
            <p>The question isn&apos;t whether a shared thread works. It&apos;s what breaks when you scale, and whether the fix is worth paying for.</p>


            <h2>Where the group text actually holds up</h2>
            <p>A shared thread is the cheapest coordination tool ever invented. No onboarding, no per-seat fee, no crew leader claiming the app logged them out. For a small operation running the same two or three sites, dispatch software is overkill—you&apos;ll spend more time maintaining the tool than the tool saves you.</p>
            <p>Don&apos;t let anyone shame you out of a thread that&apos;s working. If your no-shows are near zero and nobody&apos;s driven to the wrong lot in six months, you don&apos;t have a dispatch problem. You have a solution that fits.</p>
            <blockquote className="article-quote">
              We ran everything off one group text for three years. It only became a problem the summer we hit five active sites.
              <cite>— Concrete sub, 11-person crew</cite>
            </blockquote>


            <h2>Where it breaks</h2>
            <p>The thread fails on exactly one thing: it has no source of truth. The address lives in a message that scrolls away by 6:40 a.m. When crew three asks &quot;which Maple, the one off 9 or the new pour?&quot; the answer is buried above forty other texts, and the guy who knows is already driving.</p>
            <p>That&apos;s the real cost—not the typo itself but the ambiguity. Five sites means five sets of directions, gate codes, material drops, and change-of-plans, all competing in one feed with nobody&apos;s name attached to who&apos;s responsible for what. Purpose-built dispatch software earns its money here: each job is a record, not a message. The address doesn&apos;t scroll. Assignment is explicit. A crew lead opens the app and sees their site, their code, their scope—no scrolling, no guessing.</p>


            <h2>The honest tradeoff</h2>
            <p>Dispatch software costs money and, worse, costs adoption. If your crew leads won&apos;t open it, you&apos;ve paid for a tool that makes your mornings slower because now you&apos;re texting AND updating the app. That&apos;s the failure mode nobody sells you on. Best-of-breed dispatch tools are powerful and narrow; all-in-one platforms bundle dispatch with invoicing and payroll but make you swallow the whole thing to get the one piece you needed.</p>
            <p>My actual take: most of your stack should be tailored in-house—your job sheets, your route list, your crew assignments live better in tools you shape around how you already work than in someone else&apos;s rigid workflow. You know your sites better than any vendor does.</p>


            <h2>The one piece worth outsourcing</h2>
            <p>There&apos;s exactly one part of the operation where a neutral third party beats anything you&apos;d build or bolt on: holding money. Dispatch, scheduling, and job tracking can and should bend to your process. But payment held in escrow only works because it&apos;s not yours and not the client&apos;s—it&apos;s parked with someone with no stake in the dispute. That neutrality is the entire product, and it&apos;s the one thing you can&apos;t fake with a spreadsheet or a group text.</p>
            <p>So run the thread until it breaks. Move to dispatch software when five sites make ambiguity expensive. But when it comes to getting paid without the standoff, that&apos;s the piece to hand to a third party on purpose.</p>
            <p>If you&apos;re building a stack that&apos;s tailored where it should be and neutral where it counts, see how the escrow piece fits.</p>
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
