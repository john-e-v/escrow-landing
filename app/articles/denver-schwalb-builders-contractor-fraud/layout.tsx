import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Denver Contractor Who Stole $1.4M and Left Homes in Ruins | CLRBLT',
  description: 'Denver contractor Avi Schwalb of Schwalb Builders got 10 years for a $1.4M home remodeling fraud scheme that left homeowners with ruined houses.',
  openGraph: {
    title: 'The Denver Contractor Who Stole $1.4M and Left Homes in Ruins',
    description: 'Denver contractor Avi Schwalb of Schwalb Builders got 10 years for a $1.4M home remodeling fraud scheme that left homeowners with ruined houses.',
    url: 'https://www.clrblt.com/articles/denver-schwalb-builders-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
