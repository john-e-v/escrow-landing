import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does Driveway Sealcoating Cost in 2026? | CLRBLT',
  description: 'Driveway sealcoating costs $0.15–$0.50/sq ft, or $100–$600 for a typical driveway. Here\'s what moves the price: sealant type, prep, crack repair, and coats.',
  openGraph: {
    title: 'How Much Does Driveway Sealcoating Cost in 2026?',
    description: 'Driveway sealcoating costs $0.15–$0.50/sq ft, or $100–$600 for a typical driveway. Here\'s what moves the price: sealant type, prep, crack repair, and coats.',
    url: 'https://www.clrblt.com/guides/asphalt-driveway-sealcoating-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
