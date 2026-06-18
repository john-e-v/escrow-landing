import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Austin Custom Home Builder Who Defrauded Clients of Millions | CLRBLT',
  description: 'How Austin builder Roman James Hidalgo took millions from homeowners for custom homes that were never finished, leading to felony theft charges.',
  openGraph: {
    title: 'The Austin Custom Home Builder Who Defrauded Clients of Millions',
    description: 'How Austin builder Roman James Hidalgo took millions from homeowners for custom homes that were never finished, leading to felony theft charges.',
    url: 'https://www.clrblt.com/articles/roman-james-builders-texas-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
