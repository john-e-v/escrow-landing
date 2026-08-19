import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Vet a Contractor\'s Google Business Profile Before You Call | CLRBLT',
  description: 'In 4 minutes you can spot a contractor hiding a bad history: check profile age, address match, review timing, and photo dates on their Google Business Profile.',
  openGraph: {
    title: 'How to Vet a Contractor\'s Google Business Profile Before You Call',
    description: 'In 4 minutes you can spot a contractor hiding a bad history: check profile age, address match, review timing, and photo dates on their Google Business Profile.',
    url: 'https://www.clrblt.com/guides/verify-contractor-google-business-profile',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
