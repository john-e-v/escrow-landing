import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Hurricane Michael Contractor Who Left Panhandle Homes in Ruins | CLRBLT',
  description: 'How unlicensed contractors exploited Hurricane Michael victims in Florida\'s Panhandle, taking deposits for rebuilds that were never completed.',
  openGraph: {
    title: 'The Hurricane Michael Contractor Who Left Panhandle Homes in Ruins',
    description: 'How unlicensed contractors exploited Hurricane Michael victims in Florida\'s Panhandle, taking deposits for rebuilds that were never completed.',
    url: 'https://www.clrblt.com/articles/roberto-vazquez-hurricane-michael-florida-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
