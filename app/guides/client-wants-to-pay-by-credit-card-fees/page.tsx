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
          <div className="hero-badge">Payments &amp; Escrow · August 2026</div>
          <h1>The Client Wants to Pay the Final Bill by Credit Card: Who Eats the 3%?</h1>
          <p className="hero-subtitle">A client offering to put the final $18K on a credit card sounds like fast money, but the 3% processing fee and 120-day chargeback window make it one of the riskiest ways to close a job. Here&apos;s how to structure payment so the convenience doesn&apos;t quietly cost you your margin.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>On an $18K final payment, a 3% credit card fee is $540 — and you have two clean options: build the fee into the price before the client swipes, or don&apos;t accept the card at all. What you should never do is eat $540 of margin on the last invoice of a job you already delivered, then spend the next 120 days hoping the charge doesn&apos;t get reversed.</p>
            <p>The client offering to &quot;just put it on the card&quot; isn&apos;t doing you a favor. Convenience for them is exposure for you, and if you close the job without accounting for that, you&apos;re funding their points program out of your take-home.</p>


            <h2>The 3% is the small problem</h2>
            <p>The fee is the part everyone notices, so handle it first: if you&apos;re going to accept cards, your contract needs a surcharge or convenience-fee line that&apos;s disclosed before the transaction. In most states you can legally pass a card surcharge to the client as long as it&apos;s disclosed up front and capped (commonly at the processor&apos;s actual cost). That turns $540 from your loss into their choice. Some clients will pay it. Others will suddenly remember they can write a check.</p>
            <p>Either outcome is fine. What&apos;s not fine is absorbing it silently because it felt awkward to bring up at the finish line.</p>
            <blockquote className="article-quote">
              I stopped losing the surcharge conversation the day I moved it out of the closeout and into the signed proposal.
              <cite>— remodeling contractor, on invoicing changes</cite>
            </blockquote>


            <h2>The chargeback is the big problem</h2>
            <p>Here&apos;s the risk nobody prices in: a credit card payment isn&apos;t final. The cardholder has roughly 120 days to dispute the charge, and on a large final invoice, a dissatisfied client has a powerful lever. They can approve the work, take the keys, and 90 days later file a dispute claiming the job was incomplete. Now your $18K is frozen, you&apos;re assembling photos and change orders to prove your case, and the processor is holding the money hostage while it decides.</p>
            <p>Check versus card matters here. A cleared check is settled. A card charge is a conditional promise the bank can claw back. On the final, largest payment of a job — the one where any lingering friction lives — a reversible payment method is exactly the wrong tool.</p>


            <h2>Structure the money so the last payment isn&apos;t the risky one</h2>
            <p>The real fix isn&apos;t picking check or card. It&apos;s making sure the final payment is small enough that the method barely matters. If your entire margin is riding on one $18K balloon at the end, every payment decision becomes high-stakes.</p>
            <p>Milestone billing solves this at the structure level. You break the job into funded stages — deposit, rough-in, pre-finish, closeout — and the client funds each milestone before that phase of work begins. By the time you reach the final payment, you&apos;re collecting the last 10–15%, not the whole nut. A chargeback on a $2,400 punch-list balance is an annoyance. A chargeback on $18K is a lawsuit.</p>
            <p>Better still, run those milestones through escrow. The client deposits each stage&apos;s funds into a neutral account before you start the work, so the money is committed and verified before your crew shows up — not promised at the end and disputed later. You&apos;re no longer chasing a final check or gambling on a reversible card charge, because the funds were already secured phase by phase. The client gets proof their money is protected until work is done; you get proof you&apos;ll actually be paid for what you deliver.</p>
            <p>That&apos;s the shift: stop treating the final invoice as the moment you find out whether you got paid. Structure the payments so that question was answered before the job started.</p>
            <p>If your closeouts keep turning into collection problems, it&apos;s worth seeing how contractors are structuring milestone and escrow payments to take the last-invoice risk off the table.</p>
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
