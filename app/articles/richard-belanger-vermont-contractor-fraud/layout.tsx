import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Vermont Contractor Who Took Over $250,000 From Homeowners | CLRBLT',
  description: 'How a Vermont contractor collected over $250,000 in home improvement deposits and failed to deliver, and what homeowners can learn.',
  openGraph: {
    title: 'The Vermont Contractor Who Took Over $250,000 From Homeowners',
    description: 'How a Vermont contractor collected over $250,000 in home improvement deposits and failed to deliver, and what homeowners can learn.',
    url: 'https://www.clrblt.com/articles/richard-belanger-vermont-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
