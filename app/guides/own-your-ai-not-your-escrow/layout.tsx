import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'You Can Own Your AI. You Can\'t Own Your Escrow. | CLRBLT',
  description: 'Trust is the cornerstone of what a contractor builds in-house. Escrow is the exception: neither side of a deal can build its own proof of trust.',
  openGraph: {
    title: 'You Can Own Your AI. You Can\'t Own Your Escrow.',
    description: 'Trust is the cornerstone of what a contractor builds in-house. Escrow is the exception: neither side of a deal can build its own proof of trust.',
    url: 'https://www.clrblt.com/guides/own-your-ai-not-your-escrow',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
