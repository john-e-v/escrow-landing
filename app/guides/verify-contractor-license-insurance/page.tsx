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
          <h1>How to Check a Contractor&apos;s License and Insurance in Under 5 Minutes</h1>
          <p className="hero-subtitle">Before you sign anything, you can confirm a contractor is licensed, insured, and legit in about five minutes. This step-by-step checklist gives you the exact sites to search, the documents to request, and the one detail most homeowners forget to verify.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Five minutes. That&apos;s how long it takes to confirm a contractor is licensed, insured, and not hiding a trail of complaints. Do it before you sign anything, hand over a deposit, or let anyone start work. Here&apos;s the exact checklist.</p>


            <h2>1. Get their license number in writing</h2>
            <p>Ask directly: &quot;What&apos;s your contractor license number and what state is it issued in?&quot; A legitimate contractor gives you this in seconds. If they stall, change the subject, or say &quot;I don&apos;t really need one for a job this size,&quot; stop the conversation.</p>
            <p>Write the number down exactly as given. You&apos;ll verify it in the next step.</p>


            <h2>2. Verify the license on your state board&apos;s site</h2>
            <p>Search &quot;[your state] contractor license lookup&quot; — every state has an official board (CSLB in California, TDLR in Texas, DBPR in Florida, and so on). Enter the license number and confirm four things:</p>
            <p>• The name matches the person or company you&apos;re hiring.
• The status says &quot;Active&quot; — not expired, suspended, or revoked.
• The license classification covers your type of work (a general license doesn&apos;t always cover electrical or plumbing).
• There are no disciplinary actions or unresolved complaints listed.</p>


            <h2>3. Request a Certificate of Insurance (COI)</h2>
            <p>Ask for a current Certificate of Insurance showing both general liability and workers&apos; compensation coverage. Don&apos;t accept a photo of a card — request the actual COI document.</p>
            <p>Then do the part most homeowners skip: call the insurance agent listed on the certificate and confirm the policy is active. Policies get canceled for non-payment all the time, and a lapsed certificate is worthless the day something goes wrong on your property.</p>
            <blockquote className="article-quote">
              If a contractor isn&apos;t insured and a worker gets hurt on your property, the liability can land on you — the homeowner.
              <cite>— common warning from state licensing boards</cite>
            </blockquote>


            <h2>4. Confirm the business is real</h2>
            <p>Look up the business name on your Secretary of State&apos;s business search. Confirm the entity is registered and in good standing. A contractor operating under a name that doesn&apos;t legally exist is a problem you don&apos;t want to inherit.</p>
            <p>While you&apos;re at it, search the company name plus your city on Google and check the Better Business Bureau. You&apos;re looking for a consistent identity — same name, same phone, same address across every source.</p>


            <h2>5. Ask for two recent references — and actually call one</h2>
            <p>Request contact info for two clients from the last six months. Call one and ask three questions: Did the final price match the estimate? Did they finish on schedule? Would you hire them again? Thirty seconds on the phone tells you more than any five-star review online.</p>


            <h2>The one red flag that shows up in almost every bad hire</h2>
            <p>They want a large cash deposit up front before any paperwork is signed.</p>
            <p>It&apos;s the single most common thread in stories of contractors who vanish, do sloppy work, or never show up again. Legitimate contractors work from a signed contract with a reasonable deposit tied to a clear schedule — not a big lump of cash handed over on a handshake. When the money moves before the paperwork does, walk away.</p>
            <p>The safest way to avoid this entirely is to work with contractors who agree to hold your payment in escrow, so funds are only released when the work is actually done.</p>
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
