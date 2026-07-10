import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Daily Photo Log That Wins Disputes: What to Shoot on Every Job | CLRBLT',
  description: 'Take 6 specific photos daily and you\'ll never lose a he-said-she-said dispute. The exact shot list and caption script contractors can use starting today.',
  openGraph: {
    title: 'The Daily Photo Log That Wins Disputes: What to Shoot on Every Job',
    description: 'Take 6 specific photos daily and you\'ll never lose a he-said-she-said dispute. The exact shot list and caption script contractors can use starting today.',
    url: 'https://www.clrblt.com/guides/photo-documentation-checklist-every-job',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
