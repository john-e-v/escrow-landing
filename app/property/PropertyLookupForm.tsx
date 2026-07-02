'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { buildPropertySlug } from '@/lib/property';

const inputClass = 'block w-full rounded-md border-2 border-gray-300 py-3 px-4 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100';

export function PropertyLookupForm() {
  const router = useRouter();
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const isValid = streetAddress && city && state && zip;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) return;
    const slug = buildPropertySlug({ streetAddress, city, state, zip });
    router.push(`/property/${slug}`);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text" placeholder="Street Address" required
        value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)}
        className={inputClass}
      />
      <div className="grid grid-cols-3 gap-3">
        <input
          type="text" placeholder="City" required
          value={city} onChange={(e) => setCity(e.target.value)}
          className={inputClass}
        />
        <input
          type="text" placeholder="State" required maxLength={2}
          value={state} onChange={(e) => setState(e.target.value)}
          className={inputClass}
        />
        <input
          type="text" placeholder="ZIP" required
          value={zip} onChange={(e) => setZip(e.target.value)}
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        disabled={!isValid}
        className={`w-full py-3 rounded-lg text-white text-sm font-semibold ${isValid ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-300 cursor-not-allowed'}`}
      >
        View Property Page
      </button>
    </form>
  );
}
