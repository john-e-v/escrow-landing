import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Kansas Contractor Who Took Over $300,000 From Homeowners | CLRBLT',
  description: 'How a Kansas contractor took over $300,000 in deposits from homeowners for unfinished work, leading to felony theft charges.',
  openGraph: {
    title: 'The Kansas Contractor Who Took Over $300,000 From Homeowners',
    description: 'How a Kansas contractor took over $300,000 in deposits from homeowners for unfinished work, leading to felony theft charges.',
    url: 'https://www.clrblt.com/articles/kansas-contractor-fraud-jerry-wilson',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
