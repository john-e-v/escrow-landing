import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Mississippi Contractor Who Took Over $150,000 From Homeowners | CLRBLT',
  description: 'How a Mississippi contractor collected deposits and abandoned projects, leaving homeowners out over $150,000. What victims can learn.',
  openGraph: {
    title: 'The Mississippi Contractor Who Took Over $150,000 From Homeowners',
    description: 'How a Mississippi contractor collected deposits and abandoned projects, leaving homeowners out over $150,000. What victims can learn.',
    url: 'https://www.clrblt.com/articles/aaron-hemsley-mississippi-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
