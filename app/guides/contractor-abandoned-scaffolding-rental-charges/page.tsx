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
          <h1>The Contractor Left Rented Scaffolding On Your Job. Now the Rental Company Wants You to Pay.</h1>
          <p className="hero-subtitle">A stucco crew walked off a two-story job and left the rented scaffolding standing for six weeks. When the rental company came calling, the unpaid $3,400 tab landed on the homeowner. Here&apos;s why, and the payment structure that would have stopped it.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>The homeowner paid the stucco contractor $18,000 and still ended up on the hook for a $3,400 scaffolding bill they never signed for.</p>
            <p>Here&apos;s what happened. A two-story exterior stucco job in the suburbs — reasonable scope, mid-range budget. The contractor rented aluminum scaffolding from a local equipment company to reach the second story. Standard practice. The rental was set up on a weekly rate, billed to the contractor&apos;s account, roughly $560 a week for the full perimeter frame.</p>
            <p>The crew got the first coat on, then went quiet. Weather delays, they said. Then a bigger job across town. Then nothing. The scaffolding stood against the house for six weeks while the homeowner chased phone calls that went to voicemail. Eventually the contractor stopped responding entirely.</p>
            <p>The rental company, meanwhile, was billing week after week — and the contractor wasn&apos;t paying. Around week seven, a truck showed up to reclaim the equipment. The driver handed the homeowner a past-due invoice for $3,400.</p>


            <h2>Why the bill landed on the homeowner</h2>
            <p>The homeowner&apos;s first instinct was correct: &quot;I never rented this. I have no contract with you.&quot; And technically, they were right. The rental agreement was between the equipment company and the contractor.</p>
            <p>But two things worked against them. First, the equipment was sitting on their property, benefiting their project, and in some jurisdictions an equipment lien can attach to the property where the rented goods are installed or used — the same legal machinery that lets a subcontractor place a mechanic&apos;s lien. Second, the contractor was, for all practical purposes, gone. Uncollectible. When the party who signed the contract vanishes, the collection effort rolls downhill to whoever is still reachable and still owns something worth liening.</p>
            <blockquote className="article-quote">
              When the contractor disappears, you don&apos;t inherit their debt on paper — you inherit it in practice, because you&apos;re the only one left standing next to the property.
              <cite>— construction attorney, on third-party equipment liens</cite>
            </blockquote>


            <h2>The real failure was in the payment structure</h2>
            <p>The homeowner had already paid $18,000 up front and at the halfway point — most of the contract value — before the job was anywhere near complete. That&apos;s the trap. Once a contractor holds more money than the work justifies, they have every incentive to chase the next deposit somewhere else and no incentive to finish yours. The abandoned scaffolding wasn&apos;t a freak event. It was the predictable result of a contractor who&apos;d already been paid for work they hadn&apos;t done.</p>
            <p>If the payments had been tied to verified milestones — scratch coat complete, brown coat complete, finish coat and site cleanup complete — the contractor would have been owed money they hadn&apos;t collected yet. Money is the only thing that reliably pulls a crew back to a stalled job. A contractor who&apos;s still owed $6,000 does not leave rented scaffolding standing for six weeks. They come back, finish, remove their equipment, and get paid.</p>


            <h2>What escrow would have changed</h2>
            <p>With funds held in escrow and released per milestone, the homeowner controls the leverage instead of handing it away at signing. The final release — including site cleanup and removal of rented equipment — stays pending until the job is genuinely done. The contractor can&apos;t walk away from money they haven&apos;t been given yet, and the equipment company never gets a reason to come knocking on the wrong door.</p>
            <p>The $3,400 wasn&apos;t the cost of scaffolding. It was the cost of paying in advance for accountability that hadn&apos;t been earned. A milestone escrow structure doesn&apos;t just protect your budget — it keeps the people who are supposed to finish your job financially motivated to actually finish it.</p>
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
