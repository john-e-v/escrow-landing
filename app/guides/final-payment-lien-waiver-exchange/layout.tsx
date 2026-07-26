import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trade the Lien Waiver for the Final Check, Not Before | CLRBLT',
  description: 'Signing a lien waiver before the check clears strips your leverage. Here\'s how to sequence the waiver-for-payment exchange so you get paid first.',
  openGraph: {
    title: 'Trade the Lien Waiver for the Final Check, Not Before',
    description: 'Signing a lien waiver before the check clears strips your leverage. Here\'s how to sequence the waiver-for-payment exchange so you get paid first.',
    url: 'https://www.clrblt.com/guides/final-payment-lien-waiver-exchange',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
