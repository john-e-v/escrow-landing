import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Read a Contractor\'s Estimate: The Line Items That Reveal a Bad Bid | CLRBLT',
  description: 'A real estimate breaks out labor, materials, and scope line by line. Here\'s how to read one — and the 6 line items that expose a lowball or padded bid.',
  openGraph: {
    title: 'How to Read a Contractor\'s Estimate: The Line Items That Reveal a Bad Bid',
    description: 'A real estimate breaks out labor, materials, and scope line by line. Here\'s how to read one — and the 6 line items that expose a lowball or padded bid.',
    url: 'https://www.clrblt.com/guides/read-contractor-estimate-line-items',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
