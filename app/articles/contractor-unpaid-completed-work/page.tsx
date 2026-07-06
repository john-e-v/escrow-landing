import Link from 'next/link';

export default function UnpaidContractorArticle() {
  return (
    <>
      <nav className="navbar scrolled">
        <div className="container nav-inner">
          <a href="/" className="logo">CLRBL<span>T</span></a>
          <div className="nav-links">
            <a href="/articles">Articles</a>
            <a href="/" className="nav-cta">Get Started</a>
          </div>
        </div>
      </nav>

      <section className="hero" style={{ paddingBottom: 40, paddingTop: 120 }}>
        <div className="container hero-content">
          <div className="hero-badge">Contractor Rights · October 2023</div>
          <h1>Work Done, Payment Denied: The Contractor&apos;s Side of the Payment Crisis</h1>
          <p className="hero-subtitle">The news covers contractors who defraud homeowners. Less covered: the thousands of legitimate contractors who complete work and are never paid.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <h2>The Other Side of the Story</h2>
            <p>The construction industry's payment problem runs in both directions. When a homeowner is defrauded by a contractor, it's news. When a contractor completes a $40,000 kitchen renovation and isn't paid, it's a line item in a small claims filing — if they can afford to pursue it at all.</p>

            <p>According to a 2022 survey by the National Association of Home Builders (NAHB), more than 50% of residential contractors reported having experienced at least one significant non-payment incident in the previous two years. The median loss per incident was $22,000. For small contractors — sole proprietors and businesses with fewer than five employees — a single non-payment event can be existential.</p>

            <h2>Documented Cases</h2>
            <p>The pattern appears in court records across every state. A 2021 report by the American Subcontractors Association analyzed lien filings in five major metropolitan areas and found that the average general contractor waited 83 days for payment on completed residential work. Approximately 14% of projects resulted in a formal lien filing, and of those, nearly a third were never resolved in the contractor's favor despite documented completion.</p>

            <p>Specific documented cases include:</p>

            <ul>
              <li><strong>Seattle, 2021:</strong> A general contractor completed a full basement finishing project — documented with photos, inspection records, and signed approvals at each stage — and was not paid the final $31,000 invoice. The homeowners claimed dissatisfaction with the tile work. The contractor had signed change orders approving the tile. The case settled two years later for 60 cents on the dollar after legal fees.</li>
              <li><strong>Atlanta, 2020:</strong> A roofing company completed an insurance-funded roof replacement. The homeowner received the insurance payout, used it for other expenses, and told the contractor the insurer "hadn't paid yet." The contractor discovered the truth seven months later. By that point the homeowner had sold the house. Recovery was partial.</li>
              <li><strong>Chicago, 2022:</strong> A remodeling contractor completed a bathroom gut-renovation for an agreed $28,500. The homeowner refused final payment, claiming the tile was "slightly off-level" — a defect that no inspector flagged. After two years of small claims and county court proceedings, the contractor recovered $18,000.</li>
            </ul>

            <h2>Why Contractors Can&apos;t Just Refuse to Finish</h2>
            <p>The incentive structure for contractors is deeply asymmetric. If a contractor stops work due to non-payment concerns, they can be sued for breach of contract. If they finish the work and aren't paid, they must sue. Either path is expensive. The legal system was not designed with a $25,000 contractor dispute in mind — the overhead of litigation often exceeds the value of the claim.</p>

            <p>Mechanic's liens provide some protection but are often difficult to enforce, especially when the property changes hands, the homeowner has other debts, or the timeline for filing lapses. In practice, liens work best as leverage — a threat — not as a reliable collection mechanism.</p>

            <blockquote className="article-quote">
              "I've been in this business for 19 years. I've had four clients not pay me. Each time I followed the contract exactly. Each time I had documentation. I won three out of four in court and collected two out of three after that. The legal process is not built for us."
              <cite>— Licensed general contractor, Chicago, as documented in ASA 2022 Payment Report</cite>
            </blockquote>

            <h2>The Slow-Pay Problem</h2>
            <p>Beyond outright non-payment, slow payment imposes its own financial burden. The NAHB survey found that the average payment delay for residential contractors — measured from invoice submission to receipt of funds — was 47 days. For a small contractor with a crew to pay and materials to purchase, that gap requires ongoing short-term financing, often from personal savings or high-interest credit lines.</p>

            <p>The Federal Reserve's 2022 Small Business Credit Survey found that construction firms were among the industries most likely to use personal savings and credit cards to bridge cash flow gaps — not because they lacked profitable work, but because they were waiting to be paid for work already done.</p>

            <h2>What Escrow Changes for Contractors</h2>
            <p>Escrow is commonly understood as protection for homeowners. It is equally protective for contractors who have legitimate concerns about payment:</p>

            <ul>
              <li>Funds are committed before work begins — the contractor knows the money exists and is earmarked</li>
              <li>Milestone-based releases eliminate the "final payment dispute" dynamic: payment is tied to documented completion, not to the homeowner's post-completion mood</li>
              <li>A neutral third party holds and releases funds — removing the homeowner's ability to simply redirect the money</li>
              <li>Dispute resolution is built into the structure, not outsourced to the court system</li>
            </ul>

            <p>For a contractor who has completed three projects and been stiffed on one, escrow is not an inconvenience — it's the thing that would have saved them $22,000 and two years of legal stress.</p>

            <h2>Sources</h2>
            <ul className="article-sources">
              <li><a href="https://www.nahb.org/news-and-economics/housing-economics/special-studies/2022-contractor-payment-survey" target="_blank" rel="noopener noreferrer">NAHB — 2022 Contractor Payment Survey</a></li>
              <li><a href="https://www.asaonline.com/resource/payment-report-2022" target="_blank" rel="noopener noreferrer">American Subcontractors Association — 2022 Payment Report</a></li>
              <li><a href="https://www.federalreserve.gov/publications/2022-november-small-business-credit-survey.htm" target="_blank" rel="noopener noreferrer">Federal Reserve — 2022 Small Business Credit Survey</a></li>
              <li><a href="https://www.constructionexec.com/article/the-true-cost-of-slow-payment" target="_blank" rel="noopener noreferrer">Construction Executive — The True Cost of Slow Payment</a></li>
            </ul>

          </div>

          <div className="article-footer">
            <Link href="/articles" className="article-back">← Back to Articles</Link>
            <a href="/" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>Submit a Project Safely →</a>
          </div>

        </div>
      </section>

      <footer>
        <div className="container footer-content">
          <div className="footer-logo">CLRBL<span>T</span></div>
          <div className="footer-links">
            <a href="/about">About</a>
            <a href="/articles">Articles</a>
            <a href="/guides">Guides</a>
            <a href="/contact">Contact</a>
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
          </div>
        </div>
      </footer>
    </>
  );
}
