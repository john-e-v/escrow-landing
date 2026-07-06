'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { buildPropertySlug } from '@/lib/property';

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
    <form onSubmit={handleSubmit} className="form-stack">
      <input
        type="text" placeholder="Street Address" required
        value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)}
        className="form-input"
      />
      <div className="form-row form-row-3">
        <input
          type="text" placeholder="City" required
          value={city} onChange={(e) => setCity(e.target.value)}
          className="form-input"
        />
        <input
          type="text" placeholder="State" required maxLength={2}
          value={state} onChange={(e) => setState(e.target.value)}
          className="form-input"
        />
        <input
          type="text" placeholder="ZIP" required
          value={zip} onChange={(e) => setZip(e.target.value)}
          className="form-input"
        />
      </div>
      <button type="submit" disabled={!isValid} className="form-button">
        View Property Page
      </button>
    </form>
  );
}
