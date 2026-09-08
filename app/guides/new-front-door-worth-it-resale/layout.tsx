import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is a New Front Door Worth It? Cost, Resale Value, and When It Pays Off | CLRBLT',
  description: 'A steel front door returns about 95% at resale for $2,200 installed. Here\'s the ROI math and when a luxury upgrade stops paying off.',
  openGraph: {
    title: 'Is a New Front Door Worth It? Cost, Resale Value, and When It Pays Off',
    description: 'A steel front door returns about 95% at resale for $2,200 installed. Here\'s the ROI math and when a luxury upgrade stops paying off.',
    url: 'https://www.clrblt.com/guides/new-front-door-worth-it-resale',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
