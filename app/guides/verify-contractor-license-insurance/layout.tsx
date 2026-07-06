import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Check a Contractor\'s License and Insurance in Under 5 Minutes | CLRBLT',
  description: 'In under 5 minutes you can confirm a contractor\'s license and insurance. Exact sites to check, documents to request, and the red flag to watch for.',
  openGraph: {
    title: 'How to Check a Contractor\'s License and Insurance in Under 5 Minutes',
    description: 'In under 5 minutes you can confirm a contractor\'s license and insurance. Exact sites to check, documents to request, and the red flag to watch for.',
    url: 'https://www.clrblt.com/guides/verify-contractor-license-insurance',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
