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
          <div className="hero-badge">Escrow Effect · August 2026</div>
          <h1>The Drywall Went Up Over a Failed Rough-In. Escrow Meant the Homeowner Wasn&apos;t Stuck.</h1>
          <p className="hero-subtitle">A contractor closed up walls before the rough-in inspection passed, hiding electrical that would have failed. Because the milestone payment sat in escrow, the homeowner had the leverage to force the tear-out at the contractor&apos;s cost — not their own.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$8,400. That&apos;s what the tear-out and redo would have cost the homeowner if the second milestone payment had already been released. It hadn&apos;t. It was sitting in escrow, untouched, and that single fact rewrote the entire outcome of the job.</p>
            <p>Here&apos;s what happened. A homeowner in the middle of a full kitchen and adjacent-wall remodel had a contractor who was moving fast — maybe too fast. The framing was up, the wiring was run, and the drywall crew showed up and closed the walls. Clean. Painted-ready. It looked like progress. It was actually a problem.</p>
            <p>The rough-in electrical inspection had not passed. It hadn&apos;t even been scheduled. The contractor had covered the work before the inspector ever saw it.</p>


            <h2>What Was Hidden Behind the Board</h2>
            <p>When the homeowner pushed for the inspection sign-off before releasing the next milestone, the contractor got vague. Then annoyed. Then insistent that everything was &quot;to code, don&apos;t worry about it.&quot;</p>
            <p>The homeowner didn&apos;t release the payment. Instead, they called the inspector directly. The inspector required access to the rough-in — which meant opening the walls that had just been closed.</p>
            <p>What came out was ugly: undersized wire on a run feeding the kitchen small-appliance circuits, a junction box buried inside a stud bay with no access panel, and neutral connections that would never have passed. Buried. Painted over. Invisible until something tripped, overheated, or a future buyer&apos;s inspector found it years later.</p>
            <blockquote className="article-quote">
              If that milestone had already been paid, I&apos;d have been begging him to come back and fix his own mistake. Instead he had to come back to get paid at all.
              <cite>— the homeowner, after the tear-out</cite>
            </blockquote>


            <h2>Why the Leverage Existed at All</h2>
            <p>This is the part that matters. The homeowner did nothing heroic. They didn&apos;t out-argue the contractor, didn&apos;t win a shouting match, didn&apos;t threaten a lawsuit they couldn&apos;t afford to file.</p>
            <p>They simply had money the contractor wanted and hadn&apos;t earned yet.</p>
            <p>The milestone was defined against a real event — rough-in inspection passed — not a vague sense of &quot;the wiring is done.&quot; Because the payment was tied to that specific, verifiable outcome and held in escrow until it happened, the contractor had exactly one path to getting paid: open the walls, fix the work, pass the inspection.</p>
            <p>So he did. The tear-out, the corrected wiring, the new drywall, the second inspection — all of it came out of his margin, not the homeowner&apos;s pocket. The milestone released the day the inspector signed off. Not a day before.</p>


            <h2>The Version Where This Goes Wrong</h2>
            <p>Play it forward without escrow. The homeowner pays on a loose schedule — a chunk when the drywall goes up, because the drywall going up feels like a milestone. Money&apos;s gone. Contractor&apos;s incentive is gone with it.</p>
            <p>Now the inspection issue surfaces later, maybe months later, maybe at resale. The homeowner is chasing a contractor who has no financial reason to answer the phone. The repair is on them. The $8,400 is on them. And the buried junction box might not surface until it&apos;s a fire risk.</p>
            <p>The difference between those two stories isn&apos;t the quality of the contractor. Both timelines have the same contractor cutting the same corner. The difference is whether the payment structure made cutting that corner free or expensive.</p>


            <h2>The Takeaway</h2>
            <p>A milestone is only protection if it&apos;s tied to something an outside party can verify and held until that thing actually happens. &quot;Drywall up&quot; is a feeling. &quot;Rough-in inspection passed&quot; is a fact. Pay against facts.</p>
            <p>The homeowner in this story didn&apos;t need to know electrical code. They needed the payment to depend on someone who did. That&apos;s the whole mechanism — and it&apos;s the reason the walls got opened while it still cost the right person money to leave them closed.</p>
            <p>If you&apos;re planning a project and want your payments structured against verifiable milestones instead of vibes, that&apos;s exactly what you set up before the first crew shows up.</p>
          </div>

          <div className="article-footer">
            <Link href="/guides" className="article-back">← Back to Guides</Link>
            <a href="/create" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>Set up milestone escrow for your project →</a>
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
