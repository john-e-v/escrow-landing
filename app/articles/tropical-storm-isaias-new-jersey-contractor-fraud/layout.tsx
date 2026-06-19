import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The New Jersey Contractor Who Took $1M From Homeowners and Vanished | CLRBLT',
  description: 'How a New Jersey contractor allegedly stole over $1M from homeowners by taking deposits for work he never completed, leading to criminal theft charges.',
  openGraph: {
    title: 'The New Jersey Contractor Who Took $1M From Homeowners and Vanished',
    description: 'How a New Jersey contractor allegedly stole over $1M from homeowners by taking deposits for work he never completed, leading to criminal theft charges.',
    url: 'https://www.clrblt.com/articles/tropical-storm-isaias-new-jersey-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
