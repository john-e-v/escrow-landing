import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Change Order That Was Never Written Down: Why You\'re Paying for a Handshake | CLRBLT',
  description: 'A $7,200 verbal change order nobody wrote down blew this remodel\'s budget. Here\'s why undocumented changes cost you — and how to stop it.',
  openGraph: {
    title: 'The Change Order That Was Never Written Down: Why You\'re Paying for a Handshake',
    description: 'A $7,200 verbal change order nobody wrote down blew this remodel\'s budget. Here\'s why undocumented changes cost you — and how to stop it.',
    url: 'https://www.clrblt.com/guides/contractor-changed-order-verbal-only',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
