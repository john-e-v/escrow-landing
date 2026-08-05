import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Contractor Who Defrauded FEMA and Disaster Victims Across the Dakotas | CLRBLT',
  description: 'How a northern plains contractor combined FEMA fraud with homeowner deposit theft, leaving flood victims without the repairs they paid for.',
  openGraph: {
    title: 'The Contractor Who Defrauded FEMA and Disaster Victims Across the Dakotas',
    description: 'How a northern plains contractor combined FEMA fraud with homeowner deposit theft, leaving flood victims without the repairs they paid for.',
    url: 'https://www.clrblt.com/articles/roland-behrens-north-dakota-fema-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
