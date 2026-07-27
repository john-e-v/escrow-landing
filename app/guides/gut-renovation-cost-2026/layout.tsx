import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does a Full Gut Renovation Cost in 2026? | CLRBLT',
  description: 'A full gut renovation costs $100–$250/sq ft in 2026, or $150K–$375K on a 1,500 sq ft home. Here\'s what moves the number and why the range is so wide.',
  openGraph: {
    title: 'How Much Does a Full Gut Renovation Cost in 2026?',
    description: 'A full gut renovation costs $100–$250/sq ft in 2026, or $150K–$375K on a 1,500 sq ft home. Here\'s what moves the number and why the range is so wide.',
    url: 'https://www.clrblt.com/guides/gut-renovation-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
