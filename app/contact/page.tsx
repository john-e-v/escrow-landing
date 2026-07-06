'use client';

import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = (window as typeof window & { grecaptcha?: { getResponse: () => string } }).grecaptcha?.getResponse();
    if (!token) {
      alert('Please complete the CAPTCHA.');
      return;
    }
    setIsSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken: token }),
      });
    } catch { /* fire and forget */ }
    setSubmitted(true);
    setIsSubmitting(false);
  };

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

      <section className="hero" style={{ paddingBottom: 60 }}>
        <div className="container hero-content">
          <div className="hero-badge">Get in touch</div>
          <h1>Contact <span className="highlight">CLRBLT</span></h1>
          <p className="hero-subtitle">Questions about how escrow works, your project submission, or partnering with us? We&apos;ll get back to you within one business day.</p>
        </div>
      </section>

      <section className="contractor-benefits" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            {submitted ? (
              <div className="submit-message success" style={{ fontSize: '1.1rem', padding: '2rem' }}>
                Thanks for reaching out! We&apos;ll be in touch within one business day.
              </div>
            ) : (
              <div className="form-card">
                <h2>Send us a message</h2>
                <p className="form-desc">We read every message and respond personally.</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Your Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handle} required placeholder="John Smith" />
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input type="email" name="email" value={formData.email} onChange={handle} required placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Subject *</label>
                    <select name="subject" value={formData.subject} onChange={handle} required>
                      <option value="">Select a topic...</option>
                      <option value="Project question">Question about my project submission</option>
                      <option value="Contractor signup">Signing up as a contractor</option>
                      <option value="Enterprise / Master agreement">Enterprise / Master agreement inquiry</option>
                      <option value="Escrow question">How escrow works</option>
                      <option value="Partnership">Partnership opportunity</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message *</label>
                    <textarea name="message" value={formData.message} onChange={handle} required placeholder="Tell us what you need..." style={{ minHeight: 140 }} />
                  </div>
                  <div
                    className="g-recaptcha"
                    data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    style={{ marginBottom: 16 }}
                  ></div>
                  <button type="submit" className="submit-btn primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  <div className="form-footer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    We respond within one business day.
                  </div>
                </form>
              </div>
            )}
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
