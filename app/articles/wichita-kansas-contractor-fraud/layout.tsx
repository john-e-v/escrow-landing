import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Wichita Contractor Ordered to Pay Over $500,000 in Restitution | CLRBLT',
  description: 'How a Wichita contractor took deposits from homeowners for unfinished work and was convicted on 25 felony counts, ordered to pay over $500,000 restitution.',
  alternates: { canonical: 'https://www.clrblt.com/articles/wichita-kansas-contractor-fraud' },
  openGraph: {
    title: 'The Wichita Contractor Ordered to Pay Over $500,000 in Restitution',
    description: 'How a Wichita contractor took deposits from homeowners for unfinished work and was convicted on 25 felony counts, ordered to pay over $500,000 restitution.',
    url: 'https://www.clrblt.com/articles/wichita-kansas-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
