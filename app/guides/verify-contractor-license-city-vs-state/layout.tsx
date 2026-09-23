import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'State License Isn\'t Enough: How to Check Your City\'s Contractor Requirements Too | CLRBLT',
  description: 'A state license won\'t protect you if your city requires separate local registration. Here\'s how to check both in 10 minutes before you hire.',
  openGraph: {
    title: 'State License Isn\'t Enough: How to Check Your City\'s Contractor Requirements Too',
    description: 'A state license won\'t protect you if your city requires separate local registration. Here\'s how to check both in 10 minutes before you hire.',
    url: 'https://www.clrblt.com/guides/verify-contractor-license-city-vs-state',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
