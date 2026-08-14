import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Contractor Swapped in an Unlicensed Sub. Escrow Meant the Homeowner Paid Nothing. | CLRBLT',
  description: '$9K electrical job, unlicensed sub, failed inspection—and the homeowner paid $0. Here\'s how escrow-first payment stopped the loss before it started.',
  openGraph: {
    title: 'The Contractor Swapped in an Unlicensed Sub. Escrow Meant the Homeowner Paid Nothing.',
    description: '$9K electrical job, unlicensed sub, failed inspection—and the homeowner paid $0. Here\'s how escrow-first payment stopped the loss before it started.',
    url: 'https://www.clrblt.com/guides/escrow-caught-unlicensed-sub-swap',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
