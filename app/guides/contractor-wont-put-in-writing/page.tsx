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
          <h1>5 Things a Contractor Should Never Refuse to Put in Writing</h1>
          <p className="hero-subtitle">Some requests are so basic that a refusal tells you everything. This checklist gives you five specific things to ask for in writing today, and shows you exactly how a good contractor responds versus how a bad one dodges.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Ask for these five things in writing before you sign anything. A contractor who does honest work will hand them over without flinching. A contractor who plans to cut corners will stall, dodge, or talk you out of asking. Here&apos;s the list, and here&apos;s exactly how each request separates the two.</p>


            <h2>1. A fixed total price with a payment schedule tied to milestones</h2>
            <p>Say this: &quot;I need the total price in writing, broken into payments tied to completed stages — not dates.&quot;</p>
            <p>A good contractor gives you something like: 10% at signing, 30% when demo is done, 30% at rough-in, 30% at final walkthrough. Each payment maps to work you can see.</p>
            <p>A bad one wants big money up front — 40%, 50%, sometimes more — &quot;for materials.&quot; Real suppliers extend contractors credit. A demand for half the job before the first nail goes in means your cash is funding their last job, not yours.</p>


            <h2>2. Their license number and proof of insurance</h2>
            <p>Ask: &quot;What&apos;s your license number, and can you send a certificate of insurance?&quot;</p>
            <p>Then actually check it. Most states have a free contractor license lookup — search &quot;[your state] contractor license verification.&quot; Confirm the number is active and matches the name on your contract. Call the insurance carrier listed on the certificate and confirm the policy is current.</p>
            <p>A good contractor sends this in five minutes. A bad one says &quot;I&apos;ve been doing this 20 years, I don&apos;t need all that paperwork.&quot; Experience is not a license, and it does not pay for the ladder that goes through your window.</p>


            <h2>3. A written scope of work — including what&apos;s NOT included</h2>
            <p>Request: &quot;Put the full scope in writing, and list anything you&apos;re specifically excluding.&quot;</p>
            <p>The exclusions matter more than the inclusions. A good contractor writes &quot;does not include: electrical panel upgrade, permit fees, disposal of hazardous material&quot; — because they want no surprises either.</p>
            <p>A bad one keeps it vague on purpose. Vague scope is how a $12,000 bathroom becomes a $19,000 bathroom through &quot;change orders&quot; you never saw coming.</p>
            <blockquote className="article-quote">
              If it isn&apos;t in the scope, it isn&apos;t in the price — and everything not in the price becomes a change order at their number, not yours.
              <cite>— common advice from construction attorneys</cite>
            </blockquote>


            <h2>4. A lien waiver at each payment</h2>
            <p>Say: &quot;I&apos;ll need a signed lien waiver every time I make a payment.&quot;</p>
            <p>A lien waiver is the document that proves the contractor — and their subs and suppliers — got paid and give up the right to put a lien on your home. Without it, you can pay in full and still get a mechanic&apos;s lien from an unpaid subcontractor.</p>
            <p>A good contractor knows exactly what you mean. A bad one acts confused or offended. This request alone tells you whether they run a real business.</p>


            <h2>5. A written warranty on labor</h2>
            <p>Ask: &quot;What&apos;s your labor warranty, in writing?&quot;</p>
            <p>One year on workmanship is standard for most trades. A good contractor states it plainly and stands behind it.</p>
            <p>A bad one says &quot;the materials have a manufacturer warranty&quot; — which covers the product, not their installation. If the tile cracks because they skipped the underlayment, the manufacturer owes you nothing.</p>


            <h2>The one red flag in almost every bad hire</h2>
            <p>It&apos;s this: they pressure you to pay in cash, or to move money in a way that leaves no paper trail. &quot;I&apos;ll knock off 10% for cash.&quot; &quot;Just Venmo the deposit.&quot; &quot;We can skip the permit if you pay me directly.&quot;</p>
            <p>Every one of those means no receipt, no recourse, and no protection when the work goes wrong. A contractor who won&apos;t put payment in a traceable, structured form is telling you they don&apos;t expect to earn the next payment.</p>
            <p>The cleanest protection is escrow — your money is committed, but it only releases when the work is actually done.</p>
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
