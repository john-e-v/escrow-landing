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
          <div className="hero-badge">Before You Hire · July 2026</div>
          <h1>How to Read a Contractor&apos;s Estimate: The Line Items That Reveal a Bad Bid</h1>
          <p className="hero-subtitle">A vague estimate isn&apos;t a convenience — it&apos;s a warning sign. This checklist walks you through the exact line items a real estimate should include, and how to spot the padding, dodges, and missing scope before you sign.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>1. Line-item labor and materials, broken out separately. A real estimate shows you what the work costs and what the stuff costs. If you see one number for a $14,000 bathroom, you have no way to check anything.</p>
            <p>Here&apos;s the checklist. Print it, open the estimate next to it, and go item by item before you sign anything.</p>


            <h2>The Line Items a Real Estimate Must Include</h2>
            <p>2. A defined scope of work in plain sentences. Not &quot;remodel kitchen&quot; — instead: &quot;Demo existing cabinets, install 14 linear feet of shaker cabinets, run new 20-amp circuit for microwave.&quot; Ask: &quot;Can you write the scope so a second contractor could bid the exact same job?&quot; If they can&apos;t, they&apos;re leaving room to charge for &quot;extras&quot; later.</p>
            <p>3. Specific materials with brands and model numbers. &quot;Tile&quot; is a dodge. &quot;Daltile Restore 12x24, matte white&quot; is an estimate. Request the spec sheet or the SKU for every major material. Padding hides in vague material lines.</p>
            <p>4. Quantities and unit prices. Square footage of flooring, linear feet of trim, number of outlets. When you can see 320 sq ft at $6/sq ft, you can price-check it in five minutes. When you just see &quot;flooring: $2,400,&quot; you can&apos;t.</p>
            <p>5. A separate allowance section. Allowances are placeholders for things you haven&apos;t picked yet (fixtures, tile you&apos;ll choose later). A good estimate lists each allowance amount clearly. A bad one buries allowances in the total so the final bill balloons and they blame your &quot;choices.&quot;</p>
            <p>6. Permit and inspection line. Ask directly: &quot;Does this include pulling permits, and whose name is on them?&quot; The permit should be in the contractor&apos;s name, not yours. If they want you to pull it as &quot;homeowner,&quot; that&apos;s them avoiding liability.</p>
            <p>7. Payment schedule tied to milestones. It should read like: 10% deposit, 30% at rough-in, 30% at drywall, 30% at completion. Any estimate asking for 50% or more up front is a cash-flow problem you&apos;re being asked to fund.</p>
            <p>8. A start date, a substantial-completion date, and what happens if they blow past it. &quot;We&apos;ll get to it&quot; is not a timeline.</p>
            <blockquote className="article-quote">
              The estimates that turn into disputes are almost never the expensive ones. They&apos;re the vague ones — the ones where nobody could prove what was actually promised.
              <cite>— residential construction mediator</cite>
            </blockquote>


            <h2>What to Verify Before You Sign</h2>
            <p>9. Check the license number. Enter it on your state contractor licensing board&apos;s site (search &quot;[your state] contractor license lookup&quot;). Confirm the name on the license matches the name on the estimate, and that it&apos;s active — not expired, not suspended.</p>
            <p>10. Ask for a current certificate of insurance — general liability and workers&apos; comp — sent directly from their insurer, not a photo of a PDF they email you. Uninsured worker gets hurt on your property, that&apos;s your homeowner&apos;s policy.</p>
            <p>11. Request three references from jobs completed in the last 12 months, and actually call two. Ask each one: &quot;Did the final price match the estimate, and if not, why?&quot;</p>
            <p>12. Get everything above in writing before any money changes hands. A verbal add-on is not a contract.</p>


            <h2>The One Red Flag in Almost Every Bad Hire</h2>
            <p>A round number with no breakdown. &quot;$20,000, all in.&quot; No labor split, no material list, no quantities. It feels simple and clean, which is exactly why it works on people — but a flat number you can&apos;t audit is a number that can grow, and you&apos;ll have nothing on paper to argue against when it does.</p>
            <p>Every bad hire I&apos;ve seen started with an estimate the homeowner couldn&apos;t take apart. If you can&apos;t break it into pieces, you can&apos;t hold anyone to it.</p>
            <p>If you&apos;d rather skip the vetting maze and start with contractors who already work on documented terms — including escrow so your money is released against milestones, not promises — that&apos;s the whole point of matching before you hire.</p>
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
