import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Georgia Contractor Who Took Over $1M in Pool Construction Deposits | CLRBLT',
  description: 'How a Georgia pool contractor took more than $1M in deposits from homeowners and left projects abandoned, leading to fraud charges and convictions.',
  openGraph: {
    title: 'The Georgia Contractor Who Took Over $1M in Pool Construction Deposits',
    description: 'How a Georgia pool contractor took more than $1M in deposits from homeowners and left projects abandoned, leading to fraud charges and convictions.',
    url: 'https://www.clrblt.com/articles/benjamin-shaw-georgia-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
