'use client';

import { useState, useEffect } from 'react';

const PricingAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = [
    {
      title: 'Implementation Fee Schedule',
      content: (
        <ul className="master-list">
          <li>No integration, Manual Use: $500</li>
          <li>Create Escrow / Change Order API: $3,000</li>
          <li>Full API access + webhooks: $8,500</li>
        </ul>
      ),
    },
    {
      title: 'Pricing Tiers',
      content: (
        <div>
          <div className="master-note">
            <strong>How to read this table:</strong> The dollar amounts represent your total monthly transaction volume. Find your expected monthly volume to see your total cost (monthly fee + transaction fees).<br /><br />
            <strong>Example:</strong> If you process $500,000/month on the Mid Market plan, you'll pay $1,499/month + $10,449 in transaction fees = $11,948 total.
          </div>
          <div className="master-table-wrap">
            <table className="master-table">
              <thead>
                <tr>
                  <th rowSpan={2}>Plan</th>
                  <th rowSpan={2}>Monthly Fee</th>
                  <th rowSpan={2}>Transaction %</th>
                  <th colSpan={6} style={{ textAlign: 'center' }}>Monthly Volume (Total Monthly Cost)</th>
                </tr>
                <tr>
                  {['$120k', '$150k', '$500k', '$2M', '$3M', '$4M'].map(h => <th key={h}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ['SMB', '$0', '3.00%', '$3,600', '$4,500', '$15,000', '$60,000', '$90,000', '$120,000'],
                  ['SMB+', '$499', '2.49%', '$3,487', '$4,234', '$12,949', '$50,299', '$75,199', '$100,099'],
                  ['Mid Market', '$1,499', '1.79%', '$3,647', '$4,184', '$10,449', '$37,299', '$55,199', '$73,099'],
                  ['Enterprise Low', '$2,999', '1.39%', '$4,667', '$5,084', '$9,949', '$30,799', '$44,699', '$58,599'],
                  ['Enterprise Mid', '$7,499', '1.26%', '$9,011', '$9,389', '$13,799', '$32,699', '$45,299', '$57,899'],
                  ['Enterprise High', '$10,999', '1.14%', '$12,367', '$12,709', '$16,699', '$33,799', '$45,199', '$56,599'],
                ].map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => <td key={j}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      title: 'Custom Pricing for High-Ticket Projects',
      content: (
        <div className="master-table-wrap">
          <table className="master-table">
            <thead>
              <tr>
                <th>Project Amount</th>
                <th>Transaction Fee</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['$100k – $250k', '2.30%'],
                ['$251k – $500k', '1.96%'],
                ['$501k – $1M', '1.15%'],
                ['$1M – $2M', '0.98%'],
                ['$2M – $3M', '0.86%'],
                ['$3M – $5M', '0.71%'],
                ['$5M – $7M', '0.54%'],
                ['$7M – $10M', '0.41%'],
                ['$10M – $15M', '0.32%'],
                ['$15M – $20M', '0.29%'],
                ['Above $20M', '0.28%'],
              ].map(([amt, fee], i) => (
                <tr key={i}>
                  <td>{amt}</td>
                  <td>{fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
  ];

  return (
    <div className="master-accordion">
      {items.map((item, i) => (
        <div key={i} className={`master-accordion-item ${activeIndex === i ? 'open' : ''}`}>
          <button className="master-accordion-btn" onClick={() => setActiveIndex(activeIndex === i ? null : i)}>
            <span>{item.title}</span>
            <span className="master-chevron">{activeIndex === i ? '▲' : '▼'}</span>
          </button>
          {activeIndex === i && <div className="master-accordion-body">{item.content}</div>}
        </div>
      ))}
    </div>
  );
};

const MasterForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '', address: '',
    workType: '', monthlyPlan: '', integration: '', additionalInfo: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
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
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) return (
    <div className="submit-message success" style={{ maxWidth: 560, margin: '0 auto' }}>
      Thank you! Your master service agreement will be customized and emailed within 24 hours.
    </div>
  );

  return (
    <div className="form-card" style={{ maxWidth: 700, margin: '0 auto' }}>
      <h2>Get Your Master Service Agreement</h2>
      <p className="form-desc">Fill out the form below and your customized agreement will arrive within 24 hours.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group"><label>Full Name *</label><input type="text" name="name" value={formData.name} onChange={handle} required placeholder="John Smith" /></div>
          <div className="form-group"><label>Email Address *</label><input type="email" name="email" value={formData.email} onChange={handle} required placeholder="john@company.com" /></div>
        </div>
        <div className="form-row">
          <div className="form-group"><label>Company Name *</label><input type="text" name="company" value={formData.company} onChange={handle} required placeholder="ABC Construction LLC" /></div>
          <div className="form-group"><label>Phone Number</label><input type="tel" name="phone" value={formData.phone} onChange={handle} placeholder="(555) 123-4567" /></div>
        </div>
        <div className="form-group"><label>Company Address *</label><input type="text" name="address" value={formData.address} onChange={handle} required placeholder="123 Main St, City, State, ZIP" /></div>
        <div className="form-group"><label>Type of Work You Do *</label><textarea name="workType" value={formData.workType} onChange={handle} required placeholder="Home renovations, commercial construction, roofing..." /></div>
        <div className="form-row">
          <div className="form-group">
            <label>Monthly Plan *</label>
            <select name="monthlyPlan" value={formData.monthlyPlan} onChange={handle} required>
              <option value="">Select a plan...</option>
              <option>SMB – $0/month (3.00%)</option>
              <option>SMB+ – $499/month (2.49%)</option>
              <option>Mid Market – $1,499/month (1.79%)</option>
              <option>Enterprise Low – $2,999/month (1.39%)</option>
              <option>Enterprise Mid – $7,499/month (1.26%)</option>
              <option>Enterprise High – $10,999/month (1.14%)</option>
            </select>
          </div>
          <div className="form-group">
            <label>Integration Needed *</label>
            <select name="integration" value={formData.integration} onChange={handle} required>
              <option value="">Select integration level...</option>
              <option>No integration, Manual Use – $500</option>
              <option>Create Escrow / Change Order API – $3,000</option>
              <option>Full API access + webhooks – $8,500</option>
            </select>
          </div>
        </div>
        <div className="form-group"><label>Additional Information</label><textarea name="additionalInfo" value={formData.additionalInfo} onChange={handle} placeholder="Any specific requirements or questions..." /></div>
        <div
          className="g-recaptcha"
          data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          style={{ marginBottom: 16 }}
        ></div>
        <button type="submit" className="submit-btn primary" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send My Master Service Agreement'}
        </button>
      </form>
    </div>
  );
};

export default function MasterPage() {
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
            <a href="/master" className="nav-cta">Master Agreement</a>
          </div>
        </div>
      </nav>

      <section className="hero" style={{ paddingBottom: 60 }}>
        <div className="container hero-content">
          <div className="hero-badge">For businesses &amp; high-volume contractors</div>
          <h1>Escrow payments for remodels, trades, and services.<br /><span className="highlight">Made simple.</span></h1>
          <p className="hero-subtitle">Clients pay knowing their funds are protected. Contractors know they will be paid. No hassles, no stress — just an honest payment system.</p>
          <a href="https://www.calendly.com/clrblt" target="_blank" rel="noopener noreferrer" className="submit-btn primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', marginTop: 8 }}>
            Schedule a Demo →
          </a>
        </div>
      </section>

      <section className="value-props">
        <div className="container">
          <div className="section-header">
            <h2>Benefits for All Parties</h2>
            <p>Structural protection that works for homeowners, contractors, and lenders alike.</p>
          </div>
          <div className="props-grid">
            {[
              { icon: '🛡️', title: 'Protection & Security', body: 'Funds are securely held and only released when project milestones are verified, protecting both homeowners and contractors.' },
              { icon: '⚡', title: 'Quick Setup', body: 'Generate custom agreements in minutes. Our system handles all the complexity while keeping it simple for you.' },
              { icon: '🏗️', title: 'Project Flexibility', body: 'Whether it\'s a small remodel or major reconstruction, our agreements adapt to your specific project needs.' },
            ].map(c => (
              <div key={c.title} className="prop-card">
                <div className="prop-icon" style={{ fontSize: 24 }}>{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>Enhanced Protection</h2>
            <p>Structural safeguards that work regardless of how convincing someone appears.</p>
          </div>
          <div className="steps-container">
            <div className="steps-column homeowners">
              <h3>Fraud Prevention</h3>
              {['Direct payment to escrow prevents contractors from disappearing with project funds', 'Funds remain recoverable in cases of fraudulent claims', 'Verified milestone completion before fund release'].map((s, i) => (
                <div key={i} className="step">
                  <div className="step-number">✓</div>
                  <div className="step-content"><p>{s}</p></div>
                </div>
              ))}
            </div>
            <div className="steps-column contractors">
              <h3>Risk Mitigation</h3>
              {['Documented proof of fund allocation and project progress', 'Prevent disputes before they happen — enforce through structure, not courts', 'Clear audit trail for all transactions and approvals'].map((s, i) => (
                <div key={i} className="step">
                  <div className="step-number">✓</div>
                  <div className="step-content"><p>{s}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="value-props">
        <div className="container">
          <div className="section-header">
            <h2>Pricing</h2>
            <p>Transparent tiers for every volume level. No surprises.</p>
          </div>
          <PricingAccordion />
        </div>
      </section>

      <section className="contractor-benefits">
        <div className="container">
          <div className="section-header" style={{ marginBottom: 48 }}>
            <h2>Get Your Master Service Agreement</h2>
            <p>Fill out the form and your customized agreement arrives within 24 hours.</p>
          </div>
          <MasterForm />
        </div>
      </section>

      <section className="trust-section">
        <div className="container">
          <div className="trust-grid">
            {[['Legal Compliant', '✓'], ['Bank-Level Security', '🔒'], ['Trusted by Businesses', '🤝'], ['Paykeeper Powered', '⚡']].map(([label, icon]) => (
              <div key={label} className="trust-item">
                <div className="trust-number">{icon}</div>
                <div className="trust-label">{label}</div>
              </div>
            ))}
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
