import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is Replacing Your Roof Worth It Before Selling? Cost, ROI, and When to Skip It | CLRBLT',
  description: 'A new roof recovers only 60-68% of its cost at resale — but a failing roof can tank the whole sale. Here\'s when to replace before selling and when to credit the buyer instead.',
  openGraph: {
    title: 'Is Replacing Your Roof Worth It Before Selling? Cost, ROI, and When to Skip It',
    description: 'A new roof recovers only 60-68% of its cost at resale — but a failing roof can tank the whole sale. Here\'s when to replace before selling and when to credit the buyer instead.',
    url: 'https://www.clrblt.com/guides/roof-replacement-worth-it-before-selling',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
