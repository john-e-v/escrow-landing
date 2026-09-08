import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Client Wants the Lien Release Signed Before They Pay: Why That\'s Backwards | CLRBLT',
  description: 'Never sign a lien release before payment clears. Here\'s why it strips your leverage and how to structure the exchange so both sides move at the same time.',
  openGraph: {
    title: 'The Client Wants the Lien Release Signed Before They Pay: Why That\'s Backwards',
    description: 'Never sign a lien release before payment clears. Here\'s why it strips your leverage and how to structure the exchange so both sides move at the same time.',
    url: 'https://www.clrblt.com/guides/client-wants-lien-release-before-payment',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
