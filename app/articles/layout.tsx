import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles — Real Stories of Contractor Fraud & Non-Payment | CLRBLT',
  description: 'Documented cases of contractor fraud, homeowner non-payment, and what structural escrow protection could have prevented. Real events, real sources.',
  openGraph: {
    title: 'Articles — Real Stories of Contractor Fraud & Non-Payment | CLRBLT',
    description: 'Documented cases of contractor fraud and homeowner non-payment — and how escrow would have changed the outcome.',
    url: 'https://www.clrblt.com/articles',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
