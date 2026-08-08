import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does a Tankless Water Heater Cost to Install in 2026? | CLRBLT',
  description: 'Tankless water heaters cost $1,800–$4,500 installed in 2026, more for gas retrofits. See what moves the price: fuel type, venting, and electrical upgrades.',
  openGraph: {
    title: 'How Much Does a Tankless Water Heater Cost to Install in 2026?',
    description: 'Tankless water heaters cost $1,800–$4,500 installed in 2026, more for gas retrofits. See what moves the price: fuel type, venting, and electrical upgrades.',
    url: 'https://www.clrblt.com/guides/tankless-water-heater-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
