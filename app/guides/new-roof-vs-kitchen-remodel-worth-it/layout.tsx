import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Roof vs. Kitchen Remodel: Which Is Worth It First? | CLRBLT',
  description: 'Roof first if yours is past 20 years or leaking — protection beats upgrades. Here\'s the cost, ROI math, and the one case where the kitchen wins.',
  openGraph: {
    title: 'New Roof vs. Kitchen Remodel: Which Is Worth It First?',
    description: 'Roof first if yours is past 20 years or leaking — protection beats upgrades. Here\'s the cost, ROI math, and the one case where the kitchen wins.',
    url: 'https://www.clrblt.com/guides/new-roof-vs-kitchen-remodel-worth-it',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
