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
          <div className="hero-badge">Escrow Effect · August 2026</div>
          <h1>The Tile Setter Quit at 50% and Demanded Full Pay. Escrow Meant the Homeowner Said No.</h1>
          <p className="hero-subtitle">A bathroom tile job stalled at the halfway mark when the setter demanded the full balance to &apos;finish next week&apos; — a week that never came. Because the money sat in escrow tied to completion, the homeowner released nothing and hired a finisher without eating a double payment.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$4,200. That was the full contract price for a master bathroom tile job — and at the halfway mark, the setter wanted every dollar of it.</p>
            <p>The work looked fine from the doorway. Shower walls done, floor mostly set, niche framed out. But the second wall was unfinished, the threshold wasn&apos;t cut, the grout hadn&apos;t been touched, and the accent band the homeowner paid extra for wasn&apos;t started. Call it 50% complete on a generous day.</p>
            <p>The setter&apos;s pitch was smooth: pay the balance now, and he&apos;d &apos;come back next week to knock out the rest.&apos; He had another job starting, cash flow was tight, he just needed to get square. Reasonable-sounding. It&apos;s how a lot of people lose a lot of money.</p>


            <h2>Why the homeowner could say no</h2>
            <p>Here&apos;s the part that changed the outcome: the money wasn&apos;t in the setter&apos;s account, and it wasn&apos;t spent. It was sitting in escrow, tied to completion milestones both sides had agreed to before the first tile went up.</p>
            <p>So when the demand came, the homeowner didn&apos;t have to win an argument or make a scene. There was nothing to hand over. The funds only released when the agreed work was verified done — and half a bathroom is not done.</p>
            <p>The setter pushed. He implied the job would stall indefinitely if he wasn&apos;t paid. The homeowner&apos;s answer was simple and stress-free: finish the milestone, the milestone releases. That&apos;s not a negotiation. That&apos;s just the terms.</p>
            <blockquote className="article-quote">
              When the money isn&apos;t yours to release yet, &apos;trust me and pay me early&apos; stops being a pressure tactic. It just becomes a request you&apos;re allowed to decline.
              <cite>— the homeowner, after the fact</cite>
            </blockquote>


            <h2>The week that never came</h2>
            <p>Next week came and went. So did the week after. The setter stopped answering. This is the exact failure mode that ruins these projects — except here, the story ends differently.</p>
            <p>Because nothing had been released past the first milestone, the homeowner still had the back half of the budget intact. No double payment. No &apos;I already gave him $4,200 and now I need another $2,000 to finish.&apos; The remaining escrow was exactly enough to bring in a finisher.</p>
            <p>A second tile setter came in, assessed the existing work, cut the threshold, set the accent band, finished the wall, and grouted the whole room. He got paid out of the funds that were never released to the first guy. The homeowner spent what the job was worth — not what the job was worth plus a walkaway.</p>


            <h2>The math that made it boring</h2>
            <p>The reason this story is calm instead of a horror story is that the money was never the leverage.</p>
            <p>With a lump sum up front, a mid-job walkout costs you twice: once to the person who left, and again to the person who cleans it up. With payment tied to completion, a walkout costs you nothing but time — the unearned money simply stays put and pays for the fix.</p>
            <p>The setter thought the leverage was his because he held the unfinished room hostage. But the leverage was the money, and the money was structured to answer to the work, not to whoever asked loudest.</p>
            <p>If you&apos;re a homeowner about to start a project, the decision that saved this bathroom wasn&apos;t made at 50%. It was made on day zero, when the terms were written down and the money was placed where completion — not pressure — controlled it.</p>
          </div>

          <div className="article-footer">
            <Link href="/guides" className="article-back">← Back to Guides</Link>
            <a href="/create" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>Set up milestone escrow for your project →</a>
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
