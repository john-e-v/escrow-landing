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
          <h1>Before You Hand Over a Deposit: 8 Things to Verify First</h1>
          <p className="hero-subtitle">A copy-paste checklist you run before any money changes hands. Eight verifications you can complete today—license, insurance, payment terms, and the paper trail that protects you if the job goes sideways.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>1. Pull their license number and verify it yourself. Don&apos;t take a photo of a card as proof. Go to your state&apos;s contractor licensing board website, type in the number, and confirm the name matches, the license is active, and there are no suspensions. This takes ninety seconds and catches the most common fraud outright.</p>
            <p>2. Request a current Certificate of Insurance (COI)—not a copy, the real thing. Ask them to have their insurer email it to you directly. It should show general liability and, if they have employees, workers&apos; compensation. Check the expiration date. An expired or &quot;pending&quot; policy means you&apos;re the one liable if someone gets hurt on your property.</p>


            <h2>Keep Working the List</h2>
            <p>3. Ask this exact question: &quot;What&apos;s your license number, and is it under your name or a company name?&quot; Then verify that the business entity is registered with your Secretary of State. A mismatch between the person quoting you and the licensed entity is a problem.</p>
            <p>4. Get the deposit terms in writing before you agree to anything. A reasonable deposit is 10–30% for materials—not 50%, and never the full amount. If the contract says &quot;payment due in full up front,&quot; stop.</p>
            <p>5. Request three recent references and actually call two of them. Ask: &quot;Did the final price match the estimate? Did they finish on schedule? Would you hire them again?&quot; Vague or reluctant answers tell you as much as the words do.</p>
            <p>6. Check for an address and a track record. Search the business name plus your city. Look for a physical address, reviews across more than one platform, and a history longer than a few months. A contractor with no digital footprint and only a cell number is a risk you&apos;re choosing to take.</p>
            <blockquote className="article-quote">
              The reference call is the one step people skip and regret. Two five-minute conversations would have saved me twelve thousand dollars.
              <cite>— homeowner after a failed kitchen remodel</cite>
            </blockquote>


            <h2>The Paper Trail That Protects You</h2>
            <p>7. Demand a written contract with a defined scope, a start and end date, a total price, a payment schedule tied to milestones, and a lien waiver clause. &quot;We&apos;ll figure out the details later&quot; is how disputes start. If it&apos;s not written down, it doesn&apos;t exist when things go wrong.</p>
            <p>8. Structure payment around completed work, not calendar dates. Tie each payment to a verifiable milestone—demo done, rough-in inspected, drywall up. Never let payments run ahead of progress. If you&apos;ve paid 60% and only 30% of the work is done, you&apos;ve lost your leverage and your money.</p>


            <h2>The One Red Flag in Almost Every Bad Hire</h2>
            <p>Pressure to pay a large deposit in cash, fast, before anything is in writing. It shows up in nearly every job that ends badly. The urgency is manufactured—&quot;I can start Monday if you put down half today&quot;—and the cash request exists to erase the paper trail. A legitimate contractor expects you to verify their license, read a contract, and pay in traceable installments. Anyone who resists that is telling you exactly who they are.</p>
            <p>The simplest protection is never letting money sit in someone else&apos;s hands ahead of the work. When payments are held in escrow and released only as milestones are met, the incentive to disappear vanishes—because there&apos;s nothing to disappear with.</p>
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
