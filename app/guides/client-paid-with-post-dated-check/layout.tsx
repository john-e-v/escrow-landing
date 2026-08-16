import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Client Handed You a Post-Dated Check: Why That\'s a Non-Payment in Disguise | CLRBLT',
  description: 'A post-dated check is non-payment with a delay button. Here\'s why it\'s a liability and how to structure payment so funds are secured before you work.',
  openGraph: {
    title: 'The Client Handed You a Post-Dated Check: Why That\'s a Non-Payment in Disguise',
    description: 'A post-dated check is non-payment with a delay button. Here\'s why it\'s a liability and how to structure payment so funds are secured before you work.',
    url: 'https://www.clrblt.com/guides/client-paid-with-post-dated-check',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
