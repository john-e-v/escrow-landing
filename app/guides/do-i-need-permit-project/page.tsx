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
          <div className="hero-badge">Permits &amp; Vetting · July 2026</div>
          <h1>Do You Need a Permit? A Room-by-Room Checklist Before You Hire</h1>
          <p className="hero-subtitle">Most homeowners find out they needed a permit only after an inspector shuts the job down or a buyer&apos;s agent flags it at closing. This checklist tells you exactly which projects require a permit, who&apos;s supposed to pull it, and how to confirm before any work starts.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Start here, before you call a single contractor:</p>
            <p>1. Write down exactly what you&apos;re changing — not just the room, but the systems. &quot;New bathroom&quot; isn&apos;t specific enough. &quot;Moving the toilet drain and adding a circuit&quot; is.</p>
            <p>2. Search &quot;[your city or county] + building permits&quot; and find your local permitting office website. Most have a project-type lookup.</p>
            <p>3. Call the permit desk and read them your list from step 1. Ask directly: &quot;Does this require a permit, and who is supposed to pull it?&quot; Write down the name of the person you spoke to and the date.</p>
            <p>4. Confirm in writing which permit type applies. Ask them to email you the requirement so you have a paper trail.</p>


            <h2>Room-by-Room: What Usually Needs a Permit</h2>
            <p>Kitchen — Permit required if you move plumbing, add or relocate electrical circuits, remove a wall, or change the footprint. Swapping cabinets or countertops on existing plumbing usually does not.</p>
            <p>Bathroom — Permit required if you relocate the toilet, tub, or sink drain, add ventilation, or run new electrical. A like-for-like fixture swap in the same spot usually does not.</p>
            <p>Basement finishing — Almost always requires a permit. Egress windows, ceiling height, framing, insulation, and electrical are all inspected. This is one buyers&apos; agents flag constantly.</p>
            <p>Decks and porches — Permit required for anything attached to the house or over a certain height (often 30 inches off grade). Ground-level floating decks sometimes don&apos;t.</p>
            <p>Roofing — Many jurisdictions require a permit even for a full re-roof. Confirm before the tear-off.</p>
            <p>Electrical panel, service upgrade, or new circuits — Permit required, and it must be pulled by a licensed electrician in most areas.</p>
            <p>HVAC replacement — Permit and inspection required in most jurisdictions, even for a swap.</p>
            <p>Water heater replacement — Frequently requires a permit for gas, venting, and pressure relief compliance.</p>
            <p>Windows and doors — Permit often required if you change the size of the opening. Same-size replacement sometimes doesn&apos;t.</p>
            <p>Fences, sheds, and detached structures — Depends entirely on size and setback rules. Check the height and square-footage thresholds.</p>


            <h2>Who Pulls the Permit — and Why It Matters</h2>
            <p>The person who pulls the permit is legally responsible for the work passing inspection. If a homeowner pulls it, the homeowner is on the hook. If the contractor pulls it, the contractor is.</p>
            <p>Ask every contractor this exact question: &quot;Will you pull the permit under your license, or are you asking me to pull it as an owner-builder?&quot; A contractor who wants YOU to pull it is often trying to sidestep accountability for inspections.</p>
            <p>Request a copy of their contractor license number and verify it on your state licensing board&apos;s website. Then ask for proof of general liability insurance — a certificate, not a promise.</p>
            <blockquote className="article-quote">
              If a contractor asks you to pull the permit yourself, ask why. In most legitimate jobs, the licensed pro pulls it under their own license.
              <cite>— common guidance from municipal permit offices</cite>
            </blockquote>


            <h2>The One Red Flag in Almost Every Bad Hire</h2>
            <p>The contractor who says &quot;you don&apos;t need a permit for that&quot; without you asking.</p>
            <p>Sometimes they&apos;re right. But an unprompted push to skip permits is the single most reliable warning sign of a bad hire. It means faster cash for them and unpermitted, uninspected work for you — the kind that fails at resale, voids insurance claims, and forces you to tear out finished work when the city finds out.</p>
            <p>A contractor confident in their work wants the inspection. It&apos;s their proof the job was done right.</p>
            <p>Once you know what your project needs and who should pull the permit, the next step is finding someone who welcomes that accountability instead of dodging it.</p>
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
