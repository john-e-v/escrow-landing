import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unlicensed Contractors Swarmed California Wildfire Victims for Millions | CLRBLT',
  description: 'How unlicensed contractors exploited California wildfire victims with illegal deposits and shoddy work, and the CSLB stings that caught them.',
  openGraph: {
    title: 'Unlicensed Contractors Swarmed California Wildfire Victims for Millions',
    description: 'How unlicensed contractors exploited California wildfire victims with illegal deposits and shoddy work, and the CSLB stings that caught them.',
    url: 'https://www.clrblt.com/articles/california-wildfire-contractor-licensing-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
