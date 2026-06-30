import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Connecticut-to-Florida Contractor Whose Fraud Preceded a Family Tragedy | CLRBLT',
  description: 'How Anthony Todt\'s multi-state fraud and unpaid debts left clients and creditors holding the bag before his financial collapse.',
  openGraph: {
    title: 'The Connecticut-to-Florida Contractor Whose Fraud Preceded a Family Tragedy',
    description: 'How Anthony Todt\'s multi-state fraud and unpaid debts left clients and creditors holding the bag before his financial collapse.',
    url: 'https://www.clrblt.com/articles/anthony-todt-florida-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
