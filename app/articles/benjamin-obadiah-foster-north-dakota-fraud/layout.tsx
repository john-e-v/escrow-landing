import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The North Dakota Contractor Who Took Deposits and Became a Fugitive | CLRBLT',
  description: 'How a North Dakota contractor took homeowner deposits, left jobs unfinished, and became a fugitive from justice. Lessons on protecting your payments.',
  openGraph: {
    title: 'The North Dakota Contractor Who Took Deposits and Became a Fugitive',
    description: 'How a North Dakota contractor took homeowner deposits, left jobs unfinished, and became a fugitive from justice. Lessons on protecting your payments.',
    url: 'https://www.clrblt.com/articles/benjamin-obadiah-foster-north-dakota-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
