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
          <h1>How to Check If a Contractor&apos;s License Was Ever Suspended (Not Just Active)</h1>
          <p className="hero-subtitle">A license can read &apos;active&apos; today and still hide a suspension from two years ago. This checklist walks you through pulling a contractor&apos;s full disciplinary history from your state board before you sign anything.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>1. Find your state&apos;s contractor licensing board website. Search &quot;[your state] contractor license lookup&quot; and confirm you land on a .gov domain — not a third-party aggregator like BuildZoom or a directory that resells stale data. The official board is the only source that shows disciplinary actions.</p>
            <p>2. Pull the license by number, not by name. Ask the contractor for their exact license number before you search. Names get misspelled, businesses operate under DBAs, and one contractor can hold multiple licenses. The number ties everything to one record.</p>
            <p>3. Click into the full license detail — do not stop at the status badge. The green &quot;Active&quot; label is the trap. You want the tabs or links usually labeled &quot;Disciplinary Actions,&quot; &quot;Legal History,&quot; &quot;Enforcement,&quot; or &quot;Board Actions.&quot; A suspension that ended last year still lives here even when today&apos;s status reads active.</p>


            <h2>What to actually read once you&apos;re in the record</h2>
            <p>4. Check the &quot;issue date&quot; against the license number sequence. If the license is only months old but the contractor claims 15 years in business, they may have let a prior license lapse after discipline and quietly reapplied under a fresh number. Ask them directly to explain any gap.</p>
            <p>5. Read every citation, not just suspensions. Boards list letters of reprimand, fines, probation, and &quot;stipulated settlements.&quot; A stipulated settlement means the contractor agreed to penalties to avoid a formal hearing — that&apos;s an admission, not a dismissal. Treat it as a suspension for judgment purposes.</p>
            <p>6. Note whether the action was against this person or a company they owned. Some contractors dissolve a disciplined LLC and open a new one. Search the owner&apos;s personal name in the board&apos;s system and in your state&apos;s business entity registry (usually the Secretary of State site) to see what other companies trace back to them.</p>
            <blockquote className="article-quote">
              A suspension that&apos;s been lifted doesn&apos;t disappear. If the record shows one and the contractor never mentioned it, the problem isn&apos;t the old suspension — it&apos;s that they let you find it yourself.
              <cite>— State licensing board investigator</cite>
            </blockquote>


            <h2>Documents and answers to request before you sign</h2>
            <p>7. Ask for a current certificate of insurance — general liability and workers&apos; comp — sent directly from their insurer or agent, not a PDF they email you. Verify the policy is active for your project dates, not expired.</p>
            <p>8. Request their bond number and confirm it on the board site. A surety bond only protects you if it&apos;s current and large enough to matter. Many state minimums are far below the cost of a mid-size renovation.</p>
            <p>9. Ask this question word for word: &quot;Has your license, or any license you&apos;ve held, ever been suspended, revoked, or placed on probation?&quot; Then compare their answer to what you already found in step 3. The gap between the two is your real information.</p>
            <p>10. Get three references from jobs completed 2–3 years ago, not last month. Recent clients can&apos;t tell you about warranty follow-through or how the contractor handled a problem that surfaced later.</p>


            <h2>The one red flag in almost every bad hire</h2>
            <p>It&apos;s not the suspension itself. Plenty of good contractors have an old citation from a paperwork dispute or a slow year. The red flag is when they know about it and don&apos;t tell you — when your board search turns up history they had every chance to mention and chose to hide.</p>
            <p>A contractor who volunteers their disciplinary history before you ask is showing you exactly how they&apos;ll handle a problem on your job. One who lets you discover it is showing you the same thing.</p>
            <p>If you&apos;d rather skip the digging, start with contractors who&apos;ve already agreed to be paid through escrow — so their money is tied to finishing the work, not just to signing you.</p>
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
