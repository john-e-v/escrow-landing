import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is Finishing Your Attic Worth It? Cost, ROI, and When It Doesn\'t Pay | CLRBLT',
  description: 'Finishing an attic returns 55-60% at resale and costs $30K-$80K—but only if you have 7ft ceilings and existing stairs. Here\'s when it pays and when it tanks.',
  openGraph: {
    title: 'Is Finishing Your Attic Worth It? Cost, ROI, and When It Doesn\'t Pay',
    description: 'Finishing an attic returns 55-60% at resale and costs $30K-$80K—but only if you have 7ft ceilings and existing stairs. Here\'s when it pays and when it tanks.',
    url: 'https://www.clrblt.com/guides/finished-attic-worth-it-resale',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
