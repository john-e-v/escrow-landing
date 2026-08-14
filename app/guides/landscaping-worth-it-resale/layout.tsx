import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is Professional Landscaping Worth It? Cost, Resale Value, and When It Doesn\'t Pay | CLRBLT',
  description: 'Yes, landscaping returns 100%+ at resale if it\'s mature and low-maintenance. Here\'s the cost math, payback, and when a $30K yard tanks your sale.',
  openGraph: {
    title: 'Is Professional Landscaping Worth It? Cost, Resale Value, and When It Doesn\'t Pay',
    description: 'Yes, landscaping returns 100%+ at resale if it\'s mature and low-maintenance. Here\'s the cost math, payback, and when a $30K yard tanks your sale.',
    url: 'https://www.clrblt.com/guides/landscaping-worth-it-resale',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
