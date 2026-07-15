import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Idaho Contractor Who Took Homeowner Deposits and Left Homes Unfinished | CLRBLT',
  description: 'An Idaho contractor took deposits from homeowners and left projects unfinished, leading to criminal charges. How escrow protection could have prevented it.',
  openGraph: {
    title: 'The Idaho Contractor Who Took Homeowner Deposits and Left Homes Unfinished',
    description: 'An Idaho contractor took deposits from homeowners and left projects unfinished, leading to criminal charges. How escrow protection could have prevented it.',
    url: 'https://www.clrblt.com/articles/matthew-riffey-idaho-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
