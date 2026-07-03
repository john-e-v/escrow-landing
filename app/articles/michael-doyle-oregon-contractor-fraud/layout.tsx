import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Oregon Contractor Who Took Over $250,000 From Homeowners and Fled | CLRBLT',
  description: 'How an Oregon contractor collected hundreds of thousands in deposits, abandoned projects, and left homeowners with unfinished work and no refunds.',
  openGraph: {
    title: 'The Oregon Contractor Who Took Over $250,000 From Homeowners and Fled',
    description: 'How an Oregon contractor collected hundreds of thousands in deposits, abandoned projects, and left homeowners with unfinished work and no refunds.',
    url: 'https://www.clrblt.com/articles/michael-doyle-oregon-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
