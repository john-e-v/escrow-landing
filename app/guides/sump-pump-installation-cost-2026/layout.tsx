import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does a Sump Pump Installation Cost in 2026? | CLRBLT',
  description: 'Sump pump installation runs $1,200–$5,500 in 2026, or up to $12K with a full interior drain system. Here\'s what moves the number: pit, pump type, and slab work.',
  openGraph: {
    title: 'How Much Does a Sump Pump Installation Cost in 2026?',
    description: 'Sump pump installation runs $1,200–$5,500 in 2026, or up to $12K with a full interior drain system. Here\'s what moves the number: pit, pump type, and slab work.',
    url: 'https://www.clrblt.com/guides/sump-pump-installation-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
