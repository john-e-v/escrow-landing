import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What to Do When a Client Disputes the Invoice After the Job\'s Done | CLRBLT',
  description: 'A post-completion invoice dispute is nearly unwinnable once the work\'s done and the money\'s still in the client\'s account. Here\'s how to fix the structure.',
  openGraph: {
    title: 'What to Do When a Client Disputes the Invoice After the Job\'s Done',
    description: 'A post-completion invoice dispute is nearly unwinnable once the work\'s done and the money\'s still in the client\'s account. Here\'s how to fix the structure.',
    url: 'https://www.clrblt.com/guides/client-disputes-invoice-after-completion',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
