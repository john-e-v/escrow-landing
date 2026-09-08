import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Contractor Charged With Defrauding Maui Wildfire Survivors | CLRBLT',
  description: 'How contractors targeted Maui wildfire survivors after the 2023 Lahaina fire with deposit fraud and unlicensed rebuilding schemes.',
  openGraph: {
    title: 'The Contractor Charged With Defrauding Maui Wildfire Survivors',
    description: 'How contractors targeted Maui wildfire survivors after the 2023 Lahaina fire with deposit fraud and unlicensed rebuilding schemes.',
    url: 'https://www.clrblt.com/articles/eric-forsberg-hawaii-lahaina-fire-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
