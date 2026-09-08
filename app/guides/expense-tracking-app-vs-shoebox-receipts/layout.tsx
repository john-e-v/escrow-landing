import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expense Tracking App vs. Shoebox Receipts: Where Job Costs Actually Get Lost | CLRBLT',
  description: 'A dropped receipt is a lost deduction and a blind spot in your margin. Here\'s where shoebox receipts vs. expense apps actually break on a job.',
  openGraph: {
    title: 'Expense Tracking App vs. Shoebox Receipts: Where Job Costs Actually Get Lost',
    description: 'A dropped receipt is a lost deduction and a blind spot in your margin. Here\'s where shoebox receipts vs. expense apps actually break on a job.',
    url: 'https://www.clrblt.com/guides/expense-tracking-app-vs-shoebox-receipts',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
