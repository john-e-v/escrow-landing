import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Contractor Wants Full Payment Before Starting: Why That Ends the Conversation | CLRBLT',
  description: 'No legitimate contractor needs 100% upfront. Here\'s the payment structure to demand, the documents to request, and the red flag that ends the hire today.',
  openGraph: {
    title: 'The Contractor Wants Full Payment Before Starting: Why That Ends the Conversation',
    description: 'No legitimate contractor needs 100% upfront. Here\'s the payment structure to demand, the documents to request, and the red flag that ends the hire today.',
    url: 'https://www.clrblt.com/guides/contractor-wants-full-payment-before-work',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
