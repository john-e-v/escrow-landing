import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Florida Contractor Who Took Over $1M and Left Homes Half-Built | CLRBLT',
  description: 'A Florida contractor took over $1M in deposits and left homes half-built. Here\'s how the scheme unraveled and what homeowners can learn.',
  openGraph: {
    title: 'The Florida Contractor Who Took Over $1M and Left Homes Half-Built',
    description: 'A Florida contractor took over $1M in deposits and left homes half-built. Here\'s how the scheme unraveled and what homeowners can learn.',
    url: 'https://www.clrblt.com/articles/matthew-jennings-florida-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
