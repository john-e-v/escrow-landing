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
          <div className="hero-badge">Cost &amp; Timeline · August 2026</div>
          <h1>How Much Does Chimney Repair Cost in 2026?</h1>
          <p className="hero-subtitle">Chimney repair runs $200 to $6,000 in 2026, with full rebuilds pushing past $12,000. The gap depends on whether you&apos;re patching mortar, replacing a crown, or rebuilding a leaning stack from the roofline up.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Chimney repair runs $200 to $6,000 in 2026, with full rebuilds pushing past $12,000. A $200 job is a contractor sealing a few cracks with fresh caulk. A $12,000 job is a mason tearing your chimney down to the roofline and rebuilding it brick by brick. Both are called &quot;chimney repair,&quot; which is exactly why quotes confuse homeowners.</p>
            <p>Here&apos;s the honest verdict: most repairs land between $500 and $2,500. The reason the published range is so much wider is that &quot;chimney&quot; covers a stack of very different systems — the crown, the flashing, the mortar joints, the liner, the firebox, and the structural masonry itself. Each fails differently and costs differently to fix.</p>


            <h2>What actually moves the number</h2>
            <p>Scope is the biggest lever. Repointing mortar joints (tuckpointing) runs $10 to $25 per square foot, so a small patch is a few hundred dollars and a full re-point of a two-story chimney can hit $3,000. A cracked crown costs $150 to $600 to seal but $1,000 to $3,000 to rebuild. A new stainless steel liner is $2,500 to $7,000 on its own. When one problem hides another — cracked crown letting water rot the liner, which spalls the brick — you&apos;re suddenly paying for three jobs at once.</p>
            <p>Materials swing the total more than people expect. Clay flue tiles are cheap; stainless liners are not. Standard red brick is affordable; matching the color and profile of 90-year-old brick on a historic home means custom sourcing at a premium. Cast-in-place liners, copper flashing, and natural stone caps all push you toward the top of the range.</p>
            <blockquote className="article-quote">
              The quote isn&apos;t high because the mason is greedy. It&apos;s high because water got in five years ago and nobody caught it. Now we&apos;re fixing the leak and everything the leak touched.
              <cite>— Masonry contractor, upper Midwest</cite>
            </blockquote>


            <h2>Region, access, and the labor market</h2>
            <p>Where you live changes the bill before anyone touches a trowel. Skilled masons are scarce, and in metro areas of the Northeast and West Coast their day rates run 40 to 60 percent higher than in the rural South. Cold-climate regions also see more freeze-thaw damage, which means more chimneys needing serious work and busier crews charging accordingly.</p>
            <p>Access matters too. A single-story chimney you can reach from a stable roof is straightforward. A three-story stack requiring scaffolding, roof anchors, and two extra days of setup can add $1,000 to $2,000 in labor and rental before the actual repair begins. Steep pitches and fragile old roofing only make it worse.</p>


            <h2>Permitting and inspection</h2>
            <p>Minor repairs rarely need a permit. Structural rebuilds and liner replacements often do, and permit fees range from $75 to $500 depending on your municipality. Some regions require a post-work inspection before you can legally use the fireplace again — a smart safeguard, but one more line item and one more scheduling delay.</p>
            <p>This is also where cheap quotes get dangerous. A contractor who skips the permit and the liner inspection can undercut everyone else by 30 percent — right up until a chimney fire or a failed home sale exposes the shortcut.</p>


            <h2>Getting a number you can trust</h2>
            <p>The safest move is to get the chimney inspected first, then collect two or three itemized quotes that break out crown, flashing, mortar, and liner as separate lines. That&apos;s how you spot whether you&apos;re comparing the same job — and whether someone&apos;s padding or skipping.</p>
            <p>When you&apos;re spending four or five figures on work you can&apos;t easily inspect from the ground, it helps to hold payment until each stage is actually done and verified.</p>
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
