import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Verify a Contractor\'s Insurance Before You Let Them Start | CLRBLT',
  description: 'Call the insurer directly, request a COI listing you as certificate holder, and confirm coverage is active. Here\'s how to verify a contractor\'s insurance in minutes.',
  openGraph: {
    title: 'How to Verify a Contractor\'s Insurance Before You Let Them Start',
    description: 'Call the insurer directly, request a COI listing you as certificate holder, and confirm coverage is active. Here\'s how to verify a contractor\'s insurance in minutes.',
    url: 'https://www.clrblt.com/guides/verify-contractor-insurance-before-hiring',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
