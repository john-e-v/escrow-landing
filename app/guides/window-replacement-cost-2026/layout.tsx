import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does Window Replacement Cost in 2026? | CLRBLT',
  description: 'Window replacement costs $450–$1,600 per window installed in 2026. Here\'s what moves the number: material, glass, and hidden reframing.',
  openGraph: {
    title: 'How Much Does Window Replacement Cost in 2026?',
    description: 'Window replacement costs $450–$1,600 per window installed in 2026. Here\'s what moves the number: material, glass, and hidden reframing.',
    url: 'https://www.clrblt.com/guides/window-replacement-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
