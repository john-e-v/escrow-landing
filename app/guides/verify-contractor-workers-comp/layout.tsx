import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Verify a Contractor\'s Workers\' Comp (And Why You\'re Liable Without It) | CLRBLT',
  description: 'Without workers\' comp, an injured crew member can sue the homeowner. Here\'s how to verify a contractor\'s coverage in under 5 minutes before work starts.',
  openGraph: {
    title: 'How to Verify a Contractor\'s Workers\' Comp (And Why You\'re Liable Without It)',
    description: 'Without workers\' comp, an injured crew member can sue the homeowner. Here\'s how to verify a contractor\'s coverage in under 5 minutes before work starts.',
    url: 'https://www.clrblt.com/guides/verify-contractor-workers-comp',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
