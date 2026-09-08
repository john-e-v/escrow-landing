import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Tile Setter Quit at 50% and Demanded Full Pay. Escrow Meant the Homeowner Said No. | CLRBLT',
  description: 'A tile setter walked at 50% and demanded full payment. Escrow meant $6,800 stayed put, so the homeowner paid a finisher instead of the balance twice.',
  openGraph: {
    title: 'The Tile Setter Quit at 50% and Demanded Full Pay. Escrow Meant the Homeowner Said No.',
    description: 'A tile setter walked at 50% and demanded full payment. Escrow meant $6,800 stayed put, so the homeowner paid a finisher instead of the balance twice.',
    url: 'https://www.clrblt.com/guides/escrow-caught-abandoned-tile-halfway',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
