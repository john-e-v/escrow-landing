import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does Spray Foam Insulation Cost in 2026? | CLRBLT',
  description: 'Spray foam insulation costs $1.50–$4.50 per board foot in 2026, or $4,000–$15,000 whole-home. Here\'s what drives the range: foam type, prep, and access.',
  openGraph: {
    title: 'How Much Does Spray Foam Insulation Cost in 2026?',
    description: 'Spray foam insulation costs $1.50–$4.50 per board foot in 2026, or $4,000–$15,000 whole-home. Here\'s what drives the range: foam type, prep, and access.',
    url: 'https://www.clrblt.com/guides/spray-foam-insulation-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
