import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does Mold Remediation Cost in 2026? | CLRBLT',
  description: 'Mold remediation costs $1,500–$9,000 for most jobs in 2026, up to $30K for whole-house. Here\'s what drives the range: square footage, source, and access.',
  openGraph: {
    title: 'How Much Does Mold Remediation Cost in 2026?',
    description: 'Mold remediation costs $1,500–$9,000 for most jobs in 2026, up to $30K for whole-house. Here\'s what drives the range: square footage, source, and access.',
    url: 'https://www.clrblt.com/guides/mold-remediation-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
