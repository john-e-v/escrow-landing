import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does an Epoxy Garage Floor Cost in 2026? | CLRBLT',
  description: 'Epoxy garage floors cost $3-$12/sq ft in 2026, or $1,500-$6,000 for a two-car garage. Here\'s what drives the range: coating type, prep, and DIY vs. pro.',
  openGraph: {
    title: 'How Much Does an Epoxy Garage Floor Cost in 2026?',
    description: 'Epoxy garage floors cost $3-$12/sq ft in 2026, or $1,500-$6,000 for a two-car garage. Here\'s what drives the range: coating type, prep, and DIY vs. pro.',
    url: 'https://www.clrblt.com/guides/epoxy-garage-floor-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
