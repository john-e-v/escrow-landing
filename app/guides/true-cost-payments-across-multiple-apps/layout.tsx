import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Real Cost of Managing Payments Across 4 Different Apps | CLRBLT',
  description: 'Running payments across 4 apps costs contractors 5-8 hours a week in reconciliation alone. Here\'s the honest math on a fragmented payment stack.',
  openGraph: {
    title: 'The Real Cost of Managing Payments Across 4 Different Apps',
    description: 'Running payments across 4 apps costs contractors 5-8 hours a week in reconciliation alone. Here\'s the honest math on a fragmented payment stack.',
    url: 'https://www.clrblt.com/guides/true-cost-payments-across-multiple-apps',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
