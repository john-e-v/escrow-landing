import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Pull a Contractor\'s Permit History Before You Hire (Free, Public, 10 Minutes) | CLRBLT',
  description: 'Pull any contractor\'s permit history free in 10 minutes. The public records that reveal whether they actually pull permits or quietly skip them.',
  openGraph: {
    title: 'How to Pull a Contractor\'s Permit History Before You Hire (Free, Public, 10 Minutes)',
    description: 'Pull any contractor\'s permit history free in 10 minutes. The public records that reveal whether they actually pull permits or quietly skip them.',
    url: 'https://www.clrblt.com/guides/verify-contractor-past-permit-history',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
