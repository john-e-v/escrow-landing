import Link from 'next/link';
import articles from '../../data/articles.json';

export default function ArticlesPage() {
  const sorted = [...articles].reverse(); // newest first

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
          <div className="hero-badge">Real stories</div>
          <h1>When payments <span className="highlight">go wrong</span></h1>
          <p className="hero-subtitle">Documented cases of contractor fraud, homeowner non-payment, and what structural protection could have prevented.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="articles-grid">
            {sorted.map(a => (
              <Link key={a.slug} href={`/articles/${a.slug}`} className="article-card">
                <div className="article-tag">{a.tag}</div>
                <h2>{a.title}</h2>
                <p>{a.excerpt}</p>
                <div className="article-meta">
                  <span className="article-date">{a.date}</span>
                  <span className="article-read-more">Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Don&apos;t be the next story</h2>
          <p>Use structural protection from the start. Submit your project and get matched with contractors who work within an escrow framework.</p>
          <div className="cta-buttons">
            <a href="/" className="cta-btn white">Submit a Project</a>
            <a href="/about" className="cta-btn outline">Learn Why It Matters</a>
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
