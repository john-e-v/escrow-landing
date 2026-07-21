import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Rhode Island Contractor Who Took Over $150,000 From Homeowners | CLRBLT',
  description: 'How Rhode Island contractor Jason Guertin took deposits from homeowners for projects he never finished, leading to criminal charges.',
  openGraph: {
    title: 'The Rhode Island Contractor Who Took Over $150,000 From Homeowners',
    description: 'How Rhode Island contractor Jason Guertin took deposits from homeowners for projects he never finished, leading to criminal charges.',
    url: 'https://www.clrblt.com/articles/rhode-island-contractor-fraud-jason-guertin',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
