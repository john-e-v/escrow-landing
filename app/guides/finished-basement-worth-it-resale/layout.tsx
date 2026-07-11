import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is Finishing Your Basement Worth It? Cost, ROI, and When It Doesn\'t Pay | CLRBLT',
  description: 'Finishing a basement returns ~70% at resale, costing $25k–$50k. Worth it if you\'re staying 5+ years — unless moisture or low ceilings sink the value.',
  openGraph: {
    title: 'Is Finishing Your Basement Worth It? Cost, ROI, and When It Doesn\'t Pay',
    description: 'Finishing a basement returns ~70% at resale, costing $25k–$50k. Worth it if you\'re staying 5+ years — unless moisture or low ceilings sink the value.',
    url: 'https://www.clrblt.com/guides/finished-basement-worth-it-resale',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
