import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Omaha Contractors Who Took Storm Deposits and Vanished | CLRBLT',
  description: 'Two Omaha-area contractors took thousands in siding and roofing deposits after storms, then disappeared. Here\'s what homeowners can learn.',
  alternates: { canonical: 'https://www.clrblt.com/articles/omaha-nebraska-contractor-fraud' },
  openGraph: {
    title: 'The Omaha Contractors Who Took Storm Deposits and Vanished',
    description: 'Two Omaha-area contractors took thousands in siding and roofing deposits after storms, then disappeared. Here\'s what homeowners can learn.',
    url: 'https://www.clrblt.com/articles/omaha-nebraska-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
