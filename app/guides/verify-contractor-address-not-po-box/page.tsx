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
          <div className="hero-badge">Vetting &amp; Protection · August 2026</div>
          <h1>How to Verify a Contractor Has a Real Business Address (Not Just a PO Box)</h1>
          <p className="hero-subtitle">A contractor with no verifiable physical address is a contractor who can vanish without a trace. This checklist walks you through confirming a real business location in ten minutes so you know exactly where to find them if the job goes sideways.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>1. Ask for the full street address in writing. Not a phone conversation, not a verbal answer on-site — text or email. A legitimate contractor gives you a number, a street, a city, and a ZIP in under a minute. Hesitation, deflection, or &quot;I&apos;ll send it later&quot; is your first data point.</p>
            <p>2. Paste that address into Google Maps and switch to Street View. You&apos;re checking one thing: does the address correspond to something that could plausibly house a business or a working tradesperson? A commercial unit, a warehouse, a residential home used as a base — all fine. A UPS Store, a strip-mall mailbox center, or an empty lot is not.</p>


            <h2>Cross-check the address against public records</h2>
            <p>3. Search your state&apos;s Secretary of State business registry (search &quot;[your state] secretary of state business search&quot;). Type in the company name. A real business will list a registered agent and a principal address. Compare it to the address they gave you. Mismatches aren&apos;t automatically fatal, but they need an explanation.</p>
            <p>4. Check the address on your county or city business-license lookup. Most municipalities require a licensed contractor to register a physical business location. If the license lists a different address — or no license appears at all — ask why.</p>
            <p>5. Run the address through the USPS ZIP lookup tool (tools.usps.com). If USPS classifies the location as a &quot;Commercial Mail Receiving Agency&quot; (CMRA), that&apos;s a mailbox rental — a PO Box wearing a costume. This one check alone catches the most common trick.</p>
            <blockquote className="article-quote">
              A CMRA address looks exactly like a real suite number. The USPS tool is the only fast way to tell a &apos;Suite 200&apos; apart from &apos;Mailbox 200.&apos;
              <cite>— Common tip from construction fraud investigators</cite>
            </blockquote>


            <h2>Confirm they actually operate there</h2>
            <p>6. Call the number listed with the business registration — not the cell number they gave you. See if it connects to the same company and whether anyone answers as the business.</p>
            <p>7. Ask a direct question: &quot;Can I stop by your shop or office to sign the contract?&quot; You don&apos;t have to actually go. You&apos;re watching the reaction. A contractor with a real location says &quot;sure.&quot; A contractor without one suddenly prefers to meet at your house or a coffee shop.</p>
            <p>8. Request a piece of mail or a document tied to the address — a business insurance certificate (COI) or a utility bill. The COI will list the insured&apos;s address. If it matches, you&apos;ve now confirmed the location through a third party who has money on the line.</p>


            <h2>Put it in the paperwork</h2>
            <p>9. Write the verified physical address into the contract itself, in the party-identification section. This matters if you ever need to serve legal papers or file a mechanic&apos;s lien dispute. &quot;You can&apos;t sue a PO Box&quot; is close enough to true that it should change how you draft the agreement.</p>
            <p>10. Save every screenshot: the Street View, the Secretary of State page, the USPS classification result, and the COI. Ten minutes of saving now is the difference between &quot;I know where they are&quot; and &quot;I have no idea who I paid.&quot;</p>


            <h2>The one red flag that shows up in almost every bad hire</h2>
            <p>The contractor only has a cell phone and a mailbox — no fixed physical location they&apos;ll let you verify. Every other warning sign tends to follow from this one. Someone with no address to defend has nothing to lose by disappearing.</p>
            <p>If you&apos;d rather skip the detective work entirely, start with contractors who&apos;ve already been vetted and who agree to hold your money in escrow until the work is done. When payment is tied to completion, vanishing stops being an option.</p>
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
