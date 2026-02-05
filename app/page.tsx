'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeAudience, setActiveAudience] = useState<'homeowner' | 'contractor'>('homeowner');
  const [scrolled, setScrolled] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = (audience: 'homeowner' | 'contractor') => {
    setActiveAudience(audience);
    document.querySelector('.hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      zip: formData.get('zip'),
      projectType: formData.get('project-type'),
      budget: formData.get('budget'),
      description: formData.get('description'),
    };

    // Show success immediately
    setSubmitMessage({ type: 'success', text: "Thank you! Check your email - we'll be in touch shortly to connect you with qualified contractors." });
    form.reset();

    // Fire request in background
    fetch('/api/submit-project', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).catch((err) => console.error('Background submit error:', err));
  };

  const handleContractorSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      zip: formData.get('zip'),
      services: formData.get('services'),
    };

    // Show success immediately
    setSubmitMessage({ type: 'success', text: "Welcome aboard! Check your email - we'll send you leads as projects come in for your area." });
    form.reset();

    // Fire request in background
    fetch('/api/submit-contractor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).catch((err) => console.error('Background submit error:', err));
  };

  return (
    <>
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#" className="logo">CLRBL<span>T</span></a>
          <div className="nav-links">
            <a href="#how-it-works">How It Works</a>
            <a href="#contractors">For Contractors</a>
            <a href="#" className="nav-cta">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-badge">Escrow-protected payments for construction</div>
          <h1>Submit your project.<br />Get matched with contractors who <span className="highlight">accept escrow payments.</span></h1>
          <p className="hero-subtitle">Your payment stays protected until the work is done right. Contractors get paid when milestones are met. Everyone wins.</p>

          {/* Audience Toggle */}
          <div className="audience-toggle">
            <button 
              className={`toggle-btn ${activeAudience === 'homeowner' ? 'active' : ''}`}
              onClick={() => setActiveAudience('homeowner')}
            >
              I Have a Project
            </button>
            <button 
              className={`toggle-btn ${activeAudience === 'contractor' ? 'active' : ''}`}
              onClick={() => setActiveAudience('contractor')}
            >
              I&apos;m a Contractor
            </button>
          </div>

          {/* Homeowner Form */}
          <div className={`form-section ${activeAudience === 'homeowner' ? 'active' : ''}`}>
            <div className="form-card">
              <h2>Tell us about your project</h2>
              <p className="form-desc">We&apos;ll connect you with contractors in your area who accept escrow payments.</p>
              <form onSubmit={handleProjectSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" required placeholder="John Smith" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required placeholder="john@example.com" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="(555) 123-4567" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="zip">Project ZIP Code</label>
                    <input type="text" id="zip" name="zip" required placeholder="80202" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="project-type">Type of Project</label>
                  <select id="project-type" name="project-type" required>
                    <option value="">Select project type...</option>
                    <option value="remodel">Kitchen/Bath Remodel</option>
                    <option value="addition">Home Addition</option>
                    <option value="renovation">Full Renovation</option>
                    <option value="roof">Roofing</option>
                    <option value="hvac">HVAC</option>
                    <option value="electrical">Electrical</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="landscaping">Landscaping/Hardscape</option>
                    <option value="commercial">Commercial Build-out</option>
                    <option value="restoration">Storm/Fire Restoration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Estimated Budget</label>
                  <select id="budget" name="budget" required>
                    <option value="">Select budget range...</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-250k">$100,000 - $250,000</option>
                    <option value="250k-500k">$250,000 - $500,000</option>
                    <option value="500k-plus">$500,000+</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Project Description</label>
                  <textarea id="description" name="description" placeholder="Describe your project, timeline, and any specific requirements..."></textarea>
                </div>
                <button type="submit" className="submit-btn primary">Submit Project</button>
                {submitMessage && activeAudience === 'homeowner' && (
                  <div className={`submit-message ${submitMessage.type}`}>
                    {submitMessage.text}
                  </div>
                )}
                <div className="form-footer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  Your information is secure and never shared without permission.
                </div>
              </form>
            </div>
          </div>

          {/* Contractor Form */}
          <div className={`form-section ${activeAudience === 'contractor' ? 'active' : ''}`}>
            <div className="form-card">
              <h2>Join for free. Get free leads.</h2>
              <p className="form-desc">Accept escrow payments and we&apos;ll send you qualified project leads in your area. No monthly fees, ever.</p>
              <form onSubmit={handleContractorSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="c-name">Your Name</label>
                    <input type="text" id="c-name" name="name" required placeholder="Jane Contractor" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="c-company">Company Name</label>
                    <input type="text" id="c-company" name="company" required placeholder="ABC Construction" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="c-email">Email Address</label>
                    <input type="email" id="c-email" name="email" required placeholder="jane@abcconstruction.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="c-phone">Phone Number</label>
                    <input type="tel" id="c-phone" name="phone" required placeholder="(555) 123-4567" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="c-zip">Service Area (ZIP Code)</label>
                  <input type="text" id="c-zip" name="zip" required placeholder="80202" />
                </div>
                <div className="form-group">
                  <label htmlFor="c-services">Services Offered</label>
                  <select id="c-services" name="services" required>
                    <option value="">Select primary service...</option>
                    <option value="general">General Contractor</option>
                    <option value="remodel">Remodeling</option>
                    <option value="roofing">Roofing</option>
                    <option value="hvac">HVAC</option>
                    <option value="electrical">Electrical</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="landscaping">Landscaping</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="restoration">Restoration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button type="submit" className="submit-btn secondary">Sign Up Free</button>
                {submitMessage && activeAudience === 'contractor' && (
                  <div className={`submit-message ${submitMessage.type}`}>
                    {submitMessage.text}
                  </div>
                )}
                <div className="form-footer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  No monthly fees. Pay only when you complete work.
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="value-props">
        <div className="container">
          <div className="section-header">
            <h2>Why escrow changes everything</h2>
            <p>Traditional contractor payments are broken. Either the homeowner risks paying upfront, or the contractor risks not getting paid. Escrow fixes both.</p>
          </div>
          <div className="props-grid">
            <div className="prop-card">
              <div className="prop-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
              </div>
              <h3>Funds held securely</h3>
              <p>Money goes into escrow before work begins. It&apos;s protected, visible to both parties, and released only when milestones are verified.</p>
            </div>
            <div className="prop-card">
              <div className="prop-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                  <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
              </div>
              <h3>Milestone-based release</h3>
              <p>Break the project into phases. Contractors get paid as they complete each milestone. No more chasing payments or wondering where your money went.</p>
            </div>
            <div className="prop-card">
              <div className="prop-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <h3>Trust built in</h3>
              <p>When both sides know the money is protected and the terms are clear, relationships stay professional and projects stay on track.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>How it works</h2>
            <p>Simple for homeowners. Simple for contractors. Protected for everyone.</p>
          </div>
          <div className="steps-container">
            <div className="steps-column homeowners">
              <h3>For Project Owners</h3>
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Submit your project</h4>
                  <p>Tell us what you need done, your budget, and your location.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Get matched</h4>
                  <p>We connect you with contractors in your area who accept escrow payments.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Fund the escrow</h4>
                  <p>Once you&apos;ve agreed on scope and price, deposit funds into the secure escrow account.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Approve milestones</h4>
                  <p>As work is completed, approve each phase and funds are released to the contractor.</p>
                </div>
              </div>
            </div>
            <div className="steps-column contractors">
              <h3>For Contractors</h3>
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Sign up free</h4>
                  <p>Create your profile and tell us your service area and specialties.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Receive leads</h4>
                  <p>Get notified when projects in your area match your services.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Win the job</h4>
                  <p>Connect with the homeowner, submit your bid, and agree on milestones.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Get paid reliably</h4>
                  <p>Complete milestones and receive payment. Pay suppliers directly from escrow if needed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Numbers */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-number">$0</div>
              <div className="trust-label">Monthly fees for contractors</div>
            </div>
            <div className="trust-item">
              <div className="trust-number">100%</div>
              <div className="trust-label">Funds protected until approval</div>
            </div>
            <div className="trust-item">
              <div className="trust-number">24hr</div>
              <div className="trust-label">Typical payment release</div>
            </div>
            <div className="trust-item">
              <div className="trust-number">Direct</div>
              <div className="trust-label">Supplier payments from escrow</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contractor Benefits */}
      <section className="contractor-benefits" id="contractors">
        <div className="container">
          <div className="benefits-layout">
            <div className="benefits-content">
              <h2>Contractors: free leads, guaranteed payment</h2>
              <p>Stop chasing invoices and wondering when you&apos;ll get paid. With escrow, the money is already there. You just have to earn it.</p>
              
              <div className="benefit-item">
                <div className="benefit-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4>No monthly fees, ever</h4>
                  <p>Sign up free. We only make money when you do—through a small transaction fee when funds are released.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4>Qualified leads sent to you</h4>
                  <p>We match you with homeowners and businesses in your area who are ready to start and have budget in hand.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4>Pay suppliers directly from escrow</h4>
                  <p>Need to pay for materials or subcontractors? Funds can be released directly to your vendors from the escrow account.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4>Build trust instantly</h4>
                  <p>Accepting escrow signals you stand behind your work. It&apos;s a competitive advantage that helps you close more deals.</p>
                </div>
              </div>
            </div>
            
            <div className="benefits-visual">
              <h3>Simple Pricing</h3>
              <div className="pricing-simple">
                <div className="price-line">
                  <span>Sign up</span>
                  <span className="price-value">Free</span>
                </div>
                <div className="price-line">
                  <span>Receive leads</span>
                  <span className="price-value">Free</span>
                </div>
                <div className="price-line">
                  <span>Monthly fee</span>
                  <span className="price-value">$0</span>
                </div>
                <div className="price-line">
                  <span>Transaction fee</span>
                  <span className="price-value">2.9%</span>
                </div>
              </div>
              <p className="pricing-note">Transaction fee only applies when funds are released from escrow. Volume discounts available for high-volume contractors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to get started?</h2>
          <p>Whether you have a project or you&apos;re looking for projects, we&apos;ve got you covered.</p>
          <div className="cta-buttons">
            <button className="cta-btn white" onClick={() => scrollToForm('homeowner')}>Submit a Project</button>
            <button className="cta-btn outline" onClick={() => scrollToForm('contractor')}>Join as Contractor</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container footer-content">
          <div className="footer-logo">CLRBL<span>T</span></div>
          <div className="footer-links">
            <a href="#">How It Works</a>
            <a href="#">For Contractors</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </div>
        </div>
      </footer>
    </>
  );
}
