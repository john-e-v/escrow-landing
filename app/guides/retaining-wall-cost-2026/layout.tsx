import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does a Retaining Wall Cost in 2026? | CLRBLT',
  description: 'Retaining walls cost $3,500–$12,000 for typical jobs, but tall or engineered walls hit $25K+. Here\'s what drives the range: height, material, drainage, and soil.',
  openGraph: {
    title: 'How Much Does a Retaining Wall Cost in 2026?',
    description: 'Retaining walls cost $3,500–$12,000 for typical jobs, but tall or engineered walls hit $25K+. Here\'s what drives the range: height, material, drainage, and soil.',
    url: 'https://www.clrblt.com/guides/retaining-wall-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
