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
          <div className="hero-badge">Scope &amp; Payment · July 2026</div>
          <h1>The Contractor &apos;Upgraded&apos; Your Job Without Asking. Now You Owe $6K.</h1>
          <p className="hero-subtitle">A homeowner came home to a tankless water heater she never asked for and a bill $6,200 higher than the quote. The contractor called it an upgrade. She called it unauthorized work. Here&apos;s why she paid anyway, and the structure that would have caught it first.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>The quote said $2,800 to replace a failing 50-gallon tank water heater. The final invoice said $9,000. The difference was a tankless system the homeowner never approved, installed while she was at work.</p>
            <p>She refused to pay the extra $6,200. Eight weeks later, after a mechanic&apos;s lien on her home and a threatened lawsuit, she paid $5,400 in a settlement. The contractor kept his money. She kept a unit she didn&apos;t want.</p>
            <p>Here&apos;s the part nobody warns you about: on paper, she was probably going to lose anyway.</p>


            <h2>What actually happened</h2>
            <p>The original quote was verbal, then confirmed in a text: &quot;Standard 50-gal replacement, $2,800, done Thursday.&quot; No signed change order. No scope document. Just a text thread and a handshake.</p>
            <p>On Thursday, the plumber pulled the old tank and found the venting was out of code. Instead of calling, he made a judgment call — a tankless unit that &apos;solved the problem for good.&apos; Parts and labor ran $9,000. He left the invoice on the counter.</p>
            <p>When she disputed it, he pointed to the code issue and argued the work was necessary. Her problem: she&apos;d already let him remove the old unit, the new one was installed and functioning, and she&apos;d texted &quot;sounds good go ahead&quot; earlier that morning — about the timing, she thought. He read it as authorization.</p>
            <blockquote className="article-quote">
              There was no signed change order, so it came down to two text messages and whose story a judge believed. That&apos;s a coin flip, and coin flips are expensive to argue.
              <cite>— Construction attorney, on unauthorized-scope disputes</cite>
            </blockquote>


            <h2>Why she paid</h2>
            <p>Once labor and materials are physically in your house, you&apos;ve lost most of your leverage. You can&apos;t &apos;return&apos; a tankless heater soldered into your plumbing. The contractor&apos;s argument — necessary work, functioning result, ambiguous consent — was strong enough that her lawyer estimated $8,000–$12,000 to fight it with no guaranteed win.</p>
            <p>The mechanic&apos;s lien made it worse. In her state, an unpaid contractor can file a lien against your property within 90 days. It clouds your title, blocks refinancing, and can force a sale. Fighting a lien is slow and technical. Settling is fast. She settled.</p>
            <p>The math was brutal: pay $5,400 now, or spend $8,000+ to maybe pay less later. She wasn&apos;t wrong to fold.</p>


            <h2>The structure that would have caught it</h2>
            <p>The failure wasn&apos;t the plumber&apos;s judgment. It was that money and work weren&apos;t tied to approval. Payment flowed on completion, not on agreed scope — so scope could change and she&apos;d still owe.</p>
            <p>Milestone-based escrow inverts that. Funds sit with a neutral third party and release only when a defined stage is met. The stage is written down: &apos;50-gallon tank replacement, standard venting, $2,800.&apos; When the plumber hit the code issue, he couldn&apos;t just proceed — there&apos;d be no funded milestone for a $9,000 tankless job. He&apos;d have to stop, propose a change, and get a new milestone approved before touching the escrow.</p>
            <p>That pause is the whole point. It forces the phone call that never happened. &apos;Your venting is out of code — here are three options and prices&apos; becomes a decision instead of a surprise. If she says no, he&apos;s out an hour of diagnosis, not $6,200 of unauthorized install. And because the escrow release is documented, there&apos;s no &apos;he said, she said&apos; over a stray text.</p>
            <p>Escrow doesn&apos;t stop honest surprises during a job. It stops surprises from becoming bills you can&apos;t refuse.</p>


            <p>If you&apos;re about to hand someone a key and a quote, the question isn&apos;t whether your contractor is trustworthy. It&apos;s whether the payment structure lets a good contractor make a bad call on your dime.</p>
            <p>You can hire people who work inside that structure by default.</p>
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
