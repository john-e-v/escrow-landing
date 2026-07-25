import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does an Electrical Panel Upgrade Cost in 2026? | CLRBLT',
  description: 'A 200-amp electrical panel upgrade costs $2,000–$6,500 in 2026. Here\'s what drives the range: amperage, service location, utility fees, and hidden code work.',
  openGraph: {
    title: 'How Much Does an Electrical Panel Upgrade Cost in 2026?',
    description: 'A 200-amp electrical panel upgrade costs $2,000–$6,500 in 2026. Here\'s what drives the range: amperage, service location, utility fees, and hidden code work.',
    url: 'https://www.clrblt.com/guides/electrical-panel-upgrade-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
