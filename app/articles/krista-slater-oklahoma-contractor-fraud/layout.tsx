import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Oklahoma Contractor Who Took Homeowner Deposits and Left Jobs Unfinished | CLRBLT',
  description: 'How an Oklahoma contractor collected deposits from homeowners, abandoned projects, and faced criminal charges for construction fraud.',
  openGraph: {
    title: 'The Oklahoma Contractor Who Took Homeowner Deposits and Left Jobs Unfinished',
    description: 'How an Oklahoma contractor collected deposits from homeowners, abandoned projects, and faced criminal charges for construction fraud.',
    url: 'https://www.clrblt.com/articles/krista-slater-oklahoma-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
