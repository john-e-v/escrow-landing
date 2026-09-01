import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Oregon Contractor Who Took Over $600,000 From Portland-Area Homeowners | CLRBLT',
  description: 'How an Oregon contractor took over $600,000 in deposits from Portland-area homeowners and left projects unfinished, leading to felony theft charges.',
  openGraph: {
    title: 'The Oregon Contractor Who Took Over $600,000 From Portland-Area Homeowners',
    description: 'How an Oregon contractor took over $600,000 in deposits from Portland-area homeowners and left projects unfinished, leading to felony theft charges.',
    url: 'https://www.clrblt.com/articles/roy-gene-sparks-oregon-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
