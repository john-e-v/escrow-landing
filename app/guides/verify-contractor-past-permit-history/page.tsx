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
          <div className="hero-badge">Vetting Checklist · August 2026</div>
          <h1>How to Pull a Contractor&apos;s Permit History Before You Hire (Free, Public, 10 Minutes)</h1>
          <p className="hero-subtitle">A contractor&apos;s license tells you they&apos;re allowed to work. Their permit history tells you whether they actually pull permits or skip them to save time. Here&apos;s exactly where to look and what a clean record should show.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Here are the six steps to pull any contractor&apos;s permit history before you sign anything. Each one takes under two minutes and costs nothing.</p>
            <p>1. Get the contractor&apos;s full legal business name and license number. Ask for it in writing — a text or email is fine. If they give you a name that doesn&apos;t match the name on their invoice or truck, stop and reconcile that before going further.</p>
            <p>2. Confirm the license is active. Go to your state licensing board&apos;s website (search &quot;[your state] contractor license lookup&quot;). Enter the license number. You want to see status ACTIVE, an expiration date in the future, and zero open disciplinary actions.</p>


            <h2>Where the Permit Records Actually Live</h2>
            <p>3. Find your local permit portal. Search &quot;[your city or county] building permit search&quot; or &quot;[county] permit records.&quot; Most jurisdictions run a portal like Accela, eTRAKiT, or a county-hosted &quot;Citizen Access&quot; page. This is where permits get filed — separate from the state license board.</p>
            <p>4. Search by the contractor&apos;s business name AND license number. Search both, because contractors sometimes pull permits under a business entity and sometimes under a personal license. Pull up the last 2–3 years of activity.</p>
            <p>5. Check the permit status column. You&apos;re reading for a pattern. A healthy record shows permits marked FINALED or CLOSED — meaning the work passed final inspection. Permits stuck at ISSUED or EXPIRED with no final inspection mean the contractor started jobs and never closed them out.</p>
            <blockquote className="article-quote">
              An expired permit with no final inspection isn&apos;t paperwork left undone — it&apos;s a job the city never signed off on. The homeowner inherits that problem at resale.
              <cite>— Municipal building inspector</cite>
            </blockquote>


            <h2>What a Clean Record Looks Like</h2>
            <p>6. Cross-check permit types against the work they do. A licensed remodeler should have a trail of building, electrical, and plumbing permits. A contractor who claims 15 years of kitchen and bath work but shows zero plumbing or electrical permits is either working under someone else&apos;s permits or not pulling them at all.</p>
            <p>A clean record shows: multiple permits over multiple years, most or all marked finaled/closed, permit types that match the work you&apos;re hiring for, and no gap where a big advertised project should have generated a permit but didn&apos;t.</p>
            <p>Documents to request today alongside all this: a copy of their general liability insurance certificate, proof of workers&apos; comp if they have a crew, and a sample permit-pulled from a recent job so you can see they list themselves — not you — as the responsible party.</p>


            <h2>The One Red Flag in Almost Every Bad Hire</h2>
            <p>If a contractor tells you that you, the homeowner, should pull the permit yourself &quot;to save money&quot; — walk away.</p>
            <p>That single line shows up in nearly every horror story. Pulling your own owner-builder permit makes you legally responsible for the work, voids the contractor&apos;s accountability, and lets them skip the inspections that would expose bad work. A contractor who does clean work pulls their own permits and puts their own name on the line. One who pushes it onto you is protecting themselves from something.</p>
            <p>Once you&apos;ve verified the license, read the permit trail, and confirmed the insurance, the last layer of protection is how you pay. Contractors who agree to release funds only as verified milestones are completed have nothing to hide — and that&apos;s the standard worth holding out for.</p>
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
