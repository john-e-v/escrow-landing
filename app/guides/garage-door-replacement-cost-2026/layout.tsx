import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does a Garage Door Replacement Cost in 2026? | CLRBLT',
  description: 'Garage door replacement costs $750–$5,500 in 2026, most land at $1,200–$2,800. Here\'s what drives the price: material, insulation, openers, and hardware.',
  openGraph: {
    title: 'How Much Does a Garage Door Replacement Cost in 2026?',
    description: 'Garage door replacement costs $750–$5,500 in 2026, most land at $1,200–$2,800. Here\'s what drives the price: material, insulation, openers, and hardware.',
    url: 'https://www.clrblt.com/guides/garage-door-replacement-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
