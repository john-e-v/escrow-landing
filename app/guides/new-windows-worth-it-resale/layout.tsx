import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Are New Windows Worth It? Cost, Resale Value, and When to Skip It | CLRBLT',
  description: 'New windows recoup about 65-70% at resale. Full cost math, energy payback timelines, and the one condition where replacing them loses you money.',
  openGraph: {
    title: 'Are New Windows Worth It? Cost, Resale Value, and When to Skip It',
    description: 'New windows recoup about 65-70% at resale. Full cost math, energy payback timelines, and the one condition where replacing them loses you money.',
    url: 'https://www.clrblt.com/guides/new-windows-worth-it-resale',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
