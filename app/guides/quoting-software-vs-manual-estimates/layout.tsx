import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quoting Software vs. Manual Estimates: What Each Actually Costs You | CLRBLT',
  description: 'Quoting software saves hours but templated bids leak margin on complex jobs. Here\'s when estimating tools pay off and when manual still wins.',
  openGraph: {
    title: 'Quoting Software vs. Manual Estimates: What Each Actually Costs You',
    description: 'Quoting software saves hours but templated bids leak margin on complex jobs. Here\'s when estimating tools pay off and when manual still wins.',
    url: 'https://www.clrblt.com/guides/quoting-software-vs-manual-estimates',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
