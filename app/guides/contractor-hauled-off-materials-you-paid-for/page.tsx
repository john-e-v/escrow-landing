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
          <div className="hero-badge">Payment Protection · August 2026</div>
          <h1>You Paid for the Materials. The Contractor Loaded Them Onto the Next Job.</h1>
          <p className="hero-subtitle">A homeowner wired $11K for cabinets and lumber that showed up, then vanished onto another client&apos;s site. Here&apos;s how paying for materials up front hands your inventory to whoever the contractor decides needs it more.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$11,340. That&apos;s what a homeowner in Sacramento wired to her kitchen contractor for cabinets, hardwood flooring, and framing lumber. The delivery truck came. The materials sat in the garage for four days. Then a crew arrived, loaded everything back up, and drove it to a job across town.</p>
            <p>She paid for materials. She just didn&apos;t get to keep them.</p>
            <p>This isn&apos;t fraud in the courtroom sense. The contractor fully intended to buy her materials eventually. But he had three jobs running, cash flow was tight on job two, and job two&apos;s client was threatening to walk. So the cabinets she paid for became the cabinets that saved his relationship with someone else.</p>


            <h2>How the shell game actually works</h2>
            <p>Here&apos;s the mechanic nobody explains when you sign. When you pay for materials up front, you are not buying materials. You are giving the contractor cash and trusting that cash converts into your materials, on your site, in a reasonable window.</p>
            <p>But a contractor juggling multiple jobs treats all incoming payments as one pool. Your deposit doesn&apos;t have your name on it once it hits his account. It funds whichever fire is burning hottest. If your job is calm and stable and job two is combusting, your money — and increasingly, your physical materials — flow toward the emergency.</p>
            <p>The cabinets in her garage weren&apos;t stolen. They were reassigned. He told her the delivery was &apos;staged early&apos; and that a fresh set was &apos;on order.&apos; The fresh set was on order — with the money from her next progress payment, which she hadn&apos;t made yet.</p>
            <blockquote className="article-quote">
              By the time I figured out the pattern, I&apos;d funded two other people&apos;s kitchens and my own studs weren&apos;t even up.
              <cite>— homeowner, kitchen remodel, Sacramento</cite>
            </blockquote>


            <h2>The timeline where it fell apart</h2>
            <p>Week 1: $11,340 material deposit wired. Week 1, day 4: materials loaded out. Week 2: &apos;reorder&apos; promised, no receipts. Week 4: framing still not started, contractor &apos;waiting on lumber.&apos; Week 6: she requests proof of purchase for anything. He goes quiet. Week 8: she&apos;s out roughly $11K with a bare garage and a subfloor.</p>
            <p>Recovery meant a lien threat, a small-claims filing, and four months of her life. She got about 60 cents on the dollar in a settlement. The rest paid for someone else&apos;s countertops.</p>


            <h2>What would have actually prevented it</h2>
            <p>The problem was never the contractor&apos;s character. It was the structure. Cash handed over in advance has no leash. It goes where the account owner decides it goes.</p>
            <p>Escrow flips that. Your material money sits with a neutral third party and releases against proof — a delivery confirmed on your site, a receipt tied to your job, a milestone actually completed. If the cabinets get loaded back onto a truck, the next tranche never releases. The contractor can&apos;t fund job two&apos;s emergency with your inventory, because your money isn&apos;t liquid until your work is real.</p>
            <p>Milestone-based release also kills the &apos;reorder&apos; stall. There&apos;s no vague future payment to divert, because nothing moves until the current step is verifiably done. The incentive reverses: the fastest way for the contractor to get paid is to leave your materials exactly where they belong.</p>
            <p>A good contractor has no reason to fear this. The ones who resist escrow the hardest are usually the ones running the pool — juggling deposits to stay afloat. That resistance is the tell. The ones who welcome it are telling you their cash flow doesn&apos;t depend on your money leaving your job.</p>
            <p>If you&apos;re about to wire a material deposit, ask one question first: will this release against proof, or does it just disappear into an account? If you&apos;d rather not gamble on the answer, start with contractors who already work this way.</p>
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
