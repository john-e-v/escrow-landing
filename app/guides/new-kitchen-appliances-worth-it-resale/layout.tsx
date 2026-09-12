import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Are High-End Kitchen Appliances Worth It? Cost, Resale Value, and When to Skip It | CLRBLT',
  description: 'High-end kitchen appliances recover only 25-50% at resale. Here\'s the real cost, the payback math, and the one price tier where they actually pay off.',
  openGraph: {
    title: 'Are High-End Kitchen Appliances Worth It? Cost, Resale Value, and When to Skip It',
    description: 'High-end kitchen appliances recover only 25-50% at resale. Here\'s the real cost, the payback math, and the one price tier where they actually pay off.',
    url: 'https://www.clrblt.com/guides/new-kitchen-appliances-worth-it-resale',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
