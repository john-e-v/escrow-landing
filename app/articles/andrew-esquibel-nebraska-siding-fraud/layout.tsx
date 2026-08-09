import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Nebraska Siding Contractor Who Took Storm Deposits and Vanished | CLRBLT',
  description: 'A Nebraska contractor took thousands in siding and roofing deposits after storms, then disappeared. Here\'s what homeowners can learn.',
  openGraph: {
    title: 'The Nebraska Siding Contractor Who Took Storm Deposits and Vanished',
    description: 'A Nebraska contractor took thousands in siding and roofing deposits after storms, then disappeared. Here\'s what homeowners can learn.',
    url: 'https://www.clrblt.com/articles/andrew-esquibel-nebraska-siding-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
