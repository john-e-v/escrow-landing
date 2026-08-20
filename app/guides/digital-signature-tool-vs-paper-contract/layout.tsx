import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Signature Tool vs. Paper Contract: What Actually Holds Up | CLRBLT',
  description: 'Paper contracts and digital signature tools both hold up legally—but only one gives you a timestamped audit trail. Here\'s what each actually costs you.',
  openGraph: {
    title: 'Digital Signature Tool vs. Paper Contract: What Actually Holds Up',
    description: 'Paper contracts and digital signature tools both hold up legally—but only one gives you a timestamped audit trail. Here\'s what each actually costs you.',
    url: 'https://www.clrblt.com/guides/digital-signature-tool-vs-paper-contract',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
