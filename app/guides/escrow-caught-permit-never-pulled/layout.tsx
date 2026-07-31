import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Contractor Skipped the Permit. Escrow Meant the Homeowner Held the Leverage. | CLRBLT',
  description: 'No permit, a stop-work order, and $22K of framing at risk. Escrow tied to inspection milestones meant the homeowner hadn\'t released the money yet.',
  openGraph: {
    title: 'The Contractor Skipped the Permit. Escrow Meant the Homeowner Held the Leverage.',
    description: 'No permit, a stop-work order, and $22K of framing at risk. Escrow tied to inspection milestones meant the homeowner hadn\'t released the money yet.',
    url: 'https://www.clrblt.com/guides/escrow-caught-permit-never-pulled',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
