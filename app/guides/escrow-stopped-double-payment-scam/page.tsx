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
          <div className="hero-badge">Escrow Effect · August 2026</div>
          <h1>The Contractor Asked for a Wire &apos;Straight to the Supplier.&apos; Escrow Meant the Homeowner Didn&apos;t Bite.</h1>
          <p className="hero-subtitle">A homeowner mid-remodel got a call: wire $18K directly to the tile supplier to &apos;lock in pricing before it goes up.&apos; Because every dollar was already staged in escrow, there was nothing to wire—and no way to lose it to a redirect scam.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$18,000, requested by phone, to be wired to an account the homeowner had never seen before. The verdict on that request was simple: it never happened, because there was nothing to send.</p>
            <p>Here&apos;s the setup. A homeowner in the middle of a kitchen-and-bath remodel—about six weeks in, tile phase just starting—got a call one afternoon. The voice on the line sounded like the project coordinator she&apos;d been emailing for a month. Friendly, specific, referenced her actual tile selection by name. The pitch: the supplier was raising prices Monday, and if she wired $18K straight to them today, she&apos;d lock in the current rate and save herself a real chunk of money. Routing number, account number, ready to text over.</p>
            <p>It was a redirect scam. The email thread had been compromised somewhere upstream, the caller had enough real project detail to sound legitimate, and the account belonged to no supplier at all.</p>


            <h2>Why the request went nowhere</h2>
            <p>The reason she didn&apos;t lose the money isn&apos;t that she was suspicious. She wasn&apos;t, particularly. The tile line item was real. The price-increase story was plausible. On a normal job, a homeowner who trusted her contractor would have had every reason to send it.</p>
            <p>The reason it went nowhere is that on this job, the money was already staged in escrow before work began. The full budget—material costs, labor, the tile allowance, all of it—had been funded up front and held. Payments released against milestones as they were confirmed, not against phone calls.</p>
            <p>So when the caller asked her to wire $18K &quot;straight to the supplier,&quot; the honest answer was that she couldn&apos;t. Her checking account wasn&apos;t the funding source for the project. The tile money was sitting in escrow, earmarked, waiting for the milestone that would release it to the contractor of record—the one already on file—who would then pay his own supplier the way he always had.</p>
            <blockquote className="article-quote">
              I told him I&apos;d have to check whether that was even possible, and the second I said &apos;it&apos;s in escrow, I can&apos;t just wire it,&apos; the whole call changed. He got off the phone fast.
              <cite>— the homeowner, recounting the call</cite>
            </blockquote>


            <h2>The failure that didn&apos;t happen</h2>
            <p>Play out the version without escrow. She has a checking account with money in it for the remodel. A trusted-sounding voice gives her a real reason and a real-looking account. She wires it. By the time the actual contractor mentions he never asked for that, the money has moved through two accounts and out of the country. That&apos;s not a rare story—wire redirect fraud on construction and real-estate payments runs into the billions annually, and homeowners mid-project are prime targets because the payments are large, expected, and emotionally loaded.</p>
            <p>Escrow didn&apos;t stop the scam call. Nothing stops the call. What it stopped was the ability to act on it. There was no loose pool of money sitting in a personal account for a good story to pry loose. Every dollar had a defined path—funded, held, released on confirmation—and a phone call wasn&apos;t on that path.</p>


            <h2>The quieter benefit</h2>
            <p>The contractor liked it too, once the dust settled. His email had been the compromised link, and if his client had wired money to a scammer using his identity, that&apos;s a mess that lands on his reputation no matter who&apos;s technically at fault. Because the structure made the redirect impossible, he never had to have the conversation that starts with &quot;I never sent you that.&quot;</p>
            <p>Staging every dollar before the first swing of the hammer isn&apos;t about distrust. It&apos;s about making sure that the only way money moves is the way everyone already agreed it would—so that a convincing voice on a Tuesday afternoon has nothing to grab.</p>
            <p>If you&apos;re about to start a project and you&apos;d rather the money have a fixed path than a checking account someone can talk you out of, that&apos;s the setup worth building before work begins.</p>
          </div>

          <div className="article-footer">
            <Link href="/guides" className="article-back">← Back to Guides</Link>
            <a href="/create" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>Stage your project in escrow at clrblt.com/create →</a>
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
