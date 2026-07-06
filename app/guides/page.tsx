import Link from 'next/link';
import guides from '../../data/guides.json';

export default function GuidesPage() {
  const sorted = [...guides].reverse(); // newest first

  return (
    <>
      <nav className="navbar scrolled">
        <div className="container nav-inner">
          <a href="/" className="logo">CLRBL<span>T</span></a>
          <div className="nav-links">
            <a href="/#how-it-works">How It Works</a>
            <a href="/#contractors">For Contractors</a>
            <a href="/" className="nav-cta">Get Started</a>
          </div>
        </div>
      </nav>

      <section className="hero" style={{ paddingBottom: 60, paddingTop: 120 }}>
        <div className="container hero-content">
          <div className="hero-badge">Guides</div>
          <h1>Real numbers. <span className="highlight">Real decisions.</span></h1>
          <p className="hero-subtitle">Cost ranges, timelines, and vetting checklists for homeowners planning a project — plus payment and ops guidance for contractors running one.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="articles-grid">
            {sorted.map((g) => (
              <Link key={g.slug} href={`/guides/${g.slug}`} className="article-card">
                <div className="article-tag">{g.tag}</div>
                <h2>{g.title}</h2>
                <p>{g.excerpt}</p>
                <div className="article-meta">
                  <span className="article-date">{g.date}</span>
                  <span className="article-read-more">Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to move on your project?</h2>
          <p>Get matched with contractors who accept escrow-protected payments — your money stays protected until the work is done right.</p>
          <div className="cta-buttons">
            <a href="/create" className="cta-btn white">Submit a Project</a>
            <a href="/master" className="cta-btn outline">For Contractors</a>
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
