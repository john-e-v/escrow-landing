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
          <div className="hero-badge">Contractor Ops · August 2026</div>
          <h1>Lead-Gen Platform vs. Your Own Pipeline: What Each Lead Actually Costs</h1>
          <p className="hero-subtitle">Buying leads from a platform feels fast, but shared leads, lead fees, and race-to-the-bottom bids quietly gut your margin. Here&apos;s an honest teardown of paid lead-gen versus building a referral-and-repeat pipeline you actually own.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>A shared lead sold to four contractors at $85 each nets the platform $340 for one homeowner&apos;s contact form. You&apos;re not the customer in that transaction — you&apos;re the product being resold.</p>
            <p>That math is the whole teardown. Everything below is just detail on where the money actually goes and when buying leads is still the right call, because sometimes it is.</p>
            <p>This is an honest comparison of two approaches to filling your pipeline: paying a platform for leads versus building a referral-and-repeat engine you own. Neither is free. They just fail in different ways.</p>


            <h2>The real cost of a platform lead</h2>
            <p>The sticker price on a lead is not the cost of the lead. Add the leads you pay for that never answer the phone. Add the ones that were price-shopping five other bids. Add the labor hours your estimator burns driving to a job you had a 20% chance of closing.</p>
            <p>Run it through honestly. If a lead costs $85, you close one in five, and half your closed jobs came from that channel, your true acquisition cost per job is $425 plus windshield time. On a $4,000 job that&apos;s tolerable. On a $1,200 repair it&apos;s eating the whole margin.</p>
            <p>The race-to-the-bottom part is worse than the fees. When four contractors get the same lead, the homeowner&apos;s takeaway is that you&apos;re all interchangeable, so they sort by price. The platform&apos;s incentive is volume of matches, not your close rate. Those two goals quietly diverge.</p>
            <blockquote className="article-quote">
              We were spending four grand a month on leads and couldn&apos;t figure out why we were busy and broke. Turns out we were subsidizing the guys we were bidding against.
              <cite>— Remodeling contractor, on paid lead-gen</cite>
            </blockquote>


            <h2>The real cost of your own pipeline</h2>
            <p>Owning your pipeline isn&apos;t free either, and pretending otherwise is how contractors get talked into it and then quit in month three. Referral and repeat work costs you upfront time: follow-up systems, asking for reviews, staying in touch with past customers, a reputation you have to actually earn on every job.</p>
            <p>The payoff is slow and then sudden. A referral lead closes at maybe 50–70% instead of 20%, arrives pre-sold on you specifically, and rarely price-shops because a person they trust already vouched. Your cost per job drops toward zero as the pipeline compounds. But it compounds on a delay, and it doesn&apos;t fill a hole next Tuesday.</p>
            <p>That&apos;s the honest tradeoff: platforms buy you speed and predictable volume at a permanent margin tax. Your own pipeline buys you margin and independence at the cost of patience and consistent effort.</p>


            <h2>The stack that supports an owned pipeline</h2>
            <p>Here&apos;s the operator&apos;s opinion: build your stack mostly in-house and keep the outside dependencies to a bare minimum. Your CRM, your follow-up, your estimates, your job tracking — those should be tailored to how you actually work, not rented from someone whose business model competes with yours.</p>
            <p>The one place a third party genuinely belongs is money changing hands. Payment and escrow are exactly where you want a neutral outside party, because it protects both you and the client and removes the &apos;when do I get paid / did the work get done&apos; friction that kills repeat business and referrals.</p>
            <p>So the goal isn&apos;t zero tools. It&apos;s a stack where the only outsider is holding the money — and everything else is yours.</p>


            <h2>Where to start</h2>
            <p>If you&apos;re leaning toward owning your pipeline, get the money piece settled first, because trust at payment is what earns the referral that starts the whole flywheel. Set up neutral escrow so nobody&apos;s chasing a check, then let the repeat work compound.</p>
            <p>Take a look at how the contractor plans handle the one third-party piece worth keeping.</p>
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
