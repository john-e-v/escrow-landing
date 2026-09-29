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
          <div className="hero-badge">Vetting &amp; Protection · September 2026</div>
          <h1>How to Verify a Contractor&apos;s License Number Is Real (Not Just Copied Off Someone Else)</h1>
          <p className="hero-subtitle">A license number on a business card means nothing until you confirm it belongs to the person standing in your driveway. This checklist walks you through verifying the number is real, active, and actually theirs — in under ten minutes, for free.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Step 1: Get the exact license number, spelled out digit by digit, before anyone starts work. Not &quot;licensed and insured&quot; on a truck. The actual number, written down or texted to you.</p>
            <p>Step 2: Go to your state&apos;s licensing board website. Search &quot;[your state] contractor license lookup&quot; and use the .gov result — not a third-party directory that charges a fee or shows stale data. Every state has a free official database.</p>
            <p>Step 3: Type in the number and confirm four things: it exists, it&apos;s active (not expired, suspended, or revoked), the name on the license matches the name of the person or company you&apos;re hiring, and the license class covers the work you need done.</p>
            <p>This takes under ten minutes and costs nothing. Do it before you sign anything.</p>


            <h2>The verification checklist</h2>
            <p>Work through these in order. Any &quot;no&quot; is a reason to pause.</p>
            <p>1. Does the number return a result at all? A fake or copied number often returns &quot;no record found.&quot;</p>
            <p>2. Does the name on the license match the name on the contract, the estimate, and the business card? A common scam is copying a real, active license number from a legitimate contractor. The number checks out — but it belongs to someone else.</p>
            <p>3. Is the status &quot;Active&quot;? Watch for &quot;Expired,&quot; &quot;Suspended,&quot; &quot;Revoked,&quot; or &quot;Inactive.&quot; An expired license means no bonding and no board protection if things go wrong.</p>
            <p>4. Does the license classification match your job? A handyman license does not cover a roof replacement. A general contractor classification does not always cover electrical or plumbing. The board listing shows what each license is authorized to do.</p>
            <p>5. Is there a bond and insurance on file? Many state records show the bonding company and policy status. If it&apos;s blank or lapsed, ask why.</p>
            <p>6. Are there complaints or disciplinary actions listed? Most boards publish these directly on the license record.</p>
            <blockquote className="article-quote">
              The number checked out. It just wasn&apos;t his — he&apos;d photographed it off another crew&apos;s permit board and printed it on his cards.
              <cite>— homeowner describing a $14,000 loss to an uninsured &quot;contractor&quot;</cite>
            </blockquote>


            <h2>Cross-check the identity, not just the number</h2>
            <p>A real license number tells you the license is real. It does not tell you the person holding it owns it. Close that gap:</p>
            <p>7. Ask for a photo ID and compare the name to the license record. The licensed party should be the one you&apos;re dealing with — or a documented employee of that licensed business.</p>
            <p>8. Search the business name plus the license number together. If a completely different company or person comes up attached to that number, you&apos;re being handed borrowed credentials.</p>
            <p>9. Call the licensing board&apos;s phone line for anything ambiguous. They will confirm status and name over the phone for free.</p>
            <p>10. Get the license number, full legal name, and business address printed on the written estimate — not just the business card. Details that only exist verbally tend to disappear when there&apos;s a dispute.</p>


            <h2>The one red flag that shows up in almost every bad hire</h2>
            <p>The contractor pressures you to skip the paperwork and pay a large cash deposit fast — before you&apos;ve verified anything.</p>
            <p>It shows up in nearly every bad hire: the rush, the discount for cash, the &quot;I can start tomorrow if you can put down half today.&quot; A legitimate contractor whose license is real and active has no reason to fear you looking it up. The ones who push you past verification are counting on the fact that you won&apos;t check until the money is already gone.</p>
            <p>If you&apos;ve verified the license and it&apos;s clean, the last protection is how you pay. Contractors who agree to escrow — where your deposit is held until agreed work is actually completed — are the ones with nothing to hide.</p>
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
