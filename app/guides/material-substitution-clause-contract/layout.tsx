import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Substitution Clause That Lets You Swap Materials Without a Dispute | CLRBLT',
  description: 'Copy this material substitution clause to swap out-of-stock or overpriced products without a client dispute. Includes the exact approval script.',
  openGraph: {
    title: 'The Substitution Clause That Lets You Swap Materials Without a Dispute',
    description: 'Copy this material substitution clause to swap out-of-stock or overpriced products without a client dispute. Includes the exact approval script.',
    url: 'https://www.clrblt.com/guides/material-substitution-clause-contract',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
