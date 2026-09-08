import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Client \'Accidentally\' Overpaid and Wants the Difference Back: It\'s a Scam | CLRBLT',
  description: 'An overpayment refund request is one of the oldest contractor scams. Here\'s how it works and the payment structure that makes it impossible.',
  openGraph: {
    title: 'The Client \'Accidentally\' Overpaid and Wants the Difference Back: It\'s a Scam',
    description: 'An overpayment refund request is one of the oldest contractor scams. Here\'s how it works and the payment structure that makes it impossible.',
    url: 'https://www.clrblt.com/guides/client-wants-to-wire-deposit-overpay-refund',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
