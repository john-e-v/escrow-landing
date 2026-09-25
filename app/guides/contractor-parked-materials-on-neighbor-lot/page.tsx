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
          <div className="hero-badge">Job Site Risk · September 2026</div>
          <h1>The Contractor Stockpiled Materials on the Wrong Lot. The Neighbor Wants Them Gone.</h1>
          <p className="hero-subtitle">A siding crew unloaded three pallets of material onto the vacant lot next door to save a few steps. Two weeks later the neighbor&apos;s attorney sent a trespass notice, and the homeowner was the one holding the bill. Here&apos;s how staging on land you don&apos;t control becomes your problem.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$4,200. That&apos;s what the homeowner paid to a neighbor&apos;s attorney to make a trespass claim go away — a claim that started with three pallets of fiber cement siding stacked on a vacant lot the homeowner did not own.</p>
            <p>The siding crew showed up on a Tuesday. The driveway was tight, the delivery truck was big, and the empty lot next door had a flat gravel pad right off the road. The foreman made a field decision: unload there, stage the material, carry it over as the job progressed. It saved maybe forty minutes of maneuvering. Nobody asked the homeowner. Nobody asked the lot owner. The material sat.</p>


            <h2>How a shortcut became a liability</h2>
            <p>The vacant lot wasn&apos;t abandoned. It belonged to a developer holding it for a spec build, and the developer&apos;s property manager drove past every week. Two weeks into the job, the pallets were still there — plus a cut station, plus a pile of scrap, plus tire ruts in the gravel from the crew&apos;s truck.</p>
            <p>The property manager photographed all of it and sent it to counsel. The trespass notice arrived at the homeowner&apos;s address, not the contractor&apos;s, because the homeowner&apos;s building permit was public record and the pallets had a delivery ticket with the job address stapled to the shrink wrap. The letter demanded removal within 72 hours and reserved the right to bill for &apos;unauthorized occupancy and site restoration.&apos;</p>
            <p>The homeowner called the contractor. The contractor said it was a misunderstanding and he&apos;d &apos;talk to the guy.&apos; He did not talk to the guy. The 72 hours passed. The developer&apos;s attorney sent a second letter with a number attached: $3,000 in occupancy fees plus $1,200 to regrade the gravel pad the truck had chewed up.</p>
            <blockquote className="article-quote">
              The pallets had our client&apos;s job address on the delivery ticket. As far as the property owner was concerned, the homeowner directed the trespass. Proving the contractor acted alone is a separate lawsuit nobody wants to fund.
              <cite>— Real-property attorney familiar with the dispute</cite>
            </blockquote>


            <h2>Why the homeowner was the one holding the bill</h2>
            <p>Here&apos;s the part nobody explains before it happens: liability follows the paper trail, and the paper trail pointed at the person whose name was on the permit. The contractor was judgment-proof-adjacent — a two-truck operation with no meaningful assets to chase. The developer&apos;s attorney knew that in five minutes. So he pursued the homeowner, who had a house, equity, and a strong incentive to pay quickly and quietly.</p>
            <p>The homeowner paid the $4,200, then tried to deduct it from the contractor&apos;s final invoice. The contractor had already been paid 70% up front. There wasn&apos;t enough left in the contract to cover the loss. The homeowner ate roughly $2,800 of it and spent another month arguing over the rest.</p>
            <p>The staging shortcut cost the homeowner more than the crew saved in the entire time they were on site.</p>


            <h2>What would have actually prevented it</h2>
            <p>Two things. First, a contract clause requiring all materials to be staged on the client&apos;s property or a location with written permission from the owner — with the contractor indemnifying the client for any staging outside those bounds. That shifts the paper trail back where it belongs.</p>
            <p>Second, and more practically: don&apos;t pay 70% before material is where it&apos;s supposed to be. The reason the homeowner couldn&apos;t claw the money back is that it was already gone. When payment is released against completed, verified milestones — material delivered and staged correctly, then installed, then finished — the client keeps leverage. A contractor who has money still owed to him fixes his own trespass problem, because his final payment depends on the site being clean and the client being whole.</p>
            <p>Escrow-based milestone payment doesn&apos;t prevent a bad field decision. It prevents that decision from becoming money you can&apos;t get back. When funds sit in escrow and release only against verified progress, the cost of a shortcut lands on the person who took it — not the person who signed the permit.</p>
            <p>If you want the payment structure working for you instead of against you, start with contractors who already agree to it.</p>
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
