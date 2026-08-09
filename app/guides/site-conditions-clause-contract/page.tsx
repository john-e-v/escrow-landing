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
          <h1>The Site Conditions Clause That Stops &apos;You Should&apos;ve Known&apos; Disputes</h1>
          <p className="hero-subtitle">When you hit rock, rot, or bad soil the client swears you should&apos;ve priced in, the fight is over who eats it. A site conditions clause puts the answer in writing before you break ground.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Copy this into your contract today:</p>
            <p>&quot;CONCEALED OR UNKNOWN SITE CONDITIONS: Contractor&apos;s price is based on visible conditions at the time of bid. If subsurface or otherwise concealed physical conditions are encountered that differ materially from those indicated in the contract documents or ordinarily encountered in work of this type — including but not limited to rock, unsuitable soil, high water table, buried debris, hidden rot, mold, asbestos, or undisclosed prior repairs — Contractor will stop work in the affected area, notify Owner in writing within 3 business days, and provide a written change order for the additional cost and time before proceeding. Work in the affected area will not continue until the change order is signed.&quot;</p>
            <p>That paragraph is the difference between eating a $4,000 rock excavation and getting paid for it.</p>


            <h2>Why &apos;You Should&apos;ve Known&apos; Wins Without This Clause</h2>
            <p>When there&apos;s no clause, the argument comes down to what a &quot;reasonable contractor&quot; should have anticipated. That&apos;s a coin flip in front of a judge, and the client&apos;s lawyer will argue you&apos;re the expert who should have priced the risk. You lose the gray area by default because you&apos;re the one asking for more money.</p>
            <p>The clause flips the burden. Now the contract already says the price assumed visible conditions, and anything concealed is a change order. You&apos;re not asking for a favor — you&apos;re enforcing terms the client already signed.</p>


            <h2>The Three Moves That Make It Stick</h2>
            <p>The clause only holds if you actually follow the process it describes. On your next job, do these three things.</p>
            <p>First, stop work in the affected area the moment you hit something concealed. Don&apos;t dig through the rock and bill later — that reads as &quot;you handled it, so it must&apos;ve been included.&quot;</p>
            <p>Second, send written notice within your stated window. A text with a timestamp counts: &quot;Hit rock at the north footing, 18 inches down. Stopping here per our contract&apos;s site conditions clause. Change order coming with cost and schedule impact.&quot;</p>
            <p>Third, get the change order signed before you resume. Not verbal. Not &quot;we&apos;ll settle up at the end.&quot; Signed, then dig.</p>
            <blockquote className="article-quote">
              Every time a contractor kept digging and billed the surprise later, they lost. Every time they stopped and got a signature first, they got paid.
              <cite>— construction attorney, on subsurface disputes</cite>
            </blockquote>


            <h2>Document The Baseline Before You Break Ground</h2>
            <p>The clause references &quot;visible conditions at the time of bid.&quot; Prove what those were. On your next site visit, take timestamped photos of the ground, the existing structure, and anything you&apos;re pricing around. Attach them to the contract as an exhibit and label it: &quot;Site conditions at time of bid — see attached photos, dated ___.&quot;</p>
            <p>Now when the client says the bad soil was obviously there, you have a photo showing a flat, dry, unremarkable lot. Their memory doesn&apos;t beat your camera.</p>
            <p>Also add one line to your bid: &quot;Price assumes no rock, unsuitable soil, or concealed conditions requiring additional work.&quot; It sets expectations on the estimate itself, before anyone signs anything.</p>


            <h2>Put It In Front Of The Client, Not In The Fine Print</h2>
            <p>Point to the clause during the signing walkthrough. Say it out loud: &quot;If we hit something underground nobody could see, that&apos;s a change order — here&apos;s the paragraph, and here&apos;s the process we&apos;ll follow.&quot; A client who nods at signing can&apos;t credibly claim ambush at excavation.</p>
            <p>That five-second conversation is what turns a lawsuit into a signed change order. Your contract is only as strong as the clauses you&apos;re actually using — and most contractors are still working off a template that never anticipated the ground fighting back.</p>
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
