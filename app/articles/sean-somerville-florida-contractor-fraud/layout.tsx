import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Florida Roofing Contractor Who Took Over $2.5M and Faced 100+ Charges | CLRBLT',
  description: 'A Florida roofing contractor took over $2.5M from homeowners for unfinished roofs, facing 100+ fraud charges. How the scheme unfolded and how to protect yourself.',
  openGraph: {
    title: 'The Florida Roofing Contractor Who Took Over $2.5M and Faced 100+ Charges',
    description: 'A Florida roofing contractor took over $2.5M from homeowners for unfinished roofs, facing 100+ fraud charges. How the scheme unfolded and how to protect yourself.',
    url: 'https://www.clrblt.com/articles/sean-somerville-florida-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
