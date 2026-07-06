import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Kentucky Contractor Who Took Thousands From Homeowners in Deposit Scheme | CLRBLT',
  description: 'A Kentucky contractor took deposits from homeowners for work never completed, leading to theft charges. How escrow protects against deposit fraud.',
  openGraph: {
    title: 'The Kentucky Contractor Who Took Thousands From Homeowners in Deposit Scheme',
    description: 'A Kentucky contractor took deposits from homeowners for work never completed, leading to theft charges. How escrow protects against deposit fraud.',
    url: 'https://www.clrblt.com/articles/gary-mcdaniel-kentucky-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
