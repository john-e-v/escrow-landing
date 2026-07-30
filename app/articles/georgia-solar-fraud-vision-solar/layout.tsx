import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Solar Company That Took Deposits and Left Panels Unconnected Across Georgia | CLRBLT',
  description: 'Vision Solar took deposits and financed loans from homeowners for solar panels that were never activated, drawing state investigations and lawsuits.',
  openGraph: {
    title: 'The Solar Company That Took Deposits and Left Panels Unconnected Across Georgia',
    description: 'Vision Solar took deposits and financed loans from homeowners for solar panels that were never activated, drawing state investigations and lawsuits.',
    url: 'https://www.clrblt.com/articles/georgia-solar-fraud-vision-solar',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
