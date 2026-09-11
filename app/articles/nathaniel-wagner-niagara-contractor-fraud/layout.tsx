import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Niagara County Contractor Who Stole $230K in Deposits for Work He Never Did | CLRBLT',
  description: 'Nathaniel Wagner took $230K in deposits from Niagara County homeowners and did no work. He got 4-8 years in prison and owes $453,058 in restitution.',
  openGraph: {
    title: 'The Niagara County Contractor Who Stole $230K in Deposits for Work He Never Did',
    description: 'Nathaniel Wagner took $230K in deposits from Niagara County homeowners and did no work. He got 4-8 years in prison and owes $453,058 in restitution.',
    url: 'https://www.clrblt.com/articles/nathaniel-wagner-niagara-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
