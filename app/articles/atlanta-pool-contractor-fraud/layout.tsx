import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Atlanta Pool Builder Who Left Homeowners With Empty Yards and Drained Deposits | CLRBLT',
  description: 'How Aqua Blue Pools took hundreds of thousands in deposits from metro Atlanta homeowners and left projects abandoned, leading to fraud charges.',
  alternates: { canonical: 'https://www.clrblt.com/articles/atlanta-pool-contractor-fraud' },
  openGraph: {
    title: 'The Atlanta Pool Builder Who Left Homeowners With Empty Yards and Drained Deposits',
    description: 'How Aqua Blue Pools took hundreds of thousands in deposits from metro Atlanta homeowners and left projects abandoned, leading to fraud charges.',
    url: 'https://www.clrblt.com/articles/atlanta-pool-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
