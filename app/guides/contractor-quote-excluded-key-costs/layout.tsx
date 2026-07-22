import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Your Quote Said $28K and the Final Bill Was $41K | CLRBLT',
  description: 'A $28K quote became a $41K bill—not from fraud, but from exclusions the homeowner never read. Here\'s what quotes leave out and how to catch it.',
  openGraph: {
    title: 'Why Your Quote Said $28K and the Final Bill Was $41K',
    description: 'A $28K quote became a $41K bill—not from fraud, but from exclusions the homeowner never read. Here\'s what quotes leave out and how to catch it.',
    url: 'https://www.clrblt.com/guides/contractor-quote-excluded-key-costs',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
