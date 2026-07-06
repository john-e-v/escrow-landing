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
      <form onSubmit={submitClaim} className="form-stack">
        <input type="text" placeholder="Your Name" required value={name} onChange={(e) => setName(e.target.value)} className="form-input" />
        <input type="email" placeholder="Email Address" required value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" />
        {error && <p className="form-error">{error}</p>}
        <button type="submit" disabled={claiming} className="form-button">
          {claiming ? 'Submitting…' : 'Claim This Property'}
        </button>
        <p className="form-note">
          Claiming creates a request tied to your email — we verify ownership manually before it&apos;s reflected publicly.
        </p>
      </form>
    );
  }

  return (
    <div className="form-stack">
      <div className="form-success">
        Claim request submitted for {displayAddress}. You can start documenting systems and appliances below.
      </div>

      {systems.length > 0 && (
        <div>
          <h2 className="form-section-title">Documented so far</h2>
          <ul className="system-list">
            {systems.map((s) => (
              <li key={s.id} className="system-item">
                <span className="name">{s.name}</span>
                <span className="meta">{s.manufacturer} {s.modelNumber}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <hr className="divider" />

      <form onSubmit={submitSystem} className="form-stack">
        <h2 className="form-section-title">Add a system or appliance</h2>
        <select
          value={systemForm.category}
          onChange={(e) => setSystemForm((f) => ({ ...f, category: e.target.value }))}
          className="form-select"
        >
          {CATEGORIES.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
        </select>
        <input
          type="text" placeholder="Name (e.g. Kitchen Refrigerator)" required
          value={systemForm.name} onChange={(e) => setSystemForm((f) => ({ ...f, name: e.target.value }))}
          className="form-input"
        />
        <div className="form-row form-row-2">
          <input
            type="text" placeholder="Manufacturer"
            value={systemForm.manufacturer} onChange={(e) => setSystemForm((f) => ({ ...f, manufacturer: e.target.value }))}
            className="form-input"
          />
          <input
            type="text" placeholder="Model Number"
            value={systemForm.modelNumber} onChange={(e) => setSystemForm((f) => ({ ...f, modelNumber: e.target.value }))}
            className="form-input"
          />
        </div>
        <div className="form-row form-row-2">
          <input
            type="text" placeholder="Serial Number"
            value={systemForm.serialNumber} onChange={(e) => setSystemForm((f) => ({ ...f, serialNumber: e.target.value }))}
            className="form-input"
          />
          <input
            type="date" placeholder="Installed Date"
            value={systemForm.installedDate} onChange={(e) => setSystemForm((f) => ({ ...f, installedDate: e.target.value }))}
            className="form-input"
          />
        </div>
        <textarea
          placeholder="Notes"
          rows={2}
          value={systemForm.notes} onChange={(e) => setSystemForm((f) => ({ ...f, notes: e.target.value }))}
          className="form-textarea"
        />
        {error && <p className="form-error">{error}</p>}
        <button type="submit" disabled={savingSystem} className="form-button">
          {savingSystem ? 'Saving…' : 'Add to Property Record'}
        </button>
      </form>
    </div>
  );
}
