"use client";

import React, { useState } from 'react';
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

// Pricing Accordion Component with inline styles
const PricingAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const pricingData = [
    {
      title: 'Implementation Fee Schedule',
      content: (
        <ul style={{ 
          marginTop: '0.5rem',
          paddingLeft: '1.5rem',
          listStyleType: 'disc'
        }}>
          <li style={{ marginBottom: '0.5rem' }}>No integration, Manual Use: $500</li>
          <li style={{ marginBottom: '0.5rem' }}>Create Escrow/Change Order API: $3,000</li>
          <li style={{ marginBottom: '0.5rem' }}>Full API access + webhooks: $8,500</li>
        </ul>
      ),
    },
    {
      title: 'Pricing Tiers (must stay on plan for 12 months, can change upon renewal)',
      content: (
        <div style={{ overflowX: 'auto', marginTop: '0.5rem' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.875rem',
            minWidth: '600px'
          }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #e5e7eb', padding: '0.5rem', backgroundColor: '#f3f4f6', fontWeight: 600, textAlign: 'left' }}>Plan</th>
                <th style={{ border: '1px solid #e5e7eb', padding: '0.5rem', backgroundColor: '#f3f4f6', fontWeight: 600, textAlign: 'left' }}>Monthly Fee</th>
                <th style={{ border: '1px solid #e5e7eb', padding: '0.5rem', backgroundColor: '#f3f4f6', fontWeight: 600, textAlign: 'left' }}>Transaction %</th>
                <th style={{ border: '1px solid #e5e7eb', padding: '0.5rem', backgroundColor: '#f3f4f6', fontWeight: 600, textAlign: 'left' }}>$120,000</th>
                <th style={{ border: '1px solid #e5e7eb', padding: '0.5rem', backgroundColor: '#f3f4f6', fontWeight: 600, textAlign: 'left' }}>$150,000</th>
                <th style={{ border: '1px solid #e5e7eb', padding: '0.5rem', backgroundColor: '#f3f4f6', fontWeight: 600, textAlign: 'left' }}>$500,000</th>
                <th style={{ border: '1px solid #e5e7eb', padding: '0.5rem', backgroundColor: '#f3f4f6', fontWeight: 600, textAlign: 'left' }}>$2,000,000</th>
                <th style={{ border: '1px solid #e5e7eb', padding: '0.5rem', backgroundColor: '#f3f4f6', fontWeight: 600, textAlign: 'left' }}>$3,000,000</th>
                <th style={{ border: '1px solid #e5e7eb', padding: '0.5rem', backgroundColor: '#f3f4f6', fontWeight: 600, textAlign: 'left' }}>$4,000,000</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: '#ffffff' }}>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>SMB</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$0</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>2.30%</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$2,760</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$3,450</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$11,500</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$46,000</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$69,000</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$92,000</td>
              </tr>
              <tr style={{ backgroundColor: '#f9fafb' }}>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>SMB</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$499</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>1.79%</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$2,647</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$2,684</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$8,949</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$35,799</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$53,699</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$71,599</td>
              </tr>
              <tr style={{ backgroundColor: '#ffffff' }}>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>Mid Market</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$1,499</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>1.39%</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$2,167</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$2,084</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$6,949</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$27,799</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$41,699</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$55,599</td>
              </tr>
              <tr style={{ backgroundColor: '#f9fafb' }}>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>Enterprise - LowVol</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$2,999</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>1.26%</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$2,011</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$1,889</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$6,299</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$25,199</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$37,799</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$50,599</td>
              </tr>
              <tr style={{ backgroundColor: '#ffffff' }}>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>Enterprise - MidVol</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$7,499</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>1.14%</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$1,367</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$1,709</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$5,699</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$22,799</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$34,199</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$45,599</td>
              </tr>
              <tr style={{ backgroundColor: '#f9fafb' }}>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>Enterprise - HighVol</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$10,999</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>0.98%</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$1,167</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$1,469</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$4,899</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$19,599</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$29,399</td>
                <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>$39,199</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
      title: 'Custom Pricing for High Ticket Projects',
      content: (
        <div style={{ overflowX: 'auto', marginTop: '0.5rem' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.875rem'
          }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #e5e7eb', padding: '0.5rem', backgroundColor: '#f3f4f6', fontWeight: 600, textAlign: 'left' }}>Project Amount</th>
                <th style={{ border: '1px solid #e5e7eb', padding: '0.5rem', backgroundColor: '#f3f4f6', fontWeight: 600, textAlign: 'left' }}>Transaction Fee</th>
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
                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
                  <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>{amount}</td>
                  <td style={{ border: '1px solid #e5e7eb', padding: '0.5rem' }}>{fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
  ];

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      {pricingData.map((item, index) => (
        <div 
          key={index} 
          style={{
            borderBottom: '1px solid #e5e7eb'
          }}
        >
          <button
            onClick={() => handleAccordionClick(index)}
            style={{
              width: '100%',
              textAlign: 'left',
              padding: '1rem',
              fontWeight: 600,
              fontSize: '1.125rem',
              backgroundColor: activeIndex === index ? '#f3f4f6' : '#f9fafb',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              border: 'none',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              if (activeIndex !== index) {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
              }
            }}
            onMouseLeave={(e) => {
              if (activeIndex !== index) {
                e.currentTarget.style.backgroundColor = '#f9fafb';
              }
            }}
          >
            <span>{item.title}</span>
            <ChevronRight 
              style={{
                transform: activeIndex === index ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease'
              }}
            />
          </button>
          <div
            style={{
              maxHeight: activeIndex === index ? '1000px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.3s ease, padding 0.3s ease',
              padding: activeIndex === index ? '1rem' : '0 1rem',
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

      {/* Pricing Section */}
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

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Protect Your Projects?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Create your tailored escrow agreement today and ensure smooth, secure construction projects for all parties.
          </p>
          <a
            href="https://www.calendly.com/clrblt"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Schedule a Demo <ChevronRight className="ml-2" />
          </a>
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
