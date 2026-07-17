import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The New Hampshire Contractor Who Took Over $200,000 From Homeowners | CLRBLT',
  description: 'How a New Hampshire contractor took over $200,000 in deposits from homeowners for unfinished work, and what protections could have prevented it.',
  openGraph: {
    title: 'The New Hampshire Contractor Who Took Over $200,000 From Homeowners',
    description: 'How a New Hampshire contractor took over $200,000 in deposits from homeowners for unfinished work, and what protections could have prevented it.',
    url: 'https://www.clrblt.com/articles/matthew-jubis-new-hampshire-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
