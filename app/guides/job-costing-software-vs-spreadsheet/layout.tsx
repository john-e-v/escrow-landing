import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Job Costing Software vs. Spreadsheet: Where Your Margin Actually Leaks | CLRBLT',
  description: 'A spreadsheet works until you run 3+ jobs at once. Here\'s where each approach to job costing actually leaks margin—and what feeds it clean data.',
  openGraph: {
    title: 'Job Costing Software vs. Spreadsheet: Where Your Margin Actually Leaks',
    description: 'A spreadsheet works until you run 3+ jobs at once. Here\'s where each approach to job costing actually leaks margin—and what feeds it clean data.',
    url: 'https://www.clrblt.com/guides/job-costing-software-vs-spreadsheet',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
