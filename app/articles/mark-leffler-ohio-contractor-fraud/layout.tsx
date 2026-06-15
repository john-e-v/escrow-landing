import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Ohio Contractor Who Stole $1M From Elderly Homeowners | CLRBLT',
  description: 'How an Ohio contractor defrauded elderly homeowners of deposits for unfinished work, leading to charges from the state Attorney General.',
  openGraph: {
    title: 'The Ohio Contractor Who Stole $1M From Elderly Homeowners',
    description: 'How an Ohio contractor defrauded elderly homeowners of deposits for unfinished work, leading to charges from the state Attorney General.',
    url: 'https://www.clrblt.com/articles/mark-leffler-ohio-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
