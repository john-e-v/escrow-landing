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
          <div className="hero-badge">Dispute-Proofing · July 2026</div>
          <h1>The Exclusions List That Stops Free Work: What to Put in Writing Before Day 1</h1>
          <p className="hero-subtitle">Most contractors list what a job includes and never write down what it doesn&apos;t. This guide gives you the copy-paste exclusions block that stops clients from expecting drywall repair, haul-away, and painting they never paid for.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Copy this block into your next estimate, above your signature line:</p>
            <p>This price does NOT include: drywall repair or patching, painting or touch-up, haul-away or disposal of removed materials, moving furniture or appliances, permit fees, or any work not specifically listed in the Scope above. These items are available at additional cost with a written change order.</p>
            <p>That&apos;s it. Six words of &quot;does NOT include,&quot; a plain list, and one sentence about change orders. If you paste nothing else from this article, paste that. It stops the single most common way contractors get bled: the silent assumption.</p>
            <blockquote className="article-quote">
              This price does NOT include: drywall repair or patching, painting or touch-up, haul-away or disposal of removed materials, moving furniture or appliances, permit fees, or any work not specifically listed in the Scope above. These items are available at additional cost with a written change order.
              <cite>— Exclusions block — paste into any estimate</cite>
            </blockquote>


            <h2>Why the exclusions list beats the scope list</h2>
            <p>Every contractor writes what a job includes. Almost none write what it doesn&apos;t. The problem is that clients don&apos;t read your scope as a boundary — they read it as a starting point and fill in the blanks with whatever they hoped you&apos;d do.</p>
            <p>You pull out an old dishwasher. The client expected you to haul it away. You cut into the wall to fix a leak. The client expected the drywall closed and painted. You never quoted those things, but now you&apos;re the bad guy for asking to be paid. The exclusions list turns that fight into a five-second glance at a document they already signed.</p>


            <h2>Build your own list from your last three callbacks</h2>
            <p>Don&apos;t guess at what to exclude. Look at the last three jobs where a client expected something for free. Write down exactly what they assumed. Those become your permanent exclusion lines.</p>
            <p>Most trades land on the same offenders. Add whichever apply to you, worded this plainly:</p>
            <p>&quot;Does NOT include: cutting/coring through concrete, tile, or masonry; relocating existing plumbing, gas, or electrical outside the work area; matching discontinued fixtures or finishes; correcting pre-existing code violations; or work delayed by site conditions not visible at time of quote.&quot;</p>
            <p>Keep every line concrete. &quot;Miscellaneous extras&quot; protects nobody. &quot;Haul-away of removed cabinets&quot; wins the argument.</p>


            <h2>Say it out loud before they sign</h2>
            <p>Written exclusions only work if the client can&apos;t claim surprise. Read the list to them at signing. Use this line, word for word:</p>
            <p>&quot;Before you sign, I want to point out what&apos;s not in this price — so there&apos;s no confusion later. Drywall repair, painting, and haul-away aren&apos;t included. If you want those, we add them as a written change order. Sound fair?&quot;</p>
            <p>When they say &quot;sound fair&quot; out loud, the dispute is over before it starts. You&apos;ve converted a future argument into a present agreement, and you&apos;ve done it in under fifteen seconds.</p>


            <h2>The change-order sentence that gets you paid</h2>
            <p>Your exclusions list is only half the shield. It names what&apos;s out; the change-order line names how it gets back in. Add this to your estimate near the exclusions:</p>
            <p>&quot;Any work outside the listed Scope requires a signed change order with agreed price before that work begins. Verbal requests will be confirmed in writing.&quot;</p>
            <p>That sentence does two jobs. It stops clients from adding tasks on the fly and expecting the original number to hold. And it forces you to actually write things down instead of doing the favor and eating the cost. &quot;Verbal requests will be confirmed in writing&quot; means the moment someone asks for more, you text a quick line and a price — and you don&apos;t lift a tool until they reply yes.</p>
            <p>Start on your very next estimate. Add the exclusions block, add the change-order line, and read both out loud before the signature. If you want these built into a proposal your clients can sign from their phone, take a look at the contractor plans.</p>
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
