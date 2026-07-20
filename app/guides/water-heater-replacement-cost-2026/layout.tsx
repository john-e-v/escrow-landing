import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does a Water Heater Replacement Cost in 2026? | CLRBLT',
  description: 'Water heater replacement costs $1,200–$3,500 for tank units and $4,500–$8,000 for tankless in 2026. Here\'s what drives the price and why quotes vary so much.',
  openGraph: {
    title: 'How Much Does a Water Heater Replacement Cost in 2026?',
    description: 'Water heater replacement costs $1,200–$3,500 for tank units and $4,500–$8,000 for tankless in 2026. Here\'s what drives the price and why quotes vary so much.',
    url: 'https://www.clrblt.com/guides/water-heater-replacement-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
