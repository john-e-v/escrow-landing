import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Contractor Poured the Slab in the Wrong Spot. Then Billed You to Move It. | CLRBLT',
  description: 'A slab poured 3 feet in the wrong spot cost one homeowner $19K in demolition and re-pour. Here\'s who actually pays for a contractor\'s layout mistake.',
  openGraph: {
    title: 'The Contractor Poured the Slab in the Wrong Spot. Then Billed You to Move It.',
    description: 'A slab poured 3 feet in the wrong spot cost one homeowner $19K in demolition and re-pour. Here\'s who actually pays for a contractor\'s layout mistake.',
    url: 'https://www.clrblt.com/guides/contractor-poured-slab-wrong-spot',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
