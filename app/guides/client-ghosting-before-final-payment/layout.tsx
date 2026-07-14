import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What to Do the Moment a Client Goes Quiet Before Final Payment | CLRBLT',
  description: 'Client stopped responding before final payment? Run this 3-step sequence within 48 hours — and see why escrow removes their leverage before the silence starts.',
  openGraph: {
    title: 'What to Do the Moment a Client Goes Quiet Before Final Payment',
    description: 'Client stopped responding before final payment? Run this 3-step sequence within 48 hours — and see why escrow removes their leverage before the silence starts.',
    url: 'https://www.clrblt.com/guides/client-ghosting-before-final-payment',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
