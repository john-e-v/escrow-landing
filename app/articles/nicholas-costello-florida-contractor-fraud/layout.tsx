import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Florida Contractor Who Stole $2.6M From Hurricane Victims and Fled | CLRBLT',
  description: 'How a Florida contractor allegedly stole millions in homeowner deposits, faced grand theft charges, and left dozens of projects unfinished.',
  openGraph: {
    title: 'The Florida Contractor Who Stole $2.6M From Hurricane Victims and Fled',
    description: 'How a Florida contractor allegedly stole millions in homeowner deposits, faced grand theft charges, and left dozens of projects unfinished.',
    url: 'https://www.clrblt.com/articles/nicholas-costello-florida-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
