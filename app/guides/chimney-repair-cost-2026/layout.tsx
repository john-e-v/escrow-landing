import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does Chimney Repair Cost in 2026? | CLRBLT',
  description: 'Chimney repair costs $200 to $6,000 in 2026, with full rebuilds topping $12,000. Here\'s what drives the range: repointing, crown, flue liner, and structural work.',
  openGraph: {
    title: 'How Much Does Chimney Repair Cost in 2026?',
    description: 'Chimney repair costs $200 to $6,000 in 2026, with full rebuilds topping $12,000. Here\'s what drives the range: repointing, crown, flue liner, and structural work.',
    url: 'https://www.clrblt.com/guides/chimney-repair-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
