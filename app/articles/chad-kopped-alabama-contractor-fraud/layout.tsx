import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Alabama Contractor Who Took Over $500,000 From Homeowners | CLRBLT',
  description: 'How an Alabama contractor took over $500,000 from homeowners in a deposit scheme, and why escrow protection matters for construction payments.',
  openGraph: {
    title: 'The Alabama Contractor Who Took Over $500,000 From Homeowners',
    description: 'How an Alabama contractor took over $500,000 from homeowners in a deposit scheme, and why escrow protection matters for construction payments.',
    url: 'https://www.clrblt.com/articles/chad-kopped-alabama-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
