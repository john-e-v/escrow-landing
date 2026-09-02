import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inventory App vs. Spreadsheet: Where Your Material Costs Actually Leak | CLRBLT',
  description: 'A spreadsheet works until you run 3+ jobs at once. Here\'s where material tracking actually breaks and when an inventory app is worth the switch.',
  openGraph: {
    title: 'Inventory App vs. Spreadsheet: Where Your Material Costs Actually Leak',
    description: 'A spreadsheet works until you run 3+ jobs at once. Here\'s where material tracking actually breaks and when an inventory app is worth the switch.',
    url: 'https://www.clrblt.com/guides/inventory-app-vs-spreadsheet-materials',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
