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
          <div className="hero-badge">The Escrow Effect · September 2026</div>
          <h1>The Windows Went In Without Flashing. Escrow Meant the Homeowner Held Firm.</h1>
          <p className="hero-subtitle">A $22K window replacement looked flawless from the inside — until a rainstorm revealed water tracking down the studs. Because the final payment sat in escrow, the homeowner had the leverage to force a proper re-install instead of eating a hidden rot problem.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$22,000 for a full window replacement, and the only thing that saved the homeowner from a five-figure rot repair was a final payment that hadn&apos;t left escrow yet.</p>
            <p>The install looked perfect. Twelve new windows, clean interior trim, tight caulk lines, no drafts. From the inside, it was a finished job. The crew asked for the last draw, packed up, and left a punch list of exactly zero items. Everyone was happy — until the first real rainstorm three weeks later.</p>
            <p>That&apos;s when a thin dark line appeared on the drywall under the master bedroom window. Then another downstairs. The homeowner pulled a piece of interior trim and found water tracking straight down the face of the stud. The windows had gone in without flashing.</p>


            <h2>Flawless Inside, Failing Behind the Wall</h2>
            <p>Flashing is the layered membrane and metal that directs water away from the rough opening and out over the siding. It&apos;s invisible once the job is done, which is exactly why it&apos;s the easiest thing to skip. A window can look and feel completely sealed from inside a dry house and still be funneling every drop of rain directly into the wall cavity.</p>
            <p>By the time you see the stain, water has usually been running behind the cladding for weeks. Sheathing swells. Studs darken. If it goes unnoticed through a full wet season, you&apos;re not repairing windows anymore — you&apos;re opening walls, replacing framing, and paying for remediation that dwarfs the original install price.</p>
            <p>The crew&apos;s position, when confronted, was predictable: the windows were in, they were level, they were caulked, and caulk was &apos;the seal.&apos; They offered to come add more sealant on the exterior. That&apos;s the negotiation a lot of homeowners lose — because the money is already gone.</p>
            <blockquote className="article-quote">
              Once they&apos;ve cashed the final check, a re-install stops being their obligation and starts being a favor. And nobody does a $6,000 favor.
              <cite>— residential remodeling estimator</cite>
            </blockquote>


            <h2>Why the Money Sitting Still Changed Everything</h2>
            <p>This homeowner had structured the job so the final payment released only after the work was verified — not when the crew declared themselves done. The last draw was sitting in escrow, untouched, on the day that stain appeared.</p>
            <p>That single fact flipped the entire conversation. Instead of begging a paid contractor to return, the homeowner was a client with leverage holding funds the contractor still wanted. The ask was simple: pull the windows, install proper flashing to manufacturer spec, document it, and the money releases. No documentation, no release.</p>
            <p>The crew came back. They removed all twelve units, installed sill pans and self-adhered flashing the way the manufacturer&apos;s instructions had called for the first time, and photographed each opening before closing it up. The homeowner reviewed the photos, confirmed the drywall repairs, and only then authorized the release.</p>


            <h2>The Leverage Was Structural, Not Personal</h2>
            <p>The thing worth noticing is that the homeowner didn&apos;t win because they argued well or knew more about flashing than the crew. They won because the incentive to finish the job correctly still existed at the exact moment the defect showed up.</p>
            <p>Caulk fails. Crews cut corners on the parts nobody sees. Rain finds every gap. None of that is avoidable. What is avoidable is being the person holding a completed check and a rotting wall, with no reason left for anyone to make it right.</p>
            <p>When the final payment is tied to verified work instead of a crew&apos;s say-so, &apos;it&apos;s done&apos; becomes a claim you get to check — not a fact you&apos;re forced to accept. That&apos;s the whole difference between a stain you catch and a wall you rebuild.</p>
            <p>If you&apos;re lining up a project and want the last payment to mean something, that&apos;s exactly what setting it up correctly from the start protects you from.</p>
          </div>

          <div className="article-footer">
            <Link href="/guides" className="article-back">← Back to Guides</Link>
            <a href="/create" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>Set up your project on clrblt.com/create →</a>
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
