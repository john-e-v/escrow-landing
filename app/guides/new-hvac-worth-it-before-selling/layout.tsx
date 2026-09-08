import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is Replacing Your HVAC Worth It Before Selling? Cost, ROI, and When to Skip It | CLRBLT',
  description: 'Replacing HVAC before selling rarely pays back more than 35-50% at resale. Here\'s when it\'s worth it, when to skip it, and the one case that flips the math.',
  openGraph: {
    title: 'Is Replacing Your HVAC Worth It Before Selling? Cost, ROI, and When to Skip It',
    description: 'Replacing HVAC before selling rarely pays back more than 35-50% at resale. Here\'s when it\'s worth it, when to skip it, and the one case that flips the math.',
    url: 'https://www.clrblt.com/guides/new-hvac-worth-it-before-selling',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
