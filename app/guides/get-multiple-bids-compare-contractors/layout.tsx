import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Many Bids Should You Get Before Hiring a Contractor? (And How to Compare Them) | CLRBLT',
  description: 'Get exactly 3 bids on identical scope, then compare line items—not bottom lines. The checklist that stops apples-to-oranges quotes from costing you thousands.',
  openGraph: {
    title: 'How Many Bids Should You Get Before Hiring a Contractor? (And How to Compare Them)',
    description: 'Get exactly 3 bids on identical scope, then compare line items—not bottom lines. The checklist that stops apples-to-oranges quotes from costing you thousands.',
    url: 'https://www.clrblt.com/guides/get-multiple-bids-compare-contractors',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
