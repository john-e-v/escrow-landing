import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Nebraska Contractor Who Took Over $200,000 From Homeowners | CLRBLT',
  description: 'How a Nebraska contractor took over $200,000 from homeowners in deposit fraud, leaving projects unfinished and victims without recourse.',
  openGraph: {
    title: 'The Nebraska Contractor Who Took Over $200,000 From Homeowners',
    description: 'How a Nebraska contractor took over $200,000 from homeowners in deposit fraud, leaving projects unfinished and victims without recourse.',
    url: 'https://www.clrblt.com/articles/nebraska-contractor-fraud-derek-buck',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
