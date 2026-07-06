import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does a Roof Replacement Cost in 2026? | CLRBLT',
  description: 'A roof replacement costs $8,000–$30,000 in 2026, driven by material, roof size, pitch, and tear-off. Here\'s what moves the number.',
  openGraph: {
    title: 'How Much Does a Roof Replacement Cost in 2026?',
    description: 'A roof replacement costs $8,000–$30,000 in 2026, driven by material, roof size, pitch, and tear-off. Here\'s what moves the number.',
    url: 'https://www.clrblt.com/guides/roof-replacement-cost-guide',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
