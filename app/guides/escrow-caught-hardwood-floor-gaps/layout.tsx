import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Hardwood Floor Was Laid Over Wet Subfloor. Escrow Meant the Homeowner Held Firm. | CLRBLT',
  description: 'Hardwood laid over a wet subfloor cupped in weeks. Escrow meant the homeowner hadn\'t released final payment, forcing a free tear-out instead of a $9K fight.',
  openGraph: {
    title: 'The Hardwood Floor Was Laid Over Wet Subfloor. Escrow Meant the Homeowner Held Firm.',
    description: 'Hardwood laid over a wet subfloor cupped in weeks. Escrow meant the homeowner hadn\'t released final payment, forcing a free tear-out instead of a $9K fight.',
    url: 'https://www.clrblt.com/guides/escrow-caught-hardwood-floor-gaps',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
