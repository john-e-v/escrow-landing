import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Tennessee Contractor Who Took Over $700,000 From Homeowners | CLRBLT',
  description: 'How a Tennessee contractor defrauded homeowners of over $700,000 by taking deposits for work he never finished, and how escrow could have helped.',
  openGraph: {
    title: 'The Tennessee Contractor Who Took Over $700,000 From Homeowners',
    description: 'How a Tennessee contractor defrauded homeowners of over $700,000 by taking deposits for work he never finished, and how escrow could have helped.',
    url: 'https://www.clrblt.com/articles/tennessee-contractor-fraud-james-honeycutt',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
