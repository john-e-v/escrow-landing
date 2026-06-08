import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About CLRBLT — Why Structural Protection Matters',
  description: 'The distrust between homeowners and contractors is real and earned. AI is making it worse. CLRBLT uses escrow as structural protection — because in a world where appearances are easy to fake, structure is the only real answer.',
  openGraph: {
    title: 'About CLRBLT — Why Structural Protection Matters',
    description: 'Escrow as structural protection for homeowners and contractors. Not trust, not intuition — structure.',
    url: 'https://www.clrblt.com/about',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
