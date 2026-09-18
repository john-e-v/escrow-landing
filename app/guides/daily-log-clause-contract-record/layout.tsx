import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Daily Log Clause That Makes Your Notes Legal Evidence | CLRBLT',
  description: 'One clause makes your daily field log the contract\'s official record of site conditions, delays, and directives. Copy the exact text and add it to your next contract.',
  openGraph: {
    title: 'The Daily Log Clause That Makes Your Notes Legal Evidence',
    description: 'One clause makes your daily field log the contract\'s official record of site conditions, delays, and directives. Copy the exact text and add it to your next contract.',
    url: 'https://www.clrblt.com/guides/daily-log-clause-contract-record',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
