import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Plumbing Rough-In Leaked Behind the Wall. Escrow Meant the Homeowner Held Firm. | CLRBLT',
  description: 'A hidden rough-in leak would\'ve cost $9K to chase after drywall. Escrow-held payment kept the fix on the contractor before anyone signed off.',
  openGraph: {
    title: 'The Plumbing Rough-In Leaked Behind the Wall. Escrow Meant the Homeowner Held Firm.',
    description: 'A hidden rough-in leak would\'ve cost $9K to chase after drywall. Escrow-held payment kept the fix on the contractor before anyone signed off.',
    url: 'https://www.clrblt.com/guides/escrow-caught-plumbing-rough-in-leak',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
