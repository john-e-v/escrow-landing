import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does It Cost to Soundproof a Room in 2026? | CLRBLT',
  description: 'Soundproofing a room costs $1,000–$5,000 in 2026, up to $10K+ for studios. Here\'s what drives the range: assembly type, wall demo, and decoupling.',
  openGraph: {
    title: 'How Much Does It Cost to Soundproof a Room in 2026?',
    description: 'Soundproofing a room costs $1,000–$5,000 in 2026, up to $10K+ for studios. Here\'s what drives the range: assembly type, wall demo, and decoupling.',
    url: 'https://www.clrblt.com/guides/soundproofing-room-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
