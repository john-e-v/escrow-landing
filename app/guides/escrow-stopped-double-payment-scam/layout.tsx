import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Contractor Asked for a Wire \'Straight to the Supplier.\' Escrow Meant the Homeowner Didn\'t Bite. | CLRBLT',
  description: '$18K stayed safe when a homeowner refused an off-platform wire request. Here\'s how escrow-staged funds killed a supplier-redirect scam before it started.',
  openGraph: {
    title: 'The Contractor Asked for a Wire \'Straight to the Supplier.\' Escrow Meant the Homeowner Didn\'t Bite.',
    description: '$18K stayed safe when a homeowner refused an off-platform wire request. Here\'s how escrow-staged funds killed a supplier-redirect scam before it started.',
    url: 'https://www.clrblt.com/guides/escrow-stopped-double-payment-scam',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
