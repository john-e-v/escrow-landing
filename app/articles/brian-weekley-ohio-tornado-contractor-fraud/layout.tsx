import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Contractor Who Preyed on Ohio\'s 2024 Tornado Victims | CLRBLT',
  description: 'How storm-chasing contractors targeted Ohio homeowners after the deadly March 2024 tornado outbreak, taking deposits and leaving repairs unfinished.',
  openGraph: {
    title: 'The Contractor Who Preyed on Ohio\'s 2024 Tornado Victims',
    description: 'How storm-chasing contractors targeted Ohio homeowners after the deadly March 2024 tornado outbreak, taking deposits and leaving repairs unfinished.',
    url: 'https://www.clrblt.com/articles/brian-weekley-ohio-tornado-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
