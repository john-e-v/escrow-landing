import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Are Solar Panels Worth It in 2026? Cost, Payback, and When They Don\'t Pay Off | CLRBLT',
  description: 'Solar panels pay back in 7-10 years and add ~4% to home value—but only if you stay 8+ years and pay above-average utility rates. Here\'s the math.',
  openGraph: {
    title: 'Are Solar Panels Worth It in 2026? Cost, Payback, and When They Don\'t Pay Off',
    description: 'Solar panels pay back in 7-10 years and add ~4% to home value—but only if you stay 8+ years and pay above-average utility rates. Here\'s the math.',
    url: 'https://www.clrblt.com/guides/solar-panels-worth-it-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
