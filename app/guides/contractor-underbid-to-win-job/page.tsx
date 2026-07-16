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
          <div className="hero-badge">Hidden Cost · July 2026</div>
          <h1>The Lowball Bid That Cost You $14K: Why the Cheapest Quote Wins the Job and Loses the Budget</h1>
          <p className="hero-subtitle">The lowest bid isn&apos;t a discount—it&apos;s a down payment on future change orders. Here&apos;s how a $38K kitchen quote became $52K, and the one structural fix that would have exposed the gap before you signed.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>The kitchen came in at $52,400. The signed contract said $38,000.</p>
            <p>Nobody stole anything. No one broke a law. The homeowner picked the lowest of three bids, the contractor did the work, and fourteen thousand dollars appeared out of nowhere across six weeks. This is a postmortem on why that happens, and why it wasn&apos;t bad luck.</p>
            <p>The three bids were $38K, $46K, and $49K. Two contractors landed within $3K of each other. One was eight grand under. That spread wasn&apos;t a discount. It was a signal—and it got read exactly backwards.</p>


            <h2>What the low bid actually leaves out</h2>
            <p>A complete bid for a mid-range kitchen remodel prices the things that go wrong, because they always go wrong. The $46K and $49K bids included allowances for subfloor repair, electrical upgrades to code, and cabinet installation contingency. The $38K bid priced the visible scope and nothing else.</p>
            <p>Here&apos;s how the gap filled in:</p>
            <p>Week 2: Demo exposed water damage under the old dishwasher. Subfloor replacement—$2,800 change order. The competing bids had carried a $2,000 contingency for exactly this. The low bid carried zero.</p>
            <p>Week 3: The panel couldn&apos;t handle the new induction range and microwave circuit. Code required an upgrade. $4,100. The two higher bids had flagged the panel during the walkthrough. The low bidder hadn&apos;t looked.</p>
            <p>Week 4: Cabinets arrived. The &apos;included&apos; installation was framing only—countertop template, backsplash, and trim were billed separately. $3,600.</p>
            <p>Week 6: &apos;Finish carpentry and adjustments,&apos; $3,900. Nobody could itemize it and the homeowner had no leverage left to ask.</p>
            <p>$38,000 + $2,800 + $4,100 + $3,600 + $3,900 = $52,400.</p>
            <blockquote className="article-quote">
              The cheapest quote isn&apos;t a price. It&apos;s a bet that you won&apos;t notice what&apos;s missing until the walls are open.
              <cite>— General contractor, 20 years, on why he stopped bidding against lowballers</cite>
            </blockquote>


            <h2>Why the incentive runs this direction</h2>
            <p>A contractor who bids low to win the job has to make the margin back somewhere. The only lever left after signing is the change order—and change orders are negotiated from the worst possible position: your project is half-demolished, your kitchen is unusable, and the guy holding the wrench knows you can&apos;t easily bring in someone else.</p>
            <p>This isn&apos;t villainy. It&apos;s structure. When the entire payment is a lump sum against a vague scope, every discovered problem becomes a renegotiation, and every renegotiation favors the person who already has your money and your torn-up house.</p>


            <h2>The fix: tie money to milestones, not to signatures</h2>
            <p>The $14K didn&apos;t appear because the contractor was dishonest. It appeared because payment was decoupled from defined, verifiable stages of work. Fix that and the lowball bid exposes itself before you sign.</p>
            <p>Milestone-based escrow forces the scope to be itemized up front, because funds only release when a specific, agreed deliverable is complete—rough-in inspection passed, cabinets set and level, final walkthrough signed off. A contractor who wants escrow milestones has to define what &apos;done&apos; means at each stage. A lowball bid can&apos;t survive that conversation. The subfloor contingency, the panel upgrade, the finish carpentry—all of it has to be named and priced to fit into a milestone, or it has nowhere to hide.</p>
            <p>Had this homeowner required milestone escrow, the missing electrical scope would have surfaced during the first milestone definition, not during week 3 with the panel already opened. The $38K bid would have either grown to match the real scope—revealing it was never $8K cheaper—or the contractor would have walked, which is the same information delivered before demolition instead of after.</p>
            <p>The lowest number on the page is only a deal if it&apos;s the number you actually pay. Make the payment structure prove the bid before you commit to it.</p>
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
