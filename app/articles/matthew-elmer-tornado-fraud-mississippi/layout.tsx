import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Contractor Who Preyed on Mississippi\'s 2023 Rolling Fork Tornado Victims | CLRBLT',
  description: 'How storm-chasing contractors targeted Rolling Fork, MS tornado victims in 2023, and what desperate homeowners can do to protect rebuild funds.',
  openGraph: {
    title: 'The Contractor Who Preyed on Mississippi\'s 2023 Rolling Fork Tornado Victims',
    description: 'How storm-chasing contractors targeted Rolling Fork, MS tornado victims in 2023, and what desperate homeowners can do to protect rebuild funds.',
    url: 'https://www.clrblt.com/articles/matthew-elmer-tornado-fraud-mississippi',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
