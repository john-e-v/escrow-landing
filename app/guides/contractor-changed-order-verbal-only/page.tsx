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
          <div className="hero-badge">The Hidden Cost · August 2026</div>
          <h1>The Change Order That Was Never Written Down: Why You&apos;re Paying for a Handshake</h1>
          <p className="hero-subtitle">A verbal &apos;yeah, we can add that&apos; on the jobsite turned into a $7,200 line item nobody remembers agreeing to. Here&apos;s how undocumented change orders quietly rewrite your budget — and the structure that stops it.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$7,200. That&apos;s what the final invoice claimed for &quot;additional scope&quot; on a bathroom remodel that started at $34,000. The homeowner had approved a $34,000 written contract. The check they were being asked to write was for $41,200. Nobody could produce a single document showing where the extra number came from.</p>
            <p>Here&apos;s what actually happened. Three weeks into demo, the crew opened the wall behind the vanity and found rot around the old plumbing stack. The lead carpenter walked the homeowner through it — pointed at the damage, said &quot;we can fix this while we&apos;re in here, it&apos;s the right call.&quot; The homeowner said &quot;yeah, do it.&quot; That was the entire transaction. A pointed finger and a yeah on a Tuesday morning.</p>
            <p>That &apos;yeah&apos; became re-framing the wet wall, replacing 6 feet of stack, a new access panel, and roughly nine hours of labor across two trades. All real work. All arguably necessary. None of it priced, initialed, or written down at the moment it was agreed to.</p>


            <h2>Why the number always shows up at the end</h2>
            <p>Undocumented change orders don&apos;t get cheaper with time — they get vaguer. When the conversation happens mid-demo, the contractor is thinking about the wall, not the math. The price gets assembled weeks later from memory, notes, and whatever the accounting side thinks the labor was worth. By then the homeowner remembers agreeing to &quot;fixing the rot,&quot; not to $7,200.</p>
            <p>Both sides are usually telling the truth. The carpenter genuinely did the work. The homeowner genuinely didn&apos;t agree to a number, because no number existed to agree to. The dispute isn&apos;t about honesty — it&apos;s about the gap between when the work was authorized and when it was priced.</p>
            <blockquote className="article-quote">
              The homeowner approved the problem. They never approved the invoice. Those are two completely different signatures, and only one of them existed.
              <cite>— construction mediator, on verbal scope disputes</cite>
            </blockquote>


            <h2>What the timeline actually looked like</h2>
            <p>Tuesday, week 3: rot discovered, verbal &apos;yeah, do it.&apos;</p>
            <p>Weeks 3–5: work performed, homeowner sees progress, assumes it&apos;s folded into the original price or a minor add.</p>
            <p>Week 6: final invoice arrives with a $7,200 line reading &quot;additional scope — plumbing/framing.&quot;</p>
            <p>Week 6, one hour later: the argument starts.</p>
            <p>The entire problem lives in the empty space between the Tuesday handshake and the week-6 invoice. Five weeks passed with money being spent that neither party had put a value on. On a fixed-price job, that space is where budgets go to die.</p>


            <h2>The structural fix</h2>
            <p>A verbal approval is not a change order. A change order is a signed, priced amendment authorized *before* the work happens — a one-paragraph document that says: here&apos;s the added scope, here&apos;s the cost, here&apos;s your initials, here&apos;s the new contract total. Sign it on a phone in the driveway if you have to. The point is that the number exists at the moment of the yes, not five weeks later.</p>
            <p>The cleaner version of this is milestone-based escrow. When funds are released against defined stages instead of a single end-of-job invoice, a new $7,200 line item can&apos;t quietly slip through — it has to become its own funded milestone, with its own approval, before anyone touches the wall. The structure forces the pricing conversation to happen up front, because there&apos;s no lump sum at the end to hide it in. The change order stops being a memory and becomes a step.</p>
            <p>Work gets discovered mid-job on almost every renovation. That&apos;s normal. What isn&apos;t normal — or survivable for your budget — is finding out what it cost after it&apos;s already done. The right contractor prices the surprise before they swing the hammer. The right payment structure makes that the only option they have.</p>
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
