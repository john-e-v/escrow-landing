import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is a Sunroom Addition Worth It? Cost, ROI, and When It Backfires | CLRBLT',
  description: 'A sunroom returns about 45-55% at resale — no, it\'s usually not worth it for ROI. Here\'s the math and the one condition that flips the verdict.',
  openGraph: {
    title: 'Is a Sunroom Addition Worth It? Cost, ROI, and When It Backfires',
    description: 'A sunroom returns about 45-55% at resale — no, it\'s usually not worth it for ROI. Here\'s the math and the one condition that flips the verdict.',
    url: 'https://www.clrblt.com/guides/sunroom-addition-worth-it-resale',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
