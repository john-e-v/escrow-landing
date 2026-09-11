import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Contractor Broke a Tile Setting Another. Then Billed You for Both. | CLRBLT',
  description: 'Your contractor damaged finished work and billed you to fix it. Rework from a contractor\'s own mistake isn\'t billable. Here\'s how to stop paying twice.',
  openGraph: {
    title: 'The Contractor Broke a Tile Setting Another. Then Billed You for Both.',
    description: 'Your contractor damaged finished work and billed you to fix it. Rework from a contractor\'s own mistake isn\'t billable. Here\'s how to stop paying twice.',
    url: 'https://www.clrblt.com/guides/contractor-billed-for-his-own-mistake',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
