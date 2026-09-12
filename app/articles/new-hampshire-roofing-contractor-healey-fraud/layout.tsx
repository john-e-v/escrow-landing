import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The NH Roofing Contractor Who Stole $212K in Deposits — Then Did It Again | CLRBLT',
  description: 'NH roofing contractor Gerard Healey stole $212K from 23 homeowners for work never done — a repeat offense that sent him to state prison.',
  openGraph: {
    title: 'The NH Roofing Contractor Who Stole $212K in Deposits — Then Did It Again',
    description: 'NH roofing contractor Gerard Healey stole $212K from 23 homeowners for work never done — a repeat offense that sent him to state prison.',
    url: 'https://www.clrblt.com/articles/new-hampshire-roofing-contractor-healey-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
