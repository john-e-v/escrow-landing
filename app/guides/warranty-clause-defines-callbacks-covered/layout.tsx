import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Warranty Clause That Says Exactly What You\'ll Fix (And What You Won\'t) | CLRBLT',
  description: 'Copy this warranty clause to define exactly what you\'ll fix, for how long, and what voids coverage—so callbacks don\'t become endless free labor.',
  openGraph: {
    title: 'The Warranty Clause That Says Exactly What You\'ll Fix (And What You Won\'t)',
    description: 'Copy this warranty clause to define exactly what you\'ll fix, for how long, and what voids coverage—so callbacks don\'t become endless free labor.',
    url: 'https://www.clrblt.com/guides/warranty-clause-defines-callbacks-covered',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
