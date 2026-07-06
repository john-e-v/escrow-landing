'use client';

import { useState, useEffect } from 'react';

export default function PrivacyPage() {
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
          <h1>Privacy <span className="highlight">Policy</span></h1>
          <p className="hero-subtitle">Last updated: June 2026</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="about-prose">

            <h2>1. Who We Are</h2>
            <p>CLRBLT operates clrblt.com, a project matching platform that connects homeowners with contractors who accept escrow-protected payments. Escrow services are provided by our partner <strong>Paykeeper</strong> (<a href="https://www.paykeeper.com" target="_blank" rel="noopener noreferrer">paykeeper.com</a>). Information you share in connection with an escrow transaction will also be subject to Paykeeper&apos;s privacy policy.</p>

            <h2>2. Information We Collect</h2>
            <p>When you submit a project, we collect:</p>
            <ul>
              <li>Name, email address, and phone number</li>
              <li>Project ZIP code, project type, and estimated budget</li>
              <li>Project description</li>
              <li>Payment information (processed by Stripe — we do not store card numbers)</li>
            </ul>
            <p>When contractors sign up, we collect name, company name, email, phone, service area, and service type.</p>
            <p>We also collect standard server logs (IP address, browser type, pages visited) for security and analytics purposes.</p>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information you provide to:</p>
            <ul>
              <li>Match your project with qualified contractors in your area</li>
              <li>Communicate with you about your project or account</li>
              <li>Share your project details with matched contractors (with your consent implied by submission)</li>
              <li>Process payments via Stripe</li>
              <li>Improve our platform and services</li>
            </ul>

            <h2>4. Information Shared with Paykeeper</h2>
            <p>When an escrow transaction is initiated, relevant project and party information is shared with Paykeeper, our licensed escrow service provider. Paykeeper&apos;s handling of that data is governed by their own privacy policy at paykeeper.com. CLRBLT does not hold or process escrow funds directly.</p>

            <h2>5. Information Shared with Contractors</h2>
            <p>Your project details (name, contact information, project type, location, and description) are shared with contractors who are matched to your project. We do not sell your information to third parties for advertising purposes.</p>

            <h2>6. Payment Processing</h2>
            <p>All payment processing is handled by Stripe. CLRBLT does not store credit card numbers or financial account information. Stripe&apos;s privacy policy governs how payment data is handled.</p>

            <h2>7. Data Retention</h2>
            <p>We retain your project information for up to 3 years to support contractor matching, dispute resolution, and legal compliance. You may request deletion of your data by contacting us at the address below.</p>

            <h2>8. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have rights to access, correct, or delete your personal data. To exercise these rights, <a href="/contact">contact us</a>.</p>

            <h2>9. Cookies</h2>
            <p>We use essential cookies for site functionality and analytics cookies (via Vercel Analytics) to understand how visitors use our site. No advertising cookies are used.</p>

            <h2>10. Changes to This Policy</h2>
            <p>We may update this policy from time to time. Material changes will be noted on this page with an updated date.</p>

            <h2>11. Contact</h2>
            <p>Questions about your privacy? <a href="/contact">Contact us here</a>.</p>

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
