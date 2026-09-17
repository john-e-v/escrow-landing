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
          <div className="hero-badge">Hidden Cost · September 2026</div>
          <h1>The Cabinets Were &apos;Custom&apos; on the Invoice — But Stock on the Wall</h1>
          <p className="hero-subtitle">A homeowner paid a custom-cabinet line item and got big-box stock boxes with a face-frame upgrade. The $9,400 gap only surfaced at final walkthrough. Here&apos;s how vague material specs let contractors bill up while installing down.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$9,400. That&apos;s the gap between what the invoice said and what got screwed to the wall.</p>
            <p>The line item read &quot;Custom cabinetry — cherry, full-overlay, soft-close, jobsite-finished.&quot; The homeowner initialed it, wired the deposit, and moved out for the six-week kitchen remodel. What they came home to at final walkthrough was a run of big-box stock boxes — 30&quot;, 36&quot;, and 12&quot; fillers straight off the shelf — dressed up with an aftermarket face-frame kit and a stain that didn&apos;t match the sample.</p>
            <p>The contractor&apos;s defense was clean: &quot;They&apos;re custom to your kitchen. We cut the fillers, we hung them to your layout, we finished them here.&quot; Technically true on the finishing. Materially false on everything the word &apos;custom&apos; implies at that price.</p>
            <blockquote className="article-quote">
              I paid for cabinets built for my kitchen. I got cabinets built for nobody&apos;s kitchen and modified for mine. The invoice never used the word &apos;stock&apos; once — that&apos;s how they got away with it.
              <cite>— homeowner, kitchen remodel</cite>
            </blockquote>


            <h2>Why the gap survived until walkthrough</h2>
            <p>Custom cabinetry from a shop runs $500–$1,200 per linear foot. Stock boxes with a face-frame upgrade land around $150–$300 per linear foot installed. On a 22-foot kitchen, that spread is exactly the $9,400 that vanished.</p>
            <p>The reason it surfaced at the end and not week one is structural. The cabinet allowance was buried inside a lump-sum &quot;kitchen package&quot; of $41,000. No brand. No door style number. No shop drawing. No delivery ticket to inspect. The homeowner had nothing to check the boxes against until they were already hung — at which point the labor to rip and replace made walking away more expensive than eating the loss.</p>
            <p>Contractors who bill up and install down count on this timeline. The upgrade language goes in the contract; the downgrade goes in the truck; the difference gets invisible the moment the first screw goes in.</p>


            <h2>What would have caught it</h2>
            <p>Three things, none of them exotic.</p>
            <p>First: a spec with a name. &quot;Custom&quot; is not a spec. A manufacturer, a door style, a species, and a finish code are a spec. If the contractor won&apos;t name the cabinet line in writing, that&apos;s the answer.</p>
            <p>Second: shop drawings or an order confirmation before deposit release. Real custom cabinets generate paperwork — a signed shop drawing, a factory order number, a lead-time you can call and verify. Stock-with-a-facelift generates a receipt from a warehouse.</p>
            <p>Third, and the one that actually holds: tie payment to verified delivery, not to the calendar. This is where milestone escrow does the work a signature can&apos;t. Instead of wiring the full cabinet allowance on a start date, the funds sit in escrow and release when the material milestone is confirmed — the right boxes, on site, matching the named spec. If cherry full-overlay was promised and stock oak showed up, the release simply doesn&apos;t happen. The $9,400 stays put, and the leverage stays with the person who paid it.</p>
            <p>Signatures protect the paperwork. Escrow protects the money — and money held is the only leverage a homeowner has once the crew is already inside the walls.</p>


            <p>The homeowner in this case had a clean contract and a clear conscience and still lost five figures, because the contract measured intent and nobody measured delivery. A milestone hold would have turned &quot;trust me, they&apos;re custom&quot; into &quot;show me, then get paid.&quot;</p>
            <p>If you&apos;re about to release a big material allowance on a single word, put the release on the other side of the delivery instead.</p>
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
