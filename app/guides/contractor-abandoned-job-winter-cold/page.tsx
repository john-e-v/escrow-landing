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
          <div className="hero-badge">Job Gone Wrong · September 2026</div>
          <h1>The Contractor Left Your House Open to the Elements Over Winter. Who Pays the Damage?</h1>
          <p className="hero-subtitle">A framer left a half-built addition tarped and exposed through three months of winter. When the homeowner returned, warped subfloor and mold had turned a $40K addition into a $58K rebuild. Here&apos;s why nobody warned them, and what would have stopped it.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$18,000. That&apos;s the number the homeowner didn&apos;t budget for — the gap between the $40,000 they agreed to pay for a bedroom addition and the $58,000 it actually cost after a winter of neglect turned their framed shell into a moldy rebuild.</p>
            <p>Here&apos;s what happened. In late October, a framer finished the rough structure of a 400-square-foot addition: subfloor down, walls up, roof decked but not yet shingled. The homeowner paid the second draw — roughly $22,000 of the $40,000 total — because the framing was visibly complete and that&apos;s what the payment schedule said. The framer promised the roofer and the dry-in crew would be out &quot;in a week or two.&quot;</p>
            <p>Then the framer went quiet. He&apos;d overbooked, taken a larger commercial job, and this small residential addition dropped to the bottom of his list. He tacked a blue tarp over the roof decking, told the homeowner it was &quot;weathertight for now,&quot; and moved on.</p>


            <h2>Three Months of Water</h2>
            <p>The tarp lasted about six weeks. A January windstorm peeled one corner loose, and nobody was on site to notice. Snow melted onto the exposed OSB decking. It refroze, expanded, and lifted the seams. Water ran down the interior of the new framing and pooled on the subfloor, which had never been protected because dry-in never happened.</p>
            <p>By the time the homeowner climbed a ladder in mid-February to check the tarp themselves, the damage was done. The subfloor had swelled and delaminated. Black mold had colonized the bottom plates and the lower two feet of several studs. The insulation the framer had optimistically stuffed into one wall was a soaked, ruined mess.</p>
            <blockquote className="article-quote">
              I paid him 22 grand for framing that was fine in October. By February it was garbage, and he told me weather damage wasn&apos;t his problem.
              <cite>— the homeowner, recounting the dispute</cite>
            </blockquote>


            <h2>Why Nobody Warned Them</h2>
            <p>Two things collided here, and neither is unusual.</p>
            <p>First, the payment schedule was tied to visible progress, not to a protected, completed phase. Framing looked done, so the draw released. But framing isn&apos;t a safe stopping point — an un-dried-in structure is a sponge waiting for rain. Nobody explained that the second draw shouldn&apos;t have cleared until the building was weathertight.</p>
            <p>Second, once the money was paid, the framer had zero financial incentive to come back fast. He&apos;d been paid for the work he considered finished. The delay cost him nothing. It cost the homeowner $18,000.</p>
            <p>The demolition and remediation added roughly $9,000. Rebuilding the ruined framing, subfloor, and insulation added another $9,000 on top of the original scope. And because the framer denied responsibility, the homeowner faced a small-claims fight they were unlikely to fully win — proving the tarp failure was negligence versus an act of nature is expensive and uncertain.</p>


            <h2>What Would Have Actually Prevented It</h2>
            <p>The fix isn&apos;t &quot;hire a better framer.&quot; Good framers overbook too. The fix is structural: the milestone that released the money should have been &quot;structure dried in and weathertight,&quot; not &quot;framing stands up.&quot;</p>
            <p>With milestone-based escrow, that $22,000 draw sits in a holding account until the agreed milestone is genuinely met. If the deal says dry-in is part of the phase, the framer doesn&apos;t get paid for leaving a tarped shell — he gets paid when the roof and wrap actually protect the building. Suddenly the incentive flips. Coming back promptly to finish dry-in is how he gets his money, so it happens in days, not months.</p>
            <p>Escrow doesn&apos;t just protect a lump of cash. It defines what &quot;done&quot; means before anyone&apos;s exposed, and it keeps the contractor motivated through the exact gap where this project fell apart. The homeowner in this story didn&apos;t lose $18,000 because their framer was a crook. They lost it because the money left their hands before the work was safe to leave.</p>


            <p>If you&apos;re planning a build that has to survive a season outdoors before it&apos;s finished, tie the money to weathertight milestones — and hold it until they&apos;re actually met.</p>
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
