import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Your Kitchen Remodel Took 4 Months Instead of 6 Weeks | CLRBLT',
  description: 'A 6-week kitchen remodel that ran 17 weeks. Here\'s the delay chain nobody quotes for—and the milestone structure that keeps it from happening to you.',
  openGraph: {
    title: 'Why Your Kitchen Remodel Took 4 Months Instead of 6 Weeks',
    description: 'A 6-week kitchen remodel that ran 17 weeks. Here\'s the delay chain nobody quotes for—and the milestone structure that keeps it from happening to you.',
    url: 'https://www.clrblt.com/guides/kitchen-remodel-timeline-blown-out',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
