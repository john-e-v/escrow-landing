import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Contractor Poured on a Cold Day and Rushed the Cure. Now the Slab Is Cracking. | CLRBLT',
  description: 'A $9,400 slab cracked in 4 months because it was poured cold and cured too fast. Here\'s who actually pays and how escrow keeps you from eating the repair.',
  openGraph: {
    title: 'Your Contractor Poured on a Cold Day and Rushed the Cure. Now the Slab Is Cracking.',
    description: 'A $9,400 slab cracked in 4 months because it was poured cold and cured too fast. Here\'s who actually pays and how escrow keeps you from eating the repair.',
    url: 'https://www.clrblt.com/guides/concrete-cure-time-cracked-slab-cost',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
