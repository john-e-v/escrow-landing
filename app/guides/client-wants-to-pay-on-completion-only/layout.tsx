import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Client Wants to Pay Everything on Completion: Why That\'s Their Risk, Not Yours | CLRBLT',
  description: 'A pay-on-completion demand means you finance the whole job. Here\'s why milestone escrow protects your cash flow without asking the client to trust you first.',
  openGraph: {
    title: 'The Client Wants to Pay Everything on Completion: Why That\'s Their Risk, Not Yours',
    description: 'A pay-on-completion demand means you finance the whole job. Here\'s why milestone escrow protects your cash flow without asking the client to trust you first.',
    url: 'https://www.clrblt.com/guides/client-wants-to-pay-on-completion-only',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
