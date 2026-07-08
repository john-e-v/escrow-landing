import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Missouri Contractor Who Took Over $2M From Homeowners | CLRBLT',
  description: 'How a Missouri contractor defrauded homeowners of over $2 million in deposits for work never completed, and what it means for consumer protection.',
  openGraph: {
    title: 'The Missouri Contractor Who Took Over $2M From Homeowners',
    description: 'How a Missouri contractor defrauded homeowners of over $2 million in deposits for work never completed, and what it means for consumer protection.',
    url: 'https://www.clrblt.com/articles/richard-turner-missouri-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
