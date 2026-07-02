import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Indiana Contractor Who Took Over $100,000 From Homeowners | CLRBLT',
  description: 'How an Indiana contractor took over $100,000 in deposits for unfinished home projects and faced felony fraud charges.',
  openGraph: {
    title: 'The Indiana Contractor Who Took Over $100,000 From Homeowners',
    description: 'How an Indiana contractor took over $100,000 in deposits for unfinished home projects and faced felony fraud charges.',
    url: 'https://www.clrblt.com/articles/julian-mcclurkin-indiana-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
