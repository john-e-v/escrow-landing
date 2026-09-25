import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Contractor Stockpiled Materials on the Wrong Lot. The Neighbor Wants Them Gone. | CLRBLT',
  description: 'A crew staged materials on the neighbor\'s lot to save steps. It cost the homeowner a $2,400 removal bill and a trespass claim. Here\'s who actually pays.',
  openGraph: {
    title: 'The Contractor Stockpiled Materials on the Wrong Lot. The Neighbor Wants Them Gone.',
    description: 'A crew staged materials on the neighbor\'s lot to save steps. It cost the homeowner a $2,400 removal bill and a trespass claim. Here\'s who actually pays.',
    url: 'https://www.clrblt.com/guides/contractor-parked-materials-on-neighbor-lot',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
