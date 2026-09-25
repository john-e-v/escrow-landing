import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Pennsylvania Contractor Who Took Deposits Across Three Counties — Then Pleaded Guilty | CLRBLT',
  description: 'Pennsylvania contractor Merrill "Bud" Miller took homeowner deposits across three counties, pleaded guilty in York County, and faced AG action for over $108K.',
  openGraph: {
    title: 'The Pennsylvania Contractor Who Took Deposits Across Three Counties — Then Pleaded Guilty',
    description: 'Pennsylvania contractor Merrill "Bud" Miller took homeowner deposits across three counties, pleaded guilty in York County, and faced AG action for over $108K.',
    url: 'https://www.clrblt.com/articles/merrill-bud-miller-pennsylvania-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
