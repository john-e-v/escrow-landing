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
          <div className="hero-badge">Contract Clauses · August 2026</div>
          <h1>The Notice Clause That Forces Complaints in Writing Before They Become Disputes</h1>
          <p className="hero-subtitle">Verbal complaints turn into lawsuits because nobody documented them. This notice clause requires clients to put problems in writing within a set window, giving you a paper trail and a chance to fix issues before they escalate.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Copy this into your contract today:</p>
            <p>&quot;NOTICE OF DEFECTS OR DISSATISFACTION. Client agrees that any complaint, objection, or claim regarding the quality, completeness, or timeliness of the Work must be submitted to Contractor in writing (email is acceptable) within seven (7) calendar days of the date the issue is first observed or reasonably should have been observed. Written notice must describe the specific issue and the location or scope affected. Contractor shall have ten (10) business days from receipt of written notice to inspect and, where warranted, cure the issue. Failure to provide written notice within the stated window constitutes acceptance of the Work as performed and waiver of any claim related to that issue.&quot;</p>
            <p>That&apos;s the whole clause. Paste it in, adjust the day counts to match your trade, and initial it alongside the client at signing. You just built a paper trail into the job before the job started.</p>


            <h2>Why Verbal Complaints Destroy Contractors</h2>
            <p>The problem isn&apos;t that clients complain. It&apos;s that they complain to your crew, in the driveway, three weeks after the fact — and then repeat a completely different version of it to a judge. There&apos;s no timestamp, no scope, no record you were ever given a chance to fix it.</p>
            <p>A written-notice clause changes the entire shape of the fight. It forces the complaint into a format you can act on and, later, prove. If a client skips the written notice and jumps straight to a chargeback or a small-claims filing, you now hold a signed document showing they waived their own remedy.</p>
            <blockquote className="article-quote">
              The client who won&apos;t put it in an email is almost never the client with a real defect. They&apos;re the client building a story.
              <cite>— Remodeling GC, 14 years in business</cite>
            </blockquote>


            <h2>Make the Clause Actually Work on the Next Job</h2>
            <p>The clause is only as strong as your habit around it. Three things to do on your very next job:</p>
            <p>1. Read it out loud at signing. Say the words: &quot;If anything&apos;s ever wrong, email me within seven days and I&apos;ll come fix it.&quot; Clients rarely object, and now it&apos;s framed as a service, not a shield.</p>
            <p>2. When a client texts or calls a complaint, reply the same day in writing: &quot;Thanks for flagging this — per our agreement, can you send me a quick email describing the issue so I can schedule the fix within our cure window?&quot; You just converted a verbal gripe into documented notice, and you look responsive doing it.</p>
            <p>3. Log every written notice and every cure. Save the client&apos;s email, note the date you inspected, and photograph the corrected work. That trio — notice, cure, proof — is what wins the dispute before it becomes one.</p>


            <h2>What This Buys You</h2>
            <p>A cure window is the most underrated line in a contract. It gives you the legal right to fix the problem yourself instead of paying someone else&apos;s inflated repair invoice or eating a full refund. Clients who bypass the window and hire another contractor to &quot;fix your work&quot; have handed you a defense: they denied you the remedy your contract guaranteed.</p>
            <p>Every dispute that ends up in front of a mediator or judge comes down to documentation. The contractor with dated written notice and photos of the cure wins. The one relying on memory loses. This clause is how you make sure that contractor is you.</p>


            <h2>Build It Into Every Contract</h2>
            <p>One clause is a start. A dispute-proof contract stacks written-notice, cure windows, change-order rules, and payment protections so no single client can rewrite the story after the fact. If you want the full set of contractor-tested contract language ready to drop into your next job, that&apos;s exactly what our plans are built for.</p>
          </div>

          <div className="article-footer">
            <Link href="/guides" className="article-back">← Back to Guides</Link>
            <a href="/master" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>See contractor plans →</a>
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
