import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Client Offered to Prepay the Whole Job for a Discount: Why It Costs You Later | CLRBLT',
  description: 'A full prepay for a discount costs you margin, leverage, and chargeback protection. Here\'s why milestone escrow beats it and how to structure the counteroffer.',
  openGraph: {
    title: 'The Client Offered to Prepay the Whole Job for a Discount: Why It Costs You Later',
    description: 'A full prepay for a discount costs you margin, leverage, and chargeback protection. Here\'s why milestone escrow beats it and how to structure the counteroffer.',
    url: 'https://www.clrblt.com/guides/client-wants-to-pay-early-for-discount',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
