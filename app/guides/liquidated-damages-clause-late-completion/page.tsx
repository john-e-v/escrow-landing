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
          <div className="hero-badge">Contract Clauses · September 2026</div>
          <h1>The Liquidated Damages Clause: Cap Your Late-Finish Exposure Before You Sign</h1>
          <p className="hero-subtitle">Open-ended late penalties can bleed your margin dry when a job runs long. A liquidated damages clause sets a fixed, agreed daily amount up front so a delay never turns into an unlimited claim for lost rent, hotel bills, or &apos;consequential&apos; damages.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Copy this line into your next contract before you sign it:</p>
            <p>&quot;In the event Contractor fails to achieve Substantial Completion by the Completion Date, Contractor shall pay Owner liquidated damages in the amount of $250.00 per calendar day of delay, as the parties&apos; sole and exclusive remedy for delay. Such liquidated damages represent a reasonable estimate of Owner&apos;s anticipated damages and are not a penalty. Contractor&apos;s total liability for delay under this Section shall not exceed $7,500.00.&quot;</p>
            <p>That single paragraph is the difference between a $7,500 ceiling and an open-ended claim for lost rent, hotel stays, alternate-housing costs, and &quot;consequential&quot; damages your lawyer will spend $20,000 fighting.</p>
            <blockquote className="article-quote">
              Contractor&apos;s total liability for delay under this Section shall not exceed $7,500.00.
              <cite>— the cap sentence — never leave it out</cite>
            </blockquote>


            <h2>Set the daily number so a court can&apos;t call it a penalty</h2>
            <p>Courts throw out liquidated damages clauses when the daily figure looks like a punishment instead of a real estimate. So do the math on the actual contract line and write the number down.</p>
            <p>For a residential remodel where the owner is renting elsewhere, take their real monthly housing cost, divide by 30, and use that. If they&apos;re paying $3,000/month in temporary rent, $100/day is defensible. Pulling $1,000/day out of thin air on a $40,000 kitchen is not — a judge will strike it and you&apos;ll be exposed to actual damages instead.</p>
            <p>Write the basis right into the contract: &quot;The parties agree $250/day is based on Owner&apos;s estimated temporary housing and storage costs.&quot; That one sentence is what makes the clause survive a challenge.</p>


            <h2>The two words that save your margin: &apos;sole and exclusive&apos;</h2>
            <p>Without the phrase &quot;sole and exclusive remedy,&quot; an owner can collect the daily amount AND still sue you for everything else. That defeats the entire point.</p>
            <p>Make sure your clause says the liquidated damages are the only money owed for delay. Then add the cap — expressed as a total dollar figure or a number of days (&quot;not to exceed 30 days of liquidated damages&quot;). A cap turns your worst-case delay exposure into a line item you can price and manage instead of a bottomless pit.</p>


            <h2>Protect your Completion Date with a time-extension clause</h2>
            <p>A liquidated damages clause is dangerous to you if the Completion Date can&apos;t move. Weather, owner change orders, and hidden conditions will blow your schedule through no fault of yours. Pair the LD clause with this:</p>
            <p>&quot;The Completion Date shall be extended day-for-day for delays caused by: Owner-requested changes, differing site conditions, adverse weather beyond normal seasonal expectations, or delays in Owner-supplied materials or decisions. Contractor shall provide written notice of a delay event within 5 business days.&quot;</p>
            <p>On your very next job, calendar a reminder: any time an owner delays a selection or a change order lands, send a one-line email — &quot;Per our contract, this extends the Completion Date by X days.&quot; That email is your evidence. No email, no extension.</p>


            <h2>Do these three things before you sign the next one</h2>
            <p>1. Calculate the daily number from the owner&apos;s real cost, and write the basis into the clause.</p>
            <p>2. Add &quot;sole and exclusive remedy&quot; plus a total dollar cap or day cap — never leave the cap out.</p>
            <p>3. Bolt on a time-extension clause with a 5-day written-notice rule, and actually send the notices.</p>
            <p>Do all three and a late finish becomes a known, capped number instead of a lawsuit that eats a year of profit. Skip the cap, and you&apos;ve signed a blank check payable to whatever a frustrated homeowner can imagine.</p>
            <p>If you want these clauses already built into a contract template you can send today — with the caps and notice language in the right spots — that&apos;s exactly what we put in front of contractors.</p>
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
