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
          <div className="hero-badge">Vetting · August 2026</div>
          <h1>How to Spot Fake Contractor Reviews Before You Trust the 5 Stars</h1>
          <p className="hero-subtitle">A five-star average means nothing if the reviews are planted. This checklist shows you exactly how to pull apart a contractor&apos;s online reputation in ten minutes and spot the fakes before they cost you.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Run these seven checks before you trust any contractor&apos;s star rating. Each one takes under two minutes, and the whole thing is done in ten.</p>
            <p>1. Sort the reviews by &quot;Most Recent&quot; instead of &quot;Most Relevant.&quot; Platforms default to showing you the glowing ones. Recent reviews tell you what the business is actually like today.</p>
            <p>2. Read the 3-star reviews first. Skip the 5s and 1s. Mid-range reviews are the least likely to be planted or spiteful, and they give you the most honest picture of the tradeoffs.</p>


            <h2>Check the reviewer, not just the review</h2>
            <p>3. Click on three of the most enthusiastic reviewer names. A real customer has a review history: restaurants, other services, a few photos. A fake account often has one review total — this one — or a burst of five-star reviews all posted the same week.</p>
            <p>4. Look for timing clusters. Open the review dates and scan for spikes. Fifteen five-star reviews in a single week, followed by silence, is the signature of a bought review batch.</p>
            <p>5. Watch for copy-paste language. Fake reviews recycle phrases like &quot;professional and on time&quot; or &quot;highly recommend this company&quot; without a single specific detail. Real reviews mention the job: the leaking valve, the color they picked, the delay when materials came late.</p>
            <blockquote className="article-quote">
              If every review sounds like it was written by the same person, it probably was.
              <cite>— consumer fraud investigator</cite>
            </blockquote>


            <h2>Verify outside the review page</h2>
            <p>6. Search the exact business name plus the word &quot;complaint&quot; or &quot;scam.&quot; Then check your state contractor licensing board (search &quot;[your state] contractor license lookup&quot;) and paste in their license number. Confirm the license is active and matches the name on the reviews. An unmatched or expired license is a hard stop.</p>
            <p>7. Request three references from the last six months — not their all-time favorites. Ask each reference two questions: &quot;Did the final price match the quote?&quot; and &quot;Would you hire them again knowing what you know now?&quot; A contractor with nothing to hide hands these over the same day.</p>


            <h2>Ask these directly before signing anything</h2>
            <p>Use this script on the phone or in writing:</p>
            <p>&quot;Can you send me your license number and proof of current insurance?&quot;</p>
            <p>&quot;Can I get three references from jobs completed in the last six months?&quot;</p>
            <p>&quot;Will you put the full scope, materials, and payment schedule in a written contract?&quot;</p>
            <p>&quot;Are you willing to accept payment through escrow, released as milestones are completed?&quot;</p>
            <p>The last question is the fastest filter you have. A contractor who does good work has no reason to fear getting paid when the work is done.</p>


            <h2>The one red flag in almost every bad hire</h2>
            <p>They pressure you for a large cash deposit up front — before any work begins, before a contract is signed, often with a &quot;discount&quot; if you pay today.</p>
            <p>That urgency exists for one reason: to get your money into their hands before you&apos;ve had a chance to verify anything. Real contractors have cash flow, insurance, and a schedule. They can wait for a signed agreement and a fair payment structure. The ones who can&apos;t are telling you something.</p>
            <p>The simplest protection is to never let a deposit leave your control until the work you paid for actually exists. That&apos;s what escrow does — your money stays held until each milestone is met, so a fake five-star profile can&apos;t turn into a real lost deposit.</p>
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
