import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does a Ductless Mini-Split Cost to Install in 2026? | CLRBLT',
  description: 'A single-zone ductless mini-split costs $3,500–$6,500 installed in 2026; multi-zone systems run $8,000–$20,000. Here\'s what moves the number.',
  openGraph: {
    title: 'How Much Does a Ductless Mini-Split Cost to Install in 2026?',
    description: 'A single-zone ductless mini-split costs $3,500–$6,500 installed in 2026; multi-zone systems run $8,000–$20,000. Here\'s what moves the number.',
    url: 'https://www.clrblt.com/guides/mini-split-installation-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
