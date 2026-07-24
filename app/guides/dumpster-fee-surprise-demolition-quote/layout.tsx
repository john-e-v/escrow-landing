import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Dumpster Fee Nobody Quoted: Why Demo Jobs Blow Past Budget | CLRBLT',
  description: 'A $6,200 demo quote hit $9,800 because disposal was never priced. Here\'s why dump fees blow up renovation budgets and how milestone escrow prevents it.',
  openGraph: {
    title: 'The Dumpster Fee Nobody Quoted: Why Demo Jobs Blow Past Budget',
    description: 'A $6,200 demo quote hit $9,800 because disposal was never priced. Here\'s why dump fees blow up renovation budgets and how milestone escrow prevents it.',
    url: 'https://www.clrblt.com/guides/dumpster-fee-surprise-demolition-quote',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
