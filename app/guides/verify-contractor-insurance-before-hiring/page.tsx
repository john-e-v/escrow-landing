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
          <div className="hero-badge">Before You Hire · July 2026</div>
          <h1>How to Verify a Contractor&apos;s Insurance Before You Let Them Start</h1>
          <p className="hero-subtitle">Most homeowners see a certificate of insurance and assume they&apos;re covered. This checklist shows you how to confirm the policy is real, active, and actually protects you before anyone swings a hammer on your property.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>A certificate of insurance (COI) is worthless until you verify it yourself. Roughly 1 in 4 contractor insurance certificates presented to homeowners are either expired, cancelled, or belong to a different business than the one you&apos;re hiring. Here&apos;s the exact checklist to confirm the policy is real, active, and protects you — before anyone starts work.</p>


            <h2>The Verification Checklist</h2>
            <p>1. Request the COI directly from the insurance company, not the contractor. Ask for the insurer&apos;s name and phone number, then call the agent listed and confirm the policy is active today. Contractors can hand you a certificate for a policy that lapsed months ago.</p>
            <p>2. Ask the agent to name you as &quot;certificate holder.&quot; A legitimate contractor&apos;s agent will add you at no cost and send the COI straight to your email. If the contractor resists this step, stop.</p>
            <p>3. Confirm two separate coverages exist: General Liability (property damage and injury on your site) and Workers&apos; Compensation (covers their crew if someone gets hurt on your property). Missing workers&apos; comp means a worker&apos;s medical bills can become your liability.</p>
            <p>4. Check the coverage amounts. General liability should be at least $1,000,000 per occurrence. Anything under that on a project involving structural, electrical, or roofing work is a warning sign.</p>
            <p>5. Verify the license at your state&apos;s licensing board. Search the contractor&apos;s name and license number at your state contractor board site (search &quot;[your state] contractor license lookup&quot;). Confirm the license is active, unexpired, and matches the exact business name on the COI.</p>
            <p>6. Match the names across all three documents. The name on the estimate, the license, and the insurance certificate must be identical. A mismatch means the person quoting you may be uninsured or subcontracting to someone you never vetted.</p>
            <p>7. Ask for the policy number and effective dates in writing. &quot;When does this policy expire, and can you send written confirmation it will stay active through my project&apos;s completion date?&quot; Get the answer by email.</p>
            <p>8. Request proof of bonding if your project exceeds $10,000. A surety bond means a third party will cover the cost if the contractor abandons the job or fails inspection.</p>


            <h2>The Direct Script to Use</h2>
            <p>Copy and send this before signing anything:</p>
            <p>&quot;Before we move forward, please email me your current certificate of insurance listing me as certificate holder, your active state license number, and written confirmation that both your general liability and workers&apos; comp policies will remain active through the completion of my project. I&apos;ll be verifying these directly with your insurer and the state licensing board.&quot;</p>
            <p>A contractor who is properly covered sends these within a day. A contractor who stalls, deflects, or says &quot;I&apos;ll bring it by later&quot; is telling you something.</p>
            <blockquote className="article-quote">
              If a contractor won&apos;t let you call their insurer directly, the policy almost never checks out.
              <cite>— Common finding among homeowners who reported claims</cite>
            </blockquote>


            <h2>The One Red Flag in Almost Every Bad Hire</h2>
            <p>It shows up before the work does: the contractor pressures you to pay a large deposit — often 30% or more — in cash, before any paperwork is verified. Legitimate contractors don&apos;t need your money upfront to prove they&apos;re real; their insurance, license, and references do that. A rushed demand for cash before verification is the single most reliable predictor of a job that goes wrong.</p>
            <p>The safest way to avoid this trap entirely is to work with contractors who accept escrow — where your payment is held and released only as verified work gets completed.</p>
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
