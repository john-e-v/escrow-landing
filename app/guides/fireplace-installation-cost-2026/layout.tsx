import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does a Fireplace Installation Cost in 2026? | CLRBLT',
  description: 'A new fireplace costs $2,500–$12,000 installed in 2026. See what type, venting, gas lines, and permits do to the price before you sign a contract.',
  openGraph: {
    title: 'How Much Does a Fireplace Installation Cost in 2026?',
    description: 'A new fireplace costs $2,500–$12,000 installed in 2026. See what type, venting, gas lines, and permits do to the price before you sign a contract.',
    url: 'https://www.clrblt.com/guides/fireplace-installation-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
