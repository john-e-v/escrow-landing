import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Idaho Deck Contractor Arrested After Taking Homeowner Deposits | CLRBLT',
  description: 'Seth Wooddell of Idaho Decks & Exteriors was arrested on 3 felony grand theft counts after allegedly taking Treasure Valley homeowner deposits.',
  openGraph: {
    title: 'The Idaho Deck Contractor Arrested After Taking Homeowner Deposits',
    description: 'Seth Wooddell of Idaho Decks & Exteriors was arrested on 3 felony grand theft counts after allegedly taking Treasure Valley homeowner deposits.',
    url: 'https://www.clrblt.com/articles/seth-wooddell-idaho-decks-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
