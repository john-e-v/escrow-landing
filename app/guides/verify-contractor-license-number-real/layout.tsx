import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Verify a Contractor\'s License Number Is Real (Not Just Copied Off Someone Else) | CLRBLT',
  description: 'In under 10 minutes, confirm a contractor\'s license number is real, active, and matches their name — free, public, and step by step.',
  openGraph: {
    title: 'How to Verify a Contractor\'s License Number Is Real (Not Just Copied Off Someone Else)',
    description: 'In under 10 minutes, confirm a contractor\'s license number is real, active, and matches their name — free, public, and step by step.',
    url: 'https://www.clrblt.com/guides/verify-contractor-license-number-real',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
