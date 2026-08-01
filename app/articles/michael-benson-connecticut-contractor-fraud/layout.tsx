import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Connecticut Contractor Who Took Over $300,000 From Homeowners | CLRBLT',
  description: 'How a Connecticut contractor collected over $300,000 in home improvement deposits and left projects unfinished, leading to larceny charges.',
  openGraph: {
    title: 'The Connecticut Contractor Who Took Over $300,000 From Homeowners',
    description: 'How a Connecticut contractor collected over $300,000 in home improvement deposits and left projects unfinished, leading to larceny charges.',
    url: 'https://www.clrblt.com/articles/michael-benson-connecticut-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
