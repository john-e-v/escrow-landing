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
          <h1>What Every Contractor Estimate Must Include Before You Sign</h1>
          <p className="hero-subtitle">A verbal quote is not a contract, and a one-line estimate hides everything that can go wrong. Use this checklist to confirm your written estimate has the nine elements that protect you before any money changes hands.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>1. Full legal business name, physical address, and license number. Not a cell phone and a first name. If the estimate lists only a nickname and a Google Voice number, you have no one to hold accountable when the work goes wrong.</p>
            <p>2. A written scope of work that names every task. &quot;Remodel bathroom&quot; is not a scope. &quot;Demo existing tile, install cement board, waterproof shower pan, set 4x8 wall tile, replace toilet flange&quot; is a scope. Every line you can&apos;t picture is a line you&apos;ll argue about later.</p>
            <p>3. Materials specified by brand, model, and quantity. &quot;Mid-grade faucet&quot; means the contractor buys the cheapest thing that qualifies and pockets the difference. Demand the exact product, or a written allowance amount with your right to choose within it.</p>


            <h2>The Money Terms That Must Be On Paper</h2>
            <p>4. A total price, broken into labor and materials. A single lump sum hides everything. When you can see the split, you can catch a $2,000 labor charge on a two-hour job before it happens.</p>
            <p>5. A payment schedule tied to completed milestones — never to dates. &quot;50% up front&quot; is how you fund a contractor&apos;s other job site. Tie each payment to work you can inspect: deposit, rough-in complete, inspection passed, final walkthrough. Anything over a 10–15% deposit on day one is a warning.</p>
            <p>6. Start date and substantial completion date, in writing, with a clause covering what happens if the job runs long. A contractor who won&apos;t commit to a finish date on paper has no intention of finishing on time.</p>
            <blockquote className="article-quote">
              If the deposit is bigger than the first real milestone of work, the deposit is the job — everything after is optional to them.
              <cite>— residential GC, 20 years</cite>
            </blockquote>


            <h2>The Protection Clauses People Skip</h2>
            <p>7. Proof of insurance and a bond, attached or referenced by policy number. Ask for a Certificate of Insurance sent directly from their carrier, not a photo they text you. Call the carrier to confirm it&apos;s active. If a worker is hurt on your property and there&apos;s no coverage, the liability lands on you.</p>
            <p>8. A lien waiver clause. This is the one that costs people their houses. Even after you pay the contractor in full, an unpaid subcontractor or supplier can file a mechanic&apos;s lien against your property. Your estimate must require signed lien releases from every sub and supplier before final payment.</p>
            <p>9. A written warranty on labor, with a duration. &quot;We stand behind our work&quot; is not a warranty. &quot;One year on labor, manufacturer warranty on materials&quot; is. Get the length and what it covers in the document.</p>


            <h2>Verify Before You Sign</h2>
            <p>Run these three checks today, before any money moves:</p>
            <p>- Look up the license number on your state contractor licensing board&apos;s website. Confirm it&apos;s active, matches the business name, and has no disciplinary actions.
- Search the business name plus &quot;complaint&quot; and &quot;lawsuit.&quot; Check your state court records portal for open cases.
- Call two references and ask one question: &quot;Would you hire them again for the same money?&quot; Silence or hesitation is your answer.</p>


            <h2>The One Red Flag In Almost Every Bad Hire</h2>
            <p>Pressure to skip the paperwork. It shows up as &quot;I can start Monday if we skip the formal contract,&quot; or &quot;the license is being renewed,&quot; or &quot;cash gets you a discount.&quot; Every one of those means the contractor is avoiding a record of the deal. A professional wants the estimate detailed and signed — it protects them as much as you. The person rushing you past the document is telling you exactly what they plan to do once your deposit clears.</p>
            <p>The cleanest protection is never handing over money the contractor hasn&apos;t earned yet. If your payments sit in escrow and release only when a milestone is verified, a vague estimate and a fast-talking pressure pitch lose most of their power.</p>
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
