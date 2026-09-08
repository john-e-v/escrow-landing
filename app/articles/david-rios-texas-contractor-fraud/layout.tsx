import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The San Antonio Contractor Who Took Over $400K From Homeowners | CLRBLT',
  description: 'A San Antonio contractor took over $400,000 in deposits from homeowners and left projects unfinished. Here\'s what happened and how to protect yourself.',
  openGraph: {
    title: 'The San Antonio Contractor Who Took Over $400K From Homeowners',
    description: 'A San Antonio contractor took over $400,000 in deposits from homeowners and left projects unfinished. Here\'s what happened and how to protect yourself.',
    url: 'https://www.clrblt.com/articles/david-rios-texas-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
