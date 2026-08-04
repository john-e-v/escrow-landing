import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Client Paid, Then Filed a Chargeback: How to Stop Losing the Job to a Card Dispute | CLRBLT',
  description: 'A card chargeback can pull your full payment back 60-120 days after the job. Here\'s why credit card disputes favor the buyer and how to structure payment so they can\'t.',
  openGraph: {
    title: 'The Client Paid, Then Filed a Chargeback: How to Stop Losing the Job to a Card Dispute',
    description: 'A card chargeback can pull your full payment back 60-120 days after the job. Here\'s why credit card disputes favor the buyer and how to structure payment so they can\'t.',
    url: 'https://www.clrblt.com/guides/customer-charged-back-after-final-payment',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
