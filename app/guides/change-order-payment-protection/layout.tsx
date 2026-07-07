import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Get Paid for Change Orders Without Chasing the Client | CLRBLT',
  description: 'Get change orders funded before you build them. A structural fix for the scope-creep payments contractors lose most often on active jobs.',
  openGraph: {
    title: 'How to Get Paid for Change Orders Without Chasing the Client',
    description: 'Get change orders funded before you build them. A structural fix for the scope-creep payments contractors lose most often on active jobs.',
    url: 'https://www.clrblt.com/guides/change-order-payment-protection',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
