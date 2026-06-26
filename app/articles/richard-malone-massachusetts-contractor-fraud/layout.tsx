import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Massachusetts Contractor Who Stole Over $600,000 From Homeowners | CLRBLT',
  description: 'How a Massachusetts contractor took over $600,000 in deposits from homeowners for work never done, and the criminal charges that followed.',
  openGraph: {
    title: 'The Massachusetts Contractor Who Stole Over $600,000 From Homeowners',
    description: 'How a Massachusetts contractor took over $600,000 in deposits from homeowners for work never done, and the criminal charges that followed.',
    url: 'https://www.clrblt.com/articles/richard-malone-massachusetts-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
