import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Georgia Contractor Who Took Over $600,000 in Home Renovation Deposits | CLRBLT',
  description: 'How a metro Atlanta contractor took over $600,000 in renovation deposits and left homeowners with unfinished projects and mounting losses.',
  openGraph: {
    title: 'The Georgia Contractor Who Took Over $600,000 in Home Renovation Deposits',
    description: 'How a metro Atlanta contractor took over $600,000 in renovation deposits and left homeowners with unfinished projects and mounting losses.',
    url: 'https://www.clrblt.com/articles/eric-neff-georgia-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
