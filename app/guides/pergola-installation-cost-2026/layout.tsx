import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does a Pergola Cost to Install in 2026? | CLRBLT',
  description: 'A pergola costs $3,500–$12,000 installed in 2026, with custom builds topping $20K. Here\'s what moves the price: material, size, footings, and roof type.',
  openGraph: {
    title: 'How Much Does a Pergola Cost to Install in 2026?',
    description: 'A pergola costs $3,500–$12,000 installed in 2026, with custom builds topping $20K. Here\'s what moves the price: material, size, footings, and roof type.',
    url: 'https://www.clrblt.com/guides/pergola-installation-cost-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
