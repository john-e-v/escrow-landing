import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does a Whole-House Generator Cost in 2026? | CLRBLT',
  description: 'A whole-house generator costs $8,000–$22,000 installed in 2026. Here\'s what drives the range: unit size, fuel type, transfer switch, and gas line work.',
  openGraph: {
    title: 'How Much Does a Whole-House Generator Cost in 2026?',
    description: 'A whole-house generator costs $8,000–$22,000 installed in 2026. Here\'s what drives the range: unit size, fuel type, transfer switch, and gas line work.',
    url: 'https://www.clrblt.com/guides/whole-house-generator-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
