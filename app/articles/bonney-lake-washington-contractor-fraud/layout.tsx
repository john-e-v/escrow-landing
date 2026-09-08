import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Bonney Lake Contractor Who Took Approaching $1M From Homeowners | CLRBLT',
  description: 'How Construction Kings took approaching $1M in deposits from Washington homeowners for work that was never completed.',
  alternates: { canonical: 'https://www.clrblt.com/articles/bonney-lake-washington-contractor-fraud' },
  openGraph: {
    title: 'The Bonney Lake Contractor Who Took Approaching $1M From Homeowners',
    description: 'How Construction Kings took approaching $1M in deposits from Washington homeowners for work that was never completed.',
    url: 'https://www.clrblt.com/articles/bonney-lake-washington-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
