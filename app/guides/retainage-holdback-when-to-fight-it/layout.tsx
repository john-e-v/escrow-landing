import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Retainage Explained: When a 10% Holdback Is Fair and When It\'s a Trap | CLRBLT',
  description: 'A 10% retainage holdback is standard on commercial work, but without a written release trigger it becomes an interest-free loan you never get back. Here\'s how to structure it.',
  openGraph: {
    title: 'Retainage Explained: When a 10% Holdback Is Fair and When It\'s a Trap',
    description: 'A 10% retainage holdback is standard on commercial work, but without a written release trigger it becomes an interest-free loan you never get back. Here\'s how to structure it.',
    url: 'https://www.clrblt.com/guides/retainage-holdback-when-to-fight-it',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
