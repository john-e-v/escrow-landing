import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does It Cost to Stain and Seal a Deck in 2026? | CLRBLT',
  description: 'Staining and sealing a deck costs $2–$5 per sq ft in 2026 ($600–$2,000 typical). Here\'s what drives the range: prep, stain type, deck size, and condition.',
  openGraph: {
    title: 'How Much Does It Cost to Stain and Seal a Deck in 2026?',
    description: 'Staining and sealing a deck costs $2–$5 per sq ft in 2026 ($600–$2,000 typical). Here\'s what drives the range: prep, stain type, deck size, and condition.',
    url: 'https://www.clrblt.com/guides/deck-staining-sealing-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
