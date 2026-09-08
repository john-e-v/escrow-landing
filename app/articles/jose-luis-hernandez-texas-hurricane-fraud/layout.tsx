import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Houston Contractor Who Took Over $1M From Hurricane Beryl Victims | CLRBLT',
  description: 'How storm-chasing contractors targeted Hurricane Beryl victims in the Houston area, taking deposits and leaving repairs unfinished in 2024.',
  openGraph: {
    title: 'The Houston Contractor Who Took Over $1M From Hurricane Beryl Victims',
    description: 'How storm-chasing contractors targeted Hurricane Beryl victims in the Houston area, taking deposits and leaving repairs unfinished in 2024.',
    url: 'https://www.clrblt.com/articles/jose-luis-hernandez-texas-hurricane-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
