'use client';

import React, { useState } from 'react';
import { Shield } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
  projectType: string;
  budget: string;
  description: string;
}

export const AgreementCreation: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    state: '',
    zip: '',
    projectType: '',
    budget: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isValid =
    formData.name && formData.email && formData.phone &&
    formData.streetAddress && formData.city && formData.state && formData.zip &&
    formData.projectType && formData.budget && formData.description;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setIsSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create checkout session');
      if (!data.url) throw new Error('No checkout URL returned');
      window.location.href = data.url;
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      setIsSubmitting(false);
    }
  };

  const inputClass = 'block w-full rounded-md border-2 border-gray-300 py-3 px-4 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100';

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="w-full max-w-xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Tell us about your project</h1>
          <p className="text-gray-500 mb-8">
            We'll connect you with contractors in your area who accept escrow payments.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className={inputClass}
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className={inputClass}
            />
            <input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              placeholder="Project Street Address"
              required
              className={inputClass}
            />
            <div className="grid grid-cols-3 gap-3">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                required
                className={inputClass}
              />
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                required
                maxLength={2}
                className={inputClass}
              />
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                placeholder="ZIP Code"
                required
                className={inputClass}
              />
            </div>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className={inputClass}
            >
              <option value="">Type of Project</option>
              <option value="kitchen_bath">Kitchen/Bath Remodel</option>
              <option value="home_addition">Home Addition</option>
              <option value="full_renovation">Full Renovation</option>
              <option value="roofing">Roofing</option>
              <option value="hvac">HVAC</option>
              <option value="electrical">Electrical</option>
              <option value="plumbing">Plumbing</option>
              <option value="landscaping">Landscaping/Hardscape</option>
              <option value="commercial">Commercial Build-out</option>
              <option value="restoration">Storm/Fire Restoration</option>
              <option value="other">Other</option>
            </select>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className={inputClass}
            >
              <option value="">Estimated Budget</option>
              <option value="under_10k">Under $10,000</option>
              <option value="10k_25k">$10,000 – $25,000</option>
              <option value="25k_50k">$25,000 – $50,000</option>
              <option value="50k_100k">$50,000 – $100,000</option>
              <option value="100k_250k">$100,000 – $250,000</option>
              <option value="250k_500k">$250,000 – $500,000</option>
              <option value="500k_plus">$500,000+</option>
            </select>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Project Description"
              required
              rows={4}
              className={inputClass}
            />

            {/* Fee notice */}
            <div className="bg-blue-50 rounded-lg px-5 py-4 flex items-center justify-between">
              <span className="text-gray-700 text-sm">Project submission fee</span>
              <span className="text-gray-900 font-bold text-lg">$9.00</span>
            </div>

            {error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className={`w-full py-4 rounded-lg text-white text-lg font-semibold transition-colors ${
                isValid && !isSubmitting ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-300 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? 'Redirecting to payment…' : 'Submit Project — $9'}
            </button>

            <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
              <Shield className="h-3 w-3" /> Your information is secure and never shared without permission.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
