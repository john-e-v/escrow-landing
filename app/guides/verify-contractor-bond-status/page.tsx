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
          <h1>How to Verify a Contractor&apos;s Bond (And Why It Matters More Than License)</h1>
          <p className="hero-subtitle">A license proves a contractor passed a test; a bond means someone will actually pay if they walk off your job. Here&apos;s exactly how to check bond status, request the bond number, and confirm the coverage amount before you sign anything.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>A $15,000 bond means that&apos;s the maximum anyone will collect if your contractor walks off the job — split across every claim filed that year. Run through these five checks before you sign anything.</p>
            <p>1. Ask for the bond number, the surety company name, and the coverage amount — in writing.
2. Call the surety company directly (not the number the contractor gives you) and confirm the bond is active.
3. Look up the contractor on your state licensing board&apos;s website and match the bond number to the record.
4. Ask whether any claims have already been filed against the bond this year.
5. Request a certificate of insurance (COI) naming general liability and workers&apos; comp — a bond is not insurance.</p>


            <h2>The Exact Questions to Ask</h2>
            <p>Send this word-for-word before the first site visit:</p>
            <p>&quot;Can you send me your license number, bond number, surety company name, and current coverage amount? I&apos;d also like a certificate of insurance for general liability and workers&apos; comp.&quot;</p>
            <p>A legitimate contractor answers this in minutes because they have it saved. Hesitation, excuses, or &quot;I&apos;ll get that to you later&quot; is your first data point — note the delay.</p>
            <blockquote className="article-quote">
              A license proves someone passed a test. A bond means a third party has money on the line if the work goes bad.
              <cite>— construction claims adjuster</cite>
            </blockquote>


            <h2>How to Actually Verify the Bond</h2>
            <p>Don&apos;t trust a PDF the contractor emails you — those get faked or expire. Do this instead:</p>
            <p>1. Go to your state contractor licensing board site (search &quot;[your state] contractor license lookup&quot;). Enter the license number. The active bond and surety company are usually listed right on the record.</p>
            <p>2. Find the surety company&apos;s phone number independently — search the company name, don&apos;t use a number written on the contractor&apos;s paperwork. Call and ask: &quot;Is bond number [X] currently active, and what is the coverage amount?&quot;</p>
            <p>3. Ask the surety the one question most homeowners skip: &quot;Have any claims been paid against this bond this calendar year?&quot; A $25,000 bond with $22,000 in claims already paid protects you almost not at all.</p>


            <h2>Documents to Request Today</h2>
            <p>Collect all four before money changes hands:</p>
            <p>- Active license record (screenshot from the state site, not the contractor)
- Bond number matched to the surety company
- Certificate of insurance listing general liability AND workers&apos; comp, with current dates
- A written estimate on company letterhead with the license number printed on it</p>
            <p>Cross-check the business name on all four. Mismatched names — &quot;Mike&apos;s Handyman&quot; on the estimate but &quot;MJ Construction LLC&quot; on the bond — mean the bond may not cover the entity you&apos;re actually hiring.</p>


            <h2>The One Red Flag in Almost Every Bad Hire</h2>
            <p>It&apos;s the deposit. A contractor who asks for a large payment up front — 40%, 50%, or the full amount &quot;for materials&quot; — before any work begins is the single most consistent warning sign in jobs that go bad. Legitimate contractors have supplier accounts and cash flow; they don&apos;t need your money to buy lumber. Front-loaded payment is how a contractor gets paid to leave.</p>
            <p>The fix is simple: never release money the contractor hasn&apos;t earned. Tie every payment to completed, inspected work — and hold the funds somewhere neither of you can grab them early.</p>
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
