import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is Building a Detached Garage Worth It? Cost, ROI, and When It Doesn\'t Pay | CLRBLT',
  description: 'A detached garage costs $35K-$70K and returns 65-80% at resale. Here\'s the real math, the payback, and when it stops paying off.',
  openGraph: {
    title: 'Is Building a Detached Garage Worth It? Cost, ROI, and When It Doesn\'t Pay',
    description: 'A detached garage costs $35K-$70K and returns 65-80% at resale. Here\'s the real math, the payback, and when it stops paying off.',
    url: 'https://www.clrblt.com/guides/new-garage-worth-it-detached-vs-attached',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
