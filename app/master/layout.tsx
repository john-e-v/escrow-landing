import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Master Service Agreement — CLRBLT for Businesses',
  description: 'Escrow payment infrastructure for high-volume contractors and businesses. Transparent pricing tiers, quick setup, and a customized master service agreement delivered within 24 hours.',
  openGraph: {
    title: 'Master Service Agreement — CLRBLT for Businesses',
    description: 'Escrow payment infrastructure for contractors and businesses. Pricing from $0/month.',
    url: 'https://www.clrblt.com/master',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
