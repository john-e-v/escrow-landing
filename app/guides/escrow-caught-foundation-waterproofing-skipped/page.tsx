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
          <div className="hero-badge">The Escrow Effect · September 2026</div>
          <h1>The Foundation Waterproofing Got Skipped Before Backfill. Escrow Meant the Homeowner Held Firm.</h1>
          <p className="hero-subtitle">A homeowner&apos;s new basement addition passed the framing walkthrough, but the exterior waterproofing membrane was never applied before the crew backfilled. Because payment sat in escrow, the homeowner didn&apos;t fund a leak they&apos;d have paid to fix twice.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$14,200. That was the final draw the homeowner was about to release the morning the backfill trucks showed up — and the exact amount that stayed locked in escrow when she asked one question the crew couldn&apos;t answer.</p>
            <p>&quot;Where&apos;s the waterproofing membrane?&quot;</p>
            <p>The framing walkthrough had gone well. The addition looked square, the foundation walls were cured, and the inspector had signed off on the structural elements. On paper, the project was tracking. But waterproofing the exterior of a below-grade wall is a step you can only do while the wall is still exposed. Once soil goes back against it, that window is closed. There&apos;s no fixing it later without excavating everything you just buried.</p>


            <h2>The step that vanishes</h2>
            <p>Exterior foundation waterproofing is one of those items that&apos;s invisible the moment it&apos;s done right and catastrophic the moment it&apos;s skipped. A membrane or spray-applied coating goes on the outside of the wall, drainage board protects it, and only then does backfill go in. Skip it, and the wall looks identical — until the first heavy rain finds the hairline gaps that every poured wall has.</p>
            <p>In this case, the crew had scheduled backfill for the same day they&apos;d planned to apply the membrane, and somewhere in the sequencing it got dropped. Not maliciously. The excavator was rented, the weather was good, and momentum took over. The plan was to backfill first and &quot;handle waterproofing from the interior later.&quot; Interior waterproofing manages water that&apos;s already in the wall. It does not stop it from getting there.</p>
            <p>The homeowner didn&apos;t know all the technical distinctions. She knew one thing: the payment schedule listed exterior waterproofing as a milestone before backfill, and that milestone hadn&apos;t happened.</p>
            <blockquote className="article-quote">
              I wasn&apos;t trying to be difficult. The money was just sitting there. Releasing it felt like agreeing the work was done — and I could see it wasn&apos;t.
              <cite>— homeowner, basement addition project</cite>
            </blockquote>


            <h2>Why the money not moving mattered</h2>
            <p>Here&apos;s the part that would have played out differently without escrow. If she&apos;d already paid — deposit up front, draws on a handshake — the leverage would have been gone. The crew backfills, the invoice is settled, and the disagreement becomes a dispute over work that&apos;s now underground. Her only recourse would be to pay again: excavate, waterproof, re-backfill. Estimates for that redo start around $9,000 and climb fast once you factor in landscaping and the risk of finished-basement water damage down the line.</p>
            <p>Because the funds sat in escrow tied to defined milestones, none of that leverage transferred. The crew wanted the draw released. The draw was conditioned on a step that wasn&apos;t complete. That&apos;s not a fight — it&apos;s just a fact both sides could see. The excavator sat idle for half a day, the membrane went on the next morning, drainage board followed, and the backfill happened the way the contract said it would.</p>
            <p>The draw released after. The homeowner paid for the wall she was promised, once.</p>


            <h2>The quiet version of a win</h2>
            <p>Nothing dramatic happened here. No lawsuit, no flooded basement, no contractor walking off the job. That&apos;s the point. The failure this prevented was the kind you&apos;d never have known you avoided — because the leak would have shown up two winters later, long after everyone forgot the day the backfill trucks came early.</p>
            <p>Escrow didn&apos;t catch the mistake. The homeowner did. What escrow did was make sure her catch actually mattered — that noticing the problem and holding the payment were the same action, instead of two separate battles fought after the money was already gone.</p>
            <p>Milestones you can see. Money that waits for them. If you&apos;re planning work where a single skipped step gets buried under the next one, that&apos;s the structure worth setting up before the first truck arrives.</p>
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
