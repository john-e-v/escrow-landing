import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is a Heated Driveway Worth It? Cost, Payback, and When It\'s a Money Pit | CLRBLT',
  description: 'It depends on your climate: a heated driveway costs $12–$28K installed and adds almost nothing at resale. Here\'s the math, the payback, and when to skip it.',
  openGraph: {
    title: 'Is a Heated Driveway Worth It? Cost, Payback, and When It\'s a Money Pit',
    description: 'It depends on your climate: a heated driveway costs $12–$28K installed and adds almost nothing at resale. Here\'s the math, the payback, and when to skip it.',
    url: 'https://www.clrblt.com/guides/heated-driveway-worth-it-cost',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
