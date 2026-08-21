import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Nashville Contractor Who Took Homeowner Deposits and Left Homes Unfinished | CLRBLT',
  description: 'How a Nashville-area contractor took homeowner deposits, abandoned projects, and left families fighting to recover their money.',
  openGraph: {
    title: 'The Nashville Contractor Who Took Homeowner Deposits and Left Homes Unfinished',
    description: 'How a Nashville-area contractor took homeowner deposits, abandoned projects, and left families fighting to recover their money.',
    url: 'https://www.clrblt.com/articles/gary-mize-tennessee-nashville-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
