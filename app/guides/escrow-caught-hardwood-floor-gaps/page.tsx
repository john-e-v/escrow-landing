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
          <div className="hero-badge">Escrow Effect · September 2026</div>
          <h1>The Hardwood Floor Was Laid Over Wet Subfloor. Escrow Meant the Homeowner Held Firm.</h1>
          <p className="hero-subtitle">A flooring crew installed engineered hardwood over a subfloor that never hit moisture spec, and by month two the boards were cupping. Because payment sat in escrow, the homeowner had leverage to force a full tear-out and reinstall instead of eating a $9K redo alone.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$9,000. That&apos;s what a full tear-out and reinstall of engineered hardwood costs when it&apos;s laid over a subfloor that never dried. And in this case, that $9,000 didn&apos;t come out of the homeowner&apos;s pocket — because the money was still sitting in escrow when the boards started to cup.</p>
            <p>The project was a 1,100-square-foot main floor: engineered hardwood over a slab-on-grade in a house that had seen some plumbing work the year before. The crew was competent on paper, well-reviewed, and moving fast. Fast turned out to be the problem.</p>


            <h2>What Went Wrong</h2>
            <p>Engineered hardwood over concrete has a rule that isn&apos;t optional: the slab has to hit a moisture spec before a single board goes down. Depending on the product, that&apos;s usually somewhere in the range of 3–4 lbs per 1,000 sq ft over 24 hours on a calcium chloride test, or a set relative-humidity number on an in-situ probe. The manufacturer&apos;s warranty spells it out in plain language.</p>
            <p>The crew skipped it. They eyeballed the slab, said it &apos;looked dry,&apos; and started laying. The homeowner asked about a moisture reading and got a confident answer that a reading wasn&apos;t necessary for this product. It was.</p>
            <p>By week six, the seams in the middle of the room started to lift at the edges — classic cupping, where the bottom of each board absorbs moisture and swells while the top stays put. By week eight, you could feel the ridges through socks.</p>
            <blockquote className="article-quote">
              They told me it looked fine. &apos;Looked fine&apos; is not a number, and it turns out the manufacturer only cares about numbers.
              <cite>— the homeowner, after the failure surfaced</cite>
            </blockquote>


            <h2>Why Escrow Changed the Ending</h2>
            <p>Here&apos;s where most versions of this story go bad. Normally, by the time cupping shows up two months out, the contractor has been paid in full. The homeowner is now a creditor trying to claw money back from someone who already cashed the check — filing complaints, threatening small claims, getting a lawyer to write a letter that costs more than it recovers.</p>
            <p>But the payment for this job wasn&apos;t released. It was held in escrow against agreed completion terms, and &apos;completion&apos; had been defined to include the moisture reading and a manufacturer-compliant installation. The crew hadn&apos;t documented the reading because the reading never happened. That gap was the homeowner&apos;s entire leverage.</p>
            <p>When the boards failed, the conversation wasn&apos;t &apos;please refund me.&apos; It was &apos;the funds don&apos;t release until this is installed to spec, and right now it isn&apos;t.&apos; That&apos;s a completely different position to negotiate from. The contractor could either tear out, dry the slab properly, and reinstall — or forfeit the held funds and walk. Tearing out was the cheaper option for them, so that&apos;s what happened.</p>


            <h2>The Part Nobody Talks About</h2>
            <p>The escrow structure didn&apos;t make the crew more skilled. It didn&apos;t catch the mistake before it happened. What it did was keep the incentive aligned all the way through the failure window — the crew only got paid for work that actually held up, and the homeowner didn&apos;t have to fund the fix on a bet that they&apos;d eventually win it back.</p>
            <p>A $9,000 redo funded up front and litigated for a year is a nightmare. The same redo, done because the money hadn&apos;t moved yet, is just a Tuesday. Same defect, wildly different outcome — and the only variable was who was holding the money when the problem showed up.</p>
            <p>Most homeowners never get to hold firm, because they&apos;ve already paid. The ones who structure the deal so payment tracks completed, verified work get to say no with something behind it.</p>


            <p>If you&apos;re about to start a job where the failure won&apos;t show up until after the crew is gone, the smartest thing you can do is decide — before anyone picks up a tool — what &apos;done&apos; actually means and when the money moves. That&apos;s leverage you can only set up on the front end.</p>
          </div>

          <div className="article-footer">
            <Link href="/guides" className="article-back">← Back to Guides</Link>
            <a href="/create" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>Set up your project the right way →</a>
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
