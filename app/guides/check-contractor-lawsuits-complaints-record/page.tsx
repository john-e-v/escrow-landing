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
          <div className="hero-badge">Contractor Vetting · July 2026</div>
          <h1>How to Check a Contractor&apos;s Lawsuit and Complaint History Before You Hire</h1>
          <p className="hero-subtitle">A license check tells you a contractor is registered — not whether they&apos;ve been sued, fined, or reported for abandoning jobs. This checklist walks you through the public records that reveal a contractor&apos;s real track record in about ten minutes.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>1. Pull the contractor&apos;s license record from your state licensing board. Search their exact business name and their personal name — bad actors often let a license lapse under one and reopen under another.</p>
            <p>2. Search your county court&apos;s online case index by the contractor&apos;s name AND their business name. This is where lawsuits, mechanic&apos;s liens, and judgments live.</p>
            <p>3. Check the Better Business Bureau and your state Attorney General&apos;s consumer complaint database. Look for patterns, not one-offs.</p>
            <p>4. Request the contractor&apos;s certificate of insurance directly from their insurer — not a PDF they email you.</p>
            <p>5. Ask for three references from jobs completed 12+ months ago, then actually call them.</p>
            <p>Work through these in order. Most of it is free and takes about ten minutes.</p>


            <h2>1. License record — check the name AND the number</h2>
            <p>Go to your state&apos;s contractor licensing board website (search &quot;[your state] contractor license lookup&quot;). Enter the business name first, then the owner&apos;s personal name. You&apos;re confirming three things: the license is active, it&apos;s the right classification for your job, and there are no disciplinary actions attached.</p>
            <p>A suspended or expired license is an automatic stop. So is a mismatch — if the license was issued to &quot;John Smith&quot; but the contract says &quot;Smith Home Solutions LLC,&quot; ask why before you sign anything.</p>


            <h2>2. County court records — where lawsuits actually show up</h2>
            <p>Most counties publish a public case search online. Search &quot;[your county] court case search&quot; or &quot;[county] clerk of court records.&quot; Enter the contractor&apos;s name and their company name separately.</p>
            <p>You&apos;re looking for: breach of contract suits, mechanic&apos;s liens filed against past clients, small claims judgments, and any pattern of the contractor being sued by suppliers (a sign they don&apos;t pay their bills — which becomes your problem when a supplier liens your home).</p>
            <p>One lawsuit isn&apos;t damning. Three lawsuits from three different homeowners over three years is a pattern.</p>
            <blockquote className="article-quote">
              A homeowner can be forced to pay twice for the same materials if the contractor took the money and never paid the supplier. The supplier&apos;s lien attaches to the house, not the contractor.
              <cite>— Construction attorney, on mechanic&apos;s lien exposure</cite>
            </blockquote>


            <h2>3. BBB and Attorney General complaints</h2>
            <p>The BBB shows resolved and unresolved complaints and how the business responded. Ignore the letter grade — read the actual complaint text. Your state Attorney General&apos;s office keeps a separate consumer complaint database that catches contractors who never bother with the BBB. Search both.</p>


            <h2>4. Insurance — verify it, don&apos;t trust the PDF</h2>
            <p>Ask for the name of their insurance carrier and the policy number, then call the carrier to confirm the policy is active and covers the dates of your project. Emailed certificates are trivially easy to forge or expire between the day they were issued and the day work begins.</p>


            <h2>5. Old references, not fresh ones</h2>
            <p>Anyone can give you three happy customers from last month. Ask for references from jobs finished at least a year ago. That&apos;s when leaks show up, warranties get tested, and you find out whether the contractor returns calls after they&apos;ve been paid.</p>


            <h2>The one red flag in almost every bad hire</h2>
            <p>They pressure you to pay a large deposit up front, in cash or by transfer, before any work begins — and they get defensive when you ask to structure payments around completed milestones.</p>
            <p>Legitimate contractors expect to earn payment in stages. The ones who demand most of the money before they&apos;ve lifted a hammer are the ones who show up in the court records you just searched.</p>
            <p>The cleanest way to remove that risk entirely is to only work with contractors who agree to hold your money in escrow and get paid as each stage is finished and approved.</p>
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
