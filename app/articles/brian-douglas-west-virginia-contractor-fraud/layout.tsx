import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The West Virginia Contractor Who Took Over $200,000 From Homeowners | CLRBLT',
  description: 'How a West Virginia contractor took deposits from homeowners and left jobs unfinished, and what protected payments could have prevented.',
  openGraph: {
    title: 'The West Virginia Contractor Who Took Over $200,000 From Homeowners',
    description: 'How a West Virginia contractor took deposits from homeowners and left jobs unfinished, and what protected payments could have prevented.',
    url: 'https://www.clrblt.com/articles/brian-douglas-west-virginia-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
