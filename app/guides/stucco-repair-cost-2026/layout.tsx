import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does Stucco Repair Cost in 2026? | CLRBLT',
  description: 'Stucco repair costs $8–$50 per sq ft in 2026. Patches start at $500; full re-stucco hits $15K+. Here\'s what moves the number and why the range is so wide.',
  openGraph: {
    title: 'How Much Does Stucco Repair Cost in 2026?',
    description: 'Stucco repair costs $8–$50 per sq ft in 2026. Patches start at $500; full re-stucco hits $15K+. Here\'s what moves the number and why the range is so wide.',
    url: 'https://www.clrblt.com/guides/stucco-repair-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
