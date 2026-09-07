import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Client Offered to Pay You in Leftover Materials: Why That\'s a Loss, Not a Payment | CLRBLT',
  description: 'A client offering to pay you in leftover materials is handing you a loss, not a payment. Here\'s why bartering wrecks your books and how to lock in cash instead.',
  openGraph: {
    title: 'The Client Offered to Pay You in Leftover Materials: Why That\'s a Loss, Not a Payment',
    description: 'A client offering to pay you in leftover materials is handing you a loss, not a payment. Here\'s why bartering wrecks your books and how to lock in cash instead.',
    url: 'https://www.clrblt.com/guides/client-wants-to-pay-with-material-instead-of-cash',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
