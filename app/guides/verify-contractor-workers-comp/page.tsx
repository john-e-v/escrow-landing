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
          <div className="hero-badge">Vetting &amp; Protection · July 2026</div>
          <h1>How to Verify a Contractor&apos;s Workers&apos; Comp (And Why You&apos;re Liable Without It)</h1>
          <p className="hero-subtitle">If a contractor&apos;s crew gets hurt on your property and they don&apos;t carry workers&apos; comp, the medical bills can land on you. Here&apos;s the exact checklist to confirm coverage before anyone sets foot on the job.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Step 1: Ask for the contractor&apos;s workers&apos; comp insurance certificate (ACORD 25 form) before you sign anything. Do this today, in writing.</p>
            <p>A homeowner in California was hit with a $250,000 medical bill after an uninsured roofer&apos;s employee fell off a ladder on her property. Under most state laws, when a contractor has no workers&apos; comp, the injured worker can come after the property owner. This is not rare, and it is not theoretical. Run the checklist below before anyone climbs a ladder on your job.</p>


            <h2>The Verification Checklist</h2>
            <p>1. Request the certificate of insurance (COI). Say exactly this: &quot;Please email me your current workers&apos; compensation certificate of insurance with my name and property address listed as certificate holder.&quot; A legitimate contractor does this in minutes.</p>
            <p>2. Confirm the policy is active — not just issued. The COI shows a policy period (e.g., &quot;01/01/2025 to 01/01/2026&quot;). Check that today&apos;s date falls inside that window. Expired coverage is worthless coverage.</p>
            <p>3. Call the insurance carrier directly. The carrier name and phone number are printed on the COI. Call it yourself. Ask: &quot;Is policy number [X] active and in good standing as of today?&quot; Do not rely on the contractor forwarding you a screenshot — those get photoshopped.</p>
            <p>4. Verify the license and comp status with your state. Every state has a contractor license board with an online lookup. In California, use the CSLB at cslb.ca.gov. In Texas, check TDLR. Type in the license number; the record will show whether workers&apos; comp is on file or if they&apos;ve claimed an exemption.</p>
            <p>5. Match the business name exactly. The name on the COI must match the name on the contract and the license. If the contract says &quot;ABC Builders LLC&quot; but the insurance says &quot;John Smith,&quot; that&apos;s a mismatch you need explained in writing.</p>
            <p>6. Confirm the coverage covers the actual crew. Ask: &quot;Does this policy cover every person who will be on my property, including subcontractors and day laborers?&quot; Get the answer in an email, not a handshake.</p>
            <p>7. Request to be added as certificate holder. This means the insurer notifies you if the policy is cancelled mid-project. It costs the contractor nothing and takes one phone call.</p>
            <blockquote className="article-quote">
              The certificate they hand you is a snapshot. Call the carrier and confirm it&apos;s active — policies get cancelled for non-payment all the time, and the paper in your hand won&apos;t tell you that.
              <cite>— Commercial insurance agent</cite>
            </blockquote>


            <h2>If They Claim an Exemption</h2>
            <p>Some solo contractors legally opt out of carrying workers&apos; comp on themselves. That can be fine — for them. But the moment they bring even one helper, that exemption doesn&apos;t cover the helper. Ask directly: &quot;You&apos;re exempt for yourself, but will anyone else be working here?&quot; If the answer is yes, you need a real policy covering that person, or you carry the liability.</p>
            <p>Document every answer. Save the emails. If something goes wrong, the paper trail is what protects you.</p>


            <h2>The One Red Flag That Shows Up in Almost Every Bad Hire</h2>
            <p>They stall on the certificate. A contractor who is properly insured forwards the COI within an hour, because their agent has it ready to send. A contractor who says &quot;I&apos;ll get that to you next week,&quot; or &quot;trust me, I&apos;m covered,&quot; or &quot;my guy handles the paperwork&quot; is telling you the coverage doesn&apos;t exist or isn&apos;t current. Delay on the insurance certificate is the single most reliable warning sign of a hire that will cost you.</p>
            <p>Protecting yourself doesn&apos;t stop at insurance — the way you pay matters too. Working with contractors who agree to hold your money in escrow until the work is verified removes another layer of risk from the whole arrangement.</p>
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
