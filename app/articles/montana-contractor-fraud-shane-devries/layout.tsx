import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Montana Contractor Who Took Over $300,000 From Homeowners | CLRBLT',
  description: 'How a Montana contractor took over $300,000 in deposits from homeowners for unfinished work, and the felony theft charges that followed.',
  openGraph: {
    title: 'The Montana Contractor Who Took Over $300,000 From Homeowners',
    description: 'How a Montana contractor took over $300,000 in deposits from homeowners for unfinished work, and the felony theft charges that followed.',
    url: 'https://www.clrblt.com/articles/montana-contractor-fraud-shane-devries',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
