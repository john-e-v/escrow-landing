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
          <div className="hero-badge">Cost &amp; Timeline · July 2026</div>
          <h1>How Much Does It Cost to Replace a Driveway in 2026?</h1>
          <p className="hero-subtitle">A new driveway runs $4,000 to $18,000 in 2026, and the material you pick moves the number more than anything else. Here&apos;s why the same square footage can double or triple in price depending on concrete, asphalt, pavers, and site prep.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>A new driveway runs $4,000 to $18,000 in 2026, and the single biggest lever isn&apos;t square footage — it&apos;s the material you pick. The same 600-square-foot driveway can cost $4,200 in gravel, $7,800 in asphalt, $9,600 in poured concrete, or $16,000+ in stamped concrete or interlocking pavers. Before you get a single quote, you should know which end of that range your project is likely to land on and why.</p>
            <p>That spread of $14,000 isn&apos;t padding or contractor markup. It&apos;s real differences in material cost per square foot, the labor skill each surface demands, and how much site work has to happen before anyone pours or pours anything.</p>


            <h2>Material Is the Master Dial</h2>
            <p>Here&apos;s roughly what each surface costs installed, per square foot, in 2026:</p>
            <p>Gravel: $2–$5. Asphalt: $8–$15. Poured concrete: $8–$18. Stamped or colored concrete: $12–$28. Interlocking pavers: $15–$35.</p>
            <p>Gravel is cheap because it&apos;s essentially crushed stone spread over a base — minimal labor, no cure time, no specialized crew. Asphalt sits in the middle because it needs heavy equipment and a paving crew but installs in a day. Concrete costs more because it requires forming, rebar or mesh, finishing skill, and days of curing. Pavers top the chart because every unit is placed by hand over a compacted, screeded base — it&apos;s the most labor-intensive surface there is.</p>
            <blockquote className="article-quote">
              People assume the concrete is the expensive part. On a paver job, it&apos;s the labor — you&apos;re paying for hours per square foot, not just materials.
              <cite>— hardscape installer, Midwest</cite>
            </blockquote>


            <h2>Why the Range Is So Wide</h2>
            <p>Beyond material, four factors push your number up or down:</p>
            <p>Site prep and demolition. Tearing out an old concrete slab and hauling it off can add $1,500–$4,000 before new work begins. A flat, empty lot with good drainage is cheap. A sloped site that needs grading, a retaining edge, or a French drain is not.</p>
            <p>Region and labor market. Labor rates in a major metro can run double a rural county&apos;s. In tight markets where paving crews are booked out, prices climb simply because demand outpaces supply.</p>
            <p>Materials pricing. Asphalt is petroleum-based, so its cost swings with oil. Cement and steel prices have stayed elevated, and both feed directly into concrete quotes.</p>
            <p>Permitting and specs. Some municipalities require permits, setback compliance, or specific base depths and drainage plans. Thicker slabs for heavy vehicles or reinforced bases in freeze-thaw climates add material and time.</p>


            <h2>A Realistic Budget Range</h2>
            <p>For a standard two-car driveway (roughly 600 square feet) on a flat lot with no demolition:</p>
            <p>Gravel: $2,000–$3,500. Asphalt: $5,000–$9,000. Concrete: $6,000–$11,000. Stamped concrete: $8,000–$16,000. Pavers: $10,000–$20,000.</p>
            <p>Add demolition of an existing surface, tricky grading, or a longer/wider footprint, and any of these can jump 30–50%. That&apos;s how a &apos;driveway&apos; becomes an $18,000 line item instead of a $6,000 one.</p>


            <h2>Before You Commit</h2>
            <p>The safest way to compare quotes is to lock the material and specs first, then hold every bid to the same scope — same square footage, same base depth, same drainage plan. Once you&apos;re comparing apples to apples, the number that&apos;s actually fair becomes obvious fast.</p>
            <p>If you&apos;d rather not chase down bids one by one — or worry about paying a deposit before the work is done — you can get matched with vetted contractors and keep your money protected until the job meets your terms.</p>
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
