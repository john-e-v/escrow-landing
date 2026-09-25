import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is Adding a Second Bathroom Worth It? Cost, Resale Value, and When It Doesn\'t Pay | CLRBLT',
  description: 'Adding a second bathroom recovers 50-60% at resale and often more in a one-bath home. Here\'s the real cost, payback, and when it backfires.',
  openGraph: {
    title: 'Is Adding a Second Bathroom Worth It? Cost, Resale Value, and When It Doesn\'t Pay',
    description: 'Adding a second bathroom recovers 50-60% at resale and often more in a one-bath home. Here\'s the real cost, payback, and when it backfires.',
    url: 'https://www.clrblt.com/guides/new-bathroom-addition-worth-it-resale',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
