"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight, Shield, Clock, Handshake, FileText, Building, DollarSign, Umbrella, AlertTriangle } from 'lucide-react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`p-6 rounded-lg shadow-lg ${className}`}>{children}</div>
);

const CardHeader: React.FC<CardProps> = ({ children }) => (
  <div className="mb-4">{children}</div>
);

const CardTitle: React.FC<CardProps> = ({ children }) => (
  <h3 className="text-xl font-semibold text-black">{children}</h3>
);

const CardContent: React.FC<CardProps> = ({ children }) => (
  <div>{children}</div>
);
//force deploy
// Updated Pricing Accordion Component with Correct Data
const PricingAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [forceUpdate, setForceUpdate] = useState(0);

  useEffect(() => {
    setForceUpdate(Date.now());
  }, []);

  const handleAccordionClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const pricingData = [
    {
      title: 'Implementation Fee Schedule',
      content: (
        <ul style={{ 
          margin: '15px 0',
          paddingLeft: '20px',
          listStyleType: 'disc',
          color: '#000000',
          fontSize: '16px',
          fontWeight: 'normal',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          <li style={{ 
            marginBottom: '8px',
            color: '#000000',
            fontSize: '16px'
          }}>No integration, Manual Use: $500</li>
          <li style={{ 
            marginBottom: '8px',
            color: '#000000',
            fontSize: '16px'
          }}>Create Escrow/Change Order API: $3,000</li>
          <li style={{ 
            marginBottom: '8px',
            color: '#000000',
            fontSize: '16px'
          }}>Full API access + webhooks: $8,500</li>
        </ul>
      ),
    },
    {
      title: 'Pricing Tiers (must stay on plan for 12 months, can change upon renewal)',
      content: (
        <div>
          <div style={{
            background: '#f0f9ff',
            border: '2px solid #0ea5e9',
            borderRadius: '8px',
            padding: '15px',
            margin: '15px 0',
            color: '#0c4a6e',
            fontWeight: '500'
          }}>
            <h4 style={{ margin: '0 0 10px 0', color: '#0c4a6e', fontSize: '16px' }}>📊 How to Read This Table:</h4>
            <p style={{ margin: '0 0 8px 0' }}><strong>Monthly Volume Levels:</strong> The dollar amounts ($120,000, $150,000, etc.) represent your total monthly transaction volume. Find your expected monthly volume to see your total cost (monthly fee + transaction fees).</p>
            <p style={{ margin: '0' }}><strong>Example:</strong> If you process $500,000/month and choose the Mid Market plan, you'll pay $1,499/month + $10,449 in transaction fees = $11,948 total monthly cost.</p>
          </div>
          
          <div style={{
            background: '#1e40af',
            color: '#ffffff',
            borderRadius: '8px',
            padding: '15px',
            margin: '15px 0',
            fontSize: '14px',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            📱 On mobile: Scroll right to see all monthly volume levels →
          </div>
          
          <div style={{ 
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            border: '3px solid #000000',
            borderRadius: '8px',
            backgroundColor: '#ffffff'
          }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              minWidth: '900px',
              fontSize: '14px',
              background: '#ffffff',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#1e40af' }}>
                  <th style={{
                    border: '2px solid #000000',
                    padding: '15px 10px',
                    backgroundColor: '#1e40af',
                    fontWeight: 'bold',
                    textAlign: 'left',
                    color: '#ffffff',
                    fontSize: '14px',
                    verticalAlign: 'middle'
                  }} rowSpan={2}>Plan</th>
                  <th style={{
                    border: '2px solid #000000',
                    padding: '15px 10px',
                    backgroundColor: '#1e40af',
                    fontWeight: 'bold',
                    textAlign: 'left',
                    color: '#ffffff',
                    fontSize: '14px',
                    verticalAlign: 'middle'
                  }} rowSpan={2}>Monthly Fee</th>
                  <th style={{
                    border: '2px solid #000000',
                    padding: '15px 10px',
                    backgroundColor: '#1e40af',
                    fontWeight: 'bold',
                    textAlign: 'left',
                    color: '#ffffff',
                    fontSize: '14px',
                    verticalAlign: 'middle'
                  }} rowSpan={2}>Transaction %</th>
                  <th style={{
                    border: '2px solid #000000',
                    padding: '15px 10px',
                    backgroundColor: '#1e40af',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: '#ffffff',
                    fontSize: '14px',
                    borderBottom: '1px solid #000000'
                  }} colSpan={6}>Monthly Volume Levels (Total Monthly Cost)</th>
                </tr>
                <tr style={{ backgroundColor: '#1e40af' }}>
                  {['$120,000', '$150,000', '$500,000', '$2,000,000', '$3,000,000', '$4,000,000'].map((header, i) => (
                    <th key={i} style={{
                      border: '2px solid #000000',
                      padding: '15px 10px',
                      backgroundColor: '#1e40af',
                      fontWeight: 'bold',
                      textAlign: 'left',
                      color: '#ffffff',
                      fontSize: '14px'
                    }}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['SMB', '$0', '3.00%', '$3,600', '$4,500', '$15,000', '$60,000', '$90,000', '$120,000'],
                  ['SMB', '$499', '2.49%', '$3,487', '$4,234', '$12,949', '$50,299', '$75,199', '$100,099'],
                  ['Mid Market', '$1,499', '1.79%', '$3,647', '$4,184', '$10,449', '$37,299', '$55,199', '$73,099'],
                  ['Enterprise - LowVol', '$2,999', '1.39%', '$4,667', '$5,084', '$9,949', '$30,799', '$44,699', '$58,599'],
                  ['Enterprise - MidVol', '$7,499', '1.26%', '$9,011', '$9,389', '$13,799', '$32,699', '$45,299', '$57,899'],
                  ['Enterprise - HighVol', '$10,999', '1.14%', '$12,367', '$12,709', '$16,699', '$33,799', '$45,199', '$56,599']
                ].map((row, rowIndex) => (
                  <tr key={rowIndex} style={{
                    backgroundColor: rowIndex % 2 === 0 ? '#ffffff' : '#e0f2fe'
                  }}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} style={{
                        border: '2px solid #666666',
                        padding: '15px 10px',
                        color: '#000000',
                        fontSize: '14px',
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        fontWeight: 'bold'
                      }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      title: 'Custom Pricing for High Ticket Projects',
      content: (
        <div style={{ marginTop: '15px' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '16px',
            border: '3px solid #000000',
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: '#ffffff',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}>
            <thead>
              <tr style={{ backgroundColor: '#1e40af' }}>
                <th style={{
                  border: '2px solid #000000',
                  padding: '15px',
                  backgroundColor: '#1e40af',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  color: '#ffffff',
                  fontSize: '16px',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}>Project Amount</th>
                <th style={{
                  border: '2px solid #000000',
                  padding: '15px',
                  backgroundColor: '#1e40af',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  color: '#ffffff',
                  fontSize: '16px',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}>Transaction Fee</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['100k - 250k', '2.30%'],
                ['251k - 500k', '1.96%'],
                ['501k - 1,000k', '1.15%'],
                ['1,001k - 2,000k', '0.98%'],
                ['2,001k - 3,000k', '0.86%'],
                ['3,001k - 5,000k', '0.71%'],
                ['5,001k - 7,000k', '0.54%'],
                ['7,001k - 10,000k', '0.41%'],
                ['10,001k - 15,000k', '0.32%'],
                ['15,001k - 20,000k', '0.29%'],
                ['above 20,000k', '0.28%']
              ].map(([amount, fee], index) => (
                <tr key={index} style={{
                  backgroundColor: index % 2 === 0 ? '#ffffff' : '#e0f2fe'
                }}>
                  <td style={{
                    border: '2px solid #666666',
                    padding: '15px',
                    color: '#000000',
                    fontSize: '16px',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontWeight: 'bold'
                  }}>{amount}</td>
                  <td style={{
                    border: '2px solid #666666',
                    padding: '15px',
                    color: '#000000',
                    fontSize: '16px',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontWeight: 'bold'
                  }}>{fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
  ];

  return (
    <div 
      key={forceUpdate}
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        background: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
        overflow: 'hidden',
        border: '4px solid #1e40af'
      }}
    >
      <div style={{
        background: '#10b981',
        color: '#ffffff',
        padding: '10px',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: 'bold'
      }}>
        ✅ CORRECTED PRICING - Updated: {new Date().toLocaleTimeString()}
      </div>
      
      {pricingData.map((item, index) => (
        <div key={index} style={{
          borderBottom: index < pricingData.length - 1 ? '4px solid #e5e7eb' : 'none'
        }}>
          <button
            onClick={() => handleAccordionClick(index)}
            style={{
              width: '100%',
              padding: '25px 20px',
              backgroundColor: activeIndex === index ? '#1e40af' : '#f1f5f9',
              border: 'none',
              textAlign: 'left',
              fontSize: '18px',
              fontWeight: 'bold',
              color: activeIndex === index ? '#ffffff' : '#000000',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              transition: 'all 0.2s ease',
              lineHeight: '1.4',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
            onMouseEnter={(e) => {
              if (activeIndex !== index) {
                e.currentTarget.style.backgroundColor = '#e2e8f0';
              }
            }}
            onMouseLeave={(e) => {
              if (activeIndex !== index) {
                e.currentTarget.style.backgroundColor = '#f1f5f9';
              }
            }}
          >
            <span style={{ 
              paddingRight: '15px',
              fontWeight: 'bold',
              fontSize: '18px'
            }}>{item.title}</span>
            <ChevronRight
              style={{
                transform: activeIndex === index ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease',
                flexShrink: 0,
                color: activeIndex === index ? '#ffffff' : '#000000'
              }}
              size={24}
            />
          </button>
          <div
            style={{
              maxHeight: activeIndex === index ? '3000px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.3s ease, padding 0.3s ease',
              padding: activeIndex === index ? '30px 25px' : '0 25px',
              backgroundColor: '#ffffff'
            }}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

// Contact Form Component
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    address: '',
    workType: '',
    monthlyPlan: '',
    integration: '',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would typically send the data to your backend
    // For now, we'll just log it and show a success message
    console.log('Form submission to john@clrblt.com:', formData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Thank you! Your information has been submitted. You will receive your master service agreement within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      address: '',
      workType: '',
      monthlyPlan: '',
      integration: '',
      additionalInfo: ''
    });
    
    setIsSubmitting(false);
  };

  const formGroupStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    marginBottom: '1.5rem'
  };

  const labelStyle = {
    fontWeight: '600' as const,
    marginBottom: '0.5rem',
    color: '#374151',
    fontSize: '0.95rem'
  };

  const inputStyle = {
    padding: '0.875rem',
    border: '2px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'border-color 0.2s ease',
    fontFamily: 'inherit'
  };

  const focusStyle = {
    borderColor: '#1e40af',
    outline: 'none',
    boxShadow: '0 0 0 3px rgba(30, 64, 175, 0.1)'
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 1.5rem'
    }}>
      <div style={{
        background: '#ffffff',
        borderRadius: '12px',
        padding: '2.5rem',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        color: '#1f2937'
      }}>
        <div style={{
          background: '#dbeafe',
          border: '1px solid #3b82f6',
          color: '#1e40af',
          padding: '1rem',
          borderRadius: '8px',
          marginBottom: '1.5rem',
          textAlign: 'center',
          fontWeight: '500'
        }}>
          📧 Your master service agreement will be customized based on your selections and emailed within 24 hours
        </div>
        
        <form onSubmit={handleSubmit}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginBottom: '1.5rem'
          }}>
            <div style={formGroupStyle}>
              <label style={labelStyle}>Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="John Smith"
                style={inputStyle}
                onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                onBlur={(e) => Object.assign(e.target.style, inputStyle)}
              />
            </div>
            
            <div style={formGroupStyle}>
              <label style={labelStyle}>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="john@company.com"
                style={inputStyle}
                onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                onBlur={(e) => Object.assign(e.target.style, inputStyle)}
              />
            </div>
            
            <div style={formGroupStyle}>
              <label style={labelStyle}>Company Name *</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
                placeholder="ABC Construction LLC"
                style={inputStyle}
                onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                onBlur={(e) => Object.assign(e.target.style, inputStyle)}
              />
            </div>
            
            <div style={formGroupStyle}>
              <label style={labelStyle}>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(555) 123-4567"
                style={inputStyle}
                onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                onBlur={(e) => Object.assign(e.target.style, inputStyle)}
              />
            </div>
          </div>
          
          <div style={formGroupStyle}>
            <label style={labelStyle}>Company Address *</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              placeholder="123 Main Street, City, State, ZIP"
              style={inputStyle}
              onFocus={(e) => Object.assign(e.target.style, focusStyle)}
              onBlur={(e) => Object.assign(e.target.style, inputStyle)}
            />
          </div>
          
          <div style={formGroupStyle}>
            <label style={labelStyle}>Type of Work You Do *</label>
            <textarea
              name="workType"
              value={formData.workType}
              onChange={handleInputChange}
              required
              placeholder="e.g., Home renovations, commercial construction, roofing, plumbing, electrical work, etc."
              style={{
                ...inputStyle,
                resize: 'vertical',
                minHeight: '100px'
              }}
              onFocus={(e) => Object.assign(e.target.style, focusStyle)}
              onBlur={(e) => Object.assign(e.target.style, { ...inputStyle, resize: 'vertical', minHeight: '100px' })}
            />
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginBottom: '1.5rem'
          }}>
            <div style={formGroupStyle}>
              <label style={labelStyle}>Monthly Plan *</label>
              <select
                name="monthlyPlan"
                value={formData.monthlyPlan}
                onChange={handleInputChange}
                required
                style={inputStyle}
                onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                onBlur={(e) => Object.assign(e.target.style, inputStyle)}
              >
                <option value="">Select a plan...</option>
                <option value="SMB - $0/month (3.00% transaction fee)">SMB - $0/month (3.00% transaction fee)</option>
                <option value="SMB - $499/month (2.49% transaction fee)">SMB - $499/month (2.49% transaction fee)</option>
                <option value="Mid Market - $1,499/month (1.79% transaction fee)">Mid Market - $1,499/month (1.79% transaction fee)</option>
                <option value="Enterprise - LowVol - $2,999/month (1.39% transaction fee)">Enterprise - LowVol - $2,999/month (1.39% transaction fee)</option>
                <option value="Enterprise - MidVol - $7,499/month (1.26% transaction fee)">Enterprise - MidVol - $7,499/month (1.26% transaction fee)</option>
                <option value="Enterprise - HighVol - $10,999/month (1.14% transaction fee)">Enterprise - HighVol - $10,999/month (1.14% transaction fee)</option>
              </select>
            </div>
            
            <div style={formGroupStyle}>
              <label style={labelStyle}>Integration Needed *</label>
              <select
                name="integration"
                value={formData.integration}
                onChange={handleInputChange}
                required
                style={inputStyle}
                onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                onBlur={(e) => Object.assign(e.target.style, inputStyle)}
              >
                <option value="">Select integration level...</option>
                <option value="No integration, Manual Use - $500">No integration, Manual Use - $500</option>
                <option value="Create Escrow/Change Order API - $3,000">Create Escrow/Change Order API - $3,000</option>
                <option value="Full API access + webhooks - $8,500">Full API access + webhooks - $8,500</option>
              </select>
            </div>
          </div>
          
          <div style={formGroupStyle}>
            <label style={labelStyle}>Additional Information (Optional)</label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              placeholder="Any specific requirements, questions, or additional details about your business..."
              style={{
                ...inputStyle,
                resize: 'vertical',
                minHeight: '100px'
              }}
              onFocus={(e) => Object.assign(e.target.style, focusStyle)}
              onBlur={(e) => Object.assign(e.target.style, { ...inputStyle, resize: 'vertical', minHeight: '100px' })}
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: '100%',
              background: isSubmitting ? '#6b7280' : '#1e40af',
              color: 'white',
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.125rem',
              fontWeight: '600',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.2s ease',
              marginTop: '1rem'
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.backgroundColor = '#1d4ed8';
              }
            }}
            onMouseLeave={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.backgroundColor = '#1e40af';
              }
            }}
          >
            {isSubmitting ? 'Sending...' : 'Send My Master Service Agreement'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Escrow payments for remodels, reconstruction, trades, and services,{' '}
              <span className="text-blue-700">Made Simple</span>
            </h1>
            <p className="text-xl text-gray-800 mb-8 max-w-2xl">
              Protect your money with an escrow payment system. Clients pay upfront knowing their funds are safe. Contractors know they will be paid for their work. No hassles, no stress, just an honest payment system.
            </p>
            <a
              href="https://www.calendly.com/clrblt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center hover:bg-blue-800 transition-colors cursor-pointer"
            >
              Schedule a Demo <ChevronRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Benefits for All Parties</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center">
                    <Shield className="mr-2 text-blue-700" />
                    Protection & Security
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800">Funds are securely held and only released when project milestones are verified, protecting both homeowners and contractors.</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center">
                    <Clock className="mr-2 text-blue-700" />
                    Quick Setup
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800">Generate custom agreements in minutes, not days. Our system handles all the complexity while keeping it simple for you.</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center">
                    <Building className="mr-2 text-blue-700" />
                    Project Flexibility
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800">Whether it's a small remodel or major reconstruction, our agreements adapt to your specific project needs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Insurance Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Enhanced Protection</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-blue-50">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center">
                    <Umbrella className="mr-2 text-blue-700" />
                    Fraud Prevention
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-gray-800">
                  <li className="flex items-start">
                    <Shield className="mr-2 h-5 w-5 text-blue-700 mt-1 flex-shrink-0" />
                    <span>Direct payment to escrow prevents contractors from disappearing with project funds</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="mr-2 h-5 w-5 text-blue-700 mt-1 flex-shrink-0" />
                    <span>Funds remain recoverable in cases of fraudulent claims</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="mr-2 h-5 w-5 text-blue-700 mt-1 flex-shrink-0" />
                    <span>Verified milestone completion before fund release</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-blue-50">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center">
                    <AlertTriangle className="mr-2 text-blue-700" />
                    Risk Mitigation
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-gray-800">
                  <li className="flex items-start">
                    <Shield className="mr-2 h-5 w-5 text-blue-700 mt-1 flex-shrink-0" />
                    <span>Documented proof of fund allocation and project progress</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="mr-2 h-5 w-5 text-blue-700 mt-1 flex-shrink-0" />
                    <span>Prevent what a contract protects against. Filing a lien, enforcing a contract, takes time and money.</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="mr-2 h-5 w-5 text-blue-700 mt-1 flex-shrink-0" />
                    <span>Clear audit trail for all transactions and approvals</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section - CORRECTED VERSION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Pricing</h2>
          <PricingAccordion />
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Real Stories from Real People</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Success Stories */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">Protected Projects</h3>
              <Card className="bg-white">
                <CardContent>
                  <p className="text-gray-800 mb-4">
                    "The escrow agreement saved us from disaster. Our contractor had to meet clear milestones before receiving payment, and everything went smoothly. The peace of mind was worth every penny."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-700 font-semibold">JM</span>
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-black">James Morrison</p>
                      <p className="text-sm text-gray-700">Home Renovation Project</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent>
                  <p className="text-gray-800 mb-4">
                    "As an insurance agent, I now recommend this service to all my clients doing renovations. It's the best protection against contractor fraud I've seen in 20 years."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-700 font-semibold">SK</span>
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-black">Sarah Klein</p>
                      <p className="text-sm text-gray-700">Insurance Professional</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Cautionary Tales */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-red-700 mb-6">Cautionary Tales</h3>
              <Card className="bg-red-50">
                <CardContent>
                  <p className="text-gray-800 mb-4">
                    "I wish I had known about this service. We paid our contractor $45,000 upfront for a home addition, and they disappeared after demolition. The money was gone, and we had to take out another loan to finish the project."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-700 font-semibold">RP</span>
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-black">Robert Peterson</p>
                      <p className="text-sm text-gray-700">Home Addition Project</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-red-50">
                <CardContent>
                  <p className="text-gray-800 mb-4">
                    "After Hurricane Ian, we handed over our insurance payout to a contractor who never completed the work. If we had used an escrow service, we could have recovered the funds. Now we're still fighting in court."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-700 font-semibold">ML</span>
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-black">Maria Lopez</p>
                      <p className="text-sm text-gray-700">Storm Damage Reconstruction</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - REPLACES CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Protect Your Projects?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Fill out the form below and a master service agreement will be sent to your email within 24 hours. Get started with secure escrow payments for your construction projects today.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
            <div className="flex items-center">
              <FileText className="text-blue-700 mr-2" />
              <span className="text-gray-800">Legal Compliant</span>
            </div>
            <div className="flex items-center">
              <Shield className="text-blue-700 mr-2" />
              <span className="text-gray-800">Bank-Level Security</span>
            </div>
            <div className="flex items-center">
              <Handshake className="text-blue-700 mr-2" />
              <span className="text-gray-800">Trusted by Thousands</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="text-blue-700 mr-2" />
              <span className="text-gray-800">Paykeeper Powered</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
 
