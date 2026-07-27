import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The New Mexico Contractor Who Took Over $200,000 From Homeowners | CLRBLT',
  description: 'How a New Mexico contractor took over $200,000 in deposits from homeowners and left projects unfinished, and what buyers can learn from it.',
  openGraph: {
    title: 'The New Mexico Contractor Who Took Over $200,000 From Homeowners',
    description: 'How a New Mexico contractor took over $200,000 in deposits from homeowners and left projects unfinished, and what buyers can learn from it.',
    url: 'https://www.clrblt.com/articles/gary-jones-new-mexico-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
