import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Build vs. Buy: When Custom Contractor Software Actually Pays Off | CLRBLT',
  description: 'Custom contractor software pays off in maybe 1 of 10 cases. Here\'s how to decide build vs. buy, and the one piece to never build in-house.',
  openGraph: {
    title: 'Build vs. Buy: When Custom Contractor Software Actually Pays Off',
    description: 'Custom contractor software pays off in maybe 1 of 10 cases. Here\'s how to decide build vs. buy, and the one piece to never build in-house.',
    url: 'https://www.clrblt.com/guides/should-you-build-custom-software',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
