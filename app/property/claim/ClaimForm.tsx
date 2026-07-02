'use client';

import { useEffect, useState } from 'react';

interface PropertySystem {
  id: string;
  category: string;
  name: string;
  manufacturer: string | null;
  modelNumber: string | null;
  serialNumber: string | null;
}

const CATEGORIES = [
  { value: 'roof', label: 'Roof' },
  { value: 'hvac', label: 'HVAC' },
  { value: 'water_heater', label: 'Water Heater' },
  { value: 'electrical_panel', label: 'Electrical Panel' },
  { value: 'appliance', label: 'Appliance' },
  { value: 'plumbing', label: 'Plumbing' },
  { value: 'foundation', label: 'Foundation' },
  { value: 'other', label: 'Other' },
];

const inputClass = 'block w-full rounded-md border-2 border-gray-300 py-2.5 px-3 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 text-sm';

export function ClaimForm({ slug, displayAddress }: { slug: string; displayAddress: string }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [claiming, setClaiming] = useState(false);
  const [claimed, setClaimed] = useState(false);
  const [error, setError] = useState('');

  const [systems, setSystems] = useState<PropertySystem[]>([]);
  const [systemForm, setSystemForm] = useState({
    category: 'appliance', name: '', manufacturer: '', modelNumber: '', serialNumber: '', installedDate: '', notes: '',
  });
  const [savingSystem, setSavingSystem] = useState(false);

  useEffect(() => {
    fetch(`/api/property/systems?slug=${encodeURIComponent(slug)}`)
      .then((r) => r.json())
      .then((data) => setSystems(data.systems ?? []))
      .catch(() => {});
  }, [slug]);

  async function submitClaim(e: React.FormEvent) {
    e.preventDefault();
    setClaiming(true);
    setError('');
    try {
      const res = await fetch('/api/property/claim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, name, email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Failed to claim property');
      setClaimed(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setClaiming(false);
    }
  }

  async function submitSystem(e: React.FormEvent) {
    e.preventDefault();
    if (!systemForm.name) return;
    setSavingSystem(true);
    setError('');
    try {
      const res = await fetch('/api/property/systems', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, addedByEmail: email, ...systemForm }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Failed to save system');
      setSystems((s) => [...s, data.system]);
      setSystemForm({ category: 'appliance', name: '', manufacturer: '', modelNumber: '', serialNumber: '', installedDate: '', notes: '' });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setSavingSystem(false);
    }
  }

  if (!claimed) {
    return (
      <form onSubmit={submitClaim} className="space-y-4">
        <input type="text" placeholder="Your Name" required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
        <input type="email" placeholder="Email Address" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={claiming}
          className="w-full py-3 rounded-lg text-white text-sm font-semibold bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300"
        >
          {claiming ? 'Submitting…' : 'Claim This Property'}
        </button>
        <p className="text-xs text-gray-400">
          Claiming creates a request tied to your email — we verify ownership manually before it&apos;s reflected publicly.
        </p>
      </form>
    );
  }

  return (
    <div className="space-y-8">
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-green-800">
        Claim request submitted for {displayAddress}. You can start documenting systems and appliances below.
      </div>

      {systems.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-2">Documented so far</h2>
          <ul className="space-y-2">
            {systems.map((s) => (
              <li key={s.id} className="text-sm border border-gray-200 rounded-md px-3 py-2 flex justify-between">
                <span className="text-gray-900">{s.name}</span>
                <span className="text-gray-400">{s.manufacturer} {s.modelNumber}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={submitSystem} className="space-y-3">
        <h2 className="text-sm font-semibold text-gray-700">Add a system or appliance</h2>
        <select
          value={systemForm.category}
          onChange={(e) => setSystemForm((f) => ({ ...f, category: e.target.value }))}
          className={inputClass}
        >
          {CATEGORIES.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
        </select>
        <input
          type="text" placeholder="Name (e.g. Kitchen Refrigerator)" required
          value={systemForm.name} onChange={(e) => setSystemForm((f) => ({ ...f, name: e.target.value }))}
          className={inputClass}
        />
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text" placeholder="Manufacturer"
            value={systemForm.manufacturer} onChange={(e) => setSystemForm((f) => ({ ...f, manufacturer: e.target.value }))}
            className={inputClass}
          />
          <input
            type="text" placeholder="Model Number"
            value={systemForm.modelNumber} onChange={(e) => setSystemForm((f) => ({ ...f, modelNumber: e.target.value }))}
            className={inputClass}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text" placeholder="Serial Number"
            value={systemForm.serialNumber} onChange={(e) => setSystemForm((f) => ({ ...f, serialNumber: e.target.value }))}
            className={inputClass}
          />
          <input
            type="date" placeholder="Installed Date"
            value={systemForm.installedDate} onChange={(e) => setSystemForm((f) => ({ ...f, installedDate: e.target.value }))}
            className={inputClass}
          />
        </div>
        <textarea
          placeholder="Notes"
          rows={2}
          value={systemForm.notes} onChange={(e) => setSystemForm((f) => ({ ...f, notes: e.target.value }))}
          className={inputClass}
        />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={savingSystem}
          className="w-full py-3 rounded-lg text-white text-sm font-semibold bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300"
        >
          {savingSystem ? 'Saving…' : 'Add to Property Record'}
        </button>
      </form>
    </div>
  );
}
