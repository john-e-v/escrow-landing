import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Estimating in a Spreadsheet vs. an App: Where Your Markup Actually Disappears | CLRBLT',
  description: 'Spreadsheets are free but silently drop markup when formulas break. Here\'s the honest tradeoff between spreadsheet estimating and purpose-built apps.',
  openGraph: {
    title: 'Estimating in a Spreadsheet vs. an App: Where Your Markup Actually Disappears',
    description: 'Spreadsheets are free but silently drop markup when formulas break. Here\'s the honest tradeoff between spreadsheet estimating and purpose-built apps.',
    url: 'https://www.clrblt.com/guides/estimating-app-vs-spreadsheet-formulas',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
