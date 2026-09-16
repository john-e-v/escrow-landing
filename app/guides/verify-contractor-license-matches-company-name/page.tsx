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
          <div className="hero-badge">Vetting &amp; Protection · September 2026</div>
          <h1>The License Was Real — But It Belonged to Someone Else. How to Check the Name Matches</h1>
          <p className="hero-subtitle">A valid license number means nothing if it&apos;s not tied to the person standing in your driveway. This checklist walks you through matching the license, the business name, and the human you&apos;re actually hiring — in under 10 minutes.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Step 1: Ask for the license number in writing before you meet — not a photo of a card, the actual number. A legitimate contractor will send it without hesitation. Anyone who stalls, sends a blurry image, or says &quot;I&apos;ll bring it to the walkthrough&quot; has just handed you your first data point.</p>
            <p>The license was real. That&apos;s what fooled the last three homeowners who called us. The number checked out on the state board site. The problem was the name attached to it belonged to a man who&apos;d retired two years earlier and had never met the guy quoting their roof. Here&apos;s how to catch that in under ten minutes.</p>


            <h2>The 10-Minute Match Check</h2>
            <p>Do these in order. Don&apos;t skip to pricing until all three lines up.</p>
            <p>1. Look up the license number on your state&apos;s licensing board. Search &quot;[your state] contractor license lookup&quot; — it&apos;s a .gov site, free, and public. Type in the number they gave you.</p>
            <p>2. Read the name on the record out loud. Does it match the name of the person or company you&apos;ve been texting? Not &quot;close enough.&quot; Exact. If the license reads &quot;Martinez Construction LLC&quot; and the guy introduced himself as running &quot;Mike&apos;s Home Repair,&quot; stop and ask why.</p>
            <p>3. Check the license status and expiration date. &quot;Active&quot; is what you want. &quot;Expired,&quot; &quot;suspended,&quot; &quot;revoked,&quot; or &quot;inactive&quot; ends the conversation.</p>
            <p>4. Request a copy of their current liability insurance certificate — and call the insurer&apos;s number on it, not the contractor&apos;s. Confirm the policy is active and the named insured matches the license name.</p>
            <p>5. Ask them to confirm, in a text or email, the legal business name exactly as it appears on the license. Now you have all three in writing: license, insurance, and business name — from the person&apos;s own hand.</p>
            <blockquote className="article-quote">
              The number was legit. It just wasn&apos;t his. He was borrowing a licensed friend&apos;s credential to land jobs he had no coverage for.
              <cite>— homeowner, after a $9,000 dispute with no insurance to claim against</cite>
            </blockquote>


            <h2>Match the Human, Not Just the Paperwork</h2>
            <p>6. When they arrive, ask to see a driver&apos;s license or ID and check the name against the license record. This sounds aggressive. It isn&apos;t — it&apos;s standard for anyone working inside your home, and honest contractors expect it.</p>
            <p>7. Search the exact business name plus your city and the word &quot;reviews.&quot; Then search the name plus &quot;complaint&quot; and plus &quot;lawsuit.&quot; You&apos;re not looking for zero results — you&apos;re looking for a pattern. One bad review is life. Ten identical ones about disappearing mid-job is a warning.</p>
            <p>8. Verify the business address is real. Paste it into a map. A residential lot is fine for a solo operator; a vacant field or a UPS Store mailbox is not.</p>
            <p>9. Ask for two references from jobs completed in the last six months, and actually call one. Ask the reference a single question: &quot;Did the same person who quoted you do the work?&quot;</p>


            <h2>The One Red Flag That Shows Up in Almost Every Bad Hire</h2>
            <p>They ask for a large cash deposit up front — before materials are ordered, before a contract is signed, sometimes before the license check is even done.</p>
            <p>Every version of the borrowed-license story, the disappeared-crew story, the never-came-back story starts the same way: money changed hands early, in cash, with nothing holding the contractor accountable to finish. Once your deposit is gone and there&apos;s no escrow, no signed scope, and no verified name behind the license, you have nothing to enforce and no one to enforce it against.</p>
            <p>The fix is simple. Don&apos;t let your deposit sit in a stranger&apos;s pocket. Pay into escrow, where the money releases only as the work gets done — and the contractor&apos;s name has already been matched to the license before a dollar moves.</p>
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
