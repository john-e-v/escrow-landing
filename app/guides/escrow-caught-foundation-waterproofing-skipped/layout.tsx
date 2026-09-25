import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Foundation Waterproofing Got Skipped Before Backfill. Escrow Meant the Homeowner Held Firm. | CLRBLT',
  description: 'A crew backfilled a foundation before applying waterproofing. Escrow meant the $22K wasn\'t released until the wall was dug back up and sealed right.',
  openGraph: {
    title: 'The Foundation Waterproofing Got Skipped Before Backfill. Escrow Meant the Homeowner Held Firm.',
    description: 'A crew backfilled a foundation before applying waterproofing. Escrow meant the $22K wasn\'t released until the wall was dug back up and sealed right.',
    url: 'https://www.clrblt.com/guides/escrow-caught-foundation-waterproofing-skipped',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
