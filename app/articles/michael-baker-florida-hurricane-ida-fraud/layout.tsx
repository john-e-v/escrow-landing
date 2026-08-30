import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Louisiana Contractor Whose FEMA Fraud Left Ida Victims Homeless | CLRBLT',
  description: 'A Louisiana contractor took Hurricane Ida disaster funds and deposits, leaving storm victims with unfinished repairs and empty bank accounts.',
  openGraph: {
    title: 'The Louisiana Contractor Whose FEMA Fraud Left Ida Victims Homeless',
    description: 'A Louisiana contractor took Hurricane Ida disaster funds and deposits, leaving storm victims with unfinished repairs and empty bank accounts.',
    url: 'https://www.clrblt.com/articles/michael-baker-florida-hurricane-ida-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
