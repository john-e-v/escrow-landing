import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Verify a Contractor\'s Bond (And Why It Matters More Than License) | CLRBLT',
  description: 'Verify a contractor\'s bond in under 10 minutes: request the bond number, confirm the surety, and check the coverage amount before you hire. Step-by-step checklist.',
  openGraph: {
    title: 'How to Verify a Contractor\'s Bond (And Why It Matters More Than License)',
    description: 'Verify a contractor\'s bond in under 10 minutes: request the bond number, confirm the surety, and check the coverage amount before you hire. Step-by-step checklist.',
    url: 'https://www.clrblt.com/guides/verify-contractor-bond-status',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
