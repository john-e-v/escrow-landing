import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Buffalo Contractor Who Took Storm Repair Deposits and Vanished | CLRBLT',
  description: 'How a Buffalo-area contractor collected storm repair deposits after the deadly 2022 blizzard, then vanished, leaving homeowners without repairs.',
  openGraph: {
    title: 'The Buffalo Contractor Who Took Storm Repair Deposits and Vanished',
    description: 'How a Buffalo-area contractor collected storm repair deposits after the deadly 2022 blizzard, then vanished, leaving homeowners without repairs.',
    url: 'https://www.clrblt.com/articles/richard-kirk-jr-buffalo-blizzard-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
