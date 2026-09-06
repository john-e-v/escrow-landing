import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Contractor Who Took Deposits From Mississippi Tornado Survivors | CLRBLT',
  description: 'A Mississippi contractor took deposits from tornado survivors and left work unfinished, prompting fraud charges. Here\'s how it unfolded.',
  openGraph: {
    title: 'The Contractor Who Took Deposits From Mississippi Tornado Survivors',
    description: 'A Mississippi contractor took deposits from tornado survivors and left work unfinished, prompting fraud charges. Here\'s how it unfolded.',
    url: 'https://www.clrblt.com/articles/sedrick-gaines-tornado-mississippi-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
