import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Your Contractor\'s Quote Expired Before the Job Even Started | CLRBLT',
  description: 'A quote signed 90 days before start can cost 15% more by the time material ships. Here\'s why quotes expire and the milestone structure that locks your price.',
  openGraph: {
    title: 'Why Your Contractor\'s Quote Expired Before the Job Even Started',
    description: 'A quote signed 90 days before start can cost 15% more by the time material ships. Here\'s why quotes expire and the milestone structure that locks your price.',
    url: 'https://www.clrblt.com/guides/deposit-material-cost-spike-quote',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
