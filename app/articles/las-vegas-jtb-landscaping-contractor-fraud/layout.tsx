import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Las Vegas Contractor Who Took $308K in Pool and Landscaping Deposits | CLRBLT',
  description: 'Jon Thomas Banning of JTB Landscaping got 4-10 years for taking $308K in Las Vegas pool and landscaping deposits, targeting seniors.',
  openGraph: {
    title: 'The Las Vegas Contractor Who Took $308K in Pool and Landscaping Deposits',
    description: 'Jon Thomas Banning of JTB Landscaping got 4-10 years for taking $308K in Las Vegas pool and landscaping deposits, targeting seniors.',
    url: 'https://www.clrblt.com/articles/las-vegas-jtb-landscaping-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
