import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Can You Take Your Data When You Leave? The Lock-In Test for Contractor Software | CLRBLT',
  description: 'Before you commit to any contractor software, run the export test. Here\'s how to spot data lock-in before it traps you—and where escrow fits in a portable stack.',
  openGraph: {
    title: 'Can You Take Your Data When You Leave? The Lock-In Test for Contractor Software',
    description: 'Before you commit to any contractor software, run the export test. Here\'s how to spot data lock-in before it traps you—and where escrow fits in a portable stack.',
    url: 'https://www.clrblt.com/guides/customer-data-portability-lock-in',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
