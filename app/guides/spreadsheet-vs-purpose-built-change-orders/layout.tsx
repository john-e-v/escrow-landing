import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Change Order Tracking: Spreadsheet vs. Purpose-Built Software | CLRBLT',
  description: 'Spreadsheets work for change orders up to about 5-6 per job. Past that, purpose-built tracking pays for itself. Here\'s the honest breakdown.',
  openGraph: {
    title: 'Change Order Tracking: Spreadsheet vs. Purpose-Built Software',
    description: 'Spreadsheets work for change orders up to about 5-6 per job. Past that, purpose-built tracking pays for itself. Here\'s the honest breakdown.',
    url: 'https://www.clrblt.com/guides/spreadsheet-vs-purpose-built-change-orders',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
