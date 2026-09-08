import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Confirm a Contractor\'s License Is Active (Not Just Real) | CLRBLT',
  description: 'A real license number means nothing if it\'s expired or suspended. Here\'s how to confirm active status, check expiration, and spot suspensions in under 10 minutes.',
  openGraph: {
    title: 'How to Confirm a Contractor\'s License Is Active (Not Just Real)',
    description: 'A real license number means nothing if it\'s expired or suspended. Here\'s how to confirm active status, check expiration, and spot suspensions in under 10 minutes.',
    url: 'https://www.clrblt.com/guides/verify-contractor-license-active-not-expired',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
