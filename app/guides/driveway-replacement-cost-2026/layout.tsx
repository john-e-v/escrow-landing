import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does It Cost to Replace a Driveway in 2026? | CLRBLT',
  description: 'A driveway replacement runs $4,000–$18,000 in 2026. See what drives the range: material, square footage, site prep, drainage, and regional labor.',
  openGraph: {
    title: 'How Much Does It Cost to Replace a Driveway in 2026?',
    description: 'A driveway replacement runs $4,000–$18,000 in 2026. See what drives the range: material, square footage, site prep, drainage, and regional labor.',
    url: 'https://www.clrblt.com/guides/driveway-replacement-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
