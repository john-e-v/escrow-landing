'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
        <span className="font-bold text-xl tracking-tight">CLRBLT</span>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#how-it-works" className="hover:text-gray-900">How It Works</a>
          <a href="#contractors" className="hover:text-gray-900">For Contractors</a>
        </div>
        <Link href="/create">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </Link>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Escrow-protected payments<br />for construction
        </h1>
        <p className="text-xl text-gray-500 mb-4">Submit your project. Get matched with contractors who accept escrow payments.</p>
        <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
          Your payment stays protected until the work is done right. Contractors get paid quickly when milestones are met. Everyone wins.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/create">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              I Have a Project
            </button>
          </Link>
          <button className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-300 transition-colors">
            I'm a Contractor
          </button>
        </div>
      </section>

      {/* Inline form teaser */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-xl mx-auto text-center mb-10">
          <h2 className="text-2xl font-bold mb-2">Tell us about your project</h2>
          <p className="text-gray-500">We'll connect you with contractors in your area who accept escrow payments.</p>
        </div>
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="space-y-4">
            {['Your Name', 'Email Address', 'Phone Number', 'Project ZIP Code'].map(p => (
              <div key={p} className="w-full rounded-lg border-2 border-gray-200 py-3 px-4 text-gray-400 bg-gray-50 cursor-not-allowed select-none">{p}</div>
            ))}
            <div className="w-full rounded-lg border-2 border-gray-200 py-3 px-4 text-gray-400 bg-gray-50">Type of Project...</div>
            <div className="w-full rounded-lg border-2 border-gray-200 py-3 px-4 text-gray-400 bg-gray-50">Estimated Budget...</div>
          </div>
          <Link href="/create">
            <button className="mt-6 w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Submit Project — $9
            </button>
          </Link>
          <p className="text-center text-xs text-gray-400 mt-3">Your information is secure and never shared without permission.</p>
        </div>
      </section>

      {/* Why escrow */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Why escrow changes everything</h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Traditional contractor payments are broken. Either the homeowner risks paying upfront, or the contractor risks not getting paid. Escrow fixes both.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Funds held securely', body: 'Money goes into escrow before work begins. It\'s protected, visible to both parties, and released only when milestones are verified.' },
            { title: 'Milestone-based release', body: 'Break the project into phases. Contractors get paid as they complete each milestone. No more chasing payments or wondering where your money went.' },
            { title: 'Trust built in', body: 'When both sides know the money is protected and the terms are clear, relationships stay professional and projects stay on track.' },
          ].map(card => (
            <div key={card.title} className="bg-gray-50 rounded-xl p-7">
              <h3 className="font-bold text-lg mb-3">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How it works</h2>
          <p className="text-center text-gray-500 mb-14">Simple for homeowners. Simple for contractors. Protected for everyone.</p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-6">For Project Owners</p>
              {[
                { n: 1, title: 'Submit your project', body: 'Tell us what you need done, your budget, and your location.' },
                { n: 2, title: 'Get matched', body: 'We connect you with contractors in your area who accept escrow payments.' },
                { n: 3, title: 'Fund the escrow', body: 'Once you\'ve agreed on scope and price, deposit funds into the secure escrow account.' },
                { n: 4, title: 'Approve milestones', body: 'As work is completed, approve each phase and funds are released to the contractor.' },
              ].map(step => (
                <div key={step.n} className="flex gap-5 mb-7">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">{step.n}</span>
                  <div>
                    <p className="font-semibold mb-1">{step.title}</p>
                    <p className="text-gray-500 text-sm">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div id="contractors">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-6">For Contractors</p>
              {[
                { n: 1, title: 'Sign up free', body: 'Create your profile and tell us your service area and specialties.' },
                { n: 2, title: 'Receive leads', body: 'Get notified when projects in your area match your services.' },
                { n: 3, title: 'Win the job', body: 'Connect with the homeowner, submit your bid, and agree on milestones.' },
                { n: 4, title: 'Get paid reliably', body: 'Complete milestones and receive payment. Pay suppliers directly from escrow if needed.' },
              ].map(step => (
                <div key={step.n} className="flex gap-5 mb-7">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 text-white text-sm font-bold flex items-center justify-center">{step.n}</span>
                  <div>
                    <p className="font-semibold mb-1">{step.title}</p>
                    <p className="text-gray-500 text-sm">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-y border-gray-100">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: '$0', label: 'Monthly fees for contractors' },
            { stat: '100%', label: 'Funds protected until approval' },
            { stat: '24hr', label: 'Typical payment release' },
            { stat: 'Direct', label: 'Supplier payments from escrow' },
          ].map(s => (
            <div key={s.stat}>
              <p className="text-3xl font-bold mb-1">{s.stat}</p>
              <p className="text-gray-500 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contractor CTA */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Contractors: free leads, guaranteed payment</h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Stop chasing invoices and wondering when you'll get paid. With escrow, the money is already there. You just have to earn it.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: 'No monthly fees, ever', body: 'Sign up free. We only make money when you do—through a small transaction fee when funds are released.' },
            { title: 'Qualified leads sent to you', body: 'We match you with homeowners and businesses in your area who are ready to start and have budget in hand.' },
            { title: 'Pay suppliers directly from escrow', body: 'Need to pay for materials or subcontractors? Funds can be released directly to your vendors from the escrow account.' },
            { title: 'Build trust instantly', body: 'Accepting escrow signals you stand behind your work. It\'s a competitive advantage that helps you close more deals.' },
          ].map(card => (
            <div key={card.title} className="border border-gray-100 rounded-xl p-7">
              <h3 className="font-bold mb-2">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-md mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">Simple Pricing</p>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 space-y-4 text-left">
            {[
              { label: 'Sign up', value: 'Free' },
              { label: 'Receive leads', value: 'Free' },
              { label: 'Monthly fee', value: '$0' },
              { label: 'Transaction fee', value: '0.28–3%' },
            ].map(row => (
              <div key={row.label} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                <span className="text-gray-600">{row.label}</span>
                <span className="font-semibold">{row.value}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">Transaction fee only applies when funds are released from escrow. Fees are reduced with high-volume contractors and high-ticket contracts.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
        <p className="text-gray-500 mb-10">Whether you have a project or you're looking for projects, we've got you covered.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/create">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Submit a Project
            </button>
          </Link>
          <button className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-300 transition-colors">
            Join as Contractor
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-bold text-lg tracking-tight">CLRBLT</span>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#how-it-works" className="hover:text-gray-900">How It Works</a>
            <a href="#contractors" className="hover:text-gray-900">For Contractors</a>
            <a href="#" className="hover:text-gray-900">Pricing</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
