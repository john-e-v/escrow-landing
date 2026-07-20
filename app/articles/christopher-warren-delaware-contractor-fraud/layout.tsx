import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Delaware Contractor Who Took Over $200,000 From Homeowners | CLRBLT',
  description: 'How a Delaware contractor took over $200,000 in deposits from homeowners for work never completed, and the charges that followed.',
  openGraph: {
    title: 'The Delaware Contractor Who Took Over $200,000 From Homeowners',
    description: 'How a Delaware contractor took over $200,000 in deposits from homeowners for work never completed, and the charges that followed.',
    url: 'https://www.clrblt.com/articles/christopher-warren-delaware-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
