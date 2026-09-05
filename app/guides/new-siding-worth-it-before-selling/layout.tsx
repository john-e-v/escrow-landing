import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is New Siding Worth It Before Selling? Cost, ROI, and When to Skip It | CLRBLT',
  description: 'New siding recovers 60-80% at resale, but full replacement before selling usually loses money. Here\'s when to replace, when to repair, and when to skip it.',
  openGraph: {
    title: 'Is New Siding Worth It Before Selling? Cost, ROI, and When to Skip It',
    description: 'New siding recovers 60-80% at resale, but full replacement before selling usually loses money. Here\'s when to replace, when to repair, and when to skip it.',
    url: 'https://www.clrblt.com/guides/new-siding-worth-it-before-selling',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
