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
          <h1>The Plumbing Rough-In Leaked Behind the Wall. Escrow Meant the Homeowner Held Firm.</h1>
          <p className="hero-subtitle">A homeowner nearly signed off on a bathroom rough-in before a pressure test revealed a slow leak behind the new drywall line. Because payment sat in escrow tied to inspection, the contractor fixed it on his dime instead of the homeowner&apos;s.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$4,200. That&apos;s what the second bathroom rough-in would have cost the homeowner to tear out and redo — if she&apos;d already paid for the first one.</p>
            <p>She hadn&apos;t. And that single fact is the whole story.</p>
            <p>The project was a straightforward guest-bath renovation: relocate the vanity plumbing, add a second-floor shower drain, and close everything up before tile. The contractor was competent, licensed, and by every visible measure doing good work. The drywall was hung on the wet wall. The vanity was staged. From the hallway, it looked finished.</p>


            <h2>The Test That Almost Didn&apos;t Happen</h2>
            <p>The payment terms were tied to a pressure test and inspection sign-off — not to how the wall looked, and not to the contractor&apos;s word that it was done. Money for the rough-in phase sat in escrow, waiting on that one checkpoint.</p>
            <p>The contractor, to his credit, ran the test himself before calling for inspection. He capped the lines, pressurized the system, and watched the gauge. It held for a minute. Then it crept down. Slowly — the kind of drop you&apos;d miss if you weren&apos;t staring at it. A slow leak at a solvent-weld joint behind the new drywall line, exactly where nobody would see it until a water stain bloomed on the ceiling below six months later.</p>
            <blockquote className="article-quote">
              If she&apos;d paid me on &apos;looks done,&apos; I&apos;d have been long gone by the time that showed up. And it would&apos;ve been her problem to prove it was mine.
              <cite>— the contractor, after the fix</cite>
            </blockquote>


            <h2>Why Escrow Changed Who Ate the Cost</h2>
            <p>Here&apos;s the part that matters. In a lot of jobs, the rough-in gets paid on progress — the wall is up, the phase looks complete, the check clears. The leak surfaces months later, and now it&apos;s an argument. Was it the plumbing? The tile? Movement in the framing? The homeowner is chasing a contractor who&apos;s been paid and moved on, and the burden of proof has quietly shifted onto the person who didn&apos;t do the work.</p>
            <p>Because the payment was held against the inspection milestone, none of that happened. The failure surfaced while the money was still on the table. The contractor opened the wall, cut out the bad joint, re-glued it, re-tested, and passed — on his own dime, because that was the deal he&apos;d agreed to. It cost him half a day and a sheet of drywall instead of costing her a ceiling repair and a legal headache a year out.</p>
            <p>The homeowner never had to hold firm through an argument. She never had to threaten to withhold anything or dig up her contract. The structure held firm for her. The incentive was already pointed in the right direction: the contractor wanted that test to pass as badly as she did, because that&apos;s what released his money.</p>


            <h2>The Quiet Version of Winning</h2>
            <p>The best outcome in a project like this is boring. No dispute, no lawyer, no stain on the ceiling, no he-said-she-said eighteen months later. Just a leak caught on the right day, fixed by the right person, paid for by the person whose work caused it.</p>
            <p>That only happens when the money and the milestone are tied together — when &apos;done&apos; is defined by a test that passes, not by a wall that looks finished. Sequence the payment to the proof, and the person doing the work has every reason to find the problem before you do.</p>
            <p>If you&apos;re a homeowner about to start a project where the expensive failures hide behind drywall, this is the shape you want your payment terms to take before the first joint gets glued.</p>
          </div>

          <div className="article-footer">
            <Link href="/guides" className="article-back">← Back to Guides</Link>
            <a href="/create" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>Structure your project on clrblt.com/create →</a>
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
