import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Deck Was Sealed With the Wrong Product. A Seasonal Holdback Meant the Homeowner Didn\'t Pay for a Redo. | CLRBLT',
  description: '$0 out of pocket for a redo: how a seasonal payment holdback stopped a homeowner from paying for a deck sealed with the wrong product that peeled in one season.',
  openGraph: {
    title: 'The Deck Was Sealed With the Wrong Product. A Seasonal Holdback Meant the Homeowner Didn\'t Pay for a Redo.',
    description: '$0 out of pocket for a redo: how a seasonal payment holdback stopped a homeowner from paying for a deck sealed with the wrong product that peeled in one season.',
    url: 'https://www.clrblt.com/guides/escrow-caught-stained-deck-wrong-product',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
