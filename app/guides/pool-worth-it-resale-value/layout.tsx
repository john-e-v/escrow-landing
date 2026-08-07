import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is an In-Ground Pool Worth It? Cost, Resale Value, and When It Sinks Your Home Value | CLRBLT',
  description: 'An in-ground pool recovers just 5–35% at resale and costs $35K–$85K to build. Here\'s the math, the upkeep catch, and when a pool actually pays off.',
  openGraph: {
    title: 'Is an In-Ground Pool Worth It? Cost, Resale Value, and When It Sinks Your Home Value',
    description: 'An in-ground pool recovers just 5–35% at resale and costs $35K–$85K to build. Here\'s the math, the upkeep catch, and when a pool actually pays off.',
    url: 'https://www.clrblt.com/guides/pool-worth-it-resale-value',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
