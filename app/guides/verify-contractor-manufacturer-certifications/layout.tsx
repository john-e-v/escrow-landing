import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Verify a Contractor\'s Manufacturer Certifications (And Why Fakes Are Common) | CLRBLT',
  description: 'Most manufacturer certification badges are never verified by homeowners. Here\'s how to confirm a contractor\'s cert in under 10 minutes and protect your warranty.',
  openGraph: {
    title: 'How to Verify a Contractor\'s Manufacturer Certifications (And Why Fakes Are Common)',
    description: 'Most manufacturer certification badges are never verified by homeowners. Here\'s how to confirm a contractor\'s cert in under 10 minutes and protect your warranty.',
    url: 'https://www.clrblt.com/guides/verify-contractor-manufacturer-certifications',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
