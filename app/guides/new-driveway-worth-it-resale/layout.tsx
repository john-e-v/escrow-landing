import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is Replacing Your Driveway Worth It? Cost, Resale Value, and When to Skip It | CLRBLT',
  description: 'A new driveway recovers roughly 40-60% at resale. Here\'s the real cost, the payback math, and the one situation where replacing it actually pays off.',
  openGraph: {
    title: 'Is Replacing Your Driveway Worth It? Cost, Resale Value, and When to Skip It',
    description: 'A new driveway recovers roughly 40-60% at resale. Here\'s the real cost, the payback math, and the one situation where replacing it actually pays off.',
    url: 'https://www.clrblt.com/guides/new-driveway-worth-it-resale',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
