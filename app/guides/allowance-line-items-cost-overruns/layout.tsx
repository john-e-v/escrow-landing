import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why the Allowances in Your Contract Blew Your Budget by $9K | CLRBLT',
  description: 'A $3K tile allowance became $12K at final billing. Here\'s how vague allowances hide real costs in your contract and the structural fix that stops the overrun.',
  openGraph: {
    title: 'Why the Allowances in Your Contract Blew Your Budget by $9K',
    description: 'A $3K tile allowance became $12K at final billing. Here\'s how vague allowances hide real costs in your contract and the structural fix that stops the overrun.',
    url: 'https://www.clrblt.com/guides/allowance-line-items-cost-overruns',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
