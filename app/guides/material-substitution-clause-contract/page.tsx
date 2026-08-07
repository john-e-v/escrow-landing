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
          <div className="hero-badge">Contract Clauses · August 2026</div>
          <h1>The Substitution Clause That Lets You Swap Materials Without a Dispute</h1>
          <p className="hero-subtitle">When a spec&apos;d product goes out of stock or triples in price, the wrong contract turns a smart swap into a lawsuit. This clause gives you the written right to substitute equal-or-better materials — and pre-approves how the client signs off.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Copy this into your next contract, in the Materials section, word for word:</p>
            <blockquote className="article-quote">
              MATERIAL SUBSTITUTIONS. Contractor may substitute any specified material, product, or brand with one of equal or greater quality, function, and appearance when the specified item is (a) unavailable within the project schedule, (b) discontinued, or (c) increased in price by more than 10% from the date of this agreement. Contractor will notify Owner in writing (text or email accepted) of the proposed substitution, including product name and price difference, if any. If Owner does not object in writing within 48 hours of notification, the substitution is deemed approved and Owner authorizes Contractor to proceed. Substitutions of equal or lower cost require no price adjustment; substitutions of higher cost that Owner approves will be billed at actual cost difference.
              <cite>— Material Substitution Clause — paste into your contract&apos;s Materials section</cite>
            </blockquote>


            <h2>Why the 48-hour deadline is the whole point</h2>
            <p>Most substitution disputes don&apos;t happen because you swapped the product. They happen because the client claims they never agreed to it — and without a written trigger, you&apos;re stuck waiting on a homeowner who won&apos;t answer the phone while your crew stands idle at $400/day.</p>
            <p>The clause above fixes that with one sentence: silence equals approval after 48 hours. This is called a &quot;deemed approval&quot; term, and it flips the burden. Now the client has to actively object in writing, not just claim confusion later. On your next job, the moment a spec&apos;d item is out of stock, you send one text — &quot;Kohler K-560 faucet is discontinued, substituting the K-596 (same finish, same price), proceeding tomorrow unless you object&quot; — and start a documented clock.</p>


            <h2>Send the notice the right way, every time</h2>
            <p>The clause is only as strong as your notification habit. Do these three things on the very next substitution you make:</p>
            <p>1. Put it in writing — text or email, never a phone call. If you call, follow up with a text summarizing what you discussed.</p>
            <p>2. Name the exact products. &quot;Substituting the spec&apos;d tile&quot; is weak. &quot;Substituting Daltile RV18 for the discontinued RV14, same 12x24 size, same price&quot; is airtight.</p>
            <p>3. State the price impact and the deadline in the same message. &quot;No cost change. Proceeding Thursday unless you reply otherwise.&quot; This one sentence creates the deemed-approval record you&apos;ll want if the client sues over the finished look.</p>


            <h2>The one line that protects your margin</h2>
            <p>Notice the last sentence of the clause: equal-or-lower-cost swaps require no price adjustment. This matters because clients love to argue that a substitution should lower their bill — even when you&apos;re eating a delay to keep them on schedule.</p>
            <p>With this language, a lateral swap is free and clean. An upgrade the client wants gets billed at actual cost difference, documented in the same written notice. You never absorb a price jump you didn&apos;t cause, and you never get accused of padding a substitution.</p>


            <h2>Add one backstop for high-end finishes</h2>
            <p>For projects with visible designer finishes — tile, fixtures, cabinet hardware — add this single line beneath the clause: &quot;For substitutions affecting visible finishes, Contractor will provide a photo or sample before proceeding.&quot; It costs you a two-minute text and it kills the most common substitution lawsuit: &quot;that&apos;s not the color I picked.&quot;</p>


            <p>Paste the clause into your template tonight and it protects every job you sign from here forward — no scrambling, no idle crews, no he-said-she-said when a product vanishes mid-build.</p>
            <p>If you want the full contract these clauses live inside — payment terms, change orders, and dispute protection built for contractors — that&apos;s what we put together next.</p>
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
