import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Louisiana Contractor Who Took Over $250,000 From Hurricane Ida Victims | CLRBLT',
  description: 'How a Louisiana contractor took deposits from Hurricane Ida victims and left projects unfinished, leading to fraud charges. Lessons for homeowners.',
  openGraph: {
    title: 'The Louisiana Contractor Who Took Over $250,000 From Hurricane Ida Victims',
    description: 'How a Louisiana contractor took deposits from Hurricane Ida victims and left projects unfinished, leading to fraud charges. Lessons for homeowners.',
    url: 'https://www.clrblt.com/articles/roberto-contreras-louisiana-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
