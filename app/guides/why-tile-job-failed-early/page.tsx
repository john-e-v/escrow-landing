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
          <div className="hero-badge">Project Failures · July 2026</div>
          <h1>Why Your New Tile Floor Cracked in Six Months (And Who Actually Pays)</h1>
          <p className="hero-subtitle">A homeowner paid $8,400 for a new tile floor that cracked along a full room within six months. The failure wasn&apos;t the tile — it was a skipped subfloor step nobody was paid to verify, and by then the contractor was long gone.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$8,400 for a tile floor that lasted 174 days. The crack ran the full length of the living room, corner to corner, following a seam in the subfloor nobody ever looked at. By the time it showed up, the contractor&apos;s number went to voicemail and the LLC on the invoice had dissolved.</p>
            <p>Here&apos;s what actually happened, because the tile was never the problem.</p>


            <h2>The failure was baked in before the first tile went down</h2>
            <p>The house had a plywood subfloor over floor joists spaced 16 inches on center. That&apos;s fine for carpet or vinyl. For tile, it&apos;s a coin flip. Tile needs a rigid, deflection-resistant base — either a proper cement backer board over the plywood, or an uncoupling membrane, installed with the right thinset and given time to cure.</p>
            <p>The contractor skipped the backer board. He laid thinset directly on the plywood and set the tile in a single day. On the invoice it read as one line: &quot;Install tile flooring — $8,400.&quot; There was no line for subfloor prep because there was no subfloor prep.</p>
            <p>Every time someone walked across that floor, the plywood flexed a fraction of a millimeter. Tile doesn&apos;t flex. So the grout cracked first, then the tile itself, then a full crack propagated along the weakest joint. Six months is actually about average for this failure mode.</p>
            <blockquote className="article-quote">
              Nine out of ten cracked-tile callbacks I inspect aren&apos;t a tile defect. They&apos;re a subfloor that was never verified because nobody paid for that step to exist.
              <cite>— Flooring inspector, 20+ years</cite>
            </blockquote>


            <h2>Why nobody caught it</h2>
            <p>The homeowner did what most people do: got three quotes, picked the middle one, paid 50% up front and 50% on completion. The floor looked perfect on day one. It passed the only inspection that happened — a visual walkthrough.</p>
            <p>The problem is that the most important work on a tile job is invisible by the time you can see the tile. Once the finish is down, you cannot verify the subfloor prep without demolishing the floor you just paid for. The homeowner paid the final 50% for a result they had no way to inspect.</p>
            <p>When the crack appeared, the money was already gone and the contractor had no reason to answer. There was no leverage left because full payment had already changed hands against a surface that only looks finished.</p>


            <h2>The fix that would have prevented all of it</h2>
            <p>The structural fix isn&apos;t &quot;hire better&quot; — good contractors get busy and cut corners under deadline too. The fix is tying payment to verifiable milestones instead of a single before-and-after.</p>
            <p>A milestone-based escrow arrangement would have broken this job into stages: subfloor prep complete, backer board installed and fastened, then tile set, then grout and cure. Payment for the subfloor stage releases only after that stage is confirmed — before it gets buried under tile. That single structural change forces the invisible step to become a named, funded, verifiable line item.</p>
            <p>Under that structure, the contractor either does the backer board or doesn&apos;t get paid for it. And the homeowner still holds the remaining funds when the crack would have appeared, which is exactly when leverage matters. Escrow doesn&apos;t make anyone honest — it just makes the corner too expensive to cut.</p>
            <p>The $8,400 floor didn&apos;t fail because of bad tile or a bad person. It failed because the payment structure rewarded speed over the one step that actually mattered, and paid in full for work nobody could check.</p>
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
