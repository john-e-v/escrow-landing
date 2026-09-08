import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does Sod Installation Cost in 2026? | CLRBLT',
  description: 'Sod installation costs $0.90–$2.50 per sq ft installed in 2026, or $2,000–$8,000 for a typical yard. Here\'s what moves the number: grass type, grading, and prep.',
  openGraph: {
    title: 'How Much Does Sod Installation Cost in 2026?',
    description: 'Sod installation costs $0.90–$2.50 per sq ft installed in 2026, or $2,000–$8,000 for a typical yard. Here\'s what moves the number: grass type, grading, and prep.',
    url: 'https://www.clrblt.com/guides/sod-installation-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
