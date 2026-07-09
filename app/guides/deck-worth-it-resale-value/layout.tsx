import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is a Deck Worth It? Cost, Resale Value, and When It Backfires | CLRBLT',
  description: 'Yes — a wood deck recoups about 65-80% at resale for $17K-$25K. But composite drops that fast, and oversizing can backfire. Here\'s the math.',
  openGraph: {
    title: 'Is a Deck Worth It? Cost, Resale Value, and When It Backfires',
    description: 'Yes — a wood deck recoups about 65-80% at resale for $17K-$25K. But composite drops that fast, and oversizing can backfire. Here\'s the math.',
    url: 'https://www.clrblt.com/guides/deck-worth-it-resale-value',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
