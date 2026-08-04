import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Contractor Who Preyed on Kentucky\'s 2021 Tornado Victims | CLRBLT',
  description: 'How storm-chasing contractors defrauded Kentucky tornado victims after the December 2021 outbreak, taking deposits for work never done.',
  openGraph: {
    title: 'The Contractor Who Preyed on Kentucky\'s 2021 Tornado Victims',
    description: 'How storm-chasing contractors defrauded Kentucky tornado victims after the December 2021 outbreak, taking deposits for work never done.',
    url: 'https://www.clrblt.com/articles/michael-esposito-tornado-kentucky-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
