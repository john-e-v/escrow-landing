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
          <div className="hero-badge">Cost &amp; Timeline · August 2026</div>
          <h1>How Much Does a New Septic System Cost in 2026?</h1>
          <p className="hero-subtitle">A new septic system runs $5,000 to $30,000 in 2026, with most conventional installs landing between $8,000 and $15,000. Soil type, tank size, and whether you need an engineered system for poor perc can swing the number by tens of thousands.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>A new septic system costs $5,000 to $30,000 in 2026, with most conventional installs landing between $8,000 and $15,000. That&apos;s a huge spread, and it&apos;s not marketing vagueness — the same house on two different lots can see a $20,000 difference based on nothing but the dirt underneath it.</p>
            <p>Here&apos;s how the range actually breaks down. A basic conventional system with a standard gravity drain field on good soil runs $8,000 to $15,000. A pressure-distribution or mound system for marginal soil jumps to $12,000 to $22,000. And a fully engineered aerobic treatment unit (ATU) — the kind you need when your soil fails a perc test or you&apos;re near a water source — lands anywhere from $18,000 to $30,000+.</p>


            <h2>What Actually Moves the Number</h2>
            <p>The single biggest driver is your soil. Every septic install starts with a percolation (perc) test that measures how fast water drains. Fast-draining sandy loam? You get a cheap conventional system. Heavy clay, high water table, or bedrock near the surface? Now you&apos;re looking at an engineered alternative system that treats effluent before it hits the ground — and that&apos;s where the tens-of-thousands swing comes from.</p>
            <p>Tank size scales with bedroom count, not square footage. A 1,000-gallon tank (3 bedrooms) is standard; a 1,500-gallon tank for a 5-bedroom home adds $600 to $1,200 in materials alone, plus a larger drain field.</p>
            <p>Region matters more than people expect. Labor rates in the rural Midwest can run half what you&apos;ll pay in coastal California or the Northeast. Excavation depth, rock removal, and hauling distance for materials all compound regionally.</p>
            <blockquote className="article-quote">
              The perc test is the whole ballgame. I&apos;ve quoted the same floor plan at $9,000 on one lot and $26,000 on another a mile away — pure soil difference.
              <cite>— Licensed septic installer, 18 years</cite>
            </blockquote>


            <h2>The Hidden Line Items</h2>
            <p>Permitting and inspections vary wildly by county — expect $300 to $2,000 depending on jurisdiction, and some health departments require multiple inspections that stretch timelines. A soil evaluation and site plan from an engineer adds $500 to $2,500 if your system needs a design.</p>
            <p>Don&apos;t forget the drain field itself, which is often priced separately from the tank. It&apos;s the most labor-intensive part of the job and the most likely to blow the budget if the crew hits rock or has to remove existing failed lines.</p>
            <p>If you&apos;re replacing an old system, add $2,000 to $6,000 for tank removal, abandonment, and site restoration.</p>


            <h2>Timeline: Faster Than You Think — Once You&apos;re Cleared</h2>
            <p>The actual dig-and-install for a conventional system takes 1 to 3 days. The real timeline killer is everything before it: perc testing (1–2 weeks to schedule and complete), engineering and design for alternative systems (2–4 weeks), and permit approval (2 weeks to 2 months depending on your health department&apos;s backlog).</p>
            <p>Budget 4 to 8 weeks from first call to buried system for a straightforward job, and 2 to 4 months if you need an engineered design or you&apos;re building on difficult soil.</p>


            <h2>Before You Commit</h2>
            <p>Because soil is the wild card, never accept a septic quote that doesn&apos;t reference your actual perc results. A contractor who gives you a firm price sight-unseen is guessing — and you&apos;re the one who eats the change orders.</p>
            <p>Get at least three quotes from installers who&apos;ve done work in your specific county, since they&apos;ll know the local health department&apos;s quirks and inspection rhythm. Ask each one to itemize tank, drain field, permitting, and excavation separately so you can compare apples to apples.</p>
            <p>When you&apos;re ready to line up bids and protect your deposit while the work gets done right, you can get matched with vetted local pros who handle jobs this size every week.</p>
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
