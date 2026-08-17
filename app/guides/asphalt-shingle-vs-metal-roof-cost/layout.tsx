import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does a Metal Roof Cost vs. Asphalt in 2026? | CLRBLT',
  description: 'Metal roofs cost $12K–$40K installed in 2026 vs. $6K–$18K for asphalt shingles. Here\'s what drives the gap: material, roof pitch, and payback timeline.',
  openGraph: {
    title: 'How Much Does a Metal Roof Cost vs. Asphalt in 2026?',
    description: 'Metal roofs cost $12K–$40K installed in 2026 vs. $6K–$18K for asphalt shingles. Here\'s what drives the gap: material, roof pitch, and payback timeline.',
    url: 'https://www.clrblt.com/guides/asphalt-shingle-vs-metal-roof-cost',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
