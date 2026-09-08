import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Contractor Installed the Wrong-Size HVAC. Escrow Meant the Homeowner Hadn\'t Paid. | CLRBLT',
  description: 'A contractor installed an undersized HVAC unit—but escrow meant the homeowner hadn\'t paid yet. Here\'s how the payment timing forced the fix instead of a fight.',
  openGraph: {
    title: 'The Contractor Installed the Wrong-Size HVAC. Escrow Meant the Homeowner Hadn\'t Paid.',
    description: 'A contractor installed an undersized HVAC unit—but escrow meant the homeowner hadn\'t paid yet. Here\'s how the payment timing forced the fix instead of a fight.',
    url: 'https://www.clrblt.com/guides/escrow-caught-hvac-wrong-tonnage',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
