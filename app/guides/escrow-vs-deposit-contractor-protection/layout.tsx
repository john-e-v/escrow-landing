import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Escrow vs. Deposit: Which One Actually Protects You From Non-Payment? | CLRBLT',
  description: 'A deposit protects your cash flow. Escrow protects your payment. Here\'s the operational difference and why escrow stops non-payment before it starts.',
  openGraph: {
    title: 'Escrow vs. Deposit: Which One Actually Protects You From Non-Payment?',
    description: 'A deposit protects your cash flow. Escrow protects your payment. Here\'s the operational difference and why escrow stops non-payment before it starts.',
    url: 'https://www.clrblt.com/guides/escrow-vs-deposit-contractor-protection',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
