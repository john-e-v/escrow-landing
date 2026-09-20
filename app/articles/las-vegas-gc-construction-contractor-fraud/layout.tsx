import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '3 Charged After Las Vegas\' GC Construction Took Deposits and Vanished | CLRBLT',
  description: 'Nevada charged 3 men tied to Las Vegas\' GC Construction with fraud after homeowners lost hundreds of thousands on unfinished renovations.',
  openGraph: {
    title: '3 Charged After Las Vegas\' GC Construction Took Deposits and Vanished',
    description: 'Nevada charged 3 men tied to Las Vegas\' GC Construction with fraud after homeowners lost hundreds of thousands on unfinished renovations.',
    url: 'https://www.clrblt.com/articles/las-vegas-gc-construction-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
