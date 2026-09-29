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
          <h1>The Name on the Quote Didn&apos;t Match the License. Here&apos;s How to Catch It.</h1>
          <p className="hero-subtitle">A contractor can hand you a real license number that belongs to a different business entity entirely. This checklist walks you through matching the name on your quote to the name on the license, the insurance certificate, and the state registration before you sign.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Step 1: Copy the exact business name printed at the top of your quote. Not the contractor&apos;s personal name — the business name. Write it down word for word, including &quot;LLC,&quot; &quot;Inc,&quot; or &quot;&amp; Sons.&quot;</p>
            <p>Step 2: Find the license number on the quote. If there isn&apos;t one, stop here and request it in writing before you go any further. A contractor who won&apos;t put a license number on paper is telling you something.</p>
            <p>Step 3: Go to your state&apos;s contractor licensing board website. Search the license number directly. Every state has one — search &quot;[your state] contractor license lookup&quot; and use the .gov result, not a third-party aggregator.</p>
            <p>Step 4: Compare the name on the license record to the name on your quote, letter for letter. This is the whole point. A license number can be real, active, and in good standing — and still belong to a completely different business than the one quoting you.</p>


            <h2>What the license record has to match</h2>
            <p>Step 5: Check that the business name on the license matches the business name on your quote. &quot;J. Rivera Construction LLC&quot; is not the same entity as &quot;Rivera &amp; Co Contracting.&quot; If they don&apos;t match, ask why. The legitimate answer is a DBA (doing business as) filing — and you can verify that too.</p>
            <p>Step 6: Confirm the license classification covers your job. A license valid for general residential work may not cover roofing, electrical, or plumbing. The classification is listed on the same record.</p>
            <p>Step 7: Check the license status and expiration date. &quot;Active&quot; is what you want. &quot;Expired,&quot; &quot;suspended,&quot; or &quot;revoked&quot; ends the conversation.</p>
            <p>Step 8: Note the name of the qualifying individual on the license — the person whose credentials the license is built on. Ask whether that person will actually be running your job, or whether the license is being borrowed by someone else&apos;s crew.</p>
            <blockquote className="article-quote">
              A borrowed or rented license is one of the most common ways an unqualified crew looks legitimate on paper. The number checks out. The name behind it never shows up on site.
              <cite>— state licensing board investigator</cite>
            </blockquote>


            <h2>Insurance and registration have to match too</h2>
            <p>Step 9: Request the certificate of insurance (COI) directly from the contractor&apos;s insurer, not a PDF the contractor emails you. Call the agency listed and confirm the policy is active. Ask them to email you the certificate directly.</p>
            <p>Step 10: Check that the insured name on the COI matches the business name on your quote and your license lookup. All three should say the same thing. A COI in a different company&apos;s name protects that other company, not you.</p>
            <p>Step 11: Confirm the COI shows both general liability and workers&apos; compensation, with current effective and expiration dates that cover your project timeline.</p>
            <p>Step 12: Look up the business entity on your Secretary of State&apos;s business registration search. Confirm it&apos;s registered, in good standing, and lists an address and agent that match everything else you&apos;ve gathered.</p>
            <p>Step 13: Ask for the physical business address and look it up. A registered agent&apos;s office or a UPS Store box in place of a real address is worth a direct question.</p>


            <h2>The one red flag in almost every bad hire</h2>
            <p>When you line up the four documents — the quote, the license record, the insurance certificate, and the state registration — the names don&apos;t match.</p>
            <p>That&apos;s it. In the overwhelming majority of bad hires, the mismatch was visible before a single dollar changed hands. The quote said one thing, the license belonged to another entity, the insurance covered a third name, and nobody stopped to lay them side by side. A contractor operating cleanly has one consistent name across all four. A contractor hoping you won&apos;t check has a different story on each page.</p>
            <p>Match the names first. Then talk about payment. And when you do talk about payment, work with people who expect that level of scrutiny and are willing to hold your money in escrow until the work is done right.</p>
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
