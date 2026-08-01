import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is Attic Insulation Worth It? Cost, Payback, and When It Doesn\'t Pay | CLRBLT',
  description: 'Yes: attic insulation pays back in 2-4 years and returns ~100% at resale. Here\'s the cost math, the energy savings, and when it stops being worth it.',
  openGraph: {
    title: 'Is Attic Insulation Worth It? Cost, Payback, and When It Doesn\'t Pay',
    description: 'Yes: attic insulation pays back in 2-4 years and returns ~100% at resale. Here\'s the cost math, the energy savings, and when it stops being worth it.',
    url: 'https://www.clrblt.com/guides/attic-insulation-worth-it-payback',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
