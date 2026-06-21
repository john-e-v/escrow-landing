import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Minnesota Contractor Who Took Over $500,000 in Home Deposits | CLRBLT',
  description: 'How a Minnesota contractor collected over $500K in deposits for projects he never finished, facing theft by swindle charges.',
  openGraph: {
    title: 'The Minnesota Contractor Who Took Over $500,000 in Home Deposits',
    description: 'How a Minnesota contractor collected over $500K in deposits for projects he never finished, facing theft by swindle charges.',
    url: 'https://www.clrblt.com/articles/tarl-robinson-minnesota-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
