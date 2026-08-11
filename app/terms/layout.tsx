import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — CLRBLT',
  description: 'CLRBLT terms of service. CLRBLT connects homeowners with contractors; escrow services are provided by Paykeeper (paykeeper.com).',
  alternates: { canonical: 'https://www.clrblt.com/terms' },
  openGraph: {
    title: 'Terms of Service — CLRBLT',
    url: 'https://www.clrblt.com/terms',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
