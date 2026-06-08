import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'After Hurricane Harvey: How Thousands Lost Deposits to Contractor Fraud | CLRBLT',
  description: 'After Hurricane Harvey, unlicensed contractors swept through Houston collecting deposits for repairs they never intended to complete. A documented look at the fraud pattern — and what escrow would have changed.',
  openGraph: {
    title: 'After Hurricane Harvey: Contractor Deposit Fraud',
    description: 'How thousands of Houston homeowners lost money to contractors who vanished after collecting deposits — and the structural fix.',
    url: 'https://www.clrblt.com/articles/hurricane-harvey-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
