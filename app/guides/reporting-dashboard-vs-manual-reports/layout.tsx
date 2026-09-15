import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reporting Dashboard vs. Manual Reports: Where Your Numbers Actually Lie | CLRBLT',
  description: 'A reporting dashboard is only as honest as the data behind it. Here\'s where dashboards vs. manual reports actually mislead contractors — and how to fix it.',
  openGraph: {
    title: 'Reporting Dashboard vs. Manual Reports: Where Your Numbers Actually Lie',
    description: 'A reporting dashboard is only as honest as the data behind it. Here\'s where dashboards vs. manual reports actually mislead contractors — and how to fix it.',
    url: 'https://www.clrblt.com/guides/reporting-dashboard-vs-manual-reports',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
