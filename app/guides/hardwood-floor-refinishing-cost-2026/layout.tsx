import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does It Cost to Refinish Hardwood Floors in 2026? | CLRBLT',
  description: 'Refinishing hardwood floors costs $3–$8/sq ft in 2026. Here\'s what moves the price: wood species, damage, stain changes, and finish type.',
  openGraph: {
    title: 'How Much Does It Cost to Refinish Hardwood Floors in 2026?',
    description: 'Refinishing hardwood floors costs $3–$8/sq ft in 2026. Here\'s what moves the price: wood species, damage, stain changes, and finish type.',
    url: 'https://www.clrblt.com/guides/hardwood-floor-refinishing-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
