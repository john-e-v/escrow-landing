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
          <div className="hero-badge">Payment Protection · August 2026</div>
          <h1>The Client Paid, Then Filed a Chargeback: How to Stop Losing the Job to a Card Dispute</h1>
          <p className="hero-subtitle">A client can pay you in full by card, then dispute the charge weeks later and pull the money right back out of your account. Milestone escrow removes the card network from the equation entirely, so a completed and approved payment can&apos;t be clawed back.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>The fix: stop treating a card payment as a completed payment. Until the chargeback window closes — 60 to 120 days depending on the card network — money that&apos;s sitting in your account isn&apos;t yours. It&apos;s borrowed. Move your invoicing to milestone-based escrow, where funds are held by a neutral third party, released only on documented approval, and settled outside the card dispute system. Once that release happens, there&apos;s no card network sitting behind the transaction with the power to reverse it.</p>
            <p>If you&apos;ve already been burned, that&apos;s probably why you&apos;re here. So let&apos;s talk about why this keeps happening and what actually closes the hole.</p>


            <h2>Why a paid invoice isn&apos;t a settled invoice</h2>
            <p>When a client pays you by card, you&apos;re not really being paid by the client. You&apos;re being paid by their bank, on the client&apos;s promise to pay the bank back. The client can revoke that promise at any point in the dispute window by calling their card issuer and saying three words: &quot;I didn&apos;t authorize&quot; — or &quot;work not completed,&quot; or &quot;services not as described.&quot;</p>
            <p>The money leaves your account immediately when they do. You don&apos;t get a hearing first. You get a debit and a deadline to respond. Then you&apos;re assembling a defense file — contract, texts, before-and-after photos, sign-off emails — and hoping a card network analyst who has never held a trowel decides in your favor. Even when you win, you&apos;ve lost days of admin time and floated the client an interest-free loan you never agreed to make.</p>
            <blockquote className="article-quote">
              The card issuer almost always sides with the cardholder on the first pass. As the merchant, you&apos;re guilty until you produce paperwork.
              <cite>— payment dispute basics, merchant side</cite>
            </blockquote>


            <h2>Why chargebacks hit contractors harder</h2>
            <p>Your jobs are big-ticket and span weeks. That&apos;s the worst possible profile for card exposure. A $22,000 remodel paid up front gives the client three full months to change their mind, run into a budget crunch, or decide the grout color wasn&apos;t what they pictured — and unwind the whole thing with a phone call.</p>
            <p>And because construction is subjective and progressive, the client always has a plausible-sounding story: it&apos;s not done, it&apos;s not right, that&apos;s not what we agreed. You know it&apos;s finished. The card network doesn&apos;t. That gap is exactly what a dispute exploits.</p>


            <h2>How milestone escrow removes the card network</h2>
            <p>Escrow changes who&apos;s holding the money and when it moves. The client funds a milestone before you start that phase. The money sits with a neutral holder — not in your account, not in theirs. You do the work. The client approves. The funds release to you against that approval.</p>
            <p>Once that release clears, it&apos;s a settled transfer, not a card authorization waiting to be reversed. There&apos;s no issuing bank standing behind it with a reversal button. The approval itself becomes your record that the work was accepted — which is the exact evidence a chargeback fight demands, except now it&apos;s captured up front instead of reconstructed under deadline.</p>
            <p>Structuring the job into funded milestones also fixes the timing problem. You&apos;re never carrying $22,000 of exposure for three months. You carry one milestone at a time, each one funded before you lift a tool and released the moment it&apos;s approved.</p>


            <h2>What this looks like on your next contract</h2>
            <p>Break the job into phases with a dollar amount and a definition of done for each. Client funds phase one into escrow. You complete it, submit proof, client approves, funds release. Repeat. No phase starts unfunded, and no completed-and-approved phase can be clawed back.</p>
            <p>If you want to see how the milestone terms and release rules are set up for construction work specifically, look at the contractor plans and pick the structure that matches how you already bid your jobs.</p>
          </div>

          <div className="article-footer">
            <Link href="/guides" className="article-back">← Back to Guides</Link>
            <a href="/master" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>See contractor plans →</a>
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
