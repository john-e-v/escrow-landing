import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is a New Fence Worth It? Cost, Resale Value, and When It Doesn\'t Pay | CLRBLT',
  description: 'A new fence recovers roughly 50-65% at resale. Here\'s the real cost, the payback math, and the one situation where a fence actively hurts your home\'s value.',
  openGraph: {
    title: 'Is a New Fence Worth It? Cost, Resale Value, and When It Doesn\'t Pay',
    description: 'A new fence recovers roughly 50-65% at resale. Here\'s the real cost, the payback math, and the one situation where a fence actively hurts your home\'s value.',
    url: 'https://www.clrblt.com/guides/fence-worth-it-resale',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
