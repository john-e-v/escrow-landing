import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '12 Questions to Ask a Contractor Before You Sign Anything | CLRBLT',
  description: '12 exact questions to ask a contractor before hiring: license, insurance, permits, payment schedule, and timeline. Screenshot this before your next bid.',
  openGraph: {
    title: '12 Questions to Ask a Contractor Before You Sign Anything',
    description: '12 exact questions to ask a contractor before hiring: license, insurance, permits, payment schedule, and timeline. Screenshot this before your next bid.',
    url: 'https://www.clrblt.com/guides/questions-to-ask-contractor-before-hiring',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
