import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Plymouth Pool Contractor Who Took $500K and Left Backyards Unfinished | CLRBLT',
  description: 'Plymouth contractor Steven Docchio took $500K in pandemic pool deposits and abandoned projects. He pleaded guilty to larceny and was sentenced to prison in 2025.',
  openGraph: {
    title: 'The Plymouth Pool Contractor Who Took $500K and Left Backyards Unfinished',
    description: 'Plymouth contractor Steven Docchio took $500K in pandemic pool deposits and abandoned projects. He pleaded guilty to larceny and was sentenced to prison in 2025.',
    url: 'https://www.clrblt.com/articles/steven-docchio-massachusetts-pool-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
