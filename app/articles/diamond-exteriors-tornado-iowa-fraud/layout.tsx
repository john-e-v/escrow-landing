import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Iowa Contractor Who Took Storm Deposits and Faced Federal Charges | CLRBLT',
  description: 'How an Iowa contractor took storm-repair deposits from homeowners and left jobs unfinished, leading to theft charges and restitution battles.',
  openGraph: {
    title: 'The Iowa Contractor Who Took Storm Deposits and Faced Federal Charges',
    description: 'How an Iowa contractor took storm-repair deposits from homeowners and left jobs unfinished, leading to theft charges and restitution battles.',
    url: 'https://www.clrblt.com/articles/diamond-exteriors-tornado-iowa-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
