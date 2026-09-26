import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The NH Contractor Who Took $2.4M in Deposits — and Gambled It Away | CLRBLT',
  description: 'NH contractor Gerard Thibault took $2.4M from 23 homeowners, gambled it away, and got 10-30 years in prison. Here\'s how the scheme unfolded.',
  openGraph: {
    title: 'The NH Contractor Who Took $2.4M in Deposits — and Gambled It Away',
    description: 'NH contractor Gerard Thibault took $2.4M from 23 homeowners, gambled it away, and got 10-30 years in prison. Here\'s how the scheme unfolded.',
    url: 'https://www.clrblt.com/articles/gerard-thibault-new-hampshire-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
