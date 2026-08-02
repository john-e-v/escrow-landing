import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Client Paid 90% and Called It \'Done.\' Here\'s How to Stop Eating the Last 10% | CLRBLT',
  description: 'Clients who pay 90% and stall on the rest cost you thousands. Lock the final milestone into escrow so the last payment releases on completion, not negotiation.',
  openGraph: {
    title: 'The Client Paid 90% and Called It \'Done.\' Here\'s How to Stop Eating the Last 10%',
    description: 'Clients who pay 90% and stall on the rest cost you thousands. Lock the final milestone into escrow so the last payment releases on completion, not negotiation.',
    url: 'https://www.clrblt.com/guides/partial-payment-final-milestone-trap',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
