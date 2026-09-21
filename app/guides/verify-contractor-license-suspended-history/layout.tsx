import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Check If a Contractor\'s License Was Ever Suspended (Not Just Active) | CLRBLT',
  description: 'An active license can hide a past suspension. Here\'s the 10-minute checklist to pull a contractor\'s full disciplinary history before you hire.',
  openGraph: {
    title: 'How to Check If a Contractor\'s License Was Ever Suspended (Not Just Active)',
    description: 'An active license can hide a past suspension. Here\'s the 10-minute checklist to pull a contractor\'s full disciplinary history before you hire.',
    url: 'https://www.clrblt.com/guides/verify-contractor-license-suspended-history',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
