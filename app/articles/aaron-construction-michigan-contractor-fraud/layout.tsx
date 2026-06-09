import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The $1.2 Million Deposit Scheme That Took Down a Michigan Builder | CLRBLT',
  description: 'How a Michigan contractor collected over $1M in deposits for unfinished home projects, and the felony fraud charges that followed.',
  openGraph: {
    title: 'The $1.2 Million Deposit Scheme That Took Down a Michigan Builder',
    description: 'How a Michigan contractor collected over $1M in deposits for unfinished home projects, and the felony fraud charges that followed.',
    url: 'https://www.clrblt.com/articles/aaron-construction-michigan-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
