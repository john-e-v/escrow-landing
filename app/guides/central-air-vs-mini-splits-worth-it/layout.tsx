import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Are Ductless Mini-Splits Worth It vs. Central Air? Cost, ROI, and When Ducts Win | CLRBLT',
  description: 'It depends on existing ductwork: mini-splits run $3K-$8K per zone vs. $7K-$15K for central air. Here\'s the ROI math and when ducts still win.',
  openGraph: {
    title: 'Are Ductless Mini-Splits Worth It vs. Central Air? Cost, ROI, and When Ducts Win',
    description: 'It depends on existing ductwork: mini-splits run $3K-$8K per zone vs. $7K-$15K for central air. Here\'s the ROI math and when ducts still win.',
    url: 'https://www.clrblt.com/guides/central-air-vs-mini-splits-worth-it',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
