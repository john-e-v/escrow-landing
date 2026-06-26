import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The \'Storm Chaser\' Who Stole Over $1 Million From Texas Homeowners | CLRBLT',
  description: 'How a Texas contractor allegedly stole over $1M in deposits from homeowners before facing theft charges, and what victims could have done differently.',
  openGraph: {
    title: 'The \'Storm Chaser\' Who Stole Over $1 Million From Texas Homeowners',
    description: 'How a Texas contractor allegedly stole over $1M in deposits from homeowners before facing theft charges, and what victims could have done differently.',
    url: 'https://www.clrblt.com/articles/aaron-andrew-construction-deposit-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
