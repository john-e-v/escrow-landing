import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The FEMA Contractor Fraud Case That Rocked Tennessee Flood Victims | CLRBLT',
  description: 'How contractors defrauded Tennessee flood survivors after the deadly 2021 Waverly floods, taking rebuild payments and leaving homes unfinished.',
  openGraph: {
    title: 'The FEMA Contractor Fraud Case That Rocked Tennessee Flood Victims',
    description: 'How contractors defrauded Tennessee flood survivors after the deadly 2021 Waverly floods, taking rebuild payments and leaving homes unfinished.',
    url: 'https://www.clrblt.com/articles/chesley-cain-fema-fraud-tennessee',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
