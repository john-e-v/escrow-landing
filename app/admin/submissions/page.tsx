'use client';

/**
 * app/admin/submissions/page.tsx
 *
 * Review queue for homeowner project submissions (/create → /api/checkout).
 * Kept separate from the content-queue admin page (app/admin/page.tsx) —
 * unrelated concerns, no reason to couple them.
 *
 * Auth: NEXT_PUBLIC_ADMIN_SECRET env var checked client-side, same pattern
 * as the content queue.
 */

import { useState, useEffect } from 'react';

interface Submission {
  id: string;
  name: string;
  email: string;
  phone: string;
  zip: string;
  projectType: string;
  budget: string;
  description: string;
  status: string;
  createdAt: string;
}

const SUBMISSION_FIELDS: (keyof Submission)[] = ['name', 'email', 'phone', 'zip', 'projectType', 'budget', 'description'];

export default function SubmissionsAdminPage() {
  const secret = process.env.NEXT_PUBLIC_ADMIN_SECRET ?? '';

  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [error, setError] = useState('');
  const [expanded, setExpanded] = useState<string | null>(null);
  const [edits, setEdits] = useState<Record<string, Partial<Submission>>>({});
  const [saving, setSaving] = useState<string | null>(null);

  async function load() {
    const res = await fetch('/api/submissions', { headers: { 'x-admin-secret': secret } });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error ?? 'Failed to load submissions');
      return;
    }
    setSubmissions(data.submissions ?? []);
  }

  useEffect(() => { load(); }, []);

  function editField(id: string, field: keyof Submission, value: string) {
    setEdits((prev) => ({ ...prev, [id]: { ...prev[id], [field]: value } }));
  }

  async function save(id: string) {
    const patch = edits[id];
    if (!patch) return;
    setSaving(id);
    const res = await fetch('/api/submissions', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'x-admin-secret': secret },
      body: JSON.stringify({ id, ...patch }),
    });
    const data = await res.json();
    if (res.ok) {
      setSubmissions((subs) => subs.map((s) => (s.id === id ? data.submission : s)));
      setEdits((prev) => { const next = { ...prev }; delete next[id]; return next; });
    }
    setSaving(null);
  }

  return (
    <main style={{ maxWidth: 780, margin: '0 auto', padding: '2rem 1rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: 22, fontWeight: 500, margin: '0 0 1.5rem' }}>Clearbuilt / Project submissions</h1>

      {error && <p style={{ color: '#A32D2D', fontSize: 13 }}>{error}</p>}
      {!error && submissions.length === 0 && <p style={{ color: '#888', fontSize: 13 }}>No submissions yet.</p>}

      {submissions.map((sub) => {
        const isOpen = expanded === sub.id;
        const patch = edits[sub.id] ?? {};
        const value = (field: keyof Submission) => (patch[field] ?? sub[field]) as string;
        const dirty = Object.keys(patch).length > 0;

        return (
          <div key={sub.id} style={{ border: '0.5px solid #e0e0e0', borderRadius: 12, marginBottom: 10, overflow: 'hidden', background: '#fff' }}>
            <div
              onClick={() => setExpanded(isOpen ? null : sub.id)}
              style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 18px', cursor: 'pointer' }}
            >
              <span style={{
                fontSize: 11, fontWeight: 500, padding: '3px 10px', borderRadius: 20,
                background: sub.status === 'paid' ? '#0F6E5615' : '#854F0B15',
                color: sub.status === 'paid' ? '#0F6E56' : '#854F0B',
                whiteSpace: 'nowrap',
              }}>
                {sub.status}
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 500, fontSize: 14 }}>{sub.name} — {sub.projectType} in {sub.zip}</div>
                <div style={{ color: '#888', fontSize: 12, marginTop: 2 }}>{sub.email} · {new Date(sub.createdAt).toLocaleDateString()}</div>
              </div>
              <span style={{ fontSize: 18, color: '#aaa', flexShrink: 0 }}>{isOpen ? '↑' : '↓'}</span>
            </div>

            {isOpen && (
              <div style={{ borderTop: '0.5px solid #e0e0e0', padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {SUBMISSION_FIELDS.map((field) => (
                  <label key={field} style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 12, color: '#888' }}>
                    {field}
                    {field === 'description' ? (
                      <textarea
                        value={value(field)}
                        onChange={(e) => editField(sub.id, field, e.target.value)}
                        rows={3}
                        style={{ fontSize: 13, color: '#111', border: '0.5px solid #ddd', borderRadius: 6, padding: '6px 8px', fontFamily: 'inherit' }}
                      />
                    ) : (
                      <input
                        value={value(field)}
                        onChange={(e) => editField(sub.id, field, e.target.value)}
                        style={{ fontSize: 13, color: '#111', border: '0.5px solid #ddd', borderRadius: 6, padding: '6px 8px' }}
                      />
                    )}
                  </label>
                ))}
                <button
                  onClick={() => save(sub.id)}
                  disabled={!dirty || saving === sub.id}
                  style={{
                    alignSelf: 'flex-start', padding: '8px 16px', borderRadius: 8, fontSize: 13, fontWeight: 500,
                    background: dirty ? '#0F6E56' : '#eee', color: dirty ? '#fff' : '#aaa', border: 'none',
                    cursor: dirty ? 'pointer' : 'not-allowed',
                  }}
                >
                  {saving === sub.id ? 'Saving…' : 'Save changes'}
                </button>
              </div>
            )}
          </div>
        );
      })}
    </main>
  );
}
