import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Delaware Pool Contractor Who Took Deposits From 13 Homeowners | CLRBLT',
  description: 'Delaware contractor Jeremy Bowen took deposits on 13 pool and home projects, then vanished. He owes ~$270K restitution to victims, many of them seniors.',
  openGraph: {
    title: 'The Delaware Pool Contractor Who Took Deposits From 13 Homeowners',
    description: 'Delaware contractor Jeremy Bowen took deposits on 13 pool and home projects, then vanished. He owes ~$270K restitution to victims, many of them seniors.',
    url: 'https://www.clrblt.com/articles/jeremy-bowen-delaware-pool-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
