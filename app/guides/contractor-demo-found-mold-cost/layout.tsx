import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Wall Came Down and So Did Your Budget: The Mold Nobody Quoted | CLRBLT',
  description: 'A $19K bathroom remodel hit $31K when demo exposed hidden mold. Why concealed-condition costs blindside homeowners and how milestone escrow contains the damage.',
  openGraph: {
    title: 'The Wall Came Down and So Did Your Budget: The Mold Nobody Quoted',
    description: 'A $19K bathroom remodel hit $31K when demo exposed hidden mold. Why concealed-condition costs blindside homeowners and how milestone escrow contains the damage.',
    url: 'https://www.clrblt.com/guides/contractor-demo-found-mold-cost',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
