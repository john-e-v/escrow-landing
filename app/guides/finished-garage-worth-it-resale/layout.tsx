import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is Finishing Your Garage Worth It? Cost, ROI, and When It Backfires | CLRBLT',
  description: 'It depends on whether buyers want the parking. Finishing a garage runs $15K–$50K and recoups 55–75% — unless it kills your only covered parking spot.',
  openGraph: {
    title: 'Is Finishing Your Garage Worth It? Cost, ROI, and When It Backfires',
    description: 'It depends on whether buyers want the parking. Finishing a garage runs $15K–$50K and recoups 55–75% — unless it kills your only covered parking spot.',
    url: 'https://www.clrblt.com/guides/finished-garage-worth-it-resale',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
