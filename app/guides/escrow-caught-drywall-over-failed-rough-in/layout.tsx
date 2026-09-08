import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Drywall Went Up Over a Failed Rough-In. Escrow Meant the Homeowner Wasn\'t Stuck. | CLRBLT',
  description: 'A contractor drywalled over a failed rough-in to hit a milestone. Escrow meant the homeowner didn\'t pay for the cover-up — or the tear-out. Here\'s how it played out.',
  openGraph: {
    title: 'The Drywall Went Up Over a Failed Rough-In. Escrow Meant the Homeowner Wasn\'t Stuck.',
    description: 'A contractor drywalled over a failed rough-in to hit a milestone. Escrow meant the homeowner didn\'t pay for the cover-up — or the tear-out. Here\'s how it played out.',
    url: 'https://www.clrblt.com/guides/escrow-caught-drywall-over-failed-rough-in',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
