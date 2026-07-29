import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Before You Hand Over a Deposit: 8 Things to Verify First | CLRBLT',
  description: '8 things to verify before you pay a contractor a deposit: license, insurance, written scope, payment schedule, and the deposit method that should end the conversation.',
  openGraph: {
    title: 'Before You Hand Over a Deposit: 8 Things to Verify First',
    description: '8 things to verify before you pay a contractor a deposit: license, insurance, written scope, payment schedule, and the deposit method that should end the conversation.',
    url: 'https://www.clrblt.com/guides/questions-before-signing-contract-deposit',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
