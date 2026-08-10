import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The South Dakota Contractor Who Took Homeowner Deposits and Left Jobs Unfinished | CLRBLT',
  description: 'How a South Dakota contractor took homeowner deposits and left jobs unfinished, prompting state fraud charges and consumer warnings.',
  openGraph: {
    title: 'The South Dakota Contractor Who Took Homeowner Deposits and Left Jobs Unfinished',
    description: 'How a South Dakota contractor took homeowner deposits and left jobs unfinished, prompting state fraud charges and consumer warnings.',
    url: 'https://www.clrblt.com/articles/colton-labenz-south-dakota-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
