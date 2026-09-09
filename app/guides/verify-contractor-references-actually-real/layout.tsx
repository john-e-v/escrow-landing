import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Confirm a Contractor\'s References Are Real People (Not Their Buddies) | CLRBLT',
  description: 'Confirm a contractor\'s references are real past clients in 15 minutes: cross-check the address, the permit record, and the payment story before you trust a single review.',
  openGraph: {
    title: 'How to Confirm a Contractor\'s References Are Real People (Not Their Buddies)',
    description: 'Confirm a contractor\'s references are real past clients in 15 minutes: cross-check the address, the permit record, and the payment story before you trust a single review.',
    url: 'https://www.clrblt.com/guides/verify-contractor-references-actually-real',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
