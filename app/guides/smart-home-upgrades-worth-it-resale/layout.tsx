import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Are Smart Home Upgrades Worth It? Cost, Resale Value, and When They Don\'t Pay | CLRBLT',
  description: 'Most smart home upgrades return under 50% at resale. Here\'s which ones actually pay off, the real cost ranges, and when they\'re just convenience.',
  openGraph: {
    title: 'Are Smart Home Upgrades Worth It? Cost, Resale Value, and When They Don\'t Pay',
    description: 'Most smart home upgrades return under 50% at resale. Here\'s which ones actually pay off, the real cost ranges, and when they\'re just convenience.',
    url: 'https://www.clrblt.com/guides/smart-home-upgrades-worth-it-resale',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
