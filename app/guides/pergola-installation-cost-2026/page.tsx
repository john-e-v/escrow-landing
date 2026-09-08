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
          <div className="hero-badge">Cost &amp; Timeline · September 2026</div>
          <h1>How Much Does a Pergola Cost to Install in 2026?</h1>
          <p className="hero-subtitle">A pergola runs $3,500 to $12,000 installed in 2026, with custom builds pushing well past $20,000. Material choice, size, footing type, and whether you add a shade canopy or louvers move the number more than anything else.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>A pergola costs $3,500 to $12,000 installed in 2026, and custom builds with premium materials or integrated systems routinely push past $20,000. That&apos;s a wide range for what looks like a simple four-post structure — but the gap between the low end and the high end comes down to a handful of decisions you make before anyone starts digging.</p>
            <p>Here&apos;s the honest breakdown: a basic pressure-treated wood pergola in a standard 10x10 or 12x12 size sits at the bottom of that range. A large cedar or aluminum structure with louvered roofing, lighting, and a poured concrete foundation sits at the top. Almost every quote you&apos;ll get lands somewhere in between based on the factors below.</p>


            <h2>Material Is the Biggest Lever</h2>
            <p>Material choice moves your number more than anything else, often by thousands of dollars.</p>
            <p>Pressure-treated pine is the cheapest option, running $15 to $30 per square foot installed. Cedar and redwood — prized for rot resistance and looks — jump to $30 to $50 per square foot. Aluminum and vinyl land in the middle to upper range but cut long-term maintenance to near zero. Then there&apos;s the premium tier: powder-coated aluminum with motorized louvers can run $50 to $100+ per square foot on its own.</p>
            <p>The reason the spread is so dramatic is that material affects everything downstream — heavier materials need beefier footings, hardwoods need more skilled labor to work, and engineered systems like louvered roofs bring their own installation complexity.</p>
            <blockquote className="article-quote">
              People assume a pergola is a pergola. But swapping pine for cedar and adding a louvered roof can literally triple the quote — same footprint, completely different project.
              <cite>— outdoor structures contractor</cite>
            </blockquote>


            <h2>Size, Footings, and Add-Ons</h2>
            <p>Size scales cost predictably: doubling the square footage roughly doubles material and labor. A 10x10 attached pergola is a weekend job; a 20x16 freestanding one is a real build.</p>
            <p>Footing type is the hidden variable. Anchoring posts to an existing patio or deck is fast and cheap. Digging and pouring concrete footings below the frost line — required in colder regions — adds $500 to $2,000 in labor and materials, plus time.</p>
            <p>Add-ons stack quickly. A retractable shade canopy runs $500 to $2,500. Integrated lighting, fans, or power adds $1,000 or more once you factor in an electrician. Louvered or motorized roof panels are the single biggest upgrade, sometimes adding $8,000 to $15,000.</p>


            <h2>Why Region and Timing Matter</h2>
            <p>Where you live changes the number in ways that have nothing to do with the pergola itself.</p>
            <p>Permitting is the first regional wrinkle. Many freestanding pergolas over a certain size — often 200 square feet or attached to the house — require a permit, which can cost $100 to $500 and add weeks to your timeline. Skip it and you risk a stop-work order or fines.</p>
            <p>Labor markets swing hard too. In high-cost metros, skilled carpentry labor alone can be 40% higher than in rural areas. Seasonal demand matters as well — booking in spring means competing with everyone else&apos;s backyard project, while a late-fall install often comes with more negotiating room.</p>
            <p>As for timeline: a straightforward kit install takes one to three days. A custom cedar build with concrete footings and electrical runs one to two weeks, plus lead time on materials and permit approval before work even begins.</p>


            <h2>Getting an Accurate Number</h2>
            <p>The only way to turn this range into a real figure is to get quotes from contractors who&apos;ve actually built in your region, with your material, at your size. A good contractor will walk you through footing requirements and permitting before they give you a price — that&apos;s how you know the quote is real and not a placeholder that balloons mid-project.</p>
            <p>If you&apos;d rather not chase down bids and wonder whether your deposit is safe, you can get matched with vetted pros and keep your money protected until the work is done right.</p>
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
