import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Maryland Contractor Ordered to Pay $4.5M After Taking Homeowner Deposits | CLRBLT',
  description: 'Maryland ordered Optimum Construction owner Amr "Omar" Elrahimy to pay $4.5M after taking homeowner deposits for work never completed.',
  openGraph: {
    title: 'The Maryland Contractor Ordered to Pay $4.5M After Taking Homeowner Deposits',
    description: 'Maryland ordered Optimum Construction owner Amr "Omar" Elrahimy to pay $4.5M after taking homeowner deposits for work never completed.',
    url: 'https://www.clrblt.com/articles/optimum-construction-elrahimy-maryland-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
