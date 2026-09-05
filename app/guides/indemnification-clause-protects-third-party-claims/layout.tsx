import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Indemnification Clause That Stops a Client\'s Neighbor From Suing You | CLRBLT',
  description: 'The exact indemnification clause language contractors can copy today to shift third-party claim liability off your business and back where it belongs.',
  openGraph: {
    title: 'The Indemnification Clause That Stops a Client\'s Neighbor From Suing You',
    description: 'The exact indemnification clause language contractors can copy today to shift third-party claim liability off your business and back where it belongs.',
    url: 'https://www.clrblt.com/guides/indemnification-clause-protects-third-party-claims',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
