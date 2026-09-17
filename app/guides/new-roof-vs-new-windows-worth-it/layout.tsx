import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Roof vs. New Windows: Which Is Worth It First? | CLRBLT',
  description: 'Roof first, windows second — unless your windows are the failure point. Compare cost, ROI, and resale value to decide which upgrade earns your money first.',
  openGraph: {
    title: 'New Roof vs. New Windows: Which Is Worth It First?',
    description: 'Roof first, windows second — unless your windows are the failure point. Compare cost, ROI, and resale value to decide which upgrade earns your money first.',
    url: 'https://www.clrblt.com/guides/new-roof-vs-new-windows-worth-it',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
