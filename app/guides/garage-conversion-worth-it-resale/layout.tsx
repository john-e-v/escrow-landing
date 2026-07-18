import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is a Garage Conversion Worth It? Cost, ROI, and When It Tanks Value | CLRBLT',
  description: 'It depends on parking demand. A garage conversion costs $15K–$50K and can add value or cut it — here\'s the math and the one condition that flips the verdict.',
  openGraph: {
    title: 'Is a Garage Conversion Worth It? Cost, ROI, and When It Tanks Value',
    description: 'It depends on parking demand. A garage conversion costs $15K–$50K and can add value or cut it — here\'s the math and the one condition that flips the verdict.',
    url: 'https://www.clrblt.com/guides/garage-conversion-worth-it-resale',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
