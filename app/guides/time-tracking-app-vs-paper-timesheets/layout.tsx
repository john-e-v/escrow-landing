import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Time Tracking App vs. Paper Timesheets: What Job Costing Actually Needs | CLRBLT',
  description: 'Paper timesheets cost you accuracy on job costing; apps cost you subscriptions and adoption. Here\'s which one your labor tracking actually needs.',
  openGraph: {
    title: 'Time Tracking App vs. Paper Timesheets: What Job Costing Actually Needs',
    description: 'Paper timesheets cost you accuracy on job costing; apps cost you subscriptions and adoption. Here\'s which one your labor tracking actually needs.',
    url: 'https://www.clrblt.com/guides/time-tracking-app-vs-paper-timesheets',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
