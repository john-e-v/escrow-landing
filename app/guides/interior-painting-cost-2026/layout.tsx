import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does It Cost to Paint a House Interior in 2026? | CLRBLT',
  description: 'Interior painting costs $2-$6 per sq ft in 2026 ($2,000-$6,000 average home). Here\'s what drives the range: prep, ceilings, trim, and paint grade.',
  openGraph: {
    title: 'How Much Does It Cost to Paint a House Interior in 2026?',
    description: 'Interior painting costs $2-$6 per sq ft in 2026 ($2,000-$6,000 average home). Here\'s what drives the range: prep, ceilings, trim, and paint grade.',
    url: 'https://www.clrblt.com/guides/interior-painting-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
