import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Minnesota Pool Contractor Who Took $820K and Left Backyards in Ruins | CLRBLT',
  description: 'Minnesota pool contractor Charles Workman of MN Crete Pools stole $820K from 21 customers and got 5 years in federal prison for wire fraud.',
  openGraph: {
    title: 'The Minnesota Pool Contractor Who Took $820K and Left Backyards in Ruins',
    description: 'Minnesota pool contractor Charles Workman of MN Crete Pools stole $820K from 21 customers and got 5 years in federal prison for wire fraud.',
    url: 'https://www.clrblt.com/articles/charles-workman-mn-crete-pools-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
