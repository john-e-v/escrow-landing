import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does a New HVAC System Cost in 2026? | CLRBLT',
  description: 'A new HVAC system costs $7,000–$16,000 in 2026, sometimes more. Here\'s what drives the range: system type, ductwork, home size, and regional labor.',
  openGraph: {
    title: 'How Much Does a New HVAC System Cost in 2026?',
    description: 'A new HVAC system costs $7,000–$16,000 in 2026, sometimes more. Here\'s what drives the range: system type, ductwork, home size, and regional labor.',
    url: 'https://www.clrblt.com/guides/hvac-replacement-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
