import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Termination Clause That Lets You Walk Off a Bad Job (And Still Get Paid) | CLRBLT',
  description: 'The exact termination clause that lets a contractor exit a bad job and still collect for completed work. Copy-paste text plus the 3 triggers to include.',
  openGraph: {
    title: 'The Termination Clause That Lets You Walk Off a Bad Job (And Still Get Paid)',
    description: 'The exact termination clause that lets a contractor exit a bad job and still collect for completed work. Copy-paste text plus the 3 triggers to include.',
    url: 'https://www.clrblt.com/guides/termination-clause-protects-mid-job-exit',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
