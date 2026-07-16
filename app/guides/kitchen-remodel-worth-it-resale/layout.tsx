import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is a Kitchen Remodel Worth It? Cost, Resale Value, and When to Skip It | CLRBLT',
  description: 'A minor kitchen remodel recoups ~96% at resale; a luxury gut job recovers ~38%. Here\'s the cost math, ROI, and when a kitchen remodel isn\'t worth it.',
  openGraph: {
    title: 'Is a Kitchen Remodel Worth It? Cost, Resale Value, and When to Skip It',
    description: 'A minor kitchen remodel recoups ~96% at resale; a luxury gut job recovers ~38%. Here\'s the cost math, ROI, and when a kitchen remodel isn\'t worth it.',
    url: 'https://www.clrblt.com/guides/kitchen-remodel-worth-it-resale',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
