import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does Siding Replacement Cost in 2026? | CLRBLT',
  description: 'Siding replacement costs $8,000–$35,000 in 2026. Material, square footage, and hidden rot under the old siding drive the range. Here\'s the breakdown.',
  openGraph: {
    title: 'How Much Does Siding Replacement Cost in 2026?',
    description: 'Siding replacement costs $8,000–$35,000 in 2026. Material, square footage, and hidden rot under the old siding drive the range. Here\'s the breakdown.',
    url: 'https://www.clrblt.com/guides/siding-replacement-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
