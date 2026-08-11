import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Submit Your Project — Get Escrow-Protected Bids | CLRBLT',
  description: 'Tell us about your home project and get matched with contractors who accept escrow-protected payments. Your funds stay secure until the work is done right.',
  alternates: { canonical: 'https://www.clrblt.com/create' },
  openGraph: {
    title: 'Submit Your Project — Get Escrow-Protected Bids',
    description: 'Get matched with contractors who accept escrow-protected payments.',
    url: 'https://www.clrblt.com/create',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
