import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is a Screened Porch Worth It? Cost, ROI, and When It Backfires | CLRBLT',
  description: 'Yes, in most humid and mild climates — a screened porch returns 60-75% and adds real living space. Here\'s the math and when it backfires.',
  openGraph: {
    title: 'Is a Screened Porch Worth It? Cost, ROI, and When It Backfires',
    description: 'Yes, in most humid and mild climates — a screened porch returns 60-75% and adds real living space. Here\'s the math and when it backfires.',
    url: 'https://www.clrblt.com/guides/screened-porch-worth-it-resale',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
