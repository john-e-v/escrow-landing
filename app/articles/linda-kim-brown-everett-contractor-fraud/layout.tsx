import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Everett Contractor Charged With Taking $500K in Deposits — and Hiding $1.5M | CLRBLT',
  description: 'Everett contractor Linda Kim Brown faces felony theft and tax charges after allegedly taking $500K in deposits for remodels she never began.',
  openGraph: {
    title: 'The Everett Contractor Charged With Taking $500K in Deposits — and Hiding $1.5M',
    description: 'Everett contractor Linda Kim Brown faces felony theft and tax charges after allegedly taking $500K in deposits for remodels she never began.',
    url: 'https://www.clrblt.com/articles/linda-kim-brown-everett-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
