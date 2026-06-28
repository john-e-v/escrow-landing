import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Maryland Contractor Who Took Over $3 Million From Homeowners | CLRBLT',
  description: 'How a Maryland contractor allegedly stole over $3 million from homeowners through unfinished and abandoned home improvement projects.',
  openGraph: {
    title: 'The Maryland Contractor Who Took Over $3 Million From Homeowners',
    description: 'How a Maryland contractor allegedly stole over $3 million from homeowners through unfinished and abandoned home improvement projects.',
    url: 'https://www.clrblt.com/articles/ramon-llanes-maryland-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
