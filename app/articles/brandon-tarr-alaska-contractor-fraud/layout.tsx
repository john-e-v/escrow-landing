import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Alaska Contractor Who Took Homeowner Deposits and Left Jobs Unfinished | CLRBLT',
  description: 'How an Alaska contractor took homeowner deposits and left jobs unfinished, and what Alaskans can do to protect their payments.',
  openGraph: {
    title: 'The Alaska Contractor Who Took Homeowner Deposits and Left Jobs Unfinished',
    description: 'How an Alaska contractor took homeowner deposits and left jobs unfinished, and what Alaskans can do to protect their payments.',
    url: 'https://www.clrblt.com/articles/brandon-tarr-alaska-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
