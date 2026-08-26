import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Georgia Contractor Who Took Over $2M in Home Improvement Deposits | CLRBLT',
  description: 'A Georgia contractor took over $2M in remodeling deposits and abandoned jobs across metro Atlanta. Here\'s what homeowners can learn.',
  openGraph: {
    title: 'The Georgia Contractor Who Took Over $2M in Home Improvement Deposits',
    description: 'A Georgia contractor took over $2M in remodeling deposits and abandoned jobs across metro Atlanta. Here\'s what homeowners can learn.',
    url: 'https://www.clrblt.com/articles/roswell-power-home-remodeling-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
