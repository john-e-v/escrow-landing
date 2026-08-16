import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Final Invoice Came in $8K Over the Contract. Escrow Meant It Didn\'t Get Paid. | CLRBLT',
  description: 'A contractor padded the final invoice by $8K in unapproved extras. Escrow meant the money didn\'t release until the scope was reconciled—here\'s how it played out.',
  openGraph: {
    title: 'The Final Invoice Came in $8K Over the Contract. Escrow Meant It Didn\'t Get Paid.',
    description: 'A contractor padded the final invoice by $8K in unapproved extras. Escrow meant the money didn\'t release until the scope was reconciled—here\'s how it played out.',
    url: 'https://www.clrblt.com/guides/escrow-caught-inflated-final-invoice',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
