import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does a Concrete Patio Cost in 2026? | CLRBLT',
  description: 'A concrete patio costs $8–$20 per square foot in 2026 ($2,400–$6,000 for 300 sq ft). Here\'s what moves the number: finish, prep, thickness, and access.',
  openGraph: {
    title: 'How Much Does a Concrete Patio Cost in 2026?',
    description: 'A concrete patio costs $8–$20 per square foot in 2026 ($2,400–$6,000 for 300 sq ft). Here\'s what moves the number: finish, prep, thickness, and access.',
    url: 'https://www.clrblt.com/guides/concrete-patio-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
