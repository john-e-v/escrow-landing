import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '7 Contract Clauses That Stop Disputes Before They Start | CLRBLT',
  description: '7 copy-paste contract clauses that stop disputes: payment triggers, delay language, material substitution, and cleanup terms you can add to your next job today.',
  openGraph: {
    title: '7 Contract Clauses That Stop Disputes Before They Start',
    description: '7 copy-paste contract clauses that stop disputes: payment triggers, delay language, material substitution, and cleanup terms you can add to your next job today.',
    url: 'https://www.clrblt.com/guides/contract-clauses-avoid-disputes',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
