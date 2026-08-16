import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Texas Contractor Who Defrauded Disaster Victims and FEMA Programs | CLRBLT',
  description: 'How a Texas contractor exploited FEMA disaster relief funds, leaving storm victims without repairs and defrauding federal recovery programs.',
  openGraph: {
    title: 'The Texas Contractor Who Defrauded Disaster Victims and FEMA Programs',
    description: 'How a Texas contractor exploited FEMA disaster relief funds, leaving storm victims without repairs and defrauding federal recovery programs.',
    url: 'https://www.clrblt.com/articles/brian-hardin-texas-fema-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
