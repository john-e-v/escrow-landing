import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact CLRBLT',
  description: 'Questions about submitting a project, signing up as a contractor, or our master service agreement? Get in touch — we respond within one business day.',
  openGraph: {
    title: 'Contact CLRBLT',
    description: 'Reach out with questions about escrow-protected project payments.',
    url: 'https://www.clrblt.com/contact',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
