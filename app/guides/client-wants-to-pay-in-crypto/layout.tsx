import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Client Wants to Pay in Crypto: Why That\'s Not a Payment Until It Clears | CLRBLT',
  description: 'Getting offered crypto for a job? It\'s not a payment until it converts to dollars and clears. Here\'s why volatility and settlement risk make it a liability.',
  openGraph: {
    title: 'The Client Wants to Pay in Crypto: Why That\'s Not a Payment Until It Clears',
    description: 'Getting offered crypto for a job? It\'s not a payment until it converts to dollars and clears. Here\'s why volatility and settlement risk make it a liability.',
    url: 'https://www.clrblt.com/guides/client-wants-to-pay-in-crypto',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
