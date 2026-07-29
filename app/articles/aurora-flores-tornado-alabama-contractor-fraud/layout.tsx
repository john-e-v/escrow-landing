import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roofing Contractor Charged With Defrauding Alabama Tornado Victims | CLRBLT',
  description: 'How storm-chasing roofers defrauded Alabama tornado victims of insurance deposits, leaving damaged homes unrepaired. Lessons on protecting your money.',
  openGraph: {
    title: 'Roofing Contractor Charged With Defrauding Alabama Tornado Victims',
    description: 'How storm-chasing roofers defrauded Alabama tornado victims of insurance deposits, leaving damaged homes unrepaired. Lessons on protecting your money.',
    url: 'https://www.clrblt.com/articles/aurora-flores-tornado-alabama-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
