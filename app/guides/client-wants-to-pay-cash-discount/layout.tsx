import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Client Offered Cash for a Discount: Why It Costs You More Than It Saves | CLRBLT',
  description: 'A cash discount saves the client 5% and costs you every dispute protection you had. Here\'s why untraceable payment is a liability and what to do instead.',
  openGraph: {
    title: 'The Client Offered Cash for a Discount: Why It Costs You More Than It Saves',
    description: 'A cash discount saves the client 5% and costs you every dispute protection you had. Here\'s why untraceable payment is a liability and what to do instead.',
    url: 'https://www.clrblt.com/guides/client-wants-to-pay-cash-discount',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
