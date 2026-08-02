import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Iowa Contractor Who Took Over $180,000 From Homeowners After Storm Damage | CLRBLT',
  description: 'An Iowa contractor took over $180,000 in deposits from homeowners and left jobs unfinished, leading to multiple felony theft charges.',
  openGraph: {
    title: 'The Iowa Contractor Who Took Over $180,000 From Homeowners After Storm Damage',
    description: 'An Iowa contractor took over $180,000 in deposits from homeowners and left jobs unfinished, leading to multiple felony theft charges.',
    url: 'https://www.clrblt.com/articles/iowa-derecho-todd-mcnall-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
