import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Net-30 Is Quietly Killing Your Cash Flow: How to Get Paid on Completion Instead | CLRBLT',
  description: 'Net-30 terms mean you\'re financing your client for 30 days after the work is done. Here\'s how to restructure payment timing so you get paid on completion.',
  openGraph: {
    title: 'Net-30 Is Quietly Killing Your Cash Flow: How to Get Paid on Completion Instead',
    description: 'Net-30 terms mean you\'re financing your client for 30 days after the work is done. Here\'s how to restructure payment timing so you get paid on completion.',
    url: 'https://www.clrblt.com/guides/net-30-payment-terms-kill-cash-flow',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
