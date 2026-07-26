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
          <div className="hero-badge">Payment Ops · July 2026</div>
          <h1>Trade the Lien Waiver for the Final Check, Not Before</h1>
          <p className="hero-subtitle">Never sign a lien waiver until the final payment has actually cleared. This guide shows you how to sequence the waiver-for-payment exchange so you don&apos;t give up your leverage and your legal recourse in the same breath.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>The rule is one line: no signed lien waiver leaves your hands until the payment it covers has cleared your account. Not &quot;the check is in the mail.&quot; Not &quot;we cut it this morning.&quot; Cleared.</p>
            <p>Most contractors get this backwards. The GC or owner asks for a signed final waiver before they&apos;ll release the final check — and because you want to get paid, you sign it, hand it over, and wait. The problem is that the moment you sign, you&apos;ve traded away the single most powerful collection tool you have: your right to lien the property. Now you&apos;re an unsecured creditor chasing a check with nothing behind you but a phone and a grudge.</p>


            <h2>Why the sequence is the whole game</h2>
            <p>A lien waiver is a receipt. It says &quot;I&apos;ve been paid, and I give up my claim for this amount.&quot; When you sign it before the money moves, you&apos;re signing a receipt for money you haven&apos;t received. If the payment stalls, bounces, or gets &quot;lost in accounting,&quot; you&apos;ve already surrendered the leverage that would have made them pay in the first place.</p>
            <p>The waiver and the payment are supposed to be a simultaneous exchange — waiver for check, at the same instant. On a jobsite that rarely happens cleanly. So the default should always tilt in your favor: payment first, waiver second. If they insist on waiver-first, you&apos;re being asked to extend unsecured credit to a stranger on their word alone.</p>
            <blockquote className="article-quote">
              The lien is the only reason a lot of these payments show up at all. Sign the waiver early and you&apos;ve fired your only weapon before the fight starts.
              <cite>— construction attorney, on final-payment disputes</cite>
            </blockquote>


            <h2>How to sequence it without stalling the job</h2>
            <p>Use conditional waivers for progress payments. A conditional waiver only takes effect once payment actually clears — so you can hand it over on schedule without giving up your rights if the money doesn&apos;t land. Save the unconditional waiver for after each payment has settled. Most states have statutory forms for exactly this; use them and stop drafting your own.</p>
            <p>For the final payment, tighten it further. Deliver a signed conditional final waiver so the closing can proceed, and release the unconditional final waiver only once the funds have cleared. The GC gets their paperwork, the owner gets their release on the right trigger, and you never end up holding a signed receipt against an empty account.</p>


            <h2>The structural fix: hold the money, not the promise</h2>
            <p>The cleaner solution is to take the trust question off the table entirely. Instead of exchanging paper for a promise, you route the final payment through a milestone-based escrow arrangement. The funds are deposited and held before you finish the work. When the milestone is verified as complete, the release of the money and the release of the waiver are tied to the same event — automatically, not manually, and not dependent on either party&apos;s mood that week.</p>
            <p>This is the version of &quot;simultaneous exchange&quot; that actually works, because a neutral third party is holding the cash. You&apos;re no longer chasing a check after signing away your lien; the check already exists, it&apos;s already funded, and it moves the moment the condition is met. Your recourse and your payment are locked to the same trigger, so you can never lose one while surrendering the other.</p>
            <p>If you&apos;ve ever signed a final waiver and then spent three weeks calling accounts payable, you already understand why this matters. The fix isn&apos;t better follow-up. It&apos;s structuring the deal so the money is committed before you give up your claim to it.</p>
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
