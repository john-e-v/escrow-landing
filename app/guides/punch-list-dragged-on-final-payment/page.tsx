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
          <div className="hero-badge">Payment Protection · August 2026</div>
          <h1>The Punch List That Never Ends: Why &apos;Almost Done&apos; Costs You Weeks</h1>
          <p className="hero-subtitle">The job was 98% done in March. By June, the punch list had ballooned to 31 items and the homeowner still hadn&apos;t paid the final $8,400. Here&apos;s how open-ended punch lists become a stalling tactic on both sides — and the structure that ends them.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Final payment owed: $8,400. Days since the job hit 98% complete: 94. Punch list items on day one: 6. Punch list items on day 94: 31.</p>
            <p>The kitchen remodel wrapped up in March. Cabinets in, counters set, backsplash tiled, appliances hooked up. The homeowner walked it and found six things: a chipped drawer front, a miscaulked seam, two outlet covers missing, a cabinet door that didn&apos;t sit flush, and a spot where the paint didn&apos;t cover. Reasonable. The contractor agreed to fix all six before collecting the final $8,400.</p>
            <p>That&apos;s where it broke. Because &apos;before final payment&apos; had no definition — no date, no acceptance criteria, no cap on the list — the punch list became the negotiation instead of the closeout.</p>


            <h2>How six items became thirty-one</h2>
            <p>The contractor sent a crew back for the six items in early April. They fixed four. The drawer front replacement was backordered. The flush cabinet door needed a hinge the supplier discontinued. Fine — two open items, no big deal.</p>
            <p>Except now the homeowner had lived in the kitchen for a month. And living in a space is how you find things. The grout looked uneven under the pendant light. A cabinet interior had a scratch. The paint on the ceiling had a roller mark you could only see at 4 p.m. Each new discovery got added to the list, because the list was &apos;the thing that had to be done before payment.&apos;</p>
            <p>By May the contractor stopped returning calls quickly. From his side, the math was ugly: he&apos;d already spent the profit margin sending crews back for touch-ups, and every visit surfaced two new items. Coming back cost him more than the $8,400 was worth to chase. So he slow-walked it. From the homeowner&apos;s side, why release $8,400 when the work clearly &apos;wasn&apos;t finished&apos;? Both sides were now using the punch list as leverage — one to delay payment, one to delay showing up.</p>
            <blockquote className="article-quote">
              An open-ended punch list has no finish line, so both parties keep moving it. The homeowner keeps finding, the contractor keeps stalling, and the money sits frozen in the middle.
              <cite>— construction dispute mediator</cite>
            </blockquote>


            <h2>The real cost wasn&apos;t the $8,400</h2>
            <p>By June the relationship was dead. The homeowner got two quotes from other contractors to &apos;finish&apos; the job — both quoted $2,900 to $3,400, partly because taking over another contractor&apos;s work carries risk premium. The original contractor threatened a mechanic&apos;s lien for his $8,400. The homeowner threatened to withhold and counter-sue for the completion cost.</p>
            <p>Nobody wins that. Best case, they settle somewhere in the middle after each spends a few hundred on legal consults and three months of stress. The kitchen that was 98% done in March is functionally finished the whole time — but emotionally and financially it&apos;s an open wound until roughly Labor Day.</p>


            <h2>What actually ends a punch list</h2>
            <p>The fix is structural, and it has to exist before the punch list starts, not after.</p>
            <p>First: a defined walkthrough date. The punch list is generated once, in a single joint inspection, on a specific day. Items discovered after that date are warranty claims, not payment conditions — a separate track with its own process.</p>
            <p>Second: a dollar figure attached to the punch list, not the whole final payment. If the remaining work is genuinely worth $600 to complete, then $600 stays held — not $8,400. The rest releases on substantial completion.</p>
            <p>This is where milestone-based escrow does the work a handshake can&apos;t. The final payment sits in escrow the moment the job hits substantial completion. A defined punch-list amount — agreed by both parties — is the only thing held back, released automatically when the listed items are signed off. The contractor gets 92% of his money immediately, so he has no reason to stall. The homeowner keeps meaningful leverage sized to the actual remaining work, so &apos;finding one more thing&apos; can&apos;t hold $8,400 hostage. The finish line exists because the money defines it.</p>
            <p>The $8,400 dispute didn&apos;t happen because the work was bad. It happened because nothing in the agreement said when &apos;done&apos; was done. If you&apos;re hiring for a project now, that&apos;s the clause worth solving before the first nail goes in.</p>
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
