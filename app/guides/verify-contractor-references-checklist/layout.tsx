import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Check a Contractor\'s References (The 6 Questions That Actually Matter) | CLRBLT',
  description: '6 reference-check questions that expose bad contractors before you sign. Copy the script, know what to ask, and spot the one dodge that ends the conversation.',
  openGraph: {
    title: 'How to Check a Contractor\'s References (The 6 Questions That Actually Matter)',
    description: '6 reference-check questions that expose bad contractors before you sign. Copy the script, know what to ask, and spot the one dodge that ends the conversation.',
    url: 'https://www.clrblt.com/guides/verify-contractor-references-checklist',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
