import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Contractor Took Out a Load-Bearing Wall Without an Engineer. Now the Second Floor Sags. | CLRBLT',
  description: 'A missing structural engineer turned a $22K kitchen into a $58K repair. Why removing a load-bearing wall without a stamped plan wrecks budgets—and stops it.',
  openGraph: {
    title: 'Your Contractor Took Out a Load-Bearing Wall Without an Engineer. Now the Second Floor Sags.',
    description: 'A missing structural engineer turned a $22K kitchen into a $58K repair. Why removing a load-bearing wall without a stamped plan wrecks budgets—and stops it.',
    url: 'https://www.clrblt.com/guides/contractor-demolished-load-bearing-wall-cost',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
