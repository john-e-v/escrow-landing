import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'You Can Own Your AI. You Can\'t Own Your Escrow. | CLRBLT',
  description: 'Companies are moving AI in-house for good reason. Escrow is the one layer that cannot follow, because standing outside the deal is the entire product.',
  openGraph: {
    title: 'You Can Own Your AI. You Can\'t Own Your Escrow.',
    description: 'Companies are moving AI in-house for good reason. Escrow is the one layer that cannot follow, because standing outside the deal is the entire product.',
    url: 'https://www.clrblt.com/guides/own-your-ai-outsource-your-escrow',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
