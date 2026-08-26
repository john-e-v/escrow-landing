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
          <h1>How to Verify a Contractor&apos;s EIN and Business Registration Before You Hire</h1>
          <p className="hero-subtitle">A license tells you they can work, but business registration tells you if the company is real. Here&apos;s the exact checklist to confirm a contractor&apos;s EIN, entity status, and registration in under 10 minutes before you sign anything.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Item 1: Ask for the exact legal business name and EIN before you discuss price. Two things you need in hand: the full entity name (&quot;Smith &amp; Sons Construction LLC,&quot; not &quot;Mike&apos;s crew&quot;) and a 9-digit EIN in the format XX-XXXXXXX. If the contractor hesitates or gives you a personal Social Security number instead, stop — that&apos;s a sole operator with no business entity behind the work.</p>
            <p>Item 2: Verify the entity exists on your Secretary of State&apos;s business search. Every state runs a free public database. Search &quot;[your state] Secretary of State business search,&quot; enter the legal name, and confirm three fields: the entity is listed as ACTIVE (not dissolved, revoked, or delinquent), the registration date is older than the &quot;20 years in business&quot; they claimed, and the registered agent address matches the region they operate in.</p>
            <p>Item 3: Confirm the EIN is real using the business name. You can&apos;t look up an EIN directly through the IRS as a private party, but you can cross-check it. Request a completed W-9 form — legitimate businesses hand this over without friction. The name and EIN on the W-9 must match what&apos;s on the Secretary of State record exactly. A mismatch means the EIN belongs to a different entity or was never issued.</p>


            <h2>Documents to Request Today</h2>
            <p>Item 4: Request the Certificate of Good Standing. This is a one-page document your state issues confirming the business is registered, current on fees, and legally allowed to operate. Any real company can pull this in minutes from their state portal. Refusal or &quot;I&apos;ll get it later&quot; is a delay tactic.</p>
            <p>Item 5: Ask for the Certificate of Insurance (COI) listing you as certificate holder. Don&apos;t accept a photo of an old policy. Ask the contractor to have their insurer email you a COI directly, with your name and project address on it. This confirms the policy is active and that the named insured matches the registered business — not a different name or expired coverage.</p>
            <p>Item 6: Match the license to the entity, not the person. Look up the contractor&apos;s license number on your state licensing board site. The license holder&apos;s name should match the business you verified in Item 2. A license held by &quot;John Doe&quot; while you&apos;re contracting with &quot;ABC Builders LLC&quot; means you may have no recourse if the LLC vanishes.</p>
            <blockquote className="article-quote">
              The three names have to line up: the license, the insurance certificate, and the Secretary of State registration. When one of them is different, you&apos;re not hiring who you think you&apos;re hiring.
              <cite>— construction attorney, on contractor vetting</cite>
            </blockquote>


            <h2>The One Red Flag</h2>
            <p>Item 7: Run the phone number and address through a quick search. Type the business phone and physical address into Google. A real, established contractor has a footprint — reviews, a mapped location, matching listings. A residential address with no business presence, or a number tied to multiple unrelated business names, is worth a hard second look.</p>
            <p>The single red flag that shows up in almost every bad hire: they can&apos;t or won&apos;t put the business&apos;s legal name and EIN in writing. Every failed job, disappearing deposit, and unfinished project traces back to the same moment — the homeowner never confirmed there was a real, registered entity standing behind the handshake. A contractor who operates a legitimate business will give you these details in five minutes. One who dodges is telling you exactly how the job will end.</p>
            <p>Once the entity checks out, the last layer of protection is how you pay. Contractors who agree to hold your payment in escrow until milestones are met are the ones with nothing to hide.</p>
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
