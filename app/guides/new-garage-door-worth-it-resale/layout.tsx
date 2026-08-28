import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is a New Garage Door Worth It? Cost, Resale Value, and When to Skip It | CLRBLT',
  description: 'A new garage door recoups 90-190% of its cost at resale — the highest ROI of almost any upgrade. Here\'s the math and the one case where it doesn\'t pay.',
  openGraph: {
    title: 'Is a New Garage Door Worth It? Cost, Resale Value, and When to Skip It',
    description: 'A new garage door recoups 90-190% of its cost at resale — the highest ROI of almost any upgrade. Here\'s the math and the one case where it doesn\'t pay.',
    url: 'https://www.clrblt.com/guides/new-garage-door-worth-it-resale',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
