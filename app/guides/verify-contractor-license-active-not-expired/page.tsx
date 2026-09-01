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
          <h1>How to Confirm a Contractor&apos;s License Is Active (Not Just Real)</h1>
          <p className="hero-subtitle">A license number that checks out isn&apos;t the same as a license that&apos;s active. This checklist walks you through confirming the status, expiration date, and any suspensions before you sign anything.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Step 1: Get the license number in writing before you do anything else. If a contractor won&apos;t give you their number, stop here — you have nothing to verify.</p>
            <p>A license number that returns a match isn&apos;t the same as a license that&apos;s active. A contractor can hand you a real number that belongs to a license that expired eighteen months ago, was suspended last spring, or is registered to a different person entirely. The checklist below confirms the status, not just the existence.</p>


            <h2>The Verification Checklist</h2>
            <p>1. Go to your state&apos;s contractor licensing board website directly. Search &quot;[your state] contractor license lookup.&quot; Use the official .gov site — not a third-party aggregator that may show stale data.</p>
            <p>2. Enter the license number they gave you. Confirm the name on the license matches the name of the person or company you&apos;re hiring. Mismatches here are the fastest way to catch a borrowed or fake number.</p>
            <p>3. Read the status field, not just the result. You want it to say &quot;Active,&quot; &quot;Current,&quot; or &quot;In Good Standing.&quot; Words like &quot;Expired,&quot; &quot;Inactive,&quot; &quot;Suspended,&quot; &quot;Revoked,&quot; or &quot;Delinquent&quot; mean you do not have a valid contractor in front of you.</p>
            <p>4. Check the expiration date. If the license expires before your project ends, ask when they plan to renew and confirm it later. An expired license mid-project can void permits and insurance.</p>
            <p>5. Look for the classification. A license for handyman work is not a license for electrical, roofing, or structural work. Match their classification to the job you&apos;re hiring for.</p>
            <p>6. Scroll to the disciplinary or complaint history section. Many state boards list past violations, citations, and suspensions. One old resolved complaint isn&apos;t damning. A pattern is.</p>
            <p>7. Confirm the bond and insurance are attached to the license. Some state lookups show whether a surety bond and liability coverage are on file. If they&apos;re listed as lapsed, treat the license as unreliable regardless of its status.</p>


            <h2>Ask These Questions Directly</h2>
            <p>Say to the contractor, word for word: &quot;Can you send me your license number, and is it registered under your name or the company&apos;s?&quot;</p>
            <p>Then: &quot;Is your license current through the end of this project, and are your bond and insurance active?&quot;</p>
            <p>Request a copy of their current certificate of insurance (COI) sent directly from their insurer or agent — not a PDF they email you themselves. An insurer-issued COI is much harder to fake.</p>
            <blockquote className="article-quote">
              A real number tells you the person once qualified. An active status tells you they still do. Homeowners confuse the two constantly, and it&apos;s exactly where the trouble starts.
              <cite>— State licensing board investigator</cite>
            </blockquote>


            <h2>The One Red Flag That Shows Up in Almost Every Bad Hire</h2>
            <p>Hesitation to give you the license number in writing.</p>
            <p>Every other problem on this list is something you catch by checking. This one you catch before you check anything. A licensed contractor who&apos;s active and in good standing hands over their number without flinching — it&apos;s public information and it works in their favor. The contractor who stalls, changes the subject, offers a discount for cash, or promises to &quot;bring it by later&quot; is telling you something. Believe them the first time.</p>
            <p>Once you&apos;ve confirmed the status is active, the next protection is how you pay. The contractors worth hiring don&apos;t just have clean licenses — they&apos;re comfortable with escrow, because getting paid the right way protects them too.</p>
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
