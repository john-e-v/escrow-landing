import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Minnesota Storm-Chaser Who Bilked Homeowners After a Hailstorm | CLRBLT',
  description: 'How a Minnesota storm-chasing roofer took insurance money and deposits after hailstorms, leaving homeowners with unfinished roofs and empty claims.',
  openGraph: {
    title: 'The Minnesota Storm-Chaser Who Bilked Homeowners After a Hailstorm',
    description: 'How a Minnesota storm-chasing roofer took insurance money and deposits after hailstorms, leaving homeowners with unfinished roofs and empty claims.',
    url: 'https://www.clrblt.com/articles/cornerstone-marketing-minnesota-storm-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
