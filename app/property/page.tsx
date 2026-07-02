import type { Metadata } from 'next';
import { PropertyLookupForm } from './PropertyLookupForm';

export const metadata: Metadata = {
  title: 'Look Up a Property — Permit History & Records | Clearbuilt',
  description: 'Find the Clearbuilt page for any US address — permit history, assessor records, and owner-documented systems and appliances.',
};

export default function PropertyLookupPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="w-full max-w-xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Look up a property</h1>
          <p className="text-gray-500 mb-8">
            Every US address gets a page — permit history, assessor records, and whatever the owner has documented. Enter an address to find or start one.
          </p>
          <PropertyLookupForm />
        </div>
      </div>
    </div>
  );
}
