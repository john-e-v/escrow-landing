import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Electrician Buried Undersized Wire in the Wall. Escrow Meant the Homeowner Didn\'t Pay for a Fire Hazard. | CLRBLT',
  description: 'An electrician ran undersized wire behind finished drywall. Escrow tied to inspection meant the homeowner paid $0 until it was corrected. Here\'s how it played out.',
  openGraph: {
    title: 'The Electrician Buried Undersized Wire in the Wall. Escrow Meant the Homeowner Didn\'t Pay for a Fire Hazard.',
    description: 'An electrician ran undersized wire behind finished drywall. Escrow tied to inspection meant the homeowner paid $0 until it was corrected. Here\'s how it played out.',
    url: 'https://www.clrblt.com/guides/escrow-caught-electrical-code-violation',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
