import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Arizona Contractor Who Took Over $1M From Valley Homeowners | CLRBLT',
  description: 'How an Arizona contractor took over $1M in deposits from Phoenix-area homeowners for work never finished, and the state\'s fraud case against him.',
  openGraph: {
    title: 'The Arizona Contractor Who Took Over $1M From Valley Homeowners',
    description: 'How an Arizona contractor took over $1M in deposits from Phoenix-area homeowners for work never finished, and the state\'s fraud case against him.',
    url: 'https://www.clrblt.com/articles/david-gschwind-arizona-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
