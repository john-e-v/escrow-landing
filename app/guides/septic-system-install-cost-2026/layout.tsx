import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does a New Septic System Cost in 2026? | CLRBLT',
  description: 'A new septic system costs $5,000-$30,000 in 2026, with most conventional installs at $8,000-$15,000. Here\'s what drives the range: soil, tank size, and perc tests.',
  openGraph: {
    title: 'How Much Does a New Septic System Cost in 2026?',
    description: 'A new septic system costs $5,000-$30,000 in 2026, with most conventional installs at $8,000-$15,000. Here\'s what drives the range: soil, tank size, and perc tests.',
    url: 'https://www.clrblt.com/guides/septic-system-install-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
