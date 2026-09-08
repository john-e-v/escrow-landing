import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does Gutter Replacement Cost in 2026? | CLRBLT',
  description: 'Gutter replacement runs $4–$30 per linear foot installed—most homes land at $1,000–$6,000. Here\'s what moves the number: material, height, and hidden fascia rot.',
  openGraph: {
    title: 'How Much Does Gutter Replacement Cost in 2026?',
    description: 'Gutter replacement runs $4–$30 per linear foot installed—most homes land at $1,000–$6,000. Here\'s what moves the number: material, height, and hidden fascia rot.',
    url: 'https://www.clrblt.com/guides/gutter-replacement-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
