import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Punch List That Never Ends: Why \'Almost Done\' Costs You Weeks | CLRBLT',
  description: 'A 31-item punch list stalled a $8,400 final payment for 11 weeks. Here\'s why open-ended punch lists blow up jobs and how milestone escrow closes them out.',
  openGraph: {
    title: 'The Punch List That Never Ends: Why \'Almost Done\' Costs You Weeks',
    description: 'A 31-item punch list stalled a $8,400 final payment for 11 weeks. Here\'s why open-ended punch lists blow up jobs and how milestone escrow closes them out.',
    url: 'https://www.clrblt.com/guides/punch-list-dragged-on-final-payment',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
