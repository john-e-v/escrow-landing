import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Wyoming Contractor Who Took Homeowner Deposits and Left Jobs Unfinished | CLRBLT',
  description: 'How a Wyoming contractor took homeowner deposits and left jobs unfinished, and what it teaches about escrow-protected payments.',
  openGraph: {
    title: 'The Wyoming Contractor Who Took Homeowner Deposits and Left Jobs Unfinished',
    description: 'How a Wyoming contractor took homeowner deposits and left jobs unfinished, and what it teaches about escrow-protected payments.',
    url: 'https://www.clrblt.com/articles/michael-lnewman-wyoming-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
