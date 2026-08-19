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
          <div className="hero-badge">Before You Hire · August 2026</div>
          <h1>How to Vet a Contractor&apos;s Google Business Profile Before You Call</h1>
          <p className="hero-subtitle">A contractor&apos;s Google Business Profile leaks more than reviews — it shows how long they&apos;ve operated, whether the address is real, and if the account was recently created to bury a bad history. Here&apos;s the 4-minute audit to run before you ever pick up the phone.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Run these seven checks before you dial. Each one takes under a minute, and any single failure is reason enough to keep looking.</p>
            <p>1. Pull up the profile and read the &quot;in business since&quot; or profile age indicator. If the business claims 15 years of experience but the profile shows activity starting eight months ago, that gap is the whole story.</p>
            <p>2. Copy the listed address into Google Maps Street View. Look at what&apos;s actually there. A real contractor has a shop, a yard, a house, or at minimum a residential address that matches a name. A UPS Store, a vacant lot, or a shared virtual office suite is a warning.</p>


            <h2>Checks 3 through 5: The Review Timeline</h2>
            <p>3. Sort reviews by &quot;newest&quot; and then by &quot;lowest rated.&quot; Read the one-star reviews first, not the five-star ones. Look specifically for the owner&apos;s replies. A contractor who responds to a bad review with a defensive rant is showing you exactly how they&apos;ll treat you during a dispute.</p>
            <p>4. Check the dates on the five-star reviews. If 20 glowing reviews all landed within the same two-week window, they were bought or solicited in a batch. Healthy review timelines are spread out — a few a month, year over year.</p>
            <p>5. Click on the reviewer profiles for the most enthusiastic reviews. A reviewer with exactly one review ever written, posted the same week the profile filled up, is a fake account. Real customers have review histories for restaurants, shops, and other services.</p>
            <blockquote className="article-quote">
              The reviews that matter aren&apos;t the perfect ones. They&apos;re the two-star reviews where the owner actually shows up in the replies.
              <cite>— common advice from consumer protection offices</cite>
            </blockquote>


            <h2>Checks 6 and 7: License and Cross-Reference</h2>
            <p>6. Find the license or registration number — it should be listed in the profile description or on the linked website. Then plug it into your state&apos;s contractor license lookup (search &quot;[your state] contractor license lookup&quot;). Confirm the number is active, matches the business name, and has no suspensions or complaints attached.</p>
            <p>7. Ask for the physical business documents before you meet: a copy of their license, proof of general liability insurance, and a W-9. A legitimate operator sends these without hesitation. Stalling, excuses, or &quot;I&apos;ll bring it to the walkthrough&quot; is a tell.</p>


            <h2>The One Red Flag in Almost Every Bad Hire</h2>
            <p>A Google Business Profile that was created within the last few months — with a fresh flood of reviews and a mailbox-store address — is the single most reliable signal of a bad hire.</p>
            <p>Contractors don&apos;t rebuild their online presence from scratch because business is good. They do it to bury the old profile: the one with the lawsuits in the reviews, the license complaints, the customers who never got their deposits back. A brand-new profile isn&apos;t proof of a new business. Often it&apos;s proof of an old one that needed to disappear.</p>
            <p>When the profile checks out but you still want a layer of protection between your money and the work, the smartest move is to never hand over a full deposit up front. Match with contractors who agree to hold your payment in escrow, so funds only release when the job meets the terms you both agreed to.</p>
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
