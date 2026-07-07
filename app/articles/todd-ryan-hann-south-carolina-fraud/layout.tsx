import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The South Carolina Contractor Who Took Over $700,000 From Homeowners | CLRBLT',
  description: 'How a South Carolina contractor collected over $700,000 in deposits from homeowners for work he never finished, leading to criminal charges.',
  openGraph: {
    title: 'The South Carolina Contractor Who Took Over $700,000 From Homeowners',
    description: 'How a South Carolina contractor collected over $700,000 in deposits from homeowners for work he never finished, leading to criminal charges.',
    url: 'https://www.clrblt.com/articles/todd-ryan-hann-south-carolina-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
