import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Check if a Contractor Is on Your State\'s Unlicensed or Barred List | CLRBLT',
  description: 'In 10 minutes you can confirm a contractor isn\'t on your state\'s cease-and-desist or barred-contractor list. Here\'s exactly where to search before you hire.',
  openGraph: {
    title: 'How to Check if a Contractor Is on Your State\'s Unlicensed or Barred List',
    description: 'In 10 minutes you can confirm a contractor isn\'t on your state\'s cease-and-desist or barred-contractor list. Here\'s exactly where to search before you hire.',
    url: 'https://www.clrblt.com/guides/verify-contractor-not-blacklisted-registry',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
