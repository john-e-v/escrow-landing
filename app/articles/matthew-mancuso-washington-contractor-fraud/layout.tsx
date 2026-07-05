import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Washington Contractor Who Took Over $1M From Homeowners | CLRBLT',
  description: 'How a Washington contractor took over $1M in deposits from homeowners for work that was never completed, and how victims fought back.',
  openGraph: {
    title: 'The Washington Contractor Who Took Over $1M From Homeowners',
    description: 'How a Washington contractor took over $1M in deposits from homeowners for work that was never completed, and how victims fought back.',
    url: 'https://www.clrblt.com/articles/matthew-mancuso-washington-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
