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
          <div className="hero-badge">Job Gone Wrong · August 2026</div>
          <h1>The Contractor Poured the Slab in the Wrong Spot. Then Billed You to Move It.</h1>
          <p className="hero-subtitle">A garage slab poured three feet off the property line became a $19K problem the homeowner got billed twice for. Here&apos;s why the mistake happened, who legally owned it, and the payment structure that would have kept the money on the table until it was fixed.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>The slab was poured three feet over the side setback line. The homeowner paid $9,400 to have it demolished and re-poured — then got a second invoice from the same contractor for the redo. Total exposure: just over $19,000, on a detached garage that was supposed to cost $31,000 to build.</p>
            <p>Here&apos;s how it happened, and why the person who made the mistake still expected to get paid for fixing it.</p>


            <h2>What Actually Happened</h2>
            <p>The contractor staked the garage off the existing fence line instead of the surveyed property pins. That&apos;s the whole mistake. The fence had been installed by a previous owner roughly a foot inside the actual boundary, and nobody checked. Foundation forms went up, inspector wasn&apos;t scheduled until after the pour, and 14 yards of concrete went in on a Tuesday.</p>
            <p>The city flagged it during the footing inspection the following week — the structure encroached on the required 5-foot side setback. No variance, no exceptions. The slab had to come out.</p>
            <p>The demolition, disposal, re-staking, new forms, and second pour ran $9,400. The contractor completed the work, then submitted an invoice for the re-pour &quot;as a change to scope&quot; — arguing the original contract was fulfilled when he poured the first slab, and this was new labor.</p>
            <blockquote className="article-quote">
              He told me the first pour was &apos;done correctly per the plans I was given.&apos; The plans didn&apos;t say where the property line was. That was his job to verify.
              <cite>— Homeowner, residential garage build</cite>
            </blockquote>


            <h2>Who Actually Owned It</h2>
            <p>Legally, the contractor did. Setting the building location is part of the contractor&apos;s standard of care — verifying setbacks against the survey, not the fence, is a baseline duty in almost every residential build. A small claims judge agreed and denied the second invoice. The homeowner recovered the demolition cost too.</p>
            <p>But here&apos;s the part nobody tells you: winning took four months. During that time the homeowner had already paid the second invoice under threat of a mechanic&apos;s lien, because the contractor still held the rest of the job hostage. The judgment came after the money was gone. Collecting it back meant a second process entirely — and the contractor&apos;s LLC had already thinned out.</p>
            <p>Being right cost almost as much as being wrong.</p>


            <h2>The Structural Fix</h2>
            <p>The mistake wasn&apos;t unpreventable — but the loss was. The problem wasn&apos;t the misplaced slab. It was that money moved before the work was verified.</p>
            <p>Under a milestone escrow arrangement, the foundation payment doesn&apos;t release until the footing inspection passes. The inspector&apos;s flag would have stopped the payout automatically. The contractor would have re-poured to get paid — not billed a second time to get paid twice. The cost of his error would have stayed his, because the funds were still on the table when the error surfaced.</p>
            <p>Escrow doesn&apos;t prevent mistakes. Concrete gets misplaced regardless. What it changes is who&apos;s holding the money when the mistake is discovered. When payment is tied to a passed inspection instead of a completed pour, the incentive flips: the person who made the error is motivated to fix it correctly, not to relabel it as new scope.</p>
            <p>The $19,000 wasn&apos;t the price of a bad contractor. It was the price of paying for work before anyone confirmed it was done right.</p>
            <p>If you&apos;re about to break ground on anything with an inspection between you and completion, the payment structure matters as much as the crew. Tie the money to the milestone, and the wrong-spot slab becomes the contractor&apos;s problem — which is exactly where it belongs.</p>
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
