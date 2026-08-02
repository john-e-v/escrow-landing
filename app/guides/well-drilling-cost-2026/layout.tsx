import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does It Cost to Drill a Well in 2026? | CLRBLT',
  description: 'Drilling a residential well costs $5,500 to $18,000 in 2026. Here\'s what drives the range: depth, bedrock, casing, pump, and permits.',
  openGraph: {
    title: 'How Much Does It Cost to Drill a Well in 2026?',
    description: 'Drilling a residential well costs $5,500 to $18,000 in 2026. Here\'s what drives the range: depth, bedrock, casing, pump, and permits.',
    url: 'https://www.clrblt.com/guides/well-drilling-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
