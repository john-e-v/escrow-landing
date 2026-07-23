import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invoicing Software vs. Accounting Add-On: Where Contractor Billing Actually Breaks | CLRBLT',
  description: 'Accounting-suite billing and standalone invoicing tools both break on progress draws and change orders. Here\'s where each fails and how to stack them right.',
  openGraph: {
    title: 'Invoicing Software vs. Accounting Add-On: Where Contractor Billing Actually Breaks',
    description: 'Accounting-suite billing and standalone invoicing tools both break on progress draws and change orders. Here\'s where each fails and how to stack them right.',
    url: 'https://www.clrblt.com/guides/invoicing-software-vs-quickbooks-passthrough',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
