import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Your New Tile Floor Cracked in Six Months (And Who Actually Pays) | CLRBLT',
  description: 'A $8,400 tile floor cracked in 6 months because of a skipped subfloor prep step. Here\'s what went wrong and how milestone payments would have caught it.',
  openGraph: {
    title: 'Why Your New Tile Floor Cracked in Six Months (And Who Actually Pays)',
    description: 'A $8,400 tile floor cracked in 6 months because of a skipped subfloor prep step. Here\'s what went wrong and how milestone payments would have caught it.',
    url: 'https://www.clrblt.com/guides/why-tile-job-failed-early',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
