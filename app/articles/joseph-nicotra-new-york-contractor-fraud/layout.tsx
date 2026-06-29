import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The New York Contractor Who Stole Over $500,000 From Long Island Homeowners | CLRBLT',
  description: 'How a Long Island contractor stole over $500,000 from homeowners by taking deposits for work he never finished, leading to grand larceny charges.',
  openGraph: {
    title: 'The New York Contractor Who Stole Over $500,000 From Long Island Homeowners',
    description: 'How a Long Island contractor stole over $500,000 from homeowners by taking deposits for work he never finished, leading to grand larceny charges.',
    url: 'https://www.clrblt.com/articles/joseph-nicotra-new-york-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
