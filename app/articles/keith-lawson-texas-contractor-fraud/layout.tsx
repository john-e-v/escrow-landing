import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Texas Contractor Who Took Over $800K From Homeowners in Pool and Remodel Deposits | CLRBLT',
  description: 'A North Texas contractor took over $800K in pool and remodel deposits, then vanished. How DFW homeowners were left with unfinished projects.',
  openGraph: {
    title: 'The Texas Contractor Who Took Over $800K From Homeowners in Pool and Remodel Deposits',
    description: 'A North Texas contractor took over $800K in pool and remodel deposits, then vanished. How DFW homeowners were left with unfinished projects.',
    url: 'https://www.clrblt.com/articles/keith-lawson-texas-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
