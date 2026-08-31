import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does Basement Waterproofing Cost in 2026? | CLRBLT',
  description: 'Basement waterproofing costs $3,000–$15,000 in 2026, with severe cases topping $30,000. Here\'s what drives the range: method, depth, and how bad the water problem really is.',
  openGraph: {
    title: 'How Much Does Basement Waterproofing Cost in 2026?',
    description: 'Basement waterproofing costs $3,000–$15,000 in 2026, with severe cases topping $30,000. Here\'s what drives the range: method, depth, and how bad the water problem really is.',
    url: 'https://www.clrblt.com/guides/basement-waterproofing-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
