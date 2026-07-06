'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="/" className="logo">CLRBL<span>T</span></a>
          <div className="nav-links">
            <a href="/#how-it-works">How It Works</a>
            <a href="/#contractors">For Contractors</a>
            <Link href="/" className="nav-cta">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Part 1: A Cultural Divide */}
      <section className="hero" style={{ paddingBottom: 80 }}>
        <div className="container hero-content">
          <div className="hero-badge">Our story</div>
          <h1>A cultural divide<br /><span className="highlight">that costs everyone.</span></h1>
          <p className="hero-subtitle">There is a quiet distrust running through every conversation between a homeowner and a contractor. It didn't start with one person. It built up over decades, one bad experience at a time.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose">
            <p>Ask a homeowner about contractors and you'll hear stories. The roofer who took the deposit and disappeared. The renovation that started strong and stalled for months. The finished bathroom that didn't match the quote. The contractor who "forgot" to mention the permit would cost extra.</p>

            <p>Ask a contractor about homeowners and you'll hear different stories, just as bitter. The client who agreed to everything verbally, then disputed the invoice. The family who ran out of money mid-project and expected the contractor to absorb it. The homeowner who approved every change order, then claimed they never authorized anything. The finished job that sat unpaid for ninety days while the contractor covered payroll out of pocket.</p>

            <p>Neither side is lying. Both sides have been burned. The distrust is earned — built up on both ends through real experiences, not paranoia. And because it's earned, it's stubborn. No handshake, no contract, no five-star review is fully trusted anymore. Everyone is quietly waiting for the moment the other shoe drops.</p>

            <p>This is the divide we started with. Not a technical problem. A cultural one — and it's getting worse.</p>
          </div>
        </div>
      </section>

      {/* Part 2: A Wave Is Coming */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>A wave is coming</h2>
            <p>AI is reshaping everything — including the tools bad actors use to appear trustworthy.</p>
          </div>

          <div className="about-prose about-prose-light">
            <p>For most of human history, trust was built through signals: Does this person seem professional? Do they have reviews? Did a friend refer them? Does their website look credible? Do they show up on time? These heuristics worked well enough — not because they were foolproof, but because faking them took real effort.</p>

            <p>That's changing. Polished websites now take hours, not months. Fake reviews are scalable. AI can generate coherent, confident responses to any question. A contractor who has never done roofing can present themselves with the look and language of someone with twenty years of experience. A homeowner with no intention of paying can present a convincing paper trail of creditworthiness.</p>

            <p>The traditional signals of trustworthiness are becoming unreliable. Both sides face new exposure.</p>
          </div>

          <div className="steps-container" style={{ marginTop: 56 }}>
            <div className="steps-column homeowners">
              <h3>Homeowners face</h3>
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>The convincing stranger</h4>
                  <p>Someone charismatic, well-reviewed (on paper), professional in every appearance — who takes a deposit and disappears. The pitch was perfect. The execution never existed.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Deepfake credibility</h4>
                  <p>Photos of past work that never happened. Licenses that look real but aren't. References who don't exist. All of this used to require effort. It no longer does.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>The slow vanish</h4>
                  <p>The contractor who keeps showing up — just barely — until enough money has moved. No dramatic exit. Just gradual unavailability and eventual silence.</p>
                </div>
              </div>
            </div>

            <div className="steps-column contractors">
              <h3>Contractors face</h3>
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Mid-project fund misallocation</h4>
                  <p>The client starts with money — insurance payout, loan, savings — but it doesn't stay earmarked. Life intervenes. Divorce. Job loss. Other bills. The contractor finishes the work and finds the account empty.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>The retroactive dispute</h4>
                  <p>A client who approved everything, then disputes it after the fact. With AI tools making written communication easier to manufacture and contest, the contractor's documentation becomes more important — and harder to make stick.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>The slow-pay spiral</h4>
                  <p>Payment delays that compound. Thirty days becomes sixty. Sixty becomes ninety. The contractor is financing the client's project out of their own cash flow while the client has already moved on.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 3: The Solution */}
      <section className="contractor-benefits">
        <div className="container">
          <div className="benefits-layout">
            <div className="benefits-content">
              <h2>Aligning with what&apos;s coming</h2>
              <p>Escrow isn&apos;t new. But its importance is about to become impossible to ignore.</p>

              <div className="about-prose" style={{ marginTop: 0 }}>
                <p>In a world where appearances are increasingly easy to fake, the only real protection is structural.</p>
              </div>

              <div className="benefit-item">
                <div className="benefit-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4>It doesn&apos;t matter how convincing the contractor seemed</h4>
                  <p>If the money is in escrow, it can&apos;t leave until milestones are verified. Charm is irrelevant. The structure holds.</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4>It doesn&apos;t matter what the client says they intended</h4>
                  <p>The funds are committed. They can&apos;t be quietly redirected when something else comes up. The contractor&apos;s work is backed by money that actually exists.</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4>It doesn&apos;t require trust — it enables it</h4>
                  <p>Both sides can move forward knowing the structure handles the risk. That&apos;s not naïve optimism. That&apos;s engineering.</p>
                </div>
              </div>
            </div>

            <div className="benefits-visual">
              <h3>The core idea</h3>
              <div className="pricing-simple">
                <div className="price-line">
                  <span>Trust your gut?</span>
                  <span className="price-value" style={{ color: 'var(--alert-red)' }}>Risky</span>
                </div>
                <div className="price-line">
                  <span>Rely on reviews?</span>
                  <span className="price-value" style={{ color: 'var(--alert-red)' }}>Risky</span>
                </div>
                <div className="price-line">
                  <span>Use a contract?</span>
                  <span className="price-value" style={{ color: 'var(--safety-yellow)' }}>Slow</span>
                </div>
                <div className="price-line">
                  <span>Use escrow?</span>
                  <span className="price-value">Structural</span>
                </div>
              </div>
              <p className="pricing-note">Escrow doesn&apos;t ask either side to trust the other. It makes trust beside the point. The money moves when the work is done. That&apos;s it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to get started?</h2>
          <p>Submit your project and get matched with contractors who work within a structure that protects everyone.</p>
          <div className="cta-buttons">
            <Link href="/" className="cta-btn white">Submit a Project</Link>
            <Link href="/articles" className="cta-btn outline">Read Our Articles</Link>
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
