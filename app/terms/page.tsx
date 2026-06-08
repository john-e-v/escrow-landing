'use client';

import { useState, useEffect } from 'react';

export default function TermsPage() {
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
            <a href="/" className="nav-cta">Get Started</a>
          </div>
        </div>
      </nav>

      <section className="hero" style={{ paddingBottom: 40 }}>
        <div className="container hero-content">
          <div className="hero-badge">Legal</div>
          <h1>Terms of <span className="highlight">Service</span></h1>
          <p className="hero-subtitle">Last updated: June 2026</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="about-prose">

            <h2>1. Overview</h2>
            <p>These Terms of Service govern your use of CLRBLT (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), accessible at clrblt.com. By using this site or submitting a project, you agree to these terms.</p>

            <h2>2. What CLRBLT Does</h2>
            <p>CLRBLT is a project matching and referral platform. We connect homeowners and project owners with contractors who accept escrow-protected payments. We do not ourselves provide escrow services, hold funds, or act as a financial institution.</p>
            <p><strong>Escrow services are provided exclusively by Paykeeper</strong> (<a href="https://www.paykeeper.com" target="_blank" rel="noopener noreferrer">paykeeper.com</a>), a licensed escrow service provider. By proceeding with an escrow transaction, you agree to Paykeeper&apos;s terms and conditions in addition to these terms. CLRBLT facilitates the introduction between parties; Paykeeper handles the actual holding and disbursement of funds.</p>

            <h2>3. Project Submission Fee</h2>
            <p>A non-refundable $9.00 submission fee is charged when a homeowner or project owner submits a project through our platform. This fee covers the cost of matching your project with qualified contractors in your area. Payment is processed securely via Stripe. Submitting a project does not guarantee a contractor match or project completion.</p>

            <h2>4. Contractor Matching</h2>
            <p>CLRBLT makes reasonable efforts to match submitted projects with qualified, pre-screened contractors who have agreed to accept escrow payments. However, we do not guarantee the availability, quality, licensing, insurance status, or performance of any contractor. All agreements for work are made directly between the project owner and the contractor.</p>

            <h2>5. Escrow Transactions</h2>
            <p>All escrow transactions are governed by your agreement with Paykeeper. CLRBLT has no control over and accepts no liability for the holding, release, or disbursement of funds held in escrow. Disputes regarding escrow funds must be directed to Paykeeper per their dispute resolution process.</p>

            <h2>6. No Warranties</h2>
            <p>This platform is provided &quot;as is&quot; without warranties of any kind. We do not warrant that contractor matches will result in completed projects, that all contractors are licensed or insured in your jurisdiction, or that escrow services will be available in all areas.</p>

            <h2>7. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, CLRBLT&apos;s liability to you for any claim arising from use of this platform is limited to the amount you paid us (the $9 submission fee). We are not liable for contractor performance, escrow disputes, property damage, or any consequential damages.</p>

            <h2>8. User Conduct</h2>
            <p>You agree not to submit false project information, impersonate another person, attempt to circumvent our matching process, or use this platform for any unlawful purpose.</p>

            <h2>9. Changes to Terms</h2>
            <p>We may update these terms at any time. Continued use of the platform after changes constitutes acceptance of the revised terms.</p>

            <h2>10. Contact</h2>
            <p>Questions about these terms? <a href="/contact">Contact us here</a>.</p>

          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-content">
          <div className="footer-logo">CLRBL<span>T</span></div>
          <div className="footer-links">
            <a href="/about">About</a>
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
