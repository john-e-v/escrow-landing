import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The California Contractor Who Took Over $2.6M From Homeowners in Grand Theft Case | CLRBLT',
  description: 'How a San Diego contractor defrauded homeowners of millions in deposits for unfinished remodels, leading to grand theft charges.',
  openGraph: {
    title: 'The California Contractor Who Took Over $2.6M From Homeowners in Grand Theft Case',
    description: 'How a San Diego contractor defrauded homeowners of millions in deposits for unfinished remodels, leading to grand theft charges.',
    url: 'https://www.clrblt.com/articles/george-quintanilla-california-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
