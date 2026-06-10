import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Pennsylvania Contractor Who Stole Over $400,000 From Homeowners | CLRBLT',
  description: 'How a Pennsylvania contractor took $400,000+ in deposits for work never done, and the criminal charges that followed.',
  openGraph: {
    title: 'The Pennsylvania Contractor Who Stole Over $400,000 From Homeowners',
    description: 'How a Pennsylvania contractor took $400,000+ in deposits for work never done, and the criminal charges that followed.',
    url: 'https://www.clrblt.com/articles/benjamin-dewees-pennsylvania-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
